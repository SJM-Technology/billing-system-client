import { z } from "zod";
import { HttpResponse } from "../default_models";
import { IClient } from ".";

export const CreateClientSchema = z.object({
    name: z.string().min(5, "Informe pelo menos 5 caracteres"),
    email: z.string().email("Informe um e-mail válido").optional(),
    contact: z.string().refine(value => {
        const regex = /^\d{9}$/;
        return regex.test(value);
      },{ message: "Informe um número de telefone válido." }
    ),
});

export type createClientRequestData = z.infer<typeof CreateClientSchema>
export type ClientResponseData = HttpResponse<{ clients: IClient[] }>
export type OneClientResponseData = HttpResponse<{ client: IClient }>