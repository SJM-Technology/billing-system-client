import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { findOneClientsFn } from "./utils";

export const FindOneClientHook = (clientId: number) => {
    const clientQuery = useQuery({
        queryKey: ["clients", clientId],
        queryFn: () => findOneClientsFn(clientId),
        enabled: !!clientId,
        retry: true,
        placeholderData: keepPreviousData
    });

    return {
       ...clientQuery,
        data: clientQuery.data?.data.data.client
    };
};