
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onStartBooking: () => void;
  onShowPortfolio: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartBooking, onShowPortfolio }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-32 lg:pb-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur shadow-sm text-pink-600 text-xs font-bold border border-pink-100 uppercase tracking-widest">
              <Sparkles size={14} className="animate-pulse" />
              Expertise em Visagismo & Glamour
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tight">
              Sua beleza, <br/>
              nossa <span className="logo-gradient italic font-script neon-text-pink px-2">assinatura.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              No <span className="font-bold text-slate-800">Simone Nascimento Estúdio</span>, transformamos cada atendimento em uma obra de arte personalizada para o seu rosto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={onStartBooking}
                className="px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-xl hover:shadow-pink-200/50 flex items-center justify-center gap-3 group active:scale-95"
              >
                Reservar meu horário
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onShowPortfolio}
                className="px-10 py-5 bg-white text-slate-800 border border-slate-200 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm active:scale-95"
              >
                Nossos Serviços
              </button>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000" 
                alt="Simone Nascimento Estúdio" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-10 left-10 z-20">
                <p className="text-white font-serif text-3xl font-bold italic">Transformação Real</p>
                <div className="h-1 w-20 bg-cyan-400 mt-2"></div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl max-w-[240px] border border-white/50 hidden sm:block">
              <div className="flex items-center gap-1 text-pink-500 mb-2">
                {[...Array(5)].map((_, i) => <Sparkles key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm font-bold text-slate-800 leading-tight">"A Simone entende exatamente o que meu rosto pede. Visagismo impecável!"</p>
              <p className="text-[10px] text-pink-600 font-bold uppercase tracking-widest mt-3">— Isabella R.</p>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-pink-300 rounded-full -z-0 blur-[100px] opacity-20"></div>
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-cyan-300 rounded-full -z-0 blur-[100px] opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
