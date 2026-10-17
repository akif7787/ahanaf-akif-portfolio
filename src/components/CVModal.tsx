import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Terminal,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Award,
  BookOpen,
  Code2,
  FileText,
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, CERTIFICATIONS } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyContact = () => {
    const contactInfo = `${PERSONAL_INFO.fullName}\nEmail: ${PERSONAL_INFO.email}\nLocation: ${PERSONAL_INFO.location}\nLinkedIn: ${PERSONAL_INFO.linkedInUrl}\nGitHub: ${PERSONAL_INFO.githubUrl}\nTryHackMe: ${PERSONAL_INFO.tryHackMeUrl}`;
    navigator.clipboard.writeText(contactInfo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTextCV = () => {
    const cvText = `========================================================
CURRICULUM VITAE
${PERSONAL_INFO.fullName.toUpperCase()}
${PERSONAL_INFO.title}
========================================================

CONTACT INFORMATION:
- Email: ${PERSONAL_INFO.email}
- Location: ${PERSONAL_INFO.location}
- LinkedIn: ${PERSONAL_INFO.linkedInUrl}
- GitHub: ${PERSONAL_INFO.githubUrl}
- TryHackMe: ${PERSONAL_INFO.tryHackMeUrl}

--------------------------------------------------------
EXECUTIVE SUMMARY:
${PERSONAL_INFO.heroSummary}

--------------------------------------------------------
EDUCATION:
${PERSONAL_INFO.education
  .map(
    (edu) => `* ${edu.degree}
  Institution: ${edu.institution} (${edu.period})
  Focus: ${edu.details}`
  )
  .join('\n\n')}

--------------------------------------------------------
EXPERIENCE:
${EXPERIENCES.map(
  (exp) => `* ${exp.role} | ${exp.company}
  Period: ${exp.period} | Location: ${exp.location}
  Summary: ${exp.summary}
  Achievements:
${exp.achievements.map((a) => `    - ${a}`).join('\n')}`
).join('\n\n')}

--------------------------------------------------------
KEY SKILLS & COMPETENCIES:
${PERSONAL_INFO.topSkills.map((s) => `- ${s}`).join('\n')}

--------------------------------------------------------
CERTIFICATIONS:
${CERTIFICATIONS.map(
  (cert) => `- ${cert.title} (${cert.issuer}, ${cert.issueDate})`
).join('\n')}

--------------------------------------------------------
PUBLICATIONS:
- ${PERSONAL_INFO.publication.title}
  Type: ${PERSONAL_INFO.publication.type}
  Domain: ${PERSONAL_INFO.publication.field}

========================================================`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Mohammed_Ahanaf_Akif_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/75 backdrop-blur-md print:p-0 print:bg-white print:fixed print:inset-0"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0E121B] border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden print:border-none print:shadow-none print:max-h-none print:rounded-none"
      >
        {/* Sticky Header / Action Toolbar */}
        <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/90 dark:bg-[#121622]/90 backdrop-blur-md print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 dark:bg-[#D2F824]/10 border border-emerald-500/30 dark:border-[#D2F824]/30 flex items-center justify-center text-emerald-600 dark:text-[#D2F824]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-tight">
                Curriculum Vitae (CV)
              </h2>
              <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                Mohammed Ahanaf Akif Rahman
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handlePrint}
              data-cursor="hover"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-200 transition-colors shadow-2xs cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleDownloadTextCV}
              data-cursor="hover"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white text-xs font-semibold transition-colors shadow-2xs cursor-pointer"
              title="Download clean text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Download</span>
              <span className="xs:hidden">CV</span>
            </button>
            <button
              onClick={handleCopyContact}
              data-cursor="hover"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-200 transition-colors shadow-2xs cursor-pointer"
              title="Copy contact information"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium hidden sm:inline">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                  <span className="hidden sm:inline">Copy Info</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              data-cursor="hover"
              className="p-1.5 rounded-xl bg-neutral-200/60 dark:bg-neutral-800/80 hover:bg-neutral-300/80 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div className="overflow-y-auto px-4 sm:px-8 md:px-12 py-6 sm:py-8 space-y-8 bg-white dark:bg-[#0B0E14] text-neutral-900 dark:text-neutral-100 print:p-0 print:overflow-visible">
          {/* Resume Header / Candidate Identity */}
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
                  {PERSONAL_INFO.fullName}
                </h1>
                <p className="mt-1 text-sm sm:base font-semibold text-emerald-600 dark:text-[#D2F824]">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                  {PERSONAL_INFO.subTitle}
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <a
                href={PERSONAL_INFO.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                <span>{PERSONAL_INFO.linkedInHandle}</span>
              </a>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-300" />
                <span>github.com/ahanafakif</span>
              </a>
              <a
                href={PERSONAL_INFO.tryHackMeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-rose-500 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-rose-500" />
                <span>tryhackme.com/p/ahanafakif7787</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-600 dark:text-[#D2F824] mb-2.5 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {PERSONAL_INFO.heroSummary}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-600 dark:text-[#D2F824] mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="space-y-4">
              {PERSONAL_INFO.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#121622] border border-neutral-200/70 dark:border-neutral-800"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-600 dark:text-[#D2F824] mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills & Core Disciplines</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#121622] border border-neutral-200/70 dark:border-neutral-800">
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white mb-2">
                  Security & Penetration Testing
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Offensive Security',
                    'Web Application Pen-testing',
                    'Vulnerability Assessment',
                    'Red Team Operations',
                    'OWASP Top 10',
                    'Privilege Escalation',
                    'Social Media Security',
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-white dark:bg-neutral-800 text-[11px] font-mono border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#121622] border border-neutral-200/70 dark:border-neutral-800">
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white mb-2">
                  Tools, Systems & Development
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Linux (Kali / Arch / Ubuntu)',
                    'Nmap & Network Recon',
                    'Wireshark Packet Analysis',
                    'Burp Suite & ZAP',
                    'Metasploit Framework',
                    'Bash & Python Automation',
                    'Git, Docker & Cloud Basics',
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-white dark:bg-neutral-800 text-[11px] font-mono border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-600 dark:text-[#D2F824] mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Experience & Track Record</span>
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 rounded-xl bg-neutral-50 dark:bg-[#121622] border border-neutral-200/70 dark:border-neutral-800"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                      {exp.role} · <span className="text-emerald-600 dark:text-emerald-400">{exp.company}</span>
                    </h3>
                    <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
                      {exp.period} ({exp.location})
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                    {exp.summary}
                  </p>
                  <ul className="mt-2.5 space-y-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2">
                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-600 dark:text-[#D2F824] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Verified Certifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-3 rounded-xl bg-neutral-50 dark:bg-[#121622] border border-neutral-200/70 dark:border-neutral-800 flex items-start gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white truncate">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                      {cert.issuer} · {cert.issueDate}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-600 dark:text-[#D2F824] mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Publication & Research</span>
            </h2>
            <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#121622] border border-neutral-200/70 dark:border-neutral-800">
              <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                {PERSONAL_INFO.publication.title}
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Field:</span> {PERSONAL_INFO.publication.field} ({PERSONAL_INFO.publication.type})
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-center text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            Curriculum Vitae verified for Mohammed Ahanaf Akif Rahman · Updated {new Date().getFullYear()}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
