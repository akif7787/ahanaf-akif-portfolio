import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Upload, RefreshCw, X, Shield, Terminal, Sparkles, Check } from 'lucide-react';

interface HeroHeaderCapsuleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const HeroHeaderCapsule: React.FC<HeroHeaderCapsuleProps> = ({
  className = '',
}) => {
  const [image1, setImage1] = useState<string | null>(null);
  const [image2, setImage2] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);
  const fileInput1Ref = useRef<HTMLInputElement>(null);
  const fileInput2Ref = useRef<HTMLInputElement>(null);

  // Load saved images from localStorage
  useEffect(() => {
    const saved1 = localStorage.getItem('hero_capsule_image_1');
    const saved2 = localStorage.getItem('hero_capsule_image_2');
    if (saved1) setImage1(saved1);
    if (saved2) setImage2(saved2);
  }, []);

  const handleFileUpload = (slot: 1 | 2, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      if (slot === 1) {
        setImage1(base64);
        setImg1Error(false);
        localStorage.setItem('hero_capsule_image_1', base64);
      } else {
        setImage2(base64);
        setImg2Error(false);
        localStorage.setItem('hero_capsule_image_2', base64);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleReset = (slot?: 1 | 2) => {
    if (!slot || slot === 1) {
      setImage1(null);
      setImg1Error(false);
      localStorage.removeItem('hero_capsule_image_1');
    }
    if (!slot || slot === 2) {
      setImage2(null);
      setImg2Error(false);
      localStorage.removeItem('hero_capsule_image_2');
    }
  };

  const handleDrop = (e: React.DragEvent, slot: 1 | 2) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleFileUpload(slot, file);
    }
  };

  return (
    <>
      {/* Hidden File Inputs */}
      <input
        type="file"
        ref={fileInput1Ref}
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileUpload(1, file);
        }}
      />
      <input
        type="file"
        ref={fileInput2Ref}
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileUpload(2, file);
        }}
      />

      {/* Inline Phone Preview Mockup Capsule Pill */}
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
        className={`inline-flex items-center align-middle mx-1.5 sm:mx-2.5 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-[20px] sm:rounded-[24px] md:rounded-[26px] bg-neutral-950 dark:bg-[#07090E] border border-neutral-700/80 shadow-[0_12px_32px_rgba(0,0,0,0.35)] gap-1.5 sm:gap-2 select-none cursor-pointer group relative transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:border-neutral-500/80 ${className}`}
        title="Click to view or customize hero mockup images"
      >
        {/* Subtle camera/edit indicator on hover */}
        <span className="absolute -top-2 -right-2 z-20 w-5 h-5 rounded-full bg-[#D2F824] text-black shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Camera className="w-3 h-3" />
        </span>

        {/* --- MINI PHONE SCREEN 1 --- */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, 1)}
          className="relative w-7 sm:w-8 md:w-9 h-10 sm:h-12 md:h-14 rounded-[7px] sm:rounded-[9px] overflow-hidden bg-neutral-900 border border-white/10 shadow-sm flex flex-col justify-between shrink-0 group/screen1"
        >
          {image1 && !img1Error ? (
            <div className="relative w-full h-full">
              <img
                src={image1}
                alt="Mockup Screen 1"
                referrerPolicy="no-referrer"
                onError={() => setImg1Error(true)}
                className="w-full h-full object-cover"
              />
              {/* Glossy top glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/30 pointer-events-none" />
              {/* Subtle speaker pill notch */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2.5 h-0.5 rounded-full bg-black/60 pointer-events-none" />
            </div>
          ) : (
            /* Pristine High-Fi Default Vector Screen 1 (Warm Amber / Red Team) */
            <div className="relative w-full h-full bg-gradient-to-b from-amber-400 via-orange-500 to-amber-600 p-0.5 sm:p-1 flex flex-col justify-between">
              {/* Top speaker notch */}
              <div className="w-2.5 h-0.5 rounded-full bg-black/40 mx-auto" />
              {/* Center Micro UI */}
              <div className="flex flex-col items-center justify-center my-auto space-y-0.5">
                <span className="text-[5px] sm:text-[6.5px] font-black text-black leading-none text-center font-mono tracking-tight">
                  RED TEAM
                </span>
                <div className="w-3.5 sm:w-4 h-0.5 bg-black/30 rounded-full" />
              </div>
              {/* Bottom Badge */}
              <div className="w-full h-2 sm:h-2.5 rounded-[3px] bg-black/25 flex items-center justify-center text-[5px] sm:text-[6px] text-white font-bold leading-none">
                TOP 5%
              </div>
            </div>
          )}
        </div>

        {/* --- MINI PHONE SCREEN 2 --- */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, 2)}
          className="relative w-7 sm:w-8 md:w-9 h-10 sm:h-12 md:h-14 rounded-[7px] sm:rounded-[9px] overflow-hidden bg-neutral-900 border border-white/10 shadow-sm flex flex-col justify-between shrink-0 group/screen2"
        >
          {image2 && !img2Error ? (
            <div className="relative w-full h-full">
              <img
                src={image2}
                alt="Mockup Screen 2"
                referrerPolicy="no-referrer"
                onError={() => setImg2Error(true)}
                className="w-full h-full object-cover"
              />
              {/* Glossy top glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/30 pointer-events-none" />
              {/* Subtle speaker pill notch */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2.5 h-0.5 rounded-full bg-black/60 pointer-events-none" />
            </div>
          ) : (
            /* Pristine High-Fi Default Vector Screen 2 (Icy Cyan / Defense Terminal) */
            <div className="relative w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 p-0.5 sm:p-1 flex flex-col justify-between">
              {/* Top speaker notch */}
              <div className="w-2.5 h-0.5 rounded-full bg-white/40 mx-auto" />
              {/* Center Micro UI */}
              <div className="flex flex-col items-center justify-center my-auto space-y-0.5">
                <span className="text-[5px] sm:text-[6.5px] font-black text-white leading-none text-center font-mono tracking-tight">
                  45+ LABS
                </span>
                <div className="w-3.5 sm:w-4 h-0.5 bg-white/30 rounded-full" />
              </div>
              {/* Bottom Badge */}
              <div className="w-full h-2 sm:h-2.5 rounded-[3px] bg-white/25 flex items-center justify-center text-[5px] sm:text-[6px] text-white font-bold leading-none">
                CLEARED
              </div>
            </div>
          )}
        </div>
      </motion.span>

      {/* --- CUSTOMIZATION / PREVIEW MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-white dark:bg-[#121620] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 shadow-2xl z-10 text-neutral-900 dark:text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title */}
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-[#D2F824]" />
                <h3 className="text-lg font-bold">Hero Header Mockup Capsule</h3>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5">
                Customize the two phone preview cards displayed right in the middle of the hero heading. Upload your own screenshots or keep the clean default designs.
              </p>

              {/* Cards Comparison Grid */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                {/* Slot 1 */}
                <div className="flex flex-col items-center p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-[11px] font-mono font-medium text-neutral-500 mb-2">
                    SCREEN 1
                  </span>
                  <div className="relative w-20 h-28 rounded-xl overflow-hidden bg-neutral-950 border border-neutral-700 shadow-md mb-3 flex items-center justify-center">
                    {image1 && !img1Error ? (
                      <img
                        src={image1}
                        alt="Screen 1 preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-b from-amber-400 via-orange-500 to-amber-600 p-2 flex flex-col justify-between text-center">
                        <div className="w-4 h-1 rounded-full bg-black/40 mx-auto" />
                        <div>
                          <p className="text-[9px] font-black text-black font-mono">RED TEAM</p>
                          <p className="text-[8px] text-black/80 font-bold">TOP 5%</p>
                        </div>
                        <div className="w-full h-3 rounded bg-black/30 flex items-center justify-center text-[7px] text-white font-bold">
                          TRYHACKME
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 w-full">
                    <button
                      onClick={() => fileInput1Ref.current?.click()}
                      className="flex-1 py-1.5 px-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black text-[11px] font-semibold flex items-center justify-center gap-1 cursor-pointer transition-colors"
                    >
                      <Upload className="w-3 h-3" />
                      <span>{image1 ? 'Change' : 'Upload'}</span>
                    </button>
                    {image1 && (
                      <button
                        onClick={() => handleReset(1)}
                        className="p-1.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
                        title="Reset to default"
                      >
                        <RefreshCw className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Slot 2 */}
                <div className="flex flex-col items-center p-3 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-[11px] font-mono font-medium text-neutral-500 mb-2">
                    SCREEN 2
                  </span>
                  <div className="relative w-20 h-28 rounded-xl overflow-hidden bg-neutral-950 border border-neutral-700 shadow-md mb-3 flex items-center justify-center">
                    {image2 && !img2Error ? (
                      <img
                        src={image2}
                        alt="Screen 2 preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 p-2 flex flex-col justify-between text-center">
                        <div className="w-4 h-1 rounded-full bg-white/40 mx-auto" />
                        <div>
                          <p className="text-[9px] font-black text-white font-mono">45+ LABS</p>
                          <p className="text-[8px] text-white/80 font-bold">CLEARED</p>
                        </div>
                        <div className="w-full h-3 rounded bg-white/25 flex items-center justify-center text-[7px] text-white font-bold">
                          DEFENSE
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 w-full">
                    <button
                      onClick={() => fileInput2Ref.current?.click()}
                      className="flex-1 py-1.5 px-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black text-[11px] font-semibold flex items-center justify-center gap-1 cursor-pointer transition-colors"
                    >
                      <Upload className="w-3 h-3" />
                      <span>{image2 ? 'Change' : 'Upload'}</span>
                    </button>
                    {image2 && (
                      <button
                        onClick={() => handleReset(2)}
                        className="p-1.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
                        title="Reset to default"
                      >
                        <RefreshCw className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs">
                <span className="text-neutral-500 text-[11px]">
                  Supports PNG, JPG, WEBP, or SVG
                </span>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-black font-semibold text-xs cursor-pointer hover:opacity-90 transition-opacity"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
