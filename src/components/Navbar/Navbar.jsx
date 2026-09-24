import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  Compass,
  Layers,
  Wrench,
  Sun,
  LayoutGrid,
} from 'lucide-react';
import { products } from '../../data/products';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Gujarat Works', path: '/#gujarat-projects', isHash: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A1628]/95 backdrop-blur-xl border-b border-white/10 shadow-xl py-3.5'
            : 'bg-gradient-to-b from-[#070F1E]/90 via-[#0A1628]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5D2A8] via-[#C8A96E] to-[#9C7A3C] p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0A1628] rounded-[10px] flex items-center justify-center">
                  <span className="font-montserrat font-extrabold text-gold text-xl tracking-tighter">
                    G
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-lg sm:text-xl text-white tracking-widest leading-none">
                  GLASSOFY
                </span>
                <span className="text-[10px] font-montserrat uppercase tracking-[0.25em] text-gold font-semibold mt-0.5">
                  India · Vadodara
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setProductsDropdownOpen(true)}
                      onMouseLeave={() => setProductsDropdownOpen(false)}
                    >
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `inline-flex items-center gap-1.5 text-sm font-medium transition-colors py-2 ${
                            isActive
                              ? 'text-gold font-semibold'
                              : 'text-silver hover:text-white'
                          }`
                        }
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            productsDropdownOpen ? 'rotate-180 text-gold' : ''
                          }`}
                        />
                      </NavLink>

                      {/* Mega Menu Dropdown */}
                      <AnimatePresence>
                        {productsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] rounded-2xl bg-[#0A1628]/95 backdrop-blur-2xl border border-gold/25 p-5 shadow-2xl mt-1"
                          >
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                              <span className="text-xs uppercase font-montserrat font-semibold tracking-wider text-gold flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                Product Categories
                              </span>
                              <Link
                                to="/products"
                                className="text-xs text-silver hover:text-white font-medium flex items-center gap-1"
                              >
                                View All <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-2.5">
                              {products.map((p) => (
                                <Link
                                  key={p.id}
                                  to={`/products/${p.slug}`}
                                  className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                                >
                                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-white/10 border border-white/10">
                                    <img
                                      src={p.image}
                                      alt={p.category}
                                      className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                      <h4 className="text-xs font-semibold text-white group-hover/item:text-gold transition-colors truncate">
                                        {p.category}
                                      </h4>
                                      {p.badge && (
                                        <span className="text-[9px] bg-gold/20 text-gold px-1.5 py-0.5 rounded font-montserrat font-semibold shrink-0">
                                          {p.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[11px] text-silver/80 line-clamp-1 mt-0.5">
                                      {p.shortDesc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-silver">
                              <span className="flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-gold" />
                                2-Year LED Warranty & Direct Factory Pricing
                              </span>
                              <Link
                                to="/contact"
                                className="text-gold hover:underline font-medium"
                              >
                                Need Custom Sizes? →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (link.isHash) {
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      className="text-sm font-medium transition-colors text-silver hover:text-gold flex items-center gap-1.5 py-2"
                    >
                      <span>{link.name}</span>
                      <span className="text-[9px] bg-gold/15 text-gold px-1.5 py-0.5 rounded font-montserrat font-bold uppercase tracking-wider">
                        Gujarat
                      </span>
                    </a>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-gold font-semibold'
                          : 'text-silver hover:text-white'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919412597560"
                className="text-silver hover:text-white flex items-center gap-2 text-xs font-medium transition-colors"
                title="Call Glassofy Support"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+91 94125 97560</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-[#0A1628] font-montserrat font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-gold/25 active:scale-95"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenQuote}
                className="px-3 py-1.5 rounded-full bg-gold text-[#0A1628] font-montserrat font-bold text-[11px] tracking-wider uppercase shadow"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-gold transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#0A1628] flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex flex-col">
                    <span className="font-montserrat font-extrabold text-xl text-white tracking-widest">
                      GLASSOFY
                    </span>
                    <span className="text-[10px] font-montserrat uppercase tracking-[0.25em] text-gold font-semibold">
                      India · Vadodara
                    </span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-silver hover:text-white"
                  aria-label="Close Navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.isHash ? (
                      <a
                        href={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xl font-display font-bold flex items-center justify-between py-2 text-white hover:text-gold"
                      >
                        <span className="flex items-center gap-2">
                          <span>{link.name}</span>
                          <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded font-montserrat uppercase font-semibold">
                            Gujarat
                          </span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-silver" />
                      </a>
                    ) : (
                      <NavLink
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) =>
                          `text-xl font-display font-bold flex items-center justify-between py-2 ${
                            isActive ? 'text-gold' : 'text-white'
                          }`
                        }
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-4 h-4 text-silver" />
                      </NavLink>
                    )}
                    {link.hasDropdown && (
                      <div className="pl-4 mt-2 space-y-2 border-l border-gold/20">
                        {products.map((p) => (
                          <Link
                            key={p.id}
                            to={`/products/${p.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-sm text-silver hover:text-gold py-1"
                          >
                            {p.category}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-full bg-gold text-[#0A1628] font-montserrat font-bold text-sm tracking-wider uppercase shadow-lg text-center"
              >
                Request Free Quote
              </button>

              <div className="text-center">
                <a
                  href="tel:+919412597560"
                  className="inline-flex items-center gap-2 text-silver text-sm hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>+91 94125 97560</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
