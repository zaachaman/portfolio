export interface Project {
  id: string;
  title: string;
  description: { es: string; en: string };
  stack: string[];
  github?: string;
  demo?: string;
  status: 'live' | 'wip' | 'concept';
}

export const projects: Project[] = [
  {
    id: 'condomanager',
    title: 'CondoManager',
    description: {
      es: 'Aplicación web para gestión de pagos, reportes y administración de condominios. Dashboard con métricas en tiempo real y notificaciones automáticas.',
      en: 'Web application for payment management, reports, and condominium administration. Dashboard with real-time metrics and automatic notifications.',
    },
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/tuusuario/condomanager',
    demo: '#',
    status: 'wip',
  },
  {
    id: 'lexia',
    title: 'LexIA Guatemala',
    description: {
      es: 'Consultor legal inteligente basado en RAG con acceso a 12 fuentes de ley guatemalteca. Respuestas precisas y citadas directamente de la legislación nacional.',
      en: 'Intelligent legal consultant based on RAG with access to 12 Guatemalan law sources. Precise answers cited directly from national legislation.',
    },
    stack: ['Next.js', 'OpenAI', 'LangChain', 'Supabase', 'pgvector', 'TypeScript'],
    github: 'https://github.com/tuusuario/lexia-guatemala',
    demo: '#',
    status: 'concept',
  },
  {
    id: 'inventory',
    title: 'Inventory Dashboard',
    description: {
      es: 'Sistema de control de inventarios basado en principios administrativos. CRUD completo, categorización inteligente, alertas de stock y exportación de reportes.',
      en: 'Inventory control system based on administrative principles. Full CRUD, smart categorization, stock alerts, and report exports.',
    },
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/tuusuario/inventory-dashboard',
    demo: '#',
    status: 'wip',
  },
];
