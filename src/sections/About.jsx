import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';
import SectionTitle from '../components/SectionTitle';
import Doodle from '../components/Doodle';
import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative select-none">
      {/* Section Header */}
      <SectionTitle
        index="01"
        tag="ABOUT ME"
        title="About & Background"
        subtitle="A short introduction to who I am, what I study, and what I enjoy building."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#F1E8D8] text-[#24201D] p-6 sm:p-8 md:p-10 border border-[#3A3028]/40 shadow-paper rounded-xs"
      >
        {/* Top Paper Tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-5 tape-strip pointer-events-none z-10" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* LEFT: Portrait (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative border-2 border-[#3A3028] bg-[#171615] overflow-hidden aspect-[4/5] w-full max-w-[280px] shadow-retro-sm rounded-xs group">
              <img
                src="/assets/hero.png"
                alt={`${aboutData.fullName} portrait`}
                onError={(e) => {
                  e.target.src = "/assets/WhatsApp Image 2026-07-28 at 8.06.52 PM.jpeg";
                  e.target.onerror = () => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  };
                }}
                className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Fallback Graphic Avatar Frame */}
              <div className="hidden absolute inset-0 bg-[#24201D] flex-col items-center justify-center p-6 text-center text-[#F1E8D8]">
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#C94A3A] flex items-center justify-center mb-2 text-[#C9A65A] font-serif text-xl font-bold">
                  E
                </div>
                <span className="font-serif text-lg text-[#F9F3E8]">{aboutData.fullName}</span>
                <span className="font-mono text-xs text-[#C9A65A] mt-1">{aboutData.role}</span>
              </div>

              {/* Overlaid Stamp */}
              <div className="absolute bottom-2 right-2 pointer-events-none">
                <Doodle type="stamp" text="SIJA '28" />
              </div>
            </div>
          </div>

          {/* RIGHT: Human Narrative & Main Interests (7 Cols) */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#C94A3A] font-bold uppercase mb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{aboutData.school} • CLASS OF {aboutData.graduation}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#24201D]">
                {aboutData.fullName}
              </h3>
              <p className="font-mono text-xs text-[#746A60] font-semibold mt-0.5">
                {aboutData.major}
              </p>
            </div>

            {/* Natural Human Copy */}
            <div className="space-y-3 font-body text-sm sm:text-base text-[#3A3028] leading-relaxed">
              {aboutData.intro.map((p, idx) => (
                <p key={idx}>
                  {p}
                </p>
              ))}
            </div>

            {/* Small list of Main Interests */}
            <div className="pt-4 border-t border-[#3A3028]/15">
              <span className="font-mono text-[11px] text-[#746A60] font-bold uppercase tracking-wider block mb-2.5">
                MAIN INTERESTS:
              </span>
              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#F9F3E8] text-[#24201D] border border-[#3A3028]/25 font-mono text-xs rounded-xs font-medium shadow-2xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}