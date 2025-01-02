import { cn } from "@/core/lib/utils";

type LoaderProps = React.HTMLAttributes<HTMLDivElement>

export const Loader = ({ className, ...rest }: LoaderProps) => {
    return (
        <div className={cn("w-12 h-12 border-4 border-x-sacalinha-first/20 border-b-sacalinha-first/20 border-t-sacalinha-first animate-spin ease-linear rounded-full",
            className
        )} {...rest}/>
    );
};