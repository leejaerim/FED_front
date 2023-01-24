import { useParams } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getJob} from "../api/api_jobs";

const JobDetail =_=>{
    const {jobid} = useParams();
    const { isLoading, data } = useQuery([`jobs`, jobid], getJob);
    return(
        <div>
            {!isLoading?
                <div>
                    제목 : {data?.emp_title}<br/>
                    경력 : {data?.creer}<br/>
                    등록 날짜 : {data?.register_date}<br/>
                    마감 날짜 : {data?.dead_line}<br/>
                </div>:''}
        </div>
    )
}
export default JobDetail;