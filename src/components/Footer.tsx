'use client';

import { useLang } from '@/context/LangContext';

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 py-8 px-4 text-center">
      <p className="text-slate-600 text-xs font-mono">
        © {year} Tu Nombre — {t.footer.rights}
        <span className="text-indigo-500 ml-2">Built with Next.js + Supabase + Vercel</span>
      </p>
    </footer>
  );
}
