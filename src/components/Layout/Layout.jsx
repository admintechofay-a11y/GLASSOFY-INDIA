import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import WhatsAppFloat from '../WhatsAppFloat/WhatsAppFloat';
import EnquiryModal from '../EnquiryModal/EnquiryModal';

export default function Layout() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [defaultCategory, setDefaultCategory] = useState('');

  const handleOpenQuote = (category = '') => {
    setDefaultCategory(category);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setDefaultCategory('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#0A1628] antialiased">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Outlet for Pages */}
      <main className="flex-1">
        <Outlet context={{ onOpenQuote: handleOpenQuote }} />
      </main>

      {/* Global WhatsApp Floating Button */}
      <WhatsAppFloat />

      {/* Global Quick Quote & Enquiry Modal */}
      <EnquiryModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        defaultCategory={defaultCategory}
      />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
