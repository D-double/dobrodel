import React, { useState } from 'react';
import { Phone, MessageSquare, Send, X, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function QuickContactFloating({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {isOpen && (
        <div className="flex flex-col items-end gap-2.5 animate-fade-in mb-2">
          {/* WhatsApp */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl text-xs font-semibold tracking-wide transition-all hover:scale-105"
          >
            <span>Написать в WhatsApp</span>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
          </a>

          {/* Telegram */}
          <a
            href={COMPANY_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-xl text-xs font-semibold tracking-wide transition-all hover:scale-105"
          >
            <span>Написать в Telegram</span>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Send className="w-4 h-4" />
            </div>
          </a>

          {/* Phone call */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xl text-xs font-bold tracking-wide transition-all hover:scale-105 font-display uppercase"
          >
            <span>Позвонить инженеру</span>
            <div className="w-7 h-7 rounded-full bg-black/15 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
          </a>
        </div>
      )}

      {/* Main floating action toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/40 transition-all hover:scale-110 active:scale-95 relative group"
        aria-label="Связаться с нами"
      >
        <span className="absolute -inset-1 rounded-full bg-amber-400/40 animate-ping opacity-75 pointer-events-none" />
        {isOpen ? (
          <X className="w-6 h-6 stroke-[2.5]" />
        ) : (
          <MessageCircle className="w-7 h-7 stroke-[2.5]" />
        )}
      </button>
    </div>
  );
}
