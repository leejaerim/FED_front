import axiosInstance from "./api_instance";

export const getJobs = () =>
    axiosInstance.get("emp/").then((response) => response.data);

export const getJob = ({ queryKey }) =>
    axiosInstance.get(`emp/id/${queryKey[1]}`).then((response) => response.data);