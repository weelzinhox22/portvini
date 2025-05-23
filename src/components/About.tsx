import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Code, Server, Globe, Database, Cpu, Layout } from 'lucide-react';

// Componente About adaptado ao novo design
const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const skillsRef = useRef<HTMLDivElement>(null);

  // Animação das barras de habilidades usando GSAP
  useEffect(() => {
    if (isInView && skillsRef.current) {
      const skillBars = skillsRef.current.querySelectorAll('.skill-bar');
      
      gsap.fromTo(
        skillBars,
        { width: 0 },
        { 
          width: "var(--skill-level)",
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.2
        }
      );
    }
  }, [isInView]);

  // Lista de habilidades com níveis
  const skills = [
    { name: 'Frontend', level: '80%', icon: <Layout className="w-5 h-5 text-orange-500" /> },
    { name: 'Backend', level: '85%', icon: <Server className="w-5 h-5 text-orange-500" /> },
    { name: 'Databases', level: '80%', icon: <Database className="w-5 h-5 text-orange-500" /> },
    { name: 'DevOps', level: '85%', icon: <Cpu className="w-5 h-5 text-orange-500" /> },
    { name: 'API Development', level: '95%', icon: <Globe className="w-5 h-5 text-orange-500" /> },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Coluna de informações */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block bg-zinc-800/80 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              Sobre o Desenvolvedor
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Vinicius <span className="gradient-text">Paula</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 mb-6"
            >
              Desenvolvedor Full Stack com mais de 5 anos de experiência em desenvolvimento de aplicações web e mobile. 
              Especializado em criar soluções escaláveis e de alta performance utilizando as tecnologias mais modernas do mercado.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 mb-10"
            >
              Minha abordagem combina conhecimento técnico profundo com uma visão estratégica de negócios, 
              permitindo desenvolver produtos que não apenas funcionam bem, mas também geram valor real para os usuários e empresas.
            </motion.p>

            {/* Tecnologias */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-white font-semibold mb-4">Principais Tecnologias</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'GraphQL'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-zinc-800/80 text-gray-300 text-sm rounded-full border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Coluna de habilidades */}
          <div ref={skillsRef} className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl font-bold text-white mb-8"
            >
              Habilidades Técnicas
            </motion.h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="mb-6"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    {skill.icon}
                    <span className="text-white">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{skill.level}</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="skill-bar h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" 
                    style={{ "--skill-level": skill.level } as React.CSSProperties}
                  ></div>
                </div>
              </motion.div>
            ))}
            

          </div>
        </div>
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-orange-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-orange-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default About;
