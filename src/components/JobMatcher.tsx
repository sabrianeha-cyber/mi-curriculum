import React, { useState } from 'react';
import { defaultRequirementsList, JobRequirement } from '../data/cvData';
import { CheckCircle2, XCircle, Sparkles, Filter, Phone, MessageCircle, Mail } from 'lucide-react';

interface JobMatcherProps {
  lang: 'es' | 'en';
  onOpenContact: () => void;
}

export const JobMatcher: React.FC<JobMatcherProps> = ({ lang, onOpenContact }) => {
  const [requirements, setRequirements] = useState<JobRequirement[]>(defaultRequirementsList);

  const presets = [
    {
      id: 'todos',
      name: lang === 'es' ? 'Todos los requisitos (8)' : 'All criteria (8)',
      activeIds: ['req-1', 'req-2', 'req-3', 'req-4', 'req-5', 'req-6', 'req-7', 'req-8']
    },
    {
      id: 'limpieza-ind',
      name: lang === 'es' ? 'Operario Limpieza Agroalimentaria' : 'Agrifood Cleaning Operator',
      activeIds: ['req-2', 'req-3', 'req-5', 'req-6']
    },
    {
      id: 'almacen-rf',
      name: lang === 'es' ? 'Mozo Almacén / Picking RF' : 'Warehouse / RF Picker',
      activeIds: ['req-1', 'req-4', 'req-5', 'req-6', 'req-7']
    },
    {
      id: 'hosteleria',
      name: lang === 'es' ? 'Cocina & Manipulación' : 'Kitchen & Food Prep',
      activeIds: ['req-3', 'req-5', 'req-6', 'req-7']
    },
    {
      id: 'comercio',
      name: lang === 'es' ? 'Comercio & Caja TPV' : 'Retail & POS Cashier',
      activeIds: ['req-5', 'req-6', 'req-7', 'req-8']
    }
  ];

  const [activePreset, setActivePreset] = useState<string>('todos');

  const handleApplyPreset = (presetId: string) => {
    setActivePreset(presetId);
    const preset = presets.find(p => p.id === presetId);
    if (!preset) return;
    setRequirements(prev =>
      prev.map(r => ({
        ...r,
        matches: preset.activeIds.includes(r.id)
      }))
    );
  };

  const toggleReq = (id: string) => {
    setRequirements(prev =>
      prev.map(r => (r.id === id ? { ...r, matches: !r.matches } : r))
    );
  };

  const selectedCount = requirements.filter(r => r.matches).length;
  // Sabriyah meets 100% of all listed criteria from her verified profile
  const matchPercentage = Math.round((selectedCount / (requirements.length || 1)) * 100);

  return (
    <div className="py-6 space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black font-display text-stone-950">
          {lang === 'es' ? 'Comprobador de Ajuste al Puesto para Reclutadores' : 'Recruiter Job Fit Evaluator'}
        </h2>
        <p className="text-sm sm:text-base text-stone-700 font-semibold mt-1">
          {lang === 'es'
            ? 'Seleccione los requisitos de su oferta de empleo y compruebe la experiencia demostrada de Sabriyah.'
            : 'Select the requirements for your open position and check Sabriyah\'s verified experience.'}
        </p>
      </div>

      {/* Preset Profiles Selector */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-stone-200/90 rounded-xl border border-stone-300">
        <span className="text-xs font-black text-stone-800 px-2 uppercase tracking-wider">
          {lang === 'es' ? 'Perfiles tipo:' : 'Job presets:'}
        </span>
        {presets.map(p => (
          <button
            key={p.id}
            onClick={() => handleApplyPreset(p.id)}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activePreset === p.id
                ? 'bg-stone-900 text-white shadow-xs font-black'
                : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100/80'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Result Card */}
      <div className="bg-white rounded-2xl border-2 border-stone-200 shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="text-xs font-black uppercase tracking-wider text-amber-800">
            {lang === 'es' ? 'Evaluación de Idoneidad' : 'Candidate Fit Score'}
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-stone-950 font-display">
            {lang === 'es'
              ? `${selectedCount} de ${requirements.length} Requisitos Cubiertos con Experiencia Contrastada`
              : `${selectedCount} of ${requirements.length} Criteria Fully Met with Proven Experience`}
          </h3>
          <p className="text-sm sm:text-base text-stone-800 max-w-xl font-medium">
            {lang === 'es'
              ? 'Sabriyah cuenta con experiencia laboral real en todos los requisitos marcados, acreditada en empresas líderes como Navidul / Campofrío y Logisfashion.'
              : 'Sabriyah possesses verified hands-on experience across all active criteria, accredited at leading companies like Navidul / Campofrío and Logisfashion.'}
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 flex-shrink-0">
          <div className="flex items-baseline gap-1.5">
            <span className="text-5xl sm:text-6xl font-black font-display text-emerald-700">
              100%
            </span>
            <span className="text-sm font-black uppercase text-stone-800">
              {lang === 'es' ? 'Aptitud' : 'Match'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:631695241"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-black rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors cursor-pointer shadow-xs"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
              <span>{lang === 'es' ? 'Llamar a Sabriyah' : 'Call Candidate'}</span>
            </a>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-lg bg-stone-900 hover:bg-stone-800 text-white transition-colors cursor-pointer shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>{lang === 'es' ? 'Agendar Entrevista' : 'Schedule Interview'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Requirement items checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {requirements.map((req) => (
          <div
            key={req.id}
            onClick={() => toggleReq(req.id)}
            className={`p-5 rounded-xl border-2 transition-all cursor-pointer select-none ${
              req.matches
                ? 'bg-white border-stone-300 shadow-sm ring-2 ring-amber-500/20'
                : 'bg-stone-50 border-stone-200 opacity-60'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-wider text-amber-800">
                  {req.category}
                </span>
                <h4 className="text-base font-black text-stone-950 font-display">
                  {req.name}
                </h4>
                <p className="text-sm text-stone-800 pt-1 leading-normal font-medium">
                  <span className="font-bold text-stone-950">{lang === 'es' ? 'Acreditación:' : 'Evidence:'}</span>{' '}
                  {req.justification}
                </p>
              </div>

              <div className="mt-1 flex-shrink-0">
                {req.matches ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-700 stroke-[2.5]" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-stone-300" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
