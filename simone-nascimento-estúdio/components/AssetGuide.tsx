
import React, { useState } from 'react';
import { Copy, ExternalLink, Image as ImageIcon, Check, Palette } from 'lucide-react';
import { SERVICES, PROFESSIONALS } from '../constants';

const AssetGuide: React.FC = () => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const UI_ASSETS = [
    { name: 'Hero Background', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000', category: 'Identidade' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 animate-in fade-in duration-700">
      <div className="text-center mb-16">
        <span className="text-pink-600 font-bold text-xs uppercase tracking-[0.4em] block mb-4">Recursos do Projeto</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-serif">Guia de <span className="logo-gradient">Mídia</span></h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Catálogo completo de imagens e ativos visuais utilizados no Simone Nascimento Estúdio.
        </p>
      </div>

      <div className="space-y-16">
        {/* Identidade Visual */}
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Palette className="text-pink-500" /> Identidade Visual & Design
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UI_ASSETS.map((asset, i) => (
              <AssetCard key={i} asset={asset} onCopy={copyToClipboard} copiedUrl={copiedUrl} />
            ))}
          </div>
        </section>

        {/* Serviços */}
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <ImageIcon className="text-cyan-500" /> Imagens de Serviços
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <AssetCard 
                key={i} 
                asset={{ name: service.name, url: service.image, category: service.category }} 
                onCopy={copyToClipboard} 
                copiedUrl={copiedUrl} 
              />
            ))}
          </div>
        </section>

        {/* Profissionais */}
        <section>
          <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Palette className="text-purple-500" /> Avatares da Equipe
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {PROFESSIONALS.map((pro, i) => (
              <div key={i} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
                <img src={pro.avatar} className="w-20 h-20 rounded-full mb-3 object-cover border-2 border-pink-50" />
                <p className="text-[10px] font-bold text-slate-800 text-center truncate w-full">{pro.name}</p>
                <button 
                  onClick={() => copyToClipboard(pro.avatar)}
                  className="mt-2 p-2 text-slate-400 hover:text-pink-600 transition-colors"
                >
                  {copiedUrl === pro.avatar ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const AssetCard = ({ asset, onCopy, copiedUrl }: { asset: any, onCopy: (url: string) => void, copiedUrl: string | null }) => (
  <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="relative h-48">
      <img src={asset.url} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        <button 
          onClick={() => onCopy(asset.url)}
          className="p-3 bg-white rounded-full text-slate-900 hover:bg-pink-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
        >
          {copiedUrl === asset.url ? <Check size={20} /> : <Copy size={20} />}
        </button>
        <a 
          href={asset.url} 
          target="_blank" 
          rel="noreferrer"
          className="p-3 bg-white rounded-full text-slate-900 hover:bg-cyan-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
        >
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
    <div className="p-6">
      <span className="text-[9px] font-bold text-pink-500 uppercase tracking-widest block mb-1">{asset.category}</span>
      <h4 className="font-bold text-slate-800 truncate">{asset.name}</h4>
      <p className="text-[10px] text-slate-400 mt-2 truncate font-mono">{asset.url}</p>
    </div>
  </div>
);

export default AssetGuide;
