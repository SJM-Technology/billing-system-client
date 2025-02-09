import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/app/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { appearanceFormSchema, AppearanceFormValues } from "@/core/models/theme.model";
import { useTheme } from "./theme-provider";

const defaultValues: Partial<AppearanceFormValues> = {
    theme: "light",
};

export function ThemeAprenceForm() {
    const { theme, setTheme } = useTheme();
    const form = useForm<AppearanceFormValues>({
        resolver: zodResolver(appearanceFormSchema),
        defaultValues,
    });

    const onSubmit = (data: AppearanceFormValues) => {
        setTheme(data.theme);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-2">
                <FormField
                    control={form.control}
                    name="theme"
                    render={({ field }) => (
                        <FormItem className="space-y-1">
                            <FormLabel>Aparência</FormLabel>
                            <FormDescription>
                                Seleciona um para para o seu dashboard
                            </FormDescription>
                            <FormMessage />
                            <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                defaultChecked={field.value === theme}
                                className="grid max-w-md grid-cols-2 gap-8 pt-2"
                            >
                                <FormItem>
                                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                                        <FormControl>
                                            <RadioGroupItem value="light" className="sr-only" />
                                        </FormControl>
                                        <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                                            <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                                                <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                                                    <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                                                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                                                </div>
                                                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                                                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                                                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                                                </div>
                                                <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                                                    <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                                                    <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="block w-full p-2 text-center font-normal">
                                            Light
                                        </span>
                                    </FormLabel>
                                </FormItem>
                                <FormItem>
                                    <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                                        <FormControl>
                                            <RadioGroupItem value="dark" className="sr-only" />
                                        </FormControl>
                                        <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                                            <div className="space-y-2 rounded-sm bg-neutral-950 p-2">
                                                <div className="space-y-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                                                    <div className="h-2 w-[80px] rounded-lg bg-neutral-400" />
                                                    <div className="h-2 w-[100px] rounded-lg bg-neutral-400" />
                                                </div>
                                                <div className="flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                                                    <div className="h-4 w-4 rounded-full bg-neutral-400" />
                                                    <div className="h-2 w-[100px] rounded-lg bg-neutral-400" />
                                                </div>
                                                <div className="flex items-center space-x-2 rounded-md bg-neutral-800 p-2 shadow-sm">
                                                    <div className="h-4 w-4 rounded-full bg-neutral-400" />
                                                    <div className="h-2 w-[100px] rounded-lg bg-neutral-400" />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="block w-full p-2 text-center font-normal">
                                            Dark
                                        </span>
                                    </FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormItem>
                    )}
                />
                <div className="flex items-center justify-end">
                    <Button type="submit">Guardar alterações</Button>
                </div>
            </form>
        </Form>
    );
}
