import React from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code2 className="text-blue-400" size={32} />
          <h1 className="text-xl font-bold">JP Del Vecchio</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a>
          <a href="#education" className="hover:text-blue-400 transition-colors">Formação</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experiência</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Tecnologias</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 p-4 absolute top-full left-0 w-full shadow-lg">
          <nav className="flex flex-col gap-4">
            <a href="#about" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Sobre</a>
            <a href="#education" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Formação</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Experiência</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Tecnologias</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
