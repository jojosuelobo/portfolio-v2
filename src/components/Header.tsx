"use client";

import Link from "next/link";
import { usePath } from "@/app/[locale]/hooks/usePath";

export const Header = () => {
    const general = 'text-slate-300';
    const current = 'text-RED font-bold';

    const { isCurrentPage } = usePath();

    return (
        <header className="flex justify-between items-center px-6 py-4 mb-5">
            <h2 className="text-RED font-bold">Josué Lobo</h2>
            <nav className="flex gap-6 items-center">
                <Link href="/" className={isCurrentPage('/') ? current : general}>Home</Link>

                <Link href="/">Blog</Link>

                <Link href="/recomendations" className={isCurrentPage('/recomendations') ? current : general}>Recomendações</Link>
            </nav>
        </header>
    );
};
