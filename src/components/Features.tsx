import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Layers, Sparkles } from 'lucide-react';

// Registrando o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Componente de Features adaptado para portfólio pessoal
const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Cards de serviços oferecidos
  const services = [
    {
      icon: <Code className="w-6 h-6 text-orange-500" />,
      title: "Desenvolvimento Web",
      description: "Criação de sites e aplicações web responsivas, modernas e otimizadas para SEO e performance."
    },
    {
      icon: <Layers className="w-6 h-6 text-orange-500" />,
      title: "Aplicações Full Stack",
      description: "Desenvolvimento completo de aplicações com frontend interativo e backend robusto e escalável."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-orange-500" />,
      title: "Consultoria Técnica",
      description: "Análise e otimização de projetos existentes, com foco em melhores práticas e performance."
    }
  ];

  // Animação do título usando GSAP
  useEffect(() => {
    if (isInView && titleRef.current) {
      gsap.fromTo(
        titleRef.current, 
        { 
          opacity: 0.5,
          y: 30
        },
        { 
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      );
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm mb-2"
          >
            O Que Eu Ofereço
          </motion.p>
          
          <motion.div className="flex justify-center items-center flex-col">
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Meus <span className="gradient-text">Serviços</span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto text-center"
            >
              Soluções personalizadas para transformar suas ideias em realidade digital, 
              com foco em qualidade e experiência do usuário.
            </motion.p>
          </motion.div>
        </div>

        {/* Cards de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-6 card-glow"
            >
              {/* Ícone */}
              <div className="mb-5 p-3 bg-zinc-800 rounded-lg w-fit">
                {service.icon}
              </div>
              
              {/* Título */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-gray-400 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-orange-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Features; 