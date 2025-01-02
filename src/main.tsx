import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./core/lib/queryClient.ts";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "./app/components/ui/toaster.tsx";

import { Routers } from "./router.tsx";
import { ThemeProvider } from "./app/components/layout/theme/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Routers} />
        <ToastContainer />
        <Toaster></Toaster>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
