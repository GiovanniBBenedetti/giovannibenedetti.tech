"use client";

import { motion } from "motion/react";
import Typewriter from 'typewriter-effect';


export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-200 overflow-hidden">




      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-700 via-zinc-600 to-zinc-700 opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-100"
        >
          Giovanni Buscarino Benedetti
        </motion.h1>
        <div className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-100">
          <Typewriter
            options={{
              strings: ['Full stack developer', 'Cybersecurity student'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 max-w-2xl text-zinc-300 text-base md:text-lg lg:text-xl"
        >
          Desenvolvedor web apaixonado por criar experiências digitais únicas.
          Exploro tecnologias modernas e design criativo para transformar ideias em produtos reais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projetos"
            className="bg-zinc-700 hover:bg-zinc-600 transition-colors px-6 py-3 rounded-full font-semibold text-zinc-100"
          >
            Meus Projetos
          </a>
          <a
            href="#contato"
            className="border border-zinc-400 hover:bg-zinc-400 hover:text-zinc-900 transition-colors px-6 py-3 rounded-full font-semibold"
          >
            Contato
          </a>
        </motion.div>
      </div>

  

    </div>
  );
}
