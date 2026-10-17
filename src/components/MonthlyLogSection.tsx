import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MonthlyUpdateItem } from '../types';
import { Plus, X, Calendar, Award, BookOpen, FileCheck, Shield, Trash2, CheckCircle2 } from 'lucide-react';

const INITIAL_MONTHLY_LOGS: MonthlyUpdateItem[] = [
  {
    id: 'm-1',
    month: 'Jan 2026',
    indexNumber: 1,
    title: 'B.Sc. in CSE Defense & Academic Milestone',
    category: 'Milestone',
    description: 'Completed Bachelor of Science in Computer Science & Engineering with strong foundations in system architectures and network protocols.',
    highlights: [
      'Finalized graduation defense at Daffodil International University',
      'Completed Linux kernel internals & memory management review',
      'Architected initial defensive security topology'
    ],
    tapeColor: 'olive',
    tilt: '-rotate-2',
  },
  {
    id: 'm-2',
    month: 'Feb 2026',
    indexNumber: 2,
    title: 'M.Sc. Cyber Security Enrollment & TryHackMe PrivEsc',
    category: 'Security Lab',
    description: 'Commenced Master of Science in Software Engineering (Major in Cyber Security) and completed intensive Red Team rooms.',
    highlights: [
      'Enrolled in advanced offensive security graduate courses',
      '45+ TryHackMe rooms cleared with focus on Linux SUID & capabilities',
      'Automated reconnaissance scripts using bash and LinPEAS'
    ],
    tapeColor: 'pink',
    tilt: 'rotate-2',
  },
  {
    id: 'm-3',
    month: 'Mar 2026',
    indexNumber: 3,
    title: 'CHTAP Professional Credential & Cyber Hygiene',
    category: 'Certification',
    description: 'Earned Certified Human Trafficking Awareness Professional (CHTAP) and designed enterprise cyber hygiene protocols.',
    highlights: [
      'Accredited CHTAP credential verification',
      'Completed Cyber Hygiene Training Completion program',
      'Implemented organizational MFA & endpoint hygiene guidelines'
    ],
    tapeColor: 'cyan',
    tilt: '-rotate-1',
  },
  {
    id: 'm-4',
    month: 'Apr 2026',
    indexNumber: 4,
    title: 'Climate Governance & Policy Research Publication',
    category: 'Research',
    description: 'Co-authored scholarly investigation analyzing institutional capacity, governance frameworks, and software-enabled monitoring.',
    highlights: [
      'Completed paper: Institutional Capacity & Policy Implementation in BD',
      'Analyzed socio-technical frameworks and governance transparency',
      'Drafted automated vulnerability detection thesis proposal'
    ],
    tapeColor: 'amber',
    tilt: 'rotate-2',
  },
  {
    id: 'm-5',
    month: 'May 2026',
    indexNumber: 5,
    title: 'Active Red Team Attack & Defense Framework Lab',
    category: 'Security Lab',
    description: 'Concurrent development of practical web application penetration testing labs and OWASP Top 10 automated auditing.',
    highlights: [
      'Burp Suite Professional automation workflows',
      'SQL injection and Broken Object Level Authorization (BOLA) tests',
      'Developing live vulnerability sandbox testbed'
    ],
    tapeColor: 'violet',
    tilt: '-rotate-2',
  },
];

