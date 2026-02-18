# 🚀 Portfolio — DevBiz

**Desarrollador de Soluciones Digitales & Analista de Negocios**

> Transformo procesos administrativos complejos en aplicaciones web ágiles.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Backend/DB:** Supabase (PostgreSQL)
- **Hosting:** Vercel
- **i18n:** Context-based (ES/EN)

## Estructura del Proyecto

```
src/
├── app/              # App Router pages & layout
├── components/       # UI Components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── context/          # React contexts
│   ├── LangContext.tsx
│   └── ThemeContext.tsx
├── data/             # Static data & dictionaries
│   ├── dictionaries.ts
│   ├── projects.ts
│   └── experience.ts
└── lib/              # Utilities
    └── supabase.ts
```

## Setup Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/tuusuario/portfolio.git
cd portfolio

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tus credenciales de Supabase

# 4. Correr en desarrollo
npm run dev
```

## Variables de Entorno

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL de tu proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key de tu proyecto Supabase |

## Proyectos Incluidos

| Proyecto | Estado | Stack |
|---|---|---|
| CondoManager | En Progreso | Next.js, Supabase, PostgreSQL |
| LexIA Guatemala | Concepto | Next.js, OpenAI, LangChain, pgvector |
| Inventory Dashboard | En Progreso | Next.js, Supabase, Recharts |

## Deploy

Este portafolio está desplegado en **Vercel** con CI/CD automático desde GitHub.

---

Built with ❤️ in Guatemala City 🇬🇹
