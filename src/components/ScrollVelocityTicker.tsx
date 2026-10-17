import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'motion/react';

interface ScrollVelocityTickerProps {
  items: string[];
  baseVelocity?: number;
  className?: string;
}

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export const ScrollVelocityTicker: React.FC<ScrollVelocityTickerProps> = ({
  items,
  baseVelocity = 1.2,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 70,
    stiffness: 150,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0.8], {
    clamp: true,
  });

  const prevTimeRef = useRef<number | null>(null);

  useAnimationFrame((time) => {
    if (prevTimeRef.current === null) {
      prevTimeRef.current = time;
      return;
    }

    const delta = (time - prevTimeRef.current) / 1000;
    prevTimeRef.current = time;

    const activeBaseSpeed = isHovered ? baseVelocity * 0.25 : baseVelocity;
    let moveBy = activeBaseSpeed * delta;

    const currentVelocity = Math.abs(velocityFactor.get());
    if (currentVelocity) {
      moveBy += currentVelocity * 0.35 * delta;
    }

    baseX.set(baseX.get() - moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full overflow-hidden whitespace-nowrap py-4 border-y border-neutral-200/60 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0E121B]/60 backdrop-blur-xs select-none ${className}`}
    >
      <motion.div
        style={{ x }}
        className="flex items-center gap-8 text-xs sm:text-sm font-mono tracking-wider text-neutral-600 dark:text-neutral-400 will-change-transform"
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-8 shrink-0">
            <span
              data-cursor="hover"
              className="hover:text-emerald-500 dark:hover:text-[#D2F824] transition-colors cursor-default"
            >
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 dark:bg-[#D2F824]/60" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};
