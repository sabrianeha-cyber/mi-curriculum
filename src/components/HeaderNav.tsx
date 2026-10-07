import React from 'react';
import { Printer, Phone, Mail, MessageSquare, Copy, Check } from 'lucide-react';

interface HeaderNavProps {
  activeTab: 'dossier' | 'cv' | 'carta' | 'matcher';
  setActiveTab: (tab: 'dossier' | 'cv' | 'carta' | 'matcher') => void;
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
  onOpenContact: () => void;
  onOpenAtsText: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onOpenContact,
  onOpenAtsText
}) => {
  const [copiedPhone, setCopiedPhone] = React.useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("631695241");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handlePrint = () => {
    // If currently not on the printable CV tab, we can still trigger print cleanly
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md text-stone-900 border-b border-stone-200 shadow-xs no-print transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo / Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('dossier')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <div className="font-display font-black text-xl tracking-tight text-stone-950 group-hover:text-amber-700 transition-colors">
                Sabriyah Dawood Shah
              </div>
              <div className="text-xs text-stone-700 font-bold hidden sm:block">
                {lang === 'es' ? 'Limpieza Industrial · Mozo de Almacén · Torrijos, Toledo' : 'Industrial Cleaning · Warehouse Operator · Spain'}
              </div>
            </button>
          </div>

          {/* Tab Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-100 p-1 rounded-xl border border-stone-300 text-xs font-bold">
            <button
              onClick={() => setActiveTab('dossier')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'dossier'
                  ? 'bg-stone-900 text-white shadow-xs font-bold'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/80'
              }`}
            >
              {lang === 'es' ? 'Dossier Interactivo' : 'Interactive Dossier'}
            </button>
            <button
              onClick={() => setActiveTab('cv')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'cv'
                  ? 'bg-stone-900 text-white shadow-xs font-bold'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/80'
              }`}
            >
              {lang === 'es' ? 'Formato CV A4 (PDF)' : 'Printable CV (PDF)'}
            </button>
            <button
              onClick={() => setActiveTab('matcher')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'matcher'
                  ? 'bg-stone-900 text-white shadow-xs font-bold'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/80'
              }`}
            >
              {lang === 'es' ? 'Test de Requisitos' : 'Job Matcher'}
            </button>
            <button
              onClick={() => setActiveTab('carta')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTab === 'carta'
                  ? 'bg-stone-900 text-white shadow-xs font-bold'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-200/80'
              }`}
            >
              {lang === 'es' ? 'Carta de Presentación' : 'Cover Letters'}
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <div className="flex items-center bg-stone-100 rounded-lg p-0.5 border border-stone-300 text-xs">
              <button
                onClick={() => setLang('es')}
                className={`px-2 py-1 rounded font-bold transition-colors cursor-pointer ${
                  lang === 'es' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-700 hover:text-stone-950'
                }`}
                title="Español"
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded font-bold transition-colors cursor-pointer ${
                  lang === 'en' ? 'bg-stone-900 text-white shadow-xs' : 'text-stone-700 hover:text-stone-950'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Print / PDF button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 transition-colors shadow-xs cursor-pointer"
              title={lang === 'es' ? 'Imprimir o guardar en PDF' : 'Print or save to PDF'}
            >
              <Printer className="w-3.5 h-3.5 text-stone-900" />
              <span className="hidden sm:inline">{lang === 'es' ? 'Imprimir / PDF' : 'Print / PDF'}</span>
            </button>

            {/* Quick Contact CTA */}
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-xs cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Contactar' : 'Contact'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Tab Navigation */}
        <div className="flex md:hidden overflow-x-auto py-2 border-t border-stone-200 gap-1 scrollbar-none text-xs">
          <button
            onClick={() => setActiveTab('dossier')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-bold ${
              activeTab === 'dossier' ? 'bg-stone-900 text-white' : 'text-stone-700 bg-stone-100'
            }`}
          >
            {lang === 'es' ? 'Dossier' : 'Dossier'}
          </button>
          <button
            onClick={() => setActiveTab('cv')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-bold ${
              activeTab === 'cv' ? 'bg-stone-900 text-white' : 'text-stone-700 bg-stone-100'
            }`}
          >
            {lang === 'es' ? 'CV Imprimible' : 'Printable CV'}
          </button>
          <button
            onClick={() => setActiveTab('matcher')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-bold ${
              activeTab === 'matcher' ? 'bg-stone-900 text-white' : 'text-stone-700 bg-stone-100'
            }`}
          >
            {lang === 'es' ? 'Test Requisitos' : 'Job Matcher'}
          </button>
          <button
            onClick={() => setActiveTab('carta')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-bold ${
              activeTab === 'carta' ? 'bg-stone-900 text-white' : 'text-stone-700 bg-stone-100'
            }`}
          >
            {lang === 'es' ? 'Carta' : 'Cover Letter'}
          </button>
        </div>
      </div>
    </header>
  );
};
