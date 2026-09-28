import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import SectionTitle from '../components/SectionTitle';
import ProjectSlider from '../components/ProjectSlider';
import ProjectModal from '../components/ProjectModal';
import { Filter } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'ALL PROJECTS (06)' },
    { id: 'web', label: 'WEB DEV & APPS' },
    { id: 'uiux', label: 'UI/UX & DESIGN' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : activeFilter === 'web'
      ? projectsData.filter((p) => p.category.toLowerCase().includes('web') || p.category.toLowerCase().includes('app'))
      : projectsData.filter((p) => p.category.toLowerCase().includes('ui/ux') || p.category.toLowerCase().includes('design'));

  return (
    <section id="projects" className="py-16 sm:py-24 relative select-none">
      {/* Section Header */}
      <SectionTitle
        index="02"
        tag="FEATURED WORK"
        title="Projects & Work"
        subtitle="Selected web applications, interface designs, and projects developed during competitions, school coursework, and technical explorations."
      />

      {/* Filter Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-3 border-b border-[#F1E8D8]/15">
        <div className="flex items-center gap-2 font-mono text-xs text-[#C9A65A] font-bold">
          <Filter className="w-4 h-4 text-[#C94A3A]" />
          <span>PROJECT INDEX:</span>
        </div>

        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1.5 uppercase tracking-wider transition-all cursor-pointer rounded-xs border ${
                activeFilter === f.id
                  ? 'bg-[#C94A3A] text-[#F9F3E8] border-[#3A3028] shadow-retro-sm font-bold'
                  : 'bg-[#3A3028]/25 text-[#F1E8D8]/70 border-[#F1E8D8]/15 hover:text-[#F1E8D8] hover:bg-[#3A3028]/45'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Project Slider Carousel (Desktop slider & touch friendly on mobile) */}
      <ProjectSlider
        projects={filteredProjects}
        onSelectProject={setSelectedProject}
      />

      {/* Expandable Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}