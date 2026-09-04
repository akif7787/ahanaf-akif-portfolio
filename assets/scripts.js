/* ============================================
   Interactions
   ============================================ */

// Preloader — animated percent counter, dismisses on window load (or fallback timer)
(function preloader() {
  const el = document.querySelector('.preloader');
  if (!el) return;
  const pctEl = el.querySelector('.p-num');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DURATION = reduce ? 400 : 1800;
  const start = performance.now();

  const stops = [10, 27, 45, 68, 89, 100];
  let stopIdx = 0;
  const tick = (t) => {
    const p = Math.min(1, (t - start) / DURATION);
    // step through stops in sync with progress
    const target = Math.floor(p * 100);
    while (stopIdx < stops.length && stops[stopIdx] <= target) stopIdx++;
    const shown = stopIdx > 0 ? stops[stopIdx - 1] : 0;
    if (pctEl) pctEl.textContent = String(shown).padStart(3, '0');
    if (p < 1) requestAnimationFrame(tick);
    else if (pctEl) pctEl.textContent = '100';
  };
  requestAnimationFrame(tick);

  const dismiss = () => {
    const elapsed = performance.now() - start;
    const wait = Math.max(0, DURATION - elapsed);
    setTimeout(() => {
      el.classList.add('gone');
      setTimeout(() => el.remove(), 700);
    }, wait);
  };

  if (document.readyState === 'complete') dismiss();
  else window.addEventListener('load', dismiss, { once: true });
  // Absolute failsafe
  setTimeout(dismiss, 4000);
})();

// Portrait 3D tilt (desktop only, disabled for reduced motion)
(function portraitTilt() {
  const portrait = document.querySelector('.portrait');
  if (!portrait) return;
  const isCoarse = window.matchMedia('(pointer: coarse)').matches;
  const reduce   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isCoarse || reduce) return;

  let rAF = null;
  portrait.addEventListener('mousemove', (e) => {
    const r = portrait.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    if (rAF) cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(() => {
      portrait.style.transform = `rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateZ(0)`;
    });
  });
  portrait.addEventListener('mouseleave', () => {
    portrait.style.transform = '';
  });
})();

// CV Modal — click any [data-cv-view] to open the PDF inline
(function cvModal() {
  const modal = document.querySelector('#cv-modal');
  if (!modal) return;
  const iframe = modal.querySelector('iframe');
  const src = modal.dataset.pdf;

  const open = () => {
    if (iframe && !iframe.src) iframe.src = src;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-cv-view]').forEach(btn => {
    btn.addEventListener('click', (e) => { e.preventDefault(); open(); });
  });
  modal.querySelectorAll('[data-cv-close]').forEach(btn => {
    btn.addEventListener('click', close);
  });
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });
})();

// Nav scroll state
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const setActive = () => {
  const y = window.scrollY + 140;
  let current = '';
  sections.forEach(s => {
    if (s.offsetTop <= y) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActive, { passive: true });

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuBtn && mobileMenu) {
  const toggle = (open) => {
    const isOpen = open ?? !mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    const cvModal = document.querySelector('#cv-modal');
    const isCvOpen = cvModal && cvModal.classList.contains('open');
    document.body.style.overflow = (isOpen || isCvOpen) ? 'hidden' : '';
  };
  menuBtn.addEventListener('click', () => toggle());
  mobileMenu.addEventListener('click', e => {
    if (e.target.tagName === 'A' || e.target.classList.contains('mobile-menu')) toggle(false);
  });
}

// Reveal on view + stat bar fill + counters
(function setupReveal() {
  const els = Array.from(document.querySelectorAll('.reveal'));
  if (!els.length) return;

  // Arm the CSS — from now on, un-revealed .reveal elements are hidden.
  document.documentElement.classList.add('reveal-armed');

  const revealAll = () => els.forEach(el => el.classList.add('in'));

  // If IO isn't available, reveal everything on next frame.
  if (!('IntersectionObserver' in window)) {
    requestAnimationFrame(revealAll);
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });

  // Reveal above-the-fold elements immediately (avoids any first-paint IO quirks).
  const vh = window.innerHeight || document.documentElement.clientHeight;
  els.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.95) el.classList.add('in');
    else io.observe(el);
  });

  // Safety net — anything that hasn't fired after 1.5s gets revealed anyway.
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'));
  }, 1500);
})();

// Skill card cursor spotlight
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

// Terminal typing
function typeInto(el, text, speed = 22) {
  let i = 0;
  el.textContent = '';
  return new Promise(res => {
    const t = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) { clearInterval(t); res(); }
    }, speed);
  });
}

async function runHeroTerminal() {
  const line = document.querySelector('.dash-term .cmd-text');
  if (!line) return;
  const cmds = [
    'nmap -sV target.local',
    'whoami',
    'ip a | grep inet',
    'systemctl status ssh',
  ];
  let i = 0;
  while (true) {
    await typeInto(line, cmds[i], 60);
    await new Promise(r => setTimeout(r, 1800));
    i = (i + 1) % cmds.length;
  }
}
runHeroTerminal();

