export default function PaperCard({ children, className = "", variant = "cream" }) {
  const bg = variant === "cream" ? "bg-[#F1E8D8] text-[#24201D]" : "bg-[#F9F3E8] text-[#24201D]";
  return (
    <div className={`p-6 border border-[#3A3028]/35 shadow-paper rounded-xs ${bg} ${className}`}>
      {children}
    </div>
  );
}