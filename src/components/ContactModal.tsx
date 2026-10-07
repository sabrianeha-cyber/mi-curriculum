import React, { useState } from 'react';
import { X, Phone, Mail, MessageCircle, Copy, Check, Building, Calendar, MapPin } from 'lucide-react';
import { CVData } from '../data/cvData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CVData;
  lang: 'es' | 'en';
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  data,
  lang
}) => {
  if (!isOpen) return null;

  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('Operaria de Limpieza Industrial / Mozo de Almacén');
  const [meetingProposal, setMeetingProposal] = useState('lo antes posible');
  const [copied, setCopied] = useState(false);

  const { personalInfo } = data;

  const rawPhone = personalInfo.phone.replace(/\s+/g, '');

  const whatsappMessage = encodeURIComponent(
    `Hola Sabriyah, te contacto de ${companyName.trim() || 'nuestra empresa'} con respecto a la posición de ${positionTitle}. Nos gustaría invitarte a una entrevista laboral (${meetingProposal}). ¿Podrías confirmar tu disponibilidad? Muchas gracias.`
  );

  const emailSubject = encodeURIComponent(
    `Entrevista de trabajo: ${positionTitle} - ${companyName.trim() || 'Empresa'}`
  );

  const emailBody = encodeURIComponent(
    `Estimada Sabriyah Dawood Shah,\n\nHemos revisado con gran interés su currículum vitae y trayectoria profesional (Limpieza Industrial / Mozo de Almacén). Nos gustaría concertar una entrevista laboral para el puesto de ${positionTitle}.\n\nPor favor, indíquenos su disponibilidad para llamarle al teléfono ${personalInfo.phone}.\n\nAtentamente,\n${companyName.trim() || 'Departamento de Selección'}`
  );

  const handleCopySummary = () => {
    const text = `SABRIYAH DAWOOD SHAH
Teléfono: 631 69 52 41
Email: sabrianeha@gmail.com
Ubicación: Torrijos, Toledo (España)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs no-print">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full border border-stone-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 bg-white border-b-2 border-stone-200 text-stone-900 flex items-center justify-between">
          <div>
            <h3 className="font-display font-black text-xl text-stone-950">
              {lang === 'es' ? 'Contactar con Sabriyah Dawood Shah' : 'Contact Sabriyah Dawood Shah'}
            </h3>
            <p className="text-xs font-bold text-stone-600 mt-0.5">
              {lang === 'es' ? 'Respuesta rápida · Torrijos, Toledo' : 'Fast response · Torrijos, Toledo'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Direct channels */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${rawPhone}`}
              className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs gap-1.5 transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'es' ? 'Llamar al 631 69 52 41' : 'Call 631 69 52 41'}</span>
            </a>

            <a
              href={`https://wa.me/34${rawPhone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs gap-1.5 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'es' ? 'WhatsApp Directo' : 'WhatsApp Chat'}</span>
            </a>
          </div>

          {/* Quick Pre-formatted Invitation Generator */}
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-600">
              {lang === 'es' ? 'Enviar Invitación a Entrevista' : 'Schedule Interview Invitation'}
            </div>

            <div className="space-y-2">
              <div>
                <label className="block text-[11px] font-medium text-stone-600 mb-1">
                  {lang === 'es' ? 'Nombre de su Empresa' : 'Company Name'}
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ej. Campofrío, Logisfashion..."
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-stone-600 mb-1">
                  {lang === 'es' ? 'Puesto vacante' : 'Job Title'}
                </label>
                <input
                  type="text"
                  value={positionTitle}
                  onChange={(e) => setPositionTitle(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href={`mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-stone-900 hover:bg-stone-800 text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'Enviar por Correo' : 'Send via Email'}</span>
              </a>

              <a
                href={`https://wa.me/34${rawPhone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'Enviar por WhatsApp' : 'Send via WhatsApp'}</span>
              </a>
            </div>
          </div>

          {/* Details footer */}
          <div className="flex items-center justify-between text-xs text-stone-500 border-t border-stone-100 pt-3">
            <div className="space-y-0.5">
              <div><strong>Email:</strong> {personalInfo.email}</div>
              <div><strong>Ubicación:</strong> {personalInfo.location}</div>
            </div>

            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-900 font-medium cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado' : 'Copiar datos'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
