import {Box, Text, useTheme} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Job(prop){
    const theme = useTheme();

    return (
        <li>
            <Link to={"/job/"+prop?.target.emp_id}>
                <Box backgroundColor={theme.extend_Theme.colors.white} mb={"10px"} color={theme.extend_Theme.colors.main}>
                    {prop?.target.emp_id} : {prop?.target.emp_title}
                </Box>
            </Link>
        </li>
    )
}