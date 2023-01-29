import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ChakraProvider, ThemeProvider} from "@chakra-ui/react";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import theme from "./theme";
const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new QueryClient();

root.render(
    <ThemeProvider theme={theme}>
        <ChakraProvider>
            <QueryClientProvider client={client}>
                    <RouterProvider router={router} />
            </QueryClientProvider>
        </ChakraProvider>
    </ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
