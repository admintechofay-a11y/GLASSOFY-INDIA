import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, PhoneCall, Sparkles } from 'lucide-react';
import { products } from '../../data/products';

export default function EnquiryModal({ isOpen, onClose, defaultCategory = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: defaultCategory || 'LED Mirrors',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultCategory) {
      setFormData(prev => ({ ...prev, category: defaultCategory }));
    }
  }, [defaultCategory]);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError('');
      setLoading(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return;
    }
    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (phoneClean.length < 10) {
      setError('Please enter a valid 10-digit mobile number');
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
          source: 'Quick Quote Modal',
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to dispatch email');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Enquiry modal submission error:', err);
      setError('Could not connect to email service right now. Please chat on WhatsApp directly or retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#0A1628] border border-gold/30 shadow-2xl p-6 sm:p-8 z-10 text-white"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-silver hover:text-gold transition-colors p-1.5 rounded-full hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-xs uppercase tracking-widest font-montserrat font-bold text-gold">
                    Personalized Consultation
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                  Request a Free Quote
                </h3>
                <p className="text-silver text-sm mb-6">
                  Share your measurements or project details. Our Vadodara glazing team will get back to you within 2 hours.
                </p>

                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-montserrat font-medium uppercase text-silver mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-silver/40 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-montserrat font-medium uppercase text-silver mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-silver/40 text-sm focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-montserrat font-medium uppercase text-silver mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-silver/40 text-sm focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-medium uppercase text-silver mb-1.5">
                      Product of Interest
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0F1E36] border border-white/10 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      {products.map(p => (
                        <option key={p.id} value={p.category}>
                          {p.category}
                        </option>
                      ))}
                      <option value="Custom Project / Other">Custom Architectural Fabrication</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-montserrat font-medium uppercase text-silver mb-1.5">
                      Approx Dimensions / Notes (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Need 24x30 round LED mirror with defogger for Sevasi bungalow..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-silver/40 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-full bg-gold hover:bg-gold-light text-navy font-montserrat font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2 group mt-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending Quote Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Free Enquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                  <CheckCircle className="w-10 h-10 text-gold" />
                </div>
                <h4 className="font-display text-2xl font-bold mb-2">Thank You, {formData.name}!</h4>
                <p className="text-silver text-sm max-w-sm mx-auto mb-4 leading-relaxed">
                  Your enquiry for <span className="text-gold font-medium">{formData.category}</span> has been received. Our specialist will contact you on <span className="text-white font-medium">{formData.phone}</span> shortly.
                </p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-montserrat font-medium mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Email sent to info.glassofyindia@gmail.com</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/919412597560?text=${encodeURIComponent(
                      `Hi Glassofy! I just submitted an enquiry for ${formData.category}. My name is ${formData.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-[#25D366] text-white font-montserrat font-semibold text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 shadow-lg hover:bg-[#20bd5a]"
                  >
                    <span>Chat on WhatsApp Now</span>
                  </a>
                  <button
                    onClick={onClose}
                    className="px-5 py-3 rounded-full border border-white/20 text-white font-montserrat font-semibold text-xs tracking-wider uppercase hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
