import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, ExternalLink, Terminal, CheckCircle2, CircleDashed } from 'lucide-react';

interface ProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProgressModal: React.FC<ProgressModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const milestones = [
    {
      title: 'Linux Fundamentals & Shell Scripting',
      category: 'Foundation',
      status: 'completed',
      date: 'Completed',
      desc: 'Mastered bash scripting, user permission matrices, systemd service management, and Linux security models.',
    },
    {
      title: 'TryHackMe Offensive Security & PrivEsc',
      category: 'Practical Labs',
      status: 'in-progress',
      date: 'Active · 45+ Rooms',
      desc: 'Focusing on SUID privilege escalation, automated reconnaissance with LinPEAS, and vulnerable kernel exploitation.',
    },
    {
      title: 'Web Application Security & OWASP Top 10',
      category: 'Web Pentesting',
      status: 'in-progress',
      date: 'Active Labs',
      desc: 'Auditing authentication bypasses, broken object-level authorization (BOLA), and SQL injection mitigation.',
    },
    {
      title: 'M.Sc. Software Engineering Thesis',
      category: 'Scholarly Research',
      status: 'ongoing',
      date: 'Target May 2026',
      desc: 'Specialized thesis investigation into automated vulnerability detection and proactive defense in software architectures.',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-neutral-900 rounded-2xl max-w-lg w-full shadow-2xl border border-neutral-200 dark:border-neutral-800 text-left my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white leading-tight">
                The Red Team Lab Progress
              </h3>
              <p className="text-xs text-neutral-500">Live development & research roadmap</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {milestones.map((ms, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/40 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                  {ms.category}
                </span>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                    ms.status === 'completed'
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                      : 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                  }`}
                >
                  {ms.status === 'completed' ? (
                    <CheckCircle2 className="w-3 h-3" />
                  ) : (
                    <CircleDashed className="w-3 h-3 animate-spin" />
                  )}
                  <span>{ms.date}</span>
                </span>
              </div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                {ms.title}
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {ms.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 sm:p-6 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
          <span className="text-xs text-neutral-500 font-mono">
            Platform: TryHackMe & Kali Linux
          </span>
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.tryHackMeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>View TryHackMe Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
