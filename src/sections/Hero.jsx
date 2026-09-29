import { motion } from 'framer-motion';
import { heroData } from '../data/heroData';
import Doodle from '../components/Doodle';
import Button from '../components/Button';
import { MapPin } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center py-8 sm:py-12 select-none overflow-visible"
    >
      {/* Main Magazine Layout Wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-2"
      >
        {/* LEFT: Primary Cover Poster (8 Cols on desktop) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-8 flex flex-col justify-between"
        >
          <div className="relative bg-[#F1E8D8] text-[#24201D] p-6 sm:p-10 md:p-11 border border-[#3A3028]/40 shadow-paper-lg rounded-xs h-full flex flex-col justify-between">
            
            {/* Top Scrapbook Paperclip Accent */}
            <div className="absolute -top-3 left-6 sm:left-10 z-30 pointer-events-none">
              <Doodle type="paperclip" color="#C94A3A" />
            </div>

            {/* Top Tape Clip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 tape-strip z-20 pointer-events-none" />

            <div>
              {/* Header Meta Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[#746A60] border-b border-[#3A3028]/20 pb-3 mb-6 sm:mb-8">
                <span className="font-bold tracking-wider text-[#24201D]">
                  {heroData.fullName}
                </span>

                <div className="flex items-center gap-1.5 text-[#746A60]">
                  <MapPin className="w-3.5 h-3.5 text-[#C94A3A]" />
                  <span>{heroData.location}</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="relative mb-6">
                <span className="font-mono text-xs text-[#C94A3A] font-bold uppercase tracking-widest block mb-1">
                  CLASS OF {heroData.graduation}
                </span>

                <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#24201D] tracking-tight leading-[0.95] font-normal">
                  {heroData.displayName}
                </h1>

                <div className="flex items-center gap-3 mt-3">
                  <h2 className="font-mono text-base sm:text-xl text-[#3A3028] font-bold tracking-wide uppercase">
                    {heroData.role}
                  </h2>
                </div>

                <Doodle type="underline" color="#C94A3A" className="max-w-xs mt-1" />

                {/* Personal Quote */}
                <p className="mt-5 font-body text-base sm:text-lg text-[#3A3028] font-normal max-w-xl leading-relaxed italic border-l-2 border-[#C94A3A] pl-4">
                  "{heroData.tagline}"
                </p>
              </div>

              {/* School and Major */}
              <div className="mb-7 p-3.5 bg-[#F9F3E8] border border-[#3A3028]/20 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#24201D]">
                <div>
                  <span className="text-[10px] text-[#746A60] block">SCHOOL:</span>
                  <span className="font-bold text-[#24201D]">{heroData.school}</span>
                </div>
                <div className="h-px sm:h-6 w-full sm:w-px bg-[#3A3028]/15" />
                <div>
                  <span className="text-[10px] text-[#746A60] block">MAJOR:</span>
                  <span className="font-bold text-[#C94A3A]">{heroData.major}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#3A3028]/15 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="red" href="#projects" size="md">
                  VIEW WORK
                </Button>
                <Button variant="ink" href="#contact" size="md">
                  GET IN TOUCH
                </Button>
              </div>

              <div className="hidden sm:block pointer-events-none">
                <Doodle type="stamp" text="SIJA '28" />
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT: Interest List (4 Cols on desktop) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-4 flex flex-col justify-between"
        >
          <div className="relative bg-[#F9F3E8] text-[#24201D] p-5 sm:p-6 border border-[#3A3028]/35 shadow-paper rounded-xs h-full flex flex-col justify-between">
            {/* Top Tape */}
            <div className="absolute -top-2.5 right-6 w-16 h-4 tape-strip pointer-events-none" />

            <div>
              <div className="flex items-center justify-between border-b border-[#3A3028]/15 pb-2.5 mb-4">
                <span className="font-mono text-xs text-[#C94A3A] font-bold uppercase tracking-wider">
                  INTERESTS & FOCUS
                </span>
                <span className="font-mono text-[10px] text-[#746A60]">5 AREAS</span>
              </div>

              {/* Clean Interest List */}
              <div className="space-y-2 font-mono text-xs">
                {heroData.interests.map((item) => (
                  <div
                    key={item.code}
                    className="p-2.5 bg-[#F1E8D8] border border-[#3A3028]/15 hover:border-[#C94A3A]/60 transition-colors flex items-center justify-between group rounded-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#C94A3A] font-bold text-xs">[{item.code}]</span>
                      <div>
                        <span className="font-bold text-[#24201D] block">{item.label}</span>
                        <span className="text-[10px] text-[#746A60]">{item.note}</span>
                      </div>
                    </div>
                    <span className="text-[#746A60]/40 group-hover:text-[#C94A3A] group-hover:translate-x-0.5 transition-all text-xs font-bold">
                      &rarr;
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-4 pt-3 border-t border-[#3A3028]/10 text-[11px] font-mono text-[#746A60] flex items-center justify-between">
              <span>SMK NEGERI 7 SEMARANG</span>
              <span className="text-[#C9A65A] font-bold">SIJA '28</span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}