import { Trophy, GraduationCap, Globe } from 'lucide-react';
import Button from '../Button';

const FigmaIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

const GithubIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function ProjectFeatures({
  result = '',
  learned = '',
  links = {},
  onClose,
}) {
  const hasLive = Boolean(links.live || links.url);
  const hasFigma = Boolean(links.figma || links.design);
  const hasGithub = Boolean(links.github);

  const liveUrl = links.live || links.url;
  const figmaUrl = links.figma || links.design;
  const githubUrl = links.github;

  return (
    <div className="space-y-4">
      {/* 05. RESULT */}
      {result && (
        <div className="p-4 sm:p-5 bg-[#171615] text-[#F1E8D8] border border-[#F1E8D8]/20 rounded-xs shadow-retro">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#C9A65A] border-b border-[#F1E8D8]/15 pb-2 mb-2.5">
            <Trophy className="w-3.5 h-3.5 text-[#C9A65A]" />
            <span className="text-[#C94A3A]">05.</span>
            <span className="tracking-wider uppercase">RESULT</span>
          </div>

          <p className="font-body text-xs sm:text-[13px] text-[#F9F3E8] leading-relaxed">
            {result}
          </p>
        </div>
      )}

      {/* 06. WHAT I LEARNED */}
      {learned && (
        <div className="p-4 sm:p-5 bg-[#F9F3E8] border border-[#3A3028]/25 rounded-xs">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#6D7F8F] border-b border-[#3A3028]/15 pb-2 mb-2.5">
            <GraduationCap className="w-4 h-4 text-[#6D7F8F]" />
            <span className="text-[#C94A3A]">06.</span>
            <span className="tracking-wider uppercase">WHAT I LEARNED</span>
          </div>

          <p className="font-body text-xs sm:text-[13px] text-[#24201D] leading-relaxed border-l-2 border-[#C94A3A] pl-3 py-0.5">
            {learned}
          </p>
        </div>
      )}

      {/* 07. PROJECT LINKS & ACTIONS */}
      <div className="pt-3 border-t border-[#3A3028]/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          {hasLive && (
            <Button
              variant="red"
              href={liveUrl}
              icon={Globe}
              size="sm"
            >
              OPEN LIVE PROJECT ↗
            </Button>
          )}

          {hasFigma && (
            <Button
              variant="paper"
              href={figmaUrl}
              icon={FigmaIcon}
              size="sm"
            >
              VIEW FIGMA DESIGN ↗
            </Button>
          )}

          {hasGithub && (
            <Button
              variant="ink"
              href={githubUrl}
              icon={GithubIcon}
              size="sm"
            >
              GITHUB REPO ↗
            </Button>
          )}
        </div>

        <button
          onClick={onClose}
          className="font-mono text-xs text-[#746A60] hover:text-[#C94A3A] font-bold cursor-pointer py-1"
        >
          [ CLOSE DOSSIER ]
        </button>
      </div>
    </div>
  );
}
