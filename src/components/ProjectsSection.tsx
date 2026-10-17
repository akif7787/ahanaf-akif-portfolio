import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectFolderCard } from './ProjectFolderCard';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenProgress?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const categories = ['all', 'Offensive Sec', 'Red Team', 'Defensive Sec', 'Research Paper', 'Cyber Hygiene'];

  const filteredProjects = PROJECTS.filter((proj) => {
    return (
      filterCategory === 'all' ||
      proj.categoryTags.some((tag) => tag.toLowerCase().includes(filterCategory.toLowerCase())) ||
      proj.technologies.some((tech) => tech.toLowerCase().includes(filterCategory.toLowerCase()))
    );
  });

  return (
    <section
      id="projects"
      className="relative py-14 sm:py-20 w-full px-4 sm:px-6 lg:px-8 text-left overflow-hidden bg-[#F7F8F9]/90 dark:bg-[#0D1017]/90 backdrop-blur-md transition-colors duration-300"
    >
      {/* Subtle ambient blur glow orb */}
      <div className="absolute top-12 right-1/4 w-80 h-80 bg-violet-200/20 dark:bg-violet-950/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6"
        >
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 whitespace-nowrap">
              <span>Selected Projects</span>
              <span className="text-xl sm:text-2xl"> </span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Interactive project dossiers across offensive security, defensive tools, and research.
            </p>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                filterCategory === cat
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-xs font-semibold'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {cat === 'all' ? 'All Works' : cat}
            </button>
          ))}
        </div>

        {/* Responsive Colorful 4-Corner Folder Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectFolderCard
                key={project.id}
                project={project}
                index={index}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
