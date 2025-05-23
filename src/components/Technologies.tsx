import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Server, Globe, Braces, Laptop, GitBranch } from 'lucide-react';

// Registrando o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Componente de Tecnologias separado do Hero
const Technologies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Efeito para animações com GSAP
  useEffect(() => {
    if (isInView && cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.tech-card');
      
      // Animação de entrada dos cards
      gsap.fromTo(
        cards,
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.8,
          ease: "power3.out"
        }
      );
      
      // Configurar animação de scroll para os cards
      cards.forEach((card, index) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom center",
            scrub: 1
          },
          y: -10,
          ease: "none"
        });
      });
    }
  }, [isInView]);

  // Categorias de tecnologias com ícones
  const techCategories = [
    {
      name: "Frontend",
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      description: "Desenvolvimento de interfaces modernas e responsivas",
      techs: ["JavaScript", "TypeScript", "React", "HTML", "CSS", "Tailwind"]
    },
    {
      name: "Backend",
      icon: <Server className="w-6 h-6 text-orange-500" />,
      description: "Construção de APIs robustas e escaláveis",
      techs: ["Node.js", "Python", "Docker"]
    },
    {
      name: "Banco de Dados",
      icon: <Database className="w-6 h-6 text-orange-500" />,
      description: "Armazenamento e gerenciamento eficiente de dados",
      techs: ["MongoDB", "PostgreSQL", "SQL", "Supabase"]
    },
    {
      name: "DevOps",
      icon: <GitBranch className="w-6 h-6 text-orange-500" />,
      description: "Integração e deploy contínuo",
      techs: ["Git", "AWS"]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="technologies" 
      className="py-16 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-orange-500 text-sm font-medium mb-2"
          >
            Stack Tecnológico
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Tecnologias <span className="gradient-text">& Ferramentas</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-center"
          >
            Conjunto de tecnologias que utilizo para criar soluções digitais completas, 
            desde o frontend até infraestrutura.
          </motion.p>
        </div>

        {/* Cards de tecnologias */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              className="tech-card bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 relative overflow-hidden"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Efeito de brilho no hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none"
              />
              
              {/* Círculo decorativo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                whileHover={{ 
                  scale: 1.2, 
                  opacity: 0.8,
                  transition: { duration: 0.5, ease: "easeOut" }
                }}
                className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-orange-500/5"
              />
              
              {/* Ícone */}
              <div className="mb-4 p-3 bg-zinc-800 rounded-lg w-fit relative z-10">
                {category.icon}
              </div>
              
              {/* Nome da categoria */}
              <h3 className="text-xl font-semibold text-white mb-2 relative z-10">
                {category.name}
              </h3>
              
              {/* Descrição */}
              <p className="text-gray-400 text-sm mb-5 relative z-10">
                {category.description}
              </p>
              
              {/* Lista de tecnologias */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.techs.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="text-xs font-medium bg-zinc-800/80 text-gray-300 px-2 py-1 rounded-md"
                    whileHover={{ 
                      backgroundColor: "rgba(249, 115, 22, 0.2)",
                      color: "#f97316",
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
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

export default Technologies; 