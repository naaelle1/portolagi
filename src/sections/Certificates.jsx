import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificatesData } from '../data/certificatesData';
import SectionTitle from '../components/SectionTitle';
import FolderFloat from '../components/FolderFloat';
import CertificateModal from '../components/CertificateModal';
import { Sparkles, FileText, ArrowUpRight } from 'lucide-react';

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

  // Map certificates for FolderFloat
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
  const folderWidth = isMobile ? 260 : isTablet ? 300 : 340;
  const folderHeight = isMobile ? 170 : isTablet ? 195 : 220;
  const folderSpread = isMobile ? 150 : isTablet ? 220 : 290;
  const folderLift = isMobile ? 24 : 32;

  return (
    <section id="certificates" className="py-16 sm:py-24 relative select-none">
      {/* Section Header */}
      <SectionTitle
        index="03"
        tag="ACHIEVEMENTS"
        title="Certificates"
        subtitle="Competitions, courses, and technical certificates earned during my studies."
      />

      {/* Main Interactive Red Folder */}
      <div className="relative flex flex-col items-center justify-center pt-6 pb-12 sm:pb-16 overflow-visible">
        
        {/* Glow behind folder */}
        <div className="absolute w-[320px] sm:w-[480px] h-32 bg-[#C94A3A]/10 blur-3xl rounded-full translate-y-16 pointer-events-none -z-10" />

        {/* Short, simple helper cue */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F1E8D8]/10 border border-[#F1E8D8]/15 rounded-xs font-mono text-xs text-[#C9A65A] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#C94A3A]" />
            <span>{isFolderOpen ? 'Folder is open — Click a certificate to view details' : 'Click the red folder to open the archive'}</span>
          </div>
        </div>

        {/* Central Red Folder Component */}
        <div className="flex justify-center items-center my-4">
          <FolderFloat
            items={folderItems}
            label="Certificate Archive"
            sublabel={`${certificatesData.length} certificates`}
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

      {/* Certificate Archive Cards (Visible when folder is open or directly browsable) */}
      <AnimatePresence>
        {isFolderOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.4 }}
            className="mt-6 border border-[#F1E8D8]/15 bg-[#3A3028]/25 p-5 sm:p-7 rounded-xs"
          >
            <div className="flex items-center justify-between border-b border-[#F1E8D8]/10 pb-3 mb-5">
              <span className="font-mono text-xs text-[#C9A65A] font-bold uppercase tracking-wider">
                CERTIFICATE ARCHIVE
              </span>
              <span className="font-mono text-xs text-[#F1E8D8]/50">
                {certificatesData.length} CERTIFICATES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {certificatesData.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCertificate(cert)}
                  className="p-3.5 bg-[#F1E8D8]/5 hover:bg-[#F1E8D8]/10 border border-[#F1E8D8]/10 hover:border-[#C94A3A]/60 transition-all flex items-center justify-between group cursor-pointer rounded-xs"
                >
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 bg-[#171615] rounded-xs border border-[#F1E8D8]/15 text-[#C94A3A] group-hover:text-[#F9F3E8] group-hover:bg-[#C94A3A] transition-colors shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="font-body font-semibold text-sm text-[#F9F3E8] group-hover:text-[#C9A65A] transition-colors truncate block">
                        {cert.title}
                      </span>
                      <span className="font-mono text-xs text-[#F1E8D8]/60 truncate block mt-0.5">
                        {cert.issuer} • {cert.year}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="px-2 py-0.5 bg-[#3A3028] text-[#F1E8D8]/80 font-mono text-[10px] rounded-xs">
                      {cert.tag || cert.category}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F1E8D8]/40 group-hover:text-[#C9A65A] transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Certificate Modal Lightbox */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
