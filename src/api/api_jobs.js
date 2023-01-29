import axiosInstance from "./api_instance";

export const getJobs = ({queryKey}) =>
    axiosInstance.get(`emp/${queryKey[1]}`).then((response) => response.data);

export const getJob = ({ queryKey }) =>
    axiosInstance.get(`emp/id/${queryKey[1]}`).then((response) => response.data);