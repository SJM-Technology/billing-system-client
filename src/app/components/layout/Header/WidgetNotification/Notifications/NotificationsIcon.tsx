import { cn } from "@/core/lib/utils";
import { ElementType } from "react";

type NotificationsIconProps = {
    icon: ElementType
    isRead: boolean,
    className?: React.HTMLAttributes<HTMLDivElement>["className"]
}

export const NotificationsIcon = ({ icon: Icon, isRead, className }: NotificationsIconProps) => {
    return (
        <Icon
            strokeWidth={!isRead ? 2 : 1.5} 
            className={cn(
                "w-6 h-6 text-sacalinha-first mt-2.5 relative fill-slate-100", 
                className
            )} 
        />
    );
};