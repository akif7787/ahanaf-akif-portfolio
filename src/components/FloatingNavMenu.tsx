import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { Compass, ArrowUp, X, Briefcase, Laptop, Award, Calendar, ChevronRight, BookOpen, Trophy, Zap, GraduationCap, User } from 'lucide-react';

interface SectionItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const FloatingNavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [, setShowScrollTop] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const sections: SectionItem[] = [
    {
      id: 'about',
      label: 'About Me',
      icon: <User className="w-3.5 h-3.5 text-emerald-500" />,
    },
    {
      id: 'journey',
      label: 'Experience',
      icon: <Briefcase className="w-3.5 h-3.5 text-blue-500" />,
    },
    {
      id: 'skills',
      label: 'Skill Arsenal',
      icon: <Award className="w-3.5 h-3.5 text-emerald-500" />,
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <Laptop className="w-3.5 h-3.5 text-amber-500" />,
    },
    {
      id: 'research',
      label: 'Research Papers',
      icon: <BookOpen className="w-3.5 h-3.5 text-purple-500" />,
    },
    {
      id: 'certifications',
      label: 'Certifications',
      icon: <Award className="w-3.5 h-3.5 text-emerald-500" />,
    },
    {
      id: 'certificates',
      label: 'Course Certificates',
      icon: <GraduationCap className="w-3.5 h-3.5 text-blue-500" />,
    },
    {
      id: 'achievements',
      label: 'Achievements',
      icon: <Trophy className="w-3.5 h-3.5 text-amber-500" />,
    },
    {
      id: 'hackathons',
      label: 'Hackathons & CTFs',
      icon: <Zap className="w-3.5 h-3.5 text-cyan-500" />,
    },
    {
      id: 'blog',
      label: 'Articles & Field Notes',
      icon: <BookOpen className="w-3.5 h-3.5 text-teal-500" />,
    },
    {
      id: 'monthly-log',
      label: 'Monthly Log',
      icon: <Calendar className="w-3.5 h-3.5 text-rose-500" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setShowScrollTop(scrollPos > 350);

      const sectionElements = sections.map((s) => ({
        id: s.id,
        el: document.getElementById(s.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const rect = item.el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(item.id);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-56 p-2 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200/90 dark:border-neutral-800 shadow-2xl text-left"
          >
            <div className="px-3 py-2 border-b border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <BrandLogo size={16} className="shrink-0" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Navigation
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="py-1 space-y-0.5">
              {sections.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                      isActive
                        ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold'
                        : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/60'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {sec.icon}
                      <span>{sec.label}</span>
                    </span>
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-300 dark:text-neutral-600" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-1 mt-1 border-t border-neutral-100 dark:border-neutral-800/80">
              <button
                onClick={scrollToTop}
                className="w-full px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 flex items-center justify-between transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <ArrowUp className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Top of Page</span>
                </span>
                <span className="text-[10px] font-mono opacity-60">Home</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border cursor-pointer active:scale-95 ${
            isOpen
              ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white'
              : 'bg-white/95 dark:bg-neutral-900/95 text-neutral-800 dark:text-neutral-100 border-neutral-200/90 dark:border-neutral-800 backdrop-blur-md hover:border-neutral-300 dark:hover:border-neutral-700'
          }`}
          title="Jump to Section"
          aria-label="Jump to section menu"
        >
          <Compass className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90 text-emerald-400' : 'text-emerald-600 dark:text-emerald-400'}`} />
          <span className="text-xs font-semibold tracking-tight">Navigate</span>
        </button>
      </div>
    </div>
  );
};
