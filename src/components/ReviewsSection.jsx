import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/companyData';
import Reveal from './Reveal';

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-[#0b1118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow mb-3 justify-center">
              <span className="w-8 h-px bg-amber-400"></span>
              <span>ОТЗЫВЫ КЛИЕНТОВ</span>
              <span className="w-8 h-px bg-amber-400"></span>
            </div>
            <h2 className="heading-section">
              ЧТО ГОВОРЯТ <span className="text-gradient">НАШИ ЗАКАЗЧИКИ</span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Более 380 семей в Санкт-Петербурге и Ленинградской области доверили нам строительство и ремонт своих домов.
            </p>
          </div>
        </Reveal>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, idx) => (
            <Reveal key={rev.id} delay={idx * 120} direction="up">
              <div
                className="bg-[#131b26] border border-slate-800 hover:border-amber-400/50 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative h-full hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div>
                  {/* Rating stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-slate-700/60" />
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                {/* Author & Project info */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <div className="font-display font-bold text-base text-white uppercase">
                    {rev.name}
                  </div>
                  <div className="text-xs text-amber-400 font-medium mt-0.5">
                    {rev.project}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span>{rev.location} · Подтвержденный заказчик</span>
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
