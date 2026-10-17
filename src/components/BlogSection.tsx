import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';
import {
  ArrowRight,
  Shield,
  Terminal,
  Activity,
  Users,
  Box,
  Layers,
  Edit3,
  Sliders,
  Globe,
  Radio,
  Share2,
} from 'lucide-react';

interface BlogSectionProps {
  onReadPost: (post: BlogPost) => void;
  onOpenContact: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onReadPost, onOpenContact }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const tags = ['All', 'Zero Trust', 'Linux PrivEsc', 'Web Pentest', 'Policy Research'];
  const posts = BLOG_POSTS;
  const post1 = posts[0];
  const post2 = posts[1];
  const post3 = posts[2];
  const post4 = posts[3];

  return (
    <section
      id="blog"
      className="relative py-14 sm:py-20 w-full px-4 sm:px-6 lg:px-8 text-left overflow-hidden bg-[#F9F7FC]/90 dark:bg-[#120F1A]/90 backdrop-blur-md transition-colors duration-300"
    >
      <div className="absolute top-16 left-1/4 w-80 h-80 bg-purple-200/20 dark:bg-purple-950/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 whitespace-nowrap">
              <span>Articles & Field Notes</span>
              <span className="text-xl sm:text-2xl"> </span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 max-w-xl">
              Technical field notes, offensive security investigations, and kernel research publications.
            </p>
          </motion.div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 shadow-xs'
                    : 'bg-white/80 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 hover:bg-white dark:hover:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 4-COLUMN CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
          {/* CARD 1: Workflow Nodes (Zero Trust Architecture) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onReadPost(post1)}
            className="group rounded-3xl p-6 bg-white dark:bg-[#161320] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between text-left cursor-pointer overflow-hidden shadow-xs hover:shadow-xl dark:shadow-none dark:hover:border-neutral-700/80 transition-all duration-300 min-h-[490px]"
          >
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-neutral-400 dark:text-neutral-500 block mb-1">
                ZERO TRUST ARCHITECTURE
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white leading-snug">
                The core system powering the heart of perimeter defense
              </h3>
            </div>

            <div className="relative w-full h-56 my-5 rounded-2xl bg-[#F8F9FA] dark:bg-[#1A1625] border border-neutral-200/60 dark:border-neutral-800/60 p-4 flex flex-col justify-between items-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #a1a1aa 0.75px, transparent 0.75px)',
                  backgroundSize: '16px 16px',
                }}
              />
              <div className="relative z-10 w-full grid grid-cols-2 gap-2 text-left">
                <div className="bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700/80 rounded-xl p-2 shadow-2xs group-hover:shadow-xs transition-shadow">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-800 dark:text-neutral-200">
                    <Users className="w-3 h-3 text-purple-500" />
                    <span>Customers</span>
                  </div>
                  <div className="text-[9px] font-mono text-neutral-400 mt-0.5">2,490 AVAILABLE</div>
                </div>
                <div className="bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700/80 rounded-xl p-2 shadow-2xs group-hover:shadow-xs transition-shadow">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-800 dark:text-neutral-200">
                    <Box className="w-3 h-3 text-amber-500" />
                    <span>Orders</span>
                  </div>
                  <div className="text-[9px] font-mono text-neutral-400 mt-0.5">11,559 COMPLETED</div>
                </div>
              </div>

              <div className="relative w-full h-8 flex items-center justify-center my-0.5">
                <div className="w-0.5 h-full bg-neutral-300 dark:bg-neutral-700" />
                <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-neutral-300 dark:bg-neutral-700 -translate-y-1/2" />
              </div>

              <div className="relative z-10 w-full grid grid-cols-2 gap-2 text-left mb-2">
                <div className="bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700/80 rounded-xl p-2 shadow-2xs group-hover:shadow-xs transition-shadow">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-800 dark:text-neutral-200">
                    <Layers className="w-3 h-3 text-rose-500" />
                    <span>Projects</span>
                  </div>
                  <div className="text-[9px] font-mono text-neutral-400 mt-0.5">23 TASKS ACTIVE</div>
                </div>
                <div className="bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700/80 rounded-xl p-2 shadow-2xs group-hover:shadow-xs transition-shadow">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-800 dark:text-neutral-200">
                    <Activity className="w-3 h-3 text-emerald-500" />
                    <span>Interviews</span>
                  </div>
                  <div className="text-[9px] font-mono text-neutral-400 mt-0.5">12 COMPLETED</div>
                </div>
              </div>

              <div className="relative z-10 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-[10px] font-mono font-medium shadow-sm">
                <span>Enforce mTLS</span>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Why perimeter-based defenses crumble in distributed systems, and how to implement micro-segmentation, mutual TLS, and continuous verification.
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{post1.readTime}</span>
                <span className="text-neutral-900 dark:text-white font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read field note</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Floating Record Card (Linux Kernel PrivEsc) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onReadPost(post2)}
            className="group rounded-3xl p-6 bg-white dark:bg-[#161320] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between text-left cursor-pointer overflow-hidden shadow-xs hover:shadow-xl dark:shadow-none dark:hover:border-neutral-700/80 transition-all duration-300 min-h-[490px]"
          >
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-neutral-400 dark:text-neutral-500 block mb-1">
                LINUX PRIVILEGE ESCALATION
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white leading-snug">
                A flexible audit that keeps track of all the root vectors you care about
              </h3>
            </div>

            <div className="relative w-full h-56 my-5 rounded-2xl bg-[#F8F9FA] dark:bg-[#1A1625] border border-neutral-200/60 dark:border-neutral-800/60 p-3.5 flex items-center justify-between overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #a1a1aa 0.75px, transparent 0.75px)',
                  backgroundSize: '16px 16px',
                }}
              />
              <div className="relative z-10 flex flex-col gap-2 text-neutral-400">
                <div className="p-1.5 rounded-lg bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700 shadow-2xs">
                  <Edit3 className="w-3 h-3" />
                </div>
                <div className="p-1.5 rounded-lg bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700 shadow-2xs">
                  <Sliders className="w-3 h-3" />
                </div>
              </div>

              <div className="relative z-10 w-48 bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700/80 rounded-2xl p-3 shadow-md group-hover:scale-102 transition-transform text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                    AK
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-900 dark:text-white leading-tight">
                      Ahanaf Akif
                    </div>
                    <div className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400">
                      UID: 0 (Root Audited)
                    </div>
                  </div>
                </div>
                <div className="space-y-1 text-[9px] font-mono text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-700/60 pt-2 mb-2.5">
                  <div className="flex justify-between">
                    <span>Vector:</span>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">cap_setuid+ep</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Labs Checked:</span>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">45+ Systems</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-[9px] font-mono font-medium shadow-2xs">
                    <Terminal className="w-2.5 h-2.5" />
                    <span>Audit</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[9px] font-mono">
                    <Shield className="w-2.5 h-2.5" />
                    <span>nosuid</span>
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col gap-1.5 p-1 rounded-full bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700 shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs" title="Verified Safe" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" title="mTLS Active" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" title="Warning" />
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" title="SUID Critical" />
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                A practical Red Team guide to auditing Linux internal security, understanding SUID misconfigurations, and weaponizing enumeration artifacts responsibly.
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{post2.readTime}</span>
                <span className="text-neutral-900 dark:text-white font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read field note</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: Collaboration Comment Thread (Web Application Pentesting) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onReadPost(post3)}
            className="group rounded-3xl p-6 bg-white dark:bg-[#161320] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between text-left cursor-pointer overflow-hidden shadow-xs hover:shadow-xl dark:shadow-none dark:hover:border-neutral-700/80 transition-all duration-300 min-h-[490px]"
          >
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-neutral-400 dark:text-neutral-500 block mb-1">
                APPLICATION SECURITY
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white leading-snug">
                Everything your team needs to stay in sync during vulnerability triage
              </h3>
            </div>

            <div className="relative w-full h-56 my-5 rounded-2xl bg-[#F8F9FA] dark:bg-[#1A1625] border border-neutral-200/60 dark:border-neutral-800/60 p-3.5 flex flex-col justify-center items-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #a1a1aa 0.75px, transparent 0.75px)',
                  backgroundSize: '16px 16px',
                }}
              />
              <div className="relative z-10 self-start mb-2 px-2.5 py-0.5 rounded-full bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700 text-[10px] font-mono text-neutral-600 dark:text-neutral-300 flex items-center gap-1 shadow-2xs">
                <span>Comment on</span>
                <span className="px-1 rounded bg-[#635BFF] text-white font-bold text-[8px]">Burp</span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">API Gateway</span>
              </div>

              <div className="relative z-10 w-full bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700/80 rounded-2xl p-3 shadow-md group-hover:scale-102 transition-transform text-left">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white mb-1">
                  <div className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] flex items-center justify-center font-bold">
                    AA
                  </div>
                  <span>Akif Rahman</span>
                </div>
                <p className="text-[11px] text-neutral-600 dark:text-neutral-300 leading-snug">
                  <strong className="text-purple-600 dark:text-purple-400 font-semibold">@Engineering</strong> BOLA authorization flaw patched on endpoint <code className="text-[10px] bg-neutral-100 dark:bg-neutral-800 px-1 py-0.5 rounded">/api/v2/tenants</code>?
                </p>
                <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-neutral-100 dark:border-neutral-700/60 text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800 flex items-center gap-1">
                    <span>👍</span>
                    <span>8</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1">
                    <span>🚀</span>
                    <span>3</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800 flex items-center gap-1">
                    <span>🎯</span>
                    <span>7</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Moving past generic surface scans: manual logic flaw discovery, API authorization breakdowns, and custom intruder extensions.
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{post3.readTime}</span>
                <span className="text-neutral-900 dark:text-white font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read field note</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: App Ecosystem Grid (Climate Governance Research) */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onReadPost(post4)}
            className="group rounded-3xl p-6 bg-white dark:bg-[#161320] border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between text-left cursor-pointer overflow-hidden shadow-xs hover:shadow-xl dark:shadow-none dark:hover:border-neutral-700/80 transition-all duration-300 min-h-[490px]"
          >
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-neutral-400 dark:text-neutral-500 block mb-1">
                POLICY & DATA ECOSYSTEM
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white leading-snug">
                Integrated across 64 administrative districts and research frameworks
              </h3>
            </div>

            <div className="relative w-full h-56 my-5 rounded-2xl bg-[#F8F9FA] dark:bg-[#1A1625] border border-neutral-200/60 dark:border-neutral-800/60 p-4 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #a1a1aa 0.75px, transparent 0.75px)',
                  backgroundSize: '16px 16px',
                }}
              />
              <div className="absolute inset-x-4 top-1/2 h-px bg-neutral-200 dark:bg-neutral-800" />
              <div className="absolute inset-y-4 left-1/2 w-px bg-neutral-200 dark:bg-neutral-800" />

              <div className="absolute top-4 left-4 p-2 rounded-xl bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <Globe className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <span className="text-[10px] font-bold font-mono text-emerald-700 dark:text-emerald-400">64D</span>
              </div>
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Layers className="w-7 h-7" />
              </div>
              <div className="absolute bottom-4 left-6 p-2 rounded-xl bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center justify-center group-hover:translate-y-1 transition-transform">
                <Radio className="w-4 h-4 text-purple-600" />
              </div>
              <div className="absolute bottom-4 right-4 p-2 rounded-xl bg-white dark:bg-[#201B2E] border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center justify-center group-hover:translate-y-1 transition-transform">
                <Share2 className="w-4 h-4 text-blue-500" />
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/60">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Reflections from our peer-reviewed research analyzing policy implementation, local governmental capacity, and data-driven coordination across Bangladesh.
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>{post4.readTime}</span>
                <span className="text-neutral-900 dark:text-white font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read field note</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 sm:mt-16 flex items-center justify-end">
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all cursor-pointer shadow-md active:scale-98"
          >
            <span>Discuss technical research & collaborate</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
