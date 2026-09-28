import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

export default function ProjectSlider({ projects, onSelectProject }) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

    // Calculate approximate active card index
    const cardWidth = el.querySelector('.project-slide-item')?.clientWidth || 360;
    const gap = 24;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    setCurrentIndex(Math.min(Math.max(index, 0), projects.length - 1));
  }, [projects.length]);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scrollByCard = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.querySelector('.project-slide-item');
    const cardWidth = card ? card.clientWidth : 380;
    const scrollAmount = (cardWidth + 24) * direction;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollByCard(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollByCard(1);
    }
  };

  return (
    <div className="relative w-full select-none" onKeyDown={handleKeyDown} tabIndex={0} aria-label="Project slider">
      {/* Slider Controls Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 px-1">
        {/* Progress Indicator */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#F1E8D8]">
          <span className="text-[#C94A3A] font-bold text-sm">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-[#F1E8D8]/30">/</span>
          <span className="text-[#F1E8D8]/70 font-bold">
            {String(projects.length).padStart(2, '0')} PROJECTS
          </span>

          {/* Mini progress bar */}
          <div className="hidden sm:block w-28 h-1.5 bg-[#3A3028] rounded-full overflow-hidden ml-2">
            <div
              className="h-full bg-[#C94A3A] transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Previous & Next Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous project"
            className="p-2.5 bg-[#3A3028]/40 hover:bg-[#C94A3A] text-[#F1E8D8] disabled:opacity-30 disabled:hover:bg-[#3A3028]/40 disabled:cursor-not-allowed border border-[#F1E8D8]/20 transition-all rounded-xs cursor-pointer shadow-retro-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Next project"
            className="p-2.5 bg-[#3A3028]/40 hover:bg-[#C94A3A] text-[#F1E8D8] disabled:opacity-30 disabled:hover:bg-[#3A3028]/40 disabled:cursor-not-allowed border border-[#F1E8D8]/20 transition-all rounded-xs cursor-pointer shadow-retro-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Slider Track with CSS Scroll-Snap */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 pt-2 px-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="project-slide-item shrink-0 snap-start w-[310px] sm:w-[360px] md:w-[390px] lg:w-[410px] flex flex-col"
          >
            <ProjectCard
              project={project}
              index={idx}
              onOpen={onSelectProject}
            />
          </div>
        ))}
      </div>

      {/* Mobile Swipe Hint */}
      <div className="flex items-center justify-between font-mono text-[11px] text-[#F1E8D8]/40 pt-2 px-1">
        <span>← DRAG / SCROLL HORIZONTALLY →</span>
        <span className="text-[#C9A65A]">DESKTOP SLIDER</span>
      </div>
    </div>
  );
}
