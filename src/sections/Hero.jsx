import { motion } from 'framer-motion';
import { heroData } from '../data/heroData';
import Doodle from '../components/Doodle';
import Button from '../components/Button';
import { ArrowDown, FileText, MapPin, Terminal } from 'lucide-react';

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
      className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-center py-6 sm:py-10 select-none overflow-visible"
    >
      {/* Background Subtle Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3a302810_1px,transparent_1px),linear-gradient(to_bottom,#3a302810_1px,transparent_1px)] bg-size-[28px_28px] pointer-events-none -z-10" />

      {/* Main Magazine Layout Wrapper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-2"
      >
        {/* LEFT / PRIMARY POSTER CARD (8 Cols on desktop) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-8 relative"
        >
          {/* Main Paper Poster Card */}
          <div className="relative bg-[#F1E8D8] text-[#24201D] p-6 sm:p-10 md:p-11 border border-[#3A3028]/40 shadow-paper-lg rounded-xs">
            
            {/* Top Scrapbook Paperclip Accent */}
            <div className="absolute -top-3 left-6 sm:left-10 z-30 pointer-events-none">
              <Doodle type="paperclip" color="#C94A3A" />
            </div>

            {/* Top Tape Clip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 tape-strip z-20 pointer-events-none" />

            {/* Top Meta Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[#746A60] border-b border-[#3A3028]/20 pb-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#C94A3A]" />
                <span className="font-bold tracking-wider text-[#24201D]">{heroData.fullName}</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#746A60]">
                <MapPin className="w-3 h-3 text-[#C94A3A]" />
                <span>{heroData.location}</span>
              </div>

              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#3A3028]/10 text-[#24201D] font-semibold text-[10px] rounded-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C94A3A] animate-pulse"></span>
                <span>{heroData.status}</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <div className="relative mb-6">
              <span className="font-mono text-xs text-[#C94A3A] font-bold uppercase tracking-widest block mb-1">
                STUDENT PORTFOLIO / CLASS OF {heroData.graduation}
              </span>

              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#24201D] tracking-tight leading-[0.95] font-normal">
                {heroData.displayName}
              </h1>

              <div className="flex items-center gap-3 mt-3">
                <h2 className="font-mono text-lg sm:text-2xl text-[#3A3028] font-bold tracking-wide uppercase">
                  {heroData.role}
                </h2>
                <span className="text-[#C9A65A] font-mono text-sm hidden sm:inline">• SIJA</span>
              </div>

              <Doodle type="underline" color="#C94A3A" className="max-w-xs mt-1" />

              {/* Personal Manifesto */}
              <p className="mt-5 font-body text-base sm:text-lg text-[#3A3028]/95 font-medium max-w-xl leading-relaxed italic border-l-2 border-[#C94A3A] pl-4">
                "{heroData.tagline}"
              </p>
            </div>

            {/* Educational Context Strip */}
            <div className="mb-7 p-3.5 bg-[#F9F3E8] border border-[#3A3028]/20 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#24201D]">
              <div>
                <span className="text-[10px] text-[#746A60] block">SCHOOL:</span>
                <span className="font-bold text-[#24201D]">{heroData.school}</span>
              </div>
              <div className="h-px sm:h-6 w-full sm:w-px bg-[#3A3028]/15" />
              <div>
                <span className="text-[10px] text-[#746A60] block">MAJOR & GRADUATION:</span>
                <span className="font-bold text-[#C94A3A]">{heroData.major} • {heroData.graduation}</span>
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

              <a
                href="#about"
                className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-[#746A60] hover:text-[#C94A3A] transition-colors group"
              >
                <span>ABOUT PROFILE</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Vintage Stamp Accent (Bottom Right) */}
            <div className="absolute -bottom-3 -right-2 pointer-events-none hidden sm:block">
              <Doodle type="stamp" text="SIJA '28" />
            </div>

          </div>
        </motion.div>

        {/* RIGHT: Focus Interests & Notes (4 Cols on desktop) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-4 flex flex-col gap-4 lg:mt-3"
        >
          {/* Overlapping Focus Card */}
          <div className="relative bg-[#F9F3E8] text-[#24201D] p-5 sm:p-6 border border-[#3A3028]/35 shadow-paper rounded-xs lg:rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Top Tape */}
            <div className="absolute -top-2.5 right-6 w-16 h-4 tape-strip pointer-events-none" />

            <div className="flex items-center justify-between border-b border-[#3A3028]/15 pb-2.5 mb-3">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#C94A3A] font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>INTERESTS & FOCUS</span>
              </div>
              <span className="font-mono text-[10px] text-[#746A60]">5 AREAS</span>
            </div>

            {/* 5 Focus Items */}
            <div className="space-y-2.5 font-mono text-xs">
              {heroData.interests.map((item) => (
                <div
                  key={item.code}
                  className="p-2.5 bg-[#F1E8D8] border border-[#3A3028]/15 hover:border-[#C94A3A]/60 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#C94A3A] font-bold text-[11px]">[{item.code}]</span>
                    <div>
                      <span className="font-bold text-[#24201D] block">{item.label}</span>
                      <span className="text-[10px] text-[#746A60]">{item.note}</span>
                    </div>
                  </div>
                  <span className="text-[#746A60]/40 group-hover:text-[#C94A3A] group-hover:translate-x-0.5 transition-all text-xs">
                    &rarr;
                  </span>
                </div>
              ))}
            </div>

            {/* Note at Bottom of Card */}
            <div className="mt-3.5 pt-2.5 border-t border-[#3A3028]/10 flex items-center justify-between text-[10px] font-mono text-[#746A60]">
              <span>LEARNING ENVIRONMENT</span>
              <span className="text-[#C9A65A] font-bold">SMKN 7</span>
            </div>
          </div>

          {/* Secondary Quick Personal Note */}
          <div className="bg-[#171615] border border-[#F1E8D8]/20 p-4 shadow-retro rounded-xs font-mono text-xs text-[#F9F3E8]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#C9A65A] font-bold text-[10px]">[ STUDENT NOTE ]</span>
              <span className="text-[#F1E8D8]/40 text-[10px]">SEMARANG, ID</span>
            </div>
            <p className="font-body text-xs text-[#F1E8D8]/80 leading-relaxed">
              Exploring technology hands-on: networks, security, code, and user interfaces.
            </p>
          </div>

        </motion.div>

      </motion.div>
    </section>
  );
}