export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration?: string;
  isCurrent?: boolean;
  logoType: 'bcs' | 'branddora' | 'digitalsoft' | 'fnf' | 'diu';
  summary: string;
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  quote?: string;
  categoryTags: string[];
  colorTheme: 'red' | 'blue' | 'charcoal' | 'darkslate';
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  mockupType: 'laptop' | 'workstation' | 'monitor' | 'code';
  stats?: { label: string; value: string }[];
  externalUrl?: string;
  featured?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verificationUrl?: string;
  skills: string[];
  previewTheme: 'udemy' | 'accenture' | 'google';
  summary: string;
}

export interface CourseCertificateItem {
  id: string;
  title: string;
  platform: 'Cisco' | 'TryHackMe' | 'Coursera' | 'Udemy' | 'CS50' | 'Design Academy' | 'Google';
  issuer: string;
  issueDate: string;
  durationHours?: string;
  credentialId: string;
  verificationUrl?: string;
  skills: string[];
  grade?: string;
  summary: string;
  badgeTheme?: 'blue' | 'emerald' | 'amber' | 'purple' | 'rose' | 'cyan';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface MonthlyUpdateItem {
  id: string;
  month: string;
  indexNumber: number;
  title: string;
  category: 'Certification' | 'Course' | 'Research' | 'Security Lab' | 'Milestone';
  description: string;
  highlights: string[];
  tapeColor: 'olive' | 'pink' | 'cyan' | 'amber' | 'violet';
  tilt?: string;
}

export interface BlogContentSection {
  id: string;
  heading?: string;
  subheading?: string;
  paragraphs?: string[];
  quote?: {
    text: string;
    author?: string;
  };
  codeBlock?: {
    language: string;
    filename?: string;
    code: string;
  };
  callout?: {
    type: 'info' | 'warning' | 'tip';
    title: string;
    text: string;
  };
  statsGrid?: {
    label: string;
    value: string;
    note?: string;
  }[];
  bulletPoints?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  editorialType?: 'News' | 'Thinking' | 'Research' | 'Guide';
  coverImage?: string;
  accentBg?: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  featured?: boolean;
  clapsCount: number;
  tableOfContents: {
    id: string;
    title: string;
    level: number;
  }[];
  keyTakeaways: string[];
  contentSections: BlogContentSection[];
}

export interface ResearchItem {
  id: string;
  title: string;
  type: 'Scholarly Paper' | 'Conference Article' | 'Thesis Research' | 'Technical Whitepaper';
  venue: string;
  year: string;
  status: 'Published' | 'Under Peer Review' | 'Pre-print' | 'Completed Thesis';
  authors: string[];
  abstract: string;
  highlights: string[];
  fieldTags: string[];
  doiOrUrl?: string;
  metrics?: { label: string; value: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Academic' | 'Cyber Security' | 'Design & Creative' | 'Leadership';
  issuer: string;
  date: string;
  description: string;
  badge: string;
  highlightStat: string;
  verificationUrl?: string;
  skills?: string[];
  highlights?: string[];
  credentialId?: string;
}

export interface HackathonItem {
  id: string;
  title: string;
  event: string;
  year: string;
  role: string;
  category: 'Cyber Drill' | 'CTF Competition' | 'Hackathon Sprint' | 'Operations';
  standing: string;
  description: string;
  tags: string[];
  impactNotes: string[];
}
