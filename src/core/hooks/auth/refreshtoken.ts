import { jwtDecode } from "jwt-decode";
import { parseCookies } from "nookies";

export class GenereteRefreshToken {
    async execute() {
        // pegar o token
        const { "billingsystem.sacalinha.token": token } = parseCookies();
        const decoded = jwtDecode(token);

        console.log(decoded);

        // analizar data de expiração do token 
        // se expirou solicite um novo token a api
        // se não retornar o token redicione para o login
    }
}