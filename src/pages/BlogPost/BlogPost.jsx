import React, { useState } from 'react';
import { useParams, Link, useOutletContext, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Calendar,
  Clock,
  Home,
  ChevronRight,
  Share2,
  Check,
  ArrowLeft,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { blogs } from '../../data/blogs';
import CTA from '../../components/CTA/CTA';

export default function BlogPost() {
  const { slug } = useParams();
  const { onOpenQuote } = useOutletContext();
  const [copied, setCopied] = useState(false);

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareText = encodeURIComponent(
    `Check out this article from Glassofy India: ${blog.title}`
  );
  const shareUrl = encodeURIComponent(window.location.href);

  return (
    <>
      <Helmet>
        <title>{`${blog.title} — Glassofy India`}</title>
        <meta name="description" content={blog.excerpt} />
        <link rel="canonical" href={`https://glassofyindia.com/blog/${blog.slug}`} />
      </Helmet>

      {/* Breadcrumb Header */}
      <section className="pt-28 pb-6 bg-[#0A1628] border-b border-white/10 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs font-montserrat text-silver">
            <Link to="/" className="hover:text-gold flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-silver/40" />
            <Link to="/blog" className="hover:text-gold">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3 text-silver/40" />
            <span className="text-gold font-semibold truncate max-w-xs">
              {blog.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Main Article Section */}
      <article className="py-12 sm:py-16 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Article Header */}
          <div className="mb-8 space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-[#9C7A3C] font-montserrat text-xs font-bold uppercase tracking-wider">
              {blog.category}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A1628] leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1 pb-4 border-b border-gray-200">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#9C7A3C]" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#9C7A3C]" />
                {blog.readTime}
              </span>
              {blog.author && (
                <span className="text-gray-700 font-medium">
                  By {blog.author.name} ({blog.author.role})
                </span>
              )}
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 aspect-[16/9] bg-navy">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Excerpt Lead Paragraph */}
          <div className="p-6 rounded-2xl bg-white border-l-4 border-gold shadow-sm mb-8 text-base sm:text-lg text-gray-700 font-inter leading-relaxed italic">
            "{blog.excerpt}"
          </div>

          {/* Structured Sections */}
          <div className="space-y-8 font-inter text-gray-800 leading-relaxed">
            {blog.sections &&
              blog.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1628]">
                    {sec.heading}
                  </h2>
                  <div className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {sec.content}
                  </div>
                </div>
              ))}
          </div>

          {/* Social Share Bar */}
          <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-montserrat font-bold uppercase text-gray-700">
              <Share2 className="w-4 h-4 text-[#9C7A3C]" />
              <span>Share this Guide</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-montserrat font-semibold flex items-center gap-1.5 shadow-sm hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>

              <button
                onClick={handleCopyLink}
                className="px-3.5 py-1.5 rounded-full bg-white border border-gray-300 text-gray-700 text-xs font-montserrat font-semibold flex items-center gap-1.5 shadow-xs hover:border-gold transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <span>Copy Link</span>
                )}
              </button>
            </div>
          </div>

          {/* Related Articles Box */}
          {relatedBlogs.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h3 className="font-display text-2xl font-bold text-[#0A1628] mb-6">
                Recommended Related Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedBlogs.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/blog/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow group"
                  >
                    <span className="text-[10px] font-montserrat font-bold text-[#9C7A3C] uppercase">
                      {rel.category}
                    </span>
                    <h4 className="font-display font-bold text-base text-[#0A1628] group-hover:text-[#9C7A3C] transition-colors mt-1 mb-2 line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog Button */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-montserrat font-bold uppercase tracking-wider text-[#0A1628] hover:text-[#9C7A3C] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Guides</span>
            </Link>
          </div>
        </div>
      </article>

      {/* Bottom CTA */}
      <CTA
        variant="dark"
        title="Transform Your Home with Custom Glass Craft"
        subtitle="Speak directly with our Vadodara glazing advisors for pricing, site measurements, and custom architectural layouts."
        onOpenQuote={onOpenQuote}
      />
    </>
  );
}
