import { z } from "zod";

export const appearanceFormSchema = z.object({
    theme: z.enum(["light", "dark"], {
        required_error: "Por favor selecione um tema",
    })
});

export type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;