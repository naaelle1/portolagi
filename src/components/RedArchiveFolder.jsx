import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Folder, ArrowRight, Sparkles } from 'lucide-react';

export default function RedArchiveFolder({ isOpen, onToggle, totalCount = 13 }) {
  const folderRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse 3D tilt tracking (when closed)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), springConfig);

  const handleMouseMove = (e) => {
    if (isOpen || !folderRef.current) return;
    const rect = folderRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-4 select-none">
      {/* Background ambient desk shadow */}
      <div className="absolute w-[300px] sm:w-[440px] md:w-[500px] h-16 bg-black/60 blur-2xl rounded-full translate-y-32 pointer-events-none" />

      {/* THE MAIN RED FOLDER OBJECT */}
      <motion.div
        ref={folderRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`${isOpen ? 'Close' : 'Open'} Certificate Red Archive Folder`}
        style={{
          perspective: 1000,
          rotateX: isOpen ? 0 : rotateX,
          rotateY: isOpen ? 0 : rotateY,
        }}
        animate={{
          y: isOpen ? 0 : isHovered ? -8 : [0, -4, 0],
          scale: isOpen ? 1 : isHovered ? 1.02 : 1,
        }}
        transition={{
          y: {
            duration: isHovered ? 0.25 : 4,
            repeat: isOpen || isHovered ? 0 : Infinity,
            ease: 'easeInOut',
          },
          scale: { duration: 0.25 },
        }}
        className={`relative w-[320px] sm:w-[440px] md:w-[490px] lg:w-[510px] cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#C9A65A]/80 rounded-t-lg rounded-b-sm transition-shadow ${
          isOpen ? 'shadow-2xl' : 'shadow-[0_20px_45px_-10px_rgba(0,0,0,0.85)]'
        }`}
      >
        {/* FOLDER BACK FLAP & ASYMMETRIC TOP TAB */}
        <div className="relative z-0">
          <div className="flex items-end">
            <div className="w-36 sm:w-48 h-8 sm:h-9 bg-[#A3342B] border-t-2 border-x-2 border-[#D45E54] rounded-t-lg px-4 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F9F3E8] animate-pulse" />
              <span className="font-mono text-[9px] sm:text-[10px] text-[#F9F3E8] font-bold tracking-wider uppercase truncate">
                CERTIFICATES / ELOK
              </span>
            </div>
            <div className="flex-1 h-3 bg-[#8A2B23] border-t border-r border-[#C94A3A] rounded-tr-md opacity-90" />
          </div>
        </div>

        {/* FOLDER BODY CONTAINER */}
        <div className="relative z-10 bg-gradient-to-b from-[#C94A3A] via-[#A6352C] to-[#8E2B23] border-2 border-[#D45E54] rounded-b-sm p-6 sm:p-8 md:p-9 shadow-inner text-[#F9F3E8] overflow-hidden">
          <div className="absolute top-0 left-4 right-4 h-2 bg-[#F1E8D8] opacity-80 rounded-b-xs shadow-inner pointer-events-none" />
          <div className="absolute -top-3 right-8 w-20 h-5 tape-strip opacity-80 rotate-[3deg] pointer-events-none" />

          {/* FOLDER COVER CONTENT */}
          <div className="relative z-20 flex flex-col items-center text-center space-y-4">
            <div className="w-full pb-3 border-b border-[#F9F3E8]/20 flex items-center justify-between font-mono text-[10px] text-[#F9F3E8]/80">
              <span className="tracking-widest uppercase font-bold">CERTIFICATES ARCHIVE</span>
              <span className="bg-black/25 px-2 py-0.5 rounded-xs font-bold text-[#C9A65A]">
                2025 — 2026
              </span>
            </div>

            <div className="py-2 space-y-1">
              <div className="font-mono text-[11px] text-[#F9F3E8]/90 tracking-widest uppercase font-bold">
                OFFICIAL CREDENTIALS
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9F3E8] font-bold tracking-tight">
                ELOK CHANDRA
              </h2>
              <div className="font-mono text-xs text-[#C9A65A] font-bold tracking-wider pt-1">
                SMK NEGERI 7 SEMARANG
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/30 border border-[#F9F3E8]/20 rounded-xs font-mono text-xs text-[#F9F3E8] font-bold tracking-wider">
              <Folder className="w-3.5 h-3.5 text-[#C9A65A]" />
              <span>{totalCount} DOCUMENTS ENCLOSED</span>
            </div>

            <div className="w-full pt-3 border-t border-[#F9F3E8]/20 flex items-center justify-between">
              <div className="font-mono text-[10px] text-[#F9F3E8]/70 tracking-wider">
                {isOpen ? 'FOLDER IS OPEN' : 'CLICK TO OPEN'}
              </div>

              <div className="px-3.5 py-1.5 bg-[#F1E8D8] text-[#24201D] font-mono text-[11px] font-bold uppercase tracking-wider rounded-xs border border-[#3A3028] shadow-retro-sm flex items-center gap-1.5">
                <span>{isOpen ? 'CLOSE FOLDER' : 'OPEN ARCHIVE'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C94A3A]" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Helper text under folder */}
      {!isOpen && (
        <div className="mt-6 text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[#C9A65A] font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#C94A3A]" />
            <span>CLICK TO UNSEAL FOLDER</span>
          </div>
        </div>
      )}
    </div>
  );
}
