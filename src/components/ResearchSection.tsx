import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RESEARCH_PAPERS } from '../data/portfolioData';
import { ResearchItem } from '../types';
import {
  Plus,
  Play,
  Pause,
  X,
  BookOpen,
  Shield,
  Volume2,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

interface ResearchModalProps {
  paper: ResearchItem | null;
  onClose: () => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
}

const ResearchDetailModal: React.FC<ResearchModalProps> = ({
  paper,
  onClose,
  isPlayingAudio,
  onToggleAudio,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!paper) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-white dark:bg-[#121622] rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 z-10 text-left my-8 overflow-hidden"
        >
          <div className="flex items-center justify-between gap-3 pb-4 border-b border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-700 dark:text-emerald-400">
                {paper.type}
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                {paper.year}
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                {paper.status}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-5">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white tracking-tight leading-snug">
              {paper.title}
            </h3>
            <p className="mt-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              Published/Defended in: <strong className="text-neutral-800 dark:text-neutral-200">{paper.venue}</strong>
            </p>
            <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
              Authors: <span className="font-medium text-neutral-900 dark:text-neutral-100">{paper.authors.join(', ')}</span>
            </p>
          </div>

          <div className="mt-5 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800/80">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
              Abstract
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-serif">
              {paper.abstract}
            </p>
          </div>

          <div className="mt-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2.5">
              Key Contributions & Highlights
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
              {paper.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {paper.metrics && paper.metrics.length > 0 && (
            <div className="mt-6 grid grid-cols-3 gap-3 p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800/80">
              {paper.metrics.map((m, mIdx) => (
                <div key={mIdx} className="text-center">
                  <div className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white font-mono">
                    {m.value}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
            {paper.id === 'res-audio-briefing' ? (
              <button
                onClick={onToggleAudio}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-mono font-bold shadow-sm transition-all cursor-pointer"
              >
                {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlayingAudio ? 'Pause Audio Briefing' : 'Play Audio Overview (02:45)'}</span>
              </button>
            ) : (
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Peer-Reviewed Technical Standard</span>
              </div>
            )}
            {paper.doiOrUrl && (
              <a
                href={paper.doiOrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-mono font-bold shadow-sm transition-all cursor-pointer"
              >
                <span>Read Full Publication</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export const ResearchSection: React.FC = () => {
  const [selectedPaper, setSelectedPaper] = useState<ResearchItem | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const papers = RESEARCH_PAPERS;
  const paperThoughts = papers[0];
  const paperLinks = papers[1];
  const paperImages = papers[2];
  const paperMedia = papers[3] || papers[1];

  return (
    <section
      id="research"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-neutral-900 dark:text-neutral-100 overflow-hidden bg-[#FAF7F2]/90 dark:bg-[#12161E]/90 backdrop-blur-md transition-colors duration-300"
    >
      <ResearchDetailModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={() => setIsPlayingAudio(!isPlayingAudio)}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center w-full">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-neutral-200/60 dark:bg-neutral-800/80 mb-3 text-neutral-900 dark:text-neutral-100 shadow-2xs">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current text-neutral-800 dark:text-neutral-200"
            >
              <circle cx="9" cy="8" r="2.2" />
              <circle cx="15" cy="8" r="2.2" />
              <circle cx="7.5" cy="14" r="2.2" />
              <circle cx="16.5" cy="14" r="2.2" />
              <ellipse cx="12" cy="16.5" rx="3.5" ry="2.5" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Research & Publications
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto">
            Explore academic policy evaluations, Master of Science cybersecurity investigations, kernel privilege escalation whitepapers, and audio defense telemetry.
          </p>
        </div>

        {/* 4-COLUMN CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
          {/* CARD 1: Policy Thoughts */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setSelectedPaper(paperThoughts)}
            className="group relative rounded-2xl sm:rounded-3xl p-5 bg-[#F4F5F7] dark:bg-[#151922] border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between text-left cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <div>
              <span className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 block mb-0.5">
                Collect your scholarly
              </span>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
                Policy Thoughts
              </h3>
            </div>

            <div className="relative w-full h-56 sm:h-64 my-3 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0F131C] p-3.5 flex flex-col justify-between border border-neutral-200/60 dark:border-neutral-800/80 shadow-2xs group-hover:shadow-md transition-shadow overflow-hidden">
              <div className="space-y-1.5">
                <div className="text-[9px] font-mono tracking-wider uppercase text-emerald-700 dark:text-emerald-400 font-bold border-b border-neutral-100 dark:border-neutral-800 pb-1 flex items-center justify-between">
                  <span>Peer-Reviewed · 2025</span>
                  <span>Bangladesh</span>
                </div>
                <h4 className="text-xs font-bold text-neutral-900 dark:text-neutral-100 line-clamp-2 leading-snug">
                  Climate Governance & Local Development
                </h4>
                <p className="text-[11px] text-neutral-600 dark:text-neutral-300 font-serif italic leading-relaxed pt-1 line-clamp-5">
                  &ldquo;In the empirical matrix of institutional capacity across 64 administrative districts, local policy execution reveals systemic bottlenecks and resilient governance pathways...&rdquo;
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[9px] font-mono text-neutral-400">
                <span>64 Districts Analyzed</span>
                <span>DOI: 10.1109</span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPaper(paperThoughts);
                }}
                className="absolute bottom-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-neutral-800 shadow-md border border-neutral-200/90 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 hover:scale-110 active:scale-95 transition-all cursor-pointer z-10"
                title="View full thoughts and details"
              >
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Journal Publication</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Published</span>
            </div>
          </motion.div>

          {/* CARD 2: Thesis Links */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setSelectedPaper(paperLinks)}
            className="group relative rounded-2xl sm:rounded-3xl p-5 bg-[#F4F5F7] dark:bg-[#151922] border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between text-left cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <div>
              <span className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 block mb-0.5">
                Bookmark your favorite
              </span>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
                Thesis Links
              </h3>
            </div>

            <div className="relative w-full h-56 sm:h-64 my-3 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0F131C] p-3 flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800/80 shadow-2xs group-hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute top-5 right-2 w-36 h-40 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/80 transform rotate-6 scale-90 opacity-70 group-hover:rotate-12 transition-transform duration-300 p-2 text-left">
                <div className="w-full h-16 rounded-lg bg-emerald-500/20 mb-2 flex items-center justify-center text-[10px] font-mono text-emerald-700 font-bold">
                  DIU SE 2026
                </div>
                <div className="text-[9px] font-mono text-neutral-400">LinPEAS Sandbox</div>
              </div>

              <div className="relative z-10 w-44 rounded-xl bg-white dark:bg-[#171D28] border border-neutral-200 dark:border-neutral-700 p-2.5 shadow-lg group-hover:-translate-y-1 transition-transform duration-300 text-left">
                <div className="w-full h-20 rounded-lg bg-gradient-to-br from-emerald-600 via-teal-700 to-neutral-900 mb-2 relative overflow-hidden flex items-center justify-center p-2 text-white">
                  <div className="text-center">
                    <div className="text-[10px] font-mono font-bold tracking-wider uppercase">eBPF Sensor</div>
                    <div className="text-[8px] opacity-75 font-mono">&lt;120ms Probe</div>
                  </div>
                  <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-xs font-bold text-neutral-900 dark:text-white truncate">
                  Microservices eBPF
                </div>
                <div className="text-[10px] font-mono text-neutral-400 flex items-center gap-1 mt-0.5 truncate">
                  <ArrowUpRight className="w-2.5 h-2.5 shrink-0" />
                  <span>github.com/ahanafakif</span>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPaper(paperLinks);
                }}
                className="absolute bottom-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-neutral-800 shadow-md border border-neutral-200/90 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 hover:scale-110 active:scale-95 transition-all cursor-pointer z-20"
                title="View full links and thesis details"
              >
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>M.Sc. Thesis</span>
              <span className="text-purple-600 dark:text-purple-400 font-semibold">Completed</span>
            </div>
          </motion.div>

          {/* CARD 3: Kernel Lab */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setSelectedPaper(paperImages)}
            className="group relative rounded-2xl sm:rounded-3xl p-5 bg-[#F4F5F7] dark:bg-[#151922] border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between text-left cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <div>
              <span className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 block mb-0.5">
                Curate your saved
              </span>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
                Kernel Lab
              </h3>
            </div>

            <div className="relative w-full h-56 sm:h-64 my-3 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0F131C] p-3 flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800/80 shadow-2xs group-hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute top-4 left-3 w-28 h-28 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-2 transform -rotate-12 scale-90 opacity-80 group-hover:-rotate-16 transition-transform duration-300 shadow-md flex flex-col justify-between text-white">
                <span className="text-[9px] font-mono font-bold">THM 10%</span>
                <span className="text-xs">⚔️ 45+</span>
              </div>

              <div className="absolute top-5 right-4 w-28 h-28 rounded-2xl bg-[#202736] border border-neutral-700 p-2 transform rotate-8 scale-90 opacity-85 group-hover:rotate-14 transition-transform duration-300 shadow-md text-emerald-400 font-mono text-[9px]">
                <div>$ find / -perm</div>
                <div className="text-amber-400 mt-1">-4000 2&gt;/dev</div>
                <div className="text-[8px] text-neutral-400 mt-2">SUID Matrix</div>
              </div>

              <div className="relative z-10 w-36 h-36 rounded-2xl bg-gradient-to-b from-[#E06D35] to-[#B34515] p-3 shadow-xl group-hover:scale-105 transition-transform duration-300 flex flex-col justify-between text-white text-left">
                <div className="flex items-center justify-between">
                  <Shield className="w-5 h-5 text-white/90" />
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-black/25">Linux</span>
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">PrivEsc Audit</div>
                  <div className="text-[9px] text-amber-100 font-mono mt-0.5">GTFOBins 99%</div>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPaper(paperImages);
                }}
                className="absolute bottom-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-neutral-800 shadow-md border border-neutral-200/90 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 hover:scale-110 active:scale-95 transition-all cursor-pointer z-20"
                title="View full images and whitepaper details"
              >
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Technical Whitepaper</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Pre-print</span>
            </div>
          </motion.div>

          {/* CARD 4: Videos & Sounds */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setSelectedPaper(paperMedia)}
            className="group relative rounded-2xl sm:rounded-3xl p-5 bg-[#F4F5F7] dark:bg-[#151922] border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between text-left cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <div>
              <span className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 block mb-0.5">
                Catalog your saved
              </span>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
                Videos & Sounds
              </h3>
            </div>

            <div className="relative w-full h-56 sm:h-64 my-3 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0F131C] p-3 flex items-center justify-center border border-neutral-200/60 dark:border-neutral-800/80 shadow-2xs group-hover:shadow-md transition-shadow overflow-hidden">
              <div className="absolute top-2 right-2 w-32 h-32 rounded-2xl bg-gradient-to-br from-amber-300 via-rose-400 to-indigo-500 transform rotate-12 scale-90 opacity-75 group-hover:rotate-16 transition-transform duration-300 shadow-md" />
              <div className="absolute -bottom-4 right-1 w-20 h-20 rounded-xl bg-emerald-800/90 transform -rotate-12 opacity-80" />

              <div className="relative z-10 w-40 h-40 rounded-2xl bg-gradient-to-br from-[#1E56B6] via-[#2A65D4] to-[#123985] p-3.5 shadow-xl group-hover:scale-105 transition-transform duration-300 flex flex-col justify-between text-white text-left overflow-hidden">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="flex items-center gap-1">
                    <Volume2 className="w-3 h-3" />
                    <span>02:45</span>
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/20">Briefing</span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlayingAudio(!isPlayingAudio);
                  }}
                  className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white mx-auto shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  title={isPlayingAudio ? 'Pause Briefing' : 'Play Audio Briefing'}
                >
                  {isPlayingAudio ? (
                    <Pause className="w-5 h-5 fill-current" />
                  ) : (
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  )}
                </button>

                <div className="flex items-end justify-center gap-1 h-5">
                  {[30, 65, 95, 45, 80, 100, 50, 75, 40].map((h, wIdx) => (
                    <motion.div
                      key={wIdx}
                      animate={
                        isPlayingAudio
                          ? { height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }
                          : { height: `${h * 0.4}%` }
                      }
                      transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 0.6,
                        delay: wIdx * 0.08,
                      }}
                      className="w-1 rounded-full bg-white/80"
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPaper(paperMedia);
                }}
                className="absolute bottom-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-neutral-800 shadow-md border border-neutral-200/90 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 hover:scale-110 active:scale-95 transition-all cursor-pointer z-20"
                title="View full media details and audio transcript"
              >
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span>Interactive Telemetry</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Audio Ready</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
