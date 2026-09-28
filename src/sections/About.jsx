import { motion } from 'framer-motion';
import { aboutData } from '../data/aboutData';
import SectionTitle from '../components/SectionTitle';
import Doodle from '../components/Doodle';
import { BookOpen, Terminal, GraduationCap, Code, Shield, Network, Layout, Cpu, CheckCircle } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const getTopicIcon = (topic) => {
    switch (topic.toLowerCase()) {
      case 'cybersecurity':
        return <Shield className="w-4 h-4 text-[#C94A3A]" />;
      case 'networking':
        return <Network className="w-4 h-4 text-[#6D7F8F]" />;
      case 'web development':
        return <Code className="w-4 h-4 text-[#C9A65A]" />;
      case 'ui/ux':
        return <Layout className="w-4 h-4 text-[#8F2F27]" />;
      case 'iot':
        return <Cpu className="w-4 h-4 text-[#3A3028]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#C94A3A]" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 relative select-none">
      {/* Section Header */}
      <SectionTitle
        index="01"
        tag="STUDENT PROFILE"
        title="About & Background"
        subtitle="A student developer from Semarang learning computer network systems, security, and web applications."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="space-y-10"
      >
        {/* TOP SPREAD: Left Portrait Card + Right Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Portrait Card (5 Cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="relative bg-[#F1E8D8] text-[#24201D] p-6 border border-[#3A3028]/40 shadow-paper rounded-xs">
              
              {/* Tape Accents */}
              <div className="absolute -top-3 left-8 w-20 h-5 tape-strip pointer-events-none z-10" />

              {/* Portrait Image Frame */}
              <div className="relative border-2 border-[#3A3028] bg-[#171615] overflow-hidden aspect-[4/5] shadow-retro-sm mb-4 group">
                <img
                  src="/assets/hero.png"
                  alt="Elok Chandra Kirana (Nael) portrait"
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
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#C94A3A] flex items-center justify-center mb-3 text-[#C9A65A] font-serif text-2xl font-bold">
                    E
                  </div>
                  <span className="font-serif text-xl text-[#F9F3E8]">ELOK CHANDRA KIRANA</span>
                  <span className="font-mono text-xs text-[#C9A65A] mt-1">STUDENT / DEVELOPER</span>
                  <span className="font-mono text-[10px] text-[#F1E8D8]/50 mt-2">SMK NEGERI 7 SEMARANG</span>
                </div>

                {/* Overlaid Stamp on Photo */}
                <div className="absolute bottom-3 right-3 pointer-events-none">
                  <Doodle type="stamp" text="STEMBA '28" />
                </div>
              </div>

              {/* Editorial Caption Under Portrait */}
              <div className="pt-2 border-t border-[#3A3028]/20 flex flex-col gap-1.5 font-mono text-xs text-[#3A3028]">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#24201D] flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#C94A3A]" />
                    {aboutData.narrative.institution}
                  </span>
                  <span className="text-[10px] text-[#746A60]">SEMARANG</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#746A60]">
                  <span>{aboutData.narrative.program}</span>
                  <span className="text-[#C94A3A] font-bold">GRAD 2028</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT: Human Narrative Paragraphs (7 Cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-[#F9F3E8] text-[#24201D] p-6 sm:p-8 md:p-9 border border-[#3A3028]/30 shadow-paper rounded-xs relative">
              
              {/* Top Paper Tape */}
              <div className="absolute -top-3 right-10 w-24 h-5 tape-strip pointer-events-none z-10" />

              {/* Narrative Header */}
              <div className="flex items-center justify-between border-b border-[#3A3028]/15 pb-3 mb-5">
                <div>
                  <span className="font-mono text-xs text-[#C94A3A] font-bold tracking-widest uppercase block">
                    [ STUDENT PROFILE ]
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#24201D] mt-0.5">
                    {aboutData.narrative.fullName}
                  </h3>
                </div>
                <div className="hidden sm:block">
                  <Doodle type="seal" />
                </div>
              </div>

              {/* Genuine Human Paragraphs */}
              <div className="space-y-4 font-body text-sm sm:text-base text-[#3A3028] leading-relaxed">
                {aboutData.narrative.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:font-serif first-letter:text-2xl first-letter:font-bold first-letter:text-[#C94A3A]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Experience Scope Grid */}
              <div className="mt-6 pt-5 border-t border-[#3A3028]/15">
                <span className="font-mono text-[11px] text-[#746A60] font-bold uppercase tracking-wider block mb-3">
                  HANDS-ON AREAS & ACTIVITIES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                  {aboutData.experiences.map((exp, idx) => (
                    <div key={idx} className="p-2 bg-[#F1E8D8] border border-[#3A3028]/15 rounded-xs flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C94A3A] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#24201D] block">{exp.title}</span>
                        <span className="text-[10px] text-[#746A60]">{exp.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout Quote Strip */}
              <div className="mt-6 pt-4 border-t border-[#3A3028]/15 flex items-start gap-3 bg-[#F1E8D8] p-3.5 border border-[#3A3028]/15 rounded-xs">
                <span className="text-[#C94A3A] font-serif text-2xl leading-none select-none">“</span>
                <p className="font-mono text-xs sm:text-sm text-[#3A3028] italic">
                  {aboutData.personalNote.quote}
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* MIDDLE SPREAD: Currently Exploring (Editorial Numbered Rows) */}
        <motion.div variants={itemVariants} className="pt-2">
          <div className="border border-[#F1E8D8]/15 bg-[#3A3028]/25 p-6 sm:p-8 rounded-xs backdrop-blur-xs">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F1E8D8]/10 pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C9A65A] font-bold uppercase tracking-wider">
                <Terminal className="w-4 h-4 text-[#C94A3A]" />
                <span>CURRENTLY EXPLORING</span>
              </div>
              <span className="font-mono text-xs text-[#F1E8D8]/50">
                05 CORE INTEREST AREAS
              </span>
            </div>

            {/* Editorial Numbered Rows */}
            <div className="divide-y divide-[#F1E8D8]/10">
              {aboutData.currentlyExploring.map((item) => (
                <div
                  key={item.num}
                  className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center hover:bg-[#F1E8D8]/5 px-3 transition-colors rounded-xs group"
                >
                  {/* Number & Topic (5 Cols) */}
                  <div className="md:col-span-5 flex items-center gap-3">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#C94A3A]">
                      {item.num} —
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="p-1.5 bg-[#171615] rounded-xs border border-[#F1E8D8]/10">
                        {getTopicIcon(item.topic)}
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl text-[#F9F3E8] group-hover:text-[#C9A65A] transition-colors">
                        {item.topic}
                      </h4>
                    </div>
                  </div>

                  {/* Summary (7 Cols) */}
                  <div className="md:col-span-7 font-mono text-xs text-[#F1E8D8]/70 leading-relaxed">
                    <p>{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* BOTTOM SPREAD: Currently Learning Toolkit */}
        <motion.div variants={itemVariants}>
          <div className="bg-[#171615] border border-[#F1E8D8]/20 p-6 sm:p-7 rounded-xs shadow-retro">
            <div className="flex items-center justify-between border-b border-[#F1E8D8]/15 pb-3 mb-5">
              <div className="flex items-center gap-2 font-mono text-xs text-[#C9A65A] font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-[#C94A3A]" />
                <span>CURRENT ROADMAP & LEARNING FOCUS</span>
              </div>
              <span className="font-mono text-[10px] text-[#F1E8D8]/40">SMKN 7 SEMARANG</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 font-mono text-xs">
              {aboutData.currentlyLearning.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#F1E8D8]/5 border border-[#F1E8D8]/10 hover:border-[#C9A65A]/50 transition-colors flex flex-col justify-between rounded-xs"
                >
                  <span className="text-[#F9F3E8] font-bold flex items-center gap-1.5 mb-1">
                    <span className="text-[#C94A3A] text-xs">•</span>
                    {item.name}
                  </span>
                  <span className="text-[#F1E8D8]/50 text-[10px] uppercase">
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}