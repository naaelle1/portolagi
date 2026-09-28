import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Maximize2 } from 'lucide-react';
import ProjectOverview from './project-modal/ProjectOverview';
import ProjectProcess from './project-modal/ProjectProcess';
import ProjectFeatures from './project-modal/ProjectFeatures';

export default function ProjectModal({ project, onClose }) {
  const [imgError, setImgError] = useState(false);
  const [imageExpanded, setImageExpanded] = useState(false);

  // Prevent background page scroll, pause smooth scroller, and handle Escape key
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      if (window.__lenis) {
        window.__lenis.stop();
      }

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          if (imageExpanded) {
            setImageExpanded(false);
          } else {
            onClose();
          }
        }
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
  }, [project, onClose, imageExpanded]);

  if (!project) return null;

  const links = project.links || { live: project.link };

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#171615]/85 backdrop-blur-md overflow-hidden"
      >
        {/* Dark Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 cursor-pointer"
        />

        {/* Modal Main Window */}
        <motion.div
          data-lenis-prevent="true"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-4xl max-h-[88vh] sm:max-h-[90vh] bg-[#F1E8D8] text-[#24201D] border-2 border-[#3A3028] shadow-2xl rounded-xs overflow-hidden z-10 flex flex-col my-auto"
        >
          {/* Top Tape Strip */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-3.5 tape-strip z-20 pointer-events-none" />

          {/* Sticky Top Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-3.5 sm:p-4 md:p-5 border-b border-[#3A3028]/20 bg-[#F9F3E8] shrink-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 font-mono text-xs">
              <span className="font-bold text-[#C94A3A] bg-[#C94A3A]/10 px-2 py-0.5 border border-[#C94A3A]/25 rounded-xs">
                PROJECT {project.number}
              </span>
              <span className="text-[#3A3028]/30 hidden sm:inline">/</span>
              <span className="text-[#746A60] uppercase font-bold text-[11px]">
                {project.category}
              </span>

              {project.achievement && (
                <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#C94A3A] text-[#F9F3E8] font-mono text-[10px] font-bold rounded-xs uppercase">
                  <Trophy className="w-3 h-3 text-[#C9A65A]" />
                  <span>{project.achievement}</span>
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 bg-[#171615] text-[#F1E8D8] hover:bg-[#C94A3A] hover:text-[#F9F3E8] transition-colors rounded-xs focus:outline-none cursor-pointer shrink-0"
              aria-label="Close project details"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Scrollable Content Body with native wheel scrolling */}
          <div
            data-lenis-prevent="true"
            className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-5 font-body text-[#24201D] paper-scrollbar"
            style={{ overscrollBehavior: 'contain' }}
          >
            {/* Project Header & Preview Screenshot */}
            <div className="space-y-3 border-b border-[#3A3028]/15 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs text-[#C94A3A] font-bold uppercase tracking-wider block">
                  PROJECT DOSSIER // {project.category}
                </span>

                {project.achievement && (
                  <div className="md:hidden inline-flex items-center gap-1 px-2 py-0.5 bg-[#C94A3A] text-[#F9F3E8] font-mono text-[10px] font-bold rounded-xs uppercase">
                    <Trophy className="w-3 h-3 text-[#C9A65A]" />
                    <span>{project.achievement}</span>
                  </div>
                )}
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#24201D] leading-tight">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="mt-1 font-mono text-xs sm:text-sm text-[#746A60] font-semibold">
                    {project.subtitle}
                  </p>
                )}
              </div>

              {/* Short Description */}
              <p className="font-body text-xs sm:text-sm text-[#3A3028] leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Large Project Screenshot */}
              <div className="pt-2">
                <div
                  onClick={() => setImageExpanded(true)}
                  className="relative border-2 border-[#3A3028] overflow-hidden bg-[#171615] shadow-paper rounded-xs aspect-[16/10] sm:aspect-[16/9] group cursor-pointer"
                  title="Click to view full image"
                >
                  {!imgError ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500 opacity-95"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#24201D] flex flex-col items-center justify-center p-6 text-center text-[#F1E8D8] border-vintage-dashed">
                      <span className="font-mono text-xs text-[#C94A3A] font-bold tracking-widest uppercase mb-1">
                        [PROJECT {project.number}]
                      </span>
                      <span className="font-serif text-2xl text-[#F9F3E8]">{project.title}</span>
                      <span className="font-mono text-xs text-[#F1E8D8]/60 mt-1 uppercase">{project.category}</span>
                    </div>
                  )}

                  <div className="absolute bottom-2 right-2 bg-[#171615]/90 text-[#F1E8D8] px-2.5 py-1 font-mono text-[10px] font-bold rounded-xs flex items-center gap-1.5 opacity-85 group-hover:opacity-100 transition-opacity border border-[#F1E8D8]/20">
                    <Maximize2 className="w-3 h-3 text-[#C9A65A]" />
                    <span>CLICK TO ENLARGE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 01. PROJECT OVERVIEW & 02. PROJECT GOAL */}
            <ProjectOverview
              overview={project.overview}
              goal={project.goal}
            />

            {/* 03. MY CONTRIBUTION & 04. TOOLS & TECHNOLOGIES */}
            <ProjectProcess
              contributions={project.contributions}
              tags={project.tags}
            />

            {/* 05. RESULT, 06. WHAT I LEARNED & 07. PROJECT LINKS */}
            <ProjectFeatures
              result={project.result}
              learned={project.learned}
              links={links}
              onClose={onClose}
            />
          </div>
        </motion.div>

        {/* Fullscreen Image Lightbox Overlay */}
        <AnimatePresence>
          {imageExpanded && (
            <div
              data-lenis-prevent="true"
              className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setImageExpanded(false)}
                className="fixed inset-0 cursor-pointer"
              />

              <div className="relative max-w-6xl max-h-[90vh] z-10 flex flex-col items-center">
                <button
                  onClick={() => setImageExpanded(false)}
                  className="absolute -top-10 right-0 p-2 text-white hover:text-[#C94A3A] transition-colors font-mono text-xs flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                  <span>CLOSE PREVIEW</span>
                </button>

                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-[82vh] object-contain rounded-xs border border-white/20 shadow-2xl"
                />

                <div className="mt-3 font-mono text-xs text-white/80 flex items-center justify-between w-full px-2">
                  <span>{project.title} — FULL PREVIEW</span>
                  <button
                    onClick={() => setImageExpanded(false)}
                    className="text-[#C9A65A] underline hover:text-white cursor-pointer"
                  >
                    [RETURN TO DOSSIER]
                  </button>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}