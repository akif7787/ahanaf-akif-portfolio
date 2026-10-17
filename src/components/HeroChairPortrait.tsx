import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Camera, RefreshCw } from 'lucide-react';

interface HeroChairPortraitProps {
  customPhoto: string | null;
  onPhotoUpload: (file: File) => void;
  onResetPhoto: () => void;
}

export const HeroChairPortrait: React.FC<HeroChairPortraitProps> = ({
  customPhoto,
  onPhotoUpload,
  onResetPhoto,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onPhotoUpload(file);
    }
  };

  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] aspect-[3/4] sm:aspect-[4/5] mx-auto flex items-end justify-center group select-none">
      {/* Hidden file input for uploading the user's custom cutout */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* --- STUDIO FLOOR CONTACT DROP SHADOW --- */}
      <div className="absolute -bottom-4 inset-x-12 h-14 bg-neutral-900/15 dark:bg-black/50 blur-xl rounded-[100%] pointer-events-none -z-10 transform scale-y-75" />
      <div className="absolute -bottom-2 inset-x-20 h-6 bg-neutral-900/25 dark:bg-black/60 blur-md rounded-[100%] pointer-events-none -z-10" />

      {/* --- QUICK ACTION OVERLAY (APPEARS ON HOVER) --- */}
      <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-md backdrop-blur-md text-xs font-medium flex items-center gap-1.5 hover:bg-white dark:hover:bg-neutral-800 transition-all cursor-pointer"
          title="Upload or change transparent PNG photo"
        >
          <Camera className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span>Upload Cutout</span>
        </button>
        {customPhoto && (
          <button
            onClick={onResetPhoto}
            className="p-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 shadow-md backdrop-blur-md hover:text-red-500 transition-all cursor-pointer"
            title="Reset to Reference Illustration"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* --- MAIN DISPLAY: CUSTOM PHOTO OR HIGH-FIDELITY VECTOR CUTOUT --- */}
      {customPhoto ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full h-full flex items-end justify-center"
        >
          <img
            src={customPhoto}
            alt="Mohammed Ahanaf Akif"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] filter contrast-[1.03]"
          />
        </motion.div>
      ) : (
        /* --- HIGH-FIDELITY REFERENCE RECREATION: MAN IN BLACK HOODIE ON ROYAL BLUE CHAIR --- */
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full h-full flex items-end justify-center filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.22)]"
        >
          <svg
            viewBox="0 0 500 680"
            className="w-full h-full object-contain object-bottom"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Royal Blue Chair Gradients */}
              <linearGradient id="royalBlueChairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="45%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <linearGradient id="chairLegGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#172554" />
              </linearGradient>
              <linearGradient id="chairShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" stopOpacity="0.4" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>

              {/* Black Essentials Hoodie Gradients */}
              <linearGradient id="hoodieBlackGrad" x1="0%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#2B2D32" />
                <stop offset="30%" stopColor="#1B1C1F" />
                <stop offset="70%" stopColor="#121316" />
                <stop offset="100%" stopColor="#0B0C0E" />
              </linearGradient>
              <linearGradient id="hoodieHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3E4249" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1B1C1F" stopOpacity="0" />
              </linearGradient>

              {/* Black Denim Jeans Gradients */}
              <linearGradient id="jeansBlackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#27292D" />
                <stop offset="40%" stopColor="#1C1D21" />
                <stop offset="80%" stopColor="#141518" />
                <stop offset="100%" stopColor="#0D0E10" />
              </linearGradient>

              {/* Skin Gradients */}
              <linearGradient id="skinToneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5D0B5" />
                <stop offset="50%" stopColor="#E6B595" />
                <stop offset="100%" stopColor="#C98F6B" />
              </linearGradient>

              {/* Hair Gradient */}
              <linearGradient id="hairDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2D221D" />
                <stop offset="60%" stopColor="#181311" />
                <stop offset="100%" stopColor="#0A0807" />
              </linearGradient>

              {/* Chunky Balenciaga Shoe Gradient */}
              <linearGradient id="sneakerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#32353B" />
                <stop offset="40%" stopColor="#1E2024" />
                <stop offset="85%" stopColor="#111215" />
                <stop offset="100%" stopColor="#07080A" />
              </linearGradient>
            </defs>

            {/* --- 1. ROYAL BLUE CHAIR (BACK LEGS & BACKREST) --- */}
            <g id="chair-structure">
              {/* Back Left Leg */}
              <rect x="156" y="440" width="16" height="150" rx="8" fill="url(#chairLegGrad)" />
              {/* Back Right Leg */}
              <rect x="256" y="440" width="16" height="150" rx="8" fill="url(#chairLegGrad)" />

              {/* Chair Backrest */}
              <path
                d="M130 290 C125 350 135 440 148 480 C155 490 170 495 210 495 C230 495 240 480 240 440 C240 370 230 300 200 285 C170 275 135 270 130 290 Z"
                fill="url(#royalBlueChairGrad)"
              />
              {/* Backrest Edge Soft Highlight */}
              <path
                d="M132 295 C128 350 137 435 150 475"
                stroke="#60A5FA"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />

              {/* Chair Seat Cushion */}
              <path
                d="M135 460 C135 460 210 470 280 460 C300 455 310 470 305 485 C300 495 220 505 150 495 C140 492 133 480 135 460 Z"
                fill="url(#royalBlueChairGrad)"
              />

              {/* Front Left Leg */}
              <rect x="140" y="480" width="18" height="180" rx="9" fill="url(#chairLegGrad)" />
              {/* Front Right Leg */}
              <rect x="290" y="475" width="18" height="165" rx="9" fill="url(#chairLegGrad)" />
            </g>

            {/* --- 2. SITTING POSE: LEGS & BLACK JEANS --- */}
            <g id="legs-and-jeans">
              {/* Right Leg (Lower Leg planted downwards) */}
              <path
                d="M210 440 C210 440 240 460 270 490 C290 515 305 570 315 630 C280 635 260 635 250 630 C245 580 235 530 215 480 Z"
                fill="url(#jeansBlackGrad)"
              />

              {/* Right Shoe */}
              <g id="right-shoe" transform="translate(245, 615)">
                <path
                  d="M0 25 C10 18 35 15 55 18 C70 22 75 30 70 38 C60 45 10 46 -5 40 C-10 35 -8 28 0 25 Z"
                  fill="url(#sneakerGrad)"
                />
                <path
                  d="M-4 35 Q30 42 68 36 L66 42 Q30 48 -6 40 Z"
                  fill="#000000"
                />
                <path d="M15 22 L25 18 M20 26 L32 22 M26 30 L38 27" stroke="#4B5563" strokeWidth="2.5" />
              </g>

              {/* Left Leg (Crossed over right knee) */}
              <path
                d="M175 420 C185 410 240 410 290 435 C320 450 365 480 390 510 C395 520 380 545 350 545 C320 545 285 500 245 470 C215 450 185 435 175 420 Z"
                fill="url(#jeansBlackGrad)"
              />
              <path
                d="M270 435 Q310 465 355 525"
                stroke="#374151"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M250 445 Q290 480 330 535"
                stroke="#111827"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              {/* Left Shoe */}
              <g id="left-shoe" transform="translate(325, 490) rotate(22)">
                <path
                  d="M0 20 C15 8 45 5 70 12 C85 18 90 28 85 38 C75 48 20 50 -5 42 C-12 35 -10 25 0 20 Z"
                  fill="url(#sneakerGrad)"
                />
                <path
                  d="M-5 38 Q35 48 84 37 L82 45 Q35 56 -8 44 Z"
                  fill="#07080A"
                />
                <path d="M20 16 L35 12 M25 22 L42 18 M32 28 L50 24" stroke="#6B7280" strokeWidth="2.5" />
                <circle cx="65" cy="22" r="3" fill="#9CA3AF" />
              </g>
            </g>

            {/* --- 3. UPPER BODY: BLACK ESSENTIALS HOODIE --- */}
            <g id="hoodie-torso">
              <path
                d="M165 320 C180 300 230 295 285 305 C310 310 335 340 340 380 C345 410 325 450 300 460 C265 470 200 465 175 440 C160 410 155 350 165 320 Z"
                fill="url(#hoodieBlackGrad)"
              />
              <text
                x="245"
                y="375"
                fill="#24262A"
                fontSize="13"
                fontWeight="900"
                fontFamily="sans-serif"
                letterSpacing="4"
                textAnchor="middle"
                opacity="0.85"
              >
                ESSENTIALS
              </text>

              {/* Left Arm */}
              <path
                d="M285 315 C310 330 335 380 335 430 C330 460 300 480 270 475 C260 465 270 440 280 420 C290 395 280 340 265 325 Z"
                fill="url(#hoodieBlackGrad)"
              />
              {/* Left Hand */}
              <path
                d="M265 460 C270 455 285 460 290 470 C292 478 285 488 275 488 C265 488 258 475 265 460 Z"
                fill="url(#skinToneGrad)"
              />

              {/* Right Arm */}
              <path
                d="M175 325 C160 315 140 295 130 270 C125 250 135 240 150 245 C170 250 190 290 205 320 Z"
                fill="url(#hoodieBlackGrad)"
              />
              <path
                d="M135 250 C140 230 165 220 185 225 C195 230 190 255 175 265 C160 275 145 270 135 250 Z"
                fill="url(#hoodieBlackGrad)"
              />
              {/* Right Hand */}
              <path
                d="M178 220 C182 210 195 210 202 218 C208 226 200 238 190 238 C182 238 175 230 178 220 Z"
                fill="url(#skinToneGrad)"
              />

              {/* Hoodie Neck Collar */}
              <path
                d="M195 295 C210 315 245 315 260 295 C250 285 205 285 195 295 Z"
                fill="#161719"
              />
            </g>

            {/* --- 4. HEAD, FACE & HAIR --- */}
            <g id="head-and-face">
              <path
                d="M215 265 L215 295 C228 300 242 300 250 295 L250 265 Z"
                fill="#D4A07F"
              />
              <path
                d="M205 210 C202 235 210 265 225 275 C235 282 250 278 258 265 C268 250 270 220 265 205 C260 185 245 178 230 180 C215 182 208 195 205 210 Z"
                fill="url(#skinToneGrad)"
              />
              <ellipse cx="206" cy="225" rx="5" ry="8" fill="#DFA987" />

              {/* Haircut */}
              <path
                d="M203 215 C200 185 212 165 232 165 C255 165 272 180 272 205 C272 215 268 225 265 225 C265 215 260 205 252 200 C242 195 228 198 220 208 C215 214 208 220 203 215 Z"
                fill="url(#hairDarkGrad)"
              />
              <path
                d="M215 205 Q225 212 235 205 M230 202 Q240 210 250 204"
                stroke="#1E1612"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Eyebrows */}
              <path d="M218 215 Q228 212 235 215" stroke="#1A120D" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M246 215 Q254 212 260 215" stroke="#1A120D" strokeWidth="2.2" strokeLinecap="round" />

              {/* Eyes */}
              <ellipse cx="227" cy="222" rx="3.5" ry="2.2" fill="#1C140F" />
              <ellipse cx="253" cy="222" rx="3.5" ry="2.2" fill="#1C140F" />
              <circle cx="228" cy="221" r="0.8" fill="#FFFFFF" />
              <circle cx="254" cy="221" r="0.8" fill="#FFFFFF" />

              {/* Nose */}
              <path
                d="M239 218 L241 236 Q239 240 245 239"
                stroke="#B87B56"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />

              {/* Confident Smile */}
              <path
                d="M232 252 Q241 257 250 252"
                stroke="#9B563D"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </svg>
        </motion.div>
      )}

      {/* --- INSTRUCTION BADGE BELOW PERSON --- */}
      <div className="absolute -bottom-7 inset-x-0 flex items-center justify-center">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="px-3 py-1 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 text-[11px] font-mono text-neutral-600 dark:text-neutral-400 backdrop-blur-md shadow-xs hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Camera className="w-3 h-3 text-blue-500" />
          <span>Click to swap / upload photo cutout</span>
        </button>
      </div>
    </div>
  );
};
