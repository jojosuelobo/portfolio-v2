import Image from "next/image";
import profile from "@/images/profilePic.png";

export const Section = () => {
    return (
        <section>
            <div>
                <div>
                    <h1>Josué Lobo, QA, desenvolvedor e analista de dados</h1>
                    <p>Apaixonado por tecnologia, especializado em qualidade de software e automação de testes. Com uma formação em Ciência da Computação, pós graduação em análise de dados e machine learning e com certificação CTFL, tenho sólida experiência em testes manuais e automatizados, bem como em desenvolvimento web e análise de dados e automação web </p>
                </div>
                <div>
                    <button>BAIXAR CURRICULO</button>
                    <button>ULTIMOS PROJETOS</button>
                </div>
            </div>
            <Image src={profile} alt="profile picture"/>
        </section>
    )
}