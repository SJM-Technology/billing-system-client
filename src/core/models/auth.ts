import { z } from "zod";
import { HttpResponse } from "./default_models";

export const SignInSchema = z.object({
    email: z.string().email("Informe um email válido!").min(4, "Email com tamanho insuficiente."),
    password: z.string().min(4, "A password deve ter no minimo 4 caracteres."), 
});

export type SignInRequestData = z.infer<typeof SignInSchema>

export type SignInResponseData = HttpResponse<{token: string}>

type ISessionUser = {
    id: number
    name: string
    email: string
    roles: "ADMIN" | "SUPER_ADMIN" | "EMPLOYEE",
    avatarUrl?: string
}


export type SessionResponseData = HttpResponse<ISessionUser>