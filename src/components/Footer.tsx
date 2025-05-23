import React from 'react';
import { motion } from 'framer-motion';

// Componente Footer combinando o design SaaS com informações do desenvolvedor
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-zinc-800 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo e informações */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">VP</span>
              </div>
              <span className="text-white font-semibold text-xl">Vinícius Paula</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Transformando dados em soluções acionáveis para empresas de todos os tamanhos.
            </p>
            <p className="text-gray-500 text-xs">
              © {currentYear} Vinícius Paula. Todos os direitos reservados.
            </p>
          </div>
          
          {/* Links rápidos */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { name: 'Home', path: 'home' },
                { name: 'Tecnologias', path: 'technologies' },
                { name: 'Serviços', path: 'features' },
                { name: 'Projetos', path: 'projects' },
                { name: 'Currículo', path: 'resume' },
                { name: 'Sobre', path: 'about' },
                { name: 'Contato', path: 'contact' }
              ].map((item, index) => (
                <div key={index}>
                  <a href={`#${item.path}`} className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Desenvolvedor */}
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4">Desenvolvedor</h3>
            <p className="text-gray-400 text-sm mb-4">
              Vinícius Paula<br />
              <span className="text-orange-500">Desenvolvedor Full Stack</span>
            </p>
            <div className="flex gap-4">
              {/* GitHub */}
              <motion.a
                href="https://github.com/ViniciusPaula140"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
              
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/5571997015604"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M20.448 3.538A11.978 11.978 0 0012 0C5.373 0 0 5.373 0 12c0 2.11.556 4.17 1.61 5.973L0 24l6.193-1.576A12.005 12.005 0 0012 24c6.627 0 12-5.373 12-12 0-3.205-1.248-6.219-3.552-8.462zM12 22.154c-1.82 0-3.603-.47-5.174-1.362l-.367-.22-3.846 1.004 1.02-3.725-.24-.372a9.99 9.99 0 01-1.54-5.352C1.846 6.422 6.404 1.846 12 1.846c2.653 0 5.143 1.03 7.01 2.904a9.93 9.93 0 012.896 7.097c0 5.638-4.583 10.307-10.154 10.307zm5.946-7.752c-.309-.155-1.832-.9-2.116-.998-.283-.099-.49-.155-.696.155-.207.309-.802.998-.982 1.204-.18.206-.36.232-.67.077-.31-.155-1.306-.48-2.482-1.526-.917-.81-1.534-1.81-1.715-2.118-.18-.309-.02-.476.135-.63.138-.138.31-.36.464-.54.155-.18.206-.31.31-.516.103-.206.051-.386-.026-.54-.077-.154-.696-1.674-.952-2.294-.25-.604-.504-.522-.696-.533-.18-.01-.386-.013-.593-.013-.206 0-.54.077-.823.386-.283.31-1.08 1.05-1.08 2.569 0 1.52 1.116 2.988 1.27 3.193.155.206 2.183 3.318 5.282 4.648.738.32 1.312.51 1.76.652.74.235 1.414.202 1.947.123.593-.09 1.832-.745 2.088-1.468.257-.723.257-1.34.18-1.47-.077-.128-.284-.204-.593-.36z" clipRule="evenodd" />
                </svg>
              </motion.a>
              
              {/* Instagram */}
              <motion.a
                href="https://instagram.com/vinicius_ribeiro140"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2c-2.714 0-3.055.013-4.122.06-1.064.05-1.79.217-2.428.465a4.89 4.89 0 00-1.772 1.153A4.904 4.904 0 002.525 5.45c-.248.637-.415 1.363-.465 2.428C2.013 8.944 2 9.284 2 12s.013 3.056.06 4.122c.05 1.065.217 1.79.465 2.428a4.88 4.88 0 001.153 1.772 4.897 4.897 0 001.772 1.153c.637.248 1.363.415 2.428.465 1.067.047 1.407.06 4.122.06s3.055-.013 4.122-.06c1.065-.05 1.79-.217 2.428-.465a4.89 4.89 0 001.772-1.153 4.904 4.904 0 001.153-1.772c.248-.637.415-1.363.465-2.428.047-1.066.06-1.407.06-4.122s-.013-3.056-.06-4.122c-.05-1.064-.217-1.79-.465-2.428a4.88 4.88 0 00-1.153-1.772 4.897 4.897 0 00-1.772-1.153c-.637-.248-1.363-.415-2.428-.465C15.056 2.013 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.182.8.399 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858-.182.466-.399.8-.748 1.15-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.098 3.098 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.466.399-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 3.063a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm6.538-8.671a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
        
        {/* Linha de separação */}
        <div className="border-t border-zinc-800 my-8"></div>
        
        {/* Créditos */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-4 md:mb-0">
            Design inspirado em <span className="text-orange-500">SaaS & Tech Website</span>
          </p>
          <p className="text-gray-500 text-xs">
            Desenvolvido por <span className="text-orange-500">Vinicius Paula</span> - Desenvolvedor Full Stack
          </p>
        </div>
      </div>
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute bottom-0 left-0 w-full h-64 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -bottom-32 left-0 w-full h-64 bg-gradient-to-t from-orange-500 to-transparent rounded-full transform scale-150"></div>
      </div>
    </footer>
  );
};

export default Footer;
