import {useQuery} from "@tanstack/react-query";
import {getStack} from "../api/api_stack";
import {Text} from "@chakra-ui/react";

const Stack =({stack_id})=>{
    const { isLoading, data } = useQuery([`stack`, stack_id], getStack);
    return(
        <img src={data?.img} width={"5%"}/>

    )
}
export default  Stack