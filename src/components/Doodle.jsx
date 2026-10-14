export default function Doodle({ type, className = "", color = "currentColor", text = "" }) {
  switch (type) {
    case 'underline':
      return (
        <svg
          className={`w-full h-3 ${className}`}
          viewBox="0 0 200 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 8.5C35 3.5 120 2 197.5 7.5M10 10.5C60 7 140 6 185 9.5"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'arrow':
      return (
        <svg
          className={`w-12 h-8 ${className}`}
          viewBox="0 0 60 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 28C18 32 35 30 52 14M52 14L38 12M52 14L48 26"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'star':
      return (
        <svg
          className={`w-5 h-5 ${className}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill={color}
            stroke="#171615"
            strokeWidth="1.5"
          />
        </svg>
      );

    case 'paperclip':
      return (
        <svg
          className={`w-6 h-10 ${className}`}
          viewBox="0 0 32 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 40V12C12 8.68629 14.6863 6 18 6C21.3137 6 24 8.68629 24 12V34C24 38.4183 20.4183 42 16 42C11.5817 42 8 38.4183 8 34V14"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'stamp':
      return (
        <div
          className={`inline-flex flex-col items-center justify-center px-3 py-1.5 border-2 border-dashed border-[#C94A3A] rotate-6 bg-[#C94A3A]/10 rounded-xs select-none ${className}`}
        >
          <span className="font-serif text-xs text-[#C94A3A] font-extrabold uppercase tracking-tight">
            {text || "VERIFIED"}
          </span>
          <span className="font-mono text-[8px] text-[#C94A3A]/80">SMKN 7 SEMARANG</span>
        </div>
      );

    case 'seal':
      return (
        <div
          className={`w-14 h-14 rounded-full border-2 border-dashed border-[#6D7F8F]/70 flex flex-col items-center justify-center rotate-[-8deg] bg-[#6D7F8F]/10 select-none ${className}`}
        >
          <span className="font-mono text-[7px] text-[#6D7F8F] font-bold tracking-widest uppercase">
            STEMBA
          </span>
          <span className="font-serif text-[10px] text-[#6D7F8F] font-extrabold">SIJA</span>
          <span className="font-mono text-[7px] text-[#6D7F8F]/70">2028</span>
        </div>
      );

    case 'circle-highlight':
      return (
        <svg
          className={`w-full h-full ${className}`}
          viewBox="0 0 120 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 25C5 12 30 4 60 4C90 4 115 12 115 25C115 38 90 46 60 46C25 46 3 35 7 20"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return null;
  }
}