export const COMPANY = {
  name: "One Security",
  tagline: "Segurança Eletrônica",
  phone: "(11) 99335-4580",
  whatsapp: "5511978120380", // formato internacional sem +, espaços ou traços
  whatsappDisplay: "(11) 97812-0380",
  email: "contatos@onesecurity.app",
  address: "São Paulo, SP",
  hours: "Atendimento 24h • 7 dias por semana",
  experience: "+10 anos",
  clients: "+1.500 clientes",
};

export const whatsappLink = (message = "Olá! Gostaria de solicitar um orçamento.") =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
