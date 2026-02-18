'use client';

import { useLang } from '@/context/LangContext';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-semibold mb-8 animate-fade-in">
          <Sparkles size={12} />
          Guatemala · Bilingüe ES / EN · Open to Work
        </div>

        {/* Greeting */}
        <p className="text-slate-400 text-lg mb-2 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          {t.hero.greeting}
        </p>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-7xl font-bold text-white mb-4 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          Tu Nombre
        </h1>

        {/* Tagline */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            <span className="text-indigo-400">Desarrollador de Soluciones Digitales</span>
            <span className="text-slate-500"> & </span>
            <span className="text-emerald-400">Analista de Negocios</span>
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          {t.hero.description}
        </p>

        {/* Stack pills */}
        <div
          className="flex flex-wrap justify-center gap-2 mt-8 animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          {['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10 animate-fade-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/20"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
        <ArrowDown size={18} />
      </div>
    </section>
  );
}
