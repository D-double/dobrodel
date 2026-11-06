import React, { useState, useEffect } from 'react';
import { Hammer, Sparkles } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [statusText, setStatusText] = useState('Инициализация проектов...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Realistic easing progress
        const increment = Math.max(2, Math.floor((100 - prev) * 0.15) + Math.floor(Math.random() * 5));
        const next = Math.min(100, prev + increment);

        if (next > 30 && next < 70) {
          setStatusText('Загрузка портфолио и сметных расчетов...');
        } else if (next >= 70 && next < 95) {
          setStatusText('Подготовка интерактивного калькулятора...');
        } else if (next >= 95) {
          setStatusText('Добро пожаловать в СК «Добродел»');
        }

        return next;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimeout = setTimeout(() => {
        setIsFadingOut(true);
      }, 350);

      const doneTimeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 900);

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(doneTimeout);
      };
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070b10] transition-all duration-700 pointer-events-none select-none ${
        isFadingOut ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute w-96 h-96 rounded-full bg-amber-500/10 filter blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Emblem */}
        <div className="relative mb-8 group">
          {/* Rotating decorative ring */}
          <div className="w-24 h-24 rounded-2xl border-2 border-dashed border-amber-500/40 animate-[spin_8s_linear_infinite]" />
          
          {/* Logo badge in center */}
          <div className="absolute inset-1.5 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-2xl shadow-amber-500/40">
            <Hammer className="w-10 h-10 stroke-[2.5] animate-bounce" />
          </div>

          <div className="absolute -inset-3 rounded-2xl bg-amber-400/20 filter blur-md -z-10 animate-pulse" />
        </div>

        {/* Brand Name */}
        <h1 className="font-display font-black text-3xl tracking-widest text-white uppercase mb-1">
          СК ДОБРОДЕЛ
        </h1>
        <p className="text-[11px] tracking-[0.25em] uppercase font-semibold text-amber-400 mb-8">
          Строительство & Реконструкция · СПб и ЛО
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 h-1.5 bg-slate-800/90 rounded-full overflow-hidden relative mb-4 border border-slate-700/60 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 transition-all duration-150 ease-out rounded-full shadow-[0_0_12px_rgba(245,158,11,0.8)] relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-shimmer" />
          </div>
        </div>

        {/* Counter & Status */}
        <div className="flex items-center justify-between w-64 text-xs font-mono text-slate-400">
          <span className="text-[11px] text-slate-400 truncate pr-2 font-sans">{statusText}</span>
          <span className="font-bold text-amber-400 shrink-0">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
