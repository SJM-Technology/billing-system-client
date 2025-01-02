import Axios from "axios";
import { env } from "@/core/lib/env";
import { parseCookies } from "nookies";

export const axios = Axios.create({
    baseURL: `${env.VITE_BASEURL}/api`
});

const { "billingsystem.sacalinha.token": token } = parseCookies();
axios.defaults.headers["Authorization"] = `Bearer ${token}`;