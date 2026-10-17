import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, BarChart2, Clock, Settings, User, ChevronDown } from 'lucide-react';

export const MakroDashboard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[620px] mx-auto select-none">
      {/* 3D Perspective Tilt Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 6, rotateY: -6 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[32px] bg-[#FAFAFA] dark:bg-[#111520] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_30px_70px_rgba(0,0,0,0.12)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.6)] p-5 sm:p-7 text-left overflow-hidden relative"
      >
        {/* Top Header of Dashboard */}
        <div className="flex items-center justify-between pb-5 border-b border-neutral-200/60 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Projected Security Score
              </h3>
            </div>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
              No negative security breaches expected
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5 shadow-2xs">
              <span>Next 30 days</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
            </span>
          </div>
        </div>

        {/* Dashboard Grid Content */}
        <div className="grid grid-cols-12 gap-4 pt-5">
          {/* Mini Left Navigation Bar */}
          <div className="col-span-1 hidden sm:flex flex-col items-center justify-between py-2 border-r border-neutral-200/60 dark:border-neutral-800 pr-3">
            <div className="space-y-4">
              <div className="w-8 h-8 rounded-xl bg-[#D2F824] text-black flex items-center justify-center font-bold shadow-xs">
                <LayoutGrid className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-xl text-neutral-400 hover:text-neutral-900 flex items-center justify-center">
                <BarChart2 className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-xl text-neutral-400 hover:text-neutral-900 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-xl text-neutral-400 hover:text-neutral-900 flex items-center justify-center">
                <Settings className="w-4 h-4" />
              </div>
            </div>
            <div className="w-8 h-8 rounded-xl text-neutral-400 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
          </div>

          {/* Center Main Chart Card */}
          <div className="col-span-12 sm:col-span-11 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Main Metric & Curve Area */}
              <div className="md:col-span-7 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#161B28] border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-neutral-400 font-medium font-sans">
                    Defended Assets
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold">
                    +18%
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3">
                  $27,500 <span className="text-xs font-normal text-neutral-400 font-mono">audited</span>
                </div>

                {/* SVG Mountain / Area Graph with smooth curve */}
                <div className="h-28 w-full pt-2">
                  <svg viewBox="0 0 300 90" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="1">
                        <stop offset="0%" stopColor="#D2F824" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#D2F824" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 70 Q 50 65 90 40 T 170 30 T 240 20 L 300 15 L 300 90 L 0 90 Z"
                      fill="url(#chartGrad)"
                    />
                    <path
                      d="M 0 70 Q 50 65 90 40 T 170 30 T 240 20 L 300 15"
                      fill="none"
                      stroke="#18181B"
                      strokeWidth="2.5"
                      className="dark:stroke-white"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  <span>Dec 1</span>
                  <span>Dec 7</span>
                  <span>Dec 14</span>
                  <span>Dec 21</span>
                  <span>Dec 28</span>
                </div>
              </div>

              {/* Side Stack Widgets */}
              <div className="md:col-span-5 space-y-3 flex flex-col justify-between">
                {/* Safe Buffer */}
                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#161B28] border border-neutral-200/80 dark:border-neutral-800 shadow-sm text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-neutral-800 dark:text-neutral-200">
                      System Buffer
                    </span>
                    <span className="text-[9px] font-mono text-emerald-600 font-bold">+12%</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 block mb-1">Zero vulnerabilities</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-neutral-900 dark:text-white">82%</span>
                    <span className="text-emerald-500 text-xs">🛡️</span>
                  </div>
                </div>

                {/* Threat Reduction */}
                <div className="p-3.5 rounded-2xl bg-white dark:bg-[#161B28] border border-neutral-200/80 dark:border-neutral-800 shadow-sm text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-neutral-800 dark:text-neutral-200">
                      Reduction
                    </span>
                    <span className="text-[9px] font-mono text-emerald-600 font-bold">+6%</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 block mb-1">Incident rate drop</span>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-neutral-900 dark:text-white">96%</span>
                    <span className="text-emerald-500 text-xs">📉</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Sources Bar */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#161B28] border border-neutral-200/80 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-300">
              <span className="text-[10px] font-mono uppercase font-bold text-neutral-400 block mb-2">
                Security Sources & Audits:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>Web App Penetration Testing</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>Linux SUID PrivEsc Labs</span>
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>CHTAP Cyber Hygiene</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
