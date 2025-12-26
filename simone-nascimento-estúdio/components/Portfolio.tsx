
import React, { useState, useMemo } from 'react';
import { SERVICES, PROFESSIONALS } from '../constants';
import { ServiceCategory } from '../types';
import { Sparkles, Calendar, Clock, ChevronRight, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

interface PortfolioProps {
  onStartBooking: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onStartBooking }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const categories = useMemo(() => {
    return ['all', ...Object.values(ServiceCategory)];
  }, []);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return SERVICES;
    return SERVICES.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-[#fffaff] min-h-screen animate-in fade-in duration-700">
      {/* Portfolio Header */}
      <section className="relative pt-20 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
           <Logo className="scale-[5] opacity-20 rotate-12" />
        </div>
        
        <span className="text-pink-600 font-bold text-xs uppercase tracking-[0.5em] block mb-4">Experiência Signature</span>
        <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 font-serif leading-none">
          Catálogo de <span className="logo-gradient italic">Beleza</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg font-light">
          Explore nossa curadoria de rituais e tratamentos. Cada serviço é uma jornada personalizada desenhada para elevar sua identidade única.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-12 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
                  : 'bg-white text-slate-400 border border-slate-100 hover:border-pink-300 hover:text-pink-600 shadow-sm'
              }`}
            >
              {cat === 'all' ? 'Ver Todos' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Services */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service, idx) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-bold text-pink-600 uppercase tracking-widest shadow-lg">
                  {service.category}
                </div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="font-serif text-2xl font-bold italic">{service.name}</p>
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-slate-900 font-serif leading-tight">{service.name}</h3>
                  <p className="text-pink-600 font-bold text-lg whitespace-nowrap ml-4">R$ {service.price}</p>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-3">
                  {service.description}
                </p>

                <div className="flex items-center gap-6 pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock size={14} className="text-cyan-500" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{service.duration} min</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Sparkles size={14} className="text-pink-500" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">High Performance</span>
                  </div>
                </div>

                <button 
                  onClick={onStartBooking}
                  className="w-full mt-6 py-4 bg-slate-50 text-slate-800 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                >
                  Agendar este ritual
                  <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="py-20 text-center">
             <p className="text-slate-400 font-serif italic text-xl">Nenhum serviço encontrado nesta categoria...</p>
          </div>
        )}
      </section>

      {/* CTA Footer for Portfolio */}
      <section className="bg-slate-900 py-24 px-4 overflow-hidden relative">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8 font-serif leading-tight">
            Pronta para sua <span className="logo-gradient">melhor versão?</span>
          </h3>
          <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">
            Seja para um retoque de manutenção ou uma transformação completa, o Simone Nascimento Estúdio está pronto para revelar sua assinatura.
          </p>
          <button 
            onClick={onStartBooking}
            className="px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-bold text-sm uppercase tracking-[0.3em] hover:opacity-90 transition-all shadow-2xl shadow-pink-900/40 active:scale-95 flex items-center gap-4 mx-auto"
          >
            Reservar Experiência
            <Calendar size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
