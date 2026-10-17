import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';
import {
  Sun,
  Moon,
  ChevronDown,
  ChevronRight,
  Search,
  Boxes,
  LayoutGrid,
  FileText,
  Sparkles,
  Award,
  Terminal,
  ExternalLink,
  CheckCircle2,
  Github,
  Linkedin,
  Menu,
  X,
  BookOpen,
} from 'lucide-react';

interface TopHeaderProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenContact: () => void;
  onOpenProgress: () => void;
  onOpenCV?: () => void;
  onNavigateToSection?: (id: string) => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenContact,
  onOpenProgress,
  onOpenCV,
  onNavigateToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (productsRef.current && !productsRef.current.contains(target)) {
        setIsProductsOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(target)) {
        setIsResourcesOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsProductsOpen(false);
        setIsResourcesOpen(false);
        setIsMobileMenuOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        handleQuickSearch();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleQuickSearch = () => {
    setIsMobileMenuOpen(false);
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = projectsElem.querySelector('input');
        if (input) input.focus();
      }, 500);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToSection = (id: string) => {
    setIsProductsOpen(false);
    setIsResourcesOpen(false);
    setIsMobileMenuOpen(false);
    if (onNavigateToSection) {
      onNavigateToSection(id);
    } else {
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* FLOATING NAVBAR */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-500 ease-out font-sans w-auto max-w-[96vw] flex justify-center ${
          isScrolled
            ? 'bottom-4 sm:bottom-6 top-auto'
            : 'top-3 sm:top-4 bottom-auto'
        }`}
      >
        <div className="flex items-center justify-between sm:justify-start gap-1.5 sm:gap-2.5 md:gap-3 pl-3 pr-4 sm:pl-4 sm:pr-5 md:pl-5 md:pr-6 py-1.5 sm:py-2 rounded-2xl sm:rounded-full bg-white/85 dark:bg-[#0B0E14]/85 backdrop-blur-2xl border border-neutral-200/80 dark:border-neutral-800/90 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-neutral-800 dark:text-neutral-100">
          {/* --- LEFT SECTION: LOGO --- */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="hover:scale-105 active:scale-95 transition-transform shrink-0 group flex items-center"
              title={`${PERSONAL_INFO.fullName} - Cybersecurity Portfolio`}
            >
              <BrandLogo className="w-7 h-7 sm:w-8 sm:h-8 group-hover:shadow-[0_0_18px_rgba(16,185,129,0.45)] transition-shadow rounded-xl" />
            </a>
          </div>

          {/* --- CENTER SECTION: PRODUCTS DROPDOWN --- */}
          <div className="relative shrink-0" ref={productsRef}>
            <button
              onClick={() => {
                setIsProductsOpen(!isProductsOpen);
                setIsResourcesOpen(false);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg transition-colors cursor-pointer text-xs sm:text-sm font-medium ${
                isProductsOpen
                  ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold'
                  : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60'
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isProductsOpen ? 'rotate-180 text-orange-500' : 'text-neutral-400'
                }`}
              />
            </button>

            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: isScrolled ? 10 : -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: isScrolled ? 10 : -10, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className={`absolute ${
                    isScrolled ? 'bottom-full mb-3' : 'top-full mt-3'
                  } left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-[calc(100vw-2.5rem)] max-w-[340px] sm:w-[350px] rounded-2xl bg-white dark:bg-[#101420] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_25px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.7)] p-2 space-y-1 z-50 text-left`}
                >
                  <div
                    onClick={() => navigateToSection('skills')}
                    className="group flex items-center justify-between p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        <Boxes className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                          <span>Skills Stack</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold">
                            3D DECK
                          </span>
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400">
                          Red Team, NetSec, Web & Kernel Labs
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <div
                    onClick={() => navigateToSection('projects')}
                    className="group flex items-center justify-between p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        <LayoutGrid className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                          <span>Components & Blocks</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 font-semibold">
                            PRO
                          </span>
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400">
                          100+ ready-made components for speed
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <div
                    onClick={() => navigateToSection('monthly-log')}
                    className="group flex items-center justify-between p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        <FileText className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                          <span>Sectoral Templates</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 font-semibold">
                            PRO
                          </span>
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400">
                          Designs for various sectoral needs
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 group-hover:translate-x-0.5 transition-all" />
                  </div>

                  <div
                    onClick={() => navigateToSection('education')}
                    className="group flex items-center justify-between p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                        <Sparkles className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white flex items-center gap-1.5">
                          <span>Aligned with Figma</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 font-semibold">
                            PRO
                          </span>
                        </h4>
                        <p className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400">
                          Always-updated Figma file library
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- DESKTOP NAV LINKS --- */}
          <nav className="hidden md:flex items-center gap-1 text-xs sm:text-sm font-medium">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('about');
              }}
              className="px-2 sm:px-2.5 py-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60 transition-colors shrink-0 font-semibold"
            >
              About
            </a>
            <a
              href="#journey"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('journey');
              }}
              className="px-2 sm:px-2.5 py-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60 transition-colors shrink-0"
            >
              Docs
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('skills');
              }}
              className="px-2 sm:px-2.5 py-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60 transition-colors shrink-0"
            >
              Skills
            </a>
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('education');
              }}
              className="px-2 sm:px-2.5 py-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60 transition-colors shrink-0"
            >
              Roadmap
            </a>
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('blog');
              }}
              className="px-2 sm:px-2.5 py-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60 transition-colors shrink-0 flex items-center gap-1"
            >
              <span>Articles</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-mono font-semibold">
                Blog
              </span>
            </a>

            {/* CV / RESUME NAV LINK */}
            <button
              onClick={onOpenCV}
              data-cursor="hover"
              className="px-2 sm:px-2.5 py-1.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60 transition-colors shrink-0 flex items-center gap-1.5 cursor-pointer"
              title="View Curriculum Vitae (CV)"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-500 dark:text-[#D2F824]" />
              <span>CV</span>
            </button>

            {/* RESOURCES DROPDOWN */}
            <div className="relative shrink-0" ref={resourcesRef}>
              <button
                onClick={() => {
                  setIsResourcesOpen(!isResourcesOpen);
                  setIsProductsOpen(false);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  isResourcesOpen
                    ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-neutral-800/60'
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isResourcesOpen ? 'rotate-180 text-orange-500' : 'text-neutral-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: isScrolled ? 10 : -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: isScrolled ? 10 : -10, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className={`absolute ${
                      isScrolled ? 'bottom-full mb-3' : 'top-full mt-3'
                    } right-0 w-64 max-w-[calc(100vw-2rem)] rounded-2xl bg-white dark:bg-[#101420] border border-neutral-200/90 dark:border-neutral-800 shadow-2xl p-2 space-y-1 z-50 text-left`}
                  >
                    <div
                      onClick={() => {
                        setIsResourcesOpen(false);
                        onOpenCV?.();
                      }}
                      className="p-2 rounded-xl hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <FileText className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-semibold text-neutral-900 dark:text-white">
                          Curriculum Vitae (CV)
                        </span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-mono font-bold">
                        PDF
                      </span>
                    </div>

                    <div
                      onClick={() => navigateToSection('research')}
                      className="p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <BookOpen className="w-4 h-4 text-purple-500" />
                        <span className="text-xs font-medium text-neutral-900 dark:text-white">
                          Research & Publications
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                    </div>

                    <div
                      onClick={() => navigateToSection('certifications')}
                      className="p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-medium text-neutral-900 dark:text-white">
                          Certifications & Badges
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                    </div>

                    <div
                      onClick={() => navigateToSection('achievements')}
                      className="p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-medium text-neutral-900 dark:text-white">
                          Achievements & Honors
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                    </div>

                    <div
                      onClick={() => navigateToSection('hackathons')}
                      className="p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <Terminal className="w-4 h-4 text-cyan-500" />
                        <span className="text-xs font-medium text-neutral-900 dark:text-white">
                          Hackathons & CTFs
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                    </div>

                    <div
                      onClick={() => navigateToSection('blog')}
                      className="p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <BookOpen className="w-4 h-4 text-teal-500" />
                        <span className="text-xs font-medium text-neutral-900 dark:text-white">
                          Field Notes & Blog
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                    </div>

                    <div
                      onClick={() => navigateToSection('monthly-log')}
                      className="p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-medium text-neutral-900 dark:text-white">
                          Monthly Chronicle
                        </span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                    </div>

                    <a
                      href={PERSONAL_INFO.tryHackMeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <Terminal className="w-4 h-4 text-rose-500" />
                        <span className="text-xs font-medium text-neutral-900 dark:text-white">
                          TryHackMe Profile
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                    </a>

                    <a
                      href={PERSONAL_INFO.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/70 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <Linkedin className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-medium text-neutral-900 dark:text-white">
                          LinkedIn Network
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <span className="text-neutral-300 dark:text-neutral-700 hidden xl:inline">|</span>

          {/* --- RIGHT SECTION: SEARCH, SOCIALS & THEME --- */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={handleQuickSearch}
              className="hidden xl:flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-neutral-100/90 dark:bg-neutral-800/80 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 border border-neutral-200/80 dark:border-neutral-700/80 text-xs text-neutral-500 dark:text-neutral-400 transition-colors cursor-pointer"
              title="Quick Search (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-neutral-400" />
              <span>Quick search...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-[10px] font-mono text-neutral-600 dark:text-neutral-400 shadow-2xs">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={handleQuickSearch}
              className="hidden sm:flex xl:hidden p-1.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors cursor-pointer"
              title="Quick Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <div className="hidden lg:flex items-center gap-0.5 text-neutral-600 dark:text-neutral-400">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={onToggleDarkMode}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-all duration-300 cursor-pointer shrink-0 overflow-hidden"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle dark mode"
            >
              <motion.div
                key={darkMode ? 'dark' : 'light'}
                initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                {darkMode ? (
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-700 dark:text-neutral-300" />
                )}
              </motion.div>
            </button>

            {/* Mobile Hamburger */}
            <div className="relative md:hidden shrink-0" ref={mobileMenuRef}>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  setIsProductsOpen(false);
                  setIsResourcesOpen(false);
                }}
                className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                  isMobileMenuOpen
                    ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-950 dark:text-white'
                    : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: isScrolled ? 10 : -10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: isScrolled ? 10 : -10, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className={`absolute ${
                      isScrolled ? 'bottom-full mb-3' : 'top-full mt-3'
                    } right-0 w-60 rounded-2xl bg-white dark:bg-[#101420] border border-neutral-200/90 dark:border-neutral-800 shadow-2xl p-2.5 space-y-1 z-50 text-left`}
                  >
                    {/* Brand Identifier in Mobile Menu */}
                    <div className="flex items-center gap-2.5 px-2.5 py-2 mb-1.5 rounded-xl bg-neutral-100/70 dark:bg-neutral-800/60 border border-neutral-200/50 dark:border-neutral-700/50">
                      <BrandLogo size={24} className="shrink-0" />
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-neutral-900 dark:text-white truncate">
                          {PERSONAL_INFO.fullName}
                        </div>
                        <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 truncate">
                          Cybersecurity & Systems
                        </div>
                      </div>
                    </div>

                    {/* View CV in Mobile Menu */}
                    <div
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        onOpenCV?.();
                      }}
                      className="px-3 py-2 rounded-xl text-xs font-bold text-neutral-900 dark:text-white bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200/80 dark:border-emerald-800/80 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-[#D2F824]" />
                        <span>Curriculum Vitae (CV)</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-600 text-white dark:bg-[#D2F824] dark:text-neutral-950 font-mono font-bold">
                        VIEW
                      </span>
                    </div>

                    <div
                      onClick={() => navigateToSection('about')}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      About Me & Methodology
                    </div>

                    <div
                      onClick={() => navigateToSection('journey')}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Docs (Journey)
                    </div>

                    <div
                      onClick={() => navigateToSection('skills')}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>Skills Stack</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono font-medium">
                        3D Deck
                      </span>
                    </div>

                    <div
                      onClick={() => navigateToSection('education')}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Roadmap (Education)
                    </div>

                    <div
                      onClick={() => navigateToSection('blog')}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>Articles & Blog</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono font-medium">
                        Writing
                      </span>
                    </div>

                    <div
                      onClick={() => navigateToSection('monthly-log')}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Monthly Chronicle
                    </div>

                    <div
                      onClick={() => navigateToSection('certifications')}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Professional Certifications
                    </div>

                    <div
                      onClick={() => navigateToSection('certificates')}
                      className="px-3 py-2 rounded-xl text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>Course Certificates</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-mono font-medium">
                        Diplomas
                      </span>
                    </div>

                    <div className="pt-1.5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between px-2 text-neutral-500">
                      <a
                        href={PERSONAL_INFO.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-medium"
                      >
                        GitHub
                      </a>
                      <a
                        href={PERSONAL_INFO.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-medium"
                      >
                        LinkedIn
                      </a>
                      <button
                        onClick={handleQuickSearch}
                        className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-medium text-emerald-600 dark:text-emerald-400"
                      >
                        Search
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};
