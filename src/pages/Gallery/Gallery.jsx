import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useOutletContext } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import {
  Camera,
  Home,
  ChevronRight,
  Sparkles,
  Eye,
  MapPin,
  BookOpen,
  ArrowDown,
  Layers,
} from 'lucide-react';
import { galleryItems, galleryCategories } from '../../data/gallery';
import CTA from '../../components/CTA/CTA';

export default function Gallery() {
  const { onOpenQuote } = useOutletContext();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [visibleCount, setVisibleCount] = useState(18);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);

  // Prepare slides for yet-another-react-lightbox
  const slides = filteredItems.map((item) => ({
    src: item.src,
    title: item.title,
    description: `${item.description} — ${item.location}`,
  }));

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(18); // Reset pagination on tab change
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 18);
  };

  return (
    <>
      <Helmet>
        <title>Project Gallery & 100-Page Catalogue — Glassofy India</title>
        <meta
          name="description"
          content="Explore real-world installations of LED Mirrors, Shower Cubicles, 3D Decorative Glass Panels, and our full 100-Page Official Catalogue."
        />
        <link rel="canonical" href="https://glassofyindia.com/gallery" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0A1628] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/catalog/pages/page_001.jpg"
            alt="Glass Architecture Project"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/80 to-[#070F1E]/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="inline-flex items-center gap-2 text-xs font-montserrat text-silver/80 mb-2">
            <Link to="/" className="hover:text-gold flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-silver/40" />
            <span className="text-gold font-semibold">Gallery & Catalogue</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Architectural Project Gallery & Lookbook
          </h1>

          <p className="font-inter text-silver text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Real photography extracted directly from our official 100-page catalogue — showcasing bespoke LED mirrors, 3D panels, shower cubicles, and office glazing.
          </p>

          {/* Quick Filter Shortcut for Catalogue */}
          <div className="pt-2">
            <button
              onClick={() => handleCategoryChange('100-Page Catalogue')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-navy font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
            >
              <BookOpen className="w-4 h-4" />
              <span>View 100-Page Official Catalogue Spread</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter Bar & Masonry Grid */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 sm:mb-14 gap-2 no-scrollbar px-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#0A1628] text-gold shadow-md scale-105 border border-gold/40'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between mb-6 px-1 text-xs text-gray-500 font-montserrat">
            <span>
              Showing {displayedItems.length} of {filteredItems.length} items in{' '}
              <strong className="text-gray-900">{activeCategory}</strong>
            </span>
            <span className="hidden sm:inline">
              Click any photo to open full-screen lightbox
            </span>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {displayedItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-2xl overflow-hidden bg-navy shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer aspect-[4/3] border border-gray-200/80"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Hover Overlay with Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-[#0A1628]/60 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Center Click-to-Zoom Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gold/90 text-navy flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom Captions */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white space-y-1 z-10">
                  <span className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-gold">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg leading-snug group-hover:text-gold transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-silver/90 line-clamp-1 font-inter flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold shrink-0" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="mt-14 text-center">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0A1628] hover:bg-[#132238] text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all"
              >
                <span>Load More Designs ({filteredItems.length - visibleCount} remaining)</span>
                <ArrowDown className="w-4 h-4 text-gold" />
              </button>
            </div>
          )}

          {/* Lightbox Component */}
          <Lightbox
            open={lightboxIndex >= 0}
            index={lightboxIndex}
            close={() => setLightboxIndex(-1)}
            slides={slides}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA
        variant="dark"
        title="Inspired by What You See in Our Catalogue?"
        subtitle="Bring your architectural dreams to life. Share photos of your space and we will craft a bespoke 3D glass rendering and quote."
        onOpenQuote={onOpenQuote}
      />
    </>
  );
}
