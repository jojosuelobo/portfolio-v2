import Image from "next/image";
import softwareMind from '@/images/experienceImages/softwareMind.svg';
import octuspay from '@/images/experienceImages/octuspay.svg';
import etaure from '@/images/experienceImages/etaure.svg';
import conexos from '@/images/experienceImages/conexos.webp';
import uvv from '@/images/experienceImages/uvv.svg';
import ctfl from '@/images/experienceImages/ctfl.svg';

import js from '@/images/stacks/js.svg';
import react from '@/images/stacks/React.svg';
import next from '@/images/stacks/next.svg';
import cypress from '@/images/stacks/Cypress.svg';
import selenium from '@/images/stacks/Selenium.svg';
import git from '@/images/stacks/git.svg';
import python from '@/images/stacks/python.svg';
import sql from '@/images/stacks/sql.svg';
import html from '@/images/stacks/html.svg';

export const Experience = () => {

    return (
        <section className="flex flex-col lg:flex-row">
            {/* Texto fixo da jornada */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:sticky top-0 h-full mt-12 p-8 lg:mt-24 lg:p-12">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">Minha jornada como QA</h1>
                <h2 className="text-base lg:text-lg text-center px-4 lg:px-8">
                    Ferramentas e stacks que utilizei ao longo da minha carreira:
                </h2>
                <ul className="grid grid-cols-3 gap-12 lg:gap-20 mt-4 lg:mt-16">
                    <li className="grid place-items-center">
                        <Image src={js} alt="Javascript" className="w-10 h-10 lg:w-12 lg:h-12" />
                        <p>Javascript</p>
                    </li>
                    <li className="grid place-items-center">
                        <Image src={react} alt="React" className="w-10 h-10 lg:w-12 lg:h-12" />
                        <p>React</p>
                    </li>
                    <li className="grid place-items-center">
                        <Image src={next} alt="NextJS" className="w-10 h-10 lg:w-12 lg:h-12" />
                        <p>NextJS</p>
                    </li>
                    <li className="grid place-items-center">
                        <Image src={cypress} alt="Cypress" className="w-10 h-10 lg:w-12 lg:h-12" />
                        <p>Cypress</p>
                    </li>
                    <li className="grid place-items-center">
                        <Image src={selenium} alt="Selenium" className="w-10 h-10 lg:w-12 lg:h-12" />
                        <p>Selenium</p>
                    </li>
                    <li className="grid place-items-center">
                        <Image src={git} alt="Git" className="w-10 h-10 lg:w-12 lg:h-12" />
                        <p>Git</p>
                    </li>
                    <li className="grid place-items-center">
                        <Image src={html} alt="html" className="w-10 h-10 lg:w-12 lg:h-12" />
                        <p>HTML e CSS</p>
                    </li>
                    <li className="grid place-items-center">
                        <Image src={python} alt="python" className="w-10 h-10 lg:w-12 lg:h-12" />
                        <p>Python</p>
                    </li>
                    <li className="grid place-items-center">
                        <Image src={sql} alt="sql" className="w-10 h-10 lg:w-12 lg:h-12" />
                        <p>SQL</p>
                    </li>
                </ul>
            </div>

            {/* Lista de empresas rolável */}
            <div className="w-full lg:w-1/2 overflow-y-auto h-full">
                <ul className="py-8 px-4 lg:p-6 lg:m-12 space-y-6">
                    <li className="grid grid-cols-2 lg:grid-cols-2 items-center px-4 lg:px-8 space-y-4 lg:space-y-0 lg:space-x-4">
                        <div>
                            <h2 className="text-xl lg:text-2xl font-semibold">Software Mind</h2>
                            <h3 className="text-lg">QA Automation Engineer</h3>
                            <p className="text-sm">...</p>
                        </div>
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={softwareMind} alt="softwareMind" className="w-32 lg:w-52" />
                        </div>
                    </li>
                    <li className="grid grid-cols-2 lg:grid-cols-2 items-center px-4 lg:px-8 space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={octuspay} alt="octuspay" className="w-24 lg:w-32" />
                        </div>
                        <div>
                            <h2 className="text-xl lg:text-2xl font-semibold">Octuspay</h2>
                            <h3 className="text-lg">Analista de QA</h3>
                            <p className="text-sm">
                                Desempenhei o papel de QA em uma startup, responsável por documentar as principais
                                rotas do sistema e garantir a entrega de uma plataforma de alta qualidade aos usuários por
                                meio de testes funcionais e não funcionais. Além disso, contribui para a criação de testes
                                automatizados e unitários para a aplicação.
                            </p>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 lg:grid-cols-2 items-center px-4 lg:px-8 space-y-4 lg:space-y-0 lg:space-x-4">
                        <div>
                            <h2 className="text-xl lg:text-2xl font-semibold">Certificação CTFL</h2>
                            <h3 className="text-lg">ISTQB - International Software Testing Qualifications Board</h3>
                            <p className="text-sm">
                                Conquistei a certificação CTFL, pela BSTQB. Foram semanas de dedicação aos estudos e preparação para esse momento.
                                Esta conquista representa não apenas um reconhecimento do meu conhecimento em testes de software,
                                mas também um marco significativo na minha trajetória profissional.
                            </p>
                        </div>
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={ctfl} alt="ctfl" className="w-48 lg:w-64" />
                        </div>
                    </li>
                    <li className="grid grid-cols-2 lg:grid-cols-2 items-center px-4 lg:px-8 space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={etaure} alt="etaure" className="w-24 lg:w-32" />
                        </div>
                        <div>
                            <h2 className="text-xl lg:text-2xl font-semibold">ETAURE</h2>
                            <h3 className="text-lg">Analista de QA</h3>
                            <p className="text-sm">
                                Nesse ambiente, aprimorei minhas habilidades em testes automatizados usando Cypress e Selenium,
                                além de desenvolver e expandir conhecimentos prévios. Colaborei com a equipe para identificar e
                                implementar estratégias de melhoria contínua, beneficiando-me do aprendizado adquirido
                                durante esta experiência.
                            </p>
                        </div>
                    </li>
                    <li className="grid grid-cols-2 lg:grid-cols-2 items-center px-4 lg:px-8 space-y-4 lg:space-y-0 lg:space-x-4">
                        <div>
                            <h2 className="text-xl lg:text-2xl font-semibold">Conexos | NTT DATA</h2>
                            <h3 className="text-lg">Analista de QA</h3>
                            <p className="text-sm">
                                Planejamento e desenvolvimento de casos de teste, criação de cenários de teste,
                                documentação de testes e da plataforma, execução de testes funcionais e não funcionais,
                                análise de requisitos, redação de relatórios de bugs e automação de casos de teste usando
                                a ferramenta Ghost Inspector.
                            </p>
                        </div>
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={conexos} alt="conexos" className="w-48 lg:w-64" />
                        </div>
                    </li>
                    <li className="grid grid-cols-2 lg:grid-cols-2 items-center px-4 lg:px-8 space-y-4 lg:space-y-0 lg:space-x-4">
                        <div className="flex items-center justify-center w-full h-full">
                            <Image src={uvv} alt="uvv" className="w-48 lg:w-72" />
                        </div>
                        <div>
                            <h2 className="text-xl lg:text-2xl font-semibold">Graduação em Ciência da Computação</h2>
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