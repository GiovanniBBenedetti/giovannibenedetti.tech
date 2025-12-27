"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  FaGithub, FaExternalLinkAlt, FaGlobe, FaEnvelope, FaLinkedin,
  FaPaperPlane, FaCode, FaShieldAlt, FaTerminal, FaDatabase,
  FaServer, FaLock, FaSearch, FaMobileAlt
} from "react-icons/fa";

const translations = {
  pt: {
    nav: ["Início", "Projetos", "Sobre", "Experiência", "Contato"],
    status: "Disponível para novos projetos",
    heroTitle: "Giovanni Benedetti",
    heroSubtitle: ["Desenvolvedor Full Stack", "Estudante de Cibersegurança", "Solucionador de Problemas"],
    heroDesc: "Transformando linhas de código em experiências digitais de alto impacto. Especialista em construir aplicações escaláveis e seguras.",
    btnProjects: "Ver Projetos",
    btnContact: "Contato",
    sectionTitle: "Projetos",
    sectionHighlight: "Destaques",
    aboutTitle: "Sobre",
    aboutHighlight: "Mim",
    aboutText: "Sou um desenvolvedor apaixonado por construir ferramentas que resolvem problemas reais. Atualmente, foco meus estudos em Cibersegurança, unindo o desenvolvimento de software com práticas de defesa e análise de vulnerabilidades.",
    skillsTitle: "Tecnologias & Skills",
    expTitle: "Minha",
    expHighlight: "Jornada",
    servicesTitle: "Especialidades",
    contactTitle: "Vamos",
    contactHighlight: "Conversar?",
    contactDesc: "Tem um projeto em mente ou quer discutir segurança digital? Minha caixa de entrada está sempre aberta.",
    formName: "Nome",
    formEmail: "E-mail",
    formMsg: "Sua mensagem",
    formBtn: "Enviar Mensagem",
    footer: "Construído com Next.js & Tailwind.",
    expList: [
      {
        date: "2026 - 2027",
        title: "Tecnólogo em Informática (Cibersegurança)",
        company: "Escola SENAI \"Paulo Antonio Skaf\"",
        desc: "Graduação focada em infraestrutura, defesa de redes e análise de vulnerabilidades."
      },
      {
        date: "2024 - 2025",
        title: "Técnico em Desenvolvimento de Sistemas",
        company: "Escola SENAI Armando de Arruda Pereira",
        desc: "Formação técnica em lógica de programação, arquitetura de software e bancos de dados."
      }
    ],
    serviceList: [
      { icon: <FaCode />, title: "Web Dev", desc: "Aplicações performáticas com Next.js." },
      { icon: <FaServer />, title: "Backend", desc: "APIs escaláveis em Node.js." },
      { icon: <FaMobileAlt />, title: "Mobile", desc: "Apps híbridos com React Native." }
    ],
    projectList: [
      { title: "Cyber Shield AI", desc: "Sistema de detecção de intrusão usando IA para identificar padrões maliciosos." },
      { title: "E-Commerce Nexus", desc: "Plataforma full stack com pagamentos integrados e dashboard em tempo real." },
      { title: "Pentest Toolkit", desc: "Suíte de ferramentas automatizadas para análise de vulnerabilidades web." },
      { title: "Secure Vault", desc: "Gerenciador de senhas criptografado end-to-end com 2FA." },
      { title: "Analytic Dashboard", desc: "Painel interativo para visualização de logs de segurança e tráfego." }
    ]
  },
  en: {
    nav: ["Home", "Projects", "About", "Experience", "Contact"],
    status: "Available for new projects",
    heroTitle: "Giovanni Benedetti",
    heroSubtitle: ["Full Stack Developer", "Cybersecurity Student", "Problem Solver"],
    heroDesc: "Transforming code into high-impact digital experiences. Specialist in building scalable and secure applications.",
    btnProjects: "View Projects",
    btnContact: "Contact",
    sectionTitle: "Featured",
    sectionHighlight: "Projects",
    aboutTitle: "About",
    aboutHighlight: "Me",
    aboutText: "I am a developer passionate about building tools that solve real problems. Currently, I focus my studies on Cybersecurity, merging software development with defense practices and vulnerability analysis.",
    skillsTitle: "Tech Stack & Skills",
    expTitle: "My",
    expHighlight: "Journey",
    servicesTitle: "Specialties",
    contactTitle: "Let's",
    contactHighlight: "Connect",
    contactDesc: "Have a project in mind or want to discuss digital security? My inbox is always open.",
    formName: "Name",
    formEmail: "Email",
    formMsg: "Your message",
    formBtn: "Send Message",
    footer: "Built with Next.js & Tailwind.",
    expList: [
      {
        date: "2026 - 2027",
        title: "B.Tech in Information Technology (Cybersecurity)",
        company: "SENAI \"Paulo Antonio Skaf\" School",
        desc: "Higher education focused on infrastructure, network defense, and vulnerability analysis."
      },
      {
        date: "2024 - 2025",
        title: "Systems Development Technician",
        company: "SENAI Armando de Arruda Pereira School",
        desc: "Technical training in programming logic, software architecture, and databases."
      }
    ],
    serviceList: [
      { icon: <FaCode />, title: "Web Dev", desc: "High-performance apps with Next.js." },
      { icon: <FaServer />, title: "Backend", desc: "Scalable APIs in Node.js." },
      { icon: <FaMobileAlt />, title: "Mobile", desc: "Hybrid apps with React Native." }
    ],
    projectList: [
      { title: "Cyber Shield AI", desc: "AI-driven intrusion detection system to identify malicious patterns." },
      { title: "E-Commerce Nexus", desc: "Full stack platform with integrated payments and real-time dashboard." },
      { title: "Pentest Toolkit", desc: "Automated toolkit for web vulnerability analysis and reconnaissance." },
      { title: "Secure Vault", desc: "End-to-end encrypted password manager with 2FA support." },
      { title: "Analytic Dashboard", desc: "Interactive dashboard for security logs and network traffic visualization." }
    ]
  },
  es: {
    nav: ["Inicio", "Proyectos", "Sobre", "Experiencia", "Contacto"],
    status: "Disponible para proyectos",
    heroTitle: "Giovanni Benedetti",
    heroSubtitle: ["Full Stack Dev", "Seguridad Estudiante", "Problem Solver"],
    heroDesc: "Transformando código en experiencias digitales de alto impacto. Especialista en crear aplicaciones escalables y seguras.",
    btnProjects: "Ver Proyectos",
    btnContact: "Contacto",
    sectionTitle: "Proyectos",
    sectionHighlight: "Destacados",
    aboutTitle: "Sobre",
    aboutHighlight: "Mí",
    aboutText: "Soy un desarrollador apasionado por crear herramientas que resuelven problemas reales. Actualmente centro mis estudios en Ciberseguridad.",
    skillsTitle: "Tecnologías y Skills",
    expTitle: "Mi",
    expHighlight: "Camino",
    servicesTitle: "Especialidades",
    contactTitle: "Vamos a",
    contactHighlight: "Hablar",
    contactDesc: "¿Tienes un proyecto en mente? Mi bandeja de entrada siempre está abierta.",
    formName: "Nombre",
    formEmail: "Correo",
    formMsg: "Mensaje",
    formBtn: "Enviar",
    footer: "Construido con Next.js & Tailwind.",
    expList: [
      {
        date: "2026 - 2027",
        title: "Grado Tecnológico en Informática (Ciberseguridad)",
        company: "Escuela SENAI \"Paulo Antonio Skaf\"",
        desc: "Educación superior centrada en infraestructura, defensa de redes y análisis de vulnerabilidades."
      },
      {
        date: "2024 - 2025",
        title: "Técnico en Desarrollo de Sistemas",
        company: "Escuela SENAI Armando de Arruda Pereira",
        desc: "Formación técnica en lógica de programación, arquitectura de software y bases de datos."
      }
    ],
    serviceList: [
      { icon: <FaCode />, title: "Web Dev", desc: "Apps de alto rendimiento con Next.js." },
      { icon: <FaServer />, title: "Backend", desc: "APIs escalables en Node.js." },
      { icon: <FaMobileAlt />, title: "Mobile", desc: "Apps con React Native." }
    ],
    projectList: [
      { title: "Cyber Shield AI", desc: "Sistema de detección de intrusiones mediante IA." },
      { title: "E-Commerce Nexus", desc: "Plataforma full stack con pagos integrados." },
      { title: "Pentest Toolkit", desc: "Herramientas para análisis de vulnerabilidades." },
      { title: "Secure Vault", desc: "Gestor de contraseñas cifrado." },
      { title: "Analytic Dashboard", desc: "Panel interactivo para registros de seguridad." }
    ]
  }
};

