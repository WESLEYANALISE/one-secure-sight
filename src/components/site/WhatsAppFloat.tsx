import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/company";

const WhatsAppFloat = () => {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[hsl(142_76%_38%)] text-white flex items-center justify-center shadow-elegant animate-pulse-ring hover:bg-[hsl(142_76%_44%)] transition-colors"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
    </a>
  );
};

export default WhatsAppFloat;
