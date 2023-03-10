import {getCompany_by_id, getStack_by_id} from "../api/api_company";
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Grid,
    Heading, HStack,
    Image,
    Stack,
    Text,
    VStack
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {FaGlobe, FaLocationArrow, FaSearchLocation} from "react-icons/fa";
const {kakao} = window;
const CompanyDetail=()=>{
    const {company_id} = useParams();
    const { isLoading, data } = useQuery([`company_id`,company_id], getCompany_by_id);
    const { isLoading:StackIsLoading, data:StackData } = useQuery([`company_stack`,company_id], getStack_by_id);
    const geocoder = new kakao.maps.services.Geocoder();

    const callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            const container = document.getElementById('map');
            const coord = new kakao.maps.LatLng(result[0].y,result[0].x)
            const options = {
                center: coord,
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
            const marker = new kakao.maps.Marker({
                position: coord
            });
            marker.setMap(map);
        }
    };
    if(!isLoading){
        geocoder.addressSearch(data.location, callback);
    }
    console.log(data)
    return (
        <Box>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='contain'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={data?.logo}
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{data?.company_name}</Heading>
                        <HStack>
                        <FaGlobe></FaGlobe>
                        <Text py='2'>
                             {data?.country}
                        </Text>
                        </HStack>
                        <HStack>
                            <FaLocationArrow></FaLocationArrow>
                            <Text>{data?.location}</Text>
                        </HStack>
                    </CardBody>
                </Stack>
                <div id="map" style={{width: '20vw', height: '20vh'}}/>

            </Card>
                <Box>
                    <Heading>Stack</Heading>
                    {!StackIsLoading ? <Text>??? {StackData.length} ?????? ??????</Text> : ''}
                    <Divider/>
                    <Grid
                        mt={10}
                        px={{base: 10, lg: 10}}
                        columnGap={8}
                        rowGap={3}
                        templateColumns={{
                            sm: "1fr",
                            md: "1fr 1fr",
                            lg: "repeat(8, 1fr)",
                            xl: "repeat(10, 1fr)",
                        }}
                    >
                    {!StackIsLoading && StackData.map((stack)=>(
                        <Image borderRadius='full'
                               boxSize='70px' maxW='70px;' maxH='70px;' src={stack.img} alt={stack.stack_name}></Image>

                    ))}
                    </Grid>
                </Box>
        </Box>
    )

}

export default CompanyDetail;