// Contact form — Web3Forms integration
// Configure ONE place: set data-web3forms-key on the <form> to your access key
// (get one free at https://web3forms.com). The form works without it in demo mode.
const form = document.querySelector('#contact-form');
if (form) {
  const statusEl = form.querySelector('.form-status');
  const btn = form.querySelector('button[type="submit"]');
  const btnHtml = btn ? btn.innerHTML : '';
  const setStatus = (kind, msg) => {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = 'form-status ' + kind;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !message) {
      setStatus('err', 'Please fill in every field.');
      return;
    }
    if (!emailOk) {
      setStatus('err', 'Please enter a valid email address.');
      return;
    }
    // Honeypot
    if (form.botcheck && form.botcheck.checked) return;

    const key = form.dataset.web3formsKey;
    btn.disabled = true;
    btn.innerHTML = 'Sending…';
    setStatus('info', 'Sending your message…');

    if (!key) {
      // Demo mode — no key configured yet
      await new Promise(r => setTimeout(r, 800));
      setStatus('ok', 'Demo mode: No Web3Forms access key configured. Your message was not sent. Please reach out directly via ahanafik21@gmail.com.');
      btn.innerHTML = 'Demo Mode (Not Sent)';
      setTimeout(() => { btn.innerHTML = btnHtml; btn.disabled = false; form.reset(); }, 3200);
      return;
    }

    try {
      const fd = new FormData(form);
      fd.append('access_key', key);
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success !== false) {
        setStatus('ok', 'Thanks — your message has been sent. I\'ll get back to you soon.');
        btn.innerHTML = 'Message Sent ✓';
        form.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setStatus('err', 'Something went wrong. Please email ahanafik21@gmail.com instead.');
      btn.innerHTML = btnHtml;
    } finally {
      setTimeout(() => { btn.disabled = false; if (btn.innerHTML.includes('Sent')) btn.innerHTML = btnHtml; }, 3200);
    }
  });
}

// Draw dashboard nodes (SVG)
(function drawNodes() {
  const svg = document.querySelector('#nodes-svg');
  if (!svg) return;
  const w = 100, h = 100;
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  const nodes = [
    { x: 50, y: 50, r: 4, hub: true },
    { x: 20, y: 20 }, { x: 82, y: 22 }, { x: 78, y: 78 },
    { x: 22, y: 82 }, { x: 15, y: 55 }, { x: 88, y: 55 },
    { x: 50, y: 12 }, { x: 50, y: 88 },
  ];
  const links = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],
    [1,5],[2,6],[3,6],[4,5],[1,7],[2,7],[3,8],[4,8]
  ];
  const ns = 'http://www.w3.org/2000/svg';
  links.forEach(([a,b]) => {
    const l = document.createElementNS(ns, 'line');
    l.setAttribute('x1', nodes[a].x); l.setAttribute('y1', nodes[a].y);
    l.setAttribute('x2', nodes[b].x); l.setAttribute('y2', nodes[b].y);
    l.setAttribute('stroke', 'rgba(94,234,212,0.25)');
    l.setAttribute('stroke-width', '0.4');
    svg.appendChild(l);
  });
  nodes.forEach((n, i) => {
    const c = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', n.x); c.setAttribute('cy', n.y);
    c.setAttribute('r', n.hub ? 3.2 : 1.8);
    c.setAttribute('fill', n.hub ? '#5EEAD4' : 'rgba(230,232,236,0.7)');
    if (n.hub) {
      c.setAttribute('filter', 'url(#glow)');
    }
    svg.appendChild(c);
    // Pulse ring on hub
    if (n.hub) {
      const ring = document.createElementNS(ns, 'circle');
      ring.setAttribute('cx', n.x); ring.setAttribute('cy', n.y);
      ring.setAttribute('r', 3.2);
      ring.setAttribute('fill', 'none');
      ring.setAttribute('stroke', '#5EEAD4');
      ring.setAttribute('stroke-width', '0.4');
      ring.setAttribute('opacity', '0.6');
      const anim = document.createElementNS(ns, 'animate');
      anim.setAttribute('attributeName', 'r');
      anim.setAttribute('from', '3.2'); anim.setAttribute('to', '12');
      anim.setAttribute('dur', '2.4s'); anim.setAttribute('repeatCount', 'indefinite');
      const anim2 = document.createElementNS(ns, 'animate');
      anim2.setAttribute('attributeName', 'opacity');
      anim2.setAttribute('from', '0.6'); anim2.setAttribute('to', '0');
      anim2.setAttribute('dur', '2.4s'); anim2.setAttribute('repeatCount', 'indefinite');
      ring.appendChild(anim); ring.appendChild(anim2);
      svg.appendChild(ring);
    }
  });
})();

// Draw dashboard chart (area)
(function drawChart() {
  const svg = document.querySelector('#chart-svg');
  if (!svg) return;
  const w = 200, h = 60;
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  svg.setAttribute('preserveAspectRatio', 'none');
  const pts = [];
  const n = 40;
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * w;
    const noise = Math.sin(i * 0.6) * 6 + Math.sin(i * 0.23) * 10 + Math.cos(i * 0.4) * 4;
    const y = h - (18 + noise + (i / n) * 12);
    pts.push([x, Math.max(6, Math.min(h - 4, y))]);
  }
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L ${w} ${h} L 0 ${h} Z`;
  const ns = 'http://www.w3.org/2000/svg';
  const p1 = document.createElementNS(ns, 'path');
  p1.setAttribute('d', area);
  p1.setAttribute('fill', 'url(#chart-grad)');
  const p2 = document.createElementNS(ns, 'path');
  p2.setAttribute('d', line);
  p2.setAttribute('fill', 'none');
  p2.setAttribute('stroke', '#5EEAD4');
  p2.setAttribute('stroke-width', '1.2');
  p2.setAttribute('vector-effect', 'non-scaling-stroke');
  svg.appendChild(p1);
  svg.appendChild(p2);
  // Last-point dot
  const last = pts[pts.length - 1];
  const c = document.createElementNS(ns, 'circle');
  c.setAttribute('cx', last[0]); c.setAttribute('cy', last[1]);
  c.setAttribute('r', 1.6); c.setAttribute('fill', '#5EEAD4');
  svg.appendChild(c);
})();
