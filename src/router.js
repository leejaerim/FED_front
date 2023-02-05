import {createBrowserRouter} from "react-router-dom";
import Home from "./routers/JobList";
import App from "./App";
import NotFound from "./routers/NotFound";
import Company from "./components/Company";
import React from "react";
import JobDetail from "./routers/JobDetail";
import JobList from "./routers/JobList";
import {Stacks} from "./components/Stack";

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
                path: "stack/",
                element: <Stacks></Stacks>,
            },
        ],
    },
]);
export default router;