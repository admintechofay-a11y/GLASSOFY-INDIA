import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import HeroGlassShowcase from '../HeroGlassShowcase/HeroGlassShowcase';

export default function Hero({ onOpenQuote }) {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070F1E] pt-24 pb-16 lg:py-0">
      {/* Background Architectural Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/products/glass-rooms/glass_room_rooftop_enclosure.jpg"
          alt="Luxury Glass Architecture"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070F1E] via-[#0A1628]/90 to-[#0A1628]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-transparent to-transparent" />
      </div>

      {/* Floating Shimmer Ambient Lights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-gold/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (60% on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
              <span className="font-montserrat text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                GLASSOFY INDIA · VADODARA
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Crafting Brilliance in{' '}
              <span className="gold-gradient-text italic font-medium">
                Glass & Aluminium
              </span>
            </h1>

            {/* Subtext */}
            <p className="font-inter text-base sm:text-lg md:text-xl text-silver/90 max-w-2xl leading-relaxed">
              Premium LED Mirrors with a 2-Year Warranty, Designer Glass, Frameless Enclosures & Custom Fabrication — all manufactured with European precision in Vadodara.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/products"
                className="px-7 py-3.5 rounded-full bg-gold hover:bg-gold-light text-[#0A1628] font-montserrat font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-gold/25 hover:scale-105 active:scale-95 inline-flex items-center gap-2 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/gallery"
                className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-montserrat font-semibold text-sm tracking-wider uppercase border border-white/20 hover:border-gold/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
              >
                View Our Gallery
              </Link>

              <button
                onClick={onOpenQuote}
                className="px-5 py-3 text-gold text-xs font-montserrat font-semibold tracking-wider uppercase underline underline-offset-8 hover:text-white transition-colors"
              >
                Get Custom Quote →
              </button>
            </div>
          </motion.div>

          {/* Right Column: Sleek Compact Product Showcase (40%) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <HeroGlassShowcase onOpenQuote={onOpenQuote} />
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-silver/60 hover:text-gold transition-colors">
        <span className="text-[10px] font-montserrat uppercase tracking-[0.2em]">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-gold" />
      </div>
    </section>
  );
}
