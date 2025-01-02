import { useMemo } from "react";

export function useInitials(fullName: string): string {
    return useMemo(() => {
        if (!fullName) return "";

        const nameParts = fullName.trim().split(" ");

        if (nameParts.length === 1) {
            return nameParts[0].slice(0, 2).toUpperCase();
        }

        const initials = nameParts.slice(0, 2).map(word => word[0]);
        return initials.join("").toUpperCase();
    }, [fullName]);
}
