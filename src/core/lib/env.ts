import { z } from "zod";

const envSchames = z.object({
    VITE_BASEURL: z.string().url()
});

export const env = envSchames.parse(import.meta.env);