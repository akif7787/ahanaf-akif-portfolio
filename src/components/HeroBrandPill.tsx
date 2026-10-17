import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import { Camera, Upload, RefreshCw, X, Sparkles } from 'lucide-react';

interface HeroBrandPillProps {
  className?: string;
}

export const HeroBrandPill: React.FC<HeroBrandPillProps> = ({ className = '' }) => {
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('hero_brand_pill_avatar');
    if (saved) setCustomAvatar(saved);
  }, []);

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setCustomAvatar(base64);
      setImgError(false);
      localStorage.setItem('hero_brand_pill_avatar', base64);
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    setCustomAvatar(null);
    setImgError(false);
    localStorage.removeItem('hero_brand_pill_avatar');
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFileUpload(file);
        }}
      />

      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
        className={`inline-flex items-center align-middle mx-1.5 sm:mx-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[20px] sm:rounded-[24px] bg-[#17181F] text-white border border-neutral-700/80 shadow-[0_10px_28px_rgba(0,0,0,0.3)] gap-2 select-none cursor-pointer group relative transition-shadow hover:shadow-[0_14px_36px_rgba(0,0,0,0.4)] hover:border-neutral-500/80 ${className}`}
        title="Click to customize brand badge"
      >
        {/* Subtle camera icon on hover */}
        <span className="absolute -top-1.5 -right-1.5 z-20 w-4.5 h-4.5 rounded-full bg-[#D2F824] text-black shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Camera className="w-2.5 h-2.5" />
        </span>

        {customAvatar && !imgError ? (
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-neutral-600 shrink-0">
            <img
              src={customAvatar}
              alt="Akif Avatar"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <BrandLogo size={18} className="shrink-0" />
        )}

        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-neutral-200">
          AKIF
        </span>
      </motion.span>

      {/* Popover / Customizer Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              className="relative w-full max-w-sm bg-white dark:bg-[#121620] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 shadow-2xl z-10 text-neutral-900 dark:text-white"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-[#D2F824]" />
                <h3 className="text-lg font-bold">Brandmark Capsule</h3>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                Customize the brand capsule in the second line of the hero headline.
              </p>

              <div className="flex flex-col items-center p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-950 border-2 border-neutral-700 flex items-center justify-center mb-3">
                  {customAvatar && !imgError ? (
                    <img
                      src={customAvatar}
                      alt="Brand preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <BrandLogo size={36} />
                  )}
                </div>

                <div className="flex items-center gap-2 w-full">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 py-1.5 px-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>{customAvatar ? 'Change Icon/Photo' : 'Upload Avatar'}</span>
                  </button>
                  {customAvatar && (
                    <button
                      onClick={handleReset}
                      className="p-1.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-red-500 transition-colors"
                      title="Reset to default brand logo"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex justify-end pt-2 border-t border-neutral-100 dark:border-neutral-800">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-black font-semibold text-xs cursor-pointer"
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
