import {Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Job(prop){
    return (
        <li>
            <Link to={"/job/"+prop?.target.emp_id}>
                <Text>
                    {prop?.target.emp_id} : {prop?.target.emp_title}
                </Text>
            </Link>
        </li>
    )
}