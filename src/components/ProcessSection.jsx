import React from 'react';
import { WORK_STEPS } from '../data/companyData';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#0e1622] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow mb-3 justify-center">
              <span className="w-8 h-px bg-amber-400"></span>
              <span>ПРОЗРАЧНЫЙ ПРОЦЕСС</span>
              <span className="w-8 h-px bg-amber-400"></span>
            </div>
            <h2 className="heading-section">
              КАК МЫ РАБОТАЕМ: <span className="text-gradient">ОТ ИДЕИ ДО КЛЮЧЕЙ</span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Никаких сюрпризов и скрытых платежей. Четкий пятиэтапный регламент с личным инженером и еженедельными видеоотчетами со стройплощадки.
            </p>
          </div>
        </Reveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {WORK_STEPS.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 110} direction="up">
              <div
                className="bg-[#131b26] border border-slate-800 hover:border-amber-400/50 p-6 rounded-2xl relative transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between h-full hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div>
                  <div className="font-display font-black text-4xl text-amber-500/30 group-hover:text-amber-400 transition-colors mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-400 transition-colors uppercase mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Фиксируется договором</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
