import { useParams } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getJob} from "../api/api_jobs";
import {Stack} from "../components/Stack";

const JobDetail =_=>{
    const {jobid} = useParams();
    const { isLoading, data:jobdata } = useQuery([`jobs`, jobid], getJob);
    return(
        <div>
            {!isLoading?
                <div>
                    제목 : {jobdata?.emp_title}<br/>
                    경력 : {jobdata?.creer}<br/>
                    등록 날짜 : {jobdata?.register_date}<br/>
                    마감 날짜 : {jobdata?.dead_line}<br/>
                    스택 :
                    {jobdata?.stack_fk.split(',').map((stack_id)=>(
                        <Stack key={stack_id} stack_id={stack_id}></Stack>
                    ))}
                </div>:''}
        </div>
    )
}
export default JobDetail;