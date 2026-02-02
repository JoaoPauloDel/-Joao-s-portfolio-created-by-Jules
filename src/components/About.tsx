import React from 'react';
import { User, Globe, Trophy, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Sobre Mim</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-50 p-6 rounded-lg shadow-sm border border-slate-100">
            <p className="text-slate-600 leading-relaxed mb-4">
              Sou João Paulo Del Vecchio, estudante de Ciências da Computação na UNIFOR e desenvolvedor Full-Stack em formação.
              Atualmente atuo como estagiário na Nubba Tech, onde aplico meus conhecimentos em projetos reais.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Busco constantemente otimizar resultados e criar soluções eficientes, combinando habilidades técnicas em Front-End e Back-End com uma forte capacidade de trabalho em equipe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Globe className="text-blue-600 mb-2" size={32} />
              <h3 className="font-semibold text-slate-800">Idiomas</h3>
              <p className="text-sm text-slate-600">Inglês Avançado</p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Trophy className="text-green-600 mb-2" size={32} />
              <h3 className="font-semibold text-slate-800">Foco</h3>
              <p className="text-sm text-slate-600">Otimização de Resultados</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Users className="text-purple-600 mb-2" size={32} />
              <h3 className="font-semibold text-slate-800">Soft Skills</h3>
              <p className="text-sm text-slate-600">Trabalho em Equipe</p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <User className="text-orange-600 mb-2" size={32} />
              <h3 className="font-semibold text-slate-800">Ferramentas</h3>
              <p className="text-sm text-slate-600">Excel Avançado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
