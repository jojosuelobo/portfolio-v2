import React from 'react';
import Image from "next/image";
import Link from "next/link";

import linkedin from "@/svg/iconLinkedin.svg";
import github from "@/svg/iconGithub.svg";
import instagram from "@/svg/iconInstagram.svg";

export const FindMe = () => {
    return (
        <section className="flex justify-between items-center p-8 bg-gray-100 md:flex-row flex-col mr-80 ml-36">
            <div>
                <h1 className="text-3xl font-semibold mb-6 text-gray-800">Onde me encontrar?</h1>
                <ul className="flex flex-col gap-4">
                    <li className="flex gap-2 items-center">
                        <Image src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                        <Link href="https://www.linkedin.com/in/jojosuelobo/" target="_blank" className="text-gray-600 hover:text-gray-800">
                            user/jojosuelobo
                        </Link>
                    </li>
                    <li className="flex gap-2 items-center">
                        <Image src={instagram} alt="Instagram" className="w-6 h-6" />
                        <Link href="https://www.instagram.com/jojosuelobo/" target="_blank" className="text-gray-600 hover:text-gray-800">
                            /jojosuelobo
                        </Link>
                    </li>
                    <li className="flex gap-2 items-center">
                        <Image src={github} alt="Github" className="w-6 h-6" />
                        <Link href="https://www.github.com/jojosuelobo/" target="_blank" className="text-gray-600 hover:text-gray-800">
                            /jojosuelobo
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col items-center bg-red-500 text-white py-3 px-6 rounded-md shadow-lg">
                <h1 className="text-xl font-semibold mb-2">Entre em contato!</h1>
                <div className="">
                    <p className="font-medium">jojosuelobo@gmail.com</p>
                </div>
            </div>
        </section>
    );
};
