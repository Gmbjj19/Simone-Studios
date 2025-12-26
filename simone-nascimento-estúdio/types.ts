
export enum ServiceCategory {
  CORTES = 'Cortes e Estilização',
  COR = 'Colorimetria (Cor)',
  TRATAMENTO = 'Tratamentos e Saúde Capilar',
  ALINHAMENTO = 'Alinhamento e Transformação',
  TERAPIA = 'Terapia Capilar',
  PES = 'Pedicure e Nail Design (Pés)',
  OLHAR = 'Design de Sobrancelhas e Olhar',
  CILIOS = 'Pestanas (Cílios)',
  MAQUIAGEM = 'Maquilhagem Profissional'
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number; // in minutes
  category: ServiceCategory;
  description: string;
  image: string;
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  avatar: string;
  specialties: ServiceCategory[];
  rating: number;
}

export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  loyaltyPoints: number;
  notes?: string;
  lastVisit?: string;
}

export interface Appointment {
  id: string;
  clientId: string;
  clientName: string;
  serviceId: string;
  serviceName: string;
  professionalId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed' | 'no-show';
  price: number;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}
