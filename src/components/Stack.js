import {useQuery} from "@tanstack/react-query";
import {getCompanyFromStack, getStack, getStacks} from "../api/api_stack";
import {Box, Grid, HStack, Text, VStack} from "@chakra-ui/react";
import { Card, ButtonGroup, Button, CardBody, CardFooter, Image, Heading, Divider} from '@chakra-ui/react'
import {Link, useParams} from "react-router-dom";
const Stack =()=>{
    const {stackid} = useParams();
    const { isLoading, data } = useQuery([`stack`, stackid], getStack);
    const { isLoading:StackIsLoading, data:StackCompany } = useQuery([`stackCompany`, stackid], getCompanyFromStack);
    return(
        <Box>
            {!isLoading ? <VStack>
                    <Image src={data[0]?.img}></Image><Heading>{data[0]?.stack_name}</Heading></VStack>
                : ''}
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
                {!StackIsLoading && StackCompany.map((company)=>(
                    <Link to={"/company/id/"+company?.company_id}>
                    <Image borderRadius='full'
                           boxSize='150px' maxW='200px;' maxH='200px;' src={company.logo} alt={company.company_name}></Image>
                    </Link>
                ))}
            </Grid>

        </Box>
    )
}
const Stacks =()=>{
    const { isLoading, data } = useQuery([`stacks`], getStacks);
    return(
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
            {data?.map((stack)=>(
                <Card maxW='200px;' key={stack.stack_id}>
                    <CardBody>
                        <Image
                            src={stack.img}
                            alt={stack.description}
                            borderRadius='lg'
                        />
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Link to={'/stack/'+stack.stack_id}>
                                <Button variant='solid' colorScheme='blue' width='160px;'>
                                    View Detail
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            ))}
        </Grid>
    )
}
export {Stack, Stacks}