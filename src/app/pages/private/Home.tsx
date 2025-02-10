import { useSearchParams } from "react-router-dom";
import { Navigation } from "@/app/components/layout/Navigation";
import { IProduct } from "@/core/models/Product";
import { NAV_LINK } from "@/core/static/nav-link";
import { useFindProduct } from "@/core/hooks/product";

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: products } = useFindProduct();
    const category = searchParams.get("category");

    const allProducts = products?.filter(product => {
        return (category === "hotdog" ? "cachorro": category) === product.category.toLowerCase();
    });
    
    const handleSearch = (category: string) => {
        const normalizedCategory = category.toLowerCase().split(" ").join("-");
        setSearchParams({ category: normalizedCategory });
    };

    /* const handleAddToCart = (product: IProduct) => {
        const currentCart = localStorage.getItem("cart-billing-system");
        const parsedCart = currentCart ? JSON.parse(currentCart) : [];

        parsedCart.push(product);
        localStorage.setItem("cart-billing-system", JSON.stringify(parsedCart));
    }; */
    

    const handleAddToCart = (product: IProduct) => {
        const currentCart = localStorage.getItem("cart-billing-system");
        const parsedCart = currentCart ? JSON.parse(currentCart) : { 
            costumerName: "Unknow 2",
            costumerContact: "00000002",
            status: "pending",
            products: []
        };
        
        // Verifica se o produto já está no carrinho
        const existingProduct = parsedCart.products.find((item: { id: number; quantity: number }) => item.id ===  +product.id);
        
        if (existingProduct) {
            // Se existir, incrementa a quantidade
            existingProduct.quantity += 1;
        } else {
            // Se não existir, adiciona ao array
            parsedCart.products.push({...product, quantity: 1 });
        }
        
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
                        )) : allProducts?.length === 0 ? (
                            <p className="text-center text-neutral-500 col-span-4   ">Nenhum produto do tipo <strong>{category}</strong> encontrado.</p>
                        ) : allProducts?.map(product => (
                            <div key={product.id} className="p-4 space-y-4 border rounded-lg text-center cursor-pointer shadow-sm hover:shadow-md transition overflow-hidden bg-white dark:bg-neutral-900 focus-visible:ring focus-visible:ring-sacalinha-first" onClick={() => handleAddToCart(product)}
                            >
                                <div>
                                    <span className="text-xs text-neutral-500">{product.category.toUpperCase()}</span>
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
