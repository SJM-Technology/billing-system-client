import { useQuery } from "@tanstack/react-query";
import { SessionFn } from "./utils";

export function SessionHook() {
    const querySession = useQuery({
        queryKey: ["session.cache"],
        queryFn: SessionFn
    });

    return {
        ...querySession,
        data: querySession.data?.data.data
    };
}