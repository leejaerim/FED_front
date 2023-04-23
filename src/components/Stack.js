import {useQuery} from "@tanstack/react-query";
import {getCompanyFromStack, getStack, getStacks} from "../api/api_stack";
import {Box, CardHeader, Grid, HStack, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import { Card, ButtonGroup, Button, CardBody, CardFooter, Image, Heading, Divider} from '@chakra-ui/react'
import {Link, useParams} from "react-router-dom";
import React, {useState} from "react";
import Pagination from "./Pagination";
const Stack =()=>{
    const {stackid} = useParams();
    const { isLoading, data } = useQuery([`stack`, stackid], getStack);
    const { isLoading:StackIsLoading, data:StackCompany } = useQuery([`stackCompany`, stackid], getCompanyFromStack);
    console.log(data)
    return(
        <Box>
            {!isLoading && data ?
                <Box>
                <HStack justifyContent={'center'}>
                    <Image maxH={'120px;'} maxW={'120px;'} src={data[0].img}></Image>
                    <VStack>
                    <Heading>{data[0].stack_name}</Heading>
                        <Text>{data[0].description}</Text>
                    </VStack>
                </HStack>
                <Divider mt={'10px;'}/>
                </Box>
                : ''}
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                {!StackIsLoading && StackCompany.map((company)=>(
                    <Link key={company?.company_id} to={"/company/id/"+company?.company_id}>
                        <Card>
                            <CardHeader>
                                <Heading fontSize={'min(1.0vw,30px)'} size='md' textAlign={'center'}>{company.company_name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Image margin={"auto"} borderRadius='full'
                                       boxSize='150px' maxW='200px;' maxH='200px;' src={company.logo} alt={company.company_name}></Image>
                            </CardBody>
                            <CardFooter>
                                <Button margin={"auto"} colorScheme={"twitter"}>View here</Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </SimpleGrid>
        </Box>
    )
}
const Stacks =()=>{
    const [page, setPage] = useState(1);
    const { isLoading, data, refetch } = useQuery([`stacks`,page], getStacks);
    const change_page =(index)=>{
        setPage(index);
        refetch();
    }
    return(
        <Box>
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
                {!isLoading && data?.row?.map((stack) => (
                    <Card maxW='200px;' key={stack.stack_id}>
                        <CardBody>
                            <Image
                                src={stack.img}
                                alt={stack.description}
                                borderRadius='lg'
                            />
                        </CardBody>
                        <Divider/>
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Link to={'/stack/' + stack.stack_id}>
                                    <Button variant='solid' colorScheme='blue' width='160px;'>
                                        View Detail
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                ))}

            </Grid>

            {!isLoading && <Pagination page={page} total={data?.total} change_page={change_page} limit={9}/>}
        </Box>
    )
}
export {Stack, Stacks}