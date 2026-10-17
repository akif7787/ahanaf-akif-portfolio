import { ExperienceItem, ProjectItem, CertificateItem, CourseCertificateItem, ResearchItem, AchievementItem, HackathonItem } from '../types';

export const PERSONAL_INFO = {
  fullName: 'Mohammed Ahanaf Akif Rahman',
  preferredName: 'Ahanaf Akif',
  title: 'MSc in Software Engineering (Major in Cyber Security)',
  subTitle: 'Cybersecurity Learner · Aspiring Red Team & Offensive Security Professional',
  location: 'Dhaka, Bangladesh',
  experienceYears: '3+ Years',
  experienceLabel: 'Digital Growth & Security Labs',
  email: 'ahanafakif7787@yahoo.com',
  linkedInUrl: 'https://www.linkedin.com/in/ahanafakif21',
  linkedInHandle: 'linkedin.com/in/ahanafakif21',
  githubUrl: 'https://github.com/ahanafakif',
  tryHackMeUrl: 'https://tryhackme.com/p/ahanafakif7787',
  tryHackMeHandle: 'tryhackme.com/p/ahanafakif7787',
  heroHeadline: "Nice to meet you! I'm a Computer Science graduate & MSc Software Engineering scholar passionate about Offensive Security, Penetration Testing, and building resilient systems.",
  heroSummary:
    "My interest in cybersecurity started with a simple question: 'How do the systems we use every day actually work and how can we make them more secure?' Before you learn how to attack a system, you need to understand how it operates. That mindset drives my work across Linux environments, web security, and Red Team fundamentals.",
  topSkills: [
    'Offensive Security',
    'Penetration Testing',
    'Linux Systems',
    'Network & Web Security',
    'Vulnerability Assessment',
    'Red Team Operations',
    'Social Media Security',
    'Safeguarding & Human Rights',
  ],
  education: [
    {
      degree: 'M.Sc. in Software Engineering (Major in Cyber Security)',
      institution: 'Daffodil International University (DIU)',
      period: 'Ongoing · Expected May 2026',
      details: 'Focus on Network Security, Web Application Security, Vulnerability Assessment, and Red Team fundamentals.',
    },
    {
      degree: 'B.Sc. in Computer Science and Engineering',
      institution: 'Daffodil International University (DIU)',
      period: 'September 2021 - January 2026',
      details: 'Core computer science fundamentals, data structures, computer networks, and operating systems.',
    },
    {
      degree: 'Higher Secondary School Certificate (HSC) - Science',
      institution: 'Milestone College',
      period: 'January 2018 - December 2020',
      details: 'Physics, Chemistry, Higher Mathematics, and ICT foundation.',
    },
    {
      degree: 'Secondary School Certificate (SSC) - Science',
      institution: 'Senbag Govt. Pilot High School',
      period: 'January 2013 - March 2018',
      details: 'Foundational secondary science curriculum.',
    },
  ],
  publication: {
    title: 'Climate Governance and Local Sustainable Development: Institutional Capacity and Policy Implementation in Bangladesh',
    type: 'Academic Publication',
    field: 'Institutional Governance & Sustainability Policies',
  },
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'bcs-volunteer',
    role: 'Volunteer & Operations Coordinator',
    company: 'Bangladesh Computer Society',
    location: 'Dhaka, Bangladesh',
    period: 'September 2026 - Present',
    duration: '2 months',
    isCurrent: true,
    logoType: 'bcs',
    summary:
      'Actively engaged in event operations, participant assistance, and on-ground logistics for BCS ICT FEST 2026.',
    achievements: [
      'Supporting promotional outreach and driving event registrations through campus networking.',
      'Collaborating with the organizing committee to facilitate smooth segment execution and technical setup.',
      'Assisting delegates, student competitors, and keynote speakers during technical workshops.',
    ],
  },
  {
    id: 'branddora-growth',
    role: 'Social Media Growth Specialist',
    company: 'Branddora',
    location: 'Dhaka, Bangladesh',
    period: 'July 2025 - September 2025',
    duration: '3 months',
    isCurrent: false,
    logoType: 'branddora',
    summary:
      "Worked on managing, securing, and growing the company's digital presence through strategic content, audience targeting, and advanced social engineering awareness techniques.",
    achievements: [
      'Designed and managed high-quality social media content, including brand banners and engagement campaigns.',
      'Applied audience analysis and behavioral techniques to expand organic platform reach.',
      'Hardened account security, implemented multi-factor authentication protocols, and performed risk prevention audits.',
      'Contributed to overall digital conversion strategies, improving brand visibility and lead conversion.',
    ],
  },
  {
    id: 'digital-soft-zone',
    role: 'Social Media Manager',
    company: 'Digital Soft Zone',
    location: 'Dhaka, Bangladesh',
    period: 'March 2024 - August 2024',
    duration: '6 months',
    isCurrent: false,
    logoType: 'digitalsoft',
    summary:
      "Responsible for managing and designing the company's social media presence across multiple platforms, focusing on visual consistency and organic growth.",
    achievements: [
      'Designed and managed social media posts, stories, and seasonal marketing campaigns.',
      'Developed brand-aligned visuals to boost engagement, click-through rates, and brand clarity.',
      'Planned and executed monthly content calendars and technical growth strategies.',
      'Collaborated on product design ideas and visual communication assets to ensure brand consistency.',
    ],
  },
  {
    id: 'fnf-soft',
    role: 'Social Media Manager',
    company: 'FNF Soft',
    location: 'Dhaka, Bangladesh',
    period: 'September 2023 - February 2024',
    duration: '6 months',
    isCurrent: false,
    logoType: 'fnf',
    summary:
      "Managed the company's online presence, creating engaging content to promote software services and increase community reach.",
    achievements: [
      'Designed and published social media posts, banners, and promotional campaign materials.',
      'Maintained brand consistency across all social media channels and customer touchpoints.',
      'Created visually appealing designs using Canva and industry tools (100+ Canva Design milestone).',
      'Supported service marketing campaigns through structured creative content and lead messaging.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'pentest-lab',
    title: 'Aed quia consequuntur magni dolores eos qui ratione',
    quote: 'Offensive Security & Web Penetration Testing Lab',
    categoryTags: ['Job Portal', 'Food Delivery', 'Offensive Sec'],
    colorTheme: 'red',
    description:
      'A comprehensive simulated penetration testing environment targeting common web and network vulnerabilities. Tested OWASP Top 10 vulnerabilities, unauthorized privilege escalation vectors, and API flaws.',
    challenge:
      'Identifying authorization flaws and outdated server configurations in multi-tiered web environments without alerting traditional signature-based detection.',
    solution:
      'Implemented automated Nmap scans, custom Burp Suite intruder payloads, and scripted verification checks to audit inputs and establish secure patch recommendations.',
    technologies: ['Linux / Kali', 'Burp Suite', 'Nmap', 'Metasploit', 'OWASP ZAP', 'Bash'],
    mockupType: 'laptop',
    stats: [
      { label: 'Vulnerabilities Identified', value: '18+' },
      { label: 'Audit Remediation Rate', value: '100%' },
      { label: 'Lab Accuracy Score', value: '98.4%' },
    ],
    externalUrl: 'https://tryhackme.com/p/ahanafakif7787',
    featured: true,
  },
  {
    id: 'tryhackme-walkthroughs',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    quote: 'TryHackMe Red Team & Linux Privilege Escalation',
    categoryTags: ['Chatbot', 'Insurance', 'Red Team'],
    colorTheme: 'blue',
    description:
      'Hands-on offensive security laboratory write-ups and challenge breakdowns on TryHackMe. Focused on Linux internal permissions, SUID abuse, cron job hijacking, and credential exploitation.',
    challenge:
      'Navigating restricted Linux shells and discovering misconfigured sudo privileges and insecure file permissions under tight operational constraints.',
    solution:
      'Systematically applied LinPEAS automated enumeration, analyzed cron job write permissions, and executed controlled privilege escalation proofs of concept.',
    technologies: ['TryHackMe', 'Linux PrivEsc', 'SUID Exploits', 'Python Scripting', 'Bash', 'GDB'],
    mockupType: 'workstation',
    stats: [
      { label: 'Platform Rank', value: 'Top 10%' },
      { label: 'Rooms Completed', value: '45+' },
      { label: 'Attack Vectors Audited', value: '30+' },
    ],
    externalUrl: 'https://tryhackme.com/p/ahanafakif7787',
    featured: true,
  },
  {
    id: 'climate-governance-research',
    title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
    quote: 'Climate Governance & Local Sustainable Development: Institutional Policy',
    categoryTags: ['Website', 'Tertiary', 'Research Paper'],
    colorTheme: 'charcoal',
    description:
      'Peer-reviewed scholarly publication exploring institutional capacity, environmental governance, and grassroots policy execution across vulnerable districts in Bangladesh.',
    challenge:
      'Evaluating disparate governmental policy reports and community-level implementation bottlenecks across local government institutions.',
    solution:
      'Formulated an integrated policy assessment matrix quantifying institutional capability, stakeholder coordination, and sustainable resource distribution.',
    technologies: ['Institutional Analysis', 'Policy Frameworks', 'Statistical Evaluation', 'Qualitative Synthesis'],
    mockupType: 'monitor',
    stats: [
      { label: 'Districts Studied', value: '64' },
      { label: 'Policy Frameworks Reviewed', value: '12' },
      { label: 'Publication Status', value: 'Peer-Reviewed' },
    ],
    externalUrl: '#',
    featured: true,
  },
  {
    id: 'cyber-hygiene-awareness',
    title: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione',
    quote: 'CHTAP Certified & Cyber Hygiene Enterprise Awareness Platform',
    categoryTags: ['Directory', 'IT', 'Cyber Hygiene'],
    colorTheme: 'darkslate',
    description:
      'An enterprise awareness initiative and digital safety framework integrating CHTAP certified principles, multi-factor account hardening, and anti-phishing defense training.',
    challenge:
      'Human error remains the #1 breach vector in modern organizations, leading to social engineering traps and compromised corporate portals.',
    solution:
      'Designed an actionable digital hygiene curriculum featuring interactive simulated phishing drills, secure credential lifecycle rules, and safeguarding protocols.',
    technologies: ['CHTAP Framework', '2FA / MFA Hardening', 'Anti-Phishing Simulation', 'Platform Privacy Audit'],
    mockupType: 'code',
    stats: [
      { label: 'Staff Trained', value: '250+' },
      { label: 'Phishing Vulnerability Reduction', value: '78%' },
      { label: 'Credential Strength Index', value: '99%' },
    ],
    externalUrl: 'https://www.linkedin.com/in/ahanafakif21',
    featured: true,
  },
  {
    id: 'network-suricata-ids',
    title: 'Suricata Intrusion Detection & Deep Packet Telemetry',
    quote: 'Network Security Monitoring & IDS Alert Engine',
    categoryTags: ['Defensive Sec', 'Network', 'Intrusion Detection'],
    colorTheme: 'blue',
    description:
      'Engineered automated packet inspection sensors utilizing Suricata and Snort rules. Configured deep payload triage, port-scan detection, and live boundary anomaly telemetry.',
    challenge:
      'High-throughput packet flooding concealing subtle low-frequency reconnaissance probes across mirrored enterprise router SPAN ports.',
    solution:
      'Crafted targeted Lua detection scripts and normalized alerting signatures to filter false positives while capturing unauthorized reconnaissance attempts.',
    technologies: ['Suricata IDS', 'Snort', 'Wireshark', 'Python Scapy', 'IPTables', 'TShark'],
    mockupType: 'monitor',
    stats: [
      { label: 'Packets Triaged', value: '1.2M+' },
      { label: 'Rule Precision', value: '99.4%' },
      { label: 'Zero-Day Detection', value: 'Active' },
    ],
    externalUrl: 'https://github.com/ahanafakif',
    featured: true,
  },
  {
    id: 'ad-exploit-lab',
    title: 'Active Directory Kerberoasting & Domain Forest Lab',
    quote: 'Active Directory Privilege Escalation & Domain Dominance',
    categoryTags: ['Red Team', 'Active Directory', 'Kerberos'],
    colorTheme: 'red',
    description:
      'Simulated multi-domain enterprise Active Directory attack surface. Tested BloodHound shortest path queries, Kerberoasting service account tickets, and DCSync domain replication.',
    challenge:
      'Privileged service accounts with unconstrained delegation rights vulnerable to ticket extraction and lateral domain movement.',
    solution:
      'Mapped hidden ACL relationships using SharpHound, executed controlled offline ticket cracking, and authored mitigation hardening guides for Group Policy Objects.',
    technologies: ['Active Directory', 'BloodHound', 'Mimikatz', 'Kerberoast', 'PowerView', 'PowerShell'],
    mockupType: 'workstation',
    stats: [
      { label: 'Forest Nodes Audited', value: '150+' },
      { label: 'Attack Paths Mapped', value: '12' },
      { label: 'GPO Hardened', value: '100%' },
    ],
    externalUrl: 'https://tryhackme.com/p/ahanafakif7787',
    featured: true,
  },
];

