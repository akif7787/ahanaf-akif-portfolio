import React from 'react';
import { motion } from 'motion/react';

interface KineticHeadingProps {
  children?: React.ReactNode;
  title?: string;
  badge?: string;
  emoji?: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const KineticHeading: React.FC<KineticHeadingProps> = ({
  children,
  title,
  badge,
  emoji,
  subtitle,
  className = '',
  align = 'left',
}) => {
  const words = title ? title.split(' ') : [];

  return (
    <div className={`mb-10 sm:mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700/60 text-[11px] font-mono font-medium text-neutral-600 dark:text-neutral-400 mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-[#D2F824]" />
          <span>{badge}</span>
        </motion.div>
      )}

      {title ? (
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 whitespace-nowrap">
          {words.map((word, index) => (
            <span key={index} className="overflow-hidden inline-block py-0.5">
              <motion.span
                initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
                whileInView={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
          {emoji && (
            <motion.span
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 20,
                delay: words.length * 0.06,
              }}
              className="text-xl sm:text-2xl inline-block ml-0.5"
            >
              {emoji}
            </motion.span>
          )}
        </h2>
      ) : (
        children
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
