export type IProduct = {
    id: string;
    name: string;
    price: number;
    type: "all" | "burguer" | "hotdog" | "drink" | "extra" | "dessert";
}