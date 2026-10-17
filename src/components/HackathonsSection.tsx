import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HACKATHONS_LIST } from '../data/portfolioData';
import { Flag, Calendar } from 'lucide-react';

export const HackathonsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const tabs = ['all', 'Cyber Drill', 'CTF Competition', 'Hackathon Sprint'];

  const filteredHackathons = HACKATHONS_LIST.filter((h) => {
    return activeTab === 'all' || h.category === activeTab;
  });

  return (
    <section
      id="hackathons"
      className="relative py-14 sm:py-20 w-full px-4 sm:px-6 lg:px-8 text-left overflow-hidden bg-[#F3FAF9]/90 dark:bg-[#081518]/90 backdrop-blur-md transition-colors duration-300"
    >
      <div className="absolute top-12 right-1/4 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-950/15 rounded-full blur-3xl pointer-events-none -z-10" />

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
              <span>Hackathons & CTFs</span>
              <span className="text-xl sm:text-2xl"> </span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 max-w-xl">
              Competitive national cyber drills, offensive CTF sprints, and hackathons.
            </p>
          </div>
        </motion.div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-6 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1 text-xs font-mono font-medium rounded-full whitespace-nowrap transition-colors cursor-pointer border ${
                activeTab === tab
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white font-bold shadow-xs'
                  : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {tab === 'all' ? 'All Competitions' : tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.map((hack, index) => (
            <motion.div
              key={hack.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-white dark:bg-[#121622] rounded-2xl sm:rounded-3xl border border-neutral-200/90 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group overflow-hidden"
            >
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-neutral-100 dark:border-neutral-800/80 mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200/80 dark:border-cyan-800/80">
                      {hack.category}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 flex items-center gap-1 px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800/60">
                      <Calendar className="w-3 h-3" />
                      {hack.year}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white tracking-tight leading-snug mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {hack.title}
                  </h3>

                  <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mb-2 space-y-0.5">
                    <p>Event: <strong className="text-neutral-700 dark:text-neutral-200">{hack.event}</strong></p>
                    <p>Role: <span className="text-neutral-600 dark:text-neutral-300">{hack.role}</span></p>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                    {hack.description}
                  </p>

                  <div className="space-y-1 mb-3 pt-2 border-t border-dashed border-neutral-200 dark:border-neutral-800">
                    {hack.impactNotes.map((note, i) => (
                      <div key={i} className="text-[10.5px] text-neutral-600 dark:text-neutral-400 flex items-start gap-1.5 leading-tight">
                        <Flag className="w-2.5 h-2.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {hack.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-4 sm:px-5 py-3 bg-neutral-50/80 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono">
                <span className="text-neutral-500">Standing:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-bold border border-cyan-500/20">
                  {hack.standing}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
