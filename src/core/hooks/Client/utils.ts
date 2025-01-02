import { axios } from "@/core/lib/axios";
import { ClientResponseData, OneClientResponseData } from "@/core/models/Client/createClient";
import { AxiosPromise } from "axios";

export const findClientsFn = async (): AxiosPromise<ClientResponseData> => {
    return await axios.get("/clients");
};

export const findOneClientsFn = async (clientId: number): AxiosPromise<OneClientResponseData> => {
    return await axios.get(`/clients/${clientId}`);
};

export const createClientFn = async () => {
    
};
export const destroyClientFn = async () => {
    
};
export const updateClientFn = async () => {
    
};