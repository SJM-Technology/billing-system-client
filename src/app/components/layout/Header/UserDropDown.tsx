import { useInitials } from "@/core/hooks/useInitials";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/app/components/ui/dropdown-menu";
import { IconLogout } from "@tabler/icons-react";
import { DROPDOWN_USER } from "@/core/static/dropdown-user";
import { Link } from "react-router-dom";
import { axios } from "@/core/lib/axios";
import { Skeleton } from "../../ui/skeleton";

type UserDropDownProps = {
    data: {
        avatar_url?: string;
        name?: string;
    }
}

export const UserDropDown = ({ data }: UserDropDownProps) => {
    const Logout = async () => {
        await axios.post("/logout");
        location.href = "/login";
    };
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {data.name ? (
                    <Avatar>
                        <AvatarImage src={data.avatar_url} />
                        <AvatarFallback className="bg-neutral-200 text-neutral-500 select-none">
                            {useInitials(data.name)}
                        </AvatarFallback>
                    </Avatar>
                ) : (
                    <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800">
                        <Skeleton className="w-full h-full rounded-full bg-neutral-200 dark:bg-neutral-700" />
                    </div>
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {DROPDOWN_USER.map(item => (
                        <DropdownMenuItem key={item.label}>
                            {item.href ? 
                                <Link to={item.href} className="flex items-center w-full">
                                    <item.icon className="mr-2 h-4 w-4" stroke={1.5} />
                                    <span>{item.label}</span>
                                </Link>
                                : 
                                <>
                                    <item.icon className="mr-2 h-4 w-4" stroke={1.5} />
                                    <span>{item.label}</span>
                                </>
                            }
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={Logout}>
                    <IconLogout className="mr-2 h-4 w-4" stroke={1.5} />
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
