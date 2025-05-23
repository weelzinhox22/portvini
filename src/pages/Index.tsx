import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Technologies from '@/components/Technologies';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Página inicial com todos os componentes
const Index = () => {
  // Efeito para aplicar o fundo escuro ao body
  useEffect(() => {
    document.body.classList.add('bg-black');
    return () => {
      document.body.classList.remove('bg-black');
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Technologies />
      <Features />
      <Stats />
      <Projects />
      <Resume />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
