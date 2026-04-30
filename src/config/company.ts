export const COMPANY = {
  name: "One Security",
  tagline: "Segurança Eletrônica",
  phone: "(11) 95404-9575",
  whatsapp: "5511954049575", // formato internacional sem +, espaços ou traços
  whatsappDisplay: "(11) 95404-9575",
  email: "contato@onesecurity.com.br",
  address: "Sua Cidade, UF",
  hours: "Atendimento 24h • 7 dias por semana",
  experience: "+10 anos",
  clients: "+1.500 clientes",
};

export const whatsappLink = (message = "Olá! Gostaria de solicitar um orçamento.") =>
  `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
