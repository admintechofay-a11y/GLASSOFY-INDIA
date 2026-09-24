import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink, CheckCircle } from 'lucide-react';
import { testimonials, googleReviewsConfig } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0A1628] text-white relative overflow-hidden">
      {/* Decorative Glass Etching Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="etch-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 60 M 0 0 L 60 60" stroke="#FFFFFF" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#etch-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Google Reviews Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold/30">
              <Star className="w-3.5 h-3.5 text-gold fill-gold" />
              <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-gold">
                TESTIMONIALS & REPUTATION
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Praised by Homeowners & Architects in Vadodara
            </h2>
            <p className="font-inter text-silver text-sm sm:text-base">
              Real feedback from residential bungalows, commercial studios, and architectural renovations across Gujarat.
            </p>
          </div>

          {/* Google Review Badge Link */}
          <div className="shrink-0">
            <a
              href={googleReviewsConfig.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300 group shadow-lg"
            >
              <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-white text-navy font-bold">
                <span className="text-sm font-montserrat">G</span>
                <span className="text-[9px] text-gray-500 font-semibold">Google</span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">4.9 / 5</span>
                </div>
                <div className="text-xs text-silver mt-0.5">
                  180+ verified Google Reviews
                </div>
                <div className="text-[11px] text-gold font-montserrat font-semibold group-hover:underline flex items-center gap-1 mt-0.5">
                  Write or Read Reviews <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Testimonials Carousel / Grid */}
        <div className="relative">
          {/* Active Featured Card on Mobile/Tablet or Desktop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className="relative rounded-2xl bg-white/[0.04] border border-white/10 hover:border-gold/40 p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Star Rating & Quote Mark */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-gold">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-gold/20 group-hover:text-gold/40 transition-colors" />
                  </div>

                  {/* Project Tag */}
                  <div className="text-xs font-montserrat font-semibold uppercase tracking-wider text-gold mb-3 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                    <span>{t.project}</span>
                  </div>

                  {/* Review Text */}
                  <p className="font-inter text-silver/90 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{t.review}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-[#9C7A3C] text-[#0A1628] font-bold font-montserrat flex items-center justify-center text-sm shadow">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {t.name}
                      </h4>
                      <p className="text-xs text-silver/70">
                        {t.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-silver/50 font-inter">
                    {t.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Link to leave a review */}
        <div className="mt-12 text-center">
          <a
            href={googleReviewsConfig.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-montserrat text-xs uppercase tracking-wider hover:border-gold/40 transition-all"
          >
            <span>Have we worked together? Leave a Review on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
