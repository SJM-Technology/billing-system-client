import { IconCreditCard, IconSettings, IconUsers, IconUserSquareRounded } from "@tabler/icons-react";
import { ElementType } from "react";

type dropdownUser = {
    icon: ElementType;
    label: string;
    href: string | null;
}

export const DROPDOWN_USER: dropdownUser[] = [
    {
        icon: IconUserSquareRounded,
        label: "Perfil",
        href: "/account"
    },
    {
        icon: IconCreditCard,
        label: "Faturamento",
        href: null
    },
    {
        icon: IconSettings,
        label: "Configurações",
        href: "/settings"
    },
    {
        icon: IconUsers,
        label: "Nossos Clientes",
        href: "/clients"
    },
];