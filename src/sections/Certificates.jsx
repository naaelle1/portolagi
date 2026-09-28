import { useState, useEffect } from 'react';
import { certificatesData } from '../data/certificatesData';
import SectionTitle from '../components/SectionTitle';
import FolderFloat from '../components/FolderFloat';
import CertificateModal from '../components/CertificateModal';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Map 13 certificates for FolderFloat items
  const folderItems = certificatesData.map((cert) => ({
    label: cert.title,
    value: cert.id,
  }));

  const handleSelect = (certId, index) => {
    const found = certificatesData.find((c) => c.id === certId) || certificatesData[index];
    if (found) {
      setSelectedCertificate(found);
    }
  };

  // Responsive dimensions for FolderFloat
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const folderWidth = isMobile ? 250 : isTablet ? 300 : 340;
  const folderHeight = isMobile ? 165 : isTablet ? 195 : 220;
  const folderSpread = isMobile ? 140 : isTablet ? 220 : 290;
  const folderLift = isMobile ? 24 : 32;

  return (
    <section id="certificates" className="py-16 sm:py-24 relative select-none">
      {/* Section Header */}
      <SectionTitle
        index="03"
        tag="ACCREDITATIONS & AWARDS"
        title="Certificates Archive"
        subtitle="National IT competitions, software bootcamp completions, Cisco networking credentials, and course milestones."
      />

      {/* CENTERPIECE: LARGE INTERACTIVE RED FOLDER USING FolderFloat */}
      <div className="relative flex flex-col items-center justify-center pt-8 pb-16 sm:pb-24 overflow-visible">
        
        {/* Ambient Desk Glow Behind Folder */}
        <div className="absolute w-[320px] sm:w-[500px] h-32 bg-[#C94A3A]/10 blur-3xl rounded-full translate-y-16 pointer-events-none -z-10" />

        {/* Interactive Helper Cue */}
        <div className="mb-8 text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F1E8D8]/10 border border-[#F1E8D8]/15 rounded-xs font-mono text-xs text-[#C9A65A] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C94A3A]" />
            <span>{isFolderOpen ? 'CLICK ANY FLOATING CERTIFICATE TO PREVIEW' : 'CLICK RED FOLDER TO UNSEAL 13 CERTIFICATES'}</span>
          </div>
          <p className="font-mono text-[11px] text-[#F1E8D8]/50">
            Physical interactive archive • Drag or click papers to inspect
          </p>
        </div>

        {/* The Real React Bits FolderFloat Component */}
        <div className="flex justify-center items-center my-6">
          <FolderFloat
            items={folderItems}
            label="Certificate Archive"
            sublabel="13 certificates"
            trigger="click"
            defaultOpen={false}
            closeOnSelect={false}
            physics={true}
            drift={0.5}
            lift={folderLift}
            tilt={8}
            flapAngle={34}
            restAngle={16}
            openDuration={520}
            stagger={45}
            bounce={0.3}
            width={folderWidth}
            height={folderHeight}
            spread={folderSpread}
            folderColor="#9F342C"
            frontColor="#B9473B"
            paperColor="#F1E8D8"
            itemColor="#F1E8D8"
            itemTextColor="#24201D"
            labelColor="#F1E8D8"
            onOpenChange={setIsFolderOpen}
            onSelect={handleSelect}
          />
        </div>

      </div>

      {/* QUICK DOCUMENT DIRECTORY (Numbered list for accessible browsing) */}
      <div className="mt-8 border border-[#F1E8D8]/15 bg-[#3A3028]/25 p-6 sm:p-8 rounded-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F1E8D8]/10 pb-4 mb-5">
          <div className="flex items-center gap-2 font-mono text-xs text-[#C9A65A] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#C94A3A]" />
            <span>COMPLETE CERTIFICATE LEDGER</span>
          </div>
          <span className="font-mono text-xs text-[#F1E8D8]/50">
            13 VERIFIED RECORDS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 font-mono text-xs">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              className="p-3 bg-[#F1E8D8]/5 hover:bg-[#F1E8D8]/10 border border-[#F1E8D8]/10 hover:border-[#C9A65A]/50 transition-all flex items-center justify-between group cursor-pointer rounded-xs"
            >
              <div className="flex items-center gap-2.5 truncate">
                <span className="text-[#C94A3A] font-bold text-[11px] shrink-0">
                  [{cert.number}]
                </span>
                <div className="truncate">
                  <span className="font-semibold text-[#F9F3E8] group-hover:text-[#C9A65A] transition-colors truncate block">
                    {cert.title}
                  </span>
                  <span className="text-[10px] text-[#F1E8D8]/50 truncate block">
                    {cert.issuer} • {cert.year}
                  </span>
                </div>
              </div>

              <span className="px-2 py-0.5 bg-[#3A3028] text-[#F1E8D8]/80 text-[10px] rounded-xs shrink-0 ml-2 group-hover:bg-[#C94A3A] group-hover:text-[#F9F3E8] transition-colors">
                {cert.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Inspector */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
