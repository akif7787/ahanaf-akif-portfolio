import React, { useState } from 'react';
import { motion } from 'motion/react';
import { COURSE_CERTIFICATES } from '../data/portfolioData';
import { CourseCertificateItem, CertificateItem } from '../types';
import { ExternalLink, GraduationCap, Clock } from 'lucide-react';

interface CourseCertificatesSectionProps {
  onSelectCertificate: (cert: CertificateItem) => void;
  onOpenContact?: () => void;
}

export const CourseCertificatesSection: React.FC<CourseCertificatesSectionProps> = ({
  onSelectCertificate,
}) => {
  const [activePlatform, setActivePlatform] = useState<string>('all');
  const platforms = ['all', 'Cisco', 'TryHackMe', 'Udemy', 'Coursera', 'Design Academy', 'Google'];

  const filteredCourses = COURSE_CERTIFICATES.filter((item) => {
    if (activePlatform === 'all') return true;
    return item.platform.toLowerCase() === activePlatform.toLowerCase();
  });

  const getPlatformBadgeColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'cisco':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20';
      case 'tryhackme':
        return 'bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/20';
      case 'coursera':
        return 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20';
      case 'udemy':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20';
      case 'design academy':
        return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20';
      default:
        return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20';
    }
  };

  const handlePreviewAsCert = (course: CourseCertificateItem) => {
    const mapped: CertificateItem = {
      id: course.id,
      title: course.title,
      issuer: `${course.issuer} (${course.platform})`,
      issueDate: course.issueDate,
      credentialId: course.credentialId,
      verificationUrl: course.verificationUrl,
      skills: course.skills,
      previewTheme: 'udemy',
      summary: course.summary,
    };
    onSelectCertificate(mapped);
  };

  return (
    <section
      id="certificates"
      className="relative py-14 sm:py-20 w-full px-4 sm:px-6 lg:px-8 text-left overflow-hidden bg-[#F5F9FD] dark:bg-[#0D131C] backdrop-blur-md transition-colors duration-300"
    >
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

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
              <span>Course Certificates</span>
              <span className="text-xl sm:text-2xl"> </span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 max-w-xl">
              Verified completion certificates and learning diplomas earned upon finishing courses, academies, and tracks.
            </p>
          </div>
        </motion.div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-6 no-scrollbar">
          {platforms.map((plat) => (
            <button
              key={plat}
              onClick={() => setActivePlatform(plat)}
              className={`px-3.5 py-1 text-xs font-mono font-medium rounded-full whitespace-nowrap transition-colors cursor-pointer border ${
                activePlatform === plat
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white font-bold shadow-xs'
                  : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {plat === 'all' ? 'All Course Certificates' : plat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl sm:rounded-3xl border border-neutral-200/90 dark:border-neutral-800 bg-white/95 dark:bg-[#121622]/95 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group text-left"
            >
              <div className="p-4 sm:p-5 bg-neutral-50/70 dark:bg-neutral-800/40 border-b border-neutral-100 dark:border-neutral-800/60 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${getPlatformBadgeColor(
                      course.platform
                    )}`}
                  >
                    {course.platform}
                  </span>
                  {course.grade && (
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80">
                      {course.grade}
                    </span>
                  )}
                </div>

                <div className="text-left">
                  <span className="text-[8.5px] text-neutral-400 block tracking-widest uppercase mb-1 font-mono">
                    Course Completion Diploma
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mt-1">
                    Academy: <strong className="text-neutral-700 dark:text-neutral-300">{course.issuer}</strong>
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-neutral-200/60 dark:border-neutral-700/60 flex items-center justify-between text-[9px] font-mono text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{course.durationHours || 'Verified Track'}</span>
                  </span>
                  <span>ID: {course.credentialId.slice(0, 16)}</span>
                </div>
              </div>

              <div className="p-4 flex-1">
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                  {course.summary}
                </p>
                <div className="flex flex-wrap gap-1">
                  {course.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-neutral-50/80 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => handlePreviewAsCert(course)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                  <span>Inspect Certificate</span>
                </button>
                {course.verificationUrl && (
                  <a
                    href={course.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
                    title="External Verification Link"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
