/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { TopHeader } from './components/TopHeader';
import { HeroSection } from './components/HeroSection';
import { AboutMeSection } from './components/AboutMeSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsStackSection } from './components/SkillsStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { MonthlyLogSection } from './components/MonthlyLogSection';
import { CertificationsSection } from './components/CertificationsSection';
import { CourseCertificatesSection } from './components/CourseCertificatesSection';
import { ResearchSection } from './components/ResearchSection';
import { AchievementsSection } from './components/AchievementsSection';
import { HackathonsSection } from './components/HackathonsSection';
import { EducationTrainSection } from './components/EducationTrainSection';
import { WorkTogetherSection } from './components/WorkTogetherSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal } from './components/CertificateModal';
import { ProgressModal } from './components/ProgressModal';
import { ContactModal } from './components/ContactModal';
import { CVModal } from './components/CVModal';
import { FloatingNavMenu } from './components/FloatingNavMenu';
import { SectionScrollTracker } from './components/SectionScrollTracker';
import { BlogSection } from './components/BlogSection';
import { BlogArticleView } from './components/BlogArticleView';
import { SmoothMouseFollower } from './components/SmoothMouseFollower';
import { BLOG_POSTS } from './data/blogData';
import { ProjectItem, CertificateItem, BlogPost } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ahanaf_portfolio_dark_mode');
      if (saved !== null) {
        return saved === 'true';
      }
      return false; // Default to Light mode matching reference
    }
    return false;
  });

  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.startsWith('#article/')) {
        const slug = hash.replace('#article/', '');
        return BLOG_POSTS.find((p) => p.slug === slug) || null;
      }
    }
    return null;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [isProgressOpen, setIsProgressOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);

  // Subtle scroll-based progress bar tracking reading position
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Sync hash changes for direct article links and browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#article/')) {
        const slug = hash.replace('#article/', '');
        const found = BLOG_POSTS.find((p) => p.slug === slug);
        if (found) {
          setSelectedArticle(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (hash === '#blog') {
        setSelectedArticle(null);
        setTimeout(() => {
          const el = document.getElementById('blog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else if (!hash.startsWith('#article/')) {
        if (selectedArticle) {
          setSelectedArticle(null);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [selectedArticle]);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('ahanaf_portfolio_dark_mode', String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleNavigateToSection = (id: string) => {
    if (selectedArticle) {
      setSelectedArticle(null);
      window.location.hash = `#${id}`;
      setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      const elem = document.getElementById(id);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0E14] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 selection:bg-neutral-900 selection:text-white dark:selection:bg-emerald-400 dark:selection:text-slate-950">
      {/* Webflow / Framer Smooth Mouse Follower & Ambient Fluid Cursor Spotlight */}
      <SmoothMouseFollower />

      {/* Scroll Progress Bar at the very top of the viewport */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-400 to-[#A3FF75] origin-left z-50 pointer-events-none shadow-[0_1px_3px_rgba(16,185,129,0.3)]"
      />

      {/* Top Information Grid & Navigation Bar */}
      <TopHeader
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenProgress={() => setIsProgressOpen(true)}
        onOpenCV={() => setIsCVOpen(true)}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Main Content Area: Conditional Article View vs Full Portfolio */}
      {selectedArticle ? (
        <BlogArticleView
          post={selectedArticle}
          onBack={() => {
            setSelectedArticle(null);
            window.location.hash = '#blog';
            setTimeout(() => {
              const elem = document.getElementById('blog');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          onSelectPost={(post) => {
            setSelectedArticle(post);
            window.location.hash = `#article/${post.slug}`;
          }}
          onOpenContact={() => setIsContactOpen(true)}
        />
      ) : (
        <main className="w-full">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroSection
              onOpenContact={() => setIsContactOpen(true)}
              onOpenCV={() => setIsCVOpen(true)}
            />
          </motion.div>

          {/* About Me & Methodology Section (Matching Reference Image Flow) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <AboutMeSection
              darkMode={darkMode}
              onToggleDarkMode={toggleDarkMode}
              onOpenContact={() => setIsContactOpen(true)}
              onOpenCV={() => setIsCVOpen(true)}
            />
          </motion.div>

          {/* Journey So Far (Career Timeline) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ExperienceSection />
          </motion.div>

          {/* Interactive Skills Deck */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SkillsStackSection />
          </motion.div>

          {/* Selected Projects */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectsSection
              onSelectProject={(project) => setSelectedProject(project)}
              onOpenProgress={() => setIsProgressOpen(true)}
            />
          </motion.div>

          {/* Research & Publications Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ResearchSection />
          </motion.div>

          {/* Certifications & Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <CertificationsSection
              onSelectCertificate={(cert) => setSelectedCertificate(cert)}
              onOpenContact={() => setIsContactOpen(true)}
            />
          </motion.div>

          {/* Course Completion Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <CourseCertificatesSection
              onSelectCertificate={(cert) => setSelectedCertificate(cert)}
              onOpenContact={() => setIsContactOpen(true)}
            />
          </motion.div>

          {/* Achievements & Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <AchievementsSection />
          </motion.div>

          {/* Hackathons & CTF Competitions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <HackathonsSection />
          </motion.div>

          {/* Blog & Security Research Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <BlogSection
              onReadPost={(post) => {
                setSelectedArticle(post);
                window.location.hash = `#article/${post.slug}`;
              }}
              onOpenContact={() => setIsContactOpen(true)}
            />
          </motion.div>

          {/* Month by Month Chronicle */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <MonthlyLogSection />
          </motion.div>

          {/* Interactive Education Roadmap & Animated Train Journey */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <EducationTrainSection />
          </motion.div>

          {/* Let's Work Together Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <WorkTogetherSection onOpenContact={() => setIsContactOpen(true)} />
          </motion.div>
        </main>
      )}

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </motion.div>

      {/* Interactive Modals with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isProgressOpen && (
          <ProgressModal
            isOpen={isProgressOpen}
            onClose={() => setIsProgressOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactOpen && (
          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCVOpen && (
          <CVModal
            isOpen={isCVOpen}
            onClose={() => setIsCVOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Jump-to-section menu in bottom-right corner */}
      <FloatingNavMenu />

      {/* Real-time Section Scroll Tracker (Left/Right dockable) */}
      <SectionScrollTracker onOpenContact={() => setIsContactOpen(true)} />
    </div>
  );
}
