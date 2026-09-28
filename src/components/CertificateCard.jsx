import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowUpRight } from 'lucide-react';
import Doodle from './Doodle';

export default function CertificateCard({ certificate, onSelect, index = 0 }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={() => onSelect(certificate)}
      className="p-5 bg-[#F1E8D8] text-[#24201D] border border-[#3A3028]/40 shadow-paper rounded-xs cursor-pointer select-none group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between border-b border-[#3A3028]/20 pb-2 mb-3 font-mono text-xs">
          <span className="text-[#C94A3A] font-bold">[{certificate.number || index + 1}]</span>
          <span className="text-[#746A60]">{certificate.year}</span>
        </div>

        <div className="relative border border-[#3A3028]/40 overflow-hidden mb-3 bg-[#171615] aspect-[16/10] rounded-xs">
          {!imgError ? (
            <img
              src={certificate.image}
              alt={certificate.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#24201D] text-[#F1E8D8]">
              <FileText className="w-6 h-6 text-[#C9A65A]" />
            </div>
          )}
          <div className="absolute bottom-1 right-1 pointer-events-none">
            <Doodle type="stamp" text="PASS" className="scale-75 origin-bottom-right" />
          </div>
        </div>

        <h4 className="font-serif text-lg text-[#24201D] group-hover:text-[#C94A3A] transition-colors leading-snug">
          {certificate.title}
        </h4>
        <p className="font-mono text-xs text-[#746A60] mt-1">{certificate.issuer}</p>
      </div>

      <div className="pt-3 border-t border-[#3A3028]/15 flex items-center justify-between font-mono text-xs text-[#746A60]">
        <span>{certificate.tag}</span>
        <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-[#C94A3A]" />
      </div>
    </motion.div>
  );
}