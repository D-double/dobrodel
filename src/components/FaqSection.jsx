import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_INFO } from '../data/companyData';
import Reveal from './Reveal';

export default function FaqSection({ onOpenModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0e1622] border-y border-slate-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center mb-16">
            <div className="eyebrow mb-3 justify-center">
              <span className="w-8 h-px bg-amber-400"></span>
              <span>ОТВЕТЫ НА ПОПУЛЯРНЫЕ ВОПРОСЫ</span>
              <span className="w-8 h-px bg-amber-400"></span>
            </div>
            <h2 className="heading-section">
              ЧАСТЫЕ <span className="text-gradient">ВОПРОСЫ КЛИЕНТОВ</span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Все, что нужно знать перед началом строительства или реконструкции загородного дома.
            </p>
          </div>
        </Reveal>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal key={idx} delay={idx * 60} direction="up">
                <div
                  className="bg-[#131b26] border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-amber-400/40"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-white uppercase tracking-wide">
                      {item.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-amber-400 text-slate-950 border-amber-400' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/80 animate-fade-in">
                      {item.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <Reveal direction="scale" delay={200}>
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display font-bold text-lg text-white uppercase">
                Остались индивидуальные вопросы?
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Наш главный инженер готов ответить на любые технические вопросы по телефону или на вашем участке.
              </p>
            </div>
            <button
              onClick={() => onOpenModal('consultation')}
              className="btn-primary shrink-0 text-xs"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Задать вопрос инженеру</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