const projectAssets = [
  { tags: ["Python", "TensorFlow"], github: "#", link: "#", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" },
  { tags: ["Next.js", "Stripe"], github: "#", link: "#", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
  { tags: ["Go", "Docker"], github: "#", link: "#", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
  { tags: ["React Native", "AES"], github: "#", link: "#", image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=800" },
  { tags: ["TS", "Recharts"], github: "#", link: "#", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" },
];

function ProjectCard({ title, desc, asset, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm"
    >
      <div className="h-44 overflow-hidden">
        <img src={asset.image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
      </div>
      <div className="p-6 text-left">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
          <div className="flex gap-3 text-zinc-400">
            <a href={asset.github} className="hover:text-white"><FaGithub size={18} /></a>
            <a href={asset.link} className="hover:text-white"><FaExternalLinkAlt size={16} /></a>
          </div>
        </div>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{desc}</p>
        <div className="flex gap-2">
          {asset.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] font-bold uppercase px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded border border-white/5">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<"pt" | "en" | "es">("pt");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const t = translations[lang];

  return (
    <div className="bg-black text-zinc-100 min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">

      {/* FUNDO GLOBAL */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full opacity-50" />
      </div>

      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter">G<span className="text-blue-500">B</span></div>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            {t.nav.map((item, idx) => (
              <a key={idx} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <button onClick={() => setShowLangMenu(!showLangMenu)} className="flex items-center gap-2 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-zinc-800 transition-colors">
                <FaGlobe className="text-blue-500" /> <span className="uppercase">{lang}</span>
              </button>
              <AnimatePresence>
                {showLangMenu && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 mt-2 w-36 bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50">
                    {(["pt", "en", "es"] as const).map((l) => (
                      <button key={l} onClick={() => { setLang(l); setShowLangMenu(false); }} className={`w-full text-left px-4 py-2.5 text-sm hover:bg-blue-600 transition-colors uppercase font-bold ${lang === l ? "text-blue-400" : "text-white"}`}>
                        {l === "pt" ? "Português" : l === "en" ? "English" : "Español"}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 pt-20">
            <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">{t.status}</span>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-transparent leading-none">{t.heroTitle}</h1>
            <div className="text-2xl md:text-4xl text-blue-500 font-mono font-bold">
              <Typewriter key={lang} options={{ strings: t.heroSubtitle, autoStart: true, loop: true }} />
            </div>
            <p className="max-w-xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed">{t.heroDesc}</p>
            <div className="flex justify-center gap-4 pt-4">
              <a href="#projetos" className="bg-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">{t.btnProjects}</a>
              <a href="#contato" className="border border-white/10 px-8 py-3 rounded-xl font-bold hover:bg-zinc-900 transition-all">{t.btnContact}</a>
            </div>
          </motion.div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="py-24 bg-zinc-950/50 border-y border-white/5 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl mb-16 text-center md:text-5xl font-black tracking-tight text-white">
              {t.sectionTitle} <span className="text-blue-600 underline decoration-blue-600/30 underline-offset-8">{t.sectionHighlight}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.projectList.map((proj, i) => (
                <ProjectCard key={i} title={proj.title} desc={proj.desc} asset={projectAssets[i]} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ESPECIALIDADES (NEW) */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl text-center font-black mb-16 text-white uppercase tracking-tighter">{t.servicesTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.serviceList.map((service, idx) => (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={idx}
                  className="p-8 bg-zinc-900/30 border border-white/5 rounded-3xl text-center space-y-4 hover:border-blue-500/30 transition-all"
                >
                  <div className="text-3xl text-blue-500 flex justify-center">{service.icon}</div>
                  <h3 className="font-bold text-white text-xl">{service.title}</h3>
                  <p className="text-zinc-500 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE MIM */}
        <section id="sobre" className="relative py-24 border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.1] animate-pulse" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white">{t.aboutTitle} <span className="text-blue-500">{t.aboutHighlight}</span></h2>
              <p className="text-zinc-400 text-lg leading-relaxed italic">"{t.aboutText}"</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-lg">
                  <FaShieldAlt className="text-blue-500 mb-2 text-2xl" />
                  <h4 className="font-bold">Security First</h4>
                  <p className="text-xs text-zinc-500">Pentest & Defesa</p>
                </div>
                <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-lg">
                  <FaCode className="text-blue-500 mb-2 text-2xl" />
                  <h4 className="font-bold">Full Stack</h4>
                  <p className="text-xs text-zinc-500">React & Next.js</p>
                </div>
              </div>
            </div>
            <div className="p-8 bg-zinc-900 border border-white/10 rounded-3xl space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2"><FaTerminal className="text-blue-500" /> {t.skillsTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Python", "Go", "Docker", "PostgreSQL", "Linux", "Metasploit"].map(s => (
                  <span key={s} className="px-3 py-1 bg-zinc-800 text-zinc-400 rounded-lg text-sm border border-white/5">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA (NEW) */}
        <section id="experiência" className="py-24 bg-zinc-950/30 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-20 text-white">{t.expTitle} <span className="text-blue-500">{t.expHighlight}</span></h2>
            <div className="space-y-12">
              {t.expList.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  key={idx}
                  className="relative pl-8 border-l-2 border-blue-500/20"
                >
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                  <span className="text-blue-500 font-mono text-sm uppercase">{item.date}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{item.title}</h3>
                  <span className="text-zinc-500 font-bold block mb-4">{item.company}</span>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-24 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-5xl md:text-7xl font-black text-white">{t.contactTitle} <span className="text-blue-500">{t.contactHighlight}</span></h2>
              <p className="text-zinc-400 text-lg">{t.contactDesc}</p>
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="https://www.linkedin.com/in/giovanni-buscarino-benedetti-7a92a9326/" target="blank" className="p-4 bg-zinc-900 rounded-full border border-white/5 hover:text-blue-500 transition-colors"><FaLinkedin size={20} /></a>
                <a href="https://github.com/GiovanniBBenedetti" target="blank" className="p-4 bg-zinc-900 rounded-full border border-white/5 hover:text-blue-500 transition-colors"><FaGithub size={20} /></a>
              </div>
            </div>
            <form className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-xl space-y-4 shadow-2xl">
              <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 outline-none transition-all" placeholder={t.formName} />
              <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 outline-none transition-all" placeholder={t.formEmail} />
              <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 outline-none transition-all" placeholder={t.formMsg} />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all">
                {t.formBtn} <FaPaperPlane />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center border-t border-white/5 bg-black text-zinc-600 text-sm">
        © {new Date().getFullYear()} Giovanni Benedetti • {t.footer}
      </footer>
    </div>
  );
}