import React from 'react';
import { GraduationCap, BookOpen, Languages } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-white">Formação Acadêmica</h2>

        <div className="max-w-3xl mx-auto grid gap-8">
          {/* UNIFOR */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-l-4 border-blue-600 hover:translate-x-2 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Ciências da Computação</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">Universidade de Fortaleza (UNIFOR)</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">5º Semestre (Em andamento)</p>
              </div>
            </div>
          </div>

          {/* Digital College */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-l-4 border-green-600 hover:translate-x-2 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <BookOpen className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Desenvolvimento Web Full-Stack</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">Digital College</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Curso Presencial</p>
              </div>
            </div>
          </div>

          {/* Wizard */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border-l-4 border-red-600 hover:translate-x-2 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                <Languages className="text-red-600 dark:text-red-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Ensino de Inglês como Segundo Idioma</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">Wizard by Pearson</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Ago 2024 - Ago 2027</p>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
                  Atividades: Conversação em inglês e situações diárias.
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Inglês Americano", "ESL", "Comunicação", "Programação"].map((skill, i) => (
                    <span key={i} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
