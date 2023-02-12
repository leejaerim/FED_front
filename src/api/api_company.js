import axiosInstance from "./api_instance";

export const getCompany = () =>
    axiosInstance.get("company/").then((response) => response.data);

export const getCompany_by_id = ({ queryKey }) =>
    axiosInstance.get(`company/id/${queryKey[1]}`).then((response) => response.data);

export const getStack_by_id = ({ queryKey }) =>
    axiosInstance.get(`company/id/${queryKey[1]}/stack`).then((response) => response.data);