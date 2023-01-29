
import * as PropTypes from "prop-types";
import {FaAirbnb, FaReact} from "react-icons/fa";
import {HStack, Text, Stack, useTheme} from "@chakra-ui/react";
import React from "react";
export default function Header(props) {
    const theme = useTheme();
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
            <HStack color={theme.extend_Theme.colors.main} fontSize={50} fontWeight={'bold'}>
                <FaReact size={"38"} style={{paddingRight:10}}/>
                <Text>
                FED
                </Text>
            </HStack>
        </Stack>
    )
}