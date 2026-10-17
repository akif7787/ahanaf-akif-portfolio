import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ACHIEVEMENTS_LIST } from '../data/portfolioData';
import { ExternalLink, Calendar, Sparkles, X, ChevronDown, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { AwardCelebrationOverlay } from './AwardCelebrationOverlay';

interface BigAwardCupProps {
  isHovered: boolean;
  isExpanded: boolean;
  index: number;
  badge: string;
}

const BigAwardCup: React.FC<BigAwardCupProps> = ({
  isHovered,
  isExpanded,
  index,
  badge,
}) => {
  const isPopped = isHovered && !isExpanded;
  const tiltAngle = index % 2 === 0 ? -15 : 15;
  const offsetX = index % 2 === 0 ? -12 : 12;

  return (
    <motion.div
      initial={false}
      animate={
        isPopped
          ? {
              y: -106,
              x: offsetX,
              rotate: tiltAngle,
              scale: 1.15,
              opacity: 1,
            }
          : {
              y: 35,
              x: 0,
              rotate: 0,
              scale: 0.5,
              opacity: 0,
            }
      }
      transition={{
        type: 'spring',
        stiffness: 280,
        damping: 20,
        mass: 0.75,
      }}
      className="absolute -top-3 left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none flex flex-col items-center"
      style={{ transformOrigin: 'bottom center' }}
    >
      <div className="absolute inset-0 -top-4 bg-gradient-to-t from-amber-500/40 via-yellow-400/50 to-amber-300/30 rounded-full blur-2xl opacity-90 scale-150 animate-pulse pointer-events-none" />
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 drop-shadow-[0_18px_35px_rgba(245,158,11,0.65)] flex items-center justify-center">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full filter drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`goldBody-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="25%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#FEF08A" />
              <stop offset="75%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id={`goldRim-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF9C3" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id={`goldHandle-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id={`goldBase-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#92400E" />
              <stop offset="30%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#FEF08A" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <radialGradient id={`starMedal-${index}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FEF9C3" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </radialGradient>
          </defs>

          <path
            d="M 34 32 C 12 32, 10 60, 36 67 L 38 61 C 20 56, 20 40, 34 40 Z"
            fill={`url(#goldHandle-${index})`}
            stroke="#92400E"
            strokeWidth="0.8"
          />
          <path
            d="M 86 32 C 108 32, 110 60, 84 67 L 82 61 C 100 56, 100 40, 86 40 Z"
            fill={`url(#goldHandle-${index})`}
            stroke="#92400E"
            strokeWidth="0.8"
          />
          <path
            d="M 34 26 C 34 26, 33 58, 48 71 C 53 75, 67 75, 72 71 C 87 58, 86 26, 86 26 Z"
            fill={`url(#goldBody-${index})`}
            stroke="#B45309"
            strokeWidth="1.2"
          />
          <path
            d="M 38 28 C 38 46, 44 62, 54 68 C 47 62, 43 48, 43 28 Z"
            fill="#FFFFFF"
            opacity="0.4"
          />
          <ellipse
            cx="60"
            cy="26"
            rx="26"
            ry="6"
            fill={`url(#goldRim-${index})`}
            stroke="#92400E"
            strokeWidth="1"
          />
          <ellipse
            cx="60"
            cy="26"
            rx="22"
            ry="4"
            fill="#78350F"
            opacity="0.85"
          />
          <circle
            cx="60"
            cy="48"
            r="11"
            fill={`url(#starMedal-${index})`}
            stroke="#FEF9C3"
            strokeWidth="1.2"
          />
          <path
            d="M 60 40 L 62.8 45.6 L 69 46.5 L 64.5 50.8 L 65.6 57 L 60 54 L 54.4 57 L 55.5 50.8 L 51 46.5 L 57.2 45.6 Z"
            fill="#FFFBEB"
          />
          <path
            d="M 53 73 L 67 73 L 64 86 L 56 86 Z"
            fill={`url(#goldBody-${index})`}
            stroke="#92400E"
            strokeWidth="0.8"
          />
          <ellipse cx="60" cy="74" rx="8" ry="2.2" fill="#FEF08A" stroke="#B45309" strokeWidth="0.6" />
          <ellipse cx="60" cy="86" rx="6" ry="1.8" fill="#FEF08A" stroke="#B45309" strokeWidth="0.6" />
          <path
            d="M 44 86 L 76 86 L 80 96 L 40 96 Z"
            fill={`url(#goldBase-${index})`}
            stroke="#92400E"
            strokeWidth="1"
          />
          <rect
            x="36"
            y="96"
            width="48"
            height="8"
            rx="2.5"
            fill="#451A03"
            stroke="#78350F"
            strokeWidth="0.8"
          />
          <rect
            x="44"
            y="98"
            width="32"
            height="4"
            rx="1"
            fill="#FDE68A"
            stroke="#92400E"
            strokeWidth="0.4"
          />
        </svg>

        <motion.span
          animate={{ scale: [1, 1.4, 1], rotate: [0, 45, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="absolute -top-1 -right-1 text-2xl drop-shadow-[0_2px_10px_rgba(250,204,21,0.9)] select-none"
        >
          ✨
        </motion.span>
        <motion.span
          animate={{ scale: [1, 1.35, 1], y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2.1, delay: 0.3 }}
          className="absolute top-6 -left-3 text-xl drop-shadow-[0_2px_8px_rgba(250,204,21,0.9)] select-none"
        >
          🌟
        </motion.span>
        <motion.span
          animate={{ scale: [0.8, 1.3, 0.8] }}
          transition={{ repeat: Infinity, duration: 1.6, delay: 0.7 }}
          className="absolute bottom-4 -right-2 text-lg select-none"
        >
          ✨
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 4 }}
        animate={isPopped ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 4 }}
        transition={{ delay: 0.08, duration: 0.2 }}
        className="mt-0.5 px-3 py-0.5 rounded-full bg-neutral-950 text-amber-300 dark:bg-white dark:text-neutral-950 text-[10px] font-mono font-bold tracking-wider uppercase border border-amber-400 shadow-xl whitespace-nowrap flex items-center gap-1.5"
      >
        <span>🏆</span>
        <span>{badge || 'HONOR AWARD'}</span>
      </motion.div>
    </motion.div>
  );
};

interface AchievementCardProps {
  item: typeof ACHIEVEMENTS_LIST[number];
  index: number;
  isExpanded: boolean;
  onCardClick: (id: string) => void;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  item,
  index,
  isExpanded,
  onCardClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group/card transition-all duration-300 ${
        isHovered && !isExpanded ? 'z-30' : isExpanded ? 'z-20' : 'z-10'
      }`}
    >
      <BigAwardCup
        isHovered={isHovered}
        isExpanded={isExpanded}
        index={index}
        badge={item.badge}
      />

      <motion.div
        layout
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45, delay: index * 0.08 }}
        whileHover={!isExpanded ? { y: -4 } : {}}
        onClick={() => onCardClick(item.id)}
        className={`bg-white dark:bg-[#121622] rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col justify-between text-left cursor-pointer overflow-hidden relative z-10 ${
          isExpanded
            ? 'border-amber-500 dark:border-amber-400 ring-4 ring-amber-400/25 shadow-2xl'
            : isHovered
            ? 'border-amber-400 dark:border-amber-500 shadow-xl'
            : 'border-neutral-200/90 dark:border-neutral-800 shadow-xs hover:shadow-lg'
        }`}
        title={isExpanded ? 'Click to collapse details' : 'Hover to reveal trophy · Click to view inside details'}
      >
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-neutral-100 dark:border-neutral-800/80 mb-3">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/80 flex items-center gap-1">
                <span>{item.badge}</span>
                <span className="text-xs"> </span>
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-neutral-400 flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800/60">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
                {isExpanded && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCardClick(item.id);
                    }}
                    className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    title="Close details"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white tracking-tight leading-snug mb-1.5 group-hover/card:text-amber-600 dark:group-hover/card:text-amber-400 transition-colors flex items-start justify-between gap-2">
              <span>{item.title}</span>
            </h3>

            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                Issued by: <strong className="text-neutral-700 dark:text-neutral-300">{item.issuer}</strong>
              </p>
              {item.credentialId && isExpanded && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                  ID: {item.credentialId}
                </span>
              )}
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {item.description}
            </p>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-4 pt-4 border-t border-dashed border-amber-200/80 dark:border-amber-900/60 flex flex-col gap-3.5 overflow-hidden"
                >
                  {item.skills && item.skills.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 mb-2 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span>Core Competencies & Domains</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.highlights && item.highlights.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 mb-2 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Milestone Highlights</span>
                      </h4>
                      <ul className="space-y-1.5 text-[11px] text-neutral-600 dark:text-neutral-300">
                        {item.highlights.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                      Category: <span className="font-semibold text-neutral-800 dark:text-neutral-200">{item.category}</span>
                    </span>
                    {item.verificationUrl && (
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-[11px] font-mono font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
                      >
                        <span>Open Verification</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="px-4 sm:px-5 py-3 bg-neutral-50/80 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono">
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/20">
            {item.highlightStat}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
              <span>{isExpanded ? 'Collapse' : 'Details'}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </span>
            {item.verificationUrl && !isExpanded && (
              <a
                href={item.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 p-0.5 rounded transition-colors inline-flex items-center gap-1"
                title="Open official verification"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const AchievementsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [celebrationKey, setCelebrationKey] = useState<number>(0);

  const categories = ['all', 'Academic', 'Cyber Security', 'Design & Creative', 'Leadership'];
  const filteredAchievements = ACHIEVEMENTS_LIST.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  const handleCardClick = (id: string) => {
    setExpandedCardId((prev) => {
      const isOpening = prev !== id;
      if (isOpening) {
        setCelebrationKey((k) => k + 1);
        return id;
      }
      return null;
    });
  };

  return (
    <section
      id="achievements"
      className="relative py-14 sm:py-20 w-full px-4 sm:px-6 lg:px-8 text-left overflow-visible bg-[#FAF7F2]/90 dark:bg-[#16120E]/90 backdrop-blur-md transition-colors duration-300"
    >
      <AwardCelebrationOverlay triggerKey={celebrationKey} />
      <div className="absolute top-12 left-1/3 w-80 h-80 bg-amber-200/20 dark:bg-amber-950/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6"
        >
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 whitespace-nowrap">
              <span>Achievements & Honors</span>
              <span className="text-xl sm:text-2xl"> </span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 max-w-xl">
              Academic honors, global security benchmarks, creative milestones, and leadership distinctions.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 dark:border-amber-400/30 text-amber-800 dark:text-amber-300 text-[11px] font-mono font-medium shadow-2xs select-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Hover card for trophy · Click to view inside details</span>
          </motion.div>
        </motion.div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1 text-xs font-mono font-medium rounded-full whitespace-nowrap transition-colors cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white font-bold shadow-xs'
                  : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {cat === 'all' ? 'All Milestones' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 sm:pt-16 items-start">
          {filteredAchievements.map((item, index) => (
            <AchievementCard
              key={item.id}
              item={item}
              index={index}
              isExpanded={expandedCardId === item.id}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
