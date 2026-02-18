'use client';

import { useLang } from '@/context/LangContext';
import { experiences } from '@/data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const { t, locale } = useLang();

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-slate-900/40">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl font-bold text-white mb-3">{t.experience.title}</h2>
          <p className="text-slate-400 text-base">{t.experience.subtitle}</p>
          <div className="w-12 h-0.5 bg-emerald-500 mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative pl-8 border-l border-slate-800">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="relative mb-10 last:mb-0">
              {/* Dot */}
              <div className="absolute -left-[2.1rem] top-1 w-8 h-8 rounded-full border border-slate-800 bg-slate-950 flex items-center justify-center">
                {exp.type === 'work' ? (
                  <Briefcase size={14} className="text-indigo-400" />
                ) : (
                  <GraduationCap size={14} className="text-emerald-400" />
                )}
              </div>

              {/* Card */}
              <div className="ml-4 p-5 rounded-xl border border-slate-800 bg-slate-900/60">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                  <div>
                    <h3 className="font-semibold text-white text-base">{exp.role[locale]}</h3>
                    <p className="text-indigo-400 text-sm font-medium">{exp.organization}</p>
                  </div>
                  <span className="text-xs text-slate-500 font-mono whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">{exp.description[locale]}</p>

                {exp.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
