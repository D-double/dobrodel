import React, { useState, useId } from 'react';
import { Calculator as CalcIcon, Send, Sparkles, Check, Clock, ShieldAlert, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import Reveal from './Reveal';

export default function Calculator({ onEstimateSubmitted }) {
  const [workType, setWorkType] = useState('new'); // 'new', 'reconstruction', 'landscaping'
  const [material, setMaterial] = useState('timber');
  const [area, setArea] = useState(130);
  const [floors, setFloors] = useState('1.5');
  const [foundation, setFoundation] = useState('plate');
  const [packageLevel, setPackageLevel] = useState('standard');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const phoneInputId = useId();
  const nameInputId = useId();

  // Pricing formula
  const calculatePrice = () => {
    let basePricePerMeter = 32000;
    if (material === 'timber') basePricePerMeter = 38000;
    if (material === 'frame') basePricePerMeter = 28000;
    if (material === 'aerated') basePricePerMeter = 34000;
    if (material === 'brick') basePricePerMeter = 44000;

    let foundationCost = 0;
    if (foundation === 'plate') foundationCost = area * 4500;
    if (foundation === 'ushp') foundationCost = area * 6800;
    if (foundation === 'piles') foundationCost = area * 2400;
    if (foundation === 'none') foundationCost = 0;

    let packageMultiplier = 1.0;
    if (packageLevel === 'basic') packageMultiplier = 0.85;
    if (packageLevel === 'standard') packageMultiplier = 1.0;
    if (packageLevel === 'turnkey') packageMultiplier = 1.35;

    let workTypeModifier = 1.0;
    if (workType === 'reconstruction') workTypeModifier = 0.65;
    if (workType === 'landscaping') {
      return {
        total: Math.round(area * 1650),
        duration: '1–2 месяца'
      };
    }

    const total = Math.round((area * basePricePerMeter * packageMultiplier + foundationCost) * workTypeModifier);

    let duration = '3–4 месяца';
    if (area > 180) duration = '4–6 месяцев';
    if (workType === 'reconstruction') duration = '1.5–3 месяца';

    return { total, duration };
  };

  const { total, duration } = calculatePrice();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setIsSubmitted(true);
    if (onEstimateSubmitted) {
      onEstimateSubmitted({
        name,
        phone,
        workType,
        material,
        area,
        floors,
        foundation,
        packageLevel,
        estimatedTotal: total
      });
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#0e1622] relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow mb-3 justify-center">
              <span className="w-8 h-px bg-amber-400"></span>
              <span>ОНЛАЙН-РАСЧЕТ В РЕАЛЬНОМ ВРЕМЕНИ</span>
              <span className="w-8 h-px bg-amber-400"></span>
            </div>
            <h2 className="heading-section">
              КАЛЬКУЛЯТОР <span className="text-gradient">СТОИМОСТИ СТРОИТЕЛЬСТВА</span>
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Выберите параметры будущего дома или реконструкции, чтобы мгновенно получить ориентировочный бюджет и зафиксировать скидку до 7% на монтажные работы в этом сезоне.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls column */}
          <div className="lg:col-span-7">
            <Reveal direction="up" delay={100}>
              <div className="bg-[#131b26] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-8">
                {/* Step 1: Work Type */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 font-display">
                    1. Тип работ
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: 'new', label: 'Новый дом' },
                      { id: 'reconstruction', label: 'Реконструкция' },
                      { id: 'landscaping', label: 'Благоустройство' },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setWorkType(t.id)}
                        className={`py-3 px-3 text-xs sm:text-sm font-semibold rounded-lg border transition-all text-center ${
                          workType === t.id
                            ? 'border-amber-400 bg-amber-400/10 text-amber-300 font-bold shadow-md shadow-amber-400/10'
                            : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Material */}
                {workType !== 'landscaping' && (
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 font-display">
                      2. Материал стен
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { id: 'timber', label: 'Клееный брус' },
                        { id: 'frame', label: 'Каркас (Сканди)' },
                        { id: 'aerated', label: 'Газобетон D400' },
                        { id: 'brick', label: 'Кирпич / Керамика' },
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setMaterial(m.id)}
                          className={`py-3 px-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                            material === m.id
                              ? 'border-amber-400 bg-amber-400/10 text-amber-300 font-bold shadow-md shadow-amber-400/10'
                              : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Area slider */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase font-bold tracking-wider text-slate-400 font-display">
                      {workType === 'landscaping' ? 'Площадь участка (соток/м²)' : 'Общая площадь дома'}
                    </label>
                    <span className="font-display font-bold text-xl text-amber-400">
                      {area} {workType === 'landscaping' ? 'м² (земля)' : 'м²'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="350"
                    step="5"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                    <span>40 м²</span>
                    <span>120 м²</span>
                    <span>200 м²</span>
                    <span>350 м²</span>
                  </div>
                </div>

                {/* Step 4: Foundation */}
                {workType !== 'landscaping' && (
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 font-display">
                      3. Тип фундамента
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        { id: 'plate', label: 'Монолитная ж/б плита 250 мм' },
                        { id: 'ushp', label: 'Утепленная шведская плита (УШП)' },
                        { id: 'piles', label: 'Свайно-ростверковый фундамент' },
                        { id: 'none', label: 'Фундамент уже готов на участке' },
                      ].map((f) => (
                        <button
                          key={f.id}
                          type="button"
                          onClick={() => setFoundation(f.id)}
                          className={`p-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                            foundation === f.id
                              ? 'border-amber-400 bg-amber-400/10 text-amber-300 font-bold shadow-md shadow-amber-400/10'
                              : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Package */}
                {workType !== 'landscaping' && (
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-slate-400 mb-3 font-display">
                      4. Комплектация
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'basic', title: 'Теплый контур', desc: 'Коробка, кровля, окна' },
                        { id: 'standard', title: 'Предчистовая', desc: '+ Фасад, стяжка, сети' },
                        { id: 'turnkey', title: 'Под ключ', desc: 'Чистовая отделка + сантехника' },
                      ].map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setPackageLevel(p.id)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            packageLevel === p.id
                              ? 'border-amber-400 bg-amber-400/10 text-amber-300 shadow-md shadow-amber-400/10'
                              : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                        >
                          <div className="text-xs font-bold font-display">{p.title}</div>
                          <div className="text-[11px] text-slate-500 mt-0.5">{p.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* Results & Lead Form Column */}
          <div className="lg:col-span-5">
            <Reveal direction="scale" delay={200}>
              <div className="bg-gradient-to-b from-[#162130] to-[#111924] p-6 sm:p-8 rounded-2xl border-2 border-amber-500/40 shadow-2xl relative">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-amber-400 uppercase font-display mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Предварительный расчет</span>
                </div>

                {/* Total display */}
                <div className="border-b border-slate-700/80 pb-6 mb-6">
                  <span className="block text-xs text-slate-400 uppercase tracking-wider">
                    Ориентировочная стоимость:
                  </span>
                  <div className="font-display font-black text-4xl sm:text-5xl text-white mt-1 tracking-tight">
                    ~ {total.toLocaleString('ru-RU')} <span className="text-amber-400 text-3xl">₽</span>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      Срок реализации: {duration}
                    </span>
                    <span>•</span>
                    <span>{area} м²</span>
                  </div>
                </div>

                {/* Specs summary checklist */}
                <div className="space-y-2 text-xs text-slate-300 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Официальный договор с фиксированной ценой</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Бесплатный выезд инженера на участок в СПб и ЛО</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Скидка 7% при бронировании до конца месяца</span>
                  </div>
                </div>

                {/* Lead capture form */}
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor={phoneInputId} className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                        Ваш телефон для отправки сметы:
                      </label>
                      <input
                        id={phoneInputId}
                        type="tel"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label htmlFor={nameInputId} className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                        Имя (по желанию):
                      </label>
                      <input
                        id={nameInputId}
                        type="text"
                        placeholder="Как к вам обращаться"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full text-center">
                      <span>Получить подробную смету в WhatsApp / SMS</span>
                    </button>

                    <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Никакого спама, только расчет от главного инженера.
                    </p>
                  </form>
                ) : (
                  <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-3 animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white uppercase">Заявка успешно принята!</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Наш инженер подготовит подробную ведомость материалов для {area} м² и свяжется с вами по номеру <span className="text-amber-400 font-bold">{phone}</span> в течение 15 минут.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-slate-400 hover:text-white underline mt-2"
                    >
                      Рассчитать другой вариант
                    </button>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
