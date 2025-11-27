'use client'; // Obrigatório para interatividade

import { Home, User, FolderGit2, Zap, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');

  // Ícones e IDs das seções
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'sobre', icon: User, label: 'Sobre' },
    { id: 'projetos', icon: FolderGit2, label: 'Projetos' },
    { id: 'skills', icon: Zap, label: 'Skills' },
    { id: 'contato', icon: Mail, label: 'Contato' },
  ];

  // Função para rolar até a seção suavemente
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Mágica para detectar qual seção está na tela
  useEffect(() => {
    const container = document.getElementById('scroll-container');
    
    const handleScroll = () => {
      if (!container) return;
      
      // Cálculo simples: Posição do scroll / Largura da tela
      const scrollPosition = container.scrollLeft;
      const width = window.innerWidth;
      const index = Math.round(scrollPosition / width);
      
      if (navItems[index]) {
        setActiveSection(navItems[index].id);
      }
    };

    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-[#050505] border-r border-white/10 flex flex-col items-center py-8 z-50">
      
      {/* Logo / Inicial */}
      <div className="mb-12 text-blue-500 font-bold text-2xl font-serif">LJ</div>

      {/* Lista de Ícones */}
      <div className="flex flex-col gap-6 w-full px-4">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                group relative flex items-center justify-center w-full aspect-square rounded-xl transition-all duration-300
                ${isActive 
                  ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' // Ativo: Azul brilhante
                  : 'text-slate-500 hover:bg-white/5 hover:text-slate-200' // Inativo
                }
              `}
            >
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              
              {/* Tooltip (Aparece ao passar o mouse) */}
              <span className="absolute left-14 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto text-slate-600 text-xs rotate-180" style={{ writingMode: 'vertical-rl' }}>
        SCROLL &rarr;
      </div>
    </nav>
  );
}