import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function ProductCard({ product, variant = 'grid' }) {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-[#0A1628] border border-white/10 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl flex flex-col justify-between ${
        isFeatured ? 'lg:grid lg:grid-cols-12 lg:items-center' : ''
      }`}
    >
      {/* Image container with hover reveal */}
      <div
        className={`relative overflow-hidden bg-black/40 ${
          isFeatured ? 'lg:col-span-6 h-72 sm:h-80 lg:h-full' : 'h-64 sm:h-72'
        }`}
      >
        <img
          src={product.image}
          alt={product.category}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Dark overlay & View Details badge */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            to={`/products/${product.slug}`}
            className="px-5 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#0A1628] font-montserrat font-bold text-xs uppercase tracking-wider shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gold hover:text-navy"
          >
            View Details
          </Link>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3.5 left-3.5 bg-gold text-[#0A1628] text-[11px] font-bold px-2.5 py-1 rounded-full font-montserrat uppercase tracking-wider shadow-md">
            {product.badge}
          </span>
        )}

        {/* LED Glow simulator for LED mirrors */}
        {product.id === 'led-mirrors' && (
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
      </div>

      {/* Content */}
      <div
        className={`p-6 sm:p-7 flex flex-col justify-between flex-1 ${
          isFeatured ? 'lg:col-span-6' : ''
        }`}
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-gold/90">
              Vadodara Glazing
            </span>
          </div>

          <h3 className="text-white font-display font-bold text-xl sm:text-2xl mb-2.5 group-hover:text-gold transition-colors">
            {product.category}
          </h3>

          <p className="text-silver/90 text-sm leading-relaxed mb-4 line-clamp-2">
            {product.shortDesc}
          </p>

          {/* Key Bullet Features */}
          <ul className="space-y-1.5 mb-6 text-xs text-silver/80">
            {product.features.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span className="line-clamp-1">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center text-gold font-montserrat text-xs font-bold tracking-wider uppercase group-hover:text-white transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <span className="text-[11px] text-silver/60 font-inter">
            Custom Sizing
          </span>
        </div>
      </div>
    </div>
  );
}
