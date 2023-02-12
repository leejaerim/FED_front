import {HStack, Text, useTheme} from "@chakra-ui/react";
import {useQuery} from "@tanstack/react-query";
import {getCompany} from "../api/api_company";
import {Link} from "react-router-dom";
import { Card, ButtonGroup, Button, CardBody, CardFooter, Image, Stack, Heading, Divider} from '@chakra-ui/react'
import {FaLocationArrow, FaGlobe} from "react-icons/fa";

const Company =_=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoading, data } = useQuery(["company"], getCompany);
    const theme = useTheme();
    return(
        <div>
            {!isLoading && data?.map((company)=>(
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    maxH={{ base: '100%;', sm: '120px;' }}
                    overflow='hidden'
                    variant='outline'
                    key={company.company_id}
                >
                    <Image
                        objectFit='contain'
                        maxH={{ base: '100%;', sm: '120px;' }}
                        maxW={{ base: '100%;', sm: '120px;' }}
                        src={company.logo}
                        alt={company.company_name + '\'s logo'}
                    />

                    <Stack>
                        <CardBody>
                            <Link to={"/company/id/"+company?.company_id}>
                                <Heading size='md'>{company.company_name}</Heading>
                            </Link>
                                <HStack><FaGlobe /> <Text py='2'> {company.country} </Text></HStack>
                                <HStack><FaLocationArrow/><Text py='2'> {company.location}</Text></HStack>
                        </CardBody>
                        {/*<CardFooter>*/}
                        {/*    <Button variant='solid' colorScheme='blue'>*/}
                        {/*        View Stack*/}
                        {/*    </Button>*/}
                        {/*</CardFooter>*/}
                    </Stack>
                </Card>
            ))}
        </div>
    )
}
export default Company;