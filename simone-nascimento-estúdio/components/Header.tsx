
import React from 'react';
import { User, Menu, ImageIcon } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onNavigate: (view: 'home' | 'booking' | 'admin' | 'ai' | 'profile' | 'portfolio' | 'assets') => void;
  currentView: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => onNavigate('home')}
        >
          <Logo size="sm" />
          <div className="hidden lg:block">
            <h1 className="text-lg font-bold tracking-tight text-slate-800 font-serif leading-none">
              Simone <span className="logo-gradient">Nascimento</span>
            </h1>
            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-semibold">Estúdio</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          {['home', 'portfolio', 'booking', 'ai', 'assets'].map((tab) => (
            <button 
              key={tab}
              onClick={() => onNavigate(tab as any)}
              className={`hover:text-pink-500 transition-colors uppercase tracking-widest text-xs font-bold ${
                currentView === tab ? 'text-pink-600 border-b-2 border-pink-500 pb-1' : ''
              }`}
            >
              {
                tab === 'home' ? 'Início' : 
                tab === 'portfolio' ? 'Portfólio' : 
                tab === 'booking' ? 'Agendar' : 
                tab === 'ai' ? 'Consultoria AI' : 'Mídia'
              }
            </button>
          ))}
          <button 
            onClick={() => onNavigate('admin')}
            className={`px-3 py-1 rounded-lg transition-colors text-xs font-bold uppercase tracking-widest ${
              currentView === 'admin' ? 'bg-slate-900 text-white' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            Admin
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors md:hidden">
            <Menu size={20} />
          </button>
          <button 
            onClick={() => onNavigate('profile')}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-95 ${
              currentView === 'profile' 
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            <User size={14} />
            <span className="hidden sm:inline">Perfil</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
