
import React, { useState } from 'react';
import { SERVICES, PROFESSIONALS, MOCK_CLIENTS, MOCK_APPOINTMENTS } from '../constants';
import { 
  Users, 
  CalendarCheck, 
  TrendingUp, 
  DollarSign, 
  Search,
  MoreVertical,
  CheckCircle2,
  Clock,
  LayoutDashboard,
  Calendar,
  UserCircle,
  BarChart3,
  MessageSquare,
  AlertTriangle
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const revenueData = [
  { name: 'Seg', bookings: 12, revenue: 2400 },
  { name: 'Ter', bookings: 19, revenue: 3800 },
  { name: 'Qua', bookings: 15, revenue: 3000 },
  { name: 'Qui', bookings: 22, revenue: 4500 },
  { name: 'Sex', bookings: 30, revenue: 6200 },
  { name: 'Sáb', bookings: 28, revenue: 5900 },
];

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agenda' | 'clientes' | 'financeiro' | 'automacoes'>('agenda');

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Gestão Simone Studios</h1>
          <p className="text-slate-500">Visão geral do dia: 20 de Novembro, 2023</p>
        </div>
        
        <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-slate-200">
          {[
            { id: 'agenda', icon: Calendar, label: 'Agenda' },
            { id: 'clientes', icon: UserCircle, label: 'CRM' },
            { id: 'financeiro', icon: BarChart3, label: 'Financeiro' },
            { id: 'automacoes', icon: MessageSquare, label: 'Mensagens' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id ? 'bg-amber-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <tab.icon size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'agenda' && (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Atendimentos', val: '24', icon: CalendarCheck, color: 'text-blue-600' },
                { label: 'Confirmados', val: '18', icon: CheckCircle2, color: 'text-green-600' },
                { label: 'Aguardando', val: '4', icon: Clock, color: 'text-amber-600' },
                { label: 'No-Shows', val: '2', icon: AlertTriangle, color: 'text-red-600' },
              ].map((s, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <div className={`mb-2 ${s.color}`}><s.icon size={20} /></div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">{s.label}</p>
                  <p className="text-xl font-bold text-slate-800">{s.val}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-800">Timeline de Hoje</h3>
                <div className="flex gap-2">
                  <button className="text-xs font-bold px-3 py-1 bg-slate-100 rounded-lg">Filtro Profissional</button>
                </div>
              </div>
              <div className="divide-y divide-slate-100">
                {MOCK_APPOINTMENTS.map((app) => (
                  <div key={app.id} className="p-5 hover:bg-slate-50 transition-colors flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-center w-12 shrink-0">
                        <p className="text-sm font-bold text-slate-800">{app.time}</p>
                        <p className="text-[10px] text-slate-400 font-medium">60 min</p>
                      </div>
                      <div className="w-px h-10 bg-slate-200"></div>
                      <div>
                        <p className="font-bold text-slate-800">{app.clientName}</p>
                        <p className="text-xs text-slate-500">{app.serviceName} • {PROFESSIONALS.find(p => p.id === app.professionalId)?.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                        app.status === 'confirmed' ? 'bg-green-100 text-green-700' : 
                        app.status === 'no-show' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {app.status}
                      </span>
                      <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
              <h3 className="text-lg font-bold mb-4">Resumo Financeiro</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-slate-400 text-sm">Faturado Hoje</span>
                  <span className="text-2xl font-bold">R$ 1.840,00</span>
                </div>
                <div className="flex justify-between items-end border-t border-slate-800 pt-4">
                  <span className="text-slate-400 text-sm">Previsto Mês</span>
                  <span className="text-xl font-bold text-amber-500">R$ 28.500,00</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-xl text-sm font-bold transition-all shadow-lg">
                Relatórios Detalhados
              </button>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4">Avisos do Sistema</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 text-red-700 rounded-xl flex gap-3 text-xs leading-relaxed">
                  <AlertTriangle className="shrink-0" size={16} />
                  <span><strong>Estoque Baixo:</strong> Pó descolorante e esmalte Nude Shine estão abaixo do limite mínimo.</span>
                </div>
                <div className="p-3 bg-blue-50 text-blue-700 rounded-xl flex gap-3 text-xs leading-relaxed">
                  <MessageSquare className="shrink-0" size={16} />
                  <span>3 clientes aguardando confirmação manual no WhatsApp.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'clientes' && (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="font-bold text-slate-800">Base de Clientes (CRM)</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Nome, Telefone ou E-mail..." 
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none w-full md:w-80"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Nome</th>
                  <th className="px-6 py-4">Fidelidade</th>
                  <th className="px-6 py-4">Observações Técnicas</th>
                  <th className="px-6 py-4">Última Visita</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {MOCK_CLIENTS.map((client) => (
                  <tr key={client.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                          {client.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">{client.name}</p>
                          <p className="text-xs text-slate-400">{client.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={14} className="text-amber-500" />
                        <span className="font-bold text-slate-700">{client.loyaltyPoints} pts</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <p className="text-xs text-slate-500 truncate italic">"{client.notes || 'Nenhuma observação'}"</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {client.lastVisit ? new Date(client.lastVisit).toLocaleDateString('pt-BR') : '-'}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-amber-600 font-bold text-xs hover:underline">Ver Histórico</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'financeiro' && (
        <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-96">
            <h3 className="font-bold text-slate-800 mb-8 flex items-center justify-between">
              Faturamento Semanal (R$)
              <select className="text-xs border-none bg-slate-100 rounded-lg p-2 font-bold outline-none">
                <option>Novembro / 2023</option>
              </select>
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 4 ? '#d97706' : '#cbd5e1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-amber-600 text-white p-6 rounded-3xl shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Ticket Médio</p>
              <h4 className="text-3xl font-bold">R$ 145,00</h4>
              <p className="text-xs mt-4 flex items-center gap-1">
                <TrendingUp size={14} /> +8% em relação ao mês anterior
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Custo Operacional</p>
              <h4 className="text-3xl font-bold text-slate-800">R$ 4.820,00</h4>
              <div className="w-full h-2 bg-slate-100 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-red-500" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Lucro Líquido Est.</p>
              <h4 className="text-3xl font-bold text-green-600">R$ 12.440,00</h4>
              <p className="text-xs mt-4 text-slate-500 italic">Considerando impostos e comissões.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'automacoes' && (
        <div className="max-w-3xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-300">
           <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Regras de Comunicação (WhatsApp)</h3>
            <div className="space-y-6">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-amber-600 mb-2 uppercase tracking-wider">Lembrete 24h Antes</p>
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  "Oi, Ana! Passando para lembrar do nosso encontro amanhã às 14:30. 📍 Endereço: Av. Paulista, 1000. Por favor, confirme respondendo 1 para SIM ou 2 para REAGENDAR."
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-amber-600 mb-2 uppercase tracking-wider">Pós-Atendimento (Avaliação)</p>
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  "Amamos te receber hoje, Ana! ❤️ Como ficou o resultado? Sua opinião vale muito: [Link de Avaliação]"
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-xs font-bold text-amber-600 mb-2 uppercase tracking-wider">Recuperação de Cliente (30 dias off)</p>
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  "Que saudade, Ana! Notei que faz um tempo que não cuidamos de você. Que tal 10% de desconto na sua próxima visita? Use o cupom VOLTESIMONE."
                </p>
              </div>
            </div>
            <button className="mt-8 w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all">
              Editar Modelos de Mensagem
            </button>
           </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
