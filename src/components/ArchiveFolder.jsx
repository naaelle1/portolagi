export default function ArchiveFolder({ label = "Archive", count = 0, onClick }) {
  return (
    <div
      onClick={onClick}
      className="p-6 bg-[#8F2F27] text-[#F9F3E8] border border-[#3A3028] shadow-paper rounded-xs cursor-pointer select-none"
    >
      <div className="font-serif text-xl">{label}</div>
      <div className="font-mono text-xs text-[#C9A65A] mt-1">{count} records</div>
    </div>
  );
}
