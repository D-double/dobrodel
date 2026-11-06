import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/companyData';
import Reveal from './Reveal';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="py-24 bg-[#0b1118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow mb-3">
                <span className="w-8 h-px bg-amber-400"></span>
                <span>НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ</span>
              </div>
              <h2 className="heading-section">
                УСЛУГИ <span className="text-gradient">СК ДОБРОДЕЛ</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm sm:text-base">
              Полный цикл загородного строительства в Санкт-Петербурге и ЛО: от геодезии и фундаментов до готового коттеджа и благоустройства прилегающей территории.
            </p>
          </div>
        </Reveal>

        {/* Services Grid with Staggered Delays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => (
            <Reveal key={srv.id} delay={(idx % 4) * 100} direction="up">
              <div className="group bg-[#131b26] border border-slate-800 hover:border-amber-400/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 h-full">
                {/* Image banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b26] via-[#131b26]/30 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-amber-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider font-display shadow">
                    {srv.badge}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-400 transition-colors uppercase leading-snug">
                      {srv.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {srv.desc}
                    </p>

                    {/* Bullet features */}
                    <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
                      {srv.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-medium">Стоимость</span>
                      <span className="font-display font-bold text-base text-amber-400">{srv.price}</span>
                    </div>
                    <button
                      onClick={() => onSelectService(srv)}
                      className="p-2.5 rounded-lg bg-slate-800/90 hover:bg-amber-400 text-slate-300 hover:text-slate-950 transition-all"
                      title="Заказать расчет"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
