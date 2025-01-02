import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { FindManyProductFn } from "./utils";

export const useFindProduct = () => {
    const usersQuery = useQuery({
        queryKey: ["products"],
        queryFn: FindManyProductFn,
        placeholderData: keepPreviousData
    });

    return {
        ...usersQuery,
        data: usersQuery.data?.data.data.products
    };
};