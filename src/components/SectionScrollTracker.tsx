import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Compass,
  ArrowLeftRight,
  X,
  Minimize2,
  Maximize2,
} from 'lucide-react';

export interface TrackerStep {
  id: string;
  title: string;
  subtitle: string;
}

const STEPS: TrackerStep[] = [
  {
    id: 'hero',
    title: 'Personal details',
    subtitle: 'Bio & offensive security focus',
  },
  {
    id: 'about',
    title: 'About & Methodology',
    subtitle: 'Cyber mindset & execution process',
  },
  {
    id: 'journey',
    title: 'Career & Experience',
    subtitle: 'Work journey and track record',
  },
  {
    id: 'skills',
    title: 'Technical skill stack',
    subtitle: 'Offensive security & tools',
  },
  {
    id: 'projects',
    title: 'Selected projects',
    subtitle: 'Hands-on lab dossiers',
  },
  {
    id: 'research',
    title: 'Research & Publications',
    subtitle: 'Scholarly papers & telemetry',
  },
  {
    id: 'certifications',
    title: 'Professional credentials',
    subtitle: 'CHTAP & security standards',
  },
  {
    id: 'certificates',
    title: 'Course diplomas',
    subtitle: 'Academy completion certificates',
  },
  {
    id: 'achievements',
    title: 'Achievements & Honors',
    subtitle: 'Global rankings & distinctions',
  },
  {
    id: 'hackathons',
    title: 'Hackathons & CTFs',
    subtitle: 'Competitive cyber drills',
  },
  {
    id: 'blog',
    title: 'Field notes & Articles',
    subtitle: 'Technical research writing',
  },
  {
    id: 'monthly-log',
    title: 'Monthly progress log',
    subtitle: 'Chronicle of continuous growth',
  },
  {
    id: 'education',
    title: 'Education roadmap',
    subtitle: 'Academic journey & milestones',
  },
  {
    id: 'contact',
    title: 'Work collaboration',
    subtitle: 'Direct contact & consultation',
  },
];

interface SectionScrollTrackerProps {
  onOpenContact: () => void;
}

