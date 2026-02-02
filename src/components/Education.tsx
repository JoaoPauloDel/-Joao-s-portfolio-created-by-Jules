import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Formação Acadêmica</h2>

        <div className="max-w-3xl mx-auto grid gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600 hover:translate-x-2 transition-transform">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Ciências da Computação</h3>
                <p className="text-slate-600 font-medium">Universidade de Fortaleza (UNIFOR)</p>
                <p className="text-sm text-slate-500 mt-1">5º Semestre (Em andamento)</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-600 hover:translate-x-2 transition-transform">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <BookOpen className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">Desenvolvimento Web Full-Stack</h3>
                <p className="text-slate-600 font-medium">Digital College</p>
                <p className="text-sm text-slate-500 mt-1">Curso Presencial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