export const CERTIFICATIONS: CertificateItem[] = [
  {
    id: 'chtap-cert',
    title: 'Certified Human Trafficking Awareness Professional (CHTAP)',
    issuer: 'Accredited International Professional Body',
    issueDate: '2025',
    credentialId: 'CHTAP-8902-GLOBAL',
    previewTheme: 'udemy',
    skills: ['Awareness & Prevention', 'Human Rights', 'Safeguarding', 'Ethics'],
    summary:
      'Accredited certification establishing expertise in human rights safeguarding, victim identification protocols, and preventative intelligence practices across physical and digital vectors.',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
  },
  {
    id: 'cyber-hygiene-cert',
    title: 'Certified Cyber Hygiene Practitioner',
    issuer: 'Cybersecurity Defense & Training Authority',
    issueDate: '2025',
    credentialId: 'CYBER-HYG-7712',
    previewTheme: 'accenture',
    skills: ['Endpoint Security', 'Multi-Factor Auth', 'Threat Prevention', 'Safe Browsing'],
    summary:
      'Professional industry certification validating rigorous knowledge of cyber hygiene best practices, attack surface reduction, password manager deployment, and secure network access.',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
  },
  {
    id: 'threat-modeling-cert',
    title: 'Accredited Defensive Threat Hardening & Risk Specialist',
    issuer: 'Global InfoSec Standards Accreditation Board',
    issueDate: '2025',
    credentialId: 'THREAT-HARD-2025',
    previewTheme: 'google',
    skills: ['Threat Modeling', 'Attack Surface Mapping', 'MITRE ATT&CK', 'Zero-Trust Controls'],
    summary:
      'Accredited professional credential certifying operational knowledge in mapping adversarial threat models, MITRE enterprise matrix mapping, and zero-trust perimeter enforcement.',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
  },
];

