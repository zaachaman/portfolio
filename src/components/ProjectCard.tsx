'use client';

import { type Project } from '@/data/projects';
import { useLang } from '@/context/LangContext';
import { Github, ExternalLink } from 'lucide-react';

const statusBadge: Record<Project['status'], { label: string; color: string }> = {
  live: { label: 'Live', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  wip: { label: 'En Progreso', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  concept: { label: 'Concepto', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
};

export default function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useLang();
  const badge = statusBadge[project.status];

  return (
    <article className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm p-6 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-600/5">
      {/* Status */}
      <span className={`self-start text-[10px] font-semibold px-2 py-0.5 rounded-full border mb-4 ${badge.color}`}>
        {badge.label}
      </span>

      {/* Title */}
      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed flex-1">
        {project.description[locale]}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-5 pt-4 border-t border-slate-800">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors font-medium"
          >
            <Github size={14} />
            {t.projects.viewCode}
          </a>
        )}
        {project.demo && project.demo !== '#' && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
          >
            <ExternalLink size={14} />
            {t.projects.viewDemo}
          </a>
        )}
      </div>
    </article>
  );
}
