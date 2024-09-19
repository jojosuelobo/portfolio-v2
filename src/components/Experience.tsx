import Image from "next/image";
import softwareMind from '@/images/experienceImages/softwareMind.svg';
import octuspay from '@/images/experienceImages/octuspay.svg';
import etaure from '@/images/experienceImages/etaure.svg';
import conexos from '@/images/experienceImages/conexos.webp';
import uvv from '@/images/experienceImages/uvv.svg';
import ctfl from '@/images/experienceImages/ctfl.svg';

export const Experience = () => {
    return (
        <section className="flex">
            {/* Texto fixo da jornada */}
            <div className="w-1/2 flex flex-col justify-center items-center sticky top-0 h-full bg-gray-100 mt-24 p-12"> 
                <h1 className="text-4xl font-bold mb-4">Minha jornada como QA</h1>
                <h2 className="text-lg text-center px-8">
                    Ferramentas e stacks que utilizei, ao longo da minha carreira:
                </h2>
            </div>

            {/* Lista de empresas rolável */}
            <div className="w-1/2 overflow-y-auto h-full">
                <ul className="py-8 p-6 m-12">
                    <li className="grid grid-cols-2 items-center px-8 mb-6 space-x-4">
                        <div>
                            <h2 className="text-2xl font-semibold">Software Mind</h2>
                            <h3 className="text-lg">QA Automation Engineer</h3>
                            <p className="text-sm">...</p>
                        </div>
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={softwareMind} alt="softwareMind" className="w-52"/>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 items-center px-8 mb-6 space-x-12">
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={octuspay} alt="octuspay" className="w-32"/>
                        </div>
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold">Octuspay</h2>
                            <h3 className="text-lg">Analista de QA</h3>
                            <p className="text-sm">
                                Desempenhei o papel de QA em uma startup, responsável por documentar as principais
                                rotas do sistema e garantir a entrega de uma plataforma de alta qualidade aos usuários por
                                meio de testes funcionais e não funcionais. Além disso, contribui para a criação de testes
                                automatizados e unitários para a aplicação.
                            </p>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 items-center px-8 mb-6 space-x-12">
                        <div>
                            <h2 className="text-2xl font-semibold">Certificação CTFL</h2>
                            <h3 className="text-lg">ISTQB - International Software Testing Qualifications Board</h3>
                            <p className="text-sm">
                                Conquistei a certificação CTFL, pela BSTQB. Foram semanas de dedicação aos estudos e preparação para esse momento. 
                                Esta conquista representa não apenas um reconhecimento do meu conhecimento em testes de software, 
                                mas também um marco significativo na minha trajetória profissional. 
                            </p>
                        </div>
                        <div className="flex items-center justify-center h-full w-full">
                            <Image src={ctfl} alt="ctfl" className="w-64"/>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 items-center px-8 mb-6 space-x-12">
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={etaure} alt="etaure" className="w-32"/>
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
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={conexos} alt="conexos" className="w-64"/>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 items-center px-8 mb-6 space-x-12">
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={uvv} alt="uvv" className="w-72"/>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">Graduação em Ciência da Computação</h2>
                            <h3 className="text-lg">Universidade Vila Velha (UVV)</h3>
                            <p className="text-sm">
                                Graduado em Ciência da Computação, onde desenvolvi sólidas habilidades em programação, análise de dados e resolução de problemas.
                                Engajado em projetos práticos e colaborativos, aprimorei minha capacidade de inovar e trabalhar em equipe.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}