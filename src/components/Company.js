import {HStack, Text} from "@chakra-ui/react";
import {useQuery} from "@tanstack/react-query";
import {getCompany} from "../api/api_company";
import {Link} from "react-router-dom";
import {getJob} from "../api/api_jobs";

const Company =_=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoading, data } = useQuery(["company"], getCompany);
    return(
        <div>
            {!isLoading && data?.map((company)=>(
                <div key={company?.company_id}>
                    <HStack>
                        <img src={company?.logo} width={"10%"}></img>
                        <Link to={"/job/"+company?.emp_fk}>
                            <Text>
                                {company?.company_id} : {company?.company_name}
                            </Text>
                        </Link>
                    </HStack>

                </div>
            ))}
        </div>
    )
}
export default Company;