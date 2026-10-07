import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Check, Copy, MessageCircle, FileDown, ShieldCheck, Sparkles, Building2, Package, Award } from 'lucide-react';
import { CVData } from '../data/cvData';

interface HeroSectionProps {
  data: CVData;
  lang: 'es' | 'en';
  onOpenContact: () => void;
  onOpenAtsText: () => void;
  onGoToPrint: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  data,
  lang,
  onOpenContact,
  onOpenAtsText,
  onGoToPrint
}) => {
  const [copied, setCopied] = useState(false);
  const { personalInfo, keyMetrics } = data;

  const handleCopyContact = () => {
    const text = `${personalInfo.fullName}
Tel: ${personalInfo.phone}
Email: ${personalInfo.email}
Ubicación: ${personalInfo.location}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    lang === 'es'
      ? `Hola Sabriyah, te contacto tras ver tu perfil profesional (Limpieza Industrial / Almacén). Nos gustaría hablar sobre una oportunidad laboral.`
      : `Hello Sabriyah, I am contacting you regarding your professional profile for a job opportunity.`
  );

  return (
    <section className="bg-white text-stone-900 pt-8 pb-10 px-4 sm:px-6 border-b border-stone-200 shadow-xs">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          {/* Main Info */}
          <div className="space-y-4 max-w-3xl">
            {/* Top metadata strip - strictly zero pill, clean typographic line */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-bold">
              <span className="flex items-center gap-1.5 text-emerald-800">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse inline-block" />
                {lang === 'es' ? 'Disponible para incorporación inmediata' : 'Available for immediate hire'}
              </span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-stone-800">Torrijos, Toledo (España)</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-stone-700 font-semibold">{personalInfo.region}</span>
            </div>

            {/* Name & Headline */}
            <div>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-950">
                {personalInfo.fullName}
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-bold text-amber-800">
                {personalInfo.headline}
              </p>
            </div>

            {/* Unboxed Metadata Contact Row with high-contrast text */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:text-base text-stone-900 font-bold pt-1">
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-stone-950 hover:text-amber-700 transition-colors"
                title="Llamar directamente"
              >
                <Phone className="w-4 h-4 text-amber-600 stroke-[2.5]" />
                <span className="underline decoration-stone-300 underline-offset-4 hover:decoration-amber-600">{personalInfo.phone}</span>
              </a>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-stone-950 hover:text-amber-700 transition-colors"
                title="Enviar correo"
              >
                <Mail className="w-4 h-4 text-amber-600 stroke-[2.5]" />
                <span className="underline decoration-stone-300 underline-offset-4 hover:decoration-amber-600">{personalInfo.email}</span>
              </a>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <div className="flex items-center gap-2 text-stone-900 font-bold">
                <MapPin className="w-4 h-4 text-amber-600 stroke-[2.5]" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Languages Row */}
            <div className="flex flex-wrap items-center gap-x-2 text-sm sm:text-base text-stone-800">
              <span className="font-bold text-stone-950">
                {lang === 'es' ? 'Idiomas:' : 'Languages:'}
              </span>
              {personalInfo.languages.map((l, idx) => (
                <React.Fragment key={l.language}>
                  {idx > 0 && <span aria-hidden="true" className="text-stone-400">·</span>}
                  <span className="text-stone-900">
                    <strong className="font-bold text-stone-950">{l.language}</strong> ({l.level})
                  </span>
                </React.Fragment>
              ))}
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-normal pt-3 border-t border-stone-200">
              {personalInfo.summary}
            </p>

            {/* Action Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-2.5">
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm shadow-sm transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" />
                <span>{lang === 'es' ? 'Llamar: 631 69 52 41' : 'Call 631 69 52 41'}</span>
              </a>

              <a
                href={`https://wa.me/34${personalInfo.phone.replace(/\s+/g, '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onGoToPrint}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 text-sm font-bold transition-all cursor-pointer shadow-2xs"
              >
                <FileDown className="w-4 h-4 text-stone-900 stroke-[2.5]" />
                <span>{lang === 'es' ? 'Imprimir / Guardar PDF' : 'Download / Print PDF'}</span>
              </button>

              <button
                onClick={handleCopyContact}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 text-xs font-bold transition-all cursor-pointer"
                title="Copiar datos de contacto al portapapeles"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" /> : <Copy className="w-3.5 h-3.5 stroke-[2]" />}
                <span>{copied ? (lang === 'es' ? '¡Copiado!' : 'Copied!') : (lang === 'es' ? 'Copiar Contacto' : 'Copy Contact')}</span>
              </button>

              <button
                onClick={onOpenAtsText}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold text-stone-700 hover:text-stone-950 underline transition-colors ml-auto cursor-pointer"
              >
                {lang === 'es' ? 'Ver en texto plano (ATS)' : 'View plain text (ATS)'}
              </button>
            </div>
          </div>

          {/* Quick Metrics & Badges Panel */}
          <div className="lg:w-80 flex-shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {keyMetrics.map((metric, i) => (
              <div
                key={i}
                className="bg-stone-50 border border-stone-300 p-4 rounded-xl hover:border-amber-600 transition-colors shadow-2xs"
              >
                <div className="text-xs text-stone-600 font-bold uppercase tracking-wider">
                  {metric.label}
                </div>
                <div className="text-base sm:text-lg font-black text-stone-950 font-display mt-0.5">
                  {metric.value}
                </div>
                <div className="text-xs text-stone-700 font-semibold mt-1">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
