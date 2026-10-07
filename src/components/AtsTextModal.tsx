import React, { useState } from 'react';
import { X, Copy, Check, FileText } from 'lucide-react';
import { CVData } from '../data/cvData';

interface AtsTextModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CVData;
  lang: 'es' | 'en';
}

export const AtsTextModal: React.FC<AtsTextModalProps> = ({
  isOpen,
  onClose,
  data,
  lang
}) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const { personalInfo, experiences, education, skillsCategories } = data;

  const textContent = `${personalInfo.fullName}
Teléfono: ${personalInfo.phone}
Email: ${personalInfo.email}
Ubicación: ${personalInfo.location}
Idiomas: ${personalInfo.languages.map(l => `${l.language} (${l.level})`).join(' | ')}
Disponibilidad: ${personalInfo.availability}

PERFIL PROFESIONAL
${personalInfo.summary}

EXPERIENCIA LABORAL

${experiences.map(exp => `${exp.role.toUpperCase()}
${exp.company} - ${exp.location} (${exp.period})
Sector: ${exp.sectorLabel}
${exp.responsibilities.map(r => `- ${r}`).join('\n')}
Herramientas y maquinaria: ${exp.toolsAndTech.join(', ')}
`).join('\n')}

FORMACIÓN Y OTROS COMPLEMENTOS
${education.map(edu => `- ${edu.title} | ${edu.institution} (${edu.location}): ${edu.description}`).join('\n')}

HABILIDADES CLAVE
${skillsCategories.map(cat => `${cat.title.toUpperCase()}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs no-print">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full border border-stone-200 shadow-xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 bg-white border-b-2 border-stone-200 text-stone-900 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-amber-700 stroke-[2.5]" />
            <div>
              <h3 className="font-black text-base text-stone-950 font-display">
                {lang === 'es' ? 'Texto Plano Optimizado para ATS / Portales de Empleo' : 'ATS-Optimized Plain Text Resume'}
              </h3>
              <p className="text-xs font-semibold text-stone-600">
                {lang === 'es' ? 'Listo para copiar y pegar en InfoJobs, Indeed, Randstad o ETTs' : 'Ready to paste directly into HR databases and job portals'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto bg-stone-50 font-mono text-xs text-stone-800 whitespace-pre-wrap leading-relaxed select-all border-y border-stone-200">
          {textContent}
        </div>

        <div className="p-4 bg-white flex items-center justify-between gap-3">
          <span className="text-xs text-stone-500">
            {lang === 'es' ? 'Formato sin tablas ni elementos incompatibles' : 'Free of incompatible tables or graphics'}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-800" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? (lang === 'es' ? '¡Copiado con Éxito!' : 'Copied!') : (lang === 'es' ? 'Copiar Todo el Texto' : 'Copy All Text')}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-2 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            >
              {lang === 'es' ? 'Cerrar' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
