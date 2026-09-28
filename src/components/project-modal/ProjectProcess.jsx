import { CheckCircle2, Cpu } from 'lucide-react';

export default function ProjectProcess({ contributions = [], tags = [] }) {
  return (
    <div className="space-y-4">
      {/* 03. MY CONTRIBUTION */}
      {contributions.length > 0 && (
        <div className="p-4 sm:p-5 bg-[#F9F3E8] border border-[#3A3028]/25 rounded-xs">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C94A3A] border-b border-[#3A3028]/15 pb-2 mb-3">
            <span className="font-bold">03.</span>
            <span className="tracking-wider uppercase">MY CONTRIBUTION</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
            {contributions.map((item, idx) => (
              <div
                key={idx}
                className="p-2.5 bg-[#F1E8D8] border border-[#3A3028]/20 rounded-xs flex items-center gap-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C94A3A] shrink-0" />
                <span className="text-[#24201D] text-xs font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 04. TOOLS & TECHNOLOGIES */}
      {tags.length > 0 && (
        <div className="p-4 bg-[#F1E8D8] border border-[#3A3028]/25 rounded-xs">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#3A3028] mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#C9A65A]" />
            <span className="text-[#C94A3A] font-bold">04.</span>
            <span className="tracking-wider uppercase">TOOLS & TECHNOLOGIES</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#171615] text-[#F1E8D8] font-mono text-xs border border-[#3A3028] shadow-retro-sm rounded-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
