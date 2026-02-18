'use client';

import React, { createContext, useContext, useState } from 'react';
import { dictionaries, type Locale } from '@/data/dictionaries';

interface LangContextType {
  locale: Locale;
  t: typeof dictionaries['es'];
  toggleLocale: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return (
    <LangContext.Provider value={{ locale, t: dictionaries[locale], toggleLocale }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
