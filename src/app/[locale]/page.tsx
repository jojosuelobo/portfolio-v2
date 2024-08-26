import Image from "next/image";

import initTranslations from "@/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import LanguageChanger from "@/components/LanguageChanger";

import { Header } from "@/components/Header";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } } : { params: { locale: any } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
        <Header locale={ locale }/>
        
      </TranslationsProvider>
    </>
  );
}
