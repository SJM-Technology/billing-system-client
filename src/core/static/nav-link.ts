import { v4 as randomUUID } from "uuid";

export type INavLink = {
    id: string;
    title: string;
    url: string;
    category: "all" | "hamburguer" | "hotdog" | "drink" | "extra" | "dessert";
}
export const NAV_LINK: INavLink[] = [
    {
        id: randomUUID(),
        title: "Todas as categorias",
        category: "all",
        url: ""
    },
    {
        id: randomUUID(),
        title: "Hamburguer",
        category: "hamburguer",
        url: ""
    },
    {
        id: randomUUID(),
        title: "Cachorro",
        category: "hotdog",
        url: ""
    },
    {
        id: randomUUID(),
        title: "Bebidas",
        category: "drink",
        url: ""
    },
    {
        id: randomUUID(),
        title: "Sobremesas",
        category: "dessert",
        url: ""
    },
    {
        id: randomUUID(),
        title: "Extra",
        category: "extra",
        url: ""
    }
];