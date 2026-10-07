import React from 'react';
import { CVData } from '../data/cvData';
import { Printer, Download, Copy, Check, FileText } from 'lucide-react';

interface ClassicPrintableCVProps {
  data: CVData;
  lang: 'es' | 'en';
}

export const ClassicPrintableCV: React.FC<ClassicPrintableCVProps> = ({ data, lang }) => {
  const [copied, setCopied] = React.useState(false);
  const { personalInfo, experiences, education, skillsCategories } = data;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyRaw = () => {
    const raw = `${personalInfo.fullName}
Teléfono: ${personalInfo.phone} | Email: ${personalInfo.email}
Ubicación: ${personalInfo.location}
Idiomas: ${personalInfo.languages.map(l => `${l.language} (${l.level})`).join(' | ')}

PERFIL PROFESIONAL
${personalInfo.summary}

EXPERIENCIA LABORAL
${experiences.map(exp => `
${exp.role}
${exp.company} | ${exp.location}
${exp.responsibilities.map(r => `• ${r}`).join('\n')}
Herramientas: ${exp.toolsAndTech.join(', ')}
`).join('\n')}

FORMACIÓN Y OTROS COMPLEMENTOS
${education.map(edu => `• ${edu.title} — ${edu.institution} (${edu.location}): ${edu.description}`).join('\n')}

HABILIDADES CLAVE
${skillsCategories.map(cat => `• ${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}
`;

    navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-6 space-y-6">
      {/* Control bar (hidden during print) */}
      <div className="no-print bg-white p-4 rounded-xl border border-stone-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-600" />
          <div>
            <h2 className="text-sm font-bold text-stone-900">
              {lang === 'es' ? 'Currículum Vitae en Formato A4 Estándar' : 'Standard A4 Curriculum Vitae'}
            </h2>
            <p className="text-xs text-stone-500">
              {lang === 'es'
                ? 'Optimizado para impresión directa y guardado en PDF de alta fidelidad sin marcas de agua'
                : 'Optimized for high-fidelity direct printing and saving to clean PDF'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyRaw}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (lang === 'es' ? 'Copiado' : 'Copied') : (lang === 'es' ? 'Copiar texto' : 'Copy text')}</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-xs transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{lang === 'es' ? 'Imprimir / Guardar en PDF' : 'Print / Save as PDF'}</span>
          </button>
        </div>
      </div>

      {/* A4 Sheet Container */}
      <div 
        id="printable-cv"
        className="bg-white max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl shadow-sm border border-stone-200 text-stone-900 print:border-none print:shadow-none print:p-0 print:max-w-none print:m-0"
      >
        {/* Header Block */}
        <header className="border-b-2 border-stone-950 pb-5 mb-6 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-950 uppercase font-display">
            {personalInfo.fullName}
          </h1>
          <p className="text-base font-bold text-amber-800 uppercase tracking-wider mt-1">
            {personalInfo.headline}
          </p>

          {/* Contact Line */}
          <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-sm text-stone-900 font-bold">
            <span><strong>Teléfono:</strong> {personalInfo.phone}</span>
            <span aria-hidden="true" className="text-stone-400">|</span>
            <span><strong>Email:</strong> {personalInfo.email}</span>
            <span aria-hidden="true" className="text-stone-400">|</span>
            <span><strong>Ubicación:</strong> {personalInfo.location}</span>
          </div>

          <div className="mt-1.5 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 text-sm text-stone-900 font-semibold">
            <span><strong>Idiomas:</strong> {personalInfo.languages.map(l => `${l.language} (${l.level})`).join(' | ')}</span>
            <span aria-hidden="true" className="text-stone-400">|</span>
            <span className="text-emerald-900 font-bold">{personalInfo.availability}</span>
          </div>
        </header>

        {/* Section: PERFIL PROFESIONAL */}
        <section className="mb-6 print-page-break-avoid">
          <h2 className="text-sm font-black uppercase tracking-widest text-stone-950 border-b-2 border-stone-800 pb-1 mb-2.5 font-display">
            {lang === 'es' ? 'Perfil Profesional' : 'Professional Summary'}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-stone-900 text-justify font-normal">
            {personalInfo.summary}
          </p>
        </section>

        {/* Section: EXPERIENCIA LABORAL */}
        <section className="mb-6">
          <h2 className="text-sm font-black uppercase tracking-widest text-stone-950 border-b-2 border-stone-800 pb-1 mb-4 font-display">
            {lang === 'es' ? 'Experiencia Laboral' : 'Work Experience'}
          </h2>

          <div className="space-y-5">
            {experiences.map((exp) => (
              <div key={exp.id} className="print-page-break-avoid">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base sm:text-lg font-black text-stone-950">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-bold text-stone-800">
                    <span>{exp.company}</span>
                    <span aria-hidden="true" className="mx-1.5 text-stone-400">|</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-stone-900">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-amber-800 font-black select-none">•</span>
                      <span className="leading-snug font-medium">{r}</span>
                    </li>
                  ))}
                </ul>

                {/* Inline tools row */}
                <div className="mt-2 text-xs text-stone-800 flex items-center gap-1 font-medium">
                  <span className="font-bold text-stone-950">{lang === 'es' ? 'Herramientas / Operativa:' : 'Tools / Operations:'}</span>
                  <span>{exp.toolsAndTech.join(' · ')}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: FORMACIÓN Y OTROS COMPLEMENTOS */}
        <section className="mb-6 print-page-break-avoid">
          <h2 className="text-sm font-black uppercase tracking-widest text-stone-950 border-b-2 border-stone-800 pb-1 mb-3 font-display">
            {lang === 'es' ? 'Formación y Otros Complementos' : 'Education & Additional Background'}
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-stone-900">
            {education.map((edu) => (
              <div key={edu.id} className="flex items-start gap-2">
                <span className="text-amber-800 font-black select-none">•</span>
                <div>
                  <span className="font-black text-stone-950">{edu.title}</span>
                  <span className="font-bold text-stone-800"> — {edu.institution} ({edu.location})</span>
                  <p className="text-xs sm:text-sm text-stone-800 leading-snug mt-0.5 font-normal">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: HABILIDADES CLAVE */}
        <section className="print-page-break-avoid">
          <h2 className="text-sm font-black uppercase tracking-widest text-stone-950 border-b-2 border-stone-800 pb-1 mb-3 font-display">
            {lang === 'es' ? 'Habilidades Clave y Competencias' : 'Key Skills & Core Competencies'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-900">
            {skillsCategories.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-black text-stone-950 text-xs sm:text-sm">
                  {cat.title}
                </div>
                <div className="text-xs sm:text-sm text-stone-800 leading-snug font-medium">
                  {cat.skills.map(s => s.name).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
