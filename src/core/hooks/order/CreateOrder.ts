import { useMutation } from "@tanstack/react-query";
import { CreateOrderFn } from "./utils";


export function OrderHook() {

    return useMutation({
        mutationFn: CreateOrderFn,
      });
}