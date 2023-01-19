import axiosInstance from "./api_instance";

export const getJobs = () =>
    axiosInstance.get("emp/").then((response) => response.data);