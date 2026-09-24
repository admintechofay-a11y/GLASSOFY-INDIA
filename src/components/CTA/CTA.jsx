import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Sparkles, MessageCircle } from 'lucide-react';

export default function CTA({
  variant = 'dark',
  title = 'Ready to Transform Your Space with Luxury Glass?',
  subtitle = 'Get in touch with our Vadodara design consultants for site measurements, free estimates, and customized fabrication drawings.',
  onOpenQuote,
}) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`py-16 sm:py-20 relative overflow-hidden ${
        isDark
          ? 'bg-[#0A1628] text-white border-t border-b border-white/10'
          : 'bg-[#F5F7FA] text-[#0A1628]'
      }`}
    >
      {/* Background Ambience */}
      {isDark ? (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]" />
        </div>
      ) : (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-gold">
            PERSONALIZED ARCHITECTURAL SOLUTIONS
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p
          className={`font-inter text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-silver/90' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-[#0A1628] font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-gold/25 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:+919412597560"
            className={`px-8 py-4 rounded-full font-montserrat font-semibold text-xs uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 hover:scale-105 active:scale-95 ${
              isDark
                ? 'bg-white/5 hover:bg-white/10 text-white border border-white/20'
                : 'bg-white hover:bg-gray-100 text-[#0A1628] border border-gray-300 shadow-sm'
            }`}
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>Call +91 94125 97560</span>
          </a>

          <a
            href="https://wa.me/919412597560?text=Hello%20Glassofy!%20I%20would%20like%20to%20request%20a%20site%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-montserrat font-semibold text-xs uppercase tracking-wider transition-all duration-300 inline-flex items-center gap-2 shadow-md hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
