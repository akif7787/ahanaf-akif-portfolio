import React from 'react';
import { motion } from 'motion/react';

export interface FloatingBlurredEmojiProps {
  emoji: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size?: string;
  blur?: string;
  opacity?: string;
  rotate?: number;
  duration?: number;
  delay?: number;
  yOffset?: number;
  xOffset?: number;
}

export const FloatingBlurredEmoji: React.FC<FloatingBlurredEmojiProps> = ({
  emoji,
  top,
  bottom,
  left,
  right,
  size = 'text-xl sm:text-2xl',
  blur = 'blur-[2px]',
  opacity = 'opacity-25 dark:opacity-20',
  rotate = 0,
  duration = 8,
  delay = 0,
  yOffset = 8,
  xOffset = 4,
}) => {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute pointer-events-none select-none z-0 transition-opacity duration-500 ${size} ${blur} ${opacity}`}
      style={{
        top,
        bottom,
        left,
        right,
        transform: `rotate(${rotate}deg)`,
      }}
      animate={{
        y: [0, -yOffset, 0, yOffset * 0.7, 0],
        x: [0, xOffset, 0, -xOffset, 0],
        rotate: [rotate, rotate + 6, rotate, rotate - 6, rotate],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay,
      }}
    >
      <span className="inline-block transform-gpu will-change-transform filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
        {emoji}
      </span>
    </motion.div>
  );
};

export const HeroBlurredEmojis: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingBlurredEmoji
        emoji="🛡️"
        top="12%"
        left="4%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-30 dark:opacity-20"
        duration={9}
        rotate={-12}
      />
      <FloatingBlurredEmoji
        emoji="⚡"
        top="28%"
        left="42%"
        size="text-xl sm:text-2xl"
        blur="blur-[2px]"
        opacity="opacity-25 dark:opacity-15"
        duration={7}
        delay={1}
        rotate={8}
      />
      <FloatingBlurredEmoji
        emoji="💻"
        top="15%"
        right="6%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-30 dark:opacity-20"
        duration={11}
        delay={0.5}
        rotate={15}
      />
      <FloatingBlurredEmoji
        emoji="🔐"
        top="58%"
        right="3%"
        size="text-xl sm:text-2xl"
        blur="blur-[2px]"
        opacity="opacity-25 dark:opacity-15"
        duration={8}
        delay={1.5}
        rotate={-8}
      />
      <FloatingBlurredEmoji
        emoji="🇧🇩"
        bottom="14%"
        left="6%"
        size="text-lg sm:text-xl"
        blur="blur-[2px]"
        opacity="opacity-20 dark:opacity-15"
        duration={10}
        delay={2}
        rotate={-6}
      />
      <FloatingBlurredEmoji
        emoji="✨"
        bottom="10%"
        right="35%"
        size="text-xl sm:text-2xl"
        blur="blur-[1.5px]"
        opacity="opacity-30 dark:opacity-20"
        duration={6}
        delay={1.2}
        rotate={12}
      />
    </div>
  );
};

export const ExperienceBlurredEmojis: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingBlurredEmoji
        emoji="🚀"
        top="6%"
        right="8%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-25 dark:opacity-15"
        duration={9}
        rotate={10}
      />
      <FloatingBlurredEmoji
        emoji="💡"
        top="32%"
        left="3%"
        size="text-xl sm:text-2xl"
        blur="blur-[2px]"
        opacity="opacity-25 dark:opacity-15"
        duration={8}
        delay={1}
        rotate={-10}
      />
      <FloatingBlurredEmoji
        emoji="🎯"
        top="60%"
        right="4%"
        size="text-lg sm:text-xl"
        blur="blur-[2px]"
        opacity="opacity-20 dark:opacity-15"
        duration={11}
        delay={2}
        rotate={14}
      />
      <FloatingBlurredEmoji
        emoji="🔥"
        bottom="8%"
        left="7%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-25 dark:opacity-15"
        duration={10}
        delay={0.5}
        rotate={-8}
      />
    </div>
  );
};

export const SkillsBlurredEmojis: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingBlurredEmoji
        emoji="⚔️"
        top="8%"
        left="6%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-30 dark:opacity-20"
        duration={9}
        rotate={-10}
      />
      <FloatingBlurredEmoji
        emoji="🛡️"
        top="18%"
        right="8%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-25 dark:opacity-15"
        duration={10}
        delay={1.5}
        rotate={12}
      />
      <FloatingBlurredEmoji
        emoji="🌐"
        top="48%"
        left="4%"
        size="text-xl sm:text-2xl"
        blur="blur-[2px]"
        opacity="opacity-25 dark:opacity-15"
        duration={8}
        delay={0.8}
        rotate={-15}
      />
      <FloatingBlurredEmoji
        emoji="🔍"
        top="55%"
        right="5%"
        size="text-lg sm:text-xl"
        blur="blur-[2px]"
        opacity="opacity-20 dark:opacity-15"
        duration={12}
        delay={2}
        rotate={20}
      />
      <FloatingBlurredEmoji
        emoji="⚙️"
        bottom="12%"
        left="10%"
        size="text-xl sm:text-2xl"
        blur="blur-[2px]"
        opacity="opacity-25 dark:opacity-15"
        duration={7.5}
        delay={1}
        rotate={-6}
      />
      <FloatingBlurredEmoji
        emoji="🏆"
        bottom="10%"
        right="12%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-30 dark:opacity-20"
        duration={9.5}
        delay={0.3}
        rotate={8}
      />
    </div>
  );
};

export const ProjectsBlurredEmojis: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingBlurredEmoji
        emoji="📂"
        top="5%"
        left="5%"
        size="text-xl sm:text-2xl"
        blur="blur-[2px]"
        opacity="opacity-25 dark:opacity-15"
        duration={8}
        rotate={-8}
      />
      <FloatingBlurredEmoji
        emoji="🔬"
        top="35%"
        right="3%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-25 dark:opacity-15"
        duration={10}
        delay={1}
        rotate={10}
      />
      <FloatingBlurredEmoji
        emoji="📊"
        bottom="18%"
        left="3%"
        size="text-lg sm:text-xl"
        blur="blur-[2px]"
        opacity="opacity-20 dark:opacity-15"
        duration={11}
        delay={2}
        rotate={15}
      />
      <FloatingBlurredEmoji
        emoji="🎖️"
        bottom="10%"
        right="6%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-25 dark:opacity-15"
        duration={9}
        delay={0.5}
        rotate={-12}
      />
    </div>
  );
};

export const CertificationsBlurredEmojis: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingBlurredEmoji
        emoji="📜"
        top="8%"
        right="6%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-25 dark:opacity-15"
        duration={9}
        rotate={10}
      />
      <FloatingBlurredEmoji
        emoji="🏅"
        top="40%"
        left="4%"
        size="text-xl sm:text-2xl"
        blur="blur-[2px]"
        opacity="opacity-20 dark:opacity-15"
        duration={10}
        delay={1}
        rotate={-8}
      />
      <FloatingBlurredEmoji
        emoji="🎓"
        bottom="12%"
        right="8%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-25 dark:opacity-15"
        duration={12}
        delay={2}
        rotate={14}
      />
    </div>
  );
};

export const EducationBlurredEmojis: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingBlurredEmoji
        emoji="🚂"
        top="8%"
        right="6%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-30 dark:opacity-20"
        duration={10}
        rotate={-10}
      />
      <FloatingBlurredEmoji
        emoji="🏫"
        top="25%"
        left="4%"
        size="text-xl sm:text-2xl"
        blur="blur-[2px]"
        opacity="opacity-20 dark:opacity-15"
        duration={8}
        delay={1.2}
        rotate={8}
      />
      <FloatingBlurredEmoji
        emoji="📚"
        bottom="22%"
        right="5%"
        size="text-xl sm:text-2xl"
        blur="blur-[2px]"
        opacity="opacity-25 dark:opacity-15"
        duration={9}
        delay={0.7}
        rotate={-6}
      />
      <FloatingBlurredEmoji
        emoji="🎓"
        bottom="12%"
        left="6%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-25 dark:opacity-20"
        duration={11}
        delay={2}
        rotate={12}
      />
    </div>
  );
};

export const WorkTogetherBlurredEmojis: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingBlurredEmoji
        emoji="🤝"
        top="10%"
        left="6%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-25 dark:opacity-15"
        duration={8}
        rotate={-10}
      />
      <FloatingBlurredEmoji
        emoji="💬"
        top="16%"
        right="8%"
        size="text-2xl sm:text-3xl"
        blur="blur-[2.5px]"
        opacity="opacity-25 dark:opacity-15"
        duration={10}
        delay={1}
        rotate={12}
      />
      <FloatingBlurredEmoji
        emoji="📬"
        bottom="15%"
        left="8%"
        size="text-lg sm:text-xl"
        blur="blur-[2px]"
        opacity="opacity-20 dark:opacity-15"
        duration={9}
        delay={1.5}
        rotate={-14}
      />
      <FloatingBlurredEmoji
        emoji="⚡"
        bottom="12%"
        right="7%"
        size="text-xl sm:text-2xl"
        blur="blur-[2.5px]"
        opacity="opacity-20 dark:opacity-15"
        duration={11}
        delay={0.5}
        rotate={10}
      />
    </div>
  );
};
