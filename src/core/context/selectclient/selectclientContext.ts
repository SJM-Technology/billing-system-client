import { createContext, useContext } from "react";

type SelectclientContextProps = {
    value: string;
    onChangeValue: (newValue: string) => void;
}

export const SelectclientContext = createContext({} as SelectclientContextProps);
export const useSelectclient = () => useContext(SelectclientContext);