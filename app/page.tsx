"use client";

import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Cyber Shield AI",
    description: "Sistema de detecção de intrusão usando Machine Learning para identificar padrões maliciosos em redes locais.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    github: "https://github.com/GiovanniBBenedetti",
    link: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "E-Commerce Nexus",
    description: "Plataforma full stack com pagamentos integrados, gestão de estoque e dashboard administrativo em tempo real.",
    tags: ["Next.js", "Prisma", "Stripe"],
    github: "https://github.com/GiovanniBBenedetti",
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Pentest Toolkit",
    description: "Suíte de ferramentas automatizadas para reconhecimento e análise de vulnerabilidades web (OWASP Top 10).",
    tags: ["Go", "Docker", "Shell"],
    github: "https://github.com/GiovanniBBenedetti",
    link: "#",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Secure Vault",
    description: "Gerenciador de senhas criptografado end-to-end com autenticação de dois fatores e biometria.",
    tags: ["React Native", "Node.js", "AES-256"],
    github: "https://github.com/GiovanniBBenedetti",
    link: "#",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Analytic Dashboard",
    description: "Painel interativo para visualização de logs de segurança e tráfego de rede em tempo real.",
    tags: ["TypeScript", "Tailwind", "Recharts"],
    github: "https://github.com/GiovanniBBenedetti",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="group relative bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-3 text-zinc-400">
            <a href={project.github} target="_blank" className="hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={project.link} className="hover:text-white transition-colors">
              <FaExternalLinkAlt size={18} />
            </a>
          </div>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-800 text-zinc-300 rounded-md border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="bg-black text-zinc-100 selection:bg-blue-500/30">
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter"
          >
            G<span className="text-blue-500">B</span>
          </motion.div>
          
          <div className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Início</a>
            <a href="#projetos" className="hover:text-blue-400 transition-colors">Projetos</a>
            <a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a>
          </div>

          <div className="flex gap-4">
             <a href="https://github.com/GiovanniBBenedetti" target="_blank" className="hover:scale-110 transition-transform">
                <FaGithub size={22} className="text-zinc-400 hover:text-white" />
             </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-center"
          >
            <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">
              Disponível para novos projetos
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
              Giovanni Benedetti
            </h1>

            <div className="text-2xl md:text-4xl lg:text-5xl font-light text-blue-500 font-mono">
              <Typewriter
                options={{
                  strings: ["Full Stack Developer", "Cybersecurity Student", "Problem Solver"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </div>

            <p className="mt-6 max-w-xl mx-auto text-zinc-400 text-lg leading-relaxed">
              Transformando linhas de código em experiências digitais de alto impacto. 
              Especialista em construir aplicações escaláveis e seguras.
            </p>

            <div className="mt-10 flex flex-wrap gap-5 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projetos"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
              >
                Ver Projetos
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:seuemail@exemplo.com"
                className="border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-white px-8 py-4 rounded-xl font-bold transition-all"
              >
                Contato
              </motion.a>
            </div>
          </motion.div>
        </section>

        <section id="projetos" className="py-24 bg-zinc-950/50 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                Projetos <span className="text-blue-600 underline decoration-blue-600/30 underline-offset-8">Destaques</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center border-t border-white/5 text-zinc-600 text-sm">
        © {new Date().getFullYear()} Giovanni Benedetti. Construído com Next.js & Tailwind.
      </footer>
    </div>
  );
}