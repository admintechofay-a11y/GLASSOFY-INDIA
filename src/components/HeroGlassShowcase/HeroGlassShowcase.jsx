import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

export default function HeroGlassShowcase({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      id: 'mirror',
      name: 'LED Mirrors',
      tabLabel: 'Mirrors',
      badge: '2-Year Warranty',
      title: 'Smart Touch LED Mirrors',
      subtitle: 'Backlit & Front-Lit Luxury Designs',
      image: '/images/catalog/led-mirrors/led-mirrors_p027_img3_1100x1100.jpeg',
      link: '/products/led-mirrors',
      features: [
        '5mm Copper-Free Saint-Gobain Float Glass',
        'Feather-Touch Dimmer & 3 Color CCT (3000K–6000K)',
        'Built-in Anti-Fog Defogger Heating Pad',
      ],
      tag: 'From ₹2,999',
    },
    {
      id: 'shower',
      name: 'Shower Enclosures',
      tabLabel: 'Showers',
      badge: '10mm Toughened',
      title: 'Frameless Shower Cubicles',
      subtitle: 'PVD Gold & Matt Black Hardware',
      image: '/images/catalog/bathrooms/bathrooms_p079_img1_1080x1070.jpeg',
      link: '/products/glass-bathrooms-and-shower-enclosures',
      features: [
        '10mm AIS/Saint-Gobain Safety Toughened Glass',
        'PVD Brushed Gold & SS304 Anti-Rust Hinges',
        'Nano Hydrophobic Water-Repellent Seal',
      ],
      tag: 'Custom Built',
    },
    {
      id: 'office',
      name: 'Office Partitions',
      tabLabel: 'Partitions',
      badge: '12mm Acoustic',
      title: 'Executive Glass Cabins',
      subtitle: 'Acoustic Partitions & Sliding Doors',
      image: '/images/catalog/office-partitions/office-partitions_p086_img2_1100x880.png',
      link: '/products/office-partitions-and-glass-doors',
      features: [
        '12mm Sound-Insulated Acoustic Glass (36dB)',
        'Heavy-Duty Hydraulic Self-Closing Floor Springs',
        'Custom Frosted Privacy Manifestation Designs',
      ],
      tag: 'Commercial',
    },
    {
      id: 'nameplate',
      name: 'LED Nameplates',
      tabLabel: 'Nameplates',
      badge: 'Backlit & UV',
      title: 'Architectural LED Nameplates',
      subtitle: 'Personalised Glass for Villas & Homes',
      image: '/images/catalog/nameplates/nameplates_p061_img3_960x960.jpeg',
      link: '/products/glass-nameplates',
      features: [
        'High-Definition Japanese UV Digital Printing',
        'Warm Ambient 3000K Perimeter LED Illumination',
        'Solid Brass & Stainless Steel Standoff Mountings',
      ],
      tag: 'Weatherproof',
    },
  ];

  const current = products[activeTab];

  return (
    <div className="w-full max-w-[370px] mx-auto">
      {/* Main Sleek Compact Luxury Card */}
      <div className="relative rounded-2xl bg-[#0A1628]/95 backdrop-blur-xl border border-white/15 shadow-2xl p-3 sm:p-3.5 overflow-hidden">
        {/* Compact Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-gold">
              Featured Craftsmanship
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[9px] font-montserrat font-semibold px-2 py-0.5 rounded-full bg-white/5 text-silver border border-white/10">
            <ShieldCheck className="w-2.5 h-2.5 text-gold" />
            Vadodara
          </span>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-4 gap-1 p-0.5 rounded-lg bg-black/40 border border-white/10 mb-2.5">
          {products.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`py-1 px-1 rounded text-[10px] font-montserrat font-semibold transition-all text-center truncate ${
                  isActive
                    ? 'bg-gold text-[#0A1628] font-bold shadow-sm shadow-gold/20'
                    : 'text-silver/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Product Image Frame */}
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-[#070F1E] border border-white/10 shadow-sm group">
          <img
            key={current.id}
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Clean Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/35 to-transparent" />

          {/* Top Badge */}
          <div className="absolute top-2 left-2 z-10">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0A1628]/90 backdrop-blur-md border border-gold/40 text-gold text-[9px] font-montserrat font-bold shadow-sm">
              <Sparkles className="w-2.5 h-2.5 text-gold" />
              <span>{current.badge}</span>
            </span>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute inset-x-0 bottom-0 p-2.5 space-y-0.5">
            <div className="flex items-center justify-between gap-1.5">
              <h3 className="font-display font-bold text-white text-sm sm:text-[15px] leading-tight drop-shadow truncate">
                {current.title}
              </h3>
              <span className="text-[9px] font-montserrat text-gold font-medium shrink-0 bg-black/60 px-1.5 py-0.5 rounded border border-gold/30">
                {current.tag}
              </span>
            </div>
            <p className="text-[10px] text-silver/90 font-inter line-clamp-1 drop-shadow">
              {current.subtitle}
            </p>
          </div>
        </div>

        {/* Compact Feature Bullets */}
        <div className="mt-2.5 p-2 rounded-lg bg-white/[0.03] border border-white/10 space-y-1">
          {current.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 text-[11px] text-silver font-inter"
            >
              <CheckCircle className="w-3 h-3 text-gold shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between gap-2">
          <Link
            to={current.link}
            className="text-[11px] font-montserrat font-bold text-silver hover:text-gold flex items-center gap-0.5 transition-colors"
          >
            <span>Learn More</span>
            <ChevronRight className="w-3 h-3" />
          </Link>

          <button
            type="button"
            onClick={() => onOpenQuote && onOpenQuote(current.name)}
            className="px-3.5 py-1.5 rounded-full bg-gold hover:bg-gold-light text-[#0A1628] font-montserrat font-bold text-[10px] uppercase tracking-wider transition-all shadow hover:shadow-gold/30 hover:scale-105 active:scale-95 flex items-center gap-1"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
