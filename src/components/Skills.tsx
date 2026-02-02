import React from 'react';
import { Code, Database, Layout, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: <Layout className="text-blue-500" size={24} />,
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap 5", "HTML", "CSS"]
    },
    {
      title: "Back-End",
      icon: <Terminal className="text-green-500" size={24} />,
      skills: ["Node.js", "Java", "Python"]
    },
    {
      title: "Database",
      icon: <Database className="text-purple-500" size={24} />,
      skills: ["SQL", "MySQL"]
    },
    {
      title: "Outros",
      icon: <Code className="text-orange-500" size={24} />,
      skills: ["Git", "GitHub", "Vite", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Tecnologias & Habilidades</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                {category.icon}
                <h3 className="font-bold text-slate-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
