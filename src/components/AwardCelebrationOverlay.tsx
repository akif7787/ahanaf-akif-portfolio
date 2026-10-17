import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface FallingItem {
  id: string;
  type: 'balloon-gold' | 'balloon-ruby' | 'balloon-cyan' | 'balloon-purple' | 'balloon-emerald' | 'ribbon-gold' | 'ribbon-rose' | 'ribbon-cyan' | 'cup' | 'medal' | 'star';
  startX: number; // percentage
  size: number;
  rotation: number;
  drift: number;
  duration: number;
  delay: number;
}

interface AwardCelebrationOverlayProps {
  triggerKey: number; // increments on each click to fire celebration
  onComplete?: () => void;
}

export const AwardCelebrationOverlay: React.FC<AwardCelebrationOverlayProps> = ({
  triggerKey,
  onComplete,
}) => {
  const [items, setItems] = useState<FallingItem[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (triggerKey === 0) return;

    try {
      confetti({
        particleCount: 45,
        spread: 80,
        origin: { y: 0.08, x: 0.5 },
        colors: ['#F59E0B', '#EF4444', '#06B6D4', '#10B981', '#8B5CF6', '#FBBF24'],
        ticks: 100,
        gravity: 1.1,
        scalar: 1.1,
      });

      setTimeout(() => {
        confetti({
          particleCount: 30,
          angle: 55,
          spread: 60,
          origin: { x: 0.05, y: 0.15 },
          colors: ['#F59E0B', '#FDE047', '#FB7185', '#38BDF8'],
          ticks: 90,
          gravity: 1.2,
        });
      }, 100);

      setTimeout(() => {
        confetti({
          particleCount: 30,
          angle: 125,
          spread: 60,
          origin: { x: 0.95, y: 0.15 },
          colors: ['#F59E0B', '#34D399', '#A855F7', '#FDE047'],
          ticks: 90,
          gravity: 1.2,
        });
      }, 180);
    } catch {
      // fallback
    }

    const types: FallingItem['type'][] = [
      'balloon-gold',
      'balloon-ruby',
      'balloon-cyan',
      'balloon-purple',
      'balloon-emerald',
      'ribbon-gold',
      'ribbon-rose',
      'ribbon-cyan',
      'cup',
      'medal',
      'star',
    ];

    const generated: FallingItem[] = [];
    const count = 32;

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      generated.push({
        id: `cel-${triggerKey}-${i}-${Math.random()}`,
        type,
        startX: Math.random() * 92 + 4,
        size: type.startsWith('balloon') ? Math.random() * 16 + 32 : Math.random() * 12 + 24,
        rotation: (Math.random() - 0.5) * 60,
        drift: (Math.random() - 0.5) * 80,
        duration: 1.4 + Math.random() * 0.7,
        delay: Math.random() * 0.25,
      });
    }

    setItems(generated);
    setIsActive(true);

    const timer = setTimeout(() => {
      setIsActive(false);
      setItems([]);
      onComplete?.();
    }, 2100);

    return () => clearTimeout(timer);
  }, [triggerKey, onComplete]);

  if (!isActive && items.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{
              y: -120,
              x: `${item.startX}vw`,
              rotate: item.rotation,
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              y: '105vh',
              x: `calc(${item.startX}vw + ${item.drift}px)`,
              rotate: item.rotation + (item.drift > 0 ? 90 : -90),
              opacity: [0, 1, 1, 0.8, 0],
              scale: [0.6, 1, 1, 0.9, 0.7],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute top-0 left-0 will-change-transform drop-shadow-md"
            style={{ width: item.size, height: item.size * 1.3 }}
          >
            {item.type.startsWith('balloon') && (
              <div className="relative w-full h-full flex flex-col items-center">
                <svg
                  viewBox="0 0 40 50"
                  className="w-full h-auto drop-shadow-lg"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <radialGradient
                      id={`bg-${item.id}`}
                      cx="35%"
                      cy="30%"
                      r="65%"
                      fx="30%"
                      fy="25%"
                    >
                      {item.type === 'balloon-gold' && (
                        <>
                          <stop offset="0%" stopColor="#FEF08A" />
                          <stop offset="50%" stopColor="#F59E0B" />
                          <stop offset="100%" stopColor="#B45309" />
                        </>
                      )}
                      {item.type === 'balloon-ruby' && (
                        <>
                          <stop offset="0%" stopColor="#FECDD3" />
                          <stop offset="50%" stopColor="#F43F5E" />
                          <stop offset="100%" stopColor="#9F1239" />
                        </>
                      )}
                      {item.type === 'balloon-cyan' && (
                        <>
                          <stop offset="0%" stopColor="#BAE6FD" />
                          <stop offset="50%" stopColor="#0EA5E9" />
                          <stop offset="100%" stopColor="#0369A1" />
                        </>
                      )}
                      {item.type === 'balloon-purple' && (
                        <>
                          <stop offset="0%" stopColor="#E9D5FF" />
                          <stop offset="50%" stopColor="#A855F7" />
                          <stop offset="100%" stopColor="#6B21A8" />
                        </>
                      )}
                      {item.type === 'balloon-emerald' && (
                        <>
                          <stop offset="0%" stopColor="#A7F3D0" />
                          <stop offset="50%" stopColor="#10B981" />
                          <stop offset="100%" stopColor="#047857" />
                        </>
                      )}
                    </radialGradient>
                  </defs>
                  <ellipse cx="20" cy="21" rx="17" ry="20" fill={`url(#bg-${item.id})`} />
                  <ellipse cx="14" cy="14" rx="5" ry="8" fill="white" fillOpacity="0.45" transform="rotate(-25 14 14)" />
                  <polygon points="18,40 22,40 20,43" fill="#B45309" />
                  <path
                    d="M20 43 Q22 47 18 51 Q16 55 21 60"
                    stroke="#D4D4D8"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </svg>
              </div>
            )}

            {item.type.startsWith('ribbon') && (
              <svg
                viewBox="0 0 30 60"
                className="w-full h-full drop-shadow-md"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0 C25 12, 5 22, 18 35 C28 45, 8 52, 14 60"
                  stroke={
                    item.type === 'ribbon-gold'
                      ? '#F59E0B'
                      : item.type === 'ribbon-rose'
                      ? '#F43F5E'
                      : '#06B6D4'
                  }
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path
                  d="M15 0 C25 12, 5 22, 18 35 C28 45, 8 52, 14 60"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="2 4"
                  opacity="0.8"
                />
              </svg>
            )}

            {item.type === 'cup' && (
              <div className="flex items-center justify-center text-3xl filter drop-shadow-[0_4px_10px_rgba(245,158,11,0.5)]">
                🏆
              </div>
            )}

            {item.type === 'medal' && (
              <div className="flex items-center justify-center text-2xl filter drop-shadow-[0_4px_8px_rgba(245,158,11,0.4)]">
                🥇
              </div>
            )}

            {item.type === 'star' && (
              <div className="flex items-center justify-center text-2xl filter drop-shadow-[0_2px_8px_rgba(250,204,21,0.6)]">
                ⭐
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
