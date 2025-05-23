import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Componente de Navbar inspirado no design SaaS & Tech da imagem
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detecta o scroll para mudar a aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">VP</span>
              </div>
              <span className="text-white font-semibold text-xl">Vinicius Paula</span>
            </div>
          </motion.div>

          {/* Links de navegação */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#technologies" className="text-white/80 hover:text-white transition-colors">Tecnologias</a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Serviços</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projetos</a>
            <a href="#resume" className="text-white/80 hover:text-white transition-colors">Currículo</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">Sobre</a>
          </nav>
          
          {/* Botão de contato */}
          <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white border-none">
            Contato
          </Button>
          
          {/* Menu mobile */}
          <button className="md:hidden text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar; 