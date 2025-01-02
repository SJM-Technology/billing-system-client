import { cn } from "@/core/lib/utils";
import { NAV_LINK } from "@/core/static/nav-link";
import { useSearchParams } from "react-router-dom";

export const Navigation = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get("category") || "todas-as-categorias";

    const handleSearch = (category: string) => {
        const normalizedCategory = category.toLowerCase().split(" ").join("-");
        setSearchParams({ category: normalizedCategory });
    };

    return (
        <div className="h-14 px-4 bg-neutral-50 dark:bg-neutral-900">
            <nav className="h-full flex items-center gap-6 overflow-x-auto">
                {NAV_LINK.map((item, idx) => {
                    const normalizedItem = item.category.toLowerCase().split(" ").join("-");
                    const isActive = activeCategory === normalizedItem;

                    return (
                        <button
                            key={idx}
                            className={cn(
                                "relative h-full flex items-center justify-center px-4 text-sm font-medium transition",
                                "hover:text-sacalinha-first focus:outline-none",
                                isActive ? "text-sacalinha-first" : "text-neutral-700 dark:text-neutral-300"
                            )}
                            aria-current={isActive ? "page" : undefined}
                            onClick={() => handleSearch(item.category)}
                        >
                            <span
                                className={cn(
                                    "absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-all",
                                    isActive ? "bg-sacalinha-first" : "bg-transparent"
                                )}
                            />
                            {item.title}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};
