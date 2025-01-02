import { useSession } from "@/core/hooks/auth";
import { Navigate } from "react-router-dom";
import { Cart } from "@/app/components/layout/Cart";
import { Header } from "@/app/components/layout/Header";
import { Outlet } from "react-router-dom";
import { SelectclientProvider } from "@/core/context/selectclient/selectclientProvider";
import { GenereteRefreshToken } from "@/core/hooks/auth/refreshtoken";

export default function PrivateLayout() {
    const { data: loggedUser, isPending } = useSession();

    /*   if (isPending) return <div>...loading</div>;
      else if (!loggedUser) return <Navigate to="/login" replace />; */
      const genereteRefreshToken = new GenereteRefreshToken();
      genereteRefreshToken.execute();

    return (
        <div className="h-screen flex divide-x-1 divide-neutral-500">
            <div className="flex-1 flex flex-col">
                <Header />
                <Outlet />
            </div>
            <SelectclientProvider>
                <Cart />
            </SelectclientProvider>
        </div>
    );
}