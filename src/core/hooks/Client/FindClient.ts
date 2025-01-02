import { useQuery } from "@tanstack/react-query";
import { findClientsFn } from "./utils";

export const FindClientHook = () => {
    const clientsQuery = useQuery({
        queryKey: ["clients"],
        queryFn: findClientsFn
    });

    return {
        ...clientsQuery,
        data: clientsQuery.data?.data.data.clients
    };
};