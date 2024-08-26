"use client";

import Link from "next/link";
import { usePath } from "@/app/[locale]/hooks/usePath";

import Image from "next/image";
import linkedin from '@/svg/iconLinkedin.svg'
import github from '@/svg/iconGithub.svg'
import instagram from '@/svg/iconInstagram.svg'
import youtube from '@/svg/iconYoutube.svg'

export const Header = () => {
    const general = 'text-slate-300';
    const current = 'text-RED font-bold';

    const { isCurrentPage } = usePath();

    return (
        <header className="flex justify-between items-center px-6 py-4 mb-5">
            <h2 className="text-RED font-bold">Josué Lobo</h2>
            <nav className="flex gap-6 items-center p-2">
                <Link href="/" className={`${isCurrentPage('/') ? current : general}`}>
                    Home
                </Link>

                <Link href="/">
                    Blog
                </Link>

                <Link href="/recomendations" className={`${isCurrentPage('/recomendations') ? current : general}`}>
                    Recomendações
                </Link>
                <nav className="flex gap-4 items-center p-2">
                    <Link href="https://www.linkedin.com/in/jojosuelobo/" target="_blank">
                        <Image src={linkedin} alt="LinkedIn" />
                    </Link>

                    <Link href="https://github.com/jojosuelobo" target="_blank">
                        <Image src={github} alt="Github" />
                    </Link>

                    <Link href="https://www.instagram.com/jojosuelobo/" target="_blank">
                        <Image src={instagram} alt="Instagram" />
                    </Link>

                    <Link href="https://www.youtube.com/@jojosueloboYT" target="_blank">
                        <Image src={youtube} alt="Youtube" />
                    </Link>
                </nav>

            </nav>

        </header>
    );
};
