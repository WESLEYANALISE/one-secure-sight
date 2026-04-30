export const COMPANY = {
  name: "One Security",
  tagline: "Segurança Eletrônica",
  phone: "(00) 0000-0000",
  whatsapp: "5500000000000", // formato internacional sem +, espaços ou traços
  whatsappDisplay: "(00) 90000-0000",
  email: "contato@onesecurity.com.br",
  address: "Sua Cidade, UF",
  hours: "Atendimento 24h • 7 dias por semana",
  experience: "+10 anos",
  clients: "+1.500 clientes",
};

export const whatsappLink = (message = "Olá! Gostaria de solicitar um orçamento.") =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
