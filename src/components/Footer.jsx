import Doodle from './Doodle';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-[#F1E8D8]/15 bg-[#171615] text-[#F1E8D8] py-10 px-4 sm:px-6 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <Doodle type="star" color="#C9A65A" />
          <div>
            <span className="text-[#F9F3E8] font-bold block font-serif text-sm tracking-wide">
              ELOK CHANDRA KIRANA
            </span>
            <span className="text-[#F1E8D8]/50 text-[11px]">
              SMK NEGERI 7 SEMARANG • SIJA CLASS OF 2028
            </span>
          </div>
        </div>

        {/* Center Tagline */}
        <div className="text-center text-[#F1E8D8]/60 text-[11px] max-w-sm font-body">
          <span>
            Personal portfolio archive built with React, Vite & Tailwind CSS.
          </span>
        </div>

        {/* Right Actions / Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="px-3.5 py-2 bg-[#F1E8D8]/5 hover:bg-[#C94A3A] hover:text-[#F9F3E8] transition-colors border border-[#F1E8D8]/20 text-[#F1E8D8]/90 flex items-center gap-2 cursor-pointer rounded-xs"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>TOP OF PAGE</span>
          </button>
        </div>

      </div>
    </footer>
  );
}