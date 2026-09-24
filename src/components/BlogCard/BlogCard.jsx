import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

export default function BlogCard({ blog }) {
  return (
    <article className="group rounded-2xl overflow-hidden bg-white border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
      {/* Blog Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3.5 left-3.5 bg-[#0A1628]/90 backdrop-blur-md text-gold text-[11px] font-bold px-3 py-1 rounded-full font-montserrat uppercase tracking-wider border border-gold/30">
          {blog.category}
        </div>
      </div>

      {/* Blog Metadata & Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          {/* Date & Read Time */}
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold-dark" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold-dark" />
              {blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-xl text-[#0A1628] group-hover:text-[#9C7A3C] transition-colors line-clamp-2 mb-3">
            <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
          </h3>

          {/* Excerpt */}
          <p className="font-inter text-sm text-gray-600 leading-relaxed line-clamp-2 mb-6">
            {blog.excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            to={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-montserrat font-bold uppercase tracking-wider text-[#0A1628] group-hover:text-[#9C7A3C] transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-[11px] text-gray-400 font-inter">Glass Insights</span>
        </div>
      </div>
    </article>
  );
}
