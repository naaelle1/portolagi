import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Award, Calendar, Building2, FileText } from 'lucide-react';
import Doodle from './Doodle';

export default function CertificateModal({ certificate, onClose }) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (certificate) {
      document.body.style.overflow = 'hidden';
      if (window.__lenis) {
        window.__lenis.stop();
      }
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        if (window.__lenis) {
          window.__lenis.start();
        }
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [certificate, onClose]);

  if (!certificate) return null;

  const isPdf = certificate.image?.toLowerCase().endsWith('.pdf') || certificate.type === 'pdf';

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#171615]/85 backdrop-blur-md overflow-hidden"
      >
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 18 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#F1E8D8] text-[#24201D] border-2 border-[#3A3028] shadow-2xl rounded-xs overflow-hidden z-10 my-4 flex flex-col max-h-[92vh]"
        >
          {/* Top Tape Strip Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 tape-strip z-20 pointer-events-none" />

          {/* Modal Header Bar */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#3A3028]/20 bg-[#F9F3E8] shrink-0">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#C94A3A]" />
              <span className="font-mono text-xs font-bold text-[#C94A3A]">
                [CERT {certificate.number || 'DOC'}]
              </span>
              <span className="px-2 py-0.5 bg-[#C94A3A]/10 text-[#C94A3A] border border-[#C94A3A]/20 font-mono text-[10px] font-bold uppercase rounded-xs">
                {certificate.tag || certificate.category}
              </span>
              <span className="font-mono text-[10px] text-[#746A60] hidden sm:inline">
                VERIFIED CERTIFICATE DOCUMENT
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 bg-[#171615] text-[#F1E8D8] hover:bg-[#C94A3A] hover:text-[#F9F3E8] transition-colors rounded-xs focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 2-Column Responsive Body */}
          <div
            data-lenis-prevent="true"
            className="p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 overflow-y-auto paper-scrollbar"
            style={{ overscrollBehavior: 'contain' }}
          >
            {/* LEFT COLUMN: Large Certificate Preview / PDF Embed (Desktop: 7 cols, Mobile: full) */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="relative border-2 border-[#3A3028] p-2 bg-[#171615] shadow-retro-sm aspect-[16/11] overflow-hidden flex items-center justify-center rounded-xs min-h-[220px]">
                {isPdf ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#24201D] text-[#F1E8D8]">
                    {/* Embedded PDF object with fallback */}
                    <object
                      data={certificate.image}
                      type="application/pdf"
                      className="w-full h-full rounded-xs hidden md:block"
                    >
                      <div className="flex flex-col items-center justify-center h-full space-y-2">
                        <FileText className="w-10 h-10 text-[#C9A65A]" />
                        <span className="font-mono text-xs text-[#F1E8D8]">PDF Document Available</span>
                      </div>
                    </object>

                    {/* Mobile or Fallback view for PDF */}
                    <div className="md:hidden flex flex-col items-center justify-center space-y-3">
                      <FileText className="w-12 h-12 text-[#C9A65A]" />
                      <span className="font-serif text-base text-[#F9F3E8] max-w-xs">{certificate.title}</span>
                      <a
                        href={certificate.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 bg-[#C94A3A] text-[#F9F3E8] font-mono text-xs font-bold uppercase rounded-xs flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>OPEN PDF VIEWER</span>
                      </a>
                    </div>
                  </div>
                ) : !imgError ? (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-contain bg-[#171615] rounded-xs"
                  />
                ) : (
                  <div className="w-full h-full bg-[#24201D] flex flex-col items-center justify-center p-6 text-center text-[#F1E8D8] border border-dashed border-[#F1E8D8]/20">
                    <FileText className="w-12 h-12 text-[#C9A65A] mb-2" />
                    <span className="font-mono text-xs text-[#C9A65A] font-bold tracking-widest uppercase">
                      OFFICIAL CERTIFICATE ARTIFACT
                    </span>
                    <span className="font-serif text-lg text-[#F9F3E8] mt-2 max-w-sm">
                      {certificate.title}
                    </span>
                    <span className="font-mono text-xs text-[#F1E8D8]/70 mt-1">
                      {certificate.issuer} • {certificate.year}
                    </span>
                  </div>
                )}

                {/* Verified Stamp */}
                <div className="absolute bottom-3 right-3 pointer-events-none">
                  <Doodle type="stamp" text="VERIFIED" />
                </div>
              </div>

              {/* Document actions under preview */}
              <div className="mt-3 flex items-center justify-between font-mono text-xs text-[#746A60] px-1">
                <span>FORMAT: {isPdf ? 'PDF DOCUMENT' : 'IMAGE ARTIFACT'}</span>
                {certificate.image && (
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C94A3A] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>OPEN FULL SIZE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Certificate Details (Desktop: 5 cols, Mobile: full) */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#6D7F8F] font-bold uppercase mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>ISSUING BODY / INSTITUTION</span>
                  </div>
                  <div className="font-mono text-sm font-bold text-[#24201D]">
                    {certificate.issuer}
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-xl sm:text-2xl text-[#24201D] leading-snug">
                    {certificate.title}
                  </h2>
                </div>

                {/* Metadata Ledger */}
                <div className="space-y-2 p-3.5 bg-[#F9F3E8] border border-[#3A3028]/20 font-mono text-xs rounded-xs">
                  <div className="flex items-center justify-between text-[#3A3028]">
                    <span className="text-[#746A60]">YEAR:</span>
                    <span className="font-bold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C94A3A]" />
                      {certificate.year}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#3A3028] border-t border-[#3A3028]/10 pt-1.5">
                    <span className="text-[#746A60]">CATEGORY:</span>
                    <span className="font-bold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#6D7F8F]" />
                      {certificate.tag || certificate.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[#3A3028] border-t border-[#3A3028]/10 pt-1.5">
                    <span className="text-[#746A60]">DOCUMENT ID:</span>
                    <span className="font-bold text-[#C94A3A]">
                      CERT-{certificate.number || '01'}
                    </span>
                  </div>
                </div>

                {/* Description Context */}
                {certificate.description && (
                  <div>
                    <span className="font-mono text-[11px] text-[#746A60] font-bold block mb-1 uppercase tracking-wider">
                      CERTIFICATE SUMMARY:
                    </span>
                    <p className="font-body text-xs sm:text-sm text-[#3A3028] leading-relaxed border-l-2 border-[#C94A3A] pl-3">
                      {certificate.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Close and Actions */}
              <div className="pt-3 border-t border-[#3A3028]/15 flex items-center justify-between">
                <span className="font-mono text-[11px] text-emerald-800 font-semibold">
                  ✓ Verified Record
                </span>

                <button
                  onClick={onClose}
                  className="px-3.5 py-1.5 bg-[#171615] text-[#F1E8D8] hover:bg-[#C94A3A] hover:text-[#F9F3E8] font-mono text-xs font-bold uppercase rounded-xs transition-colors cursor-pointer"
                >
                  CLOSE [ESC]
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
