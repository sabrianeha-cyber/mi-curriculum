import React, { useState } from 'react';
import { CVData, Experience } from '../data/cvData';
import { 
  Building2, 
  Sparkles, 
  Wrench, 
  CheckCircle2, 
  GraduationCap, 
  HeartHandshake, 
  Laptop, 
  ShieldCheck, 
  ChevronRight,
  Layers,
  Sparkle
} from 'lucide-react';

interface InteractiveDossierProps {
  data: CVData;
  lang: 'es' | 'en';
  onSelectSectorForCoverLetter?: (sectorId: string) => void;
}

export const InteractiveDossier: React.FC<InteractiveDossierProps> = ({
  data,
  lang,
  onSelectSectorForCoverLetter
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filterOptions = [
    { id: 'all', label: lang === 'es' ? 'Todas las áreas' : 'All Fields' },
    { id: 'limpieza', label: lang === 'es' ? 'Limpieza Agroalimentaria' : 'Agrifood Cleaning' },
    { id: 'logistica', label: lang === 'es' ? 'Logística & Textil' : 'Logistics & Textile' },
    { id: 'hosteleria', label: lang === 'es' ? 'Hostelería & Cocina' : 'Food Prep & Kitchen' },
    { id: 'comercio', label: lang === 'es' ? 'Comercio & Retail' : 'Retail & Customer Care' }
  ];

  const filteredExperiences = filter === 'all'
    ? data.experiences
    : data.experiences.filter(exp => exp.sector === filter);

  return (
    <div className="space-y-12 py-8">
      {/* Sector Filter Bar - Segmented Control */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-300 pb-5">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black font-display text-stone-950">
            {lang === 'es' ? 'Experiencia Laboral Contrastada' : 'Verified Work Experience'}
          </h2>
          <p className="text-sm sm:text-base text-stone-700 font-semibold mt-1">
            {lang === 'es'
              ? 'Trayectoria acreditada en plantas industriales, centros logísticos y hostelería'
              : 'Demonstrated experience in manufacturing plants, logistics hubs and hospitality'}
          </p>
        </div>

        {/* Functional filter control */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-200/90 rounded-xl border border-stone-300">
          {filterOptions.map(opt => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filter === opt.id
                  ? 'bg-stone-900 text-white shadow-xs font-black'
                  : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100/80'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Experience Cards Grid */}
      <div className="space-y-8">
        {filteredExperiences.map((exp: Experience) => {
          return (
            <article
              key={exp.id}
              className="bg-white rounded-2xl border-2 border-stone-200 shadow-sm hover:border-stone-300 transition-all overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-7 border-b border-stone-200">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    {/* Category label */}
                    <div className="text-xs font-black uppercase tracking-wider text-amber-800">
                      {exp.sectorLabel}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-stone-950 font-display">
                      {exp.role}
                    </h3>
                    {/* Clean metadata with high-contrast text */}
                    <div className="flex flex-wrap items-center gap-x-3 text-base text-stone-900 font-bold">
                      <span className="text-stone-950 font-black">{exp.company}</span>
                      <span aria-hidden="true" className="text-stone-400">·</span>
                      <span>{exp.location}</span>
                      <span aria-hidden="true" className="text-stone-400">·</span>
                      <span className="text-stone-700 font-semibold">{exp.period}</span>
                    </div>
                  </div>

                  {onSelectSectorForCoverLetter && (
                    <button
                      onClick={() => onSelectSectorForCoverLetter(exp.sector)}
                      className="self-start text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-900 underline flex items-center gap-1 pt-1 cursor-pointer"
                    >
                      <span>{lang === 'es' ? 'Ver carta para este puesto' : 'Generate letter for this role'}</span>
                      <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  )}
                </div>

                <p className="mt-4 text-base sm:text-lg text-stone-800 leading-relaxed font-normal">
                  {exp.summary}
                </p>
              </div>

              {/* Responsibilities & Details */}
              <div className="p-6 sm:p-7 bg-stone-50/70 space-y-6">
                <div>
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700 stroke-[2.5]" />
                    <span>{lang === 'es' ? 'Responsabilidades y Operativa Principal' : 'Key Responsibilities & Operations'}</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-stone-900 leading-normal">
                        <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                        <span className="font-medium text-stone-900">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-stone-200">
                  {/* Tools mastered */}
                  <div>
                    <h5 className="text-xs sm:text-sm font-black uppercase tracking-wider text-stone-900 mb-2 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-amber-700 stroke-[2.5]" />
                      <span>{lang === 'es' ? 'Herramientas y Maquinaria' : 'Tools & Equipment Mastered'}</span>
                    </h5>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm font-bold text-stone-900">
                      {exp.toolsAndTech.map((tool, idx) => (
                        <React.Fragment key={idx}>
                          {idx > 0 && <span aria-hidden="true" className="text-stone-400">·</span>}
                          <span className="text-stone-950 font-bold">{tool}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h5 className="text-xs sm:text-sm font-black uppercase tracking-wider text-stone-900 mb-2 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 stroke-[2.5]" />
                      <span>{lang === 'es' ? 'Puntos Fuertes Demostrados' : 'Key Achievements & Strengths'}</span>
                    </h5>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm font-semibold text-stone-900">
                      {exp.keyHighlights.map((hl, idx) => (
                        <React.Fragment key={idx}>
                          {idx > 0 && <span aria-hidden="true" className="text-stone-400">·</span>}
                          <span className="text-stone-900">{hl}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Education & Complementary Training */}
      <section className="pt-8 border-t-2 border-stone-200">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-stone-950">
            {lang === 'es' ? 'Formación y Experiencia Complementaria' : 'Education & Complementary Training'}
          </h2>
          <p className="text-sm sm:text-base text-stone-700 font-semibold mt-1">
            {lang === 'es'
              ? 'Conocimientos sanitarios de base, voluntariado humanitario y competencias ofimáticas'
              : 'Healthcare foundation, humanitarian volunteering, and technical literacy'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.education.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border-2 border-stone-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {item.type === 'formal' && <GraduationCap className="w-5 h-5 text-amber-700 stroke-[2.5]" />}
                  {item.type === 'voluntariado' && <HeartHandshake className="w-5 h-5 text-red-700 stroke-[2.5]" />}
                  {item.type === 'ofimatica' && <Laptop className="w-5 h-5 text-sky-700 stroke-[2.5]" />}
                  <span className="text-xs font-black uppercase tracking-wider text-stone-800">
                    {item.type === 'formal'
                      ? (lang === 'es' ? 'Estudios Superiores' : 'Higher Education')
                      : item.type === 'voluntariado'
                      ? (lang === 'es' ? 'Labor Social' : 'Volunteer Work')
                      : (lang === 'es' ? 'Sistemas y Herramientas' : 'Digital Tools')}
                  </span>
                </div>

                <h3 className="font-black text-lg text-stone-950 font-display">
                  {item.title}
                </h3>
                {/* Clean metadata */}
                <div className="text-sm font-bold text-stone-800 mt-1">
                  <span>{item.institution}</span>
                  <span aria-hidden="true" className="mx-2 text-stone-400">·</span>
                  <span>{item.location}</span>
                </div>

                <p className="mt-3 text-sm sm:text-base text-stone-800 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {item.type === 'formal' && (
                <div className="mt-5 pt-3 border-t border-amber-200 text-xs sm:text-sm text-amber-950 font-bold bg-amber-50 p-3 rounded-xl border">
                  {lang === 'es'
                    ? 'Aporta rigor científico en esterilización, asepsia y manejo minucioso de protocolos higiénicos.'
                    : 'Provides strong foundation in sterilization, asepsis, and meticulous sanitary protocols.'}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Skills Breakdown */}
      <section className="pt-8 border-t-2 border-stone-200">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-stone-950">
            {lang === 'es' ? 'Matriz de Habilidades y Competencias' : 'Skills & Competencies Matrix'}
          </h2>
          <p className="text-sm sm:text-base text-stone-700 font-semibold mt-1">
            {lang === 'es'
              ? 'Conocimientos técnicos y capacidades operativas demostradas en entorno laboral'
              : 'Technical knowledge and operational capabilities demonstrated in real work environments'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.skillsCategories.map((cat, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border-2 border-stone-200 shadow-sm flex flex-col">
              <h3 className="font-black text-base text-stone-950 font-display pb-2 border-b-2 border-stone-200">
                {cat.title}
              </h3>
              <ul className="mt-4 space-y-3.5 flex-1">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-xs sm:text-sm">
                    <div className="flex items-center justify-between gap-1 font-bold text-stone-950">
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="text-[11px] font-black text-amber-900 bg-amber-100 px-1.5 py-0.5 rounded">
                          {skill.level}
                        </span>
                      )}
                    </div>
                    {skill.description && (
                      <p className="text-stone-700 text-xs font-medium mt-1 leading-snug">
                        {skill.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
