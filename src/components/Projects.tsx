import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ProjectCard from './ProjectCard';
import { Play } from 'lucide-react';

// Componente de Projetos adaptado ao novo design
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const titleRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (isInView && titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { 
          backgroundPosition: "200% center" 
        },
        { 
          backgroundPosition: "0% center",
          duration: 2,
          ease: "power2.out"
        }
      );
    }
  }, [isInView]);

  // Lista de projetos do desenvolvedor Vinicius Paula (reduzida para 2)
  const projects = [
    {
      title: "Boletim Escolar Digital",
      description: "Sistema de gerenciamento de notas para coordenadores escolares. Facilita o controle, análise e distribuição de boletins, com dashboard de desempenho e notificações automáticas.",
      tech: ["React", "JavaScript", "TypeScript", "PostgreSQL"],
      image: "project1.jpg",
      link: "https://youtu.be/2iI1P4Huo3Q",
      github: "#",
      category: "Educacional",
      hasVideo: true
    },
    {
      title: "API RESTful",
      description: "API completa com documentação Swagger, autenticação JWT, validação de dados e endpoints para CRUD. Desenvolvida seguindo padrões RESTful e boas práticas de segurança.",
      tech: ["Express", "Node.js", "MongoDB", "Swagger"],
      image: "project2.jpg", 
      link: "https://api-app-seven-chi.vercel.app/api-docs/#/",
      github: "https://github.com/viniciuspr88/api-rest",
      category: "Backend",
      hasVideo: false
    }
  ];

  // Função para exibir o vídeo
  const handleShowVideo = () => {
    setShowVideo(true);
  };

  // Função para fechar o vídeo
  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-zinc-800/80 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            Portfólio de Vinicius Paula
          </motion.div>
          
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Projetos <span className="gradient-text">Reais</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos meus projetos mais recentes, demonstrando expertise em tecnologias 
            modernas que solucionam problemas de pessoas reais.
          </p>
        </motion.div>

        {/* Grade de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
              isInView={isInView}
              onPlayVideo={project.hasVideo ? handleShowVideo : undefined}
            />
          ))}
        </div>

        {/* Botão para mostrar o vídeo quando estiver fechado */}
        {!showVideo && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShowVideo}
              className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 hover:border-orange-500/50 px-6 py-3 rounded-full text-white/80 hover:text-white transition-all duration-300"
              style={{ cursor: 'pointer' }}
            >
              <Play className="w-5 h-5 text-orange-500" />
              <span>Assistir demonstração do Boletim Escolar</span>
            </button>
          </div>
        )}

        {/* Player de vídeo simplificado */}
        {showVideo && (
          <div className="relative">
            <div className="bg-zinc-900/95 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">
                  Boletim Escolar Digital <span className="text-sm font-normal text-gray-400">- Demonstração</span>
                </h3>
                <button 
                  onClick={handleCloseVideo}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white/70 hover:text-white px-3 py-1 rounded-md transition-colors"
                  style={{ cursor: 'pointer' }}
                >
                  Fechar
                </button>
              </div>
              
              <div className="aspect-video w-full">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/2iI1P4Huo3Q?rel=0&modestbranding=1&autoplay=1"
                  title="Demonstração do Boletim Escolar Digital"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-4 bg-zinc-900/80 border-t border-zinc-800">
                <p className="text-gray-400 text-sm mb-4">
                  Sistema completo para gerenciamento de notas escolares, com interface intuitiva para coordenadores 
                  e professores. Inclui dashboard de desempenho, geração automática de boletins e notificações.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    {["React", "Node.js", "MongoDB"].map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://youtu.be/2iI1P4Huo3Q" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-400 text-sm transition-colors"
                  >
                    Ver no YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

// Função useInView para detectar quando o elemento está visível
function useInView(ref, options) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting && options.once) {
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
}

export default Projects;
