
import React from 'react';
import { Award, Gift, History, Settings, ChevronRight, CreditCard, Heart } from 'lucide-react';

const UserProfile: React.FC = () => {
  const points = 450;
  const nextAward = 1000;
  const progress = (points / nextAward) * 100;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-8 animate-in fade-in duration-500">
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col md:flex-row items-center gap-8">
        <div className="relative">
          <img src="https://i.pravatar.cc/150?u=ana" className="w-32 h-32 rounded-full border-4 border-amber-50 shadow-lg" />
          <div className="absolute -bottom-2 -right-2 bg-amber-600 text-white p-2 rounded-full shadow-lg">
            <Award size={20} />
          </div>
        </div>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-bold text-slate-800">Olá, Ana Beatriz!</h1>
          <p className="text-slate-500">Membro Silver desde 2022</p>
          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">VIP Client</span>
            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">Cabelos & Unhas</span>
          </div>
        </div>
        <div className="bg-slate-900 text-white p-6 rounded-2xl w-full md:w-64 shadow-xl">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Saldo de Beleza</p>
          <div className="flex items-center gap-2 text-3xl font-bold">
            <Heart className="text-amber-500" fill="currentColor" size={24} />
            {points} pts
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Fidelidade Card */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-6">
              <Gift className="text-amber-600" /> Programa Recompensa
            </h3>
            <p className="text-sm text-slate-600 mb-2">Sua próxima recompensa: <strong>R$ 50,00 OFF</strong></p>
            <div className="w-full h-4 bg-slate-100 rounded-full mb-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-1000" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-400 text-right">{points} / {nextAward} pontos</p>
            
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-100">
                <span className="text-sm font-medium text-amber-800">Design de Sobrancelha</span>
                <span className="text-xs font-bold text-amber-600">500 pts</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl grayscale opacity-50 border border-slate-100">
                <span className="text-sm font-medium text-slate-500">Hidratação Kérastase</span>
                <span className="text-xs font-bold text-slate-400">1200 pts</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-50 rounded-full blur-3xl -z-0"></div>
        </div>

        {/* Quick Menu */}
        <div className="space-y-4">
          {[
            { label: 'Meus Agendamentos', icon: History, sub: '3 confirmados' },
            { label: 'Cartões Salvos', icon: CreditCard, sub: 'Visa final 4432' },
            { label: 'Minhas Fotos', icon: Award, sub: 'Histórico de looks' },
            { label: 'Configurações', icon: Settings, sub: 'Dados e Privacidade' },
          ].map((item, i) => (
            <button 
              key={i} 
              className="w-full flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 text-slate-500 rounded-xl group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
                  <item.icon size={20} />
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-800">{item.label}</p>
                  <p className="text-xs text-slate-400">{item.sub}</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-300 group-hover:text-amber-600" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
