import React, { useState, useId } from 'react';
import { X, CheckCircle2, ShieldCheck, Phone, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function LeadModal({ isOpen, onClose, initialData }) {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const nameInputId = useId();
  const phoneInputId = useId();
  const commentInputId = useId();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setPhone('');
    setName('');
    setComment('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="bg-[#131b26] border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="eyebrow mb-2">
              <span className="w-6 h-px bg-amber-400"></span>
              <span>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</span>
            </div>

            <h3 className="font-display font-bold text-2xl text-white uppercase mb-2">
              {initialData?.title ? `Заказать расчет: ${initialData.title}` : 'Вызов инженера на объект'}
            </h3>

            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Выезд инженера в любую точку Санкт-Петербурга и ЛО, экспертиза участка и точный расчет сметы — <strong>бесплатно</strong>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor={nameInputId} className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                  Ваше имя:
                </label>
                <input
                  id={nameInputId}
                  type="text"
                  required
                  placeholder="Как вас зовут"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm font-medium"
                />
              </div>

              <div>
                <label htmlFor={phoneInputId} className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                  Номер телефона:
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
                <label htmlFor={commentInputId} className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                  Укажите район или пожелания (по желанию):
                </label>
                <textarea
                  id={commentInputId}
                  rows="3"
                  placeholder="Например: Выборгский район, участок 12 соток..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm resize-none"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full text-center">
                <Send className="w-4 h-4" />
                <span>Отправить заявку</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Конфиденциальность гарантирована</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>
            <h4 className="font-display font-bold text-2xl text-white uppercase">
              Заявка принята!
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
              Инженер компании «Добродел» свяжется с вами по номеру <span className="text-amber-400 font-bold">{phone}</span> в течение 15 минут для согласования деталей.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="btn-primary !py-2.5 !px-6 text-xs inline-block mt-4"
            >
              Отлично, спасибо
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
