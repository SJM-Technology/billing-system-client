import { cn } from "@/core/lib/utils";
import { ElementType } from "react";

type NotificationsActionProps = React.HTMLAttributes<HTMLButtonElement>  & {
    icon: ElementType
}

export const NotificationsAction = ({ icon: Icon, className, ...rest }: NotificationsActionProps) => {
    return (
        <button {...rest} className={cn("group w-8 h-8 rounded flex items-center justify-center bg-slate-300 hover:bg-slate-400", className)}>
            <Icon className="w-3 h-3 text-zinc-600 group-hover:text-slate-100"/>
        </button>
    );
};