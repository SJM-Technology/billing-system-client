export type OrderType = {
    costumerName: string;
    costumerContact: string;
    status: string;
    products: Product[];
  }
  
  export type Product = {
    id: number;
    quantity: number;
  }