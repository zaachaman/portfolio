import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LangProvider } from '@/context/LangContext';

export const metadata: Metadata = {
  title: 'Portfolio | Desarrollador de Soluciones Digitales & Analista de Negocios',
  description:
    'Transformo procesos administrativos complejos en aplicaciones web ágiles. Stack: Next.js, TypeScript, Supabase, Tailwind.',
  openGraph: {
    title: 'Portfolio | DevBiz',
    description: 'Desarrollador de Soluciones Digitales & Analista de Negocios',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
