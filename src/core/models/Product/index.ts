export type IProduct = {
    id: string;
    name: string;
    price: number;
    category: "all" | "hamburguer" | "cachorro" | "bebidas" | "extra" | "sobremesa";
}

export type IOrderProducts = IProduct & {
    quantity: number
}