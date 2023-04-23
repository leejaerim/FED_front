import {getJobs} from "../api/api_jobs";
import {useQuery} from "@tanstack/react-query";
import Job from "../components/Job";
import React, {useState} from "react";
import {Button, Stack, useTheme} from "@chakra-ui/react";
import Pagination from "../components/Pagination";

export default function JobList(){
    const [page, setPage] = useState(1);
    const { isLoading, data, refetch } = useQuery([`jobs`, page], getJobs);
    const theme = useTheme();
    const change_page =(index)=>{
        setPage(index);
        refetch();
    }
    return (
        <div>
            <ul>
            {!isLoading && data.row?.map((emp)=>(
                    <Job key={emp?.emp_id} target={emp}>
                    </Job>
            ))}
            </ul>
            <Pagination total={data?.total} change_page={change_page} page={page} />
        </div>
    )
}