import React from 'react';
import { ShieldCheck, Ruler, Zap, Star, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '2-Year LED Mirror Warranty',
      desc: 'Industry-leading direct replacement guarantee with no-questions-asked support on LED strips, sensors, and power supplies.',
      highlight: 'Direct Manufacturer Guarantee',
    },
    {
      icon: Ruler,
      title: 'Custom Sizes & Bespoke Shapes',
      desc: 'From organic asymmetrical curves to 8-foot monolithic bathroom mirrors — everything crafted to your exact millimetric site specs.',
      highlight: 'CNC Waterjet & Beveling',
    },
    {
      icon: Zap,
      title: 'Rapid & Flawless Installation',
      desc: 'Certified local glazier crews handle laser-accurate alignment, silicone weather-sealing, and pristine site cleanup.',
      highlight: 'Trained In-House Glaziers',
    },
    {
      icon: Star,
      title: '4.9 Google Customer Rating',
      desc: '500+ residential villas, commercial showrooms, and architect-backed projects completed with glowing reviews across Gujarat.',
      highlight: '180+ Verified Reviews',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#070F1E] text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-gold">
              THE GLASSOFY ADVANTAGE
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Why Discerning Clients Choose Us
          </h2>

          <p className="font-inter text-silver/80 text-base sm:text-lg">
            We unite international float-glass standards with personalized local craftsmanship and dedicated after-sales service in Vadodara.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold/40 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* 3px Gold Top Border on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold mb-5 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-inter text-sm text-silver/80 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Highlight Badge */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] font-montserrat uppercase font-semibold text-gold/90 tracking-wider">
                    {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
