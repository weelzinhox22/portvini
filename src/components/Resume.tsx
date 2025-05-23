import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Download, Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

// Componente de Currículo
const Resume = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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

  // Dados do currículo
  const experienceData = [
    {
      title: "Auxiliar de almoxarifado",
      company: "INOVARTELECOM",
      period: "2021 - 2023",
      description: "Responsável por sistemas como BTP, ERP e SAP. Criação de Dashboards em Excel para análise de KPIs. Criação de robôs em Python para automatizar tarefas repetitivas. Responsável pelo património de informática de toda empresa."
    }
  ];

  const educationData = [
    {
      degree: "Bacharelado em Ciência da Computação",
      institution: "UNIFACS - Tancredo Neves",
      period: "2022 - 2027",
      description: "Cursando (5º semestre)"
    },
    {
      degree: "Técnico em Logística",
      institution: "SENAI CIMATEC",
      period: "2021 - 2022",
      description: "Concluído"
    }
  ];

  const certifications = [
    {
      name: "AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Gerenciamento de Ameaças Cibernéticas",
      issuer: "CISCO",
      year: "2023"
    },
    {
      name: "Cybersecurity Essentials",
      issuer: "CISCO",
      year: "2023"
    },
    {
      name: "Estruturas de dados",
      issuer: "UFBA",
      year: "2022"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="resume" 
      className="py-20 bg-black relative overflow-hidden"
    >
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
            Trajetória Profissional
          </motion.div>
          
          <h2 
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            Meu <span className="gradient-text">Currículo</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Conheça minha trajetória profissional, formação acadêmica e certificações
            que moldaram minha carreira como desenvolvedor.
          </p>
          
          {/* Botão para download do currículo */}
          <motion.a
            href="/files/curriculo-vinicius-paula.pdf"
            download
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full mt-8 font-medium transition-colors cursor-pointer"
          >
            <Download className="w-5 h-5" />
            <span>Baixar Currículo Completo</span>
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna da esquerda - Experiência e Certificações */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Experiência Profissional */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-orange-500/20 rounded-full">
                  <Briefcase className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Experiência Profissional</h3>
              </div>
              
              <div className="space-y-8">
                {experienceData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="relative pl-8 border-l border-zinc-800"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-orange-500"></div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{item.period}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-orange-500 mb-3">{item.company}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Certificações */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-orange-500/20 rounded-full">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certificações</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                {certifications.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-lg hover:border-orange-500/30 transition-colors"
                  >
                    <div className="flex flex-row items-center gap-3">
                      <div className="p-2 bg-zinc-800/80 rounded-full">
                        <Award className="w-4 h-4 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm">{item.name}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <p className="text-gray-400 text-xs">{item.issuer}</p>
                          <p className="text-orange-500 text-xs font-medium">{item.year}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Coluna da direita - Educação */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Educação */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-orange-500/20 rounded-full">
                  <GraduationCap className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Formação Acadêmica</h3>
              </div>
              
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="relative pl-8 border-l border-zinc-800"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-orange-500"></div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">{item.period}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                    <p className="text-orange-500 mb-3">{item.institution}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
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

export default Resume; 