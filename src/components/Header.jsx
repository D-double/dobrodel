import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Menu, X, ShieldCheck, ChevronRight, Hammer } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Header({ onOpenModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Калькулятор', href: '#calculator' },
    { name: 'Проекты', href: '#portfolio' },
    { name: 'Этапы', href: '#process' },
    { name: 'Преимущества', href: '#advantages' },
    { name: 'Статьи', href: '#articles' },
    { name: 'ЧаВо', href: '#faq' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar */}
      <div className={`bg-[#070b10] border-b border-slate-800/80 text-xs text-slate-400 py-2 transition-all duration-300 ${isScrolled ? 'hidden md:block py-1.5' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Санкт-Петербург и Ленинградская область</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.workingHours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href={COMPANY_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp онлайн</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-amber-400 hover:text-amber-300 font-semibold tracking-wide flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#0b1118]/95 backdrop-blur-md shadow-2xl border-b border-slate-800/90 py-3.5' : 'bg-gradient-to-b from-[#0b1118]/90 to-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Hammer className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-2xl tracking-wider text-white">СК ДОБРОДЕЛ</span>
              </div>
              <span className="block text-[10px] tracking-widest uppercase font-semibold text-amber-400/90">
                Строительство & Реконструкция
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-400 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenModal('consultation')}
              className="btn-primary text-xs !py-2.5 !px-5"
            >
              <span>Вызов инженера</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d141e] border-b border-slate-800 shadow-2xl px-6 py-6 animate-fade-in">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-amber-400 transition-colors py-2 border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 text-amber-400 font-bold py-2 border border-amber-400/40 rounded-lg"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phoneFormatted}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('consultation');
                }}
                className="btn-primary w-full text-center"
              >
                Вызов инженера (0 руб.)
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
