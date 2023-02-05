import axiosInstance from "./api_instance";

export const getStack = ({ queryKey }) =>
    axiosInstance.get(`stack/id/${queryKey[1]}`).then((response) => response.data);

export const getStacks = () =>
    axiosInstance.get(`stack/`).then((response) => response.data);