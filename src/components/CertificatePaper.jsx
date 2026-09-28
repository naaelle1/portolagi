import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowUpRight } from 'lucide-react';
import Doodle from './Doodle';

export default function CertificatePaper({ certificate, index = 0, onSelect }) {
  const [imgError, setImgError] = useState(false);

  // Slight tactile rotation
  const slightRotate = index % 2 === 0 ? '-1deg' : '1.2deg';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 15 }}
      whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{ rotate: slightRotate }}
      onClick={() => onSelect(certificate)}
      className="relative p-5 bg-[#F1E8D8] text-[#24201D] border border-[#3A3028]/40 shadow-paper rounded-xs cursor-pointer select-none group flex flex-col justify-between"
    >
      {/* Tape Strip */}
      <div className="absolute -top-3 left-6 w-16 h-4 tape-strip pointer-events-none" />

      <div>
        {/* Header Strip */}
        <div className="flex items-center justify-between border-b border-[#3A3028]/20 pb-2 mb-3 font-mono text-[11px]">
          <span className="font-bold text-[#C94A3A]">
            [{certificate.number || 'DOC'}]
          </span>
          <span className="text-[#3A3028]/70 font-semibold uppercase text-[10px]">
            {certificate.issuer}
          </span>
        </div>

        {/* Thumbnail Preview with Fallback */}
        <div className="relative border border-[#3A3028]/40 overflow-hidden mb-3 bg-[#171615] aspect-[16/10] rounded-xs shadow-retro-sm">
          {!imgError ? (
            <img
              src={certificate.image}
              alt={certificate.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-300"
            />
          ) : (
            <div className="w-full h-full bg-[#24201D] flex flex-col items-center justify-center p-3 text-center text-[#F1E8D8]">
              <FileText className="w-6 h-6 text-[#C9A65A] mb-1" />
              <span className="font-mono text-[9px] text-[#C9A65A] uppercase font-bold">
                {certificate.tag}
              </span>
            </div>
          )}

          <div className="absolute bottom-1 right-1 pointer-events-none">
            <Doodle type="stamp" text="VALID" className="scale-75 origin-bottom-right" />
          </div>
        </div>

        {/* Title */}
        <h4 className="font-serif text-lg text-[#24201D] group-hover:text-[#C94A3A] transition-colors leading-snug line-clamp-2 mb-1">
          {certificate.title}
        </h4>

        {/* Year */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#746A60] mb-3">
          <span>{certificate.year}</span>
          <span>•</span>
          <span className="text-[#C94A3A] font-bold">{certificate.tag}</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-2.5 border-t border-[#3A3028]/15 flex items-center justify-between font-mono text-[11px]">
        <span className="text-[#746A60]">INSPECT RECORD</span>
        <span className="p-1 bg-[#171615] text-[#F1E8D8] group-hover:bg-[#C94A3A] group-hover:text-[#F9F3E8] rounded-xs transition-colors">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.div>
  );
}
