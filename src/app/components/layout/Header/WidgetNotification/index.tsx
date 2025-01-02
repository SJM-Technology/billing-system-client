import { ReactNode } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/app/components/ui/dropdown-menu";
import { WidgetNotificationContent } from "./WidgetNotificationContent";

type WidgetNotificationProps = {
    children: ReactNode
}

export const WidgetNotification = ({ children }: WidgetNotificationProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-0 rounded-lg">
                <WidgetNotificationContent 
                    isPending={false} 
                    isError={true} 
                    isRead={true} 
                    refetch={function (): void {
                        throw new Error("Function not implemented.");
                    }} 
                />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
