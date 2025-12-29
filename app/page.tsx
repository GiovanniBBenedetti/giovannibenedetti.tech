"use client";

import { useState, useEffect } from "react";

//biblioteca das animações
import { motion, AnimatePresence } from "framer-motion";

//biblioteca da animação de escrita na pagina de iniocio
import Typewriter from "typewriter-effect";

//biblioteca de animação do carrossel da galeria
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//biblioteca dos icone utilizados
import {
  FaGithub, FaExternalLinkAlt, FaGlobe, FaLinkedin,
  FaPaperPlane, FaCode, FaShieldAlt,
  FaServer, FaMobileAlt, FaExclamationTriangle, FaTimes,
  FaJs, FaReact, FaNodeJs, FaDocker, FaPhp, FaGlobeAmericas
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiLinux, SiMysql
} from "react-icons/si";

//criação das linguas pt/en/es
const translations = {
  pt: {
    nav: ["Início", "Projetos", "Galeria", "Sobre", "Experiência", "Contato"],
    status: "Disponível para novos projetos",
    heroTitle: "Giovanni Benedetti",
    heroSubtitle: ["Desenvolvedor Full Stack", "Estudante de Cibersegurança", "Solucionador de Problemas"],
    heroDesc: "Transformando linhas de código em experiências digitais de alto impacto. Especialista em construir aplicações escaláveis e seguras.",
    btnProjects: "Ver Projetos",
    btnContact: "Contato",
    stats: {
      exp: "Anos de\nexperiência",
      projects: "Projetos\nconcluídos",
      techs: "Tecnologias\ndominadas",
      commits: "Commits\nde código"
    },
    sectionTitle: "Projetos",
    sectionHighlight: "Destaques",
    aboutTitle: "Sobre",
    aboutHighlight: "Mim",
    aboutText: "Meu nome é Giovanni Buscarino Benedetti, tenho 18 anos e sou um entusiasta de tecnologia dedicado atualmente aos estudos de Desenvolvimento de Sistemas e Cibersegurança. Tenho uma base sólida em programação, hardware e proteção de dados, áreas que exploro para criar soluções eficientes, inovadoras e seguras. Além da parte técnica, possuo competências em design digital, incluindo edição de vídeo, imagem e desenvolvimento de games. Essa combinação entre lógica, segurança e criatividade me permite ter uma visão 360º de projetos digitais, unindo funcionalidade e proteção ao usuário.",
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
    modalTitle: "Link Indisponível",
    modalDesc: "Este projeto ainda está em fase de deploy ou o repositório é privado por questões de segurança. Entre em contato para mais detalhes!",
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
      { icon: <FaServer />, title: "Backend", desc: "APIs escaláveis em Node.js e PHP." },
      { icon: <FaMobileAlt />, title: "Mobile", desc: "Apps híbridos com React Native." },
      { icon: <SiLinux />, title: "Linux & DevOps", desc: "Gestão de servidores e containers Docker." }
    ],
    projectList: [
      { title: "Sunset Landscape", desc: "Sistema hoteleiro completo com painel administrativo e interface de cliente para reservas." },
      { title: "Cristallo", desc: "E-commerce de luxo focado em pulseiras femininas com design elegante e alta performance." },
      { title: "SampaTicket", desc: "Plataforma de ingressos para a Grande SP com listagem categorizada e checkout simulado." },
      { title: "Blockbuster Revive", desc: "Interface nostálgica da antiga locadora com catálogo de filmes e design retrô." },
      { title: "Lumier", desc: "Sistema de gestão de blogs escolares para publicação de conteúdos educativos." },
      { title: "BandMatch", desc: "Rede social para músicos encontrarem integrantes e pesquisarem cifras de músicas." },
      { title: "MusicHouse", desc: "Sistema robusto de gerenciamento de estoque e controle de franquias para lojas de música." },
      { title: "Zelos", desc: "Sistema de gerenciamento de chamados desenvolvido para o SENAI. Otimiza o suporte interno e a manutenção da instituição." }
    ],
    galleryTitle: "Galeria",
  },
  en: {
    nav: ["Home", "Projects", "Gallery", "About", "Experience", "Contact"],
    status: "Available for new projects",
    heroTitle: "Giovanni Benedetti",
    heroSubtitle: ["Full Stack Developer", "Cybersecurity Student", "Problem Solver"],
    heroDesc: "Transforming code into high-impact digital experiences. Specialist in building scalable and secure applications.",
    btnProjects: "View Projects",
    btnContact: "Contact",
    stats: {
      exp: "Years of\nexperience",
      projects: "Projects\ncompleted",
      techs: "Technologies\nmastered",
      commits: "Code\ncommits"
    },
    sectionTitle: "Featured",
    sectionHighlight: "Projects",
    aboutTitle: "About",
    aboutHighlight: "Me",
    aboutText: "My name is Giovanni Buscarino Benedetti, I am 17 years old and a technology enthusiast currently dedicated to studying Systems Development and Cybersecurity. I have a solid foundation in programming, hardware, and data protection, fields I am exploring to create efficient, innovative, and secure solutions. Beyond the technical side, I have skills in digital design, including video editing, image manipulation, and game development. This combination of logic, security, and creativity allows me to have a 360º view of digital projects, merging functionality with user protection.",
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
    modalTitle: "Link Unavailable",
    modalDesc: "This project is still in the deployment phase or the repository is private for security reasons. Contact me for more details!",
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
      { icon: <FaServer />, title: "Backend", desc: "Scalable APIs in Node.js and PHP." },
      { icon: <FaMobileAlt />, title: "Mobile", desc: "Hybrid apps with React Native." },
      { icon: <SiLinux />, title: "Linux & DevOps", desc: "Server management and Docker containers." }
    ],
    projectList: [
      { title: "Sunset Landscape", desc: "Complete hotel system with admin panel and client booking interface." },
      { title: "Cristallo", desc: "Luxury e-commerce for women's bracelets with elegant design and high performance." },
      { title: "SampaTicket", desc: "Ticket platform for Greater SP featuring categorized listings and checkout." },
      { title: "Blockbuster Revive", desc: "Nostalgic video store interface with movie catalog and retro design." },
      { title: "Lumier", desc: "School blog management system for educational content publishing." },
      { title: "BandMatch", desc: "Social network for musicians to find members and search for song chords." },
      { title: "MusicHouse", desc: "Robust inventory management and franchise control system for musical instrument stores." },
      { title: "Zelos", desc: "Ticketing management system developed for SENAI. Optimizes internal support and institutional maintenance." }
    ],
    galleryTitle: "Gallery",
  },
  es: {
    nav: ["Inicio", "Proyectos", "Galería", "Sobre", "Experiencia", "Contacto"],
    status: "Disponible para proyectos",
    heroTitle: "Giovanni Benedetti",
    heroSubtitle: ["Full Stack Dev", "Seguridad Estudiante", "Problem Solver"],
    heroDesc: "Transformando código en experiencias digitales de alto impacto. Especialista en crear aplicaciones escalables y seguras.",
    btnProjects: "Ver Proyectos",
    btnContact: "Contacto",
    stats: {
      exp: "Años de\nexperiencia",
      projects: "Proyectos\ncompletados",
      techs: "Tecnologías\ndominadas",
      commits: "Commits\nde código"
    },
    sectionTitle: "Proyectos",
    sectionHighlight: "Destacados",
    aboutTitle: "Sobre",
    aboutHighlight: "Mí",
    aboutText: "Mi nombre es Giovanni Buscarino Benedetti, tengo 17 años y soy un entusiasta de la tecnología dedicado actualmente a los estudios de Desarrollo de Sistemas y Ciberseguridad. Cuento con una base sólida en programación, hardware y protección de datos, áreas que exploro con el objetivo de crear soluciones eficientes, innovadoras y seguras. Además de la parte técnica, poseo competencias en diseño digital, incluyendo edición de video, imagen y desarrollo de videojuegos. Esta combinación entre lógica, seguridad y creatividad me permite tener una visión de 360º de los proyectos digitales, uniendo la funcionalidad con la protección del usuario.",
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
    modalTitle: "Enlace no disponible",
    modalDesc: "¡Este projeto ainda está em fase de deploy ou o repositório é privado por questões de segurança!",
    expList: [
      {
        date: "2026 - 2027",
        title: "Grado Tecnológico en Informática (Ciberseguridad)",
        company: "Escuela SENAI \"Paulo Antonio Skaf\"",
        desc: "Educación superior centrada en infraestructura, defensa de redes e análisis de vulnerabilidades."
      },
      {
        date: "2024 - 2025",
        title: "Técnico en Desarrollo de Sistemas",
        company: "Escuela SENAI Armando de Arruda Pereira",
        desc: "Formación técnica en lógica de programação, arquitetura de software e bases de dados."
      }
    ],
    serviceList: [
      { icon: <FaCode />, title: "Web Dev", desc: "Apps de alto rendimiento con Next.js." },
      { icon: <FaServer />, title: "Backend", desc: "APIs escalables en Node.js y PHP." },
      { icon: <FaMobileAlt />, title: "Mobile", desc: "Apps híbridas con React Native." },
      { icon: <SiLinux />, title: "Linux & DevOps", desc: "Gestión de servidores y contenedores Docker." }
    ],
    projectList: [
      { title: "Sunset Landscape", desc: "Sistema hotelero completo con panel administrativo e interfaz de cliente." },
      { title: "Cristallo", desc: "E-commerce de lujo para pulseras con diseño elegante y alto rendimiento." },
      { title: "SampaTicket", desc: "Plataforma de entradas para el Gran SP con listado categorizado." },
      { title: "Blockbuster Revive", desc: "Interfaz nostálgica de videotienda con catálogo de películas." },
      { title: "Lumier", desc: "Sistema de gestión de blogs escolares para contenido educativo." },
      { title: "BandMatch", desc: "Red social para músicos y búsqueda de acordes integrada." },
      { title: "MusicHouse", desc: "Sistema robusto de gestión de inventario y control de franquicias para tiendas de música." },
      { title: "Zelos", desc: "Sistema de gestión de tickets desarrollado para el SENAI. Optimiza el soporte interno y el mantenimiento." }
    ],
    galleryTitle: "Galería",
  }
};


