import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Palette,
  Megaphone,
  ShieldCheck,
  Trophy,
  GraduationCap,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronDown,
  Building2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface ExperienceStage {
  id: string;
  stepNumber: string;
  numberPrefix: number;
  role: string;
  shortTitle: string;
  company: string;
  period: string;
  durationLabel: string;
  location: string;
  isCurrent?: boolean;
  icon: React.ReactNode;
  summary: string;
  achievements: string[];
}

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const stages: ExperienceStage[] = [
    {
      id: 'fnf-soft',
      stepNumber: '01',
      numberPrefix: 1,
      role: 'Social Media Manager & Creative Design',
      shortTitle: 'Creative Design & Brand Identity',
      company: 'FNF Soft',
      period: 'Sep 2023 - Feb 2024',
      durationLabel: '6 Months',
      location: 'Dhaka, Bangladesh',
      icon: <Palette className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      summary:
        "Managed the company's digital presence, creating engaging visual brand architecture to promote enterprise software services and community outreach.",
      achievements: [
        'Designed & published 100+ digital campaign assets maintaining cross-platform visual consistency.',
        'Structured lead messaging workflows that boosted organic software service inquiries.',
        'Established cohesive brand guidelines across customer-facing touchpoints.',
      ],
    },
    {
      id: 'digital-soft-zone',
      stepNumber: '02',
      numberPrefix: 2,
      role: 'Social Media Manager & Brand Architect',
      shortTitle: 'Brand Architecture & Content Strategy',
      company: 'Digital Soft Zone',
      period: 'Mar 2024 - Aug 2024',
      durationLabel: '6 Months',
      location: 'Dhaka, Bangladesh',
      icon: <Megaphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
      summary:
        'Engineered monthly content architectures, evaluated user engagement analytics, and aligned complex software capabilities with accessible marketing visuals.',
      achievements: [
        'Executed systematic content distribution schedules improving overall engagement rates.',
        'Designed high-impact visual communications that clarified software value propositions.',
        'Partnered with product engineering teams to ensure accurate technical representations.',
      ],
    },
    {
      id: 'branddora',
      stepNumber: '03',
      numberPrefix: 3,
      role: 'Social Media Growth Specialist & Cyber Safety Lead',
      shortTitle: 'Cyber Safety & Enterprise Growth',
      company: 'Branddora',
      period: 'Jul 2025 - Sep 2025',
      durationLabel: '3 Months',
      location: 'Dhaka, Bangladesh',
      icon: <ShieldCheck className="w-4 h-4 text-violet-600 dark:text-violet-400" />,
      summary:
        'Combined organic audience expansion with cyber safety: hardened social infrastructure, implemented MFA protocols, and audited social engineering vulnerabilities.',
      achievements: [
        'Hardened corporate access control and implemented mandatory multi-factor authentication.',
        'Conducted social engineering vulnerability audits to protect organization assets.',
        'Leveraged audience behavioral analytics to accelerate organic channel growth.',
      ],
    },
    {
      id: 'bcs-ict-fest',
      stepNumber: '04',
      numberPrefix: 4,
      role: 'Volunteer & Operations Coordinator',
      shortTitle: 'Conference Operations & Leadership',
      company: 'Bangladesh Computer Society (BCS ICT FEST 2026)',
      period: 'Sep 2026 - Present',
      durationLabel: 'Current',
      location: 'Dhaka, Bangladesh',
      isCurrent: true,
      icon: <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      summary:
        'Actively coordinating operational workflows, technical testbed setups, and stage participant logistics for the national BCS ICT FEST 2026 conference.',
      achievements: [
        'Collaborating with organizing committee leads across competitive technical programming stages.',
        'Spearheading university campus outreach and delegating real-time logistic schedules.',
        'Facilitating keynote sessions, guest speakers, and national hackathon participants.',
      ],
    },
    {
      id: 'diu-graduate',
      stepNumber: '05',
      numberPrefix: 5,
      role: 'M.Sc. in Software Engineering (Major in Cyber Security)',
      shortTitle: 'Offensive Security & Graduate Defense',
      company: 'Daffodil International University (DIU)',
      period: 'Sep 2021 - Expected May 2026',
      durationLabel: 'Graduate',
      location: 'Dhaka, Bangladesh',
      icon: <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      summary:
        'Defended undergraduate thesis and advancing specialized graduate research in offensive security, vulnerability telemetry, and red team exploit laboratories.',
      achievements: [
        'Defended final year engineering thesis on automated microservice vulnerability telemetry.',
        'Completed 45+ hands-on offensive security virtual rooms on TryHackMe (Top 10% Global).',
        'Specializing in Linux kernel exploitation, network protocol analysis, and MITRE mapping.',
      ],
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="journey"
      className="relative py-16 sm:py-24 w-full px-4 sm:px-6 lg:px-8 text-left overflow-hidden bg-[#FAF9F6]/90 dark:bg-[#0A0D14]/90 backdrop-blur-md transition-colors duration-300"
    >
      {/* Subtle ambient blur glow in background */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-500/5 via-sky-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-violet-500/5 via-teal-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ========================================================================= */}
        {/* HEADER BLOCK (EXACTLY MATCHING USER'S IMAGE.PNG LAYOUT)                    */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-left"
          >
            {/* Top Green/Glass Pill Badge (Matching image.png "Project Details" pill) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 text-xs font-semibold shadow-2xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Work Experience</span>
            </div>

            {/* Main Big Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
              Building a Resilient Cybersecurity &amp; Engineering Track Record
            </h2>

            {/* Subtitle Paragraph */}
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed font-sans">
              From creative brand systems and IT operations to offensive penetration testing, conference coordination, and graduate defense—structured into five sequential milestones.
            </p>
          </motion.div>

          {/* Right Top Date / Milestone Badges (Matching image.png dual box layout) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center self-start lg:self-auto gap-1 p-1.5 rounded-2xl bg-white/70 dark:bg-[#111622]/70 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-sm"
          >
            <div className="px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400">
              Sep 2023
            </div>
            <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-400/20 dark:from-emerald-500/30 dark:to-teal-500/30 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-xs font-mono font-bold shadow-2xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>May 2026</span>
            </div>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* STEPPED WORKFLOW TIMELINE WITH GLASS BENTO CARDS & DASHED CONNECTORS       */}
        {/* Alternating left-to-right stepped layout matching image.png                 */}
        {/* ========================================================================= */}
        <div className="relative w-full">
          {/* ----------------------------------------------------------------------- */}
          {/* STEP 1: Top-Left (FNF Soft)                                             */}
          {/* ----------------------------------------------------------------------- */}
          <div className="relative w-full flex justify-start">
            <GlassStepCard
              stage={stages[0]}
              isExpanded={expandedId === stages[0].id}
              onToggle={() => toggleExpand(stages[0].id)}
            />
          </div>

          {/* CONNECTOR 1 -> 2: Dashed curved step going right and down to Step 2 */}
          <div className="hidden lg:block relative w-full h-24 my-1 pointer-events-none select-none">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 96"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="arrow-1"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 7 5 L 0 9 z" fill="currentColor" className="text-neutral-400 dark:text-neutral-600" />
                </marker>
              </defs>
              {/* Stepped path from top-left card right edge (around x=420) over to x=640, down to y=90 */}
              <path
                d="M 390 12 H 620 Q 640 12 640 32 V 85"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeDasharray="5 5"
                className="text-neutral-300 dark:text-neutral-700"
                fill="none"
                markerEnd="url(#arrow-1)"
              />
              <circle cx="390" cy="12" r="3.5" className="fill-emerald-500" />
            </svg>
          </div>

          {/* Mobile vertical line divider */}
          <div className="lg:hidden flex justify-center py-3">
            <div className="w-0.5 h-8 border-l-2 border-dashed border-neutral-300 dark:border-neutral-700" />
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* STEP 2: Shifted Right (Digital Soft Zone)                               */}
          {/* ----------------------------------------------------------------------- */}
          <div className="relative w-full flex justify-start lg:justify-end">
            <GlassStepCard
              stage={stages[1]}
              isExpanded={expandedId === stages[1].id}
              onToggle={() => toggleExpand(stages[1].id)}
            />
          </div>

          {/* CONNECTOR 2 -> 3: Dashed curved step going left and down to Step 3 */}
          <div className="hidden lg:block relative w-full h-24 my-1 pointer-events-none select-none">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 96"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="arrow-2"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 7 5 L 0 9 z" fill="currentColor" className="text-neutral-400 dark:text-neutral-600" />
                </marker>
              </defs>
              {/* Path from right card left side (around x=560) curving left over to x=320, down to y=85 */}
              <path
                d="M 580 12 H 340 Q 320 12 320 32 V 85"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeDasharray="5 5"
                className="text-neutral-300 dark:text-neutral-700"
                fill="none"
                markerEnd="url(#arrow-2)"
              />
              <circle cx="580" cy="12" r="3.5" className="fill-cyan-500" />
            </svg>
          </div>

          {/* Mobile vertical line divider */}
          <div className="lg:hidden flex justify-center py-3">
            <div className="w-0.5 h-8 border-l-2 border-dashed border-neutral-300 dark:border-neutral-700" />
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* STEP 3: Shifted Left (Branddora)                                        */}
          {/* ----------------------------------------------------------------------- */}
          <div className="relative w-full flex justify-start">
            <GlassStepCard
              stage={stages[2]}
              isExpanded={expandedId === stages[2].id}
              onToggle={() => toggleExpand(stages[2].id)}
            />
          </div>

          {/* CONNECTOR 3 -> 4: Dashed curved step going right and down to Step 4 */}
          <div className="hidden lg:block relative w-full h-24 my-1 pointer-events-none select-none">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 96"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="arrow-3"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 7 5 L 0 9 z" fill="currentColor" className="text-neutral-400 dark:text-neutral-600" />
                </marker>
              </defs>
              <path
                d="M 390 12 H 620 Q 640 12 640 32 V 85"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeDasharray="5 5"
                className="text-neutral-300 dark:text-neutral-700"
                fill="none"
                markerEnd="url(#arrow-3)"
              />
              <circle cx="390" cy="12" r="3.5" className="fill-violet-500" />
            </svg>
          </div>

          {/* Mobile vertical line divider */}
          <div className="lg:hidden flex justify-center py-3">
            <div className="w-0.5 h-8 border-l-2 border-dashed border-neutral-300 dark:border-neutral-700" />
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* STEP 4: Shifted Right (BCS ICT FEST 2026)                               */}
          {/* ----------------------------------------------------------------------- */}
          <div className="relative w-full flex justify-start lg:justify-end">
            <GlassStepCard
              stage={stages[3]}
              isExpanded={expandedId === stages[3].id}
              onToggle={() => toggleExpand(stages[3].id)}
            />
          </div>

          {/* CONNECTOR 4 -> 5: Dashed curved step going left and down to Step 5 */}
          <div className="hidden lg:block relative w-full h-24 my-1 pointer-events-none select-none">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 96"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="arrow-4"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 7 5 L 0 9 z" fill="currentColor" className="text-neutral-400 dark:text-neutral-600" />
                </marker>
              </defs>
              <path
                d="M 580 12 H 340 Q 320 12 320 32 V 85"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeDasharray="5 5"
                className="text-neutral-300 dark:text-neutral-700"
                fill="none"
                markerEnd="url(#arrow-4)"
              />
              <circle cx="580" cy="12" r="3.5" className="fill-amber-500" />
            </svg>
          </div>

          {/* Mobile vertical line divider */}
          <div className="lg:hidden flex justify-center py-3">
            <div className="w-0.5 h-8 border-l-2 border-dashed border-neutral-300 dark:border-neutral-700" />
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* STEP 5: Centered / Left Final Milestone (Daffodil Graduate Defense)     */}
          {/* ----------------------------------------------------------------------- */}
          <div className="relative w-full flex justify-start">
            <GlassStepCard
              stage={stages[4]}
              isExpanded={expandedId === stages[4].id}
              onToggle={() => toggleExpand(stages[4].id)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================================= */
/* REUSABLE GLASS BENTO CARD (MEETING USER REQUIREMENT: NO SOLID COLOR, GLASS EFFECT, HALKA GRADIENT) */
/* ============================================================================= */
interface GlassStepCardProps {
  stage: ExperienceStage;
  isExpanded: boolean;
  onToggle: () => void;
}

const GlassStepCard: React.FC<GlassStepCardProps> = ({
  stage,
  isExpanded,
  onToggle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full lg:w-[480px] xl:w-[500px] flex items-stretch group"
    >
      {/* 
        The Card Container:
        - Glassmorphism backdrop-blur-2xl
        - Light subtle gradient wash ("halka gradient color kore")
        - No heavy/solid background color fill
        - Delicate glass reflection border
        - Soft ambient depth shadow
      */}
      <div className="relative w-full rounded-[28px] sm:rounded-3xl bg-gradient-to-br from-white/85 via-white/55 to-slate-50/40 dark:from-[#111724]/80 dark:via-[#0F1420]/55 dark:to-[#0B0F18]/40 backdrop-blur-2xl border border-white/80 dark:border-white/10 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.02)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.45)] hover:shadow-[0_20px_48px_-8px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:border-neutral-300/80 dark:hover:border-white/20 transition-all duration-300 p-4 sm:p-5 flex items-stretch gap-3.5 sm:gap-4 overflow-hidden">
        {/* Subtle glass reflection highlight along top edge */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent pointer-events-none" />

        {/* ===================================================================== */}
        {/* 1. LEFT VERTICAL DURATION PILL (MATCHING IMAGE.PNG "1 Week" PILL)    */}
        {/* ===================================================================== */}
        <div className="relative shrink-0 w-8 sm:w-9 rounded-2xl bg-neutral-900/95 dark:bg-white/10 text-white dark:text-neutral-200 border border-neutral-800/80 dark:border-white/10 shadow-xs flex flex-col items-center justify-between py-3 select-none">
          {/* Subtle top indicator dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-emerald-300 shadow-2xs" />

          {/* Vertical rotated text label */}
          <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold uppercase text-neutral-300 dark:text-neutral-200 text-center my-auto">
            {stage.durationLabel}
          </span>

          {/* Subtle bottom decorative dash */}
          <div className="w-2 h-0.5 rounded-full bg-neutral-700 dark:bg-neutral-500" />
        </div>

        {/* ===================================================================== */}
        {/* 2. CARD CONTENT AREA                                                 */}
        {/* ===================================================================== */}
        <div className="flex-1 min-w-0 text-left flex flex-col justify-between py-0.5">
          <div>
            {/* Header row: Icon + Number + Title (Matching image.png: "icon 1 Research") */}
            <div className="flex items-center gap-2.5 mb-2">
              {/* Soft frosted glass icon container */}
              <div className="w-8 h-8 rounded-xl bg-white/90 dark:bg-neutral-800/80 border border-neutral-200/70 dark:border-neutral-700/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                {stage.icon}
              </div>

              {/* Number and Role Title */}
              <div className="min-w-0 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white tracking-tight leading-snug flex items-center gap-1.5 truncate">
                  <span className="text-neutral-400 dark:text-neutral-500 font-mono text-xs sm:text-sm">
                    {stage.numberPrefix}
                  </span>
                  <span className="truncate">{stage.shortTitle}</span>
                </h3>
              </div>
            </div>

            {/* Sub-header: Company & Location */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 mb-2.5">
              <span className="font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1">
                <Building2 className="w-3 h-3 text-neutral-400 shrink-0" />
                <span className="truncate">{stage.company}</span>
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-neutral-400">
                <Clock className="w-3 h-3" />
                <span>{stage.period}</span>
              </span>
            </div>

            {/* Role designation badge */}
            <div className="mb-2.5">
              <span className="inline-block px-2.5 py-0.5 rounded-lg bg-neutral-100/90 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 text-[11px] font-medium border border-neutral-200/60 dark:border-neutral-700/60">
                {stage.role}
              </span>
            </div>

            {/* Summary paragraph (Matching image.png body copy) */}
            <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans mb-3">
              {stage.summary}
            </p>

            {/* Expandable Key Achievements List */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-1.5 pt-2.5 pb-1 border-t border-neutral-200/60 dark:border-neutral-800/80 mb-2">
                    {stage.achievements.map((ach, aIdx) => (
                      <li
                        key={aIdx}
                        className="text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-2 leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer toolbar: Toggle achievements details + current role status */}
          <div className="pt-2 border-t border-neutral-200/50 dark:border-neutral-800/60 flex items-center justify-between text-[11px]">
            <button
              onClick={onToggle}
              className="inline-flex items-center gap-1 font-mono font-medium text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer transition-colors"
            >
              <span>{isExpanded ? 'Hide Key Highlights' : 'View Key Highlights (3)'}</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-[10px]">
              <MapPin className="w-3 h-3" />
              <span>{stage.location.split(',')[0]}</span>
              {stage.isCurrent && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
