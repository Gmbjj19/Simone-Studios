
import { GoogleGenAI } from "@google/genai";

// Inicialização segura conforme as diretrizes
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTIONS = `Você é a Assistente Virtual do Simone Nascimento Estúdio, salão referência em visagismo em São Paulo. 
Seu tom é glamouroso, profissional e acolhedor. 

Informações Oficiais para Clientes:
- WhatsApp: (11) 98375-8528
- Proprietária: Simone Nascimento (Expert em Colorimetria e Visagismo)
- Endereço: Rua Antonio de alencar 213 - Cep: 02223-050, São Paulo - SP.
- Horários: Ter-Sex (09h-19h), Sáb (08h-18h).

Diretrizes:
1. Sempre sugira agendar um horário via site ou WhatsApp para avaliações personalizadas.
2. Ao falar de serviços, foque nos benefícios do visagismo (como harmonizar o rosto).
3. Seja breve, elegante e use emojis de brilho (✨) moderadamente.`;

export const getAIStylistResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTIONS,
        temperature: 0.8,
      },
    });
    return response.text; // Acesso direto à propriedade .text conforme as regras
  } catch (error) {
    console.error("AI Service Error:", error);
    return "Minhas ferramentas de beleza estão passando por um retoque. Por favor, entre em contato via WhatsApp (11) 98375-8528 para assistência imediata.";
  }
};

export const analyzeStyleImage = async (base64Image: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          { inlineData: { data: base64Image, mimeType: 'image/jpeg' } },
          { text: "Analise esta imagem sob a ótica do visagismo. Dê 3 dicas curtas e glamourosas de como o Simone Nascimento Estúdio pode elevar a beleza dessa pessoa." }
        ]
      },
      config: {
        systemInstruction: SYSTEM_INSTRUCTIONS,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Image Analysis Error:", error);
    return "Tive uma falha ao visualizar sua foto. Que tal marcarmos uma consultoria presencial na Rua Antonio de Alencar, 213?";
  }
};
