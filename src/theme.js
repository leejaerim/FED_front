import {extendTheme} from "@chakra-ui/react";
const extend_Theme ={
    colors: {
        backgroundColor: "000000",
        main: "#235DC3",
        orange: "#FFA751",
        yellow: "#FFE259",
        black: "#000000",
        green: "#34BA05",
        white: "#FFFFFF",
        gray: "#DDDDDD",
    },
};
const theme = extendTheme({extend_Theme})

export default theme;