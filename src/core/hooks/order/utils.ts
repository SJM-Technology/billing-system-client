import { axios } from "@/core/lib/axios";
import { OrderType } from "@/core/models/order.model";

export const CreateOrderFn =  async (data: OrderType) => {
    return await axios.post("/order", data);
};