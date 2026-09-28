import { Compass, Sparkles, HelpCircle, Target } from 'lucide-react';

export default function ProjectOverview({ overview, goal }) {
  if (!overview && !goal) return null;

  return (
    <div className="space-y-4">
      {/* 01. PROJECT OVERVIEW */}
      {overview && (
        <div className="p-4 sm:p-5 bg-[#F9F3E8] border border-[#3A3028]/25 rounded-xs space-y-3.5">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C94A3A] border-b border-[#3A3028]/15 pb-2">
            <span className="font-bold">01.</span>
            <span className="tracking-wider uppercase">PROJECT OVERVIEW</span>
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            {overview.what && (
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-bold text-[#746A60] uppercase flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#6D7F8F]" />
                  WHAT IS IT?
                </span>
                <p className="font-body text-xs sm:text-[13px] text-[#24201D] leading-relaxed pl-5">
                  {overview.what}
                </p>
              </div>
            )}

            {overview.why && (
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-bold text-[#746A60] uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A65A]" />
                  WHY WAS IT MADE?
                </span>
                <p className="font-body text-xs sm:text-[13px] text-[#24201D] leading-relaxed pl-5">
                  {overview.why}
                </p>
              </div>
            )}

            {overview.problem && (
              <div className="space-y-1">
                <span className="font-mono text-[11px] font-bold text-[#746A60] uppercase flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#C94A3A]" />
                  WHAT PROBLEM DOES IT SOLVE?
                </span>
                <p className="font-body text-xs sm:text-[13px] text-[#24201D] leading-relaxed pl-5">
                  {overview.problem}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 02. PROJECT GOAL */}
      {goal && (
        <div className="p-4 bg-[#F1E8D8] border border-[#3A3028]/25 rounded-xs">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#6D7F8F] mb-1.5">
            <Target className="w-3.5 h-3.5 text-[#C94A3A]" />
            <span className="text-[#C94A3A]">02.</span>
            <span className="tracking-wider uppercase">PROJECT GOAL</span>
          </div>
          <p className="font-body text-xs sm:text-[13px] text-[#24201D] leading-relaxed border-l-2 border-[#C94A3A] pl-3 py-0.5">
            {goal}
          </p>
        </div>
      )}
    </div>
  );
}
