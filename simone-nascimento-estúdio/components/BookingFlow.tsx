
import React, { useState, useMemo } from 'react';
import { SERVICES, PROFESSIONALS, TIME_SLOTS } from '../constants';
import { Service, Professional, ServiceCategory } from '../types';
import { Check, ChevronLeft, ChevronRight, Clock, Star, AlertCircle, ShieldCheck } from 'lucide-react';

interface BookingFlowProps {
  onComplete: (booking: any) => void;
}

const BookingFlow: React.FC<BookingFlowProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const categories = useMemo(() => ['all', ...Object.values(ServiceCategory)], []);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return SERVICES;
    return SERVICES.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  const professionalsForService = useMemo(() => {
    if (!selectedService) return [];
    return PROFESSIONALS.filter(p => p.specialties.includes(selectedService.category));
  }, [selectedService]);

  const handleNext = () => {
    if (step === 1 && selectedService) setStep(2);
    else if (step === 2 && selectedProfessional) setStep(3);
    else if (step === 3 && selectedDate && selectedTime) setStep(4);
  };

  const handleFinish = () => {
    if (termsAccepted) onComplete({ selectedService, selectedProfessional, selectedDate, selectedTime });
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 animate-in fade-in duration-500">
      {/* Progress Stepper */}
      <div className="flex items-center justify-between mb-12 relative max-w-md mx-auto">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="z-10 flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              step >= s ? 'bg-pink-600 text-white' : 'bg-slate-200 text-slate-400'
            }`}>
              {step > s ? <Check size={14} /> : s}
            </div>
          </div>
        ))}
        <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-100 -z-0">
          <div className="h-full bg-pink-500 transition-all duration-300" style={{ width: `${((step-1)/3)*100}%` }}></div>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-6 md:p-10">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-serif">Selecione o Serviço</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat as any)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                      activeCategory === cat ? 'bg-pink-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-pink-50'
                    }`}
                  >
                    {cat === 'all' ? 'Todos' : cat}
                  </button>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredServices.map(s => (
                  <button 
                    key={s.id}
                    onClick={() => setSelectedService(s)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      selectedService?.id === s.id ? 'border-pink-500 bg-pink-50/30' : 'border-slate-50 hover:border-pink-200'
                    }`}
                  >
                    <img src={s.image} className="w-full h-32 object-cover rounded-xl mb-3" alt={s.name} />
                    <h3 className="font-bold text-sm text-slate-800">{s.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-pink-600 font-bold">R$ {s.price}</span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">{s.duration} min</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-serif">Escolha o Profissional</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {professionalsForService.map(p => (
                  <button 
                    key={p.id}
                    onClick={() => setSelectedProfessional(p)}
                    className={`flex flex-col items-center p-6 rounded-3xl border-2 transition-all ${
                      selectedProfessional?.id === p.id ? 'border-pink-500 bg-pink-50/30' : 'border-slate-50 hover:border-pink-200'
                    }`}
                  >
                    <img src={p.avatar} className="w-20 h-20 rounded-full mb-3 object-cover shadow-sm" alt={p.name} />
                    <h3 className="font-bold text-slate-800">{p.name}</h3>
                    <p className="text-[10px] text-pink-600 font-bold uppercase tracking-widest">{p.role}</p>
                    <div className="flex items-center gap-1 mt-2 text-amber-500">
                      <Star size={12} fill="currentColor" /> <span className="text-xs font-bold text-slate-700">{p.rating}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-serif">Agende seu Momento</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Data</label>
                  <input 
                    type="date" 
                    className="w-full p-4 rounded-xl border-2 border-slate-100 outline-none focus:border-pink-500" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Horários Disponíveis</label>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map(t => (
                      <button 
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`p-2 rounded-lg border text-xs font-bold transition-all ${
                          selectedTime === t ? 'bg-pink-600 text-white border-pink-600' : 'border-slate-100 hover:bg-pink-50'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck size={32} />
              </div>
              <h2 className="text-2xl font-bold font-serif">Quase lá!</h2>
              <div className="bg-slate-50 p-6 rounded-2xl max-w-sm mx-auto text-left space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Serviço:</span>
                  <span className="font-bold">{selectedService?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Com:</span>
                  <span className="font-bold">{selectedProfessional?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Quando:</span>
                  <span className="font-bold">{selectedDate} às {selectedTime}</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-pink-600">R$ {selectedService?.price}</span>
                </div>
              </div>
              <label className="flex items-center gap-3 justify-center cursor-pointer">
                <input type="checkbox" checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)} className="rounded text-pink-600" />
                <span className="text-[10px] font-bold uppercase text-slate-500">Aceito os termos de agendamento</span>
              </label>
            </div>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t flex justify-between items-center">
          {step > 1 && (
            <button onClick={() => setStep(step - 1)} className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-pink-600">
              <ChevronLeft size={16} className="inline mr-1" /> Voltar
            </button>
          )}
          {step < 4 ? (
            <button 
              onClick={handleNext}
              disabled={(step === 1 && !selectedService) || (step === 2 && !selectedProfessional) || (step === 3 && (!selectedDate || !selectedTime))}
              className="ml-auto bg-slate-900 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] disabled:opacity-50"
            >
              Continuar <ChevronRight size={16} className="inline ml-1" />
            </button>
          ) : (
            <button 
              onClick={handleFinish}
              disabled={!termsAccepted}
              className="ml-auto bg-pink-600 text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] disabled:opacity-50"
            >
              Confirmar Agendamento
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingFlow;
