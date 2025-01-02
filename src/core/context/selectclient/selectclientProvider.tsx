import { ReactNode, useState } from "react";
import { SelectclientContext } from "./selectclientContext";

type SelectclientProviderProps = {
    children: ReactNode
}

export const SelectclientProvider = ({ children }: SelectclientProviderProps) => {
    const [value, setValue] = useState("");
    const onChangeValue = (newValue: string) => {
        setValue(newValue);
    };

    return (
        <SelectclientContext.Provider value={{ value, onChangeValue }}>
            {children}
        </SelectclientContext.Provider>
    );
};
