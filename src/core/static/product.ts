import { v4 as randomUUID } from "uuid";
import { IProduct } from "../models/Product";
export const products: IProduct[] = [
    {
        type: "burguer",
        id: randomUUID(),
        name: "Mini-Hamburguer",
        price: 1400
    },
    {
        type: "burguer",
        id: randomUUID(),
        name: "Cheese Burguer",
        price: 2000
    },
    {
        type: "burguer",
        id: randomUUID(),
        name: "Cheese Salada",
        price: 2200
    },
    {
        type: "burguer",
        id: randomUUID(),
        name: "Cheese Bacon",
        price: 2400
    },
    {
        type: "burguer",
        id: randomUUID(),
        name: "Coleslaw Burguer",
        price: 2600
    },
    {
        type: "burguer",
        id: randomUUID(),
        name: "Double Burguer",
        price: 3000
    },
    {
        type: "hotdog",
        id: randomUUID(),
        name: "Cachorro de Bacon",
        price: 2400
    },
    {
        type: "hotdog",
        id: randomUUID(),
        name: "Cachorro Vinagrete",
        price: 2000
    },
];