//imagens da galeria puxando da pasta public
const imagensGaleria = [
  { url: "/Lumier.png", tipo: "Apresentação", label: "Projeto Lumier" },
  { url: "/Lumier2.jpg", tipo: "Apresentação", label: "Projeto Lumier" },
  { url: "/MusicHouse.jpg", tipo: "Apresentação", label: "Music House" },
  { url: "/MusicHouse2.jpg", tipo: "Apresentação", label: "Grupo Music House" },
  { url: "/FormaturaSenai.jpeg", tipo: "Formatura", label: "SENAI Armando de Arruda Pereira 2025" },
];

//função da galeria junto com os carrosseis
function GallerySection({ title }: { title: string }) {
  return (
    <section id="galeria" className="py-24 border-t border-white/5 bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
          {title}
        </h2>
        <div className="w-20 h-1 bg-blue-600 mt-2"></div>
      </div>

      <div className="px-6">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          className="pb-14"
        >
          {imagensGaleria.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-[400px] w-full overflow-hidden rounded-3xl border border-white/10 group cursor-grab active:cursor-grabbing">
                <img
                  src={item.url}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-2 font-bold">
                    {item.tipo}
                  </span>
                  <h3 className="text-white text-2xl font-black uppercase tracking-tighter">
                    {item.label}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* estilizacao do botao carrossel */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #3b82f6 !important;
          transform: scale(0.6);
          background: rgba(0,0,0,0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .swiper-pagination-bullet {
          background: #3b82f6 !important;
        }
      `}</style>
    </section>
  );
}


//funcao para as tecnologia em que eu trabalho
function TechMarquee() {

  //icones das tecnologias
  const tecnologias = [
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
    { name: "Linux", icon: <SiLinux className="text-white" /> },
  ];

  return (

    <div className="relative overflow-hidden py-10">

      <motion.div
        animate={{ x: [0, -1800] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...tecnologias, ...tecnologias].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 bg-zinc-900/50 border border-white/5 rounded-xl backdrop-blur-sm mr-8"
          >
            <span className="text-2xl">{tech.icon}</span>
            <span className="text-zinc-200 font-bold text-sm uppercase tracking-widest">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>

  );
}



const projetosiconesImagens = [
  { tags: ["PHP", "CSS", "BOOTSTRAP"], github: "https://github.com/GiovanniBBenedetti/SunsetLandscape", link: "", image: "/Sunset.png" },
  { tags: ["HTML", "CSS", "BOOTSTRAP"], github: "https://github.com/GiovanniBBenedetti/Cristallo", link: "https://giovannibbenedetti.github.io/Cristallo/", image: "/Cristallo.png" },
  { tags: ["HTML", "CSS", "JAVASCRIPT"], github: "https://github.com/GiovanniBBenedetti/SampaTicket", link: "https://giovannibbenedetti.github.io/SampaTicket/", image: "/Sampa.png" },
  { tags: ["HTML", "CSS", "JAVASCRIPT"], github: "https://github.com/GiovanniBBenedetti/Blockbuster-LLC", link: "https://giovannibbenedetti.github.io/Blockbuster-LLC/", image: "/blockbuster.png" },
  { tags: ["NODE JS", "NEXT JS", "AZURE", "MYSQL",], github: "https://github.com/GiovanniBBenedetti/Lumier.git", link: "", image: "/LumierLogo.png" },
  { tags: ["NEXT JS", "API CIFRACLUB"], github: "https://github.com/GiovanniBBenedetti/BandMatch.git", link: "", image: "/BandMatch.png" },
  { tags: ["NEXTJS", "NODE JS", "MYSQL", "NODEMAILER", "JWT", "EXPRESS", "TAILWIND CSS"], github: "https://github.com/pachec0js/MusicHouse", link: "", image: "/MusicHouse.png" },
  { tags: ["NEXTJS", "NODE JS", "MYSQL", "JWT", "EXPRESS", "CSS", "PASSPORTJS"], github: "https://github.com/GiovanniBBenedetti/projetoZelosSenai", link: "", image: "/Zelos.png" },
];



// Função para os cards do projeto
function ProjectCard({ title, desc, asset, index, onAlert }: any) {
  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    if (!url || url === "#" || url === "") {
      e.preventDefault();
      onAlert();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm"
    >
      <div className="h-44 overflow-hidden">
        <img
          src={asset.image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
      </div>
      <div className="p-6 text-left">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
          <div className="flex gap-3 text-zinc-400">
            <a href={asset.github} onClick={(e) => handleLinkClick(e, asset.github)} target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub size={18} /></a>
            <a href={asset.link} onClick={(e) => handleLinkClick(e, asset.link)} target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaExternalLinkAlt size={16} /></a>
          </div>
        </div>
        <p className="text-zinc-400 text-sm mb-4">{desc}</p>
        <div className="flex flex-wrap gap-x-2 gap-y-2">
          {asset.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] font-bold uppercase px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded border border-white/5 whitespace-nowrap">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}





export default function Home() {
  const [lang, setLang] = useState<"pt" | "en" | "es">("pt");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = translations[lang];
  const [commits, setCommits] = useState(null);
  const [email, setEmail] = useState("");
  const [menssagem, setMensagem] = useState("");
  const [nome, setNome] = useState("");

  async function enviarEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await fetch("api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          menssagem,
        }),
      })
      setNome("");
      setEmail("");
      setMensagem("");

      console.log(res)


    } catch (err) {
      console.log("error")
    }
  }


  // leitura dos commits
  useEffect(() => {
    async function loadCommits() {
      try {
        const res = await fetch("/api/github/commits");
        const json = await res.json();
        console.log(json)
        setCommits(json.total);
      } catch (err) {
        console.error("Erro ao buscar commits", err);
      }
    }

    loadCommits();
  }, []);

  return (
    <div className="bg-black text-zinc-100 min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">

      {/* Caso não tenha um link para abrir o projeto */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-zinc-900 border border-white/10 p-8 rounded-3xl shadow-2xl text-center"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaExclamationTriangle className="text-blue-500 text-2xl" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{t.modalTitle}</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">{t.modalDesc}</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all"
              >
                Entendido
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* fundo Personalizado (alterar futuramente) :)*/}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full opacity-50" />
      </div>


      {/* Cabeçalho */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter">G<span className="text-blue-500">B</span></div>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400">
            {t.nav.map((item, idx) => {

              const targetIds = ["inicio", "projetos", "galeria", "sobre", "experiencia", "contato"];

              return (
                <a
                  key={idx}
                  href={`#${targetIds[idx]}`}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {item}
                </a>
              );
            })}
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

        {/* Inicio(Apresentação) */}
        <section id="inicio" className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 pt-20">
            <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest">{t.status}</span>
            <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-transparent leading-none">
              {t.heroTitle}
            </h1>
            <div className="text-2xl md:text-4xl text-blue-500 font-mono font-bold">
              <Typewriter key={lang} options={{ strings: t.heroSubtitle, autoStart: true, loop: true }} />
            </div>
            <p className="max-w-xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed">
              {t.heroDesc}
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <a href="#projetos" className="bg-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
                {t.btnProjects}
              </a>
              <a href="#contato" className="border border-white/10 px-8 py-3 rounded-xl font-bold hover:bg-zinc-900 transition-all text-white">
                {t.btnContact}
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto border-t border-white/5 mt-10">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-black text-white">2</span>
                  <p className="text-zinc-500 text-xs md:text-sm uppercase font-bold text-left leading-tight whitespace-pre-line">
                    {t.stats.exp}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-black text-white">10</span>
                  <p className="text-zinc-500 text-xs md:text-sm uppercase font-bold text-left leading-tight whitespace-pre-line">
                    {t.stats.projects}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-black text-white">10</span>
                  <p className="text-zinc-500 text-xs md:text-sm uppercase font-bold text-left leading-tight whitespace-pre-line">
                    {t.stats.techs}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3">
                  <span className="text-4xl md:text-5xl font-black text-white min-w-[60px]">
                    {commits !== null ? (
                      commits
                    ) : (
                      <div className="flex items-center justify-center h-10 w-10">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
                      </div>
                    )}
                  </span>
                  <p className="text-zinc-500 text-xs md:text-sm uppercase font-bold text-left leading-tight whitespace-pre-line">
                    {t.stats.commits}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>


        {/* Sobre Mim */}
        <section
          id="sobre"
          className="relative py-24 border-t border-white/5 overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.1] animate-pulse" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white">
                {t.aboutTitle}{" "}
                <span className="text-blue-500">{t.aboutHighlight}</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed italic">
                "{t.aboutText}"
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">

              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-lg">
                <FaCode className="text-blue-500 mb-2 text-2xl" />
                <h4 className="font-bold text-white">Full Stack</h4>
                <p className="text-xs text-zinc-500">React & Next.js</p>
              </div>
              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-lg">
                <FaGlobeAmericas className="text-blue-500 mb-2 text-2xl" />
                <h4 className="font-bold text-white">Global Communication</h4>
                <p className="text-xs text-zinc-500">English – Intermediate</p>
              </div>

            </div>
            <div className="col-span-full">
              <TechMarquee />
            </div>
          </div>
        </section>


        {/* Projetos */}
        <section id="projetos" className="py-24 bg-zinc-950/50 border-y border-white/5 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl mb-16 text-center md:text-5xl font-black tracking-tight text-white">
              {t.sectionTitle} <span className="text-blue-600 underline decoration-blue-600/30 underline-offset-8">{t.sectionHighlight}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.projectList.map((proj, i) => (
                <ProjectCard
                  key={i} title={proj.title} desc={proj.desc}
                  asset={projetosiconesImagens[i]} index={i}
                  onAlert={() => setIsModalOpen(true)}
                />
              ))}
            </div>
          </div>
        </section>



        {/* Especialidades */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl text-center font-black mb-16 text-white uppercase tracking-tighter">{t.servicesTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.serviceList.map((service, idx) => (
                <motion.div whileHover={{ y: -5 }} key={idx} className="p-8 bg-zinc-900/30 border border-white/5 rounded-3xl text-center space-y-4 hover:border-blue-500/30 transition-all">
                  <div className="text-3xl text-blue-500 flex justify-center">{service.icon}</div>
                  <h3 className="font-bold text-white text-xl">{service.title}</h3>
                  <p className="text-zinc-500 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Galeria de fotos */}
        <GallerySection title={t.galleryTitle} />




        {/* esperiencia */}
        <section id="experiencia" className="py-24 bg-zinc-950/30 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-20 text-white">{t.expTitle} <span className="text-blue-500">{t.expHighlight}</span></h2>
            <div className="space-y-12">
              {t.expList.map((item, idx) => (
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -20 }} key={idx} className="relative pl-8 border-l-2 border-blue-500/20">
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





        {/* Contato */}
        <section id="contato" className="py-24 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-5xl md:text-7xl font-black text-white">{t.contactTitle} <span className="text-blue-500">{t.contactHighlight}</span></h2>
              <p className="text-zinc-400 text-lg">{t.contactDesc}</p>
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="https://www.linkedin.com/in/giovanni-buscarino-benedetti-7a92a9326/" target="_blank" className="p-4 bg-zinc-900 rounded-full border border-white/5 hover:text-blue-500 transition-colors"><FaLinkedin size={20} /></a>
                <a href="https://github.com/GiovanniBBenedetti" target="_blank" className="p-4 bg-zinc-900 rounded-full border border-white/5 hover:text-blue-500 transition-colors"><FaGithub size={20} /></a>
              </div>
            </div>
            <form onSubmit={enviarEmail} className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-xl space-y-4 shadow-2xl">
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 outline-none transition-all"
                placeholder={t.formName}
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 outline-none transition-all"
                placeholder={t.formEmail}
              />

              <textarea
                rows={4}
                value={menssagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 focus:border-blue-500 outline-none transition-all"
                placeholder={t.formMsg}
              />
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