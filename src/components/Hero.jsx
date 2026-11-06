import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import Reveal from './Reveal';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette and Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Строительство загородных домов СК Добродел"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-110"
        />
        {/* Gradients like VictoryClub */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'linear-gradient(135deg, rgba(11, 17, 24, 0.96) 0%, rgba(15, 23, 34, 0.8) 55%, rgba(229, 169, 60, 0.25) 100%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1118] via-[#0b1118]/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <Reveal delay={100} direction="down">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>СК ДОБРОДЕЛ · САНКТ-ПЕТЕРБУРГ & ЛЕНОБЛАСТЬ</span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={200} direction="up">
            <h1 className="heading-hero">
              СТРОИМ НАДЕЖНЫЕ ДОМА.<br />
              <span className="text-gradient">НА ВЕКА С ГАРАНТИЕЙ.</span>
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal delay={300} direction="up">
            <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-light max-w-2xl">
              Строительство коттеджей из клееного бруса, каркаса и газобетона. 
              Капитальная реконструкция зданий, фундаменты и благоустройство участков 
              «под ключ» по типовым и индивидуальным проектам.
            </p>
          </Reveal>

          {/* Call to Actions */}
          <Reveal delay={400} direction="up">
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a href="#calculator" className="btn-primary group">
                <Calculator className="w-4 h-4" />
                <span>Рассчитать смету дома</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onOpenModal('consultation')}
                className="btn-outline"
              >
                Бесплатная консультация
              </button>
            </div>
          </Reveal>

          {/* Trust bullets */}
          <Reveal delay={500} direction="fade">
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Фиксированная смета в договоре</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Поэтапная оплата по факту</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Официальная гарантия до 10 лет</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats Grid ticker (Template 569703 style) with staggered delay */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <Reveal key={idx} delay={550 + idx * 100} direction="scale">
              <div
                className="bg-[#131b26]/80 backdrop-blur-md border border-slate-800 hover:border-amber-400/50 p-5 rounded-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="font-display font-black text-3xl sm:text-4xl text-amber-400 tracking-tight group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="font-display font-bold uppercase tracking-wider text-sm sm:text-base text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
