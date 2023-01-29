import {Button, HStack, Stack, Text, useTheme} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";

const Pagination =({total = 1, limit = 20, change_page})=>{
    const theme = useTheme();
    var range = [...Array(parseInt(total/limit)+1)].map((v,i) => i+1);
    const test =({target})=>{
        change_page(parseInt(target.textContent))
    }
    return(
        <Stack spacing={4} direction='row' align='center'>
            {range.map((index)=>(
                <Button key={index} size='xs' backgroundColor={theme.extend_Theme.colors.main} color={theme.colors.white} onClick={test}>{index}</Button>
            ))}
        </Stack>
    )
}

export default Pagination