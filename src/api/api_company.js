import axiosInstance from "./api_instance";

export const getCompany = () =>
    axiosInstance.get("company/").then((response) => response.data);