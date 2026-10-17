import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  MoreHorizontal,
  X,
  Workflow
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export interface SkillCategory {
  id: string;
  name: string;
  tagline: string;
  shortRole: string;
  handwrittenNote: string;
  themeColor: 'emerald' | 'amber' | 'blue' | 'purple';
  status: string;
  characterType: 'green-blob' | 'yellow-blob' | 'blue-blob' | 'purple-blob';
  floatingBadges: {
    icon: string;
    label: string;
    sublabel?: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'mid-right';
  }[];
  overview: string;
  expertise: {
    tier: string;
    badge: string;
    experienceNote: string;
    provenIn: string;
  };
  tools: { name: string; proficiency: number; level: string; icon: string }[];
  featuredConcepts: string[];
  thmRooms: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'offensive-security',
    name: 'Red Teamer',
    tagline: 'Your offensive penetration & vulnerability companion',
    shortRole: 'Offensive Security & Red Teaming',
    handwrittenNote: 'A stealthier you',
    themeColor: 'emerald',
    status: 'Active now',
    characterType: 'green-blob',
    floatingBadges: [
      {
        icon: '🧠',
        label: 'Think Clearer',
        sublabel: 'Vulnerability Logic',
        position: 'top-left',
      },
      {
        icon: '⚡',
        label: 'Better Habits',
        sublabel: 'Zero-Day Mindset',
        position: 'mid-right',
      },
    ],
    overview:
      'Specialized in proactive vulnerability discovery, penetration testing methodologies, privilege escalation, and reconnaissance against enterprise attack surfaces.',
    expertise: {
      tier: 'Advanced Practitioner (92%)',
      badge: 'Top 5% TryHackMe Global',
      experienceNote:
        'Active offensive penetration researcher with 45+ cleared rooms. Proven expertise in automated LinPEAS discovery, SUID privilege escalation, and Burp Suite intruder attacks.',
      provenIn: 'TryHackMe, Kali Linux & MSc Red Team Thesis',
    },
    tools: [
      { name: 'Burp Suite Pro', proficiency: 92, level: 'Advanced', icon: '🎯' },
      { name: 'Metasploit Framework', proficiency: 88, level: 'Proficient', icon: '⚡' },
      { name: 'Nmap & Netcat', proficiency: 95, level: 'Expert', icon: '🔍' },
      { name: 'SQLMap & OWASP ZAP', proficiency: 86, level: 'Advanced', icon: '🛡️' },
      { name: 'Hydra & JohnTheRipper', proficiency: 84, level: 'Proficient', icon: '🔑' },
    ],
    featuredConcepts: [
      'Active Directory Exploitation',
      'OWASP Top 10 Mitigation',
      'Privilege Escalation (Linux/Win)',
      'Subnet Pivoting & Tunneling',
      'Social Engineering Awareness',
    ],
    thmRooms: ['Blue (EternalBlue)', 'Steel Mountain', 'Kenobi', 'Internal Labs'],
  },
  {
    id: 'network-defense',
    name: 'Net Sentinel',
    tagline: 'Deep packet inspection & hardened perimeter architect',
    shortRole: 'Network Security & Hardening',
    handwrittenNote: 'Build better days',
    themeColor: 'amber',
    status: 'Monitoring 24/7',
    characterType: 'yellow-blob',
    floatingBadges: [
      {
        icon: '🛡️',
        label: 'Hardened Shields',
        sublabel: 'Zero Trust Baseline',
        position: 'top-left',
      },
      {
        icon: '🌊',
        label: 'Packet Flow',
        sublabel: 'Deep Triage',
        position: 'mid-right',
      },
    ],
    overview:
      'Rigorous foundation in computer networking protocols (TCP/IP, UDP, DNS, BGP), encrypted traffic analysis, intrusion detection concepts, and boundary firewall configuration.',
    expertise: {
      tier: 'Proficient Architect (89%)',
      badge: 'Zero Trust & Deep Triage',
      experienceNote:
        'Hands-on packet analysis with Wireshark & TShark, secure subnet segmentation, Linux IPTables hardening, and real-time boundary firewall policy configuration.',
      provenIn: 'Cisco Packet Tracer, Suricata IDS & WireGuard',
    },
    tools: [
      { name: 'Wireshark & TShark', proficiency: 90, level: 'Advanced', icon: '📡' },
      { name: 'Linux IPTables & UFW', proficiency: 92, level: 'Advanced', icon: '🧱' },
      { name: 'Snort / Suricata (IDS)', proficiency: 80, level: 'Intermediate', icon: '🚨' },
      { name: 'Cisco Packet Tracer', proficiency: 88, level: 'Proficient', icon: '🌐' },
      { name: 'VPN & WireGuard Tunnels', proficiency: 85, level: 'Advanced', icon: '🔒' },
    ],
    featuredConcepts: [
      'Traffic Anomaly Detection',
      'MITM Attack Neutralization',
      'Secure VLAN Segmentation',
      'DNS Poisoning Prevention',
      'TLS Certificate Auditing',
    ],
    thmRooms: ['Wireshark 101', 'Network Fundamentals', 'Snort Intro'],
  },
  {
    id: 'web-cloud-security',
    name: 'Web Guardian',
    tagline: 'Modern application shielding & cloud API resilience',
    shortRole: 'Web App Security & Cloud APIs',
    handwrittenNote: 'Feel in control',
    themeColor: 'blue',
    status: 'Real-time Audit',
    characterType: 'blue-blob',
    floatingBadges: [
      {
        icon: '🔒',
        label: 'API Fortification',
        sublabel: 'Token Defense',
        position: 'top-left',
      },
      {
        icon: '🎯',
        label: 'Strict Auth',
        sublabel: 'Zero Leakage',
        position: 'mid-right',
      },
    ],
    overview:
      'In-depth testing and auditing of RESTful APIs, modern web stacks, authentication flows (JWT/OAuth), and cloud configurations to prevent data exfiltration and business logic flaws.',
    expertise: {
      tier: 'Advanced AppSec (88%)',
      badge: 'OWASP Top 10 Specialist',
      experienceNote:
        'Thorough auditing of RESTful APIs, session hijacking defense, Broken Object-Level Auth (BOLA) tests, and Docker container sandbox isolation.',
      provenIn: 'OWASP ZAP, Postman API Fuzzing & JWT Audits',
    },
    tools: [
      { name: 'Postman & API Fuzzing', proficiency: 89, level: 'Advanced', icon: '📮' },
      { name: 'Git & CI/CD Security Audits', proficiency: 86, level: 'Proficient', icon: '🐙' },
      { name: 'Docker Container Hardening', proficiency: 84, level: 'Proficient', icon: '🐳' },
      { name: 'JWT & Session Analyzers', proficiency: 90, level: 'Advanced', icon: '🎫' },
      { name: 'Cloud Storage Bucket Audits', proficiency: 82, level: 'Intermediate', icon: '☁️' },
    ],
    featuredConcepts: [
      'Broken Object Level Auth (BOLA)',
      'Server-Side Request Forgery (SSRF)',
      'Cross-Site Scripting (XSS) Sanitization',
      'CORS & CSP Policy Enforcement',
      'Secrets Management & Scanning',
    ],
    thmRooms: ['OWASP Top 10', 'BOLA Workshop', 'Upload Vulnerabilities'],
  },
  {
    id: 'system-forensics',
    name: 'Kernel Sage',
    tagline: 'Low-level systems analysis & forensic breakdown',
    shortRole: 'Linux Kernel & Forensic Analysis',
    handwrittenNote: 'Decode the unseen',
    themeColor: 'purple',
    status: 'Deep Sandbox',
    characterType: 'purple-blob',
    floatingBadges: [
      {
        icon: '💻',
        label: 'Kernel Insight',
        sublabel: 'Process Triage',
        position: 'top-left',
      },
      {
        icon: '🔍',
        label: 'Static Triage',
        sublabel: 'String & Hex Dumps',
        position: 'mid-right',
      },
    ],
    overview:
      'Understanding of Linux system internals, file system permissions, process memory structures, shell scripting automation, and reverse engineering basics.',
    expertise: {
      tier: 'High Proficiency (91%)',
      badge: 'Linux Kernel & CLI Mastery',
      experienceNote:
        'In-depth mastery of Linux file systems, process memory triage, custom bash & python automation scripts, and SUID persistence artifact analysis.',
      provenIn: 'Kali Linux CLI, Ghidra & Memory Forensics',
    },
    tools: [
      { name: 'Bash & Python Scripting', proficiency: 93, level: 'Advanced', icon: '🐍' },
      { name: 'Ghidra & Radare2 Basics', proficiency: 78, level: 'Intermediate', icon: '🔬' },
      { name: 'Linux CLI & Cron Forensics', proficiency: 95, level: 'Expert', icon: '🐧' },
      { name: 'Autopsy / Disk Imaging', proficiency: 80, level: 'Intermediate', icon: '💾' },
      { name: 'Process Hacker & Sysinternals', proficiency: 86, level: 'Advanced', icon: '⚙️' },
    ],
    featuredConcepts: [
      'Linux File Permissions (SUID/SGID)',
      'Persistence Mechanism Detection',
      'Log Analysis with Grep/Awk/Sed',
      'Automated Vulnerability Probers',
      'Sandboxed Malware Execution',
    ],
    thmRooms: ['Linux PrivEsc', 'Investigating Windows', 'Volatility Basics'],
  },
];

