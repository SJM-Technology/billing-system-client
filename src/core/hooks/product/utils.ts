import { axios } from "@/core/lib/axios";
import { ProductResponseData } from "@/core/models/Product/FindProduct";
import { AxiosPromise } from "axios";

export const FindManyProductFn =  async (): AxiosPromise<ProductResponseData> => {
    const prods = await axios.get("/products?pagination=false");
    console.log(prods);
    
    return prods;
};