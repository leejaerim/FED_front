import {useQuery} from "@tanstack/react-query";
import {getStack, getStacks} from "../api/api_stack";
import {Grid, Text} from "@chakra-ui/react";
import { Card, ButtonGroup, Button, CardBody, CardFooter, Image, Heading, Divider} from '@chakra-ui/react'
const Stack =({stack_id})=>{
    const { isLoading, data } = useQuery([`stack`, stack_id], getStack);
    return(
        <img src={data?.img} width={"5%"}/>
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
                            <Button variant='solid' colorScheme='blue' width='160px;'>
                                View Detail
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            ))}
        </Grid>
    )
}
export {Stack, Stacks}