export const MonthlyLogSection: React.FC = () => {
  const [logs, setLogs] = useState<MonthlyUpdateItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ahanaf_monthly_logs');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error(e);
        }
      }
    }
    return INITIAL_MONTHLY_LOGS;
  });

  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMonth, setNewMonth] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<MonthlyUpdateItem['category']>('Security Lab');
  const [newDesc, setNewDesc] = useState('');
  const [newHighlight, setNewHighlight] = useState('');
  const [newTapeColor, setNewTapeColor] = useState<MonthlyUpdateItem['tapeColor']>('cyan');

  useEffect(() => {
    localStorage.setItem('ahanaf_monthly_logs', JSON.stringify(logs));
  }, [logs]);

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMonth.trim() || !newTitle.trim()) return;

    const highlightsList = newHighlight
      .split('\n')
      .map((h) => h.trim())
      .filter((h) => h.length > 0);

    const tilts: MonthlyUpdateItem['tilt'][] = ['-rotate-2', 'rotate-2', '-rotate-1', 'rotate-1', '-rotate-3'];
    const randomTilt = tilts[logs.length % tilts.length];

    const newItem: MonthlyUpdateItem = {
      id: `log-${Date.now()}`,
      month: newMonth.trim(),
      indexNumber: logs.length + 1,
      title: newTitle.trim(),
      category: newCategory,
      description: newDesc.trim() || 'Key monthly achievement & security research update.',
      highlights: highlightsList.length > 0 ? highlightsList : ['Completed monthly course / certification milestone'],
      tapeColor: newTapeColor,
      tilt: randomTilt,
    };

    setLogs([newItem, ...logs]);
    setIsModalOpen(false);
    setNewMonth('');
    setNewTitle('');
    setNewDesc('');
    setNewHighlight('');
  };

  const handleDeleteLog = (id: string) => {
    setLogs(logs.filter((item) => item.id !== id));
  };

  const getTapeClasses = (color: MonthlyUpdateItem['tapeColor']) => {
    switch (color) {
      case 'olive':
        return 'bg-[#849646] shadow-sm text-lime-950';
      case 'pink':
        return 'bg-[#F43F5E] shadow-sm text-pink-950';
      case 'cyan':
        return 'bg-[#0EA5E9] shadow-sm text-cyan-950';
      case 'amber':
        return 'bg-[#F59E0B] shadow-sm text-amber-950';
      case 'violet':
      default:
        return 'bg-[#8B5CF6] shadow-sm text-purple-950';
    }
  };

  const getCategoryIcon = (category: MonthlyUpdateItem['category']) => {
    switch (category) {
      case 'Certification':
        return <Award className="w-3.5 h-3.5 text-amber-500" />;
      case 'Course':
        return <BookOpen className="w-3.5 h-3.5 text-blue-500" />;
      case 'Research':
        return <FileCheck className="w-3.5 h-3.5 text-purple-500" />;
      case 'Security Lab':
      default:
        return <Shield className="w-3.5 h-3.5 text-emerald-500" />;
    }
  };

  const categories = ['All', 'Security Lab', 'Certification', 'Research', 'Course', 'Milestone'];

  const filteredLogs = logs.filter((log) => {
    if (activeFilter === 'All') return true;
    return log.category === activeFilter;
  });

  return (
    <section
      id="monthly-log"
      className="py-14 sm:py-20 w-full px-4 sm:px-6 lg:px-8 text-left relative overflow-hidden bg-[#FAF6F7]/90 dark:bg-[#180E12]/90 backdrop-blur-md transition-colors duration-300"
    >
      <div className="absolute top-12 left-1/3 w-80 h-80 bg-rose-200/20 dark:bg-rose-950/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6"
        >
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 whitespace-nowrap">
              <span>Monthly Progress</span>
              <span className="text-xl sm:text-2xl"> </span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 max-w-xl">
              Chronological security lab completions, certifications, and research milestones.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Month Update</span>
            </button>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === cat
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-xs font-semibold'
                  : 'bg-white/80 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Taped Sticky Index Cards Layout */}
        <div className="relative pt-4 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {filteredLogs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ scale: 1.015, rotate: 0 }}
                className={`relative group bg-[#FCFBF8] dark:bg-[#151821] rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md border border-neutral-200/90 dark:border-neutral-800 transition-all duration-300 ${
                  item.tilt || 'rotate-0'
                } flex flex-col justify-between`}
              >
                {/* Washi Tape Strip */}
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-5 ${getTapeClasses(
                    item.tapeColor
                  )} opacity-90 rounded-xs transform -rotate-1 group-hover:rotate-0 transition-transform shadow-xs z-20 flex items-center justify-center`}
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 2%, 98% 98%, 2% 100%)',
                  }}
                >
                  <div className="w-full h-full opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px]" />
                </div>

                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-neutral-100 dark:border-neutral-800/80 mb-3">
                    <span className="font-mono text-xs sm:text-sm font-bold text-rose-500 dark:text-rose-400">
                      {`{${item.month}}`}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                        {getCategoryIcon(item.category)}
                        <span>{item.category}</span>
                      </span>
                      {logs.length > 3 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteLog(item.id);
                          }}
                          className="opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-rose-500 transition-opacity p-0.5"
                          title="Remove update"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100 tracking-tight leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <ul className="space-y-1 pt-1.5 border-t border-neutral-100 dark:border-neutral-800/60">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-1.5 leading-tight"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 mt-3 border-t border-dashed border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>LOG #{item.indexNumber}</span>
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <Calendar className="w-3 h-3" />
                    {item.month}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Milestone Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="bg-white dark:bg-neutral-900 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-neutral-200 dark:border-neutral-800 text-left my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                      Add Month by Month Update
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Save your monthly course, certification, or research milestone
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddLog} className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Month & Year <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jun 2026"
                      value={newMonth}
                      onChange={(e) => setNewMonth(e.target.value)}
                      required
                      className="w-full text-xs px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                      Category
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value as MonthlyUpdateItem['category'])}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    >
                      <option value="Security Lab">Security Lab</option>
                      <option value="Certification">Certification</option>
                      <option value="Research">Research</option>
                      <option value="Course">Course</option>
                      <option value="Milestone">Milestone</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Milestone Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. TryHackMe Advanced Web Pentesting & OSCP Prep"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                    className="w-full text-xs px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Monthly Summary / Focus
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe what you achieved or researched this month..."
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="w-full text-xs p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
                    Key Highlights (One per line)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Completed Room A&#10;Earned Certificate XYZ&#10;Submitted Thesis Chapter 1"
                    value={newHighlight}
                    onChange={(e) => setNewHighlight(e.target.value)}
                    className="w-full text-xs p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Tape Color
                  </label>
                  <div className="flex gap-3">
                    {(['olive', 'pink', 'cyan', 'amber', 'violet'] as MonthlyUpdateItem['tapeColor'][]).map(
                      (c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setNewTapeColor(c)}
                          className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                            newTapeColor === c ? 'scale-115 border-neutral-900 dark:border-white shadow-xs' : 'border-transparent'
                          } ${
                            c === 'olive'
                              ? 'bg-[#849646]'
                              : c === 'pink'
                              ? 'bg-[#F43F5E]'
                              : c === 'cyan'
                              ? 'bg-[#0EA5E9]'
                              : c === 'amber'
                              ? 'bg-[#F59E0B]'
                              : 'bg-[#8B5CF6]'
                          }`}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="pt-3 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Save Update</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
