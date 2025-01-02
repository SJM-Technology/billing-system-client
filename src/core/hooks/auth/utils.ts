import { axios } from "@/core/lib/axios";
import { SessionResponseData, SignInRequestData, SignInResponseData } from "@/core/models/auth";
import { AxiosPromise } from "axios";

export const SignInFn = async (data: SignInRequestData): AxiosPromise<SignInResponseData> => {
    return await axios.post<SignInResponseData>("/login", data);
};

export const SessionFn = async (): AxiosPromise<SessionResponseData> => {
    return await axios.post("/validate");
};
