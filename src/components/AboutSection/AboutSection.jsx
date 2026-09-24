import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Award, BookOpen } from 'lucide-react';

export default function AboutSection() {
  const statPills = [
    { value: '500+', label: 'Projects Completed' },
    { value: '100+', label: 'Catalog Designs' },
    { value: '2 Yrs', label: 'Direct Warranty' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7FA] text-[#0A1628] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage with Real Glassofy India Photos */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-gold/15 rounded-full blur-3xl" />

            <div className="relative">
              {/* Primary Main Installation Photo (Real Glassofy Office Glazing) */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-navy/10">
                <img
                  src="/images/catalog/office-partitions/office-partitions_p086_img2_1100x880.png"
                  alt="Glassofy Real Installation — Office Glass Partition"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Offset Secondary Image (Real LED Mirror close-up) */}
              <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-square bg-navy/20 hidden sm:block">
                <img
                  src="/images/catalog/led-mirrors/led-mirrors_p023_img4_2880x1920.jpeg"
                  alt="Glassofy Real LED Mirror Craftsmanship"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10" />
              </div>

              {/* Floating Certified Badge */}
              <div className="absolute top-6 left-6 bg-[#0A1628] text-white p-4 rounded-2xl shadow-xl border border-gold/30 flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-montserrat uppercase tracking-wider text-gold font-bold">
                    Official Catalogue
                  </div>
                  <div className="text-sm font-semibold font-display">
                    100+ Custom Models
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-[#9C7A3C]">
                BEAUTIFY YOUR INTERIOR
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628] leading-tight">
              Vadodara's Trusted Glass & LED Mirror Specialists
            </h2>

            <p className="font-inter text-base text-gray-700 leading-relaxed">
              Founded to bring international luxury architectural standards to Indian residences and commercial workspaces, <strong>Glassofy India</strong> operates two specialized experience centers in Vadodara.
            </p>

            <p className="font-inter text-sm sm:text-base text-gray-600 leading-relaxed">
              As presented in our comprehensive 100-page catalogue, we provide custom smart LED mirrors, edge-lit glass nameplates, 3D acoustic glass panels, frameless shower cubicles, office cabin partitions, and balcony railings — all manufactured to your exact blueprints.
            </p>

            {/* Stat Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {statPills.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-center"
                >
                  <div className="font-display text-xl sm:text-2xl font-bold text-[#0A1628]">
                    {stat.value}
                  </div>
                  <div className="font-montserrat text-[10px] sm:text-xs uppercase text-gray-500 font-semibold mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Checkmark Highlights */}
            <div className="space-y-2.5 pt-2 text-sm text-gray-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#9C7A3C] shrink-0" />
                <span>3-Color Temperature LED mirrors with IP44/IP65 moisture sealing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#9C7A3C] shrink-0" />
                <span>Standard sizes: 18×24", 24×24", 30×24", 30×30" or fully custom</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#9C7A3C] shrink-0" />
                <span>Two physical experience centers in Fatehgunj & Chhani, Vadodara</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A1628] hover:bg-[#132238] text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:gap-3 group"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-gray-100 text-[#0A1628] font-montserrat font-bold text-xs uppercase tracking-wider border border-gray-300 shadow-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#9C7A3C]" />
                <span>Browse 100-Page Catalogue</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
