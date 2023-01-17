import {getJobs} from "../api/api_jobs";
import {useQuery} from "@tanstack/react-query";
import Job from "../components/Job";

export default function Home(){
    const { isLoading, data } = useQuery(["jobs"], getJobs);
    console.log(data)
    return (
        <div>
            {data?.map((room)=>(
                <Job target={room}>
                </Job>
            ))}
        </div>
    )
}