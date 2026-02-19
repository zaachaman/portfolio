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
            <a href="https://wa.me/502TUNUMERO"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-200"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
  </svg>
  WhatsApp
</a>
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
