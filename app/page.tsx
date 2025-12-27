"use client";

import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import { ProjectCard } from "@/components/cards";
import { FaGithub } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <div className="bg-black">



        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-100"
          >
            Giovanni Benedetti
          </motion.h1>

          <div className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-blue-600">
            <Typewriter
              options={{
                strings: ["Full stack developer", "Cybersecurity student"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 max-w-2xl text-zinc-400 text-base md:text-lg lg:text-xl"
          >
            Desenvolvedor web apaixonado por criar experiências digitais únicas.
            Exploro tecnologias modernas e design criativo para transformar ideias em produtos reais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 flex flex-wrap gap-4 justify-center items-center"
          >
            <a
              href="#projetos"
              className="bg-blue-600 hover:bg-blue-500 transition-colors px-6 py-3 rounded-full font-semibold text-zinc-100"
            >
              Meus Projetos
            </a>

            <a href="https://github.com/GiovanniBBenedetti"
            target="blank"
              className="text-zinc-100">
              <FaGithub size={40} />

            </a>


          </motion.div>
        </div>
      </div>

      <div className="bg-zinc-900">


        <div className="flex items-center justify-center flex-col p-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-100">
            Meus projetos
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-400 text-base md:text-lg">
            Confira alguns projetos realizados por mim
          </p>

        </div>








      </div>
    </>
  );
}
