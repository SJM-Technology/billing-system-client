import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "@/app/pages/PublicLayout";
import Login from "@/app/pages/login";
import PrivateLayout from "./app/pages/private/layout";
import AccountProfile from "./app/pages/private/AccountProfile";
import Home from "./app/pages/private/Home";
import Settings from "./app/pages/private/Settings";
import Clients from "./app/pages/private/Clients";

export const Routers = createBrowserRouter([
	{
		element: <PublicLayout />,
		children: [
			{
				path: "/login",
                element: <Login />
			}
		]
	},
	{
        element: <PrivateLayout />,
		children: [
			{
				path: "/",
                element: <Home />
			},
			{
				path: "/account",
                element: <AccountProfile />
			},
			{
				path: "/settings",
                element: <Settings />
			},
			{
				path: "/clients",
                element: <Clients />
			},
		]
	}
]);
