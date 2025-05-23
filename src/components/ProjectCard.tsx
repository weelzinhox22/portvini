import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, FileText, Play } from 'lucide-react';
import { gsap } from 'gsap';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  github: string;
  category: string;
  index: number;
  isInView: boolean;
  hasVideo?: boolean;
  onPlayVideo?: () => void;
}

// Componente de card de projeto adaptado ao novo design
const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  link, 
  github, 
  category, 
  index, 
  isInView, 
  hasVideo = false,
  onPlayVideo
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Animação de entrada do card
  useEffect(() => {
    if (isInView && cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { 
          y: 50, 
          opacity: 0,
          rotateX: -5 
        },
        { 
          y: 0, 
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out"
        }
      );
    }
  }, [isInView, index]);

  // Animações de hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  // Determinar o ícone apropriado com base na categoria
  const getCategoryIcon = () => {
    if (category === "Backend" || category === "API") {
      return <FileText className="w-3 h-3 text-orange-500" />;
    } else if (category === "Educacional") {
      return <Code className="w-3 h-3 text-orange-500" />;
    } else {
      return <Code className="w-3 h-3 text-orange-500" />;
    }
  };

  // Função para lidar com o clique no botão de visualização
  const handleViewClick = () => {
    if (hasVideo && onPlayVideo) {
      onPlayVideo();
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -10 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-zinc-900/80 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-zinc-800 h-full"
    >
      {/* Overlay de gradiente no hover */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/5 pointer-events-none z-10"
        style={{ opacity: isHovered ? 0.2 : 0 }}
      />
      
      <div ref={contentRef} className="p-6 h-full flex flex-col relative z-20">
        {/* Badge de categoria */}
        <div className="inline-flex items-center gap-2 w-fit bg-zinc-800 px-3 py-1 rounded-full mb-4">
          {getCategoryIcon()}
          <span className="text-xs font-medium text-gray-400">{category}</span>
        </div>

        {/* Ícone do projeto */}
        <motion.div
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4"
        >
          {hasVideo ? (
            <Play className="w-7 h-7 text-white" />
          ) : (
            <Code className="w-7 h-7 text-white" />
          )}
        </motion.div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 leading-relaxed flex-grow text-sm">
          {description}
        </p>

        {/* Stack de tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((techItem, techIndex) => (
            <span 
              key={techIndex}
              className="px-2 py-1 bg-zinc-800 text-gray-300 text-xs rounded-md font-medium"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* Botões de ação */}
        <div className="flex gap-3 mt-auto">
          <div className="w-full relative">
            <button
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-300 h-9 px-4 flex items-center justify-center cursor-pointer"
              onClick={handleViewClick}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {hasVideo ? "Ver Vídeo" : "Visualizar"}
            </button>
          </div>
        </div>
      </div>

      {/* Efeito de borda no hover */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 border-2 border-orange-500/30 rounded-xl pointer-events-none"
      />
    </motion.div>
  );
};

export default ProjectCard;
