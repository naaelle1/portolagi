import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onOpen, index = 0 }) {
  const [imgError, setImgError] = useState(false);

  // Subtle alternating rotation for tactile archive cards
  const slightRotate = index % 2 === 0 ? '-0.5deg' : '0.5deg';

  return (
    <motion.div
      whileHover={{ y: -6, rotate: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{ rotate: slightRotate }}
      className="h-full flex flex-col select-none"
    >
      <div className="relative p-5 sm:p-6 bg-[#F1E8D8] text-[#24201D] border border-[#3A3028]/40 shadow-paper rounded-xs h-full flex flex-col justify-between group transition-shadow hover:shadow-paper-lg">
        
        {/* Top Tape Strip */}
        <div className="absolute -top-3 left-6 w-16 h-4 tape-strip pointer-events-none z-10" />

        <div>
          {/* Header Metadata Strip */}
          <div className="flex items-center justify-between border-b border-[#3A3028]/20 pb-2.5 mb-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#C94A3A] font-bold">PROJECT {project.number}</span>
              <span className="text-[#3A3028]/40">/</span>
              <span className="text-[#746A60] uppercase text-[11px] font-semibold">{project.category}</span>
            </div>

            {project.highlight && (
              <span className="px-2 py-0.5 bg-[#C94A3A]/10 text-[#C94A3A] border border-[#C94A3A]/25 font-bold text-[9px] rounded-xs uppercase">
                {project.highlight}
              </span>
            )}
          </div>

          {/* Project Preview Image with Fallback */}
          <div
            onClick={() => onOpen(project)}
            className="relative border border-[#3A3028]/40 overflow-hidden mb-4 bg-[#171615] group cursor-pointer aspect-[16/10] rounded-xs shadow-retro-sm"
          >
            {!imgError ? (
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-95"
              />
            ) : (
              <div className="w-full h-full bg-[#24201D] flex flex-col items-center justify-center p-4 text-center text-[#F1E8D8] border-vintage-dashed">
                <span className="font-mono text-[10px] text-[#C9A65A] font-bold tracking-widest uppercase mb-1">
                  [PROJECT {project.number}]
                </span>
                <span className="font-serif text-lg text-[#F9F3E8]">{project.title}</span>
                <span className="font-mono text-[10px] text-[#F1E8D8]/60 mt-1 uppercase">{project.category}</span>
              </div>
            )}

            <div className="absolute inset-0 bg-[#171615]/15 group-hover:bg-transparent transition-colors pointer-events-none" />
            
            <span className="absolute bottom-2 right-2 bg-[#F1E8D8] text-[#24201D] px-2 py-0.5 font-mono text-[10px] font-bold border border-[#3A3028] shadow-xs flex items-center gap-1 pointer-events-none opacity-90 group-hover:opacity-100">
              <FileText className="w-3 h-3 text-[#C94A3A]" />
              <span>INSPECT</span>
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3
            onClick={() => onOpen(project)}
            className="font-serif text-2xl text-[#24201D] hover:text-[#C94A3A] transition-colors cursor-pointer leading-snug mb-1"
          >
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="font-mono text-[11px] text-[#746A60] font-medium mb-2">
              {project.subtitle}
            </p>
          )}

          {/* Description */}
          <p className="font-body text-xs sm:text-[13px] text-[#3A3028] leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#3A3028]/15 mb-4 font-mono text-[10px]">
            {project.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-[#F9F3E8] text-[#3A3028] border border-[#3A3028]/20 rounded-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Card Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpen(project)}
              className="flex-1 py-2 px-3 bg-[#171615] text-[#F1E8D8] hover:bg-[#C94A3A] hover:text-[#F9F3E8] transition-colors font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer border border-[#3A3028] rounded-xs"
            >
              <span>VIEW DETAILS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 bg-[#F9F3E8] text-[#24201D] hover:bg-[#3A3028] hover:text-[#F9F3E8] transition-colors border border-[#3A3028] flex items-center justify-center rounded-xs"
                title="Open live project link"
                aria-label={`Open ${project.title} external link`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}