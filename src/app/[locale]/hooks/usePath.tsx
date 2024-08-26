// https://www.youtube.com/watch?v=H_3jZOdMD_E
"use client";

import { usePathname } from "next/navigation";

export const usePath = () => {
    const pathname = usePathname();

    const isCurrentPage = (link: string) => {
        return link === pathname;
    };

    return { isCurrentPage };
};
