/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { InteractiveDossier } from './components/InteractiveDossier';
import { ClassicPrintableCV } from './components/ClassicPrintableCV';
import { CoverLetterGenerator } from './components/CoverLetterGenerator';
import { JobMatcher } from './components/JobMatcher';
import { ContactModal } from './components/ContactModal';
import { AtsTextModal } from './components/AtsTextModal';
import { cvDataEs, cvDataEn } from './data/cvData';
import { Phone, Mail, MapPin, Printer, FileText, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dossier' | 'cv' | 'carta' | 'matcher'>('dossier');
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [letterSector, setLetterSector] = useState<string>('limpieza');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAtsOpen, setIsAtsOpen] = useState(false);

  const currentData = lang === 'es' ? cvDataEs : cvDataEn;

  const handleSelectSectorForLetter = (sector: string) => {
    setLetterSector(sector);
    setActiveTab('carta');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleGoToPrint = () => {
    setActiveTab('cv');
    setTimeout(() => {
      window.print();
    }, 200);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 flex flex-col font-sans">
      {/* Navigation Bar */}
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenAtsText={() => setIsAtsOpen(true)}
      />

      {/* Hero Header (always visible except in raw print) */}
      <div className="no-print">
        <HeroSection
          data={currentData}
          lang={lang}
          onOpenContact={() => setIsContactOpen(true)}
          onOpenAtsText={() => setIsAtsOpen(true)}
          onGoToPrint={handleGoToPrint}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6">
        {activeTab === 'dossier' && (
          <div className="no-print">
            <InteractiveDossier
              data={currentData}
              lang={lang}
              onSelectSectorForCoverLetter={handleSelectSectorForLetter}
            />
          </div>
        )}

        {activeTab === 'cv' && (
          <ClassicPrintableCV
            data={currentData}
            lang={lang}
          />
        )}

        {activeTab === 'matcher' && (
          <div className="no-print">
            <JobMatcher
              lang={lang}
              onOpenContact={() => setIsContactOpen(true)}
            />
          </div>
        )}

        {activeTab === 'carta' && (
          <div>
            <CoverLetterGenerator
              lang={lang}
              defaultSectorId={letterSector}
              onOpenContact={() => setIsContactOpen(true)}
            />
          </div>
        )}

        {/* Hidden fallback in DOM: during physical print, if not on 'cv' or 'carta', render classic CV */}
        {activeTab !== 'cv' && activeTab !== 'carta' && (
          <div className="hidden print:block">
            <ClassicPrintableCV
              data={currentData}
              lang={lang}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="no-print bg-white text-stone-800 border-t-2 border-stone-200 mt-16 py-8 px-4 text-xs shadow-xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-black text-stone-950 text-base font-display">
              Sabriyah Dawood Shah
            </div>
            <p className="text-stone-700 font-semibold">
              {lang === 'es'
                ? 'Operaria de Limpieza Industrial & Mozo de Almacén · Torrijos, Toledo'
                : 'Industrial Cleaning Operator & Warehouse Logistics · Torrijos, Toledo'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-stone-800 font-bold text-sm">
            <a
              href="tel:631695241"
              className="hover:text-amber-700 transition-colors flex items-center gap-1.5 text-stone-950 underline decoration-stone-300 underline-offset-4"
            >
              <Phone className="w-4 h-4 text-amber-600 stroke-[2.5]" />
              <span>631 69 52 41</span>
            </a>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <a
              href="mailto:sabrianeha@gmail.com"
              className="hover:text-amber-700 transition-colors flex items-center gap-1.5 text-stone-950 underline decoration-stone-300 underline-offset-4"
            >
              <Mail className="w-4 h-4 text-amber-600 stroke-[2.5]" />
              <span>sabrianeha@gmail.com</span>
            </a>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5 text-stone-900">
              <MapPin className="w-4 h-4 text-amber-600 stroke-[2.5]" />
              <span>Torrijos, Toledo</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-stone-600 font-semibold text-xs">
          <div>
            {lang === 'es' ? 'Disponibilidad inmediata para turnos rotativos y jornada completa.' : 'Immediate availability for rotating shifts and full-time employment.'}
          </div>
          <div className="text-stone-800 font-bold">
            Navidul / Campofrío · Logisfashion · San Luis 1 · Cruz Roja
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        data={currentData}
        lang={lang}
      />

      <AtsTextModal
        isOpen={isAtsOpen}
        onClose={() => setIsAtsOpen(false)}
        data={currentData}
        lang={lang}
      />
    </div>
  );
}
