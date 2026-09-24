import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Maximize2,
  Camera,
} from 'lucide-react';
import Hero from '../../components/Hero/Hero';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import AboutSection from '../../components/AboutSection/AboutSection';
import GujaratProjects from '../../components/GujaratProjects/GujaratProjects';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import BlogCard from '../../components/BlogCard/BlogCard';
import CTA from '../../components/CTA/CTA';
import { products } from '../../data/products';
import { blogs } from '../../data/blogs';
import { galleryItems } from '../../data/gallery';

export default function Home() {
  const { onOpenQuote } = useOutletContext();

  return (
    <>
      <Helmet>
        <title>Glassofy India — Luxury LED Mirrors & Custom Glass Fabrication | Vadodara</title>
        <meta
          name="description"
          content="Vadodara's premier glass manufacturer. Premium LED Mirrors with 2-year replacement warranty, frameless shower enclosures, designer nameplates, and aluminium fabrication."
        />
        <meta property="og:title" content="Glassofy India — From Mirrors to Rooftops, We Do It All" />
        <meta
          property="og:description"
          content="Premium LED Mirrors (2yr warranty), Glass Doors, Shower Enclosures, Nameplates & Aluminium Fabrication in Vadodara, Gujarat."
        />
        <link rel="canonical" href="https://glassofyindia.com" />
      </Helmet>

      {/* 1. Hero Section */}
      <Hero onOpenQuote={onOpenQuote} />

      {/* 2. Product Categories Strip (Horizontal Scroll Row) */}
      <section className="bg-[#0A1628] py-8 border-y border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-montserrat uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Explore By Category
            </span>
            <span className="text-[11px] text-silver/60 hidden sm:inline font-inter">
              Scroll horizontally to browse →
            </span>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto pb-2 pt-1 no-scrollbar">
            {products.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.slug}`}
                className="group shrink-0 flex items-center gap-3 p-2.5 pr-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-gold/50 hover:bg-white/[0.08] transition-all duration-300 shadow-md"
              >
                <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-navy">
                  <img
                    src={p.image}
                    alt={p.category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-white group-hover:text-gold transition-colors whitespace-nowrap">
                    {p.category}
                  </div>
                  <div className="text-[10px] text-silver/70 font-inter">
                    {p.badge || 'Bespoke Fabrication'}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-silver/40 group-hover:text-gold group-hover:translate-x-0.5 transition-all ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products Grid (Showing 6 items on light background) */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30">
              <Sparkles className="w-3.5 h-3.5 text-[#9C7A3C]" />
              <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-[#9C7A3C]">
                MASTER ARCHITECTURAL PRODUCTS
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628]">
              Crafted for Luxury Residences & Commercial Spaces
            </h2>

            <p className="font-inter text-gray-600 text-sm sm:text-base leading-relaxed">
              Explore our core product lines manufactured with copper-free Saint-Gobain float glass, high-spec SS304 fittings, and precision European finishes.
            </p>
          </div>

          <ProductGrid limit={6} showFilter={true} />
        </div>
      </section>

      {/* 4. On-Site Installations Across Gujarat (Vasna-Bhayli, Ahmedabad, Bharuch, Palej, Vadodara) */}
      <GujaratProjects onOpenQuote={onOpenQuote} />

      {/* 5. About Us Story & Workshop Heritage */}
      <AboutSection />

      {/* 6. Why Choose Us (Dark Contrast Section with 4 Pillars) */}
      <WhyChooseUs />

      {/* 6. Gallery Preview (Curated 6 Architectural Projects) */}
      <section className="py-20 lg:py-28 bg-[#0A1628] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold/30">
                <Camera className="w-3.5 h-3.5 text-gold" />
                <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-gold">
                  INSTALLED EXCELLENCE
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Recent Glass Projects Across Gujarat
              </h2>
              <p className="font-inter text-silver text-sm sm:text-base">
                A glimpse into our recent installations — from Sevasi penthouses to corporate lobbies on Gotri Road.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-montserrat font-bold text-xs uppercase tracking-wider border border-white/20 hover:border-gold/50 transition-all shrink-0"
            >
              <span>View Full Gallery (140+ Projects & Catalogue)</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          {/* 6-Card Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-navy border border-white/10 shadow-lg"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-[#0A1628]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute inset-x-0 bottom-0 p-5 space-y-1">
                  <span className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-gold">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-white text-base sm:text-lg group-hover:text-gold transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-silver/80 line-clamp-1 font-inter">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials & Google Reviews */}
      <Testimonials />

      {/* 8. Blog / Glass Guide Preview (3 Articles on Light Background) */}
      <section className="py-20 lg:py-28 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30">
                <Sparkles className="w-3.5 h-3.5 text-[#9C7A3C]" />
                <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-[#9C7A3C]">
                  EXPERT ADVICE & TRENDS
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1628]">
                Architectural Glass Guides
              </h2>
              <p className="font-inter text-gray-600 text-sm sm:text-base">
                Tips on selecting LED mirror color temperatures, frameless bathroom designs, and custom nameplates.
              </p>
            </div>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A1628] hover:bg-[#132238] text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all shrink-0"
            >
              <span>Explore All Guides</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Dark High-Conversion CTA */}
      <CTA
        variant="dark"
        title="Ready to Elevate Your Bathroom or Living Space?"
        subtitle="Book a free site measurement visit in Vadodara or discuss custom sizes directly with our senior glass fabricator."
        onOpenQuote={onOpenQuote}
      />
    </>
  );
}
