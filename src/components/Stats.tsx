import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Award, Star } from 'lucide-react';

// Registrando o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Componente Stats adaptado para portfólio pessoal
const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animação do gráfico usando GSAP
  useEffect(() => {
    if (isInView && chartRef.current) {
      // Animar a barra do gráfico
      gsap.fromTo(
        chartRef.current.querySelector('.stat-bar'), 
        { 
          width: '0%',
          opacity: 0
        },
        { 
          width: '100%',
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5
        }
      );
      
      // Removendo a animação do número percentual que não será mais exibido
    }
  }, [isInView]);

  // Lista de conquistas e habilidades
  const achievements = [
    {
      icon: <Code className="w-5 h-5 text-orange-500" />,
      title: "Projetos Entregues com Sucesso",
      description: "Mais de 10 projetos web e mobile concluídos com alto índice de satisfação dos clientes."
    },
    {
      icon: <Award className="w-5 h-5 text-orange-500" />,
      title: "Experiência Profissional",
      description: "1+ anos de experiência em desenvolvimento web e aplicações full stack para diversos segmentos."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="achievements" 
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Coluna de texto */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-orange-500 text-sm font-medium mb-4"
            >
              Experiência & Resultados
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Conquistas <span className="gradient-text">Profissionais</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 mb-10"
            >
              Comprometido com a excelência e entrega de resultados, busco constantemente 
              aprimorar minhas habilidades e oferecer soluções inovadoras.
            </motion.p>

            {/* Lista de conquistas */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 bg-zinc-900 p-2 rounded-md">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Coluna do gráfico */}
          <div ref={chartRef} className="bg-zinc-900/60 rounded-lg p-8 border border-zinc-800">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-gray-400 text-sm mb-2">Status atual</p>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Progresso Contínuo</h3>
                <span className="text-xs text-gray-400">Últimos 12 meses</span>
              </div>
            </motion.div>
            
            {/* Barra de estatística */}
            <div className="h-4 bg-zinc-800 rounded-full overflow-hidden mb-8">
              <div className="stat-bar h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full w-0"></div>
            </div>
            
            {/* Estatísticas adicionais */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <p className="text-xs text-gray-400">Projetos</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">1+</div>
                <p className="text-xs text-gray-400">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <p className="text-xs text-gray-400">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Stats; 