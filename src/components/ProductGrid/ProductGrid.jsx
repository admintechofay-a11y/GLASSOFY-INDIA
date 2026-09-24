import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import ProductCard from '../ProductCard/ProductCard';
import { products, categories } from '../../data/products';

export default function ProductGrid({ limit = null, showFilter = true }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filterOptions = ['All', ...categories];

  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      {showFilter && (
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 sm:mb-12 gap-2 no-scrollbar px-2">
          {filterOptions.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-montserrat font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-gold text-[#0A1628] shadow-lg shadow-gold/20 scale-105'
                    : 'bg-white/5 text-silver hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Products Grid with Animated Layout */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {displayedProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show more CTA if limited */}
      {limit && products.length > limit && (
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-[#0A1628] font-montserrat font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-gold/25 transition-all hover:scale-105"
          >
            <span>View All 8 Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
