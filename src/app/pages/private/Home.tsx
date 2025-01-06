import { useSearchParams } from "react-router-dom";
import { Navigation } from "@/app/components/layout/Navigation";
import { products } from "@/core/static/product";
import { IProduct } from "@/core/models/Product";
import { NAV_LINK } from "@/core/static/nav-link";

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category");

    const allProducts = products.filter(product => {
        return category === product.type.toLowerCase();
    });

    const handleSearch = (category: string) => {
        const normalizedCategory = category.toLowerCase().split(" ").join("-");
        setSearchParams({ category: normalizedCategory });
    };

    const handleAddToCart = (product: IProduct) => {
        const currentCart = localStorage.getItem("cart-billing-system");
        const parsedCart = currentCart ? JSON.parse(currentCart) : [];

        parsedCart.push(product);
        localStorage.setItem("cart-billing-system", JSON.stringify(parsedCart));
    };

    return (
        <div className="flex-1 flex flex-col">
            <section className="flex-1 py-4 px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {category === "all" || !category ?
                        NAV_LINK.map((navlink) => navlink.category !== "all" && (
                            <div key={navlink.id} onClick={() => handleSearch(navlink.category)} className="divide-y border rounded-lg text-center shadow-sm hover:shadow-md transition overflow-hidden bg-white dark:bg-neutral-900 focus-visible:ring focus-visible:ring-sacalinha-first cursor-pointer hover:ring hover:ring-sacalinha-first">
                                <div className="h-32 bg-neutral-800">
                                    <img src={navlink.url} alt="" className="object-cover" />
                                </div>
                                <div className="px-4 py-2">
                                    {navlink.title}
                                </div>
                            </div>
                        )) : allProducts.length === 0 ? (
                            <p className="text-center text-neutral-500 col-span-4   ">Nenhum produto do tipo <strong>{category}</strong> encontrado.</p>
                        ) : allProducts.map(product => (
                            <div key={product.id} className="p-4 space-y-4 border rounded-lg text-center cursor-pointer shadow-sm hover:shadow-md transition overflow-hidden bg-white dark:bg-neutral-900 focus-visible:ring focus-visible:ring-sacalinha-first" onClick={() => handleAddToCart(product)}
                            >
                                <div>
                                    <span className="text-xs text-neutral-500">{product.type.toUpperCase()}</span>
                                </div>
                                <div>
                                    <span className="font-medium">{product.name}</span>
                                </div>
                                <p>{product.price.toLocaleString("pt-AO", { style: "currency", currency: "AOA" })}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <Navigation />
        </div>
    );
}
