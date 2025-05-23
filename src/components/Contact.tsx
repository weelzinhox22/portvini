import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle, Instagram, Github, Linkedin } from 'lucide-react';

// Componente Contact simplificado
const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block bg-zinc-800/80 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            Entre em Contato
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Vamos <span className="gradient-text">Conversar</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Estou disponível para projetos freelance, oportunidades de trabalho ou apenas para trocar ideias sobre tecnologia.
          </motion.p>
        </div>

        {/* Conteúdo principal - Redesenhado */}
        <div className="max-w-3xl mx-auto">
          {/* Informações de contato */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-zinc-900/60 rounded-lg p-6 border border-zinc-800 flex flex-col items-center text-center"
            >
              <div className="bg-zinc-800 p-3 rounded-full mb-4">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-white font-medium mb-2">Email</h4>
              <p className="text-gray-400 text-sm">viniciuspaularibeiro02@gmail.com</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-zinc-900/60 rounded-lg p-6 border border-zinc-800 flex flex-col items-center text-center"
            >
              <div className="bg-zinc-800 p-3 rounded-full mb-4">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-white font-medium mb-2">Telefone</h4>
              <p className="text-gray-400 text-sm">+55 (71) 99701-5604</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-zinc-900/60 rounded-lg p-6 border border-zinc-800 flex flex-col items-center text-center"
            >
              <div className="bg-zinc-800 p-3 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-white font-medium mb-2">Localização</h4>
              <p className="text-gray-400 text-sm">Salvador, BA, Brasil</p>
            </motion.div>
          </div>
          
          {/* Botões de redes sociais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Botão do GitHub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative"
            >
              <a 
                href="https://github.com/ViniciusPaula140"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Ver no GitHub"
              ></a>
              <div className="flex items-center justify-center gap-3 bg-zinc-800 hover:bg-zinc-700 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 cursor-pointer">
                <div className="bg-black/40 p-2 rounded-full">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <span>Ver no GitHub</span>
              </div>
            </motion.div>
            
            {/* Botão do WhatsApp */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative"
            >
              <a 
                href="https://wa.me/5571997015604"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Conversar no WhatsApp"
              ></a>
              <div className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 cursor-pointer">
                <div className="bg-white/20 p-2 rounded-full">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span>WhatsApp</span>
              </div>
            </motion.div>
            
            {/* Botão do LinkedIn */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative"
            >
              <a 
                href="https://br.linkedin.com/in/vin%C3%ADcius-paula-0a228a252?trk=people-guest_people_search-card"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Seguir no LinkedIn"
              ></a>
              <div className="flex items-center justify-center gap-3 bg-[#0077B5] hover:bg-[#006699] text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 cursor-pointer">
                <div className="bg-white/20 p-2 rounded-full">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <span>LinkedIn</span>
              </div>
            </motion.div>
          </div>
          
          {/* Disponibilidade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-12 p-6 bg-zinc-900/60 rounded-lg border border-zinc-800 text-center"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h4 className="text-white font-semibold">Disponibilidade</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Atualmente disponível para novos projetos freelance e oportunidades de trabalho.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Contact;
