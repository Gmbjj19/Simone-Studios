
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingFlow from './components/BookingFlow';
import AIServiceAssistant from './components/AIServiceAssistant';
import AdminDashboard from './components/AdminDashboard';
import UserProfile from './components/UserProfile';
import Portfolio from './components/Portfolio';
import AssetGuide from './components/AssetGuide';
import Logo from './components/Logo';
import { Instagram, MapPin, Phone, Mail, Sparkles, MessageCircle, User, ExternalLink } from 'lucide-react';

type View = 'home' | 'booking' | 'admin' | 'ai' | 'profile' | 'portfolio' | 'assets';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const WHATSAPP_LINK = "https://wa.me/5511983758528";
  const INSTAGRAM_STUDIO = "https://www.instagram.com/studio_simone_nascimento193/";
  const MAP_LINK = "https://www.google.com/search?q=Rua+Antonio+de+alencar+213+-+Cep%3A+02223-050";

  const handleBookingComplete = (data: any) => {
    alert(`Agendamento confirmado para ${data.selectedDate} às ${data.selectedTime}! Verifique seu WhatsApp em breve.`);
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (newView: View) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-pink-100 selection:text-pink-900">
      <Header onNavigate={navigateTo as any} currentView={view} />

      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero onStartBooking={() => navigateTo('booking')} onShowPortfolio={() => navigateTo('portfolio')} />
            
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                  <span className="text-pink-600 font-bold text-xs uppercase tracking-[0.4em] block mb-4">Diferenciais</span>
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-serif">Excelência em <span className="logo-gradient italic">Cada Detalhe</span></h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    { title: 'Visagismo Estrutural', desc: 'Análise morfológica facial para cortes que valorizam sua estrutura óssea.', icon: <Sparkles className="text-cyan-500" /> },
                    { title: 'Tecnologia Capilar', desc: 'Tratamentos baseados em IA e biotecnologia para saúde profunda dos fios.', icon: <Sparkles className="text-pink-500" /> },
                    { title: 'Atendimento Exclusivo', desc: 'Sessões individuais focadas na sua experiência de relaxamento e transformação.', icon: <Sparkles className="text-purple-500" /> },
                  ].map((feat, i) => (
                    <div key={i} className="group p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                        {feat.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3 font-serif">{feat.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {view === 'portfolio' && <Portfolio onStartBooking={() => navigateTo('booking')} />}
        {view === 'booking' && <div className="bg-slate-50/50 min-h-screen"><BookingFlow onComplete={handleBookingComplete} /></div>}
        {view === 'ai' && <AIServiceAssistant />}
        {view === 'admin' && <AdminDashboard />}
        {view === 'profile' && <UserProfile />}
        {view === 'assets' && <AssetGuide />}
      </main>

      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Logo size="md" className="brightness-200 grayscale" />
              <p className="text-slate-400 text-sm font-light">Especialistas em visagismo e beleza autêntica. Transformando vidas através do olhar artístico desde 2015.</p>
              <div className="flex gap-3">
                <a href={INSTAGRAM_STUDIO} target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-pink-600 transition-colors"><Instagram size={18} /></a>
                <a href={WHATSAPP_LINK} target="_blank" className="p-2 bg-white/5 rounded-lg hover:bg-green-600 transition-colors"><MessageCircle size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-6">Menu</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li onClick={() => navigateTo('home')} className="hover:text-white cursor-pointer">Início</li>
                <li onClick={() => navigateTo('portfolio')} className="hover:text-white cursor-pointer">Portfólio</li>
                <li onClick={() => navigateTo('booking')} className="hover:text-white cursor-pointer font-bold text-pink-400">Agendar Agora</li>
                <li onClick={() => navigateTo('ai')} className="hover:text-white cursor-pointer">Consultoria IA</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-6">Contato</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2"><Phone size={14} /> (11) 98375-8528</li>
                <li className="flex items-center gap-2"><Mail size={14} /> nascimentodasilvasimone9@gmail.com</li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-1 shrink-0" />
                  <a href={MAP_LINK} target="_blank" className="hover:text-white leading-tight">
                    Rua Antonio de Alencar, 213<br/>CEP 02223-050, SP
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-6">Atalhos</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li onClick={() => navigateTo('assets')} className="hover:text-white cursor-pointer">Guia de Mídia</li>
                <li onClick={() => navigateTo('admin')} className="hover:text-white cursor-pointer">Acesso Profissional</li>
                <li>Políticas de Privacidade</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Simone Nascimento Estúdio • Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
