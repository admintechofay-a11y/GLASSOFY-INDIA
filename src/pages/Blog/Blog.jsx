import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useOutletContext } from 'react-router-dom';
import {
  Sparkles,
  Home,
  ChevronRight,
  BookOpen,
  Instagram,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import BlogCard from '../../components/BlogCard/BlogCard';
import { blogs } from '../../data/blogs';
import CTA from '../../components/CTA/CTA';

export default function Blog() {
  const { onOpenQuote } = useOutletContext();
  const categories = [...new Set(blogs.map((b) => b.category))];

  return (
    <>
      <Helmet>
        <title>Glass & Interior Guides — Glassofy India Blog</title>
        <meta
          name="description"
          content="Expert architectural advice on selecting bathroom LED mirrors, frameless shower enclosures, glass nameplates, and maintenance tips for Indian homes."
        />
        <link rel="canonical" href="https://glassofyindia.com/blog" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0A1628] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/catalog/led-mirrors/led-mirrors_p023_img4_2880x1920.jpeg"
            alt="Interior Glass & LED Mirrors"
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
            <span className="text-gold font-semibold">Blog & Guides</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Glass & Glazing Architecture Journal
          </h1>

          <p className="font-inter text-silver text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Technical buying guides, style forecasts, and maintenance wisdom from our Vadodara glass engineers.
          </p>
        </div>
      </section>

      {/* Main Content Grid with Sidebar */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Blog Articles (8 cols) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>

            {/* Right Column: Sidebar (4 cols) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Categories Box */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-4">
                <h3 className="font-display text-lg font-bold text-[#0A1628] border-b border-gray-100 pb-3">
                  Topics & Categories
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {categories.map((cat, idx) => (
                    <li key={idx} className="flex items-center justify-between py-1">
                      <span className="font-inter">{cat}</span>
                      <span className="text-xs font-montserrat text-[#9C7A3C] font-semibold bg-gold/10 px-2 py-0.5 rounded-full">
                        {blogs.filter((b) => b.category === cat).length} Articles
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instagram Teaser Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0A1628] to-[#070F1E] text-white border border-gold/30 shadow-xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 flex items-center justify-center text-white">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base">
                      @glassofy_india
                    </h4>
                    <p className="text-xs text-silver/80">Follow on Instagram</p>
                  </div>
                </div>

                <p className="text-xs text-silver leading-relaxed font-inter">
                  Watch behind-the-scenes video reels of mirror polishing, laser cutting, and live client installations in Vadodara.
                </p>

                <a
                  href="https://instagram.com/glassofy_india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-gold hover:bg-gold-light text-navy font-montserrat font-bold text-xs uppercase tracking-wider transition-all block text-center shadow"
                >
                  Visit Instagram Profile
                </a>
              </div>

              {/* Free Consultation Box */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-center space-y-3">
                <ShieldCheck className="w-8 h-8 text-[#9C7A3C] mx-auto" />
                <h4 className="font-display font-bold text-lg text-[#0A1628]">
                  Need Custom Fabrication?
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed font-inter">
                  Have a specific question or architectural drawing? Request a direct callback from our technical lead.
                </p>
                <button
                  onClick={() => onOpenQuote()}
                  className="w-full py-2.5 rounded-full bg-[#0A1628] hover:bg-[#132238] text-white font-montserrat font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Request Consultation
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTA
        variant="dark"
        title="Stay Inspired with Glassofy India"
        subtitle="Subscribe or reach out for custom project inquiries, bulk hotel orders, and residential renovations."
        onOpenQuote={onOpenQuote}
      />
    </>
  );
}
