import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/joaopaulodel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/JoaoPauloDel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} João Paulo Del Vecchio. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2 text-slate-600">
          Desenvolvido com React, TypeScript e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
