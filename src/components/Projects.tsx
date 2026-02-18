'use client';

import { useLang } from '@/context/LangContext';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl font-bold text-white mb-3">
            {t.projects.title}
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">{t.projects.subtitle}</p>
          <div className="w-12 h-0.5 bg-indigo-500 mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
