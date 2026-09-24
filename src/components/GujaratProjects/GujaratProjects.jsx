import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  CheckCircle,
  Play,
  Maximize2,
  X,
  PhoneCall,
  MessageCircle,
  Sparkles,
  Shield,
  Layers,
  Building,
  Video,
  ExternalLink,
} from 'lucide-react';
import { gujaratProjectsData } from '../../data/gujaratProjects';

export default function GujaratProjects({ onOpenQuote }) {
  const [selectedCity, setSelectedCity] = useState('all');
  const [activeMediaModal, setActiveMediaModal] = useState(null);

  const filteredProjects =
    selectedCity === 'all'
      ? gujaratProjectsData.projects
      : gujaratProjectsData.projects.filter(
          (p) =>
            p.cityId === selectedCity ||
            (selectedCity === 'vadodara' &&
              (p.cityId === 'vadodara' || p.cityId === 'vasna-bhayli'))
        );

  const activeCityInfo = gujaratProjectsData.cities.find(
    (c) => c.id === selectedCity
  );

  return (
    <section
      id="gujarat-projects"
      className="py-20 lg:py-28 bg-[#070F1E] text-white relative overflow-hidden border-t border-b border-white/10"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="font-montserrat text-xs font-bold uppercase tracking-widest text-gold">
              GUJARAT-WIDE ARCHITECTURAL FOOTPRINT
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Executed Projects Across Gujarat
          </h2>

          <p className="font-inter text-silver text-sm sm:text-base leading-relaxed">
            From corporate executive cabins in{' '}
            <strong className="text-white font-medium">Ahmedabad</strong> and industrial entrance systems in{' '}
            <strong className="text-white font-medium">Bharuch & Palej</strong> to luxury residential and office partitions in{' '}
            <strong className="text-white font-medium">Vasna-Bhayli & Vadodara</strong> — inspect our verified on-site works.
          </p>

          {/* Quick Hub Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-montserrat">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold font-semibold flex items-center gap-1.5">
              <Building className="w-3 h-3 text-gold" /> Vasna-Bhayli
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold font-semibold flex items-center gap-1.5">
              <Building className="w-3 h-3 text-gold" /> Ahmedabad
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold font-semibold flex items-center gap-1.5">
              <Building className="w-3 h-3 text-gold" /> Bharuch
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold font-semibold flex items-center gap-1.5">
              <Building className="w-3 h-3 text-gold" /> Palej
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold font-semibold flex items-center gap-1.5">
              <Building className="w-3 h-3 text-gold" /> Vadodara Core
            </span>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {gujaratProjectsData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm text-center space-y-1 hover:border-gold/40 transition-colors"
            >
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-gold">
                {stat.number}
              </div>
              <div className="text-xs font-montserrat font-bold text-white uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-silver/70 font-inter">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {gujaratProjectsData.cities.map((city) => {
            const isActive = selectedCity === city.id;
            return (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold text-[#0A1628] shadow-lg shadow-gold/20 scale-105'
                    : 'bg-white/5 text-silver hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>{city.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-[#0A1628]/20 text-[#0A1628]' : 'bg-white/10 text-silver'
                  }`}
                >
                  {city.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                className="group rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-gold/50 shadow-xl flex flex-col transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0A1628]">
                  {project.mediaType === 'video' ? (
                    <div className="relative w-full h-full">
                      <video
                        src={project.src}
                        poster={project.poster}
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 pointer-events-none z-10">
                        <span className="px-2.5 py-1 rounded-full bg-red-600/90 text-white font-montserrat font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md backdrop-blur-sm">
                          <Video className="w-3 h-3" />
                          <span>On-Site Video</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => setActiveMediaModal(project)}
                    >
                      <img
                        src={project.src}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      <div className="absolute top-3 right-3">
                        <button
                          type="button"
                          className="w-8 h-8 rounded-full bg-black/60 text-white hover:text-gold flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110"
                          title="View Full Size"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* City Badge Overlay */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A1628]/85 backdrop-blur-md border border-gold/40 text-gold text-[11px] font-montserrat font-bold">
                      <MapPin className="w-3 h-3 text-gold" />
                      <span>{project.cityName}</span>
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-montserrat font-bold uppercase tracking-wider text-gold/90">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-montserrat px-2 py-0.5 rounded bg-white/5 text-silver border border-white/10">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white group-hover:text-gold transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-silver/80 font-inter leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technical Specifications */}
                  <div className="pt-2 border-t border-white/10 space-y-1.5">
                    <div className="text-[10px] font-montserrat uppercase font-bold text-silver/60 tracking-wider">
                      Fabrication Specs:
                    </div>
                    <ul className="space-y-1">
                      {project.specs.slice(0, 2).map((spec, i) => (
                        <li
                          key={i}
                          className="text-[11px] text-silver flex items-center gap-2 font-inter"
                        >
                          <CheckCircle className="w-3 h-3 text-gold shrink-0" />
                          <span className="truncate">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Row */}
                  <div className="pt-3 flex items-center justify-between gap-3 border-t border-white/5">
                    <a
                      href={`https://wa.me/919412597560?text=${encodeURIComponent(
                        `Hi Glassofy India, I saw your completed project "${project.title}" in ${project.cityName}. I am looking for a similar installation in Gujarat.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-montserrat font-bold text-gold hover:underline flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onOpenQuote && onOpenQuote(project.category)}
                      className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-gold hover:text-[#0A1628] text-white text-[11px] font-montserrat font-bold uppercase tracking-wider transition-all"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gujarat Wide Service Callout Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0F1E36] via-[#0A1628] to-[#0F1E36] border border-gold/30 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-full bg-gold/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-montserrat font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Statewide Gujarat Site Coverage</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Planning a Glass Project in Vasna-Bhayli, Ahmedabad, Bharuch, Palej, or Vadodara?
              </h3>
              <p className="text-silver text-xs sm:text-sm font-inter leading-relaxed">
                Our site-survey teams travel directly to your architectural site, bungalow, corporate office, or industrial plant with laser measurement gear, glass samples, and finish swatches.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={() => onOpenQuote && onOpenQuote('Architectural Glazing')}
                className="px-7 py-4 rounded-full bg-gold hover:bg-gold-light text-[#0A1628] font-montserrat font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-gold/30 hover:scale-105 active:scale-95"
              >
                Schedule Site Measurement
              </button>

              <a
                href="https://wa.me/919412597560?text=Hi%20Glassofy%20India,%20I%20am%20planning%20a%20glass%20project%20in%20Gujarat.%20Please%20schedule%20a%20site%20measurement%20visit."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Fullscreen Photo/Video Viewing */}
      <AnimatePresence>
        {activeMediaModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#0A1628] border border-gold/40 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveMediaModal(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:text-gold flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video bg-black flex items-center justify-center">
                <img
                  src={activeMediaModal.src}
                  alt={activeMediaModal.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-montserrat font-bold">
                    {activeMediaModal.cityName}
                  </span>
                  <span className="text-xs text-silver">
                    {activeMediaModal.category}
                  </span>
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  {activeMediaModal.title}
                </h4>
                <p className="text-xs text-silver leading-relaxed font-inter">
                  {activeMediaModal.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
