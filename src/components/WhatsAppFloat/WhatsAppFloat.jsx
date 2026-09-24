import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappUrl =
    "https://wa.me/919412597560?text=" +
    encodeURIComponent("Hello Glassofy India! I would like to inquire about your custom glass products and LED mirrors.");

  return (
    <aside aria-label="WhatsApp Support">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Glassofy India on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-300 group border border-white/20"
      >
        {/* Pulsing indicator */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        {/* WhatsApp Icon */}
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />

        <span className="hidden sm:inline font-inter font-semibold text-sm tracking-wide">
          Chat with us
        </span>
      </a>
    </aside>
  );
}
