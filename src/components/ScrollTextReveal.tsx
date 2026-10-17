import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface WordProps {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
  isHighlight?: boolean;
}

const Word: React.FC<WordProps> = ({ children, range, progress, isHighlight }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const blur = useTransform(progress, range, [4, 0]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <span className="relative inline-block mx-[0.22em] my-[0.08em]">
      <motion.span
        style={{
          opacity,
          y,
          filter: useTransform(blur, (v) => `blur(${v}px)`),
        }}
        className={`inline-block transition-colors duration-200 ${
          isHighlight
            ? 'text-emerald-500 dark:text-[#D2F824] font-semibold drop-shadow-[0_2px_12px_rgba(210,248,36,0.3)]'
            : 'text-neutral-900 dark:text-white'
        }`}
      >
        {children}
      </motion.span>
    </span>
  );
};

interface ScrollTextRevealProps {
  text: string;
  highlights?: string[];
  eyebrow?: string;
  subtext?: string;
  className?: string;
}

export const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({
  text,
  highlights = ['offensive', 'zero-trust', 'defenses', 'vulnerabilities', 'resilience', 'security', 'architectures'],
  eyebrow = 'CORE PHILOSOPHY & PRACTICE',
  subtext = 'Scroll down to illuminate Ahanaf Akif\'s operational mindset',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.92', 'end 0.20'],
  });

  const words = text.split(' ');

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-5xl mx-auto py-24 sm:py-32 px-4 sm:px-8 text-center select-none ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 text-[11px] font-mono font-medium tracking-wider text-neutral-600 dark:text-neutral-400 mb-6 uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#D2F824] animate-pulse" />
          <span>{eyebrow}</span>
        </motion.div>
      )}

      <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.25] sm:leading-[1.2] flex flex-wrap justify-center items-center">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          const cleanWord = word.toLowerCase().replace(/[^a-z0-9-]/g, '');
          const isHighlight = highlights.some((h) => cleanWord.includes(h.toLowerCase()));

          return (
            <Word
              key={i}
              range={[start, end]}
              progress={scrollYProgress}
              isHighlight={isHighlight}
            >
              {word}
            </Word>
          );
        })}
      </h3>

      {subtext && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto font-mono tracking-wide"
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
};
