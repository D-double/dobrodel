import React, { useState } from 'react';
import { Eye, MapPin, Maximize2, X, Calendar, Layers } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';
import Reveal from './Reveal';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'Все объекты' },
    { id: 'timber', label: 'Клееный брус' },
    { id: 'frame', label: 'Каркасные' },
    { id: 'aerated', label: 'Газобетон' },
    { id: 'reconstruction', label: 'Реконструкция' },
    { id: 'bathhouse', label: 'Бани & СПА' },
    { id: 'landscaping', label: 'Благоустройство' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#0b1118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="eyebrow mb-3">
                <span className="w-8 h-px bg-amber-400"></span>
                <span>РЕАЛИЗОВАННЫЕ ОБЪЕКТЫ</span>
              </div>
              <h2 className="heading-section">
                НАШИ <span className="text-gradient">РАБОТЫ В СПБ И ЛО</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-md text-sm sm:text-base">
              Фотографии готовых домов, этапов реконструкции и ландшафтных работ. Приглашаем на экскурсию по строящимся объектам в Ленинградской области!
            </p>
          </div>
        </Reveal>

        {/* Filter pills */}
        <Reveal direction="fade" delay={100}>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-lg text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === f.id
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid with Staggered Delays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, idx) => (
            <Reveal key={p.id} delay={(idx % 3) * 120} direction="up">
              <div
                onClick={() => setSelectedProject(p)}
                className="group bg-[#131b26] border border-slate-800 hover:border-amber-400/60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col h-full"
              >
                {/* Image with zoom on hover */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b26] via-transparent to-transparent opacity-80" />
                  
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-900/80 backdrop-blur border border-amber-400/40 text-amber-300 font-display font-bold text-xs uppercase tracking-wider">
                    {p.categoryLabel}
                  </span>

                  {/* Hover overlay icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                    <span className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-amber-400 transition-colors uppercase leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {p.desc}
                    </p>
                  </div>

                  {/* Specs row */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-[11px] text-slate-400">
                    <div>
                      <span className="block text-slate-500 text-[10px] uppercase">Площадь</span>
                      <span className="font-bold text-white">{p.area}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[10px] uppercase">Срок</span>
                      <span className="font-bold text-white">{p.duration}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500 text-[10px] uppercase">Локация</span>
                      <span className="font-bold text-amber-400 truncate block">{p.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#131b26] border border-slate-700 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[60vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full max-h-[60vh] object-contain"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="px-3 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-300 font-display font-bold text-xs uppercase">
                  {selectedProject.categoryLabel}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  {selectedProject.location}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedProject.desc}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 uppercase block text-[10px]">Площадь объекта</span>
                  <span className="text-base font-bold text-white">{selectedProject.area}</span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase block text-[10px]">Срок возведения</span>
                  <span className="text-base font-bold text-white">{selectedProject.duration}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <a
                    href="#calculator"
                    onClick={() => setSelectedProject(null)}
                    className="btn-primary !py-2 !px-4 text-xs w-full text-center"
                  >
                    Хочу такой же дом
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
