Header responsivo

```typescript
"use client";

import { useState } from "react"; // Importa useState para controle do menu móvel
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

export const Header = ({ locale }) => {
  const general = "text-slate-300";
  const current = "text-RED font-bold";
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Estado para controlar o menu móvel

  const { isCurrentPage } = usePath();
  //const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 mb-5 bg-HeaderBG">
        <div className="flex justify-between w-full md:w-auto items-center">
          <h2 className="text-RED font-bold text-2xl">Josué Lobo</h2>
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <a>AAA</a> : <a>BBB</a>}
          </button>
        </div>

        <nav className={`flex-col md:flex-row flex ${isMobileMenuOpen ? "flex" : "hidden"} md:flex gap-6 items-center p-2 w-full md:w-auto`}>
          <Link href="/" className={`${isCurrentPage("/") || isCurrentPage("/en") ? current : general}`}>
           optionHome
          </Link>

          <Link href="/blog" className={`${isCurrentPage("/blog") || isCurrentPage("/en/blog") ? current : general}`}>
           optionBlog
          </Link>

          <Link href="/recomendations" className={`${isCurrentPage("/recomendations") || isCurrentPage("/en/recomendations") ? current : general}`}>
           optionRecomendations
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
          <LanguageChanger />
        </nav>
      </header>
    
  );
};
```