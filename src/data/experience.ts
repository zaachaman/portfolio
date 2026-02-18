export interface Experience {
  id: string;
  type: 'work' | 'education';
  organization: string;
  role: { es: string; en: string };
  period: string;
  description: { es: string; en: string };
  tags?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'telus',
    type: 'work',
    organization: 'Telus International',
    role: {
      es: 'Analista de Calidad / AI Data Trainer',
      en: 'Quality Analyst / AI Data Trainer',
    },
    period: '2022 — Presente',
    description: {
      es: 'Evaluación y mejora de modelos de inteligencia artificial. Análisis de datos, control de calidad de respuestas y entrenamiento de LLMs para múltiples clientes globales.',
      en: 'Evaluation and improvement of artificial intelligence models. Data analysis, response quality control, and LLM training for multiple global clients.',
    },
    tags: ['AI Training', 'Data Analysis', 'Quality Assurance', 'LLMs'],
  },
  {
    id: 'usac-admin',
    type: 'education',
    organization: 'USAC — Universidad de San Carlos de Guatemala',
    role: {
      es: 'Administración de Empresas',
      en: 'Business Administration',
    },
    period: '2016 — 2022',
    description: {
      es: 'Formación en gestión empresarial, análisis financiero, recursos humanos y estrategia organizacional. Enfoque en transformación digital de procesos administrativos.',
      en: 'Training in business management, financial analysis, human resources, and organizational strategy. Focus on digital transformation of administrative processes.',
    },
    tags: ['Business Strategy', 'Finance', 'Operations', 'Digital Transformation'],
  },
  {
    id: 'usac-systems',
    type: 'education',
    organization: 'USAC — Ingeniería en Sistemas',
    role: {
      es: 'Bases de Ingeniería en Sistemas',
      en: 'Systems Engineering Foundation',
    },
    period: '2020 — 2023',
    description: {
      es: 'Fundamentos de programación, algoritmos, bases de datos y arquitectura de software. Complemento técnico a la formación administrativa.',
      en: 'Programming fundamentals, algorithms, databases, and software architecture. Technical complement to business administration background.',
    },
    tags: ['Algorithms', 'Databases', 'Software Architecture', 'OOP'],
  },
];
