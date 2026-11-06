import React, { useState, useId } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import Reveal from './Reveal';

export default function ContactSection({ onContactSubmitted }) {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const nameInputId = useId();
  const phoneInputId = useId();
  const messageInputId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone.trim()) return;
    setSubmitted(true);
    if (onContactSubmitted) {
      onContactSubmitted(formData);
    }
  };

  const cities = [
    'Санкт-Петербург', 'Всеволожск', 'Выборг', 'Гатчина',
    'Токсово', 'Рощино', 'Зеленогорск', 'Сестрорецк',
    'Ломоносов', 'Приозерск', 'Кировск', 'Тосно'
  ];

  return (
    <section id="contacts" className="py-24 bg-[#0b1118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow mb-3 justify-center">
              <span className="w-8 h-px bg-amber-400"></span>
              <span>СВЯЖИТЕСЬ С НАМИ</span>
              <span className="w-8 h-px bg-amber-400"></span>
            </div>
            <h2 className="heading-section">
              КОНТАКТЫ И <span className="text-gradient">ВЫЗОВ ИНЖЕНЕРА</span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Работаем без выходных. Ответим на звонок в течение 30 секунд или перезвоним, если вы оставите заявку на сайте.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Contacts & Geo Coverage */}
          <div className="lg:col-span-5">
            <Reveal direction="up" delay={100} className="h-full">
              <div className="bg-[#131b26] p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-8 h-full">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white uppercase mb-6">
                    Строительная компания «Добродел»
                  </h3>

                  <div className="space-y-6 text-sm text-slate-300">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs uppercase text-slate-500 font-semibold">Телефон для консультаций</span>
                        <a
                          href={`tel:${COMPANY_INFO.phoneRaw}`}
                          className="font-display font-bold text-xl text-white hover:text-amber-400 transition-colors tracking-wide"
                        >
                          {COMPANY_INFO.phoneFormatted}
                        </a>
                        <span className="block text-xs text-emerald-400 mt-0.5">Звонок бесплатный по РФ</span>
                      </div>
                    </div>

                    {/* WhatsApp & Messengers */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs uppercase text-slate-500 font-semibold">Быстрые мессенджеры</span>
                        <div className="flex flex-wrap gap-3 mt-1.5">
                          <a
                            href={COMPANY_INFO.whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-600/50 transition-colors"
                          >
                            WhatsApp
                          </a>
                          <a
                            href={COMPANY_INFO.telegramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-sky-600/30 border border-sky-500/40 text-sky-300 text-xs font-semibold hover:bg-sky-600/50 transition-colors"
                          >
                            Telegram
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Address & Geo */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs uppercase text-slate-500 font-semibold">География работ</span>
                        <p className="font-medium text-white mt-0.5">
                          {COMPANY_INFO.address}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          Выезжаем на замеры в любой район Ленобласти в радиусе до 200 км от КАД.
                        </p>
                      </div>
                    </div>

                    {/* Working hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-xs uppercase text-slate-500 font-semibold">Режим работы</span>
                        <p className="font-medium text-white mt-0.5">
                          {COMPANY_INFO.workingHours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Region tags */}
                <div className="pt-6 border-t border-slate-800">
                  <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-bold mb-3 font-display">
                    Основные районы выезда бригад:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cities.map((city, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400 text-[11px]"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Feedback & Survey Form */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={200} className="h-full">
              <div className="bg-[#131b26] p-8 rounded-2xl border border-slate-800 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase font-display mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Бесплатный расчет сметы</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white uppercase mb-3">
                    Оставьте заявку на выезд инженера
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    Инженер приедет в удобное время, оценит грунт или состояние существующего здания, проведет замеры и подготовит точную смету без скрытых доплат.
                  </p>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor={nameInputId} className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                            Ваше имя:
                          </label>
                          <input
                            id={nameInputId}
                            type="text"
                            required
                            placeholder="Константин"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm font-medium"
                          />
                        </div>
                        <div>
                          <label htmlFor={phoneInputId} className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                            Номер телефона:
                          </label>
                          <input
                            id={phoneInputId}
                            type="tel"
                            required
                            placeholder="+7 (___) ___-__-__"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor={messageInputId} className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                          Опишите задачу или прикрепите пожелания:
                        </label>
                        <textarea
                          id={messageInputId}
                          rows="4"
                          placeholder="Например: строительство дома из клееного бруса 160 м² во Всеволожске или реконструкция старого фундамента..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm font-medium resize-none"
                        ></textarea>
                      </div>

                      <button type="submit" className="btn-primary w-full text-center">
                        <Send className="w-4 h-4" />
                        <span>Вызвать инженера / Получить расчет</span>
                      </button>

                      <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                        Отправляя заявку, вы подтверждаете согласие на обработку персональных данных.
                      </p>
                    </form>
                  ) : (
                    <div className="p-8 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-4 animate-fade-in my-auto">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="font-display font-bold text-2xl text-white uppercase">
                        Спасибо, {formData.name || 'заказчик'}!
                      </h4>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Ваша заявка передана дежурному инженеру СК «Добродел». Мы свяжемся с вами по телефону <span className="text-amber-400 font-bold">{formData.phone}</span> в течение 10–15 минут для уточнения удобного времени встречи.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', phone: '', message: '' });
                        }}
                        className="btn-outline !py-2 !px-6 text-xs inline-block"
                      >
                        Отправить еще один запрос
                      </button>
                    </div>
                  )}
                </div>

                {/* Trust badge */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>
                    Консультация и выезд инженера по СПб и Ленобласти — <strong>0 рублей</strong>. Вы ничем не рискуете.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
