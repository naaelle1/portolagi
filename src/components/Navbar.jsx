import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ABOUT', href: '#about', index: '01' },
    { label: 'WORK', href: '#projects', index: '02' },
    { label: 'CERTIFICATES', href: '#certificates', index: '03' },
    { label: 'CONTACT', href: '#contact', index: '04' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#171615]/92 backdrop-blur-md border-b border-[#F1E8D8]/10 py-3 shadow-md'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-wider text-[#F1E8D8] hover:text-[#C9A65A] transition-colors select-none"
        >
          <span className="w-2 h-2 bg-[#C94A3A] rotate-45 group-hover:rotate-90 transition-transform duration-300"></span>
          <span className="font-bold font-serif text-lg tracking-normal text-[#F9F3E8]">ELOK</span>
          <span className="text-[#F1E8D8]/40 text-xs font-light tracking-widest hidden sm:inline">/</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-1.5 text-[#F1E8D8]/75 hover:text-[#F9F3E8] transition-colors py-1"
            >
              <span className="text-[10px] text-[#C94A3A] font-semibold">
                {link.index}
              </span>
              <span className="tracking-wider group-hover:translate-x-0.5 transition-transform">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F1E8D8]/80 hover:text-[#F9F3E8] hover:bg-[#F1E8D8]/10 transition-colors focus:outline-none focus:ring-1 focus:ring-[#C9A65A]/50 cursor-pointer rounded-xs"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#171615]/98 border-b border-[#F1E8D8]/15 px-6 py-6 font-mono text-sm backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[10px] text-[#F1E8D8]/40 uppercase tracking-widest border-b border-[#F1E8D8]/10 pb-2">
                INDEX NAVIGATION
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-[#F1E8D8]/80 hover:text-[#F9F3E8] hover:bg-[#F1E8D8]/5 px-2 py-2.5 transition-colors border-b border-[#F1E8D8]/5"
                >
                  <span className="tracking-wider text-base font-serif text-[#F9F3E8]">{link.label}</span>
                  <span className="text-xs text-[#C94A3A] font-mono font-bold">[{link.index}]</span>
                </a>
              ))}

              <div className="pt-3 flex items-center justify-between text-xs text-[#F1E8D8]/50 font-mono">
                <span>SMKN 7 SEMARANG</span>
                <span className="text-[#C9A65A]">SIJA '28</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}