const Clay3DMascot: React.FC<{
  type: 'green-blob' | 'yellow-blob' | 'blue-blob' | 'purple-blob';
  mousePos: { x: number; y: number };
}> = ({ type, mousePos }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 3800 + Math.random() * 2000);
    return () => clearInterval(blinkInterval);
  }, []);

  const pupilOffsetX = Math.max(-5, Math.min(5, mousePos.x * 6));
  const pupilOffsetY = Math.max(-4, Math.min(4, mousePos.y * 6));

  const themeConfig = {
    'green-blob': {
      baseGradient: ['#A7F3D0', '#34D399', '#059669', '#047857'],
      glow: '#34D399',
      highlight: '#D1FAE5',
      blush: '#6EE7B7',
      aura: 'from-emerald-400/20 via-teal-300/10 to-transparent',
    },
    'yellow-blob': {
      baseGradient: ['#FEF08A', '#FACC15', '#D97706', '#B45309'],
      glow: '#FACC15',
      highlight: '#FEF9C3',
      blush: '#FDE047',
      aura: 'from-amber-400/20 via-yellow-300/10 to-transparent',
    },
    'blue-blob': {
      baseGradient: ['#BFDBFE', '#60A5FA', '#2563EB', '#1D4ED8'],
      glow: '#60A5FA',
      highlight: '#DBEAFE',
      blush: '#93C5FD',
      aura: 'from-blue-400/20 via-sky-300/10 to-transparent',
    },
    'purple-blob': {
      baseGradient: ['#DDD6FE', '#A78BFA', '#7C3AED', '#6D28D9'],
      glow: '#A78BFA',
      highlight: '#EDE9FE',
      blush: '#C4B5FD',
      aura: 'from-purple-400/20 via-violet-300/10 to-transparent',
    },
  }[type];

  return (
    <div className="relative w-32 h-32 sm:w-38 sm:h-38 mx-auto flex items-center justify-center select-none pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.22, 0.35],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-2 w-28 sm:w-34 h-5 rounded-full bg-neutral-900/20 dark:bg-black/50 blur-lg"
      />
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [0, 1.5, -1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.18)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              id={`clayBodyGrad-${type}`}
              cx="38%"
              cy="34%"
              r="68%"
              fx="32%"
              fy="28%"
            >
              <stop offset="0%" stopColor={themeConfig.highlight} />
              <stop offset="28%" stopColor={themeConfig.baseGradient[0]} />
              <stop offset="65%" stopColor={themeConfig.baseGradient[1]} />
              <stop offset="90%" stopColor={themeConfig.baseGradient[2]} />
              <stop offset="100%" stopColor={themeConfig.baseGradient[3]} />
            </radialGradient>
            <linearGradient id={`sheenGrad-${type}`} x1="20%" y1="10%" x2="70%" y2="80%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <radialGradient id={`bottomShade-${type}`} cx="50%" cy="85%" r="50%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path
            d="M 100,32 C 128,32 150,44 162,64 C 176,84 176,112 165,134 C 152,156 128,168 100,168 C 70,168 46,156 34,134 C 22,112 24,84 38,64 C 50,44 72,32 100,32 Z"
            fill={`url(#clayBodyGrad-${type})`}
          />
          <path
            d="M 68,54 C 92,38 122,40 142,56 C 164,74 168,104 156,128 C 142,152 114,164 88,158 C 62,152 46,132 44,106 C 42,78 50,64 68,54 Z"
            fill={`url(#clayBodyGrad-${type})`}
            opacity="0.85"
          />
          <path
            d="M 36,124 C 54,162 146,162 164,124 C 146,156 54,156 36,124 Z"
            fill={`url(#bottomShade-${type})`}
          />
          <ellipse
            cx="76"
            cy="62"
            rx="36"
            ry="22"
            transform="rotate(-25 76 62)"
            fill={`url(#sheenGrad-${type})`}
          />
          <circle cx="58" cy="116" r="9" fill={themeConfig.blush} opacity="0.45" />
          <circle cx="142" cy="116" r="9" fill={themeConfig.blush} opacity="0.45" />

          <g transform={`translate(${pupilOffsetX}, ${pupilOffsetY})`}>
            {isBlinking ? (
              <path
                d="M 72,98 Q 78,102 84,98"
                stroke="#0F172A"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            ) : (
              <g>
                <ellipse cx="78" cy="98" rx="5.5" ry="8" fill="#0B132B" />
                <circle cx="76" cy="95" r="2.2" fill="#FFFFFF" />
              </g>
            )}
            {isBlinking ? (
              <path
                d="M 116,98 Q 122,102 128,98"
                stroke="#0F172A"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            ) : (
              <g>
                <ellipse cx="122" cy="98" rx="5.5" ry="8" fill="#0B132B" />
                <circle cx="120" cy="95" r="2.2" fill="#FFFFFF" />
              </g>
            )}
            <path
              d="M 94,110 Q 100,118 106,110"
              stroke="#0B132B"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export const SkillsStackSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<SkillCategory | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SKILL_CATEGORIES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SKILL_CATEGORIES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SKILL_CATEGORIES.length) % SKILL_CATEGORIES.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const currentCategory = SKILL_CATEGORIES[activeIndex];

  return (
    <section
      id="skills"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-neutral-900 dark:text-neutral-100 overflow-hidden bg-[#FAF9F5]/90 dark:bg-[#121316]/90 backdrop-blur-md transition-colors duration-300"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4] dark:opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-400/10 via-amber-300/10 to-blue-400/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white leading-tight flex items-center gap-2 whitespace-nowrap">
            <span>Skills & Technical Stack</span>
            <span className="text-xl sm:text-2xl"> </span>
          </h2>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 max-w-xl">
            Offensive cyber security tooling, perimeter defense, and cloud application safeguards.
          </p>
        </div>

        {/* DECK CONTROLS & HOVER INTERACTION POPOVER */}
        <div className="relative flex flex-col items-center justify-center mb-5 sm:mb-6">
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer active:scale-95"
              title="Previous Skill Card"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1 p-1 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 backdrop-blur-md shadow-xs">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const isSelected = activeIndex === idx;
                const isHovered = hoveredCategory?.id === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setHoveredCategory(cat)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onFocus={() => setHoveredCategory(cat)}
                    onBlur={() => setHoveredCategory(null)}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer relative ${
                      isSelected
                        ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-xs font-semibold'
                        : isHovered
                        ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold shadow-2xs'
                        : 'text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    <span>{cat.name}</span>
                    {isSelected && (
                      <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer active:scale-95"
              title="Next Skill Card"
              aria-label="Next card"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`w-9 h-9 rounded-full border shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95 ${
                isAutoPlay
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-emerald-500/25'
                  : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300'
              }`}
              title={isAutoPlay ? 'Pause Auto-Shuffle' : 'Start Auto-Shuffle'}
              aria-label="Toggle auto play"
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>
          </div>

          {/* CONTEXT-AWARE FLOATING EXPERTISE POPOVER ON HOVER */}
          <AnimatePresence>
            {hoveredCategory && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="absolute top-full mt-3 z-40 w-[92vw] max-w-lg p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-[#121622]/95 backdrop-blur-2xl border border-neutral-200/90 dark:border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] text-left"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white dark:bg-[#121622] border-t border-l border-neutral-200/90 dark:border-neutral-800" />
                <div className="relative z-10 flex items-center justify-between pb-3 mb-3 border-b border-neutral-100 dark:border-neutral-800/80">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl p-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-800">
                      {hoveredCategory.floatingBadges[0].icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-neutral-950 dark:text-white leading-tight">
                          {hoveredCategory.shortRole}
                        </h4>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 font-semibold">
                          {hoveredCategory.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        Domain Expertise Overview
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold border shadow-2xs bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {hoveredCategory.expertise.tier}
                    </span>
                  </div>
                </div>

                <div className="relative z-10 mb-3">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Hands-on Capability & Rigor</span>
                  </div>
                  <p className="text-xs text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal">
                    {hoveredCategory.expertise.experienceNote}
                  </p>
                </div>

                <div className="relative z-10 mb-3 pt-2.5 border-t border-neutral-100 dark:border-neutral-800/60">
                  <span className="text-[10px] font-mono text-neutral-400 block mb-1.5">
                    Flagship Tooling Proficiency:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hoveredCategory.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool.name}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-100/80 dark:bg-neutral-800/80 text-[10px] font-medium text-neutral-700 dark:text-neutral-300"
                      >
                        <span>{tool.icon}</span>
                        <span>{tool.name}</span>
                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                          {tool.proficiency}%
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-2 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between text-[10px] font-mono">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified: {hoveredCategory.expertise.provenIn}</span>
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-400 font-semibold">
                    {hoveredCategory.expertise.badge}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MAIN STACKED DECK */}
        <div className="relative w-full max-w-[310px] sm:max-w-[350px] mx-auto h-[460px] sm:h-[490px] flex items-center justify-center -translate-x-3 sm:-translate-x-5">
          {SKILL_CATEGORIES.map((category, index) => {
            const count = SKILL_CATEGORIES.length;
            const order = (index - activeIndex + count) % count;
            const isVisible = order <= 2;
            if (!isVisible) return null;

            const xOffset = order * 36;
            const yOffset = -order * 10;
            const rotate = order * 2.8;
            const scale = 1 - order * 0.04;
            const zIndex = 30 - order * 10;
            const opacity = order === 0 ? 1 : order === 1 ? 0.94 : 0.88;

            const cardTheme = {
              emerald: {
                canvasBg: 'from-emerald-50/90 via-emerald-100/50 to-emerald-50/30 dark:from-emerald-950/40 dark:via-emerald-900/20 dark:to-neutral-900',
                sparkleColor: 'text-emerald-500 dark:text-emerald-400',
                noteColor: 'text-emerald-800 dark:text-emerald-300',
                dotColor: 'bg-emerald-500',
              },
              amber: {
                canvasBg: 'from-amber-50/90 via-amber-100/50 to-amber-50/30 dark:from-amber-950/40 dark:via-amber-900/20 dark:to-neutral-900',
                sparkleColor: 'text-amber-500 dark:text-amber-400',
                noteColor: 'text-amber-800 dark:text-amber-300',
                dotColor: 'bg-amber-500',
              },
              blue: {
                canvasBg: 'from-blue-50/90 via-blue-100/50 to-blue-50/30 dark:from-blue-950/40 dark:via-blue-900/20 dark:to-neutral-900',
                sparkleColor: 'text-blue-500 dark:text-blue-400',
                noteColor: 'text-blue-800 dark:text-blue-300',
                dotColor: 'bg-blue-500',
              },
              purple: {
                canvasBg: 'from-purple-50/90 via-purple-100/50 to-purple-50/30 dark:from-purple-950/40 dark:via-purple-900/20 dark:to-neutral-900',
                sparkleColor: 'text-purple-500 dark:text-purple-400',
                noteColor: 'text-purple-800 dark:text-purple-300',
                dotColor: 'bg-purple-500',
              },
            }[category.themeColor];

            const isFrontCard = order === 0;

            return (
              <motion.div
                key={category.id}
                onClick={() => {
                  if (!isFrontCard) setActiveIndex(index);
                }}
                initial={false}
                animate={{
                  x: xOffset,
                  y: yOffset,
                  rotate,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 26,
                }}
                className={`absolute inset-0 w-full h-full rounded-[28px] sm:rounded-[34px] bg-white dark:bg-[#121622] border border-neutral-200/90 dark:border-neutral-800/90 shadow-[0_16px_40px_rgba(0,0,0,0.07)] dark:shadow-[0_20px_48px_rgba(0,0,0,0.55)] p-2.5 sm:p-3 flex flex-col justify-between select-none ${
                  !isFrontCard
                    ? 'cursor-pointer hover:translate-x-10 hover:-translate-y-3 hover:rotate-2 transition-transform duration-200'
                    : ''
                }`}
                style={{
                  transformOrigin: 'bottom center',
                }}
              >
                {!isFrontCard && (
                  <div className="absolute -top-3.5 right-6 z-50 px-2.5 py-0.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-[9px] font-mono font-bold shadow-xl border border-white/20 flex items-center gap-1 animate-pulse">
                    <span>Click: {category.name}</span>
                  </div>
                )}

                <div
                  className={`relative w-full h-[325px] sm:h-[350px] rounded-[22px] sm:rounded-[26px] bg-gradient-to-b ${cardTheme.canvasBg} border border-white/60 dark:border-white/5 p-3 sm:p-4 flex flex-col justify-between overflow-hidden shadow-inner`}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/40 dark:bg-white/5 blur-2xl rounded-full pointer-events-none" />
                  <div className="relative z-20 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/70 dark:border-neutral-800 backdrop-blur-md shadow-xs">
                        <span className={`w-1.5 h-1.5 rounded-full ${cardTheme.dotColor} animate-pulse`} />
                        <span className="text-[10px] font-semibold text-neutral-800 dark:text-neutral-200">
                          {category.status}
                        </span>
                      </div>
                      <div
                        onMouseEnter={() => setHoveredCategory(category)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/70 dark:border-neutral-800 hover:border-emerald-500/80 transition-all text-[9px] font-mono font-medium text-neutral-700 dark:text-neutral-300 shadow-2xs cursor-help"
                        title="Hover to view verified expertise level"
                      >
                        <Sparkles className="w-2.5 h-2.5 text-emerald-500" />
                        <span>{category.expertise.tier.split(' ')[0]}</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(category);
                      }}
                      className="w-7 h-7 rounded-full bg-white/90 dark:bg-neutral-900/90 border border-neutral-200/70 dark:border-neutral-800 backdrop-blur-md flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-800 shadow-xs transition-colors cursor-pointer"
                      title="Inspect Category Specs"
                      aria-label="Category details"
                    >
                      <MoreHorizontal className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="relative my-auto flex items-center justify-center">
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 3.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute -top-2 left-0 z-20 px-2 py-1.5 rounded-xl bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md border border-white/70 dark:border-white/10 shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(category);
                      }}
                    >
                      <span className="text-sm">{category.floatingBadges[0].icon}</span>
                      <div className="text-left">
                        <p className="text-[11px] font-bold text-neutral-900 dark:text-white leading-tight">
                          {category.floatingBadges[0].label}
                        </p>
                        {category.floatingBadges[0].sublabel && (
                          <p className="text-[9px] text-neutral-500 dark:text-neutral-400 font-mono">
                            {category.floatingBadges[0].sublabel}
                          </p>
                        )}
                      </div>
                    </motion.div>

                    <Clay3DMascot
                      type={category.characterType}
                      mousePos={isFrontCard ? mousePos : { x: 0, y: 0 }}
                    />

                    <motion.div
                      animate={{
                        y: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        delay: 0.6,
                        ease: 'easeInOut',
                      }}
                      className="absolute top-10 -right-1 sm:-right-2 z-20 px-2 py-1.5 rounded-xl bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md border border-white/70 dark:border-white/10 shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCategory(category);
                      }}
                    >
                      <span className="text-sm">{category.floatingBadges[1].icon}</span>
                      <div className="text-left">
                        <p className="text-[11px] font-bold text-neutral-900 dark:text-white leading-tight">
                          {category.floatingBadges[1].label}
                        </p>
                        {category.floatingBadges[1].sublabel && (
                          <p className="text-[9px] text-neutral-500 dark:text-neutral-400 font-mono">
                            {category.floatingBadges[1].sublabel}
                          </p>
                        )}
                      </div>
                    </motion.div>

                    <div className="absolute -bottom-1.5 right-3 z-20 flex flex-col items-center pointer-events-none select-none">
                      <span
                        className={`text-[10px] font-serif italic ${cardTheme.noteColor} tracking-tight font-medium`}
                      >
                        {category.handwrittenNote}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-1 pt-2 pb-0.5 flex items-center justify-between gap-2">
                  <div
                    onMouseEnter={() => setHoveredCategory(category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    className="text-left max-w-[170px] sm:max-w-[190px] cursor-help"
                  >
                    <div className="flex items-center gap-1">
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-neutral-950 dark:text-white leading-none">
                        {category.name}
                      </h3>
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light truncate mt-0.5">
                      {category.tagline}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory(category);
                    }}
                    className="px-3 py-1.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-[11px] font-semibold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    <span>Details</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM SPECS SUMMARY BAR */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800/80 p-4 sm:p-6 backdrop-blur-md shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div
              onMouseEnter={() => setHoveredCategory(currentCategory)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="flex items-center gap-3 cursor-help"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                    Active Focus: {currentCategory.shortRole}
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800">
                    {currentCategory.expertise.tier.split(' ')[0]}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {currentCategory.tools.map((t) => t.name).slice(0, 3).join(' · ')} + more
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedCategory(currentCategory)}
                className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-xs font-semibold text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer"
              >
                Inspect Tools ({currentCategory.tools.length})
              </button>
              <a
                href={PERSONAL_INFO.tryHackMeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
              >
                <span>TryHackMe Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY DRAWER MODAL */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#141824] border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 text-left"
            >
              <button
                onClick={() => setSelectedCategory(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
                aria-label="Close skill details"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">
                  {selectedCategory.characterType === 'green-blob'
                    ? '🟢'
                    : selectedCategory.characterType === 'yellow-blob'
                    ? '🟡'
                    : selectedCategory.characterType === 'blue-blob'
                    ? '🔵'
                    : '🟣'}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
                    {selectedCategory.name} · {selectedCategory.shortRole}
                  </h3>
                  <p className="text-xs text-neutral-500 font-mono">
                    STATUS: {selectedCategory.status.toUpperCase()}
                  </p>
                </div>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                {selectedCategory.overview}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Primary Tooling & Command Proficiency</span>
                </h4>
                <div className="space-y-3">
                  {selectedCategory.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-100 dark:border-neutral-800/80"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                        <span className="flex items-center gap-2 text-neutral-900 dark:text-white">
                          <span>{tool.icon}</span>
                          <span>{tool.name}</span>
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-neutral-500">
                            {tool.level}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                            {tool.proficiency}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tool.proficiency}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                  <Workflow className="w-3.5 h-3.5 text-blue-500" />
                  <span>Key Methodologies & Techniques</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCategory.featuredConcepts.map((concept) => (
                    <div
                      key={concept}
                      className="px-3 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/60 text-xs text-neutral-700 dark:text-neutral-300 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-semibold text-emerald-950 dark:text-emerald-200">
                    Hands-on Lab Exercises
                  </h5>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">
                    {selectedCategory.thmRooms.join(' · ')}
                  </p>
                </div>
                <a
                  href={PERSONAL_INFO.tryHackMeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors shrink-0"
                >
                  View Labs
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
