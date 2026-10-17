import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, BookOpen, Building2, Shield, MapPin } from 'lucide-react';

interface EducationStage {
  code: 'SSC' | 'HSC' | 'B.Sc.' | 'M.Sc.';
  fullTitle: string;
  degreeName: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  themeColor: string;
  positionPercent: number;
}

export const EducationTrainSection: React.FC = () => {
  const stages: EducationStage[] = [
    {
      code: 'SSC',
      fullTitle: 'Secondary School Certificate (SSC) - Science',
      degreeName: 'Foundational Secondary Science Curriculum',
      institution: 'Senbag Govt. Pilot High School',
      period: 'January 2013 – March 2018',
      location: 'Noakhali, Bangladesh',
      description: 'Secondary education building strong roots in fundamental mathematics, physics, and early computer curiosity.',
      highlights: [
        'Graduated with Science Division Honors',
        'Strong foundational mathematics & logic',
        'Early self-directed fascination with computers & technology',
      ],
      themeColor: '#F59E0B',
      positionPercent: 12,
    },
    {
      code: 'HSC',
      fullTitle: 'Higher Secondary School Certificate (HSC) - Science',
      degreeName: 'Pre-Engineering Science & ICT Curriculum',
      institution: 'Milestone College',
      period: 'January 2018 – December 2020',
      location: 'Uttara, Dhaka, Bangladesh',
      description: 'Higher secondary pre-engineering curriculum mastering Higher Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT).',
      highlights: [
        'Structured programming logic & ICT foundations',
        'Advanced physics & mathematical problem solving',
        'Prepared trajectory for Computer Science & Engineering',
      ],
      themeColor: '#3B82F6',
      positionPercent: 38,
    },
    {
      code: 'B.Sc.',
      fullTitle: 'Bachelor of Science in Computer Science & Engineering',
      degreeName: 'B.Sc. in Computer Science and Engineering',
      institution: 'Daffodil International University (DIU)',
      period: 'September 2021 – January 2026',
      location: 'Dhaka, Bangladesh',
      description: 'Completed comprehensive 4-year undergraduate degree with deep foundations in system programming, operating systems, algorithms, and cybersecurity.',
      highlights: [
        'Successfully completed graduation defense in CSE',
        'Core Linux kernel, networking & system security coursework',
        'Co-authored published empirical governance research paper',
      ],
      themeColor: '#10B981',
      positionPercent: 66,
    },
    {
      code: 'M.Sc.',
      fullTitle: 'Master of Science in Software Engineering (Cyber Security Major)',
      degreeName: 'M.Sc. in Software Engineering (Cyber Security)',
      institution: 'Daffodil International University (DIU)',
      period: 'Ongoing · Expected May 2026',
      location: 'Dhaka, Bangladesh',
      description: 'Advanced postgraduate scholar focusing on Offensive Security, Red Team frameworks, Web Application Penetration Testing, and automated vulnerability detection.',
      highlights: [
        'Active Red Team labs & 45+ TryHackMe rooms cleared',
        'Enterprise vulnerability analysis, exploitation & patch auditing',
        'Thesis in automated vulnerability detection frameworks',
      ],
      themeColor: '#8B5CF6',
      positionPercent: 90,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stages.length);
    }, 5000);
  };

  useEffect(() => {
    resetAutoTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stages.length]);

  const handleStageClick = (index: number) => {
    setActiveIndex(index);
    resetAutoTimer();
  };

  const currentStage = stages[activeIndex];

  const getStageIcon = (code: EducationStage['code']) => {
    switch (code) {
      case 'SSC':
        return <BookOpen className="w-5 h-5 text-amber-500" />;
      case 'HSC':
        return <Building2 className="w-5 h-5 text-blue-500" />;
      case 'B.Sc.':
        return <GraduationCap className="w-5 h-5 text-emerald-500" />;
      case 'M.Sc.':
      default:
        return <Shield className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section
      id="education"
      className="py-14 sm:py-20 w-full px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden font-editorial select-none bg-[#F6F7F9]/90 dark:bg-[#0E1117]/90 backdrop-blur-md transition-colors duration-300"
    >
      <div className="absolute top-12 left-1/4 w-80 h-80 bg-slate-200/25 dark:bg-slate-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-left w-full"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight flex items-center gap-2 whitespace-nowrap">
            <span>Education Roadmap</span>
            <span className="text-xl sm:text-2xl"> </span>
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl">
            Academic milestones from secondary education to Master of Science (SSC, HSC, B.Sc., M.Sc.)
          </p>
        </motion.div>

        {/* SCENIC CANVAS */}
        <div className="relative w-full rounded-3xl bg-gradient-to-b from-[#FEFDF9] via-[#FAF6EC] to-[#F3ECD8] dark:from-[#11141C] dark:via-[#141822] dark:to-[#0F131A] border-2 border-amber-200/70 dark:border-neutral-800 p-6 sm:p-10 shadow-2xl overflow-hidden mb-8">
          {/* SUN */}
          <div className="absolute top-6 left-8 sm:left-14 z-0 pointer-events-none">
            <div className="relative flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-400/25 blur-xl animate-pulse" />
              <div className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 shadow-[0_0_25px_rgba(251,191,36,0.6)]" />
            </div>
          </div>

          {/* CLOUDS */}
          <div className="absolute top-8 left-36 opacity-75 dark:opacity-30 pointer-events-none hidden sm:block">
            <svg viewBox="0 0 120 40" className="w-20 h-7 text-white fill-current filter drop-shadow-xs">
              <path d="M20 30 Q10 30 10 20 Q10 10 25 10 Q30 2 45 4 Q60 2 65 12 Q80 12 80 22 Q85 30 70 30 Z" />
            </svg>
          </div>
          <div className="absolute top-12 right-24 opacity-70 dark:opacity-25 pointer-events-none hidden sm:block">
            <svg viewBox="0 0 120 40" className="w-24 h-8 text-white fill-current filter drop-shadow-xs">
              <path d="M20 30 Q10 30 10 20 Q10 10 25 10 Q30 2 45 4 Q60 2 65 12 Q80 12 80 22 Q85 30 70 30 Z" />
            </svg>
          </div>

          {/* ROLLING HILLS */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20">
            <svg viewBox="0 0 1000 350" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 200 Q200 130 400 180 T800 160 Q900 140 1000 180 L1000 350 L0 350 Z" fill="#FDE047" opacity="0.4" />
              <path d="M0 230 Q250 170 500 220 T1000 200 L1000 350 L0 350 Z" fill="#86EFAC" opacity="0.5" />
            </svg>
          </div>

          {/* SEA */}
          <div className="absolute bottom-0 right-0 w-2/5 sm:w-1/3 h-28 sm:h-36 z-0 pointer-events-none opacity-80 dark:opacity-40 overflow-hidden">
            <svg viewBox="0 0 400 150" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 80 Q100 40 250 70 T400 50 L400 150 L0 150 Z" fill="#60A5FA" />
              <path d="M50 95 Q100 90 160 95" stroke="#BFDBFE" strokeWidth="2" fill="none" opacity="0.8" />
              <path d="M180 110 Q240 105 320 110" stroke="#BFDBFE" strokeWidth="2" fill="none" opacity="0.8" />
              <path d="M120 130 Q180 125 280 130" stroke="#BFDBFE" strokeWidth="2" fill="none" opacity="0.7" />
            </svg>
          </div>

          {/* HOUSES */}
          <div className="absolute bottom-28 sm:bottom-36 left-[4%] sm:left-[6%] z-10 pointer-events-none">
            <div className="relative">
              <div className="absolute -top-4 right-1 w-2 h-4 bg-amber-800 rounded-xs" />
              <div className="absolute -top-6 right-1.5 w-2 h-2 rounded-full bg-white/70 animate-ping opacity-60" />
              <div className="w-9 h-5 bg-[#EF4444] rounded-t-sm shadow-xs" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
              <div className="w-9 h-7 bg-[#FFFBEB] dark:bg-neutral-800 border border-amber-300/60 dark:border-neutral-700 shadow-sm flex items-end justify-center p-0.5">
                <div className="w-2.5 h-4 bg-[#78350F] rounded-t-xs" />
              </div>
            </div>
          </div>

          {/* RAILWAY TRACK */}
          <div className="relative w-full h-[150px] sm:h-[190px] flex items-center z-20">
            <svg viewBox="0 0 1000 160" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <path
                d="M 20 80 Q 250 20 500 90 T 980 80"
                fill="none"
                stroke="#E2D9C3"
                strokeWidth="28"
                className="dark:stroke-neutral-800"
                strokeLinecap="round"
              />
              <path
                d="M 20 80 Q 250 20 500 90 T 980 80"
                fill="none"
                stroke="#854D0E"
                strokeWidth="22"
                strokeDasharray="4 14"
                className="opacity-40 dark:opacity-60"
              />
              <path
                d="M 20 74 Q 250 14 500 84 T 980 74"
                fill="none"
                stroke="#64748B"
                strokeWidth="3.5"
                className="dark:stroke-slate-500"
              />
              <path
                d="M 20 86 Q 250 26 500 96 T 980 86"
                fill="none"
                stroke="#64748B"
                strokeWidth="3.5"
                className="dark:stroke-slate-500"
              />
            </svg>

            {/* STATIONS */}
            {stages.map((stage, idx) => {
              const isCurrent = activeIndex === idx;
              return (
                <div
                  key={stage.code}
                  style={{ left: `${stage.positionPercent}%` }}
                  onClick={() => handleStageClick(idx)}
                  title={`Click to jump train to ${stage.code}`}
                  className="absolute -translate-x-1/2 z-30 cursor-pointer group"
                >
                  <motion.div
                    animate={isCurrent ? { scale: 1.18, y: -10 } : { scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`px-3.5 py-1 rounded-full text-xs sm:text-sm font-extrabold font-mono shadow-md border-2 transition-all flex items-center gap-1.5 whitespace-nowrap mb-1.5 ${
                        isCurrent
                          ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white scale-110 ring-2 ring-emerald-400/40'
                          : 'bg-white/95 dark:bg-neutral-900/95 text-neutral-800 dark:text-neutral-200 border-neutral-300 dark:border-neutral-700 hover:border-emerald-500 hover:scale-105'
                      }`}
                    >
                      <span>{stage.code}</span>
                      {isCurrent && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
                    </div>

                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-lg border-2 transition-all ${
                        isCurrent
                          ? 'bg-emerald-500 text-white border-white dark:border-neutral-900 ring-4 ring-emerald-400/30'
                          : 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 group-hover:scale-110 group-hover:border-emerald-400'
                      }`}
                    >
                      {getStageIcon(stage.code)}
                    </div>
                  </motion.div>
                </div>
              );
            })}

            {/* TRAIN */}
            <motion.div
              animate={{
                left: `${currentStage.positionPercent}%`,
              }}
              transition={{
                type: 'spring',
                stiffness: 70,
                damping: 15,
                mass: 1.2,
              }}
              className="absolute -translate-x-1/2 z-40 pointer-events-none"
              style={{ top: '15px' }}
            >
              <div className="absolute -top-6 left-1 flex items-center gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-white/90 dark:bg-neutral-300 animate-ping opacity-80" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/70 dark:bg-neutral-400 animate-bounce" />
              </div>
              <div className="relative flex items-center drop-shadow-2xl">
                <div className="w-13 h-9 sm:w-16 sm:h-11 rounded-lg bg-[#38BDF8] border-2 border-white dark:border-neutral-900 shadow-md flex items-center justify-center p-1 relative mr-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-sky-950 flex items-center justify-center overflow-hidden">
                    <span className="text-[10px] sm:text-xs">🚂</span>
                  </div>
                  <div className="absolute -bottom-2.5 left-1 w-3.5 h-3.5 rounded-full bg-neutral-900 border border-white animate-spin [animation-duration:1s]" />
                  <div className="absolute -bottom-2.5 right-1 w-3.5 h-3.5 rounded-full bg-neutral-900 border border-white animate-spin [animation-duration:1s]" />
                </div>
                <div className="w-16 h-10 sm:w-22 sm:h-13 rounded-xl bg-[#FBBF24] border-2 border-white dark:border-neutral-900 shadow-lg flex flex-col justify-between p-1.5 relative">
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-3 sm:w-4 sm:h-4 rounded bg-amber-950/80" />
                    <div className="w-3.5 h-3 sm:w-4 sm:h-4 rounded bg-amber-950/80" />
                    <div className="w-5 h-3.5 sm:w-7 sm:h-4.5 rounded-r-md bg-white border border-amber-300" />
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-3.5 rounded-r-full bg-amber-100 shadow-md animate-pulse" />
                  <div className="absolute -bottom-2.5 left-2 w-4 h-4 rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center animate-spin [animation-duration:1s]">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  </div>
                  <div className="absolute -bottom-2.5 right-3 w-4 h-4 rounded-full bg-neutral-900 border-2 border-white flex items-center justify-center animate-spin [animation-duration:1s]">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-3 relative z-30">
            {stages.map((st, i) => (
              <button
                key={st.code}
                onClick={() => handleStageClick(i)}
                title={`Jump to ${st.code}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i
                    ? 'w-10 bg-emerald-500 shadow-sm'
                    : 'w-4 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* SPOTLIGHT CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.code}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl mx-auto rounded-3xl bg-white dark:bg-[#161B26] border border-neutral-200/90 dark:border-neutral-800 shadow-2xl p-6 sm:p-9 text-left relative overflow-hidden"
          >
            <div
              className="absolute top-0 inset-x-0 h-2"
              style={{ backgroundColor: currentStage.themeColor }}
            />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0 font-bold font-mono text-base"
                  style={{ backgroundColor: currentStage.themeColor }}
                >
                  {currentStage.code}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                    STAGE // {currentStage.code} EDUCATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
                    {currentStage.degreeName}
                  </h3>
                </div>
              </div>
              <div className="px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-mono font-semibold text-neutral-700 dark:text-neutral-300 whitespace-nowrap self-start sm:self-auto">
                {currentStage.period}
              </div>
            </div>

            <div className="py-4 space-y-2">
              <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400">
                <span>{currentStage.institution}</span>
                <span>·</span>
                <span className="text-neutral-400 font-normal text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {currentStage.location}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                {currentStage.description}
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase font-bold text-neutral-400 dark:text-neutral-500 block mb-2">
                Key Academic Achievements & Curriculum Highlights:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {currentStage.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-100 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span className="leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
