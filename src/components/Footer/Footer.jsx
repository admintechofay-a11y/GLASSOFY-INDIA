import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  ArrowRight,
  ShieldCheck,
  Star,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { products } from '../../data/products';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/glassofy_india',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=100090885880839',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@GlassofyIndia',
    },
    {
      name: 'Google Maps',
      icon: MapPin,
      url: 'https://g.co/kgs/59Sdhc',
    },
  ];

  return (
    <footer className="bg-[#070F1E] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5D2A8] via-[#C8A96E] to-[#9C7A3C] p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#0A1628] rounded-[10px] flex items-center justify-center">
                  <span className="font-montserrat font-extrabold text-gold text-xl tracking-tighter">
                    G
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-xl text-white tracking-widest leading-none">
                  GLASSOFY
                </span>
                <span className="text-[10px] font-montserrat uppercase tracking-[0.25em] text-gold font-semibold mt-0.5">
                  India · Vadodara
                </span>
              </div>
            </Link>

            <p className="font-display italic text-gold text-base">
              "From Mirrors to Rooftops – We Do It All"
            </p>

            <p className="font-inter text-silver/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              Vadodara’s premier glass fabricator and smart LED mirror manufacturer. Specializing in architectural glass installations, shower cubicles, 3D fluted panels, and aluminium windows with guaranteed longevity.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] font-montserrat font-semibold uppercase text-silver/70 tracking-wider block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-silver hover:text-gold hover:border-gold/50 hover:bg-white/10 transition-all duration-300"
                      aria-label={s.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-silver">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gold transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <a href="/#gujarat-projects" className="hover:text-gold transition-colors flex items-center gap-1.5">
                  <span>Gujarat Works (Vasna-Bhayli, Ahmedabad, Bharuch, Palej)</span>
                  <span className="text-[9px] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-montserrat font-bold">
                    Sites
                  </span>
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">
                  About Our Studio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold transition-colors">
                  Glass Guides & Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">
                  Contact & Locations
                </Link>
              </li>
              <li>
                <a
                  href="https://g.page/r/CUwWrQiOaPkLEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold/90 hover:underline flex items-center gap-1"
                >
                  <Star className="w-3 h-3 fill-gold" />
                  Leave a Review
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Products (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest text-gold">
              Catalogue Categories
            </h4>
            <ul className="space-y-2 text-xs text-silver">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {p.category}
                    </span>
                    {p.badge && (
                      <span className="text-[9px] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-montserrat">
                        {p.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest text-gold">
              Vadodara Centers & Hotlines
            </h4>

            {/* Direct Phone Numbers from Prompt & PDF Page 100 */}
            <div className="space-y-1.5 text-xs text-silver">
              <a
                href="tel:+919412597560"
                className="flex items-center gap-2 text-white hover:text-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>+91 94125 97560 (Primary Sales)</span>
              </a>

              <a
                href="tel:+919359339000"
                className="flex items-center gap-2 text-silver hover:text-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>+91 9359339000 (Catalogue Hotline)</span>
              </a>

              <a
                href="mailto:info.glassofyindia@gmail.com"
                className="flex items-center gap-2 text-silver hover:text-gold transition-colors pt-1"
              >
                <Mail className="w-3.5 h-3.5 text-gold" />
                <span>info.glassofyindia@gmail.com</span>
              </a>
            </div>

            {/* Showroom 1 */}
            <div className="text-xs text-silver space-y-1 pt-1 border-t border-white/10">
              <span className="font-semibold text-white block">
                Fatehgunj Showroom:
              </span>
              <p className="text-silver/80 leading-relaxed text-[11px]">
                A-1, Beside Fatehgunj Police Station, Old Channi Road, Vadodara – 390002
              </p>
            </div>

            {/* Showroom 2 */}
            <div className="text-xs text-silver space-y-1">
              <span className="font-semibold text-white block">
                M&M Glass Experience Studio:
              </span>
              <p className="text-silver/80 leading-relaxed text-[11px]">
                GF 12, Dar Al Ashraf, Police Chowki, Phulwadi Char Rasta, Opp. Chhani Bridge, TP 13, Chhani Jakatnaka, Vadodara – 390002
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-silver/60 gap-4">
          <p>
            © {new Date().getFullYear()} Glassofy India. All rights reserved. Vadodara, Gujarat.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/products" className="hover:text-gold transition-colors">
              Products
            </Link>
            <Link to="/gallery" className="hover:text-gold transition-colors">
              100-Page Catalogue
            </Link>
            <a
              href="https://wa.me/919412597560"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
