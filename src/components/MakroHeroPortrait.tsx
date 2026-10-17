import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Camera, RefreshCw } from 'lucide-react';

interface MakroHeroPortraitProps {
  customPhoto: string | null;
  onPhotoUpload: (file: File) => void;
  onResetPhoto: () => void;
}

export const MakroHeroPortrait: React.FC<MakroHeroPortraitProps> = ({
  customPhoto,
  onPhotoUpload,
  onResetPhoto,
}) => {
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

  return (
    <div className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] aspect-[4/5] mx-auto flex items-end justify-center select-none group">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Discrete Photo Upload Button on hover */}
      <div className="absolute top-2 right-2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-neutral-900/95 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-md backdrop-blur-md text-[11px] font-medium flex items-center gap-1.5 hover:border-black dark:hover:border-white transition-all cursor-pointer"
          title="Upload or change transparent portrait PNG"
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

      {/* Soft Contact Floor Drop Shadow */}
      <div className="absolute -bottom-2 inset-x-10 h-10 bg-neutral-900/15 dark:bg-black/60 blur-xl rounded-[100%] pointer-events-none -z-10" />

      {/* --- THE PORTRAIT IMAGE --- */}
      {hasRealPhoto ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden will-change-transform pb-2 sm:pb-4"
        >
          <img
            src={customPhoto || candidateImages[candidateIdx]}
            alt="Mohammed Ahanaf Akif"
            referrerPolicy="no-referrer"
            onError={handleImgError}
            className="w-full h-full object-contain object-bottom filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] contrast-[1.02]"
            style={{
              maskImage: 'linear-gradient(to bottom, black 0%, black 86%, rgba(0,0,0,0.85) 94%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 86%, rgba(0,0,0,0.85) 94%, transparent 100%)',
            }}
          />
        </motion.div>
      ) : (
        /* High-fidelity Vector Cutout of Ahanaf Akif */
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.6 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="relative z-10 w-full h-full flex items-end justify-center filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] overflow-hidden will-change-transform pb-2 sm:pb-4"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 86%, rgba(0,0,0,0.85) 94%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 86%, rgba(0,0,0,0.85) 94%, transparent 100%)',
          }}
        >
          <svg viewBox="0 0 500 580" className="w-full h-full object-contain object-bottom" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mkSkinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F7D3BA" />
                <stop offset="50%" stopColor="#E9B797" />
                <stop offset="100%" stopColor="#C98F6B" />
              </linearGradient>
              <linearGradient id="mkTurtleneck" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#25262B" />
                <stop offset="35%" stopColor="#18191D" />
                <stop offset="100%" stopColor="#08080A" />
              </linearGradient>
              <linearGradient id="mkHair" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2C231E" />
                <stop offset="60%" stopColor="#181311" />
                <stop offset="100%" stopColor="#080706" />
              </linearGradient>
            </defs>

            <path d="M 60 580 C 70 420 120 375 185 365 L 315 365 C 380 375 430 420 440 580 Z" fill="url(#mkTurtleneck)" />
            <path d="M 190 320 C 190 305 210 295 250 295 C 290 295 310 305 310 320 L 315 375 C 305 385 285 390 250 390 C 215 390 195 385 185 375 Z" fill="url(#mkTurtleneck)" stroke="#2F3136" strokeWidth="1.5" />
            <path d="M 215 250 L 215 310 C 230 318 270 318 285 310 L 285 250 Z" fill="#C48967" />
            <path d="M 225 250 L 225 305 C 235 312 265 312 275 305 L 275 250 Z" fill="url(#mkSkinGrad)" />
            <ellipse cx="178" cy="215" rx="11" ry="18" fill="#C48967" />
            <ellipse cx="322" cy="215" rx="11" ry="18" fill="#C48967" />
            <path d="M 185 160 C 180 215 190 268 220 282 C 235 288 265 288 280 282 C 310 268 320 215 315 160 C 310 115 285 95 250 95 C 215 95 190 115 185 160 Z" fill="url(#mkSkinGrad)" />
            <path d="M 180 155 C 175 110 195 75 240 68 C 280 62 315 78 322 120 C 326 142 324 165 320 170 C 316 150 310 128 298 120 C 285 112 265 114 250 118 C 230 123 205 130 188 152 Z" fill="url(#mkHair)" />

            <path d="M 205 174 Q 222 168 234 175" stroke="#1E1612" strokeWidth="3.8" strokeLinecap="round" fill="none" />
            <path d="M 266 175 Q 278 168 295 174" stroke="#1E1612" strokeWidth="3.8" strokeLinecap="round" fill="none" />
            <ellipse cx="221" cy="190" rx="6" ry="4" fill="#1C140F" />
            <ellipse cx="279" cy="190" rx="6" ry="4" fill="#1C140F" />
            <circle cx="222.5" cy="189" r="1.5" fill="#FFFFFF" />
            <circle cx="280.5" cy="189" r="1.5" fill="#FFFFFF" />

            <path d="M 248 178 L 246 215 Q 242 222 250 222 Q 258 222 254 215" stroke="#B67B58" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 235 238 C 242 235 248 236 250 238 C 252 236 258 235 265 238 C 262 242 255 243 250 241 C 245 243 238 242 235 238 Z" fill="#241B16" opacity="0.85" />
            <path d="M 236 248 Q 250 256 264 248" stroke="#A85743" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          </svg>
        </motion.div>
      )}
    </div>
  );
};
