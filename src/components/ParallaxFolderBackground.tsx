import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const ParallaxFolderBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const yLayer1 = useTransform(scrollY, [0, 800], [0, -180]);
  const yLayer2 = useTransform(scrollY, [0, 800], [0, -110]);
  const yLayer3 = useTransform(scrollY, [0, 800], [0, -60]);
  const yLayer4 = useTransform(scrollY, [0, 800], [0, 70]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* --- FOLDER 1: TOP-LEFT (Sunny Yellow - 2023) --- */}
      <motion.div
        style={{ y: yLayer1 }}
        animate={{
          y: [0, -8, 0],
          rotate: [-12, -10, -12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-6 left-[3%] sm:left-[8%] w-[160px] sm:w-[220px] h-[140px] sm:h-[190px] opacity-35 dark:opacity-20 blur-[1.5px] sm:blur-[2px]"
      >
        <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#FBBF24] via-[#F59E0B] to-[#D97706] shadow-xl p-4 flex flex-col justify-between text-left">
          <div className="absolute -top-3 left-5 w-20 h-5 rounded-t-xl bg-[#FBBF24]" />
          <div className="flex justify-between font-mono text-[11px] font-bold text-amber-950">
            <span>2023</span>
            <span>NETWORKS</span>
          </div>
          <div className="text-[10px] font-mono text-amber-900/80">LAB ARCHIVE</div>
        </div>
      </motion.div>

      {/* --- FOLDER 2: TOP-RIGHT (Royal Blue - 2026 with Project Slip) --- */}
      <motion.div
        style={{ y: yLayer2 }}
        animate={{
          y: [0, -12, 0],
          rotate: [14, 16, 14],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute top-4 right-[2%] sm:right-[10%] w-[180px] sm:w-[240px] h-[150px] sm:h-[200px] opacity-40 dark:opacity-22 blur-[1.5px] sm:blur-[2px]"
      >
        <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] shadow-2xl p-4 flex flex-col justify-between text-left">
          <div className="absolute -top-4 left-6 right-6 h-8 rounded-t-xl bg-white/90 dark:bg-neutral-800 shadow-md border-t border-l border-r border-white/60 p-1.5 flex justify-between text-[8px] font-mono text-neutral-600 dark:text-neutral-300">
            <span>PART PROJECTS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="absolute -top-3.5 left-5 w-24 h-5 rounded-t-xl bg-[#3B82F6]" />
          <div className="flex justify-between font-mono text-[11px] font-bold text-white pt-2">
            <span>2026</span>
            <span>OFFENSIVE</span>
          </div>
          <div className="text-[10px] font-mono text-white/80">RED TEAM</div>
        </div>
      </motion.div>

      {/* --- FOLDER 3: CENTER-BEHIND HEADLINE (Deep Coral / Orange - 2022) --- */}
      <motion.div
        style={{ y: yLayer3 }}
        animate={{
          y: [0, -6, 0],
          rotate: [-4, -2, -4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-[32%] left-[28%] sm:left-[35%] w-[190px] sm:w-[260px] h-[160px] sm:h-[210px] opacity-25 dark:opacity-15 blur-[2.5px] sm:blur-[3px]"
      >
        <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#FF7A5C] via-[#FF633E] to-[#D93814] shadow-xl p-4 flex flex-col justify-between text-left">
          <div className="absolute -top-3 left-6 w-20 h-5 rounded-t-xl bg-[#FF7A5C]" />
          <div className="flex justify-between font-mono text-[11px] font-bold text-white">
            <span>2022</span>
            <span>FOUNDATIONS</span>
          </div>
          <div className="text-[10px] font-mono text-white/70">B.Sc. CSE</div>
        </div>
      </motion.div>

      {/* --- FOLDER 4: MID-RIGHT (Sky Cyan - 2025 CHTAP) --- */}
      <motion.div
        style={{ y: yLayer1 }}
        animate={{
          y: [0, -10, 0],
          rotate: [8, 10, 8],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute top-[52%] right-[5%] sm:right-[14%] w-[170px] sm:w-[230px] h-[140px] sm:h-[190px] opacity-35 dark:opacity-20 blur-[1.5px] sm:blur-[2px]"
      >
        <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#38BDF8] via-[#0284C7] to-[#0369A1] shadow-xl p-4 flex flex-col justify-between text-left">
          <div className="absolute -top-3 right-6 w-20 h-5 rounded-t-xl bg-[#38BDF8]" />
          <div className="flex justify-between font-mono text-[11px] font-bold text-white">
            <span>2025</span>
            <span>CHTAP</span>
          </div>
          <div className="text-[10px] font-mono text-white/80">HYGIENE</div>
        </div>
      </motion.div>

      {/* --- FOLDER 5: BOTTOM-LEFT (Slate Silver / Research - 2024) --- */}
      <motion.div
        style={{ y: yLayer4 }}
        animate={{
          y: [0, -7, 0],
          rotate: [-16, -14, -16],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-6 left-[2%] sm:left-[6%] w-[160px] sm:w-[220px] h-[130px] sm:h-[180px] opacity-30 dark:opacity-18 blur-[2px] sm:blur-[2.5px]"
      >
        <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#94A3B8] via-[#64748B] to-[#475569] shadow-xl p-4 flex flex-col justify-between text-left">
          <div className="absolute -top-3 left-5 w-20 h-5 rounded-t-xl bg-[#94A3B8]" />
          <div className="flex justify-between font-mono text-[11px] font-bold text-slate-100">
            <span>2024</span>
            <span>POLICY</span>
          </div>
          <div className="text-[10px] font-mono text-slate-300">RESEARCH</div>
        </div>
      </motion.div>

      {/* --- FOLDER 6: BOTTOM-RIGHT (Soft Lavender / Security Labs) --- */}
      <motion.div
        style={{ y: yLayer2 }}
        animate={{
          y: [0, -9, 0],
          rotate: [12, 10, 12],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.5,
        }}
        className="absolute bottom-2 right-[18%] sm:right-[26%] w-[150px] sm:w-[200px] h-[120px] sm:h-[160px] opacity-30 dark:opacity-18 blur-[2px]"
      >
        <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#A855F7] via-[#8B5CF6] to-[#7C3AED] shadow-xl p-4 flex flex-col justify-between text-left">
          <div className="absolute -top-3 right-5 w-18 h-5 rounded-t-xl bg-[#A855F7]" />
          <div className="flex justify-between font-mono text-[11px] font-bold text-purple-100">
            <span>LAB</span>
            <span>CVE-2024</span>
          </div>
          <div className="text-[10px] font-mono text-purple-200/80">AUDIT</div>
        </div>
      </motion.div>
    </div>
  );
};
