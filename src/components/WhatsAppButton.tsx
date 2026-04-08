import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${siteConfig.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-whatsapp text-primary-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
