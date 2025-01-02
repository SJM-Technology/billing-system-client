import { useState } from "react";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandList,
} from "@/app/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/app/components/ui/popover";
import { useFindClients } from "@/core/hooks/Client";
import { ComboboxItem } from "./ComboboxItem";
 
type ComboboxProps = {
    children: React.ReactNode
}


export function Combobox({ children }: ComboboxProps) {
    const [open, setOpen] = useState(false);

    const { data: clients } = useFindClients();
  
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div role="combobox" aria-expanded={open}>
                    {children}
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Pesquisar cliente..." />
                    <CommandList>
                        <CommandEmpty>Nenhum cliente encontrado.</CommandEmpty>
                        <CommandGroup>
                            {clients?.map((client) => (
                                <ComboboxItem 
                                    key={client.nome.split(" ").join("-").toLowerCase()} 
                                    data={client}
                                    onCloseCommand={setOpen}
                                />
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}