import {getJobs} from "../api/api_jobs";
import {useQuery} from "@tanstack/react-query";
import Job from "../components/Job";

export default function Home(){
    const { isLoading, data } = useQuery(["jobs"], getJobs);
    return (
        <div>
            <ul>
            {!isLoading && data?.map((emp)=>(
                    <Job key={emp?.emp_id} target={emp}>
                    </Job>
            ))}
            </ul>
        </div>
    )
}