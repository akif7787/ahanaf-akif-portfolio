import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  Sun,
  Moon,
  Camera,
  RefreshCw,
  ShieldCheck,
  Terminal,
  ExternalLink,
  Laptop,
  CheckCircle2,
  Sparkles,
  Award,
  Layers,
  FileText,
  Lock,
  Cpu,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutMeSectionProps {
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
  onOpenContact?: () => void;
  onOpenCV?: () => void;
}

export const AboutMeSection: React.FC<AboutMeSectionProps> = ({
  darkMode = false,
  onToggleDarkMode,
  onOpenContact,
  onOpenCV,
}) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved =
      localStorage.getItem('ahanaf_akif_hero_chair_photo') ||
      localStorage.getItem('ahanaf_akif_portrait');
    if (saved) {
      setCustomPhoto(saved);
    }

    const handleStorageChange = () => {
      const updated =
        localStorage.getItem('ahanaf_akif_hero_chair_photo') ||
        localStorage.getItem('ahanaf_akif_portrait');
      setCustomPhoto(updated);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setCustomPhoto(base64);
      localStorage.setItem('ahanaf_akif_portrait', base64);
      localStorage.setItem('ahanaf_akif_hero_chair_photo', base64);
    };
    reader.readAsDataURL(file);
  };

  const handleResetPhoto = () => {
    setCustomPhoto(null);
    localStorage.removeItem('ahanaf_akif_portrait');
    localStorage.removeItem('ahanaf_akif_hero_chair_photo');
  };

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 w-full px-4 sm:px-6 lg:px-8 xl:px-12 text-left overflow-hidden bg-[#F4F5F7] dark:bg-[#0B0E14] transition-colors duration-300"
    >
      {/* Background soft ambient blur spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/5 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/5 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* TOP TITLE HEADER (MATCHING "Daniel Evans" IN IMAGE.PNG)                    */}
        {/* ========================================================================= */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
          >
            {PERSONAL_INFO.fullName}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400 mt-1.5"
          >
            M.Sc. Software Engineering · Offensive Security &amp; Red Team Researcher
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* BENTO GRID (REPLICATING USER'S IMAGE.PNG LAYOUT EXACTLY)                  */}
        {/* 3 Columns: [About + LinkedIn + Services] | [Avatar + Experience] | [Case Studies] */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          {/* ======================================================================= */}
          {/* COLUMN 1: LEFT SIDE (lg:col-span-4)                                     */}
          {/* - Card 1: About Card (Bio)                                              */}
          {/* - Card 2: LinkedIn Square                                               */}
          {/* - Card 3: Services / Specializations Card                               */}
          {/* ======================================================================= */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            {/* --- CARD 1: ABOUT BIO CARD (Matching image.png Top-Left) --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] bg-white dark:bg-[#121620] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] p-6 sm:p-7 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                {/* Green "About" Pill Badge (Matching image.png) */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#CCFF00] dark:bg-[#D2F824] text-neutral-950 font-bold text-xs shadow-2xs mb-5">
                  About
                </div>

                <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-sans">
                  MSc Software Engineering scholar (Major in Cyber Security) based in Dhaka, driven by offensive security, penetration testing, and building resilient systems across Linux environments, web security, and Red Team operations.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>Dhaka, Bangladesh</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Available for Roles</span>
              </div>
            </motion.div>

            {/* --- CARD 2: LINKEDIN SQUARE CARD (Matching image.png Mid-Left) --- */}
            <motion.a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="relative block rounded-[32px] bg-[#90D5FF] dark:bg-[#1A4368] p-6 sm:p-7 aspect-square sm:aspect-4/3 lg:aspect-square flex items-center justify-center group overflow-hidden shadow-[0_10px_30px_rgba(144,213,255,0.25)] hover:shadow-[0_16px_40px_rgba(144,213,255,0.4)] transition-all duration-300"
              title="Visit LinkedIn Profile"
            >
              {/* Subtle ambient lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />

              {/* Big White "in" Logo in center */}
              <div className="text-white font-extrabold text-7xl sm:text-8xl select-none tracking-tighter group-hover:scale-105 transition-transform duration-300">
                in
              </div>

              {/* Bottom Right Arrow Button (Matching image.png) */}
              <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-900 dark:text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </div>

              <div className="absolute top-5 left-5 text-[11px] font-mono font-bold tracking-wider uppercase text-white/80">
                Connect
              </div>
            </motion.a>

            {/* --- CARD 3: SERVICES / SPECIALIZATIONS CARD (Matching image.png Bottom-Left) --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="rounded-[32px] bg-white dark:bg-[#121620] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] p-6 sm:p-7"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#CCFF00] dark:bg-[#D2F824] text-neutral-950 font-bold text-xs shadow-2xs mb-4">
                Services
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-900 dark:text-white block">
                      Offensive Security &amp; Red Team
                    </span>
                    <span className="text-neutral-500 text-[11px]">
                      Vulnerability exploitation, SUID &amp; Linux PrivEsc
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                  <Terminal className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-900 dark:text-white block">
                      Web &amp; Network Penetration Testing
                    </span>
                    <span className="text-neutral-500 text-[11px]">
                      OWASP Top 10, automated vulnerability telemetry
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                  <Lock className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-neutral-900 dark:text-white block">
                      Zero Trust &amp; Cyber Hygiene
                    </span>
                    <span className="text-neutral-500 text-[11px]">
                      CHTAP verified, access hardening &amp; MFA
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ======================================================================= */}
          {/* COLUMN 2: MIDDLE (lg:col-span-4)                                        */}
          {/* - Card 4: Circular Rotating Avatar Card ("Available for Work")         */}
          {/* - Card 5: Experience Timeline List with built-in Theme Toggle           */}
          {/* ======================================================================= */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            {/* --- CARD 4: AVATAR CARD WITH ROTATING TEXT (Matching image.png Top-Center) --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-[32px] bg-white dark:bg-[#121620] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] p-6 sm:p-7 flex flex-col items-center justify-center min-h-[260px] relative group"
            >
              {/* Hidden file input for uploading custom photo */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                accept="image/*"
                className="hidden"
              />

              {/* Photo Controls on hover */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="p-1.5 rounded-full bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:scale-105 transition-transform cursor-pointer"
                  title="Upload custom portrait"
                >
                  <Camera className="w-3.5 h-3.5" />
                </button>
                {customPhoto && (
                  <button
                    onClick={handleResetPhoto}
                    className="p-1.5 rounded-full bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:scale-105 transition-transform cursor-pointer"
                    title="Reset photo"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Rotating Circular Text Container (Replicating user's image.png badge!) */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                {/* Rotating SVG with curved circular text */}
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full pointer-events-none select-none"
                >
                  <defs>
                    <path
                      id="avatarTextPath"
                      d="M 100, 100 m -68, 0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0"
                    />
                  </defs>
                  <text className="text-[11px] font-mono font-bold tracking-[3px] uppercase fill-neutral-500 dark:fill-neutral-400">
                    <textPath href="#avatarTextPath" startOffset="0%">
                      • AVAILABLE FOR WORK • RED TEAM &amp; CYBER •
                    </textPath>
                  </text>
                </motion.svg>

                {/* Inner Circular Avatar with warm coral/orange backdrop (Matching image.png!) */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gradient-to-tr from-[#E96841] via-[#F57B52] to-[#FF9364] flex items-center justify-center shadow-inner border-2 border-white dark:border-[#121620]">
                  {customPhoto ? (
                    <img
                      src={customPhoto}
                      alt={PERSONAL_INFO.fullName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    /* Default Illustrated Character matching image.png (Man with cap & smile) */
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Gradient background */}
                      <circle cx="50" cy="50" r="50" fill="url(#coralGrad)" />
                      <defs>
                        <linearGradient id="coralGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#E96841" />
                          <stop offset="100%" stopColor="#FA8C68" />
                        </linearGradient>
                      </defs>

                      {/* Torso */}
                      <path
                        d="M 22 95 C 22 75, 78 75, 78 95 Z"
                        fill="#2E3C2B"
                      />
                      {/* Shirt collar */}
                      <path
                        d="M 40 76 L 50 86 L 60 76 Z"
                        fill="#F3E5AB"
                      />
                      {/* Neck */}
                      <rect x="44" y="65" width="12" height="15" rx="3" fill="#E6A883" />

                      {/* Head */}
                      <ellipse cx="50" cy="52" rx="17" ry="20" fill="#E6A883" />
                      {/* Ears */}
                      <circle cx="33" cy="53" r="4.5" fill="#E6A883" />
                      <circle cx="67" cy="53" r="4.5" fill="#E6A883" />

                      {/* Eyes */}
                      <circle cx="44" cy="51" r="2" fill="#1C1B1F" />
                      <circle cx="56" cy="51" r="2" fill="#1C1B1F" />

                      {/* Smile */}
                      <path
                        d="M 44 60 Q 50 66 56 60"
                        stroke="#1C1B1F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                      />

                      {/* Stubble / Beard outline */}
                      <path
                        d="M 37 54 C 37 68, 63 68, 63 54"
                        stroke="#C48460"
                        strokeWidth="2.5"
                        strokeDasharray="1.5 2"
                        fill="none"
                      />

                      {/* Green Baseball Cap (Matching image.png!) */}
                      <path
                        d="M 32 44 C 32 30, 68 30, 68 44 Z"
                        fill="#3C4F37"
                      />
                      {/* Cap Visor */}
                      <path
                        d="M 28 44 Q 50 36 72 44 Q 58 48 28 44 Z"
                        fill="#2D3B2A"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </motion.div>

            {/* --- CARD 5: EXPERIENCE TIMELINE CARD (Matching image.png Middle-Center) --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="rounded-[32px] bg-white dark:bg-[#121620] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Green "Experience" Pill Badge (Matching image.png) */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#CCFF00] dark:bg-[#D2F824] text-neutral-950 font-bold text-xs shadow-2xs mb-5">
                  Experience
                </div>

                {/* Experience Rows (Exact structure as image.png) */}
                <div className="space-y-4">
                  {/* Role 1 */}
                  <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-neutral-100 dark:border-neutral-800/80">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                        M.Sc. Cyber Security
                      </h4>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        Daffodil Int. University
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap">
                      2024 - Present
                    </span>
                  </div>

                  {/* Role 2 */}
                  <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-neutral-100 dark:border-neutral-800/80">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                        Operations Coordinator
                      </h4>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        BCS ICT FEST 2026
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap">
                      2026
                    </span>
                  </div>

                  {/* Role 3 */}
                  <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-neutral-100 dark:border-neutral-800/80">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                        Growth &amp; Cyber Safety
                      </h4>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        Branddora
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap">
                      2025
                    </span>
                  </div>

                  {/* Role 4 */}
                  <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-neutral-100 dark:border-neutral-800/80">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                        Brand Architect
                      </h4>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        Digital Soft Zone
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap">
                      2024
                    </span>
                  </div>

                  {/* Role 5 */}
                  <div className="flex items-baseline justify-between gap-2">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                        Creative Design
                      </h4>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                        FNF Soft
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400 whitespace-nowrap">
                      2023 - 2024
                    </span>
                  </div>
                </div>
              </div>

              {/* Theme Toggle Capsule at Bottom (Replicating exact Sun/Moon capsule in image.png!) */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-center">
                <button
                  onClick={onToggleDarkMode}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-2xs hover:scale-105 active:scale-95 transition-all cursor-pointer text-xs font-mono"
                  title="Toggle Light / Dark Mode"
                >
                  <Sun
                    className={`w-3.5 h-3.5 transition-colors ${
                      !darkMode
                        ? 'text-amber-500 stroke-[2.5]'
                        : 'text-neutral-400'
                    }`}
                  />
                  <span className="text-[10px] text-neutral-400">/</span>
                  <Moon
                    className={`w-3.5 h-3.5 transition-colors ${
                      darkMode
                        ? 'text-sky-400 stroke-[2.5]'
                        : 'text-neutral-400'
                    }`}
                  />
                </button>
              </div>
            </motion.div>
          </div>

          {/* ======================================================================= */}
          {/* COLUMN 3: RIGHT SIDE (lg:col-span-4)                                    */}
          {/* - Card 6: Case Study Card (Tilted Tablet/iPad Mockup)                   */}
          {/* - Card 7: Case Study Card (Phone Mockup)                                */}
          {/* ======================================================================= */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            {/* --- CARD 6: CASE STUDY 1 WITH TILTED TABLET (Matching image.png Top-Right) --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-[32px] bg-white dark:bg-[#121620] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden group min-h-[360px]"
            >
              <div>
                {/* Green "Case Study" Pill Badge (Matching image.png) */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#CCFF00] dark:bg-[#D2F824] text-neutral-950 font-bold text-xs shadow-2xs mb-4">
                  Case Study
                </div>

                {/* Tilted Perspective Tablet Mockup (Matching image.png!) */}
                <div className="relative w-full h-44 sm:h-48 my-2 flex items-center justify-center">
                  <div className="relative w-[85%] h-full rounded-2xl bg-neutral-900 border-4 border-neutral-800 shadow-2xl rotate-[-8deg] group-hover:rotate-[-4deg] group-hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col justify-between p-2.5">
                    {/* Tablet Screen Header */}
                    <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800 text-[9px] font-mono text-neutral-400">
                      <span className="text-emerald-400 font-bold">eBPF Telemetry</span>
                      <span>v1.4</span>
                    </div>

                    {/* Tablet Screen Content */}
                    <div className="my-auto py-2 px-1 text-left space-y-1">
                      <div className="text-[11px] font-bold text-white tracking-tight">
                        Microservice Vuln Monitor
                      </div>
                      <div className="text-[9px] text-neutral-400 line-clamp-2">
                        Real-time kernel audit hook tracing syscall telemetry &amp; MITRE matrix.
                      </div>
                      {/* Mini Telemetry Bars */}
                      <div className="flex gap-1 pt-1">
                        <div className="h-1 flex-1 rounded bg-emerald-500" />
                        <div className="h-1 flex-1 rounded bg-emerald-500" />
                        <div className="h-1 flex-1 rounded bg-emerald-500/40" />
                        <div className="h-1 flex-1 rounded bg-emerald-500/20" />
                      </div>
                    </div>

                    {/* Tablet Screen Footer */}
                    <div className="pt-1 border-t border-neutral-800 flex items-center justify-between text-[8px] font-mono text-neutral-500">
                      <span>Undergraduate Defense</span>
                      <span className="text-emerald-400">PASSED</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Subtitle Below Mockup (Matching image.png!) */}
              <div className="pt-3">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
                  Microservice Vuln Telemetry
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Automated security detection in containerized systems
                </p>
              </div>
            </motion.div>

            {/* --- CARD 7: CASE STUDY 2 WITH PHONE MOCKUP (Matching image.png Bottom-Right) --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="rounded-[32px] bg-white dark:bg-[#121620] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden group min-h-[320px]"
            >
              <div>
                {/* Green "Case Study" Pill Badge (Matching image.png) */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#CCFF00] dark:bg-[#D2F824] text-neutral-950 font-bold text-xs shadow-2xs mb-4">
                  Case Study
                </div>

                {/* Tilted Phone Mockup (Matching image.png!) */}
                <div className="relative w-full h-36 sm:h-40 my-1 flex items-center justify-center">
                  <div className="relative w-44 sm:w-48 h-full rounded-2xl bg-neutral-950 border-3 border-neutral-800 shadow-xl rotate-[6deg] group-hover:rotate-[2deg] group-hover:scale-105 transition-all duration-300 p-2 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400 px-1">
                      <span>9:41</span>
                      <span className="text-red-400 font-bold">TryHackMe</span>
                    </div>

                    <div className="text-center py-1">
                      <div className="text-[10px] font-bold text-white">Top 10% Global</div>
                      <div className="text-[8px] text-neutral-400">45+ Exploit Rooms Cleared</div>
                      <div className="mt-1 text-[9px] font-mono text-emerald-400 font-bold">
                        Rank #23,410
                      </div>
                    </div>

                    <div className="h-1 w-12 bg-neutral-700 rounded-full mx-auto" />
                  </div>
                </div>
              </div>

              {/* Title & Subtitle Below Mockup */}
              <div className="pt-2">
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
                  TryHackMe Red Team Drills
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Hands-on Linux PrivEsc &amp; Network Exploitation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