export const SectionScrollTracker: React.FC<SectionScrollTrackerProps> = ({
  onOpenContact,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('ahanaf_tracker_minimized') === 'true';
    }
    return false;
  });
  const [side, setSide] = useState<'left' | 'right'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ahanaf_tracker_side');
      if (saved === 'left' || saved === 'right') return saved;
    }
    return 'left';
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeItemRef = useRef<HTMLDivElement>(null);
  const listContainerRef = useRef<HTMLDivElement>(null);

  // Scroll detection to track current active section and control appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Reveal when user starts scrolling down (past top hero edge)
      setIsVisible(scrollY > 50);

      // Special case: near the bottom of page
      if (
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 160
      ) {
        setActiveStepIndex(STEPS.length - 1);
        return;
      }

      // Check sections positions
      let currentActiveIndex = 0;
      for (let i = 0; i < STEPS.length; i++) {
        const step = STEPS[i];
        const element = document.getElementById(step.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element top is above roughly 38% of viewport height
          if (rect.top <= viewportHeight * 0.38) {
            currentActiveIndex = i;
          }
        }
      }

      setActiveStepIndex(currentActiveIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoothly scroll active item into view inside the stepper card when step changes
  useEffect(() => {
    if (activeItemRef.current && listContainerRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeStepIndex]);

  const handleStepClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  const toggleSide = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextSide = side === 'left' ? 'right' : 'left';
    setSide(nextSide);
    localStorage.setItem('ahanaf_tracker_side', nextSide);
  };

  const toggleMinimized = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const nextVal = !isMinimized;
    setIsMinimized(nextVal);
    localStorage.setItem('ahanaf_tracker_minimized', String(nextVal));
  };

  const currentStep = STEPS[activeStepIndex] || STEPS[0];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP FLOATING STEPPER (XL+ screens)                                  */}
      {/* Appears when scrolling, docks on Left or Right with toggle & minimize      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: side === 'left' ? -60 : 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: side === 'left' ? -60 : 60, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className={`hidden xl:block fixed z-40 select-none ${
              side === 'left' ? 'left-6 2xl:left-8' : 'right-6 2xl:right-8'
            } top-28`}
          >
            <AnimatePresence mode="wait">
              {!isMinimized ? (
                /* --- EXPANDED STEPPER CARD --- */
                <motion.div
                  key="expanded-tracker"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.2 }}
                  className="w-[275px] 2xl:w-[295px] rounded-3xl bg-white/95 dark:bg-[#0E121B]/95 backdrop-blur-2xl border border-neutral-200/90 dark:border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] p-4 sm:p-5 text-left"
                >
                  {/* Stepper Top Toolbar */}
                  <div className="flex items-center justify-between pb-3 mb-2.5 border-b border-neutral-100 dark:border-neutral-800/80 text-xs">
                    <div className="flex items-center gap-1.5 text-neutral-400 dark:text-neutral-500 font-mono text-[11px]">
                      <Compass className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                        Section
                      </span>
                      <span>·</span>
                      <span className="text-neutral-900 dark:text-white font-bold bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded-md">
                        {activeStepIndex + 1}/{STEPS.length}
                      </span>
                    </div>

                    {/* Controls: Dock Left/Right & Minimize */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={toggleSide}
                        className="flex items-center gap-1 px-2 py-1 rounded-lg text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer text-[10px] font-mono font-medium"
                        title={`Move tracker to ${side === 'left' ? 'Right' : 'Left'} side`}
                        aria-label="Toggle Left or Right dock position"
                      >
                        <ArrowLeftRight className="w-3 h-3 text-emerald-500" />
                        <span className="uppercase">{side === 'left' ? 'Right' : 'Left'}</span>
                      </button>
                      <button
                        onClick={toggleMinimized}
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                        title="Minimize tracker"
                        aria-label="Minimize tracker"
                      >
                        <Minimize2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Stepper Steps List */}
                  <div
                    ref={listContainerRef}
                    className="relative py-1 space-y-0.5 max-h-[calc(100vh-270px)] overflow-y-auto no-scrollbar pr-1 scroll-smooth"
                  >
                    {/* Continuous Vertical Connecting Guide Track */}
                    <div className="absolute left-[13px] top-3 bottom-5 w-[1.5px] bg-neutral-200 dark:bg-neutral-800/80 pointer-events-none" />

                    {STEPS.map((step, index) => {
                      const isCompleted = index < activeStepIndex;
                      const isActive = index === activeStepIndex;
                      const isUpcoming = index > activeStepIndex;

                      return (
                        <div
                          key={step.id}
                          ref={isActive ? activeItemRef : null}
                          onClick={() => handleStepClick(step.id)}
                          className={`relative flex items-start gap-3 py-2 px-1.5 rounded-xl cursor-pointer transition-all duration-200 group ${
                            isActive
                              ? 'bg-neutral-100/90 dark:bg-neutral-800/60 shadow-2xs'
                              : 'hover:bg-neutral-50/80 dark:hover:bg-neutral-800/30'
                          }`}
                        >
                          {/* Step Node */}
                          <div className="relative z-10 shrink-0 mt-0.5">
                            {isCompleted && (
                              /* COMPLETED: Circle with checkmark ✓ */
                              <div className="w-6 h-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                                <Check className="w-3.5 h-3.5 stroke-[2.75]" />
                              </div>
                            )}

                            {isActive && (
                              /* ACTIVE: Dashed ring with center pulsing dot */
                              <div className="relative w-6 h-6 rounded-full border-2 border-dashed border-neutral-900 dark:border-white bg-white dark:bg-[#0E121B] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              </div>
                            )}

                            {isUpcoming && (
                              /* UPCOMING: Subdued circle with step number */
                              <div className="w-6 h-6 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-[10px] font-mono text-neutral-400 dark:text-neutral-500 font-medium group-hover:border-neutral-400 transition-colors">
                                {index + 1}
                              </div>
                            )}
                          </div>

                          {/* Step Content: Title & Subtitle */}
                          <div className="min-w-0 flex-1 text-left">
                            <h4
                              className={`text-xs leading-tight transition-colors ${
                                isActive
                                  ? 'font-bold text-neutral-950 dark:text-white'
                                  : isCompleted
                                  ? 'font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-950 dark:group-hover:text-white'
                                  : 'font-normal text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-400'
                              }`}
                            >
                              {step.title}
                            </h4>
                            <p
                              className={`text-[10px] sm:text-[11px] leading-tight mt-0.5 transition-colors line-clamp-1 ${
                                isActive
                                  ? 'text-neutral-600 dark:text-neutral-300 font-medium'
                                  : 'text-neutral-400 dark:text-neutral-500'
                              }`}
                            >
                              {step.subtitle}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Stepper Footer: Quick contact link */}
                  <div className="mt-2.5 pt-2.5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="text-[11px]">Need consultation?</span>
                    <button
                      onClick={onOpenContact}
                      className="font-semibold text-neutral-900 dark:text-white underline underline-offset-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer text-[11px]"
                    >
                      Contact Ahanaf
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* --- MINIMIZED DOCK PILL (STILL SHOWS CURRENT ACTIVE SECTION!) --- */
                <motion.div
                  key="minimized-tracker"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => toggleMinimized()}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-2xl bg-white/95 dark:bg-[#0E121B]/95 backdrop-blur-xl border border-neutral-200/90 dark:border-neutral-800 shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all text-left group"
                  title="Click to expand section tracker"
                >
                  {/* Active step circle */}
                  <div className="w-5 h-5 rounded-full border-2 border-dashed border-emerald-500 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="text-left">
                    <div className="text-[11px] font-bold text-neutral-900 dark:text-white leading-none truncate max-w-[130px]">
                      {currentStep.title}
                    </div>
                    <div className="text-[9px] font-mono text-neutral-400 mt-0.5 flex items-center gap-1">
                      <span>Step {activeStepIndex + 1}/{STEPS.length}</span>
                      <span className="text-emerald-500">•</span>
                      <span className="group-hover:underline">Expand</span>
                    </div>
                  </div>

                  <Maximize2 className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 2. MOBILE / TABLET FLOATING TRACKER BUTTON & DRAWER (< XL screens)        */}
      {/* Appears when scrolling, reveals active section & drawer on tap            */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="xl:hidden fixed bottom-6 left-6 z-40"
          >
            <button
              onClick={() => setIsMobileOpen(true)}
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white/95 dark:bg-[#0E121B]/95 backdrop-blur-xl border border-neutral-200/90 dark:border-neutral-800 text-neutral-900 dark:text-white shadow-xl hover:shadow-2xl transition-all cursor-pointer active:scale-95 text-xs font-semibold"
              aria-label="Open section roadmap"
            >
              <div className="w-4 h-4 rounded-full border-2 border-dashed border-emerald-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="truncate max-w-[120px]">{currentStep.title}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                {activeStepIndex + 1}/{STEPS.length}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-md bg-white dark:bg-[#0E121B] rounded-t-3xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 text-left max-h-[85vh] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">
                    Section Navigation ({activeStepIndex + 1}/{STEPS.length})
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative py-3 my-2 overflow-y-auto max-h-[58vh] pr-1">
                <div className="absolute left-[13px] top-4 bottom-5 w-[1.5px] bg-neutral-200 dark:bg-neutral-800 pointer-events-none" />

                {STEPS.map((step, index) => {
                  const isCompleted = index < activeStepIndex;
                  const isActive = index === activeStepIndex;
                  const isUpcoming = index > activeStepIndex;

                  return (
                    <div
                      key={step.id}
                      onClick={() => handleStepClick(step.id)}
                      className={`relative flex items-start gap-3.5 py-2.5 px-2 rounded-xl cursor-pointer transition-colors ${
                        isActive
                          ? 'bg-neutral-100/90 dark:bg-neutral-800/70'
                          : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/30'
                      }`}
                    >
                      <div className="relative z-10 shrink-0 mt-0.5">
                        {isCompleted && (
                          <div className="w-6 h-6 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                            <Check className="w-3.5 h-3.5 stroke-[2.75]" />
                          </div>
                        )}
                        {isActive && (
                          <div className="w-6 h-6 rounded-full border-2 border-dashed border-neutral-900 dark:border-white bg-white dark:bg-[#0E121B] flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          </div>
                        )}
                        {isUpcoming && (
                          <div className="w-6 h-6 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-[10px] font-mono text-neutral-400">
                            {index + 1}
                          </div>
                        )}
                      </div>

                      <div>
                        <h4
                          className={`text-xs ${
                            isActive
                              ? 'font-bold text-neutral-950 dark:text-white'
                              : isCompleted
                              ? 'font-semibold text-neutral-700 dark:text-neutral-300'
                              : 'text-neutral-400 dark:text-neutral-500'
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs">
                <span className="text-neutral-500">Need consultation?</span>
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    onOpenContact();
                  }}
                  className="font-semibold text-neutral-900 dark:text-white underline underline-offset-4"
                >
                  Contact support
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
