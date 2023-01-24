
import * as PropTypes from "prop-types";
import {FaAirbnb, FaReact} from "react-icons/fa";
import {Box, HStack, Icon, IconButton, Stack, useColorModeValue} from "@chakra-ui/react";
export default function Header() {
    return(
        <Stack
            justifyContent={"space-between"}
            px={"40"}
            py={"10"}
            borderBottomWidth={1}
            alignItems="center"
            direction={{
                sm: "column",
                md: "row",
            }}
            spacing={{
                sm: 3,
                md: 0,
            }}
        >
            <Box color={"blue"}>
                <FaReact size={"38"} />
            </Box>
        </Stack>
    )
}