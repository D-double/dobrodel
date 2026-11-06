import React from 'react';
import { Hammer, Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070b10] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg">
                <Hammer className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-display font-black text-2xl tracking-wider text-white">СК ДОБРОДЕЛ</span>
                <span className="block text-[10px] tracking-widest uppercase font-semibold text-amber-400">
                  Строительная компания
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed pr-6 text-xs sm:text-sm">
              Профессиональное строительство и капитальная реконструкция загородных домов, коттеджей, фундаментов и благоустройство участков в Санкт-Петербурге и Ленинградской области с 2010 года.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              ИНН / ОГРН строительной организации РФ. Официальный договор и гарантия 10 лет.
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase text-white tracking-wider mb-4">
              Разделы
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Услуги компании</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Калькулятор сметы</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Наши объекты</a></li>
              <li><a href="#process" className="hover:text-amber-400 transition-colors">Этапы строительства</a></li>
              <li><a href="#advantages" className="hover:text-amber-400 transition-colors">О компании</a></li>
              <li><a href="#articles" className="hover:text-amber-400 transition-colors">Новости и статьи</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase text-white tracking-wider mb-4">
              Направления
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Дома из клееного бруса</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Каркасные дома</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Дома из газобетона</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Реконструкция и ремонт</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Монолитные фундаменты</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Дренаж и благоустройство</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Бани, сауны, беседки</a></li>
            </ul>
          </div>

          {/* Col 5: Contacts */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase text-white tracking-wider mb-4">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-display font-bold text-base text-amber-400 hover:text-amber-300 block">
                  {COMPANY_INFO.phoneFormatted}
                </a>
                <span className="text-[11px] text-slate-500">Пн-Вс: 09:00 — 21:00</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>г. Санкт-Петербург и вся Ленинградская область</span>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  WhatsApp: +7 (981) 188-35-84
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} СК «Добродел». Все права защищены.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-600">Сайт разработан по стандартам современного UI/UX</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
              title="Наверх"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
