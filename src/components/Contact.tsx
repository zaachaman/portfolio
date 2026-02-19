'use client';

import { useLang } from '@/context/LangContext';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-bold text-white mb-3">{t.contact.title}</h2>
        <p className="text-slate-400 text-base mb-10">{t.contact.subtitle}</p>
        <div className="w-12 h-0.5 bg-indigo-500 mx-auto mb-10" />

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:antonioalcaruiz@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/20"
          >
            <Mail size={16} />
            {t.contact.email}
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200"
          >
            <Linkedin size={16} />
            {t.contact.linkedin}
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-emerald-400 font-semibold text-sm transition-all duration-200"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
