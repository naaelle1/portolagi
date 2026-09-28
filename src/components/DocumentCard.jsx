import { FileText, ArrowUpRight } from 'lucide-react';

export default function DocumentCard({ doc, onOpen }) {
  return (
    <div
      onClick={() => onOpen && onOpen(doc)}
      className="p-4 bg-[#F1E8D8] text-[#24201D] border border-[#3A3028]/30 shadow-paper rounded-xs cursor-pointer select-none hover:-translate-y-1 transition-transform"
    >
      <div className="flex items-center justify-between font-mono text-xs text-[#746A60] mb-2">
        <span>{doc.ref || 'DOC'}</span>
        <span>{doc.date || ''}</span>
      </div>
      <div className="flex items-center gap-2">
        <FileText className="w-4 h-4 text-[#C94A3A]" />
        <h4 className="font-serif text-base text-[#24201D] truncate">{doc.title}</h4>
      </div>
      <div className="mt-3 pt-2 border-t border-[#3A3028]/15 flex justify-end text-[#746A60]">
        <ArrowUpRight className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}
