import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectItem } from '../types';
import { ArrowRight, Shield, CheckCircle2, FileText } from 'lucide-react';

interface ProjectFolderCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectFolderCard: React.FC<ProjectFolderCardProps> = ({
  project,
  index,
  onSelect,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTheme = () => {
    switch (index % 6) {
      case 0:
        return {
          backFlap: 'bg-gradient-to-b from-[#F59E0B] to-[#D97706]',
          frontFlap: 'bg-gradient-to-br from-[#FBBF24] via-[#F59E0B] to-[#EA580C]',
          tabColor: 'bg-[#FBBF24]',
          shadow: 'shadow-[0_20px_45px_rgba(245,158,11,0.32)]',
          glow: 'bg-amber-400/20',
          folderLabel: 'LAB 01',
          codeText: 'text-amber-300',
          pillBg: 'bg-amber-950/50 text-amber-100',
        };
      case 1:
        return {
          backFlap: 'bg-gradient-to-b from-[#2563EB] to-[#1D4ED8]',
          frontFlap: 'bg-gradient-to-br from-[#38BDF8] via-[#2563EB] to-[#1E40AF]',
          tabColor: 'bg-[#38BDF8]',
          shadow: 'shadow-[0_20px_45px_rgba(37,99,235,0.32)]',
          glow: 'bg-blue-400/20',
          folderLabel: 'LAB 02',
          codeText: 'text-cyan-300',
          pillBg: 'bg-blue-950/50 text-blue-100',
        };
      case 2:
        return {
          backFlap: 'bg-gradient-to-b from-[#E11D48] to-[#BE123C]',
          frontFlap: 'bg-gradient-to-br from-[#FB7185] via-[#E11D48] to-[#9F1239]',
          tabColor: 'bg-[#FB7185]',
          shadow: 'shadow-[0_20px_45px_rgba(225,29,72,0.32)]',
          glow: 'bg-rose-400/20',
          folderLabel: 'RESEARCH 03',
          codeText: 'text-rose-300',
          pillBg: 'bg-rose-950/50 text-rose-100',
        };
      case 3:
        return {
          backFlap: 'bg-gradient-to-b from-[#059669] to-[#047857]',
          frontFlap: 'bg-gradient-to-br from-[#34D399] via-[#059669] to-[#065F46]',
          tabColor: 'bg-[#34D399]',
          shadow: 'shadow-[0_20px_45px_rgba(5,150,105,0.32)]',
          glow: 'bg-emerald-400/20',
          folderLabel: 'HYGIENE 04',
          codeText: 'text-emerald-300',
          pillBg: 'bg-emerald-950/50 text-emerald-100',
        };
      case 4:
        return {
          backFlap: 'bg-gradient-to-b from-[#0284C7] to-[#0369A1]',
          frontFlap: 'bg-gradient-to-br from-[#38BDF8] via-[#0284C7] to-[#075985]',
          tabColor: 'bg-[#38BDF8]',
          shadow: 'shadow-[0_20px_45px_rgba(2,132,199,0.32)]',
          glow: 'bg-sky-400/20',
          folderLabel: 'SENSOR 05',
          codeText: 'text-sky-300',
          pillBg: 'bg-sky-950/50 text-sky-100',
        };
      case 5:
      default:
        return {
          backFlap: 'bg-gradient-to-b from-[#7C3AED] to-[#6D28D9]',
          frontFlap: 'bg-gradient-to-br from-[#A78BFA] via-[#7C3AED] to-[#5B21B6]',
          tabColor: 'bg-[#A78BFA]',
          shadow: 'shadow-[0_20px_45px_rgba(124,58,237,0.32)]',
          glow: 'bg-purple-400/20',
          folderLabel: 'DOMAIN 06',
          codeText: 'text-purple-300',
          pillBg: 'bg-purple-950/50 text-purple-100',
        };
    }
  };

  const theme = getTheme();

  return (
    <div
      onClick={() => onSelect(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="view"
      className="relative w-full max-w-[350px] mx-auto pt-16 sm:pt-20 pb-5 cursor-pointer select-none group"
    >
      {/* Soft rounded floor shadow */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/25 dark:bg-black/50 blur-lg rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-black/35" />

      {/* ROUNDED FOLDER BACK FLAP */}
      <div
        className={`absolute inset-x-2 sm:inset-x-2.5 bottom-5 top-14 sm:top-16 rounded-2xl sm:rounded-3xl ${theme.backFlap} shadow-md transition-transform duration-300`}
      >
        {/* Curved Top Tab */}
        <div className={`absolute -top-3 left-4 sm:left-5 w-22 h-5 rounded-t-xl sm:rounded-t-2xl ${theme.tabColor} flex items-center justify-center shadow-2xs`}>
          <span className="text-[8px] font-mono font-bold tracking-widest text-white uppercase drop-shadow-2xs">
            {theme.folderLabel}
          </span>
        </div>
      </div>

      {/* FLYING COMPONENTS (Rounded Smooth Cards) */}
      <div className="relative z-10 w-full h-[140px] sm:h-[155px] flex items-center justify-center">
        {/* COMPONENT 1: Terminal */}
        <motion.div
          animate={
            isHovered
              ? { y: -95, x: -55, rotate: -12, scale: 1.03 }
              : { y: 0, x: -18, rotate: -4, scale: 0.93 }
          }
          transition={{ type: 'spring', stiffness: 240, damping: 18 }}
          className="absolute z-10 w-[155px] sm:w-[178px] rounded-2xl bg-[#0F1117] border border-neutral-700/80 shadow-2xl p-2.5 text-left overflow-hidden pointer-events-none"
        >
          <div className="flex items-center justify-between pb-1 border-b border-neutral-800 text-[8px] font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>TERMINAL</span>
            </span>
            <span className="text-neutral-500">BASH</span>
          </div>
          <div className="py-1 space-y-0.5 font-mono text-[7.5px] leading-tight text-neutral-300">
            <p className={theme.codeText}>&gt; nmap -sC -sV target</p>
            <p className="text-neutral-400">80/tcp open http</p>
            <p className="text-emerald-400">CVE Audit: Confirmed</p>
          </div>
          <div className="flex items-center justify-between text-[7px] font-mono text-neutral-400 pt-0.5 border-t border-neutral-800">
            <span>OWASP TOP 10</span>
            <span className="text-emerald-400 font-bold">CLEARED</span>
          </div>
        </motion.div>

        {/* COMPONENT 2: Main Device Mockup */}
        <motion.div
          animate={
            isHovered
              ? { y: -125, x: 0, rotate: 0, scale: 1.07 }
              : { y: 0, x: 0, rotate: 1, scale: 1 }
          }
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="absolute z-20 w-[185px] sm:w-[218px] aspect-[16/10] rounded-2xl bg-white dark:bg-neutral-900 border-2 border-white/70 dark:border-neutral-700 shadow-2xl p-3 text-left flex flex-col justify-between overflow-hidden pointer-events-none"
        >
          <div className="flex items-center justify-between pb-1 border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[8px] font-mono text-neutral-500 truncate max-w-[100px]">
              {project.categoryTags[0] || 'Security Lab'}
            </span>
          </div>
          <div className="my-auto py-0.5 space-y-0.5">
            <span className="text-[7.5px] font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
              METRIC SNAPSHOT
            </span>
            <h4 className="text-xs font-bold text-neutral-900 dark:text-white truncate">
              {project.quote || project.title}
            </h4>
            <p className="text-[7.5px] text-neutral-500 dark:text-neutral-400 line-clamp-1">
              {project.description}
            </p>
          </div>
          <div className="flex items-center justify-between pt-0.5 border-t border-neutral-200 dark:border-neutral-800 text-[7.5px] font-mono">
            <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
              {project.stats?.[0]?.value || '100%'}
            </span>
            <span className="text-neutral-500">{project.stats?.[0]?.label || 'VERIFIED'}</span>
          </div>
        </motion.div>

        {/* COMPONENT 3: Memo Note */}
        <motion.div
          animate={
            isHovered
              ? { y: -100, x: 58, rotate: 13, scale: 1.03 }
              : { y: 0, x: 18, rotate: 5, scale: 0.93 }
          }
          transition={{ type: 'spring', stiffness: 240, damping: 18 }}
          className="absolute z-10 w-[138px] sm:w-[160px] h-[138px] sm:h-[155px] rounded-2xl bg-[#FEF08A] shadow-2xl p-2.5 text-neutral-900 text-left border border-amber-300 flex flex-col justify-between overflow-hidden pointer-events-none"
        >
          <div className="flex items-center justify-between text-[8px] font-mono text-amber-900 border-b border-amber-300 pb-0.5 font-bold">
            <span>AUDIT MEMO</span>
            <span className="text-[11px]">📝</span>
          </div>
          <div className="font-mono text-[7.5px] leading-tight text-neutral-800 space-y-0.5">
            <p className="font-bold flex items-center gap-1 text-emerald-800">
              <CheckCircle2 className="w-2 h-2 text-emerald-700" />
              <span>PrivEsc Vectors</span>
            </p>
            <p className="opacity-80">✔ SUID binary audit</p>
            <p className="opacity-80">✔ LinPEAS automation</p>
            <p className="opacity-80">✔ Auth bypass patch</p>
          </div>
          <div className="pt-0.5 border-t border-amber-300/80 flex items-center justify-between text-[7.5px] font-mono text-amber-950 font-bold">
            <span>TRYHACKME</span>
            <span className="text-emerald-800">TOP 10%</span>
          </div>
        </motion.div>

        {/* COMPONENT 4: Security Shield Badge */}
        <motion.div
          animate={
            isHovered
              ? { y: -52, x: -85, rotate: -18, scale: 0.95, opacity: 1 }
              : { y: 0, x: 0, rotate: 0, scale: 0.7, opacity: 0 }
          }
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
          className="absolute z-30 px-2.5 py-1 rounded-xl bg-neutral-900/95 text-white border border-neutral-700 shadow-2xl flex items-center gap-1.5 pointer-events-none backdrop-blur-md"
        >
          <div className="w-4 h-4 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Shield className="w-2.5 h-2.5" />
          </div>
          <div className="text-left font-mono">
            <span className="text-[6.5px] text-neutral-400 block leading-none">SEVERITY AUDIT</span>
            <span className="text-[9.5px] font-bold text-emerald-400 leading-none">CVSS 8.9 FIXED</span>
          </div>
        </motion.div>

        {/* COMPONENT 5: Research Badge */}
        <motion.div
          animate={
            isHovered
              ? { y: -50, x: 85, rotate: 16, scale: 0.95, opacity: 1 }
              : { y: 0, x: 0, rotate: 0, scale: 0.7, opacity: 0 }
          }
          transition={{ type: 'spring', stiffness: 220, damping: 16 }}
          className="absolute z-30 px-2.5 py-1 rounded-xl bg-white/95 dark:bg-neutral-800/95 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 shadow-2xl flex items-center gap-1.5 pointer-events-none backdrop-blur-md"
        >
          <div className="w-4 h-4 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center">
            <FileText className="w-2.5 h-2.5" />
          </div>
          <div className="text-left font-mono">
            <span className="text-[6.5px] text-neutral-400 block leading-none">STATUS</span>
            <span className="text-[9.5px] font-bold text-blue-500 leading-none">PEER REVIEWED</span>
          </div>
        </motion.div>
      </div>

      {/* ROUNDED FOLDER FRONT FLAP */}
      <div className="relative z-40 -mt-10 sm:-mt-12">
        <div
          className={`relative rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 ${theme.frontFlap} ${theme.shadow} border border-white/40 backdrop-blur-md text-left transition-all duration-300 group-hover:scale-[1.01]`}
        >
          <div
            className={`absolute -top-3 left-4 sm:left-5 px-3 py-0.5 rounded-t-xl ${theme.tabColor} border-t border-l border-r border-white/50 shadow-xs`}
          >
            <span className="text-[8px] font-black text-white tracking-widest uppercase font-mono drop-shadow-xs">
              {theme.folderLabel}
            </span>
          </div>

          <div className="pt-1 flex items-end justify-between gap-2.5">
            <div className="space-y-0.5 max-w-[82%]">
              <span className="text-[9px] font-bold text-white/90 tracking-wider uppercase block font-mono">
                PROJECT // {project.categoryTags[0] || 'SECURITY'}
              </span>
              <h3 className="text-sm sm:text-base font-black text-white tracking-tight leading-tight line-clamp-1 drop-shadow-sm">
                {project.quote?.split(' ')[0] || project.title.split(' ')[0]} {project.quote?.split(' ')[1] || ''}
              </h3>
              <p className="text-[11px] text-white/95 line-clamp-1 font-medium drop-shadow-xs">
                {project.quote || project.title}
              </p>
            </div>
            <div className="shrink-0 mb-0.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-neutral-900 shadow-md">
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
