import Image from "next/image";

import initTranslations from "@/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import LanguageChanger from "@/components/LanguageChanger";

const i18nNamespaces = ["home"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
        <h1>{t("titulo")}</h1>
        
        <LanguageChanger/>
      </TranslationsProvider>
    </>
  );
}
