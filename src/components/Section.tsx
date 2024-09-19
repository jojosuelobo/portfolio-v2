import Image from "next/image";
import profile from "@/images/profilePic.png";

export const Section = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center text-center gap-12 md:gap-24 mt-12 p-4">
            {/* flex flex-col md:flex-row items-center justify-center text-center gap-12 md:gap-24 mt-12 p-4 h-screen */}
            <Image src={profile} alt="profile picture" className="rounded-full lg:hidden md:hidden w-auto h-auto"/>
            <div className="max-w-lg">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-left">
                        <span className="text-RED">Josué Lobo</span>, QA, desenvolvedor e analista de dados
                    </h1>
                    <p className="mt-6 md:mt-10 mb-4 text-base text-left">
                        Apaixonado por tecnologia, especializado emqualidade de software e automação de testes.
                        Com uma formação em Ciência da Computação pela Universidade Vila Velha (UVV)
                        e certificações como CTFL (Certified Tester Foundation Level) pela BSTQB,
                        trago consigo uma sólida experiência em testes manuais e automatizados, bem como em desenvolvimento web.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-start mt-8 md:mt-16 space-y-4 md:space-y-0 md:space-x-12">
                    <button className="px-4 py-2 bg-RED rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <p className="text-WHITE p-2 m-1 font-bold">Baixar currículo</p>
                    </button>
                    <button className="px-4 py-2 text-red-500 border border-RED rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                        <p className="p-2 m-1 font-bold text-RED">Últimos projetos</p>
                    </button>
                </div>
            </div>
            <Image src={profile} alt="profile picture" className="rounded-full hidden md:block" />
        </section>
    )
}
