import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Experiência Profissional</h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-4 border-slate-200 dark:border-slate-700 ml-3 pl-8 pb-12">
            <div className="absolute -left-3 top-0 bg-blue-600 rounded-full p-2 border-4 border-white dark:border-slate-800 transition-colors">
              <Briefcase size={20} className="text-white" />
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-sm">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded border border-blue-400 dark:border-blue-800 mb-2 inline-block">
                Atualmente
              </span>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-2">Estagiário em Software House</h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Nubba Tech</p>

              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300 list-disc list-inside">
                <li>Desenvolvimento e manutenção de aplicações web.</li>
                <li>Colaboração em projetos Full-Stack utilizando tecnologias modernas.</li>
                <li>Participação ativa em code reviews e reuniões de equipe.</li>
                <li>Aplicação de boas práticas de desenvolvimento de software.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
