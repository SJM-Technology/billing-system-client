import { ReactNode } from "react";

type NotificationsActionsProps = {
    children: ReactNode
}

export const NotificationsActions = ({ children }: NotificationsActionsProps) => {
    return (
        <div className="flex gap-2 self-center">
            {children}
        </div>
    );
};