import React, { useState } from 'react';
import { Calendar, ArrowRight, X, BookOpen } from 'lucide-react';
import { ARTICLES } from '../data/companyData';
import Reveal from './Reveal';

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="articles" className="py-24 bg-[#0e1622] border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="eyebrow mb-3">
                <span className="w-8 h-px bg-amber-400"></span>
                <span>БАЗА ЗНАНИЙ И СОВЕТЫ СТРОИТЕЛЕЙ</span>
              </div>
              <h2 className="heading-section">
                НОВОСТИ И <span className="text-gradient">СТАТЬИ СК ДОБРОДЕЛ</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm sm:text-base">
              Экспертные материалы от наших прорабов: выбор фундамента в Ленобласти, тонкости отделки блок-хаусом, устройство парных и экономия на стройматериалах.
            </p>
          </div>
        </Reveal>

        {/* Articles Grid with Staggered Delays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <Reveal key={article.id} delay={(idx % 3) * 120} direction="up">
              <div
                className="bg-[#131b26] border border-slate-800 hover:border-amber-400/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b26] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur border border-amber-400/30 text-amber-300 font-display font-bold text-[11px] uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-3">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white group-hover:text-amber-400 transition-colors uppercase leading-snug mb-3">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 font-display uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                    >
                      <span>Читать полностью</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-[#131b26] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 font-display font-bold text-xs uppercase mb-3 inline-block">
              {selectedArticle.category} · {selectedArticle.date}
            </span>

            <h3 className="font-display font-bold text-2xl text-white uppercase mb-4 leading-tight">
              {selectedArticle.title}
            </h3>

            <div className="h-56 rounded-xl overflow-hidden mb-6">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>{selectedArticle.excerpt}</p>
              <p>
                Специалисты компании «Добродел» всегда готовы подробно проконсультировать вас по выбору строительных технологий с учетом особенностей вашего земельного участка в Ленинградской области.
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
                <strong className="text-amber-400 block mb-1">Совет от прораба СК «Добродел»:</strong>
                Перед началом любых работ рекомендуем провести геологическое бурение или шурфование на участке. Это убережет вас от трещин в стенах и перекосов дверных проемов при сезонном пучении грунта.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="btn-primary !py-2.5 !px-6 text-xs"
              >
                Закрыть статью
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
