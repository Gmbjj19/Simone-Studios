
import React, { useState, useRef, useEffect } from 'react';
import { Send, Camera, Sparkles, User, Bot, Loader2, Image as ImageIcon } from 'lucide-react';
import { getAIStylistResponse, analyzeStyleImage } from '../geminiService';
import { Message } from '../types';

const AIServiceAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: 'Olá! Eu sou a assistente de estilo da Simone Studios. Posso te ajudar a escolher um novo visual ou tirar dúvidas sobre nossos serviços. Se preferir, você pode enviar uma foto do seu cabelo ou unhas para uma análise personalizada!', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg, timestamp: new Date() }]);
    
    setIsTyping(true);
    const response = await getAIStylistResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', content: response || "Desculpe, tive um erro.", timestamp: new Date() }]);
    setIsTyping(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = (reader.result as string).split(',')[1];
      setMessages(prev => [...prev, { role: 'user', content: "Enviei uma foto para análise ✨", timestamp: new Date() }]);
      setIsTyping(true);
      
      const analysis = await analyzeStyleImage(base64);
      setMessages(prev => [...prev, { role: 'model', content: analysis || "Erro na análise.", timestamp: new Date() }]);
      setIsTyping(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 h-[800px] flex flex-col">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 font-serif mb-2">Consultoria <span className="text-amber-600">AI</span> de Estilo</h2>
        <p className="text-slate-600">Sua assistente pessoal para transformação e beleza</p>
      </div>

      <div className="flex-1 bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col overflow-hidden">
        <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50/50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                  msg.role === 'user' ? 'bg-slate-900 text-white' : 'bg-amber-600 text-white'
                }`}>
                  {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={`p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-slate-900 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 rounded-tl-none border border-slate-100 shadow-sm'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  <span className="text-[10px] opacity-50 mt-2 block">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] flex gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-600 text-white shadow-sm">
                  <Bot size={20} />
                </div>
                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
                  <Loader2 className="animate-spin text-amber-600" size={16} />
                  <span className="text-sm text-slate-500 italic">Simone Studios está digitando...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
          <form onSubmit={handleSend} className="flex items-center gap-3">
            <button 
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="p-3 bg-slate-100 text-slate-500 rounded-2xl hover:bg-amber-100 hover:text-amber-600 transition-colors"
              title="Analisar foto com AI"
            >
              <Camera size={24} />
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileUpload}
            />
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pergunte sobre serviços ou peça dicas..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-4 bg-amber-600 text-white rounded-2xl hover:bg-amber-700 disabled:opacity-50 shadow-lg transition-all"
            >
              <Send size={24} />
            </button>
          </form>
          <p className="text-[10px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
            <Sparkles size={10} /> Powered by Gemini AI Stylist Expert
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIServiceAssistant;
