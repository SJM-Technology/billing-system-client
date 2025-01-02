import { Link } from "react-router-dom";
import { UserDropDown } from "./UserDropDown";
import { IconBell } from "@tabler/icons-react";
import { WidgetNotification } from "./WidgetNotification";
import { useSession } from "@/core/hooks/auth";

export const Header = () => {
    const { data: loggedUser } = useSession();

    return (
        <header className="h-[70px] flex items-center bg-white dark:bg-neutral-950">
            <Link to="/">
                <div className="h-[70px] w-[70px] flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
                    <img src="/favicon.ico" alt="logo da sacalinha burger" className="w-10 h-10" />
                </div>
            </Link>
            <div className="flex-1 px-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-neutral-900 dark:text-white">Menu</h1>
                <div className="flex items-center gap-2">
                    <WidgetNotification>
                        <button
                            type="button"
                            className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-500 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800">
                            <IconBell size={20} stroke={1.5} />
                        </button>
                    </WidgetNotification>
                    <UserDropDown
                        data={{
                            avatar_url: loggedUser?.avatarUrl,
                            name: loggedUser?.name
                        }}
                    />
                </div>
            </div>
        </header>
    );
};
