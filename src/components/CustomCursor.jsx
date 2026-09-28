import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches;
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const customCursorText = target.getAttribute('data-cursor') || target.closest('[data-cursor]')?.getAttribute('data-cursor');

      if (customCursorText) {
        setCursorMode(customCursorText);
      } else {
        const isInteractive =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          window.getComputedStyle(target).cursor === 'pointer';

        if (isInteractive) {
          const isExternal = target.tagName === 'A' && target.getAttribute('target') === '_blank';
          setCursorMode(isExternal ? 'open' : 'pointer');
        } else {
          setCursorMode('default');
        }
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  const isSpecial = cursorMode === 'view' || cursorMode === 'open';
  const isPointer = cursorMode === 'pointer';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 select-none">
      {/* Outer Follower Ring / Badge */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center font-mono font-bold tracking-wider rounded-full pointer-events-none border transition-colors duration-150 ${
          isSpecial
            ? 'bg-[#C94A3A] text-[#F9F3E8] border-[#3A3028] shadow-retro-sm text-[9px] px-2 py-0.5 w-auto h-auto min-w-[42px] min-h-[22px] rounded-xs'
            : isPointer
            ? 'w-8 h-8 border-[#C94A3A]/80 bg-[#C94A3A]/10'
            : 'w-6 h-6 border-[#F1E8D8]/40'
        }`}
        animate={{
          x: mousePosition.x - (isSpecial ? 21 : isPointer ? 16 : 12),
          y: mousePosition.y - (isSpecial ? 11 : isPointer ? 16 : 12),
          scale: 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.15,
        }}
      >
        {isSpecial && <span>{cursorMode.toUpperCase()}</span>}
      </motion.div>

      {/* Center Precision Dot (when not special badge) */}
      {!isSpecial && (
        <motion.div
          className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none ${
            isPointer ? 'bg-[#C94A3A]' : 'bg-[#C9A65A]'
          }`}
          animate={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
          }}
          transition={{
            type: 'spring',
            damping: 45,
            stiffness: 600,
            mass: 0.05,
          }}
        />
      )}
    </div>
  );
}