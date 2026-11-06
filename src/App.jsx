import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import Calculator from './components/Calculator';
import PortfolioSection from './components/PortfolioSection';
import ProcessSection from './components/ProcessSection';
import WhyUsSection from './components/WhyUsSection';
import NewsSection from './components/NewsSection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickContactFloating from './components/QuickContactFloating';
import LeadModal from './components/LeadModal';
import Preloader from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (type = 'consultation', data = null) => {
    setModalData(data);
    setModalOpen(true);
  };

  const handleSelectService = (service) => {
    handleOpenModal('service', service);
  };

  return (
    <>
      {/* Visual Architectural Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div className={`min-h-screen bg-[#0b1118] text-slate-100 selection:bg-amber-400 selection:text-slate-950 font-sans transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Top Header Navigation */}
        <Header onOpenModal={() => handleOpenModal('consultation')} />

        {/* Main Sections */}
        <main>
          {/* Hero Section */}
          <Hero onOpenModal={() => handleOpenModal('consultation')} />

          {/* Services & Capabilities */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* Interactive Cost Calculator */}
          <Calculator onEstimateSubmitted={(data) => console.log('Estimate submitted:', data)} />

          {/* Portfolio Showcase with Lightbox */}
          <PortfolioSection />

          {/* 5-step transparent workflow */}
          <ProcessSection />

          {/* Why Choose Us & About SK Dobrodel */}
          <WhyUsSection onOpenModal={() => handleOpenModal('consultation')} />

          {/* Company News & Expert Building Articles */}
          <NewsSection />

          {/* Real Customer Feedback */}
          <ReviewsSection />

          {/* FAQ Accordion */}
          <FaqSection onOpenModal={() => handleOpenModal('question')} />

          {/* Contact info, coverage & Request Form */}
          <ContactSection onContactSubmitted={(data) => console.log('Contact submitted:', data)} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Action Button (WhatsApp, Telegram, Phone) */}
        <QuickContactFloating onOpenModal={() => handleOpenModal('consultation')} />

        {/* Lead capture / engineer call modal */}
        <LeadModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialData={modalData}
        />
      </div>
    </>
  );
}
