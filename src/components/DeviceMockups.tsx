import React from 'react';

interface MockupProps {
  type: 'laptop' | 'workstation' | 'monitor' | 'code';
}

export const DeviceMockups: React.FC<MockupProps> = ({ type }) => {
  if (type === 'laptop') {
    // Laptop Mockup with Web Vulnerability Dashboard
    return (
      <div className="relative w-full max-w-[420px] mx-auto py-2 group">
        {/* Screen Bezel */}
        <div className="relative bg-neutral-900 rounded-t-xl p-2.5 shadow-2xl border border-neutral-700/60 transition-transform duration-300 group-hover:scale-[1.02]">
          {/* Webcam dot */}
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-600/80" />
          
          {/* Inner Screen */}
          <div className="bg-[#0D1117] rounded-md overflow-hidden aspect-[16/10] p-3 text-left border border-white/5 flex flex-col justify-between">
            {/* Window Topbar */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-[10px] text-neutral-400 font-mono ml-2">pentest-lab // vulnerability-scan</span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">SEV: HIGH</span>
            </div>

            {/* Dashboard Visual Body */}
            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <span className="text-[9px] text-neutral-400 block font-mono">TARGET ENDPOINT</span>
                <span className="text-xs font-semibold text-emerald-400 font-mono">192.168.1.104</span>
                <span className="text-[8px] text-neutral-400 block mt-1">Status: 200 OK</span>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <span className="text-[9px] text-neutral-400 block font-mono">EXPLOIT RISK</span>
                <span className="text-xs font-semibold text-rose-400 font-mono">CVSS 8.9</span>
                <span className="text-[8px] text-neutral-400 block mt-1">RCE Vulnerability</span>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <span className="text-[9px] text-neutral-400 block font-mono">REMEDIATION</span>
                <span className="text-xs font-semibold text-blue-400 font-mono">PATCHED</span>
                <span className="text-[8px] text-neutral-400 block mt-1">Auth Header Fixed</span>
              </div>
            </div>

            {/* Mini Log Console */}
            <div className="bg-black/60 rounded p-2 font-mono text-[9px] text-emerald-300/90 leading-relaxed border border-emerald-500/20">
              <p className="truncate"><span className="text-neutral-500">&gt;</span> nmap -sC -sV -p 80,443,8080 target.local</p>
              <p className="truncate text-neutral-400"><span className="text-emerald-400">[+]</span> Port 8080/tcp OPEN: Apache Tomcat 9.0.41</p>
              <p className="truncate text-amber-300"><span className="text-neutral-500">&gt;</span> SQLi payload verified on /api/v1/auth</p>
            </div>
          </div>
        </div>
        {/* Laptop Base / Keyboard deck */}
        <div className="relative bg-neutral-300 rounded-b-xl h-3.5 shadow-md border-t border-neutral-400 flex items-center justify-center">
          <div className="w-16 h-1 rounded-full bg-neutral-400/80" />
        </div>
      </div>
    );
  }

  if (type === 'workstation') {
    // Cybersecurity Workstation / TryHackMe Lab Mockup
    return (
      <div className="relative w-full max-w-[420px] mx-auto py-2 group">
        <div className="bg-gradient-to-br from-neutral-900 to-blue-950 rounded-xl p-3 shadow-2xl border border-blue-500/30 transition-transform duration-300 group-hover:scale-[1.02]">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-blue-500/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block animate-pulse" />
              <span className="text-xs font-mono font-semibold text-blue-200">TRYHACKME // OFFENSIVE LAB</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              ROOT SHELL ACQUIRED
            </span>
          </div>

          {/* Visual Workspace Content */}
          <div className="mt-2.5 grid grid-cols-5 gap-2">
            {/* Left mini sidebar */}
            <div className="col-span-2 bg-black/40 rounded p-2 text-left text-[9px] font-mono border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-neutral-400 block mb-1">MODULE PROGRESS</span>
                <div className="w-full bg-white/10 rounded-full h-1.5 mb-2 overflow-hidden">
                  <div className="bg-blue-400 h-full w-[85%] rounded-full" />
                </div>
                <div className="space-y-1 text-neutral-300 text-[8px]">
                  <p>✔ Linux Fundamentals</p>
                  <p>✔ PrivEsc via SUID</p>
                  <p>✔ Cron Job Exploit</p>
                  <p className="text-blue-300 font-semibold">▶ Kernel Exploits (Active)</p>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 text-[8px] text-neutral-400">
                User: ahanafakif7787
              </div>
            </div>

            {/* Right Interactive Shell */}
            <div className="col-span-3 bg-black/80 rounded p-2 text-left font-mono text-[9px] text-neutral-200 border border-white/10 flex flex-col justify-between">
              <div className="space-y-1">
                <p className="text-neutral-400">$ find / -perm -4000 2&gt;/dev/null</p>
                <p className="text-neutral-500">/usr/bin/pkexec</p>
                <p className="text-neutral-500">/usr/bin/passwd</p>
                <p className="text-blue-400">$ whoami</p>
                <p className="text-emerald-400 font-bold">root</p>
                <p className="text-neutral-400"># cat /root/root.txt</p>
                <p className="text-amber-300 font-semibold text-[8px]">thm{'{'}pr1v_3sc_m4st3r_2026{'}'}</p>
              </div>
              <div className="mt-2 flex items-center justify-between text-[8px] text-neutral-400 border-t border-white/10 pt-1">
                <span>Latency: 24ms</span>
                <span className="text-emerald-400">Connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'monitor') {
    // Desktop iMac / Academic Publication Mockup
    return (
      <div className="relative w-full max-w-[420px] mx-auto py-2 group">
        {/* Monitor Frame */}
        <div className="bg-neutral-900 rounded-t-xl p-3 shadow-2xl border border-neutral-700 transition-transform duration-300 group-hover:scale-[1.02]">
          {/* Display screen */}
          <div className="bg-[#121214] rounded overflow-hidden aspect-[16/10] p-4 text-left border border-white/10 flex flex-col justify-between">
            {/* Header typography */}
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-xl sm:text-2xl font-black text-white tracking-tighter leading-none">
                  RESEARCH REPORT
                </h4>
                <p className="text-[9px] text-amber-400 uppercase tracking-widest font-mono mt-0.5">
                  Institutional Publication
                </p>
              </div>
              <span className="text-[9px] text-neutral-300 bg-white/10 px-2 py-0.5 rounded font-mono">
                DIU · 2026
              </span>
            </div>

            {/* Document layout preview */}
            <div className="bg-white/5 rounded p-2.5 border border-white/5 my-2 text-[9px] text-neutral-300 space-y-1">
              <p className="font-semibold text-white truncate">
                Climate Governance & Local Sustainable Development
              </p>
              <p className="text-[8px] text-neutral-400 line-clamp-2">
                "Examining institutional capacity and grassroots administrative policy implementation across 64 administrative divisions..."
              </p>
              <div className="flex items-center gap-2 pt-1 text-[8px] text-neutral-400 font-mono">
                <span>Author: M. A. A. Rahman</span>
                <span>·</span>
                <span>Peer-Reviewed</span>
              </div>
            </div>

            {/* Research metrics bar */}
            <div className="grid grid-cols-3 gap-2 text-center text-[8px] font-mono">
              <div className="bg-white/5 py-1 rounded">
                <span className="text-white block font-bold text-[10px]">64</span>
                <span className="text-neutral-400">Districts</span>
              </div>
              <div className="bg-white/5 py-1 rounded">
                <span className="text-white block font-bold text-[10px]">12</span>
                <span className="text-neutral-400">Policies</span>
              </div>
              <div className="bg-white/5 py-1 rounded">
                <span className="text-emerald-400 block font-bold text-[10px]">100%</span>
                <span className="text-neutral-400">Indexed</span>
              </div>
            </div>
          </div>

          {/* iMac Chin */}
          <div className="h-4 bg-neutral-800 rounded-b flex items-center justify-center border-t border-neutral-700">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-600/70" />
          </div>
        </div>

        {/* Stand */}
        <div className="mx-auto w-16 h-3 bg-neutral-700" />
        <div className="mx-auto w-24 h-1 bg-neutral-600 rounded-full shadow-md" />
      </div>
    );
  }

  // Code Terminal Mockup
  return (
    <div className="relative w-full max-w-[420px] mx-auto py-2 group">
      <div className="bg-[#0A0D14] rounded-xl p-3 shadow-2xl border border-neutral-700/80 transition-transform duration-300 group-hover:scale-[1.02] text-left font-mono">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[10px] text-neutral-400 ml-2">cyber_hygiene_audit.sh</span>
          </div>
          <span className="text-[9px] text-emerald-400">CHTAP-SECURE</span>
        </div>

        {/* Code View */}
        <div className="mt-2 text-[9px] leading-relaxed text-neutral-300 overflow-x-hidden space-y-0.5">
          <p className="text-neutral-500">{`<?php // Enterprise Security Audit & MFA Policy ?>`}</p>
          <p>
            <span className="text-rose-400">&lt;div</span> <span className="text-amber-300">class=</span>
            <span className="text-emerald-300">"sec-container"</span>
            <span className="text-rose-400">&gt;</span>
          </p>
          <p className="pl-3">
            <span className="text-blue-400">$threat_level</span> = <span className="text-emerald-300">"MITIGATED"</span>;
          </p>
          <p className="pl-3">
            <span className="text-purple-400">if</span> (!<span className="text-blue-400">$user</span>-&gt;
            <span className="text-amber-300">has2FAEnabled</span>()) {'{'}
          </p>
          <p className="pl-6 text-rose-300">
            <span className="text-purple-400">throw new</span> <span className="text-yellow-300">SecurityException</span>
            ("MFA enforcement required");
          </p>
          <p className="pl-3">{'}'}</p>
          <p className="text-neutral-500">{`# Auditing active directory token rotation...`}</p>
          <p className="text-emerald-400 font-semibold truncate">
            ✔ CHTAP compliance: 100% verified across endpoints
          </p>
          <p className="text-blue-300 truncate">
            ✔ Zero plaintext credentials detected in logs
          </p>
        </div>

        {/* Bottom Status bar */}
        <div className="mt-3 pt-2 border-t border-neutral-800 flex items-center justify-between text-[8px] text-neutral-400">
          <span>UTF-8 · Bash/PHP</span>
          <span className="text-emerald-400 font-bold">ALL TESTS PASSED</span>
        </div>
      </div>
    </div>
  );
};
