"use client";

import initTranslations from "@/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import LanguageChanger from "@/components/LanguageChanger";
import Link from "next/link";
import { usePath } from "@/app/[locale]/hooks/usePath";
import Image from "next/image";
import linkedin from "@/svg/iconLinkedin.svg";
import github from "@/svg/iconGithub.svg";
import instagram from "@/svg/iconInstagram.svg";
import youtube from "@/svg/iconYoutube.svg";

const i18nNamespaces = ["header"];

export const Header = async ({ locale } : { locale: any }) => {
    const general = 'text-slate-300';
    const current = 'text-RED font-bold';

    const { isCurrentPage } = usePath();
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
            <header className="flex justify-between items-center px-6 py-4 mb-5 bg-HeaderBG">
                <h2 className="text-RED font-bold text-2xl">Josué Lobo</h2>
                <nav className="flex gap-6 items-center p-2">
                    <Link href="/" className={`${isCurrentPage('/') || isCurrentPage('/en') ? current : general}`}>
                        {t("optionHome")}
                    </Link>

                    <Link href="/" className={`${isCurrentPage('/blog') || isCurrentPage('/en/blog') ? current : general}`}>
                        {t("optionBlog")}
                    </Link>

                    <Link href="/recomendations" className={`${isCurrentPage('/recomendations') || isCurrentPage('/en/recomendations') ? current : general}`}>
                        {t("optionRecomendations")}
                    </Link>
                    <div className="flex gap-4 items-center p-2">
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
                    </div>
                    <LanguageChanger/>
                </nav>
            </header>
        </TranslationsProvider>
    );
};
