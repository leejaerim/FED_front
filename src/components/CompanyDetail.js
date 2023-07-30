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
    const type = {'LG':[],'FE':[],'BE':[],'DB':[],'MO':[],'DE':[],'CO':[],'UI':[]}
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
    if(!StackIsLoading){
        StackData.map(stack=>{
            type[stack.type].push(stack)
        })
    }
    const render = _ => {
        const items = []
        for (let key in type) {
            if(!type[key].length) continue;
            items.push(<Box>
                <Heading>{key}</Heading>
                <Text>총 {type[key].length} 개의 스택</Text>
                <Divider/>
                <Grid
                    mt={5}
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
                    {type[key].map((stack) => (
                        <Image borderRadius='full'
                               boxSize='70px' maxW='70px;' maxH='70px;' src={stack.img} alt={stack.stack_name}></Image>

                    ))}
                </Grid>
            </Box>)
        }
        return items
    }
    return (
        <Box>
            <HStack>
                <VStack>
                    <Image
                        objectFit='contain'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={data?.logo}
                        w={"100%"}
                        h={"100%"}
                    />
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
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
                    </Card>
                    <div id="map" style={{width: '100%', height: '20vh'}}/>
                </VStack>
                <Box>
                    {!StackIsLoading && render()}
                </Box>
            </HStack>

        </Box>
    )

}

export default CompanyDetail;