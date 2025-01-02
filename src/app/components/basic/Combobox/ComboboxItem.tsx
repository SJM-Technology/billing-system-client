import { Check } from "lucide-react";

import { cn } from "@/core/lib/utils";
import { IClient } from "@/core/models/Client";

import { CommandItem } from "@/app/components/ui/command";
import { useSelectclient } from "@/core/context/selectclient/selectclientContext";

type ComboboxItemProps = {
    data: IClient;
    onCloseCommand?: (status: boolean) => void
}

export const ComboboxItem = ({ data: client, onCloseCommand }: ComboboxItemProps) => {
    const { value, onChangeValue } = useSelectclient();
    const handleSeletect = (currentValue: string) => {
        onChangeValue(currentValue === value ? "" : currentValue);
        if (onCloseCommand) onCloseCommand(false);  
    };

    return (
        <CommandItem value={String(client.id)} onSelect={handleSeletect} >
            <Check className={cn("mr-2 h-4 w-4", value === String(client.id) ? "opacity-100" : "opacity-0")}/>
            {client.nome}
        </CommandItem>
    );
};
