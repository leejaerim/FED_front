import {getCompany_by_id, getStack_by_id} from "../api/api_company";
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {Box, Grid, Heading, Image} from "@chakra-ui/react";
import {useEffect} from "react";
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
    return (
        <Box>
                <Box>
                    <img src={data?.logo}></img>
                    <Heading>{data?.company_name}</Heading>
                    <li>
                        location : {data?.country}
                    </li>
                    <div id="map" style={{width: '40vw', height: '40vh'}}/>
                    <Grid
                        mt={10}
                        px={{base: 10, lg: 10}}
                        columnGap={8}
                        rowGap={3}
                        templateColumns={{
                            sm: "1fr",
                            md: "1fr 1fr",
                            lg: "repeat(3, 1fr)",
                            xl: "repeat(6, 1fr)",
                        }}
                    >
                    {!StackIsLoading && StackData.map((stack)=>(
                        <Image borderRadius='full'
                               boxSize='150px' maxW='200px;' maxH='200px;' src={stack.img} alt={stack.stack_name}></Image>

                    ))}
                    </Grid>
                </Box>
        </Box>
    )

}

export default CompanyDetail;