import React from "react";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { FindMe } from "@/components/FindMe";

export default function Home() {
  //const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <>
      <Header />
      <Section />
      <Experience />
      <FindMe />
    </>
  );
}
