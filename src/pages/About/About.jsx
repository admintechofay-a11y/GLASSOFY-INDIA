import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useOutletContext } from 'react-router-dom';
import {
  Sparkles,
  Home,
  ChevronRight,
  ShieldCheck,
  Award,
  Users,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import CTA from '../../components/CTA/CTA';

export default function About() {
  const { onOpenQuote } = useOutletContext();

  const milestones = [
    {
      year: '2021',
      title: 'Foundation in Vadodara',
      desc: 'Launched our flagship glass fabrication workshop in Vadodara to deliver precision architectural glazing with zero middleman markup.',
    },
    {
      year: '2022',
      title: 'Pioneered Smart LED Mirrors',
      desc: 'Introduced copper-free bathroom LED mirrors with capacitive touch sensors and established our direct 2-Year Full Replacement Warranty.',
    },
    {
      year: '2023',
      title: 'Second Experience Center Launch',
      desc: 'Opened our grand experiential boutique M&M Glass at Phulwadi Char Rasta, showcasing full-scale frameless shower cubicles and solariums.',
    },
    {
      year: '2024 - 2025',
      title: '500+ Installations Across Gujarat',
      desc: 'Partnered with over 45 leading interior design firms and completed landmark residential and commercial installations across Vadodara, Ahmedabad, and Surat.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Glassofy India — Vadodara's Premier Glass & Aluminium Fabricators</title>
        <meta
          name="description"
          content="Learn about Glassofy India's heritage, our 2 Vadodara experience centers, and our commitment to architectural glass excellence and 2-Year LED mirror warranty."
        />
        <link rel="canonical" href="https://glassofyindia.com/about" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0A1628] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/products/glass-rooms/glass_room_rooftop_enclosure.jpg"
            alt="Glass Architecture Project"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-[#070F1E]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="inline-flex items-center gap-2 text-xs font-montserrat text-silver/80 mb-2">
            <Link to="/" className="hover:text-gold flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-silver/40" />
            <span className="text-gold font-semibold">About Us</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Precision Craftsmanship. Enduring Brilliance.
          </h1>

          <p className="font-inter text-silver text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From luxury vanity mirrors to expansive rooftop enclosures — Glassofy India is redefining architectural glass engineering in Gujarat.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Story Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30">
                <Sparkles className="w-3.5 h-3.5 text-[#9C7A3C]" />
                <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-[#9C7A3C]">
                  CRAFTED IN VADODARA
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628]">
                Where Optical Clarity Meets Engineering Strength
              </h2>

              <p className="font-inter text-base text-gray-700 leading-relaxed">
                At <strong>Glassofy India</strong>, we believe glass is more than a building material — it is the soul of contemporary architecture. It invites light, magnifies spatial volume, and connects humans with the outdoors.
              </p>

              <p className="font-inter text-sm sm:text-base text-gray-600 leading-relaxed">
                Headquartered in Vadodara, Gujarat, we maintain two purpose-built experience centers where clients, architects, and interior designers can touch, test, and customize full-scale installations. Every LED mirror is built with copper-free Saint-Gobain float glass, waterproof silicone encapsulation, and high-CRI lighting chips.
              </p>

              {/* 3 Core Value Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-[#9C7A3C] mb-2" />
                  <h4 className="font-display font-bold text-base text-[#0A1628] mb-1">
                    Uncompromised Safety
                  </h4>
                  <p className="text-xs text-gray-600">
                    ISI certified 8mm & 10mm toughened safety glass with rounded chamfered edges.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                  <Award className="w-6 h-6 text-[#9C7A3C] mb-2" />
                  <h4 className="font-display font-bold text-base text-[#0A1628] mb-1">
                    Direct 2-Yr Warranty
                  </h4>
                  <p className="text-xs text-gray-600">
                    Full replacement backing on all LED drivers, demister heaters, and touch switches.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Collage */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-navy">
                <img
                  src="/images/products/aluminium-works/aluminium_sliding_windows_main.jpg"
                  alt="Aluminium and Glass Workshop Fabrication"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#0A1628] text-white p-6 rounded-2xl shadow-2xl border border-gold/30 max-w-xs hidden sm:block">
                <div className="text-2xl font-bold font-display text-gold mb-1">
                  100% In-House
                </div>
                <p className="text-xs text-silver/90 leading-relaxed font-inter">
                  CNC glass cutting, edge polishing, sandblasting, and structural aluminium extrusion fabrication under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Showrooms with Embedded Google Maps */}
      <section className="py-20 bg-[#0A1628] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold/30">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-gold">
                PHYSICAL LOCATIONS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Visit Our Vadodara Experience Centers
            </h2>
            <p className="font-inter text-silver text-sm sm:text-base">
              Experience the clarity of our LED mirrors, inspect shower hardware finishes, and speak directly with our fabrication engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Showroom 1 Card */}
            <div className="rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 shadow-2xl flex flex-col justify-between">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-montserrat uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-gold/20 text-gold">
                    Main Showroom
                  </span>
                  <span className="text-xs text-silver flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold" /> Mon - Sat: 10am - 8pm
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white">
                  Fatehgunj Showroom
                </h3>

                <p className="text-sm text-silver/90 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>
                    A-1, Beside Fatehgunj Police Station, Old Channi Road, Vadodara – 390002, Gujarat
                  </span>
                </p>

                <div className="pt-2 flex items-center gap-4 text-xs font-montserrat">
                  <a
                    href="tel:+919412597560"
                    className="text-gold hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" /> +91 94125 97560
                  </a>
                  <a
                    href="https://maps.google.com/maps?q=A-1+Fatehgunj+Police+Station+Old+Channi+Road+Vadodara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-silver hover:text-white underline underline-offset-4"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="h-64 sm:h-72 w-full bg-navy/60 border-t border-white/10">
                <iframe
                  title="Fatehgunj Showroom Map"
                  src="https://maps.google.com/maps?q=A-1+Beside+Fatehgunj+Police+Station+Old+Channi+Road+Vadodara&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Showroom 2 Card (M&M Glass Experience Center) */}
            <div className="rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 shadow-2xl flex flex-col justify-between">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-montserrat uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-gold/20 text-gold">
                    Experience Center
                  </span>
                  <span className="text-xs text-silver flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold" /> Mon - Sat: 10am - 8pm
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white">
                  M&M Glass Experience Studio
                </h3>

                <p className="text-sm text-silver/90 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>
                    GF 12, DAR AL ASHRAF, POLICE CHOWKI, PHULWADI CHAR RASTA, opp. Chhani Bridge, TP 13, Chhani Jakatnaka, Vadodara – 390002
                  </span>
                </p>

                <div className="pt-2 flex items-center gap-4 text-xs font-montserrat">
                  <a
                    href="tel:+919412597560"
                    className="text-gold hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" /> +91 94125 97560
                  </a>
                  <a
                    href="https://maps.google.com/maps?q=GF+12+DAR+AL+ASHRAF+PHULWADI+CHAR+RASTA+Vadodara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-silver hover:text-white underline underline-offset-4"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="h-64 sm:h-72 w-full bg-navy/60 border-t border-white/10">
                <iframe
                  title="M&M Glass Experience Center Map"
                  src="https://maps.google.com/maps?q=GF+12+DAR+AL+ASHRAF+PHULWADI+CHAR+RASTA+Vadodara&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline of Milestones */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-[#9C7A3C]">
              OUR EVOLUTION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A1628]">
              Milestones Along Our Journey
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gray-200 hidden sm:block">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`relative flex items-center justify-between ${
                  idx % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="w-5/12 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <span className="text-xs font-montserrat font-bold text-[#9C7A3C]">
                    {m.year}
                  </span>
                  <h4 className="font-display font-bold text-lg text-[#0A1628] mb-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed font-inter">
                    {m.desc}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-gold border-4 border-white shadow-md z-10 flex items-center justify-center text-navy font-bold text-xs" />

                <div className="w-5/12" />
              </div>
            ))}
          </div>

          {/* Mobile view of milestones */}
          <div className="sm:hidden space-y-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm"
              >
                <span className="text-xs font-montserrat font-bold text-[#9C7A3C]">
                  {m.year}
                </span>
                <h4 className="font-display font-bold text-base text-[#0A1628] mb-1">
                  {m.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-inter">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Bottom CTA */}
      <CTA
        variant="dark"
        title="Ready to Partner with Vadodara's Glazing Leaders?"
        subtitle="Schedule a consultation with our project managers for commercial or residential builds."
        onOpenQuote={onOpenQuote}
      />
    </>
  );
}
