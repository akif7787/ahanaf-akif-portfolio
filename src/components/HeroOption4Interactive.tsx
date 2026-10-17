import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  ArrowRight,
  Camera,
  RefreshCw,
  FileText,
} from 'lucide-react';

interface HeroOption4InteractiveProps {
  heroOption: 1 | 2 | 3 | 4;
  setHeroOption: (opt: 1 | 2 | 3 | 4) => void;
  customPhoto: string | null;
  onPhotoUpload: (file: File) => void;
  onResetPhoto: () => void;
  onOpenContact: () => void;
  onOpenCV?: () => void;
}

export const HeroOption4Interactive: React.FC<HeroOption4InteractiveProps> = ({
  heroOption,
  setHeroOption,
  customPhoto,
  onPhotoUpload,
  onResetPhoto,
  onOpenContact,
  onOpenCV,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageError, setImageError] = useState(false);
  const candidateImages = [
    '/ChatGPT_Image_Sep_3__2026__02_13_33_AM-removebg-preview.png',
    '/ahanaf-portrait.png',
  ];
  const [candidateIdx, setCandidateIdx] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onPhotoUpload(file);
      setImageError(false);
    }
  };

  const handleImgError = () => {
    if (candidateIdx < candidateImages.length - 1) {
      setCandidateIdx((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const hasRealPhoto = customPhoto || (!imageError && candidateIdx < candidateImages.length);

  // ---------------------------------------------------------------------------
  // SMOOTH MOUSE TRACKING & BUTTERY SPRING 3D INTERACTION (Framer / Webflow Style)
  // ---------------------------------------------------------------------------
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 24, stiffness: 120, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Perspective Tilt on Mouse Movement
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);

  // Translation Parallax for Picture
  const portraitTranslateX = useTransform(smoothX, [-0.5, 0.5], [-32, 32]);
  const portraitTranslateY = useTransform(smoothY, [-0.5, 0.5], [-24, 24]);

  // Giant Header Backdrop Text Inverse Parallax (Deeper dimensional depth)
  const bgHeaderX = useTransform(smoothX, [-0.5, 0.5], [45, -45]);
  const bgHeaderY = useTransform(smoothY, [-0.5, 0.5], [25, -25]);

  // Dynamic Contact Shadow Movement
  const shadowTranslateX = useTransform(smoothX, [-0.5, 0.5], [35, -35]);
  const shadowScale = useTransform(smoothY, [-0.5, 0.5], [0.92, 1.08]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[740px] lg:min-h-[790px] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Hidden file input for custom photo upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* ========================================================================= */}
      {/* PURE CLEAN BACKGROUND (White in Light Mode / Deep Obsidian in Dark Mode) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-white dark:bg-[#090A0F] transition-colors duration-300">
        {/* Very subtle ultra-fine radial highlight at center for visual polish */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.015)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_0%,transparent_70%)]" />
      </div>

      {/* ========================================================================= */}
      {/* GIANT BACKDROP HEADER TYPOGRAPHY (\"AHANAF AKIF\" Monumental Banner)        */}
      {/* Smoothly responds to mouse in opposite parallax to create vast 3D room     */}
      {/* ========================================================================= */}
      <div className="absolute inset-x-0 top-16 sm:top-18 md:top-20 z-0 pointer-events-none flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ x: bgHeaderX, y: bgHeaderY }}
          className="w-full text-center flex flex-col items-center justify-center"
        >
          <span className="text-[14vw] sm:text-[13vw] md:text-[12.5vw] font-black tracking-tighter uppercase leading-[0.82] select-none text-neutral-900/[0.045] dark:text-white/[0.05] whitespace-nowrap transition-colors">
            AHANAF AKIF
          </span>
          <span className="text-[4vw] sm:text-[3.2vw] font-black tracking-[0.3em] uppercase leading-none select-none text-neutral-900/[0.025] dark:text-white/[0.03] whitespace-nowrap -mt-2 sm:-mt-4">
            BREAK · BUILD · SECURE
          </span>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* TOP CONTROLS: Minimal Option Switcher                                     */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center flex flex-col items-center space-y-3 sm:space-y-4 pt-2 sm:pt-4">
        {/* Simple Minimal Switcher */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 shadow-2xs backdrop-blur-md">
          <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
            Style:
          </span>
          <div className="flex items-center gap-1">
            {([1, 2, 3, 4] as const).map((num) => {
              const isActive = heroOption === num;
              return (
                <button
                  key={num}
                  onClick={() => setHeroOption(num)}
                  className={`w-5 h-5 rounded-full text-[10px] font-bold transition-all duration-200 flex items-center justify-center cursor-pointer ${
                    isActive
                      ? 'bg-[#D2F824] text-black shadow-xs scale-105'
                      : 'bg-neutral-200 text-neutral-600 hover:text-black dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-white'
                  }`}
                  title={`Switch to Hero Option ${num}`}
                >
                  {num}
                </button>
              );
            })}
          </div>
        </div>

        {/* Foreground Headline */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.1] flex items-center justify-center flex-wrap gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-2">
              <span>Hey</span>
              <span className="inline-block animate-wave origin-[70%_70%] select-none hover:scale-110 transition-transform cursor-default">
                👋
              </span>
              <span className="-ml-0.5">,</span>
            </span>
            <span>I'm Ahanaf Akif</span>
          </h1>
          <p className="text-base sm:text-xl font-medium text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto">
            Software Engineer &amp; Offensive Security Explorer
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <a
            href="#projects"
            className="inline-flex items-center pl-1.5 pr-5 py-1.5 rounded-full bg-[#18191E] dark:bg-white text-white dark:text-black font-semibold text-xs sm:text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 shadow-md group cursor-pointer active:scale-95"
          >
            <div className="w-8 h-8 rounded-full bg-[#D2F824] text-black flex items-center justify-center font-bold mr-2.5 shadow-sm group-hover:scale-105 transition-transform">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </div>
            <span>Explore Projects</span>
          </a>
          {onOpenCV && (
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all font-medium text-xs sm:text-sm cursor-pointer border border-neutral-300/80 dark:border-neutral-700"
            >
              <FileText className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              <span>Resume / CV</span>
            </button>
          )}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-black dark:hover:border-white transition-all font-medium text-xs sm:text-sm cursor-pointer"
          >
            <span>Contact Me</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3D INTERACTIVE PORTRAIT STAGE: Reacts smoothly to mouse movement           */}
      {/* Clean without distracting floating badges                                 */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex items-end justify-center pt-6 sm:pt-8 pb-0">
        {/* 3D Preserved Perspective Stage */}
        <div
          className="relative w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px] aspect-[4/5] flex items-end justify-center group"
          style={{ perspective: '1100px' }}
        >
          {/* Hover Photo Upload / Reset button */}
          <div className="absolute top-4 right-4 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-neutral-900/95 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-md backdrop-blur-md text-xs font-medium flex items-center gap-1.5 hover:border-black dark:hover:border-white transition-all cursor-pointer"
              title="Upload your transparent portrait PNG"
            >
              <Camera className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
              <span>Change Photo</span>
            </button>
            {customPhoto && (
              <button
                onClick={onResetPhoto}
                className="p-1.5 rounded-full bg-white/95 dark:bg-neutral-900/95 text-neutral-500 hover:text-red-500 border border-neutral-200 dark:border-neutral-700 shadow-md backdrop-blur-md transition-colors cursor-pointer"
                title="Reset photo"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Dynamic Interactive Studio Floor Shadow */}
          <motion.div
            style={{
              x: shadowTranslateX,
              scale: shadowScale,
            }}
            className="absolute -bottom-3 inset-x-12 h-12 bg-neutral-950/20 dark:bg-black/70 blur-xl rounded-[100%] pointer-events-none -z-10"
          />

          {/* --- THE MAIN USER PORTRAIT CONTAINER WITH FULL 3D TILT & MOUSE FOLLOW --- */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              x: portraitTranslateX,
              y: portraitTranslateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative z-20 w-full h-full flex items-end justify-center will-change-transform pb-0 cursor-grab active:cursor-grabbing"
          >
            {hasRealPhoto ? (
              <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
                <img
                  src={customPhoto || candidateImages[candidateIdx]}
                  alt="Mohammed Ahanaf Akif"
                  referrerPolicy="no-referrer"
                  onError={handleImgError}
                  className="w-full h-full object-contain object-bottom filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] contrast-[1.03] transition-all"
                  style={{
                    maskImage:
                      'linear-gradient(to bottom, black 0%, black 88%, rgba(0,0,0,0.85) 95%, transparent 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, black 0%, black 88%, rgba(0,0,0,0.85) 95%, transparent 100%)',
                  }}
                />
              </div>
            ) : (
              /* Fallback High-Fidelity Vector Cutout */
              <div
                className="relative w-full h-full flex items-end justify-center overflow-hidden filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.2)]"
                style={{
                  maskImage:
                    'linear-gradient(to bottom, black 0%, black 88%, rgba(0,0,0,0.85) 95%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 0%, black 88%, rgba(0,0,0,0.85) 95%, transparent 100%)',
                }}
              >
                <svg
                  viewBox="0 0 500 580"
                  className="w-full h-full object-contain object-bottom"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="opt4Skin" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F7D3BA" />
                      <stop offset="50%" stopColor="#E9B797" />
                      <stop offset="100%" stopColor="#C98F6B" />
                    </linearGradient>
                    <linearGradient id="opt4Turtleneck" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#25262B" />
                      <stop offset="35%" stopColor="#18191D" />
                      <stop offset="100%" stopColor="#08080A" />
                    </linearGradient>
                    <linearGradient id="opt4Hair" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2C231E" />
                      <stop offset="60%" stopColor="#181311" />
                      <stop offset="100%" stopColor="#080706" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 60 580 C 70 420 120 375 185 365 L 315 365 C 380 375 430 420 440 580 Z"
                    fill="url(#opt4Turtleneck)"
                  />
                  <path
                    d="M 190 320 C 190 305 210 295 250 295 C 290 295 310 305 310 320 L 315 375 C 305 385 285 390 250 390 C 215 390 195 385 185 375 Z"
                    fill="url(#opt4Turtleneck)"
                    stroke="#2F3136"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M 215 250 L 215 310 C 230 318 270 318 285 310 L 285 250 Z"
                    fill="#C48967"
                  />
                  <path
                    d="M 225 250 L 225 305 C 235 312 265 312 275 305 L 275 250 Z"
                    fill="url(#opt4Skin)"
                  />
                  <ellipse cx="178" cy="215" rx="11" ry="18" fill="#C48967" />
                  <ellipse cx="322" cy="215" rx="11" ry="18" fill="#C48967" />
                  <path
                    d="M 185 160 C 180 215 190 268 220 282 C 235 288 265 288 280 282 C 310 268 320 215 315 160 C 310 115 285 95 250 95 C 215 95 190 115 185 160 Z"
                    fill="url(#opt4Skin)"
                  />
                  <path
                    d="M 180 155 C 175 110 195 75 240 68 C 280 62 315 78 322 120 C 326 142 324 165 320 170 C 316 150 310 128 298 120 C 285 112 265 114 250 118 C 230 123 205 130 188 152 Z"
                    fill="url(#opt4Hair)"
                  />
                  <path
                    d="M 205 174 Q 222 168 234 175"
                    stroke="#1E1612"
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 266 175 Q 278 168 295 174"
                    stroke="#1E1612"
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <ellipse cx="221" cy="190" rx="6" ry="4" fill="#1C140F" />
                  <ellipse cx="279" cy="190" rx="6" ry="4" fill="#1C140F" />
                  <circle cx="222.5" cy="189" r="1.5" fill="#FFFFFF" />
                  <circle cx="280.5" cy="189" r="1.5" fill="#FFFFFF" />
                  <path
                    d="M 248 178 L 246 215 Q 242 222 250 222 Q 258 222 254 215"
                    stroke="#B67B58"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 235 238 C 242 235 248 236 250 238 C 252 236 258 235 265 238 C 262 242 255 243 250 241 C 245 243 238 242 235 238 Z"
                    fill="#241B16"
                    opacity="0.85"
                  />
                  <path
                    d="M 236 248 Q 250 256 264 248"
                    stroke="#A85743"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Interactive Hint Pill at Bottom */}
      <div className="relative z-20 w-full flex items-center justify-center pt-2 pb-1">
        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 bg-neutral-100/70 dark:bg-neutral-900/70 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">
          ✦ Move mouse across screen to explore 3D portrait perspective
        </span>
      </div>
    </div>
  );
};
