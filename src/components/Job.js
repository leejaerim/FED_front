import {Text} from "@chakra-ui/react";

export default function Job(prop){
    console.log(prop)
    return (
        <div>
            <Text>
                {prop?.target.emp_id} : {prop?.target.emp_title}
            </Text>
        </div>
    )
}