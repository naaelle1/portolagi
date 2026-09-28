import { motion } from 'framer-motion';

export default function Button({
  children,
  onClick,
  variant = 'paper', // 'paper' | 'ink' | 'red' | 'outline' | 'blue'
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  type = 'button',
  disabled = false,
  icon: Icon = null,
  href = null,
  cursor = null,
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-mono font-bold transition-all duration-150 uppercase tracking-wider cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none rounded-xs';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-[11px] gap-1.5',
    md: 'px-5 py-2.5 text-xs gap-2',
    lg: 'px-6 py-3 text-xs sm:text-sm gap-2.5',
  };

  const variantStyles = {
    paper:
      'bg-[#F1E8D8] text-[#24201D] border border-[#3A3028] shadow-paper hover:bg-[#F9F3E8] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none',
    ink:
      'bg-[#171615] text-[#F9F3E8] border border-[#F1E8D8]/30 shadow-retro-sm hover:border-[#F1E8D8] hover:bg-[#3A3028] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0',
    red:
      'bg-[#C94A3A] text-[#F9F3E8] border border-[#3A3028] shadow-paper hover:bg-[#8F2F27] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none',
    blue:
      'bg-[#6D7F8F] text-[#F9F3E8] border border-[#3A3028] shadow-paper hover:bg-[#6D7F8F]/90 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0',
    outline:
      'bg-transparent text-[#F1E8D8]/85 border border-[#F1E8D8]/30 hover:border-[#C9A65A] hover:text-[#C9A65A] hover:bg-[#3A3028]/20',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        data-cursor={cursor}
        className={combinedClasses}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-cursor={cursor}
      className={combinedClasses}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}