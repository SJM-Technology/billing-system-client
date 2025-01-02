import { axios } from "@/core/lib/axios";
import { ProductResponseData } from "@/core/models/Product/FindProduct";
import { AxiosPromise } from "axios";

export const FindManyProductFn =  async (): AxiosPromise<ProductResponseData> => {
    return await axios.get("/products");
};