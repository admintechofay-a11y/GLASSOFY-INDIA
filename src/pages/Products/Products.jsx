import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Sparkles, Home, ChevronRight, ShieldCheck, Ruler, CheckCircle2 } from 'lucide-react';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import CTA from '../../components/CTA/CTA';

export default function Products() {
  const { onOpenQuote } = useOutletContext();

  return (
    <>
      <Helmet>
        <title>All Glass & Aluminium Products — Glassofy India, Vadodara</title>
        <meta
          name="description"
          content="Explore our full collection of LED Mirrors (2-Year Warranty), Designer Glass Nameplates, Shower Enclosures, Glass Doors, Hardware and Aluminium Fabrication in Vadodara."
        />
        <link rel="canonical" href="https://glassofyindia.com/products" />
      </Helmet>

      {/* Hero Banner with Dark Contrast & Breadcrumbs */}
      <section className="relative pt-32 pb-20 bg-[#0A1628] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/products/glass-rooms/glass_room_rooftop_enclosure.jpg"
            alt="Architectural Glass Systems"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-[#070F1E]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          {/* Breadcrumb */}
          <nav className="inline-flex items-center gap-2 text-xs font-montserrat text-silver/80 mb-2">
            <Link to="/" className="hover:text-gold flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-silver/40" />
            <span className="text-gold font-semibold">Products</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Architectural Glass & Mirror Systems
          </h1>

          <p className="font-inter text-silver text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every product is custom-manufactured in Vadodara to your exact architectural blueprints and measurements.
          </p>

          {/* Quick Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-montserrat text-silver">
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              2-Year Replacement Warranty on LED Mirrors
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <Ruler className="w-3.5 h-3.5 text-gold" />
              100% Custom Dimensions & Profiles
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
              Factory-Direct Rates in Gujarat
            </span>
          </div>
        </div>
      </section>

      {/* Main Filterable Product Catalog */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGrid limit={null} showFilter={true} />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA
        variant="dark"
        title="Can't Find Your Exact Specifications?"
        subtitle="We build completely custom glass installations, curved walls, and specialized mirrors. Contact our engineering team directly."
        onOpenQuote={onOpenQuote}
      />
    </>
  );
}
