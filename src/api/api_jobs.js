
import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    withCredentials: false,
});
export const getJobs = () =>
    axiosInstance.get("emp/").then((response) => response.data);