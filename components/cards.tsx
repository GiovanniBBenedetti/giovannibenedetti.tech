"use client";

import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Mock de dados para os seus projetos
const projects = [
  {
    title: "Cyber Shield AI",
    description: "Sistema de detecção de intrusão usando Machine Learning para identificar padrões maliciosos em redes locais.",
    tags: ["Python", "TensorFlow", "FastAPI"],
    github: "https://github.com/GiovanniBBenedetti",
    link: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", // Imagem de exemplo
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
];

export function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="group relative bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500"
    >
      {/* Imagem do Projeto */}
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Conteúdo */}
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

        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag: string) => (
            <span 
              key={tag} 
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-800 text-zinc-300 rounded-md border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
