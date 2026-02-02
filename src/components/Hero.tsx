import React from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 text-white min-h-screen flex items-center justify-center pt-16 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          João Paulo <span className="text-blue-400">Del Vecchio</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Desenvolvedor Full-Stack | Front-End & Back-End
        </p>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Especialista em React, Node.js e TypeScript, focado em otimização de resultados e criação de soluções eficientes.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <a
            href="https://www.linkedin.com/in/joaopaulodel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-600/25"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/JoaoPauloDel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 border border-slate-600 shadow-lg"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>

        <div className="mt-16 animate-bounce text-slate-400">
          <p className="text-sm mb-2">Role para baixo</p>
          <ArrowRight className="mx-auto rotate-90" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
