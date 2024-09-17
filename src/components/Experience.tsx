import Image from "next/image";
import softwareMind from '@/images/experienceImages/softwareMind.svg';
import octuspay from '@/images/experienceImages/octuspay.svg';
import etaure from '@/images/experienceImages/etaure.svg';
import conexos from '@/images/experienceImages/conexos.webp';

export const Experience = () => {
    return (
        <section className="flex w-screen h-screen">
            {/* Texto fixo da jornada */}
            <div className="w-1/2 flex flex-col justify-center items-center sticky top-0 h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Minha jornada como Dev</h1>
                <p className="text-lg text-center px-8">
                    Iniciei minha jornada profissional na VilaApps, onde tive meu primeiro contato com programação. Desde então, passei por várias empresas, aprimorando minhas habilidades e contribuindo para diversos projetos significativos.
                </p>
            </div>

            {/* Lista de empresas rolável */}
            <div className="w-1/2 overflow-y-auto h-screen">
                <ul className="py-8 p-6 m-12">
                    <li className="grid grid-cols-2 items-center px-8 mb-6 space-x-4">
                        <div className="flex items-center justify-center w-32 h-32">
                            <Image src={softwareMind} alt="softwareMind" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Software Mind</h2>
                            <h3 className="text-lg">QA Automation Engineer</h3>
                            <p className="text-sm">...</p>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 items-center px-8 mb-6 space-x-12">
                        <div>
                            <h2 className="text-2xl font-semibold">Octuspay</h2>
                            <h3 className="text-lg">Analista de QA</h3>
                            <p className="text-sm">
                                Desempenhei o papel de QA em uma startup, responsável por documentar as principais
                                rotas do sistema e garantir a entrega de uma plataforma de alta qualidade aos usuários por
                                meio de testes funcionais e não funcionais. Além disso, contribui para a criação de testes
                                automatizados e unitários para a aplicação.
                            </p>
                        </div>
                        <div className="flex items-center justify-center w-24 h-24">
                            <Image src={octuspay} alt="octuspay" />
                        </div>
                    </li>
                    <li className="grid grid-cols-2 items-center px-8 mb-6 space-x-12">
                        <div className="flex items-center justify-center w-24 h-24">
                            <Image src={etaure} alt="etaure" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">ETAURE</h2>
                            <h3 className="text-lg">Analista de QA</h3>
                            <p className="text-sm">
                                Nesse ambiente, aprimorei minhas habilidades em testes automatizados usando Cypress e Selenium,
                                além de desenvolver e expandir conhecimentos prévios. Colaborei com a equipe para identificar e
                                implementar estratégias de melhoria contínua, beneficiando-me do aprendizado adquirido
                                durante esta experiência.
                            </p>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 items-center px-8 mb-6 space-x-12">
                        <div>
                            <h2 className="text-2xl font-semibold">Conexos | NTT DATA</h2>
                            <h3 className="text-lg">Analista de QA</h3>
                            <p className="text-sm">
                                Planejamento e desenvolvimento de casos de teste, criação de cenários de teste,
                                documentação de testes e da plataforma, execução de testes funcionais e não funcionais,
                                análise de requisitos, redação de relatórios de bugs e automação de casos de teste usando
                                a ferramenta Ghost Inspector.
                            </p>
                        </div>
                        <div className="flex items-center justify-center w-24 h-24">
                            <Image src={conexos} alt="conexos" />
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}