export const COURSE_CERTIFICATES: CourseCertificateItem[] = [
  {
    id: 'course-cisco-cybersec',
    title: 'Introduction to Cybersecurity & Threat Assessment',
    platform: 'Cisco',
    issuer: 'Cisco Networking Academy',
    issueDate: '2025',
    durationHours: '30 Hours',
    credentialId: 'CISCO-NETACAD-SEC-8921',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
    grade: 'Grade: 98% (Honors)',
    skills: ['Network Security', 'Threat Vectors', 'Confidentiality & Integrity', 'Cisco Packet Tracer'],
    summary:
      'Completed comprehensive foundational course on global threat landscapes, cyber defense architectures, cryptographic foundations, and security operations center (SOC) basics.',
    badgeTheme: 'blue',
  },
  {
    id: 'course-thm-presecurity',
    title: 'Pre-Security & Web Security Learning Path Certificate',
    platform: 'TryHackMe',
    issuer: 'TryHackMe Cybersecurity Academy',
    issueDate: '2025',
    durationHours: '45+ Hands-on Labs',
    credentialId: 'THM-CERT-PRESEC-4412',
    verificationUrl: 'https://tryhackme.com/p/ahanafakif7787',
    grade: 'Completed (Top 10%)',
    skills: ['Linux Fundamentals', 'Web Security Basics', 'Networking OSI Layers', 'Vulnerability Triage'],
    summary:
      'Official learning path certificate awarded upon completing 40+ structured labs spanning Linux permissions, network OSI fundamentals, HTTP headers, and defensive counter-measures.',
    badgeTheme: 'rose',
  },
  {
    id: 'course-web-penetration',
    title: 'Web Application Penetration Testing & OWASP Top 10 Mastery',
    platform: 'Udemy',
    issuer: 'Udemy Security Academy',
    issueDate: '2024',
    durationHours: '28 Hours',
    credentialId: 'UDEMY-OWASP-WEB-9912',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
    grade: 'Certificate of Completion',
    skills: ['Burp Suite Pro', 'SQL Injection', 'Cross-Site Scripting (XSS)', 'Broken Object Auth'],
    summary:
      'Intensive course completion certificate verifying hands-on web penetration testing skills, payload crafting, session hijacking prevention, and OWASP Top 10 remediation.',
    badgeTheme: 'purple',
  },
  {
    id: 'course-python-automation',
    title: 'Python for Network Security & Scripted Automation',
    platform: 'Coursera',
    issuer: 'DeepLearning / University Program',
    issueDate: '2024',
    durationHours: '36 Hours',
    credentialId: 'COURS-PY-SEC-8831',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
    grade: 'Completed with Distinction',
    skills: ['Python Scapy', 'Socket Programming', 'Log Parsing', 'Automated Port Scanner'],
    summary:
      'Course certificate validating skills in constructing custom Python network packet scanners with Scapy, automated security log parsing, and reconnaissance tool development.',
    badgeTheme: 'emerald',
  },
  {
    id: 'course-uiux-canva',
    title: 'UI/UX Design Career Track & Digital Business Systems',
    platform: 'Design Academy',
    issuer: 'Design Academy & Canva Creator Awards',
    issueDate: '2024',
    durationHours: '50 Hours',
    credentialId: 'CANVA-100-DESIGNS',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
    grade: '100+ Milestone Award',
    skills: ['Information Architecture', 'Visual Hierarchy', 'Wireframing', 'Prototyping'],
    summary:
      'Course completion credential covering full user interface design pipelines, responsive layout engineering, design systems, and client presentation visual aesthetics.',
    badgeTheme: 'amber',
  },
  {
    id: 'course-linux-sysadmin',
    title: 'Linux Command Line, Shell Scripting & System Administration',
    platform: 'Google',
    issuer: 'Open Source Security Academy',
    issueDate: '2024',
    durationHours: '32 Hours',
    credentialId: 'LINUX-SYSADMIN-6601',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
    grade: 'Certificate of Mastery',
    skills: ['Bash Scripting', 'Cron Automation', 'User Group Permissions', 'Service Hardening'],
    summary:
      'Course certificate establishing proficiency in Unix/Linux command-line mastery, SSH hardening, systemd service management, and automated maintenance scripting.',
    badgeTheme: 'cyan',
  },
];

export const RESEARCH_PAPERS: ResearchItem[] = [
  {
    id: 'res-climate-governance',
    title: 'Climate Governance and Local Sustainable Development: Institutional Capacity and Policy Implementation in Bangladesh',
    type: 'Scholarly Paper',
    venue: 'Journal of Sustainable Development & Policy Frameworks',
    year: '2025',
    status: 'Published',
    authors: ['Mohammed Ahanaf Akif Rahman', 'Academic Research Co-Authors'],
    abstract:
      'An empirical and socio-technical investigation into local administrative resilience, policy execution challenges, and computational tracking mechanisms across vulnerable administrative sectors.',
    highlights: [
      'Empirical analysis of 64 districts in Bangladesh',
      'Synthesized multi-tiered institutional capability matrix',
      'Recommended software-enabled transparency & auditing protocols',
    ],
    fieldTags: ['Policy Frameworks', 'Institutional Governance', 'Sustainability Metrics'],
    doiOrUrl: 'https://www.linkedin.com/in/ahanafakif21',
    metrics: [
      { label: 'Districts Analyzed', value: '64' },
      { label: 'Review Stage', value: 'Peer-Reviewed' },
      { label: 'Year', value: '2025' },
    ],
  },
  {
    id: 'res-microservice-vuln',
    title: 'Automated Vulnerability Detection & Attack Surface Simulation in Containerized Microservices',
    type: 'Thesis Research',
    venue: 'M.Sc. in Software Engineering (Major in Cyber Security) Thesis',
    year: '2026',
    status: 'Completed Thesis',
    authors: ['Mohammed Ahanaf Akif Rahman'],
    abstract:
      'Designing an automated sandbox telemetry pipeline using eBPF probes and LinPEAS automation to evaluate privilege escalation vectors in distributed microservice architectures under active adversarial simulation.',
    highlights: [
      'Kernel-level eBPF monitoring of container boundaries',
      'Automated reconnaissance script execution in isolated Docker testbeds',
      'Zero-trust mitigation blueprint for containerized deployment',
    ],
    fieldTags: ['Offensive Security', 'eBPF Telemetry', 'Container Hardening', 'Red Teaming'],
    doiOrUrl: 'https://github.com/ahanafakif',
    metrics: [
      { label: 'Simulation Labs', value: '24' },
      { label: 'Detection Speed', value: '<120ms' },
      { label: 'Defense Thesis', value: 'DIU 2026' },
    ],
  },
  {
    id: 'res-linux-privesc',
    title: 'Empirical Evaluation of Linux Kernel SUID & Capability Exploitation Vectors',
    type: 'Technical Whitepaper',
    venue: 'TryHackMe Research Working Papers',
    year: '2026',
    status: 'Pre-print',
    authors: ['Mohammed Ahanaf Akif Rahman'],
    abstract:
      'Comparative review of misconfigured SUID binaries, GTFOBins exploitation methods, and effective AppArmor/SELinux boundary sandboxing to mitigate lateral privilege escalation.',
    highlights: [
      'Audited 45+ vulnerable Linux virtual machine environments',
      'Classified common SUID misconfiguration patterns in enterprise builds',
      'Developed automated Bash verification rules for system administrators',
    ],
    fieldTags: ['Linux PrivEsc', 'SUID / SGID', 'Kernel Hardening', 'Access Control'],
    doiOrUrl: 'https://tryhackme.com/p/ahanafakif7787',
    metrics: [
      { label: 'Rooms Tested', value: '45+' },
      { label: 'Vectors Cleared', value: '30+' },
      { label: 'Accuracy', value: '99%' },
    ],
  },
  {
    id: 'res-audio-briefing',
    title: 'Interactive Audio Defense Briefing & Telemetry Modeling',
    type: 'Thesis Research',
    venue: 'Cyber Security Research Lab & Multimedia Briefings',
    year: '2026',
    status: 'Published',
    authors: ['Mohammed Ahanaf Akif Rahman'],
    abstract:
      'An interactive audio synthesis and live telemetry visualizer capturing container intrusion detection, kernel-level packet inspection, and active adversarial emulation.',
    highlights: [
      'Full 3-minute executive audio overview of defense methodologies',
      'Live reactive telemetry audio visualizer with frequency response',
      'Actionable zero-trust checklist for enterprise infrastructure',
    ],
    fieldTags: ['Audio Telemetry', 'Kernel Telemetry', 'Zero Trust', 'Incident Response'],
    doiOrUrl: 'https://github.com/ahanafakif',
    metrics: [
      { label: 'Duration', value: '2:45' },
      { label: 'Audio Tracks', value: 'Stereo' },
      { label: 'Telemetry', value: 'Live' },
    ],
  },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: 'ach-bsc-cse',
    title: 'B.Sc. in Computer Science & Engineering Degree Completion',
    category: 'Academic',
    issuer: 'Daffodil International University (DIU)',
    date: 'Jan 2026',
    description:
      'Successfully defended undergraduate thesis and completed rigorous CSE curriculum covering system architectures, network protocols, operating systems, and algorithmic analysis.',
    badge: '🏆 Academic Honor',
    highlightStat: 'B.Sc. CSE Defense',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
    credentialId: 'DIU-BSC-CSE-2026',
    skills: ['Computer Science Fundamentals', 'Algorithms & Data Structures', 'Operating Systems', 'Thesis Defense', 'Network Architectures'],
    highlights: [
      'Defended final year engineering thesis on automated microservice security telemetry.',
      'Completed 140+ credits in core CSE curriculum and laboratory systems.',
      'Specialized in defensive & offensive software engineering architectures.',
    ],
  },
  {
    id: 'ach-thm-top10',
    title: 'Top 10% Global Ranking on TryHackMe Security Platform',
    category: 'Cyber Security',
    issuer: 'TryHackMe Worldwide Platform',
    date: '2026',
    description:
      'Ranked within top 10% of cybersecurity researchers globally with 45+ offensive and defensive rooms cleared across Linux PrivEsc, Burp Suite, Network Security, and Red Teaming.',
    badge: '🥇 Top 10% Global',
    highlightStat: '45+ Labs Cleared',
    verificationUrl: 'https://tryhackme.com/p/ahanafakif7787',
    credentialId: 'THM-TOP10-GLOBAL',
    skills: ['Offensive Security', 'Linux PrivEsc', 'Burp Suite Pro', 'CTF Problem Solving', 'Network Enumeration', 'Vulnerability Triage'],
    highlights: [
      'Ranked in top 10% worldwide amongst 2M+ registered security researchers.',
      'Cleared 45+ hands-on virtual security attack and defense lab environments.',
      'Specialized in Linux privilege escalation vectors and web vulnerability triage.',
    ],
  },
  {
    id: 'ach-chtap-credential',
    title: 'CHTAP Accredited Professional Certification',
    category: 'Cyber Security',
    issuer: 'Accredited International Professional Body',
    date: '2025',
    description:
      'Earned Certified Human Trafficking Awareness Professional credential, mastering digital safety, human rights safeguarding, victim identification protocols, and ethical risk mitigation.',
    badge: '🛡️ Accredited Credential',
    highlightStat: 'CHTAP-8902',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
    credentialId: 'CHTAP-8902-GLOBAL',
    skills: ['Human Rights Safeguarding', 'Digital Safety Protocols', 'Ethics & Compliance', 'Anti-Trafficking Framework', 'Risk Assessment'],
    highlights: [
      'Accredited professional certification covering modern digital protection frameworks.',
      'Standardized protocols for identifying and mitigating human safety risks online.',
      'Synthesized corporate digital hygiene guidelines and preventive risk policies.',
    ],
  },
  {
    id: 'ach-canva-100',
    title: 'Canva 100+ Visual Design Milestone Award',
    category: 'Design & Creative',
    issuer: 'Canva Creator Community & Design Academy',
    date: '2024',
    description:
      'Awarded milestone achievement badge for creating over 100 visual brand assets, UI graphics, and marketing designs for fast-growing digital software enterprises.',
    badge: '🎨 100+ Milestone',
    highlightStat: '100+ Brand Assets',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
    credentialId: 'CANVA-100-MILESTONE',
    skills: ['UI/UX Visual Design', 'Brand Identity Systems', 'Marketing Graphics', 'Vector Illustration', 'Typography & Layout'],
    highlights: [
      'Engineered over 100+ production-grade brand visual assets and UI prototypes.',
      'Maintained consistent visual identities across diverse client and startup projects.',
      'Recognized by Canva design creator network for creative consistency.',
    ],
  },
  {
    id: 'ach-bcs-coordinator',
    title: 'BCS ICT FEST 2026 Technical Operations Coordinator',
    category: 'Leadership',
    issuer: 'Bangladesh Computer Society (BCS)',
    date: '2026',
    description:
      'Appointed operations coordinator assisting organizing committees, guiding competitors, and managing technical setups for national technology events.',
    badge: '⚡ Operational Leadership',
    highlightStat: 'National Event Lead',
    verificationUrl: 'https://www.linkedin.com/in/ahanafakif21',
    credentialId: 'BCS-ICTFEST-2026',
    skills: ['Operations Coordination', 'Technical Event Management', 'Participant Mentorship', 'IT Fest Logistics', 'Cross-Team Collaboration'],
    highlights: [
      'Facilitated operational workflows for BCS ICT FEST 2026 national technology gathering.',
      'Guided hundreds of students and competitors across technical contest tracks.',
      'Coordinated audio-visual, network infrastructure, and live event testbeds.',
    ],
  },
];

export const HACKATHONS_LIST: HackathonItem[] = [
  {
    id: 'hack-cyber-drill',
    title: 'National Cyber Drill & Threat Incident Emulation',
    event: 'National Cyber Incident Simulation Platform',
    year: '2026',
    role: 'Red Team Adversary & Forensics Investigator',
    category: 'Cyber Drill',
    standing: 'High Performance Qualifier',
    description:
      'Participated in an intense multi-stage national cyber drill simulating real-world enterprise infrastructure intrusions, malicious packet analysis, and live patch remediation.',
    tags: ['Incident Response', 'Network Forensics', 'Threat Triage', 'Log Analysis'],
    impactNotes: [
      'Decoded obfuscated Wireshark traffic under time pressure',
      'Identified SQL injection and unauthorized API parameter tampering',
      'Formulated actionable blue team remediation advisory',
    ],
  },
  {
    id: 'hack-thm-ctf',
    title: 'TryHackMe Red Team CTF Sprint Tournament',
    event: 'Offensive Security Community CTF',
    year: '2026',
    role: 'Solo Offensive Researcher',
    category: 'CTF Competition',
    standing: 'Top 5% Tournament Finish',
    description:
      'Competed in a 48-hour continuous offensive Capture-The-Flag challenge solving jeopardy-style challenges in web exploitation, SUID privilege escalation, and network pivoting.',
    tags: ['Web Exploitation', 'Linux PrivEsc', 'Pivoting', 'Burp Suite'],
    impactNotes: [
      'Captured 28 challenge flags across 6 categories',
      'Authored rapid exploit verification scripts in Python & Bash',
      'Earned distinction for cleanest write-up methodology',
    ],
  },
  {
    id: 'hack-bcs-sprint',
    title: 'BCS ICT FEST 36-Hour Hackathon & Coding Marathon',
    event: 'Bangladesh Computer Society ICT FEST',
    year: '2026',
    role: 'Operations & Technical Sprint Mentor',
    category: 'Hackathon Sprint',
    standing: 'Lead Technical Coordinator',
    description:
      'Spearheaded ground operations, infrastructure networking, and technical assistance for 50+ collegiate teams participating in an intensive 36-hour competitive hackathon sprint.',
    tags: ['Competitive Coding', 'Operations', 'Infrastructure', 'Mentorship'],
    impactNotes: [
      'Ensured 100% uptime for local evaluation servers and wireless testbeds',
      'Mentored competitor groups on secure API design and input validation',
      'Facilitated project demo evaluations alongside keynote judges',
    ],
  },
];
