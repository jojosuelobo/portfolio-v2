import Image from "next/image";
import profile from "@/images/profilePic.png";

export const Section = () => {
    return (
        <section className="flex items-center justify-center text-center gap-24 mt-12">
            <div className="max-w-lg">
                <div>
                    <h1 className="text-4xl font-bold text-red-500 text-left">
                        <span className="text-RED">Josué Lobo</span>, QA, desenvolvedor e analista de dados
                    </h1>
                    <p className="mt-10 mb-4 text-base text-left">
                        Apaixonado por tecnologia, especializado em qualidade de software e automação de testes. Com uma formação em Ciência da Computação, pós-graduação em análise de dados e machine learning e com certificação CTFL, tenho sólida experiência em testes manuais e automatizados, bem como em desenvolvimento web e análise de dados e automação web.
                    </p>
                </div>
                <div className="flex justify-start mt-16 space-x-12">
                    <button className="px-4 py-2 bg-RED rounded-lg ">
                        <p className="text-WHITE p-2 m-1"> Baixar currículo </p>
                    </button>
                    <button className="px-4 py-2 text-white rounded-lg border">
                        <p className="text-RED p-2 m-1"> Ultimos projetos </p>
                    </button>
                </div>
            </div>
            <Image src={profile} alt="profile picture" className="mt-4" />
        </section>
    )
}
