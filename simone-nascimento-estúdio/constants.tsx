
import { Service, ServiceCategory, Professional, Appointment, Client } from './types';

export const SERVICES: Service[] = [
  // 1. Cortes e Estilização
  {
    id: 'c1',
    name: 'Corte Feminino (Design)',
    price: 180,
    duration: 60,
    category: ServiceCategory.CORTES,
    description: 'Design personalizado: Curto, Médio, Longo, Repicado, Bob, Pixie com consultoria de visagismo.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'c2',
    name: 'Corte de Manutenção',
    price: 120,
    duration: 40,
    category: ServiceCategory.CORTES,
    description: 'Ajuste rápido das pontas para manter o corte atual e remover ressecamento.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'c3',
    name: 'Corte Terapêutico (Bordado)',
    price: 150,
    duration: 60,
    category: ServiceCategory.CORTES,
    description: 'Técnica que remove pontas duplas sem alterar o comprimento, preservando a saúde dos fios.',
    image: 'https://images.unsplash.com/photo-1593121925328-369cc84e9c08?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'c4',
    name: 'Escova e Modelagem',
    price: 85,
    duration: 45,
    category: ServiceCategory.CORTES,
    description: 'Finalização impecável: Escova lisa, modelada com ondas ou babyliss de alta durabilidade.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'c5',
    name: 'Penteados Sociais',
    price: 250,
    duration: 90,
    category: ServiceCategory.CORTES,
    description: 'Criações exclusivas para festas e eventos: semi-preso, coque clássico ou tranças artísticas.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=400'
  },

  // 2. Colorimetria
  {
    id: 'cr1',
    name: 'Coloração Global',
    price: 280,
    duration: 120,
    category: ServiceCategory.COR,
    description: 'Transformação total da cor da raiz às pontas com pigmentos de alta fidelidade.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'cr2',
    name: 'Retoque de Raiz',
    price: 190,
    duration: 90,
    category: ServiceCategory.COR,
    description: 'Manutenção perfeita para cobertura de fios brancos ou crescimento da cor natural.',
    image: 'https://images.unsplash.com/photo-1617391911588-403485748a60?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'cr3',
    name: 'Mechas / Luzes Tradicionais',
    price: 450,
    duration: 180,
    category: ServiceCategory.COR,
    description: 'Iluminação clássica com touca ou papel para um loiro vibrante e uniforme.',
    image: 'https://images.unsplash.com/photo-1620331311520-246422ff82f9?auto=format&fit=crop&q=80&w=400'
  },

  // 3. Tratamentos e Saúde Capilar
  {
    id: 't1',
    name: 'Hidratação Profunda',
    price: 95,
    duration: 60,
    category: ServiceCategory.TRATAMENTO,
    description: 'Reposição hídrica imediata para devolver maciez e movimento aos fios ressecados.',
    image: 'https://images.unsplash.com/photo-1527799820374-d888a96c76a5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 't6',
    name: 'Cronograma Capilar (Mensal)',
    price: 480,
    duration: 60,
    category: ServiceCategory.TRATAMENTO,
    description: 'Pacote com 4 sessões personalizadas (Hidratação, Nutrição e Reconstrução).',
    image: 'https://images.unsplash.com/photo-1492162300535-32bd441a00d9?auto=format&fit=crop&q=80&w=400'
  },

  // 6. Pedicure e Nail Design (Pés)
  {
    id: 'p_pe1',
    name: 'Pedicure Tradicional',
    price: 60,
    duration: 45,
    category: ServiceCategory.PES,
    description: 'Corte, cutilagem técnica e esmaltação perfeita para o dia a dia.',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_pe2',
    name: 'Spa dos Pés',
    price: 110,
    duration: 75,
    category: ServiceCategory.PES,
    description: 'Imersão em sais, esfoliação profunda, hidratação e massagem relaxante.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_pe3',
    name: 'Plástica dos Pés',
    price: 150,
    duration: 90,
    category: ServiceCategory.PES,
    description: 'Tratamento específico para remoção de calosidades e fissuras severas.',
    image: 'https://images.unsplash.com/photo-1519415510236-8657f2232811?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_pe4',
    name: 'Esmaltação em Gel (Pés)',
    price: 95,
    duration: 60,
    category: ServiceCategory.PES,
    description: 'Brilho e durabilidade de até 20 dias intactos para seus pés.',
    image: 'https://images.unsplash.com/photo-1604654894610-df490682160c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_pe5',
    name: 'Nail Art Personalizada',
    price: 45,
    duration: 30,
    category: ServiceCategory.PES,
    description: 'Desenhos manuais, pedrarias ou efeitos exclusivos (Ombré, Francesinha).',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400'
  },

  // 7. Design de Sobrancelhas e Olhar
  {
    id: 'p_ol1',
    name: 'Design Personalizado',
    price: 75,
    duration: 40,
    category: ServiceCategory.OLHAR,
    description: 'Mapeamento facial para formato ideal via Pinça ou Linha Egípcia.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_ol2',
    name: 'Design com Henna',
    price: 100,
    duration: 60,
    category: ServiceCategory.OLHAR,
    description: 'Preenchimento de falhas e destaque do formato com pigmentação natural.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_ol3',
    name: 'Brow Lamination',
    price: 220,
    duration: 75,
    category: ServiceCategory.OLHAR,
    description: 'Alinhamento dos fios naturais para aspecto encorpado e moderno.',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_ol4',
    name: 'Micropigmentação',
    price: 850,
    duration: 150,
    category: ServiceCategory.OLHAR,
    description: 'Procedimento semi-permanente para reconstrução total da sobrancelha.',
    image: 'https://images.unsplash.com/photo-1583006509331-f8ca0dfee7b5?auto=format&fit=crop&q=80&w=400'
  },

  // 8. Pestanas (Cílios)
  {
    id: 'p_ci1',
    name: 'Extensão Fio a Fio',
    price: 250,
    duration: 120,
    category: ServiceCategory.CILIOS,
    description: 'Efeito natural com aplicação de fio sintético individual.',
    image: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30e5a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_ci2',
    name: 'Volume Russo / Híbrido',
    price: 350,
    duration: 150,
    category: ServiceCategory.CILIOS,
    description: 'Máximo volume e curvatura para um olhar marcante e luxuoso.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_ci3',
    name: 'Lash Lifting',
    price: 180,
    duration: 60,
    category: ServiceCategory.CILIOS,
    description: 'Curvatura e hidratação dos seus próprios cílios naturais.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_ci4',
    name: 'Manutenção de Pestanas',
    price: 150,
    duration: 90,
    category: ServiceCategory.CILIOS,
    description: 'Serviço de retoque para preencher fios que caíram naturalmente.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400'
  },

  // 9. Maquilhagem Profissional
  {
    id: 'p_ma1',
    name: 'Maquilhagem Social',
    price: 280,
    duration: 75,
    category: ServiceCategory.MAQUIAGEM,
    description: 'Para convidadas de eventos, festas e formaturas (Day ou Night).',
    image: 'https://images.unsplash.com/photo-1522337300245-22526c32c1c2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_ma2',
    name: 'Maquilhagem Express',
    price: 150,
    duration: 40,
    category: ServiceCategory.MAQUIAGEM,
    description: 'Foco apenas em pele corrigida ou apenas olhos para eventos rápidos.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_ma3',
    name: 'Maquilhagem Noiva/Debutante',
    price: 1200,
    duration: 180,
    category: ServiceCategory.MAQUIAGEM,
    description: 'Serviço premium com teste prévio e preparação de pele blindada.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'p_ma4',
    name: 'Pestanas Postiças (Avulso)',
    price: 50,
    duration: 15,
    category: ServiceCategory.MAQUIAGEM,
    description: 'Serviço avulso para quem deseja apenas o olhar destacado.',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=400'
  },

  // Original Terapia Capilar
  {
    id: 'tp1',
    name: 'Detox Capilar',
    price: 180,
    duration: 75,
    category: ServiceCategory.TERAPIA,
    description: 'Desintoxicação profunda do couro cabeludo para estimular o crescimento saudável.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=400'
  }
];

