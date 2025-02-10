import { useQuery } from "@tanstack/react-query";
import { FindManyProductFn } from "./utils";

export const useFindProduct = () => {
    const usersQuery = useQuery({
        queryKey: ["products"],
        queryFn: FindManyProductFn,
    });
    console.log(usersQuery.data?.data.data);
    return {
        ...usersQuery,
        data: usersQuery.data?.data.data
    };
};