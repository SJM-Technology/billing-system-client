import { ReactNode } from "react";

type NotificationsRootProps = {
    children: ReactNode
}

export const NotificationsRoot= ({ children }: NotificationsRootProps) => {
    return (
        <div className="px-8 py-4 flex items-start gap-6 bg-white">
            {children}
        </div>
    );
};