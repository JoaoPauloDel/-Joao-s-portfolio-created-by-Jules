import React from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-slate-900 dark:bg-slate-950 text-white sticky top-0 z-50 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code2 className="text-blue-400" size={32} />
          <h1 className="text-xl font-bold">JP Del Vecchio</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">Formação</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experiência</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Tecnologias</a>
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-800 dark:hover:bg-slate-900 transition-colors"
            aria-label="Alternar tema"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-800 transition-colors"
            aria-label="Alternar tema"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 dark:bg-slate-900 p-4 absolute top-full left-0 w-full shadow-lg border-t border-slate-700">
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