export const PROFESSIONALS: Professional[] = [
  {
    id: 'p1',
    name: 'Simone Nascimento',
    role: 'CEO & Master Stylist',
    avatar: 'https://i.pravatar.cc/150?u=simone',
    specialties: [ServiceCategory.CORTES, ServiceCategory.COR, ServiceCategory.TERAPIA, ServiceCategory.MAQUIAGEM, ServiceCategory.OLHAR],
    rating: 5.0
  },
  {
    id: 'p2',
    name: 'Renata Souza',
    role: 'Especialista em Olhar & Pés',
    avatar: 'https://i.pravatar.cc/150?u=renata',
    specialties: [ServiceCategory.PES, ServiceCategory.OLHAR, ServiceCategory.CILIOS],
    rating: 4.8
  },
  {
    id: 'p3',
    name: 'Carlos Mendes',
    role: 'Colorista Senior',
    avatar: 'https://i.pravatar.cc/150?u=carlos',
    specialties: [ServiceCategory.COR, ServiceCategory.ALINHAMENTO, ServiceCategory.CORTES],
    rating: 4.9
  }
];

export const MOCK_CLIENTS: Client[] = [
  { id: 'c1', name: 'Ana Beatriz', phone: '(11) 91234-5678', email: 'ana@email.com', loyaltyPoints: 450, notes: 'Alérgica a amônia', lastVisit: '2023-10-20' },
  { id: 'c2', name: 'Bruna Mendes', phone: '(11) 98765-4321', email: 'bruna@email.com', loyaltyPoints: 120, notes: 'Prefere café sem açúcar', lastVisit: '2023-11-05' },
  { id: 'c3', name: 'Carla Silva', phone: '(11) 99999-8888', email: 'carla@email.com', loyaltyPoints: 890, lastVisit: '2023-11-12' },
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  { id: 'a1', clientId: 'c1', clientName: 'Ana Beatriz', serviceId: 'c1', serviceName: 'Corte Premium', professionalId: 'p1', date: '2023-11-20', time: '14:30', status: 'confirmed', price: 180 },
  { id: 'a2', clientId: 'c2', clientName: 'Bruna Mendes', serviceId: 'p_pe1', serviceName: 'Pedicure', professionalId: 'p2', date: '2023-11-20', time: '15:15', status: 'pending', price: 60 },
  { id: 'a3', clientId: 'c3', clientName: 'Carla Silva', serviceId: 'cr1', serviceName: 'Coloração', professionalId: 'p3', date: '2023-11-20', time: '16:00', status: 'confirmed', price: 280 },
  { id: 'a4', clientId: 'c4', clientName: 'Diana Lima', serviceId: 'p_ol1', serviceName: 'Design Sobrancelha', professionalId: 'p1', date: '2023-11-20', time: '17:00', status: 'no-show', price: 75 },
];

export const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];
