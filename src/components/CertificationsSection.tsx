import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';
import { CertificateItem } from '../types';
import { ExternalLink, Award, Shield, CheckCircle } from 'lucide-react';

interface CertificationsSectionProps {
  onSelectCertificate: (cert: CertificateItem) => void;
  onOpenContact: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onSelectCertificate,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const tabs = ['all', 'Security & Safeguarding', 'Defensive Hardening'];

  const filteredCerts = CERTIFICATIONS.filter((c) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'Security & Safeguarding') return c.credentialId.includes('CHTAP') || c.credentialId.includes('CYBER');
    if (activeTab === 'Defensive Hardening') return c.skills.some((s) => s.includes('Threat') || s.includes('MITRE'));
    return true;
  });

  return (
    <section
      id="certifications"
      className="relative py-14 sm:py-20 w-full px-4 sm:px-6 lg:px-8 text-left overflow-hidden bg-[#FCF9F2]/90 dark:bg-[#15120F]/90 backdrop-blur-md transition-colors duration-300"
    >
      {/* Subtle ambient blur glow */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-amber-200/20 dark:bg-amber-950/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6"
        >
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 whitespace-nowrap">
              <span>Professional Certifications</span>
              <span className="text-xl sm:text-2xl"> </span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 max-w-xl">
              Accredited professional certifications, certified practitioner licenses, and governance accreditations.
            </p>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-6 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors cursor-pointer border ${
                activeTab === tab
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-xs'
                  : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {tab === 'all' ? 'All Certifications' : tab}
            </button>
          ))}
        </div>

        {/* 3-Certificate Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group text-left"
            >
              <div className="p-4 sm:p-5 bg-neutral-50 dark:bg-neutral-800/40 border-b border-neutral-100 dark:border-neutral-800/60 aspect-[16/11] flex flex-col justify-between relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider font-mono">
                      {cert.issuer.split(' ')[0]} Verified
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-amber-500/40 bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center">
                    <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>

                <div className="my-auto text-center px-1">
                  <span className="text-[8.5px] text-neutral-400 block tracking-widest uppercase mb-1 font-mono">
                    Official Certificate
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100 leading-snug line-clamp-2">
                    {cert.title}
                  </h4>
                  <div className="mt-2 pt-2 border-t border-neutral-200/60 dark:border-neutral-700/60 flex items-center justify-center gap-1">
                    <span className="text-[10px] font-semibold text-neutral-700 dark:text-neutral-300 font-mono">
                      {PERSONAL_INFO.fullName}
                    </span>
                    <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[8.5px] text-neutral-400 font-mono border-t border-dashed border-neutral-200 dark:border-neutral-700/60 pt-1">
                  <span>ID: {cert.credentialId.slice(0, 16)}</span>
                  <span>{cert.issueDate}</span>
                </div>
              </div>

              {/* Skills tags */}
              <div className="p-3 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-1">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectCertificate(cert)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>Preview Certificate</span>
                </button>
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-emerald-500 hover:border-emerald-500 transition-colors shadow-xs"
                    title="Verify on LinkedIn"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quick Verifications Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PERSONAL_INFO.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-xs font-mono font-bold bg-[#B7FFA2] dark:bg-[#22C55E]/20 text-neutral-900 dark:text-[#86EFAC] border border-[#A0F587] dark:border-[#22C55E]/40 hover:bg-[#A6F78E] transition-all inline-flex items-center gap-1.5 shadow-2xs"
          >
            <span>LinkedIn Verified</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={PERSONAL_INFO.tryHackMeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-xs font-mono font-bold bg-[#B7FFA2] dark:bg-[#22C55E]/20 text-neutral-900 dark:text-[#86EFAC] border border-[#A0F587] dark:border-[#22C55E]/40 hover:bg-[#A6F78E] transition-all inline-flex items-center gap-1.5 shadow-2xs"
          >
            <span>TryHackMe Transcript</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={onOpenContact}
            className="px-4 py-1.5 text-xs font-mono font-bold bg-[#B7FFA2] dark:bg-[#22C55E]/20 text-neutral-900 dark:text-[#86EFAC] border border-[#A0F587] dark:border-[#22C55E]/40 hover:bg-[#A6F78E] transition-all inline-flex items-center gap-1.5 shadow-2xs cursor-pointer"
          >
            <span>Request Credentials</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};
