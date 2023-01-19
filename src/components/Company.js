import {Text} from "@chakra-ui/react";
import {useQuery} from "@tanstack/react-query";
import {getCompany} from "../api/api_company";

const Company =_=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isLoading, data } = useQuery(["company"], getCompany);
    console.log(data)
    return(
        <div>
            {!isLoading && data?.map((company)=>(
                <div>
                    <Text>
                        {company?.company_id} : {company?.company_name}
                    </Text>
                </div>
            ))}
        </div>
    )
}
export default Company;