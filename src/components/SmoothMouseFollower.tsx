import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface CursorState {
  type: 'default' | 'hover' | 'view' | 'read' | 'explore' | 'drag';
  label?: string;
}

export const SmoothMouseFollower: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(true);
  const [cursorState, setCursorState] = useState<CursorState>({ type: 'default' });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const cursorSpringConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const smoothX = useSpring(mouseX, cursorSpringConfig);
  const smoothY = useSpring(mouseY, cursorSpringConfig);

  const haloSpringConfig = { stiffness: 120, damping: 25, mass: 0.8 };
  const haloX = useSpring(mouseX, haloSpringConfig);
  const haloY = useSpring(mouseY, haloSpringConfig);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const matchMedia = window.matchMedia('(pointer: fine)');
      setIsPointerDevice(matchMedia.matches);
      const handlePointerChange = (e: MediaQueryListEvent) => {
        setIsPointerDevice(e.matches);
      };
      matchMedia.addEventListener('change', handlePointerChange);
      return () => matchMedia.removeEventListener('change', handlePointerChange);
    }
  }, []);

  useEffect(() => {
    if (!isPointerDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const customType = cursorTarget.getAttribute('data-cursor') as CursorState['type'];
        const customLabel = cursorTarget.getAttribute('data-cursor-label') || undefined;
        setCursorState({
          type: customType || 'hover',
          label: customLabel || (customType === 'view' ? 'VIEW ↗' : customType === 'read' ? 'READ ↗' : customType === 'explore' ? 'EXPLORE' : undefined),
        });
        return;
      }

      const interactiveTarget = target.closest('button, a, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])');
      if (interactiveTarget) {
        setCursorState({ type: 'hover' });
        return;
      }

      setCursorState({ type: 'default' });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isPointerDevice, isVisible, mouseX, mouseY]);

  if (!isPointerDevice || !isVisible) {
    return null;
  }

  const isExpanded = cursorState.type !== 'default';
  const hasLabel = Boolean(cursorState.label);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      <motion.div
        style={{
          x: haloX,
          y: haloY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-[440px] h-[440px] rounded-full will-change-transform opacity-60 dark:opacity-45"
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12)_0%,rgba(16,185,129,0.08)_35%,rgba(210,248,36,0.04)_55%,transparent_70%)] blur-[40px] dark:bg-[radial-gradient(circle,rgba(56,189,248,0.18)_0%,rgba(16,185,129,0.14)_35%,rgba(210,248,36,0.08)_55%,transparent_75%)]" />
      </motion.div>

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hasLabel ? 84 : isExpanded ? 46 : 28,
          height: hasLabel ? 32 : isExpanded ? 46 : 28,
          borderRadius: hasLabel ? 16 : 9999,
          scale: isExpanded ? 1.05 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 420,
          damping: 28,
        }}
        className={`fixed top-0 left-0 flex items-center justify-center will-change-transform transition-colors duration-200 ${
          hasLabel
            ? 'bg-neutral-950/90 dark:bg-white/95 text-white dark:text-neutral-950 shadow-lg border border-neutral-700/40 dark:border-white/20 backdrop-blur-md px-3'
            : isExpanded
            ? 'border-2 border-emerald-500/70 dark:border-[#D2F824]/80 bg-emerald-500/10 dark:bg-[#D2F824]/10 backdrop-blur-[1px]'
            : 'border border-neutral-400/60 dark:border-neutral-500/60 bg-transparent'
        }`}
      >
        {hasLabel && (
          <span className="text-[10px] font-black tracking-wider uppercase whitespace-nowrap">
            {cursorState.label}
          </span>
        )}
      </motion.div>

      {!hasLabel && (
        <motion.div
          style={{
            x: smoothX,
            y: smoothY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isExpanded ? 0 : 1,
            opacity: isExpanded ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white will-change-transform shadow-xs"
        />
      )}
    </div>
  );
};
