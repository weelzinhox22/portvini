import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { Code } from 'lucide-react';

// Componente Hero redesenhado em português com espaço para foto do desenvolvedor
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const devImageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Efeito de parallax no scroll com zoom mais intenso
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]); // Zoom mais intenso
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]); // Movimento para baixo mais intenso
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.2]); // Fade out mais intenso

  // Animações usando GSAP
  useEffect(() => {
    // Animação inicial da imagem de fundo com efeito de zoom
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { 
          scale: 1.2,
          opacity: 0 
        },
        { 
          scale: 1,
          opacity: 0.7,
          duration: 2,
          ease: "power2.out"
        }
      );
      
      // Adicionar um leve movimento de flutuação à imagem
      gsap.to(imageRef.current, {
        y: 10,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    // Animação da imagem do desenvolvedor
    if (devImageRef.current) {
      gsap.fromTo(
        devImageRef.current,
        { 
          y: 50,
          opacity: 0,
          scale: 0.8
        },
        { 
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 0.7
        }
      );
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden bg-black"
    >
      {/* Imagem de fundo com efeito parallax e zoom */}
      <motion.div 
        ref={imageRef}
        className="parallax-bg"
        style={{ 
          scale: imageScale,
          opacity: imageOpacity,
          y: imageY
        }}
      >
        <div className="image-overlay bg-black/50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform-gpu will-change-transform"
          style={{ backgroundImage: "url('/images/hero/hero.jpg')" }}
        ></div>
      </motion.div>

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Coluna de texto */}
        <motion.div
          style={{ opacity }}
          className="text-left max-w-2xl z-10"
        >
          {/* Badge de desenvolvedor */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-orange-500/20 text-white/90 rounded-full px-4 py-2 inline-flex items-center gap-2">
              <Code className="w-4 h-4 text-orange-500" />
              <span className="text-sm">Desenvolvedor Full Stack</span>
            </div>
          </motion.div>

          {/* Título principal com animação */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Vinícius
            <br />
            <span className="gradient-text">Paula</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/70 text-lg md:text-xl mb-10 max-w-xl"
          >
            Transformando ideias em soluções digitais inovadoras. Especialista em desenvolvimento web e aplicações modernas com foco em experiência do usuário.
          </motion.p>
        </motion.div>

        {/* Coluna da imagem do desenvolvedor - Ajustada para cima */}
        <motion.div
          ref={devImageRef}
          className="relative z-10 -mt-10 md:-mt-20"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-500/30 shadow-xl shadow-orange-500/20">
            { 
              <img 
                src="/images/developer/profile.jpg" 
                alt="Vinicius Paula - Desenvolvedor Full Stack" 
                className="w-full h-full object-cover"
              />
            }
            <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-white/50 flex-col p-4">
              <span className="text-sm text-center mb-2">Adicione sua foto aqui</span>
              <span className="text-xs text-center text-gray-400">public/images/developer/profile.jpg</span>
            </div>
          </div>
          
          {/* Círculos decorativos */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -z-10 inset-0 border-2 border-dashed border-orange-500/20 rounded-full"
          ></motion.div>
        </motion.div>
      </div>

      {/* Partículas de fundo com efeito de profundidade */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/5 rounded-full filter blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-500/5 rounded-full filter blur-3xl"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
