import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Send,
  CheckCircle,
  ExternalLink,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Home,
  ChevronRight,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { products } from '../../data/products';
import { googleReviewsConfig } from '../../data/testimonials';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'LED Mirrors',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit Indian phone number');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          category: formData.category,
          message: formData.message.trim(),
          source: 'Contact Page Consultation Form',
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to dispatch email');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Contact submission error:', err);
      setError(
        'Unable to send enquiry automatically right now. Please reach us directly on WhatsApp (+91 94125 97560) or retry.'
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappInquiryUrl = `https://wa.me/919412597560?text=${encodeURIComponent(
    `*New Contact Enquiry*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'N/A'}\nProduct: ${formData.category}\nMessage: ${formData.message || 'General Enquiry'}`
  )}`;

  return (
    <>
      <Helmet>
        <title>Contact & Showroom Locations — Glassofy India, Vadodara</title>
        <meta
          name="description"
          content="Visit our 2 Vadodara experience centers or contact us for site measurement, quotes, and LED mirror consultations. Call +91 94125 97560 or +91 9359339000."
        />
        <link rel="canonical" href="https://glassofyindia.com/contact" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#0A1628] text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/catalog/pages/page_001.jpg"
            alt="Glassofy India Catalogue Cover"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/85 to-[#070F1E]/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="inline-flex items-center gap-2 text-xs font-montserrat text-silver/80 mb-2">
            <Link to="/" className="hover:text-gold flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-silver/40" />
            <span className="text-gold font-semibold">Contact & Locations</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Let's Discuss Your Glass Vision
          </h1>

          <p className="font-inter text-silver text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Visit our 2 experience centers in Vadodara, call our sales hotlines, or explore our 100-page official catalogue for inspiration.
          </p>

          <div className="pt-2 flex justify-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-gold/40 text-gold text-xs font-montserrat font-bold uppercase tracking-wider transition-all"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Browse 100-Page Catalogue Archive</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section className="py-16 sm:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Contact Information, Showroom Addresses, Maps */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-[#9C7A3C]">
                  DIRECT CONNECT
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1628]">
                  Vadodara Studios & Hotlines
                </h2>
                <p className="font-inter text-sm text-gray-600">
                  We are open Monday through Saturday from 10:00 AM to 8:00 PM for walk-ins and consultation appointments.
                </p>
              </div>

              {/* Direct Hotlines Card with BOTH numbers from PDF & Prompt */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-4">
                <div className="space-y-3">
                  <a
                    href="tel:+919412597560"
                    className="flex items-center gap-3 text-gray-800 hover:text-[#9C7A3C] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/15 text-[#9C7A3C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-montserrat font-bold text-gray-400 uppercase">
                        Primary Sales & WhatsApp
                      </div>
                      <div className="text-base font-bold font-inter text-[#0A1628]">
                        +91 94125 97560
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:+919359339000"
                    className="flex items-center gap-3 text-gray-800 hover:text-[#9C7A3C] transition-colors group pt-2 border-t border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/15 text-[#9C7A3C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-montserrat font-bold text-gray-400 uppercase">
                        Catalogue & Project Hotline (PDF Pg 100)
                      </div>
                      <div className="text-base font-bold font-inter text-[#0A1628]">
                        +91 9359339000
                      </div>
                    </div>
                  </a>
                </div>

                <a
                  href="mailto:info.glassofyindia@gmail.com"
                  className="flex items-center gap-3 text-gray-800 hover:text-[#9C7A3C] transition-colors group pt-3 border-t border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/15 text-[#9C7A3C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-montserrat font-bold text-gray-400 uppercase">
                      Inquiries & Drawings
                    </div>
                    <div className="text-sm font-semibold font-inter text-[#0A1628]">
                      info.glassofyindia@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:admin.techofay@gmail.com"
                  className="flex items-center gap-3 text-gray-800 hover:text-[#9C7A3C] transition-colors group pt-2 border-t border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/15 text-[#9C7A3C] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-montserrat font-bold text-gray-400 uppercase">
                      Admin & Accounts
                    </div>
                    <div className="text-sm font-semibold font-inter text-[#0A1628]">
                      admin.techofay@gmail.com
                    </div>
                  </div>
                </a>
              </div>

              {/* Showroom 1 Card */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-2">
                <span className="text-[10px] font-montserrat uppercase font-bold text-[#9C7A3C] tracking-wider">
                  Showroom 1
                </span>
                <h3 className="font-display font-bold text-lg text-[#0A1628]">
                  Fatehgunj Showroom
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-inter">
                  A-1, Beside Fatehgunj Police Station, Old Channi Road, Vadodara – 390002, Gujarat
                </p>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/maps?q=A-1+Fatehgunj+Police+Station+Old+Channi+Road+Vadodara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-montserrat font-bold uppercase text-[#9C7A3C] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Showroom 2 Card */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-2">
                <span className="text-[10px] font-montserrat uppercase font-bold text-[#9C7A3C] tracking-wider">
                  Showroom 2
                </span>
                <h3 className="font-display font-bold text-lg text-[#0A1628]">
                  Experience Center (M&M Glass)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-inter">
                  GF 12, DAR AL ASHRAF, POLICE CHOWKI, PHULWADI CHAR RASTA, opp. Chhani Bridge, TP 13, Chhani Jakatnaka, Vadodara – 390002
                </p>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/maps?q=GF+12+DAR+AL+ASHRAF+PHULWADI+CHAR+RASTA+Vadodara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-montserrat font-bold uppercase text-[#9C7A3C] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Directions</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Google Review Badge CTA */}
              <a
                href={googleReviewsConfig.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0A1628] text-white flex items-center justify-between border border-gold/30 hover:border-gold shadow-md transition-all group block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold">
                    <Star className="w-5 h-5 fill-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-montserrat uppercase text-gold font-bold">
                      Verified Google Reviews
                    </div>
                    <div className="text-sm font-semibold font-display">
                      ⭐ 4.9 Rating (180+ Reviews)
                    </div>
                  </div>
                </div>
                <span className="text-xs font-montserrat text-gold group-hover:underline flex items-center gap-1">
                  Write Review <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Social Channels Row */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-montserrat font-semibold text-gray-500 uppercase">
                  Social:
                </span>
                <a
                  href="https://instagram.com/glassofy_india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-pink-600 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100090885880839"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/@GlassofyIndia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-red-600 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form & Embedded Map */}
            <div className="lg:col-span-7 space-y-8">
              {/* Form Container */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-xl relative overflow-hidden">
                {!submitted ? (
                  <>
                    <div className="mb-6 space-y-2">
                      <span className="text-xs font-montserrat font-bold uppercase tracking-widest text-[#9C7A3C]">
                        SEND US A MESSAGE
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1628]">
                        Project Consultation & Estimate Form
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        Fill in your project requirements below. Our Vadodara glazing advisors will respond within 2 hours.
                      </p>
                    </div>

                    {error && (
                      <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
                        {error}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-montserrat font-bold uppercase text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Dhaval Patel"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#9C7A3C] focus:bg-white transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-montserrat font-bold uppercase text-gray-700 mb-1.5">
                            Mobile Number * (10 Digits)
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 94125 97560"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#9C7A3C] focus:bg-white transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-montserrat font-bold uppercase text-gray-700 mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@domain.com"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#9C7A3C] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-montserrat font-bold uppercase text-gray-700 mb-1.5">
                          Product Interest
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#9C7A3C] focus:bg-white transition-all"
                        >
                          {products.map((p) => (
                            <option key={p.id} value={p.category}>
                              {p.category}
                            </option>
                          ))}
                          <option value="Custom Project / Other">
                            Other Architectural Glass Solution
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-montserrat font-bold uppercase text-gray-700 mb-1.5">
                          Requirement Details / Dimensions
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Provide details about size (e.g. 18x24 or 30x30 inches), light color, site location in Vadodara..."
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#9C7A3C] focus:bg-white transition-all resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-full bg-gold hover:bg-gold-light text-[#0A1628] font-montserrat font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-gold/30 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 group pt-1 disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[#0A1628] border-t-transparent rounded-full animate-spin"></span>
                            <span>Sending Email Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Free Enquiry</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1628]">
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                      We have received your enquiry for{' '}
                      <span className="font-semibold text-[#9C7A3C]">
                        {formData.category}
                      </span>
                      . Our Vadodara team will reach out on{' '}
                      <span className="font-semibold text-gray-900">
                        {formData.phone}
                      </span>{' '}
                      within 2 hours.
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-montserrat font-medium">
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>Email confirmation dispatched to our desk & your inbox</span>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={whatsappInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-full bg-[#25D366] text-white font-montserrat font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md hover:bg-[#20bd5a]"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Instant WhatsApp Follow-up</span>
                      </a>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            category: 'LED Mirrors',
                            message: '',
                          });
                        }}
                        className="px-6 py-3.5 rounded-full border border-gray-300 text-gray-700 font-montserrat font-semibold text-xs uppercase tracking-wider hover:bg-gray-100"
                      >
                        Submit Another Requirement
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Showroom Interactive Map Frame */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                <div className="p-4 border-b border-gray-100 flex items-center justify-between text-xs font-montserrat">
                  <span className="font-bold text-gray-800 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#9C7A3C]" />
                    Fatehgunj Main Showroom Map
                  </span>
                  <a
                    href="https://maps.google.com/maps?q=A-1+Fatehgunj+Police+Station+Old+Channi+Road+Vadodara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9C7A3C] hover:underline"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
                <div className="h-72 w-full">
                  <iframe
                    title="Glassofy Fatehgunj Location"
                    src="https://maps.google.com/maps?q=A-1+Beside+Fatehgunj+Police+Station+Old+Channi+Road+Vadodara&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
