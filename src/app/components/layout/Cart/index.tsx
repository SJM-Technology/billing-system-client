import { Button } from "@/app/components/ui/button";
import { IconCopyPlus, IconShoppingCartCheck, IconBurger } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { IProduct } from "@/core/models/Product";
import { toast } from "react-toastify";
import { Trash2 } from "lucide-react";
import { ScrollArea } from "../../ui/scroll-area";

export const Cart = () => {
    const [cart, setCart] = useState<IProduct[]>([]);

    const fetchCart = (): IProduct[] => {
        const current_cart = localStorage.getItem("cart-billing-system");
        return current_cart ? JSON.parse(current_cart) : [];
    };


    const removeItemCart = (index: number) => {
        const parsedCart = fetchCart();
        const updatedCart = parsedCart.filter((_, idx) => idx !== index);
        localStorage.setItem("cart-billing-system", JSON.stringify(updatedCart));
    };

    const calculateSubtotal = () => {
        return cart.reduce((acc, product) => acc + product.price, 0);
    };
    const descont = 10;
    const calculateTotal = () => {
        return cart.reduce((acc, product) => acc + (product.price - (product.price * descont / 100)), 0);
    };

    const handleFinishOrder = () => {
        if (cart.length === 0) {
            return;
        }
        localStorage.setItem("cart-billing-system", JSON.stringify([]));
        setCart([]);
        toast.success("Pedido finalizado com sucesso");
    };

    useEffect(() => {
        const parsedCart = fetchCart();
        setCart(parsedCart);
    }, [cart]);

    const Subtotal = calculateSubtotal();
    const Total = calculateTotal();

    return (
        <div className="min-w-[300px] flex flex-col bg-white dark:bg-neutral-950">
            <div className="h-[70px] px-4 flex items-center justify-between bg-neutral-50 dark:bg-neutral-900">
                <div>
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">{"Unknown"}</span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        <span>Cliente</span>
                        <span> - </span>
                        <span>{(10020.34).toLocaleString("pt-AO", { style: "currency", currency: "AOA" })}</span>
                    </p>
                </div>
            </div>

            <div className="flex-1">
                <h1 className="text-lg font-semibold px-4 py-2 text-neutral-800 dark:text-white">Lista de Pedidos</h1>
                <ScrollArea className="h-[calc(100vh-70px-220px)]">
                    <div className="divide-y divide-neutral-100 dark:divide-neutral-900  space-y-4">
                        {cart.length > 0 ? (
                            cart.map((item, idx) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-4 py-2 px-4"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sacalinha-first text-white text-sm font-bold">
                                        {idx + 1}
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{item.name}</span>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-400">
                                            Preço: {item.price.toLocaleString("pt-AO", { style: "currency", currency: "AOA" })}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="group w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-red-100 dark:hover:bg-red-800 transition"
                                        onClick={() => removeItemCart(idx)}
                                    >
                                        <Trash2 className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:text-red-500" />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center gap-4 py-8 text-neutral-500 dark:text-neutral-400">
                                <IconBurger className="w-12 h-12 text-neutral-400 dark:text-neutral-500" />
                                <p className="text-sm">Nenhum item no carrinho</p>
                            </div>
                        )}
                    </div>
                </ScrollArea>
            </div>

            <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
                <div className="flex items-center justify-between px-4 py-2">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-100">Desconto</span>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                        <span>{descont}%</span>
                        <IconCopyPlus size={20} stroke={1.5} className="text-black dark:text-white" />
                    </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-100">Sub Total</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {Subtotal.toLocaleString("pt-AO", { style: "currency", currency: "AOA" })}
                    </span>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                    <span className="font-semibold text-neutral-800 dark:text-neutral-100">Total</span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {Total.toLocaleString("pt-AO", { style: "currency", currency: "AOA" })}
                    </span>
                </div>
            </div>

            <div className="h-14 px-4 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
                <Button
                    type="button"
                    disabled={cart.length === 0}
                    className="w-full py-3 justify-between text-white bg-sacalinha-first hover:bg-sacalinha-first-dark transition"
                    onClick={handleFinishOrder}
                >
                    <span>Finalizar Pedido</span>
                    <IconShoppingCartCheck size={20} stroke={1.5} />
                </Button>
            </div>
        </div>
    );
};
