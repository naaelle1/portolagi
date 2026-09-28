export default function SectionTitle({
  index = '01',
  tag = 'SECTION',
  title = 'Section Title',
  subtitle = null,
  className = '',
}) {
  return (
    <div className={`mb-10 select-none ${className}`}>
      {/* Top Editorial Index */}
      <div className="flex items-center gap-2.5 font-mono text-xs text-[#C9A65A] mb-3 uppercase tracking-widest">
        <span className="text-[#C94A3A] font-bold">[{index}]</span>
        <span className="h-px w-6 bg-[#3A3028]"></span>
        <span className="text-[#F1E8D8]/70 font-medium">{tag}</span>
      </div>

      {/* Main Title */}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F9F3E8] tracking-tight leading-tight">
        {title}
      </h2>

      {/* Supporting Subtitle */}
      {subtitle && (
        <p className="mt-3 font-body text-sm sm:text-base text-[#F1E8D8]/75 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Asymmetric Divider Line */}
      <div className="mt-5 flex items-center gap-3">
        <div className="h-0.5 w-10 bg-[#C94A3A]"></div>
        <div className="h-px w-20 bg-[#C9A65A]/40"></div>
        <div className="h-px flex-1 bg-[#F1E8D8]/10"></div>
      </div>
    </div>
  );
}