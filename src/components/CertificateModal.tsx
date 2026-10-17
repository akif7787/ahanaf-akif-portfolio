import React from 'react';
import { CertificateItem } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, ExternalLink, Award, Shield, CheckCircle } from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-neutral-900 rounded-2xl max-w-xl w-full shadow-2xl border border-neutral-200 dark:border-neutral-800 text-left my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 sm:p-10 bg-[#FCFBF8] dark:bg-[#14161C] border-b border-neutral-200 dark:border-neutral-800 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-50 dark:bg-amber-950/60 border-2 border-amber-400 flex items-center justify-center shadow-md">
            <Award className="w-9 h-9 text-amber-600 dark:text-amber-400" />
          </div>
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono block mb-1">
            Certificate of Achievement
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white max-w-md mx-auto leading-tight mb-4">
            {certificate.title}
          </h3>
          <p className="text-xs text-neutral-500 mb-2">This is proudly presented to</p>
          <div className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-emerald-400 flex items-center justify-center gap-1.5 mb-4">
            <span>{PERSONAL_INFO.fullName}</span>
            <CheckCircle className="w-4 h-4 text-emerald-500 inline-block" />
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed italic">
            "{certificate.summary}"
          </p>
          <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 text-left text-xs text-neutral-500 font-mono">
            <div>
              <span className="block text-[10px] text-neutral-400">ISSUED BY</span>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200 truncate block">
                {certificate.issuer}
              </span>
            </div>
            <div className="text-right">
              <span className="block text-[10px] text-neutral-400">VERIFICATION ID</span>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                {certificate.credentialId}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-500" />
            Verified Skill Competencies
          </h4>
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
          <span className="text-xs text-neutral-500 font-mono">
            Year: {certificate.issueDate}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            >
              Close
            </button>
            <a
              href={certificate.verificationUrl || PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <span>Verify on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
