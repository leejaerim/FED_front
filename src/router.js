import {createBrowserRouter} from "react-router-dom";
import Home from "./routers/JobList";
import App from "./App";
import NotFound from "./routers/NotFound";
import Company from "./components/Company";
import React from "react";
import JobDetail from "./routers/JobDetail";
import JobList from "./routers/JobList";
import {Stack, Stacks} from "./components/Stack";
import CompanyDetail from "./components/CompanyDetail";
import AdminPage from "./routers/AdminPage";
import {Box} from "@chakra-ui/react";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement : <NotFound></NotFound>,
        children: [
            {
                path: "",
                element: <Company></Company>,
            },
            {
                path: "jobs/",
                element: <JobList></JobList>,
            },
            {
                path: "job/:jobid",
                element: <JobDetail></JobDetail>,
            },
            {
                path: "company/",
                element: <Company></Company>,
            },
            {
                path: "company/id/:company_id",
                element: <CompanyDetail></CompanyDetail>,
            },
            {
                path: "stack/",
                element: <Stacks></Stacks>,
            },
            {
                path: "stack/:stackid",
                element: <Stack></Stack>,
            },
        ],
    },
    {
        path:"/admin",
        element: <AdminPage/>,
        errorElement : <NotFound></NotFound>,
        children: [
            {
                path: "",
                element: <Box></Box>,
            },
            {
                path: "stack/",
                element: <Box></Box>,
            },
        ],
    },
]);
export default router;