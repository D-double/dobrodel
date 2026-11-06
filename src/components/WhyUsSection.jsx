import React from 'react';
import { ShieldCheck, Truck, Users, FileText, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import Reveal from './Reveal';

export default function WhyUsSection({ onOpenModal }) {
  const advantages = [
    {
      icon: ShieldCheck,
      title: "Гарантия 10 лет по договору",
      desc: "Несем полную юридическую ответственность за каждый этап. Гарантия на несущие конструкции, кровлю и фундамент закреплена в договоре."
    },
    {
      icon: FileText,
      title: "Фиксированная стоимость сметы",
      desc: "После подписания договора сумма не увеличится ни на рубль. Все непредвиденные риски и возможный рост цен на материалы мы берем на себя."
    },
    {
      icon: Users,
      title: "Постоянные проверенные бригады",
      desc: "Опытные строители со стажем от 8 лет. Слаженная работа без текучки кадров, постоянный надзор прораба и главного инженера."
    },
    {
      icon: Truck,
      title: "Собственная спецтехника",
      desc: "Экскаваторы, манипуляторы, виброплиты и буровые установки в нашем распоряжении. Не зависим от арендных посредников."
    },
    {
      icon: Award,
      title: "Контроль качества по ГОСТ и СНиП",
      desc: "Соблюдение технологий выдержки бетона, вентиляции деревянных конструкций и паро-гидроизоляционных узлов."
    },
    {
      icon: Sparkles,
      title: "Еженедельный фото- и видеоотчет",
      desc: "Вы всегда в курсе каждого этапа. Отправляем детальные отчеты со стройплощадки прямо в WhatsApp или Telegram."
    }
  ];

  return (
    <section id="advantages" className="py-24 bg-[#0b1118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Credentials */}
          <div className="lg:col-span-5">
            <Reveal direction="up">
              <div>
                <div className="eyebrow mb-3">
                  <span className="w-8 h-px bg-amber-400"></span>
                  <span>О КОМПАНИИ</span>
                </div>
                <h2 className="heading-section">
                  ПОЧЕМУ ВЫБИРАЮТ <br />
                  <span className="text-gradient">СК «ДОБРОДЕЛ»</span>
                </h2>

                <div className="mt-6 space-y-4 text-slate-300 text-sm leading-relaxed">
                  <p>
                    Строительная компания <strong className="text-white">«Добродел»</strong> специализируется на загородном малоэтажном строительстве, реконструкции и комплексном благоустройстве участков по всему Санкт-Петербургу и Ленинградской области.
                  </p>
                  <p className="text-slate-400">
                    Мы строим экологичные дома из клееного бруса, надежные каркасные коттеджи по скандинавской технологии и капитальные дома из автоклавного газобетона.
                  </p>
                  <p className="text-slate-400">
                    За годы работы мы заслужили репутацию честного подрядчика: у нас нет «дешевых завлекающих ценников», которые потом удваиваются на стройке. Смета прозрачна и понятна до последнего гвоздя.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => onOpenModal('consultation')}
                    className="btn-primary"
                  >
                    Получить консультацию инженера
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 6 Advantage Cards with Staggered Delays */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <Reveal key={idx} delay={idx * 90} direction="up">
                  <div
                    className="bg-[#131b26] border border-slate-800 hover:border-amber-400/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group h-full hover:shadow-xl hover:shadow-amber-500/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="font-display font-bold text-base text-white group-hover:text-amber-400 transition-colors uppercase mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
