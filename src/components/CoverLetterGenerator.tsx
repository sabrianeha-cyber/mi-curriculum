import React, { useState } from 'react';
import { coverLettersEs, CoverLetterTemplate } from '../data/cvData';
import { Copy, Check, Printer, FileText, Send, Building, UserCheck } from 'lucide-react';

interface CoverLetterGeneratorProps {
  lang: 'es' | 'en';
  defaultSectorId?: string;
  onOpenContact: () => void;
}

export const CoverLetterGenerator: React.FC<CoverLetterGeneratorProps> = ({
  lang,
  defaultSectorId,
  onOpenContact
}) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(
    defaultSectorId === 'limpieza' ? 'limpieza-industrial' :
    defaultSectorId === 'logistica' ? 'mozo-almacen' :
    defaultSectorId === 'hosteleria' ? 'ayudante-cocina' :
    defaultSectorId === 'comercio' ? 'dependienta-comercio' :
    'limpieza-industrial'
  );

  const [companyName, setCompanyName] = useState<string>('');
  const [recipientTitle, setRecipientTitle] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const activeTemplate = coverLettersEs.find(t => t.id === selectedTemplateId) || coverLettersEs[0];

  // Dynamically personalize the letter if company or recipient is entered
  const generatePersonalizedLetter = () => {
    let text = activeTemplate.letter;
    if (companyName.trim()) {
      text = text.replace(/a su equipo/g, `al equipo de ${companyName.trim()}`);
      text = text.replace(/a ustedes/g, `al equipo de ${companyName.trim()}`);
    }
    if (recipientTitle.trim()) {
      text = text.replace(/Estimado\/a Responsable [^,\n]+/g, `Estimado/a ${recipientTitle.trim()}`);
    }
    return text;
  };

  const currentLetterText = generatePersonalizedLetter();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentLetterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-6 space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black font-display text-stone-950">
          {lang === 'es' ? 'Cartas de Presentación Adaptadas por Sector' : 'Tailored Cover Letters by Sector'}
        </h2>
        <p className="text-sm sm:text-base text-stone-700 font-semibold mt-1">
          {lang === 'es'
            ? 'Modelos formales redactados para postulación directa a empresas de limpieza técnica, centros logísticos y hostelería.'
            : 'Formal application letters tailored for industrial sanitation, logistics hubs, and hospitality.'}
        </p>
      </div>

      {/* Sector Selection Tabs - Interactive Segmented Control */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-stone-200/90 rounded-xl border border-stone-300">
        {coverLettersEs.map(tmpl => (
          <button
            key={tmpl.id}
            onClick={() => setSelectedTemplateId(tmpl.id)}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              selectedTemplateId === tmpl.id
                ? 'bg-stone-900 text-white shadow-xs font-black'
                : 'text-stone-800 hover:text-stone-950 hover:bg-stone-100/80'
            }`}
          >
            <span>{tmpl.roleTitle}</span>
          </button>
        ))}
      </div>

      {/* Personalization Inputs */}
      <div className="bg-white p-6 rounded-2xl border-2 border-stone-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-1.5">
            {lang === 'es' ? 'Nombre de la Empresa o Planta (Opcional)' : 'Company Name (Optional)'}
          </label>
          <div className="relative">
            <Building className="w-4 h-4 text-stone-500 absolute left-3 top-2.5 stroke-[2.5]" />
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder={lang === 'es' ? 'Ej. Campofrío, Logisfashion, Amazon Illescas...' : 'e.g. Campofrío, Logisfashion...'}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm font-semibold rounded-lg border-2 border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50 text-stone-950 placeholder:text-stone-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-stone-900 mb-1.5">
            {lang === 'es' ? 'Destinatario / Responsable (Opcional)' : 'Recipient Title / Name (Optional)'}
          </label>
          <div className="relative">
            <UserCheck className="w-4 h-4 text-stone-500 absolute left-3 top-2.5 stroke-[2.5]" />
            <input
              type="text"
              value={recipientTitle}
              onChange={(e) => setRecipientTitle(e.target.value)}
              placeholder={lang === 'es' ? 'Ej. D. Juan Martínez / Departamento de RRHH' : 'e.g. Hiring Manager'}
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm font-semibold rounded-lg border-2 border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50 text-stone-950 placeholder:text-stone-400"
            />
          </div>
        </div>
      </div>

      {/* Letter Preview Container */}
      <div className="bg-white rounded-2xl border-2 border-stone-200 shadow-sm p-6 sm:p-10 relative print:border-none print:shadow-none print:p-0">
        {/* Printable Letter Header */}
        <div className="hidden print:block pb-4 mb-4 border-b-2 border-stone-950">
          <div className="font-display font-black text-2xl text-stone-950 uppercase">SABRIYAH DAWOOD SHAH</div>
          <div className="text-xs font-bold text-stone-800 mt-1">Teléfono: 631 69 52 41 · Email: sabrianeha@gmail.com · Torrijos, Toledo</div>
        </div>

        <div className="no-print flex flex-wrap items-center justify-between gap-3 border-b-2 border-stone-200 pb-4 mb-6">
          <div className="text-xs sm:text-sm text-stone-800 font-bold">
            <span className="font-black text-stone-950">{activeTemplate.roleTitle}</span>
            <span aria-hidden="true" className="mx-2 text-stone-400">·</span>
            <span className="text-amber-800 font-black">{activeTemplate.sectorName}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'es' ? '¡Copiada!' : 'Copied!') : (lang === 'es' ? 'Copiar Carta' : 'Copy Letter')}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-stone-900" />
              <span>{lang === 'es' ? 'Imprimir' : 'Print'}</span>
            </button>
          </div>
        </div>

        {/* Letter Body with high visibility font */}
        <div className="text-base sm:text-lg text-stone-950 leading-relaxed whitespace-pre-wrap font-sans max-w-3xl print:text-[12pt] print:leading-normal print:max-w-none font-normal">
          {currentLetterText}
        </div>
      </div>
    </div>
  );
};
