import React, { useState, useEffect } from 'react';
import { useParams, Link, useOutletContext, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Check,
  ShieldCheck,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Home,
  Layers,
  Thermometer,
  Ruler,
} from 'lucide-react';
import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import CTA from '../../components/CTA/CTA';

export default function ProductDetails() {
  const { slug } = useParams();
  const { onOpenQuote } = useOutletContext();

  const product = products.find((p) => p.slug === slug);

  // Active selected image in gallery
  const [activeImage, setActiveImage] = useState(
    product && product.gallery && product.gallery.length > 0 ? product.gallery[0] : (product ? product.image : '')
  );

  // Synchronize activeImage whenever product or slug changes
  useEffect(() => {
    if (product) {
      setActiveImage(product.gallery && product.gallery.length > 0 ? product.gallery[0] : product.image);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug, product]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // LED Mirror color temperature interactive state
  const [selectedKelvin, setSelectedKelvin] = useState('4000K');

  // Related products (exclude current)
  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hi Glassofy India! I am interested in ${product.category}. Please share catalogue, pricing, and custom options.`
  );

  return (
    <>
      <Helmet>
        <title>{`${product.category} — Glassofy India, Vadodara`}</title>
        <meta
          name="description"
          content={`${product.shortDesc} Custom fabrication, 2-Year Warranty options, and professional installation in Vadodara.`}
        />
        <link rel="canonical" href={`https://glassofyindia.com/products/${product.slug}`} />
      </Helmet>

      {/* Breadcrumb Section */}
      <section className="pt-28 pb-6 bg-[#0A1628] border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-montserrat text-silver">
            <Link to="/" className="hover:text-gold flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-silver/40" />
            <Link to="/products" className="hover:text-gold">
              Products
            </Link>
            <ChevronRight className="w-3 h-3 text-silver/40" />
            <span className="text-gold font-semibold truncate max-w-xs">
              {product.category}
            </span>
          </nav>
        </div>
      </section>

      {/* Main Product Showcase Section */}
      <section className="py-12 lg:py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left 55%: Image Gallery Showcase */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Feature Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-navy shadow-2xl aspect-[4/3] sm:aspect-[16/11] border border-gray-200">
                <img
                  src={activeImage}
                  alt={product.category}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-gold text-[#0A1628] text-xs font-bold px-3 py-1.5 rounded-full font-montserrat uppercase tracking-wider shadow-lg">
                    {product.badge}
                  </span>
                )}

                {/* LED Glow overlay when Kelvin simulated */}
                {product.id === 'led-mirrors' && (
                  <div
                    className="absolute inset-0 pointer-events-none transition-all duration-500"
                    style={{
                      boxShadow:
                        selectedKelvin === '3000K'
                          ? 'inset 0 0 70px rgba(255, 180, 50, 0.45)'
                          : selectedKelvin === '4000K'
                          ? 'inset 0 0 70px rgba(255, 230, 180, 0.45)'
                          : 'inset 0 0 70px rgba(180, 220, 255, 0.45)',
                    }}
                  />
                )}
              </div>

              {/* Thumbnails row */}
              {product.gallery && product.gallery.length > 0 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar">
                  {product.gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 transition-all duration-300 ${
                        activeImage === imgUrl
                          ? 'border-gold shadow-lg scale-105'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${product.category} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right 45%: Product Details & Action Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-montserrat uppercase font-bold tracking-widest text-[#9C7A3C] block mb-2">
                  Vadodara Glazing Studio
                </span>
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A1628] leading-tight mb-3">
                  {product.category}
                </h1>
                <p className="font-inter text-gray-700 text-sm sm:text-base leading-relaxed">
                  {product.shortDesc}
                </p>
              </div>

              {/* Long Description */}
              {product.longDesc && (
                <p className="font-inter text-sm text-gray-600 leading-relaxed bg-white p-4 rounded-2xl border border-gray-200/80">
                  {product.longDesc}
                </p>
              )}

              {/* LED Mirror Interactive Kelvin Temperature Bar */}
              {product.id === 'led-mirrors' && (
                <div className="p-4 rounded-2xl bg-white border border-gray-200/90 shadow-sm space-y-3">
                  <div className="flex items-center justify-between text-xs font-montserrat">
                    <span className="font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
                      <Thermometer className="w-3.5 h-3.5 text-[#9C7A3C]" />
                      Interactive Light Temperature
                    </span>
                    <span className="font-bold text-[#9C7A3C]">{selectedKelvin}</span>
                  </div>

                  {/* Gradient visual bar */}
                  <div className="h-3 rounded-full bg-gradient-to-r from-[#B0D4FF] via-[#FFF3D6] to-[#FFB74D] shadow-inner" />

                  {/* Temperature Selector Buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-xs">
                    {[
                      { label: 'Cold White', kelvin: '6000K', bg: 'hover:border-blue-300' },
                      { label: 'Neutral Day', kelvin: '4000K', bg: 'hover:border-amber-200' },
                      { label: 'Warm White', kelvin: '3000K', bg: 'hover:border-amber-400' },
                    ].map((k) => (
                      <button
                        key={k.kelvin}
                        onClick={() => setSelectedKelvin(k.kelvin)}
                        className={`p-2 rounded-xl border text-center transition-all ${
                          selectedKelvin === k.kelvin
                            ? 'bg-[#0A1628] text-white border-[#0A1628] font-bold shadow-md'
                            : 'bg-gray-50 text-gray-700 border-gray-200 ' + k.bg
                        }`}
                      >
                        <div className="font-montserrat text-[11px]">{k.kelvin}</div>
                        <div className="text-[10px] opacity-80">{k.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Available Shapes & Profiles */}
              {product.shapes && product.shapes.length > 0 && (
                <div>
                  <h4 className="text-xs font-montserrat font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                    Available Custom Profiles & Shapes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.shapes.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-700 text-xs font-medium font-inter shadow-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-xs font-montserrat font-bold uppercase tracking-wider text-gray-700">
                  Key Specifications & Features
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-gold/15 text-[#9C7A3C] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Guidance */}
              {product.pricingGuide && (
                <div className="p-3.5 rounded-2xl bg-gold/10 border border-gold/30 text-xs text-gray-800 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#9C7A3C] shrink-0" />
                  <span>
                    <strong>Estimate:</strong> {product.pricingGuide}
                  </span>
                </div>
              )}

              {/* 3 Action Pathways */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={() => onOpenQuote(product.category)}
                  className="w-full py-4 rounded-full bg-gold hover:bg-gold-light text-[#0A1628] font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-gold/25 transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>Request Custom Quote & Dimensions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/919412597560?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-montserrat font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919412597560"
                    className="py-3 px-4 rounded-full bg-[#0A1628] hover:bg-[#132238] text-white font-montserrat font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-[#9C7A3C]">
                  COMPLEMENTARY INSTALLATIONS
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1628] mt-1">
                  Related Architectural Systems
                </h3>
              </div>
              <Link
                to="/products"
                className="text-xs font-montserrat font-bold uppercase text-[#9C7A3C] hover:underline hidden sm:inline"
              >
                View All Categories →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA
        variant="dark"
        title="Schedule a Site Visit in Vadodara"
        subtitle="Our glazier team visits your home or office with profile samples, tint swatches, and laser measurement instruments."
        onOpenQuote={() => onOpenQuote(product.category)}
      />
    </>
  );
}
