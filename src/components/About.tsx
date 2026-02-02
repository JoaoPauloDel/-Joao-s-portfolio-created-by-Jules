import React from 'react';
import { User, Globe, Trophy, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Sobre Mim</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Sou João Paulo Del Vecchio, estudante de Ciências da Computação na UNIFOR e desenvolvedor Full-Stack em formação.
              Atualmente atuo como estagiário na Nubba Tech, onde aplico meus conhecimentos em projetos reais.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Busco constantemente otimizar resultados e criar soluções eficientes, combinando habilidades técnicas em Front-End e Back-End com uma forte capacidade de trabalho em equipe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex flex-col items-center text-center hover:shadow-md transition-shadow border border-blue-100 dark:border-blue-900/30">
              <Globe className="text-blue-600 dark:text-blue-400 mb-2" size={32} />
              <h3 className="font-semibold text-slate-800 dark:text-white">Idiomas</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Inglês Avançado</p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg flex flex-col items-center text-center hover:shadow-md transition-shadow border border-green-100 dark:border-green-900/30">
              <Trophy className="text-green-600 dark:text-green-400 mb-2" size={32} />
              <h3 className="font-semibold text-slate-800 dark:text-white">Foco</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Otimização de Resultados</p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex flex-col items-center text-center hover:shadow-md transition-shadow border border-purple-100 dark:border-purple-900/30">
              <Users className="text-purple-600 dark:text-purple-400 mb-2" size={32} />
              <h3 className="font-semibold text-slate-800 dark:text-white">Soft Skills</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Trabalho em Equipe</p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex flex-col items-center text-center hover:shadow-md transition-shadow border border-orange-100 dark:border-orange-900/30">
              <User className="text-orange-600 dark:text-orange-400 mb-2" size={32} />
              <h3 className="font-semibold text-slate-800 dark:text-white">Ferramentas</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Excel Avançado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
