import { useMutation } from "@tanstack/react-query";
import { setCookie } from "nookies";
import { SignInFn } from "./utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function SignInHook() {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: SignInFn,
        onSuccess({ data: Response }) {
          const token = Response?.data?.token ?? ""; 
          if (token) {
            setCookie(undefined, "billingsystem.sacalinha.token", token, {
              path: "/",
              maxAge: 60 * 60 * 24 * 30,
              sameSite: "lax",
              secure: false
            });
            toast.success(Response.message);
            navigate("/", { replace: true });
          } else {
            console.error("Token is missing");
            toast.error("Authentication failed");
          }
        },
        onError(error) {
          toast.error(error.message);
          throw new Error(error.message);
        }
      });
}