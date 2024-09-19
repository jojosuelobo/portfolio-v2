'use client'

import { useState } from "react"; // Importa useState para controle do menu móvel
import Link from "next/link";
import { usePath } from "@/app/[locale]/hooks/usePath";
import Image from "next/image";
import linkedin from "@/svg/iconLinkedin.svg";
import github from "@/svg/iconGithub.svg";
import instagram from "@/svg/iconInstagram.svg";
import youtube from "@/svg/iconYoutube.svg";

import open from "@/svg/open.svg";
import close from "@/svg/close.svg";

export const Header = () => {
    const general = "text-black transition duration-300 ease-in-out transform hover:font-bold hover:scale-105 hover:rounded ";
    const current = "text-RED font-bold transition duration-300 ease-in-out transform hover:font-bold hover:scale-105 hover:rounded ";
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para controlar o menu móvel

    const { isCurrentPage } = usePath();

    return (

        <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 mb-5 bg-GRAY">
            <div className="flex justify-between w-full md:w-auto items-center">
                <h2 className="text-RED font-bold text-2xl px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                    <Link href="/">
                        Josué Lobo
                    </Link>
                </h2>
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <Image src={close} alt="Fechar" className="w-12 h-w-12"/> : <Image src={open} alt="Abrir" className="w-12 h-w-12"/>}
                </button>
            </div>

            <nav className={`flex-col md:flex-row flex ${isMobileMenuOpen ? "flex" : "hidden"} md:flex gap-6 items-center p-2 w-full md:w-auto`}>
                <Link href="/" className={`${isCurrentPage("/") || isCurrentPage("/en") ? current : general}`}>
                    Home
                </Link>

                <Link href="https://medium.com/@jojosuelobo" target="_blank" className={`${isCurrentPage("/blog") || isCurrentPage("/en/blog") ? current : general}`}>
                    Blog
                </Link>

                <Link href="/recomendations" className={`${isCurrentPage("/recomendations") || isCurrentPage("/en/recomendations") ? current : general}`}>
                    Recomendações
                </Link>

                <div className="flex gap-4 items-center p-2">
                    <Link href="https://www.linkedin.com/in/jojosuelobo/" target="_blank">
                        <Image src={linkedin} alt="LinkedIn" className="transition duration-300 ease-in-out transform hover:text-white hover:scale-105" />
                    </Link>

                    <Link href="https://github.com/jojosuelobo" target="_blank">
                        <Image src={github} alt="Github" className="transition duration-300 ease-in-out transform hover:text-white hover:scale-105" />
                    </Link>

                    <Link href="https://www.instagram.com/jojosuelobo/" target="_blank">
                        <Image src={instagram} alt="Instagram" className="transition duration-300 ease-in-out transform hover:text-white hover:scale-105" />
                    </Link>

                    <Link href="https://www.youtube.com/@jojosueloboYT" target="_blank">
                        <Image src={youtube} alt="Youtube" className="transition duration-300 ease-in-out transform hover:text-white hover:scale-105" />
                    </Link>
                </div>
                {/* <LanguageChanger /> */}
            </nav>
        </header>

    );
};