/* =========================================================
   DATIVOPK — MAIN SCRIPT
   ========================================================= */

// Mark body as JS-ready (enables scroll-reveal CSS animations safely)
document.body.classList.add('js-ready');

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// 2. PROGRAM DATA (for modal)
const PROGRAMS = {
  ceh: {
    id: 'ceh',
    title: 'Certified Ethical Hacking & Cyber Security',
    category: 'Cyber Security',
    description: 'A comprehensive 3-month program covering defense, penetration testing, and digital forensics with practical, hands-on training in a controlled lab environment.',
    learningAreas: [
      'Hands-on Virtual Hacking Labs',
      'Kali Linux Tools Mastery',
      'Nmap — Network Discovery & Security Auditing',
      'Metasploit — Exploitation Framework',
      'Wireshark — Network Protocol Analysis',
      'OWASP Top 10 Web Vulnerability Exploitation',
      'Network Security Fundamentals',
      'Cryptography & Encryption',
      'Wi-Fi Security Auditing',
      'Penetration Testing Report Writing'
    ]
  },
  'data-analytics': {
    id: 'data-analytics',
    title: 'Advanced Data Analysis & Business Intelligence',
    category: 'Data Science',
    description: 'A comprehensive 3-month program teaching you to transform raw data into visual stories, automated dashboards, and actionable business insights.',
    learningAreas: [
      'Python Data Science Stack',
      'NumPy — Numerical Computing',
      'Pandas — Data Manipulation & Analysis',
      'Matplotlib — Data Visualization',
      'Interactive Chart Design (Recharts, D3, Plotly)',
      'Advanced SQL Queries & Optimization',
      'Data Cleansing & Preprocessing',
      'ETL Pipelines — Extract, Transform, Load',
      'Dashboard Design Principles',
      'Business Intelligence Reporting'
    ]
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing & Social Media Growth',
    category: 'Digital Marketing',
    description: 'A comprehensive 3-month program covering SEO, paid advertising, content strategy, and social media marketing to grow brands and generate leads online.',
    learningAreas: [
      'SEO & Google Search Optimization',
      'Facebook & Instagram Ads (Meta Business Suite)',
      'Google Ads & PPC Campaigns',
      'Content Marketing & Copywriting',
      'Email Marketing & Automation',
      'YouTube & Video Marketing',
      'Analytics & Conversion Tracking (GA4)',
      'Influencer & Affiliate Marketing',
      'Brand Identity & Online Presence',
      'Marketing Funnel & Lead Generation'
    ]
  },
  'power-bi': {
    id: 'power-bi',
    title: 'Power BI & Data Visualization Mastery',
    category: 'Business Intelligence',
    description: 'A comprehensive 3-month program to build interactive dashboards and real-time business reports using Microsoft Power BI, DAX, and Power Query.',
    learningAreas: [
      'Power BI Desktop & Power BI Service',
      'DAX Formulas & Calculated Measures',
      'Power Query & Data Transformation',
      'Interactive Dashboard Design',
      'Real-Time Data Refresh & Scheduling',
      'Data Modeling & Relationships',
      'Report Sharing & Collaboration',
      'Row-Level Security (RLS)',
      'Custom Visuals & Themes',
      'Integration with Excel, SQL & Azure'
    ]
  }
};

// 3. REVIEWS DATA (12 Verified Reviews)
const REVIEWS = [
  {
    name: 'Muhammad Hammad',
    date: 'July 14, 2026',
    course: 'CEH Ethical Hacking',
    rating: 5,
    text: 'The Kali Linux and Metasploit labs are incredible — you actually get to practice real-world scenarios in a safe environment. And for just 999 PKR/month, the value is unmatched.'
  },
  {
    name: 'Ayesha Fatima',
    date: 'July 10, 2026',
    course: 'Advanced Data Analysis & BI',
    rating: 5,
    text: 'SQL joins and Python Pandas were always intimidating to me, but the way they broke it down made it easy to follow. By month two, I built a real sales dashboard!'
  },
  {
    name: 'Bilal Ahmed Siddiqui',
    date: 'June 28, 2026',
    course: 'CEH Ethical Hacking',
    rating: 5,
    text: 'The WhatsApp support group is a game-changer — mentors respond within minutes. The OWASP Top 10 web security labs really opened my eyes to real vulnerabilities.'
  },
  {
    name: 'Zainab Jamil',
    date: 'June 19, 2026',
    course: 'Advanced Data Analysis & BI',
    rating: 5,
    text: 'The data wrangling lectures are top-notch. Everything is practical — no unnecessary theory. I transitioned into a Data Analyst role seamlessly.'
  },
  {
    name: 'Hamza Tariq',
    date: 'May 24, 2026',
    course: 'CEH Ethical Hacking',
    rating: 5,
    text: 'Wi-Fi security auditing and network scanning using Nmap were taught so clearly. Perfect for absolute beginners starting out in Cyber Security.'
  },
  {
    name: 'Maryam Safdar',
    date: 'May 15, 2026',
    course: 'Advanced Data Analysis & BI',
    rating: 5,
    text: 'Learning Python NumPy, Pandas, and Plotly visualization step-by-step helped me clean and present real corporate datasets effortlessly.'
  },
  {
    name: 'Usman Ghani',
    date: 'April 30, 2026',
    course: 'CEH Ethical Hacking',
    rating: 5,
    text: 'Cryptography and virtual Kali machine labs exceeded my expectations. Mentor support for Linux installation was smooth and instant.'
  },
  {
    name: 'Sana Shah',
    date: 'April 18, 2026',
    course: 'Advanced Data Analysis & BI',
    rating: 5,
    text: 'ETL pipelines and SQL queries optimization were explained with real company datasets. Worth every rupee spent.'
  },
  {
    name: 'Farhan Raza',
    date: 'March 29, 2026',
    course: 'CEH Ethical Hacking',
    rating: 5,
    text: 'Wireshark packet analysis and digital forensics modules were super engaging. Practical learning at its finest!'
  },
  {
    name: 'Hira Khalid',
    date: 'March 12, 2026',
    course: 'Advanced Data Analysis & BI',
    rating: 5,
    text: 'Interactive chart design with Power BI and Recharts allowed me to create automated financial reports for my clients.'
  },
  {
    name: 'Omer Farooq',
    date: 'February 25, 2026',
    course: 'CEH Ethical Hacking',
    rating: 5,
    text: 'The CTF hacking challenges in month 3 tested our skills thoroughly. Highly recommended training program in Pakistan.'
  },
  {
    name: 'Nimra Ali',
    date: 'February 10, 2026',
    course: 'Advanced Data Analysis & BI',
    rating: 5,
    text: 'The portfolio project we completed gave me huge confidence during my job interviews. Pakistani mentors are extremely helpful.'
  }
];

// 4. RENDER ENDLESS REVIEWS SLIDER
function renderReviews() {
  const track = document.getElementById('reviews-track');
  if (!track) return;
  
  // Render cards twice for seamless infinite marquee loop
  const list = [...REVIEWS, ...REVIEWS];
  track.innerHTML = list.map(r => {
    const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
    return `
      <div class="review-card">
        <div class="review-header">
          <span class="reviewer-name">${r.name}</span>
          <span class="review-date">${r.date}</span>
        </div>
        <span class="review-course">${r.course}</span>
        <div class="review-stars">${stars}</div>
        <p class="review-text">${r.text}</p>
      </div>
    `;
  }).join('');
}
renderReviews();

// 5. MODAL SYSTEM
const modalOverlay = document.getElementById('modal-overlay');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalAreas = document.getElementById('modal-areas');
const modalClose = document.getElementById('modal-close');
let lastFocusedEl = null;

function openModal(programId) {
  const program = PROGRAMS[programId];
  if (!program) return;
  modalCategory.textContent = program.category;
  modalTitle.textContent = program.title;
  modalDesc.textContent = program.description;
  modalAreas.innerHTML = program.learningAreas.map(a => `<li>${a}</li>`).join('');
  lastFocusedEl = document.activeElement;
  modalOverlay.classList.add('open');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modalOverlay.classList.remove('open');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (lastFocusedEl) lastFocusedEl.focus();
}

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-program-id]');
  if (trigger) {
    e.preventDefault();
    openModal(trigger.getAttribute('data-program-id'));
  }
});
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) closeModal();
});
// Focus trap
const programModal = document.getElementById('program-modal');
if (programModal) {
  programModal.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = e.currentTarget.querySelectorAll('button, a[href], select, input, textarea');
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

// 6. HEADER: sticky shadow + active link + mobile menu
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  }, { passive: true });
}

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
  mobileNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active nav link on scroll
const sections = ['home', 'courses', 'lab', 'benefits', 'reviews', 'community', 'enroll', 'contact']
  .map(id => document.getElementById(id)).filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');
function setActiveLink() {
  if (!sections.length) return;
  let currentId = sections[0].id;
  const scrollPos = window.scrollY + 140;
  sections.forEach(sec => { if (sec.offsetTop <= scrollPos) currentId = sec.id; });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
}
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// 7. SCROLL REVEAL
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
}

// 8. TAB SWITCHING (Lab section)
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Update content
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    const panel = document.getElementById(`tab-${tabId}`);
    if (panel) panel.classList.add('active');
    // Initialize dashboard charts if data tab
    if (tabId === 'data-lab') initDashboard('monthly');
  });
});

// 9. TERMINAL SIMULATOR
const TERMINAL_COMMANDS = {
  help: {
    output: [
      { type: 'info', text: 'Available Commands:' },
      { type: 'info', text: '  nmap     — Network discovery & security auditing' },
      { type: 'info', text: '  sqlmap   — SQL injection detection & exploitation' },
      { type: 'info', text: '  john     — Password hash cracker' },
      { type: 'info', text: '  clear    — Reset terminal' },
      { type: 'info', text: '  help     — Show this help message' },
      { type: 'warn', text: '⚠ All commands are educational simulations only.' }
    ]
  },
  nmap: {
    output: [
      { type: 'default', text: 'Starting Nmap 7.94 ( https://nmap.org )' },
      { type: 'default', text: 'Scanning target: 192.168.1.0/24 (SIMULATION)' },
      { type: 'default', text: '' },
      { type: 'info', text: 'Discovered hosts:' },
      { type: 'default', text: '  192.168.1.1    — Gateway    [OPEN: 80, 443]' },
      { type: 'default', text: '  192.168.1.10   — WebServer  [OPEN: 22, 80, 443, 3306]' },
      { type: 'default', text: '  192.168.1.25   — Workstation [OPEN: 135, 445]' },
      { type: 'default', text: '  192.168.1.50   — IoT Device [OPEN: 8080]' },
      { type: 'default', text: '' },
      { type: 'info', text: 'PORT    STATE  SERVICE' },
      { type: 'default', text: '22/tcp  open   ssh' },
      { type: 'default', text: '80/tcp  open   http' },
      { type: 'default', text: '443/tcp open   https' },
      { type: 'default', text: '3306/tcp open  mysql' },
      { type: 'default', text: '8080/tcp open  http-proxy' },
      { type: 'default', text: '' },
      { type: 'info', text: 'Nmap done: 4 hosts up, scanned in 2.34 seconds (SIMULATED)' }
    ]
  },
  sqlmap: {
    output: [
      { type: 'default', text: 'sqlmap/1.7 - automatic SQL injection tool' },
      { type: 'default', text: 'Target URL: http://demo.testsite.local/login (SIMULATION)' },
      { type: 'default', text: '' },
      { type: 'info', text: '[INFO] testing connection to the target URL' },
      { type: 'info', text: '[INFO] testing if the target URL is stable' },
      { type: 'info', text: '[INFO] testing parameter: id' },
      { type: 'default', text: '' },
      { type: 'warn', text: '[VULN] Parameter "id" is vulnerable to:' },
      { type: 'warn', text: '  Type: boolean-based blind' },
      { type: 'warn', text: '  Title: AND boolean-based blind' },
      { type: 'warn', text: '  Payload: id=1 AND 5678=5678' },
      { type: 'default', text: '' },
      { type: 'info', text: '[INFO] Database: MySQL 8.0' },
      { type: 'info', text: '[INFO] Tables found: users, orders, products' },
      { type: 'default', text: '' },
      { type: 'warn', text: '⚠ This is a SIMULATION for educational purposes only.' }
    ]
  },
  john: {
    output: [
      { type: 'default', text: 'John the Ripper 1.9.0 (SIMULATION)' },
      { type: 'default', text: 'Loading password hashes from: demo_hashes.txt' },
      { type: 'default', text: '' },
      { type: 'info', text: 'Loaded 5 password hashes (MD5)' },
      { type: 'default', text: '' },
      { type: 'warn', text: 'Cracking results:' },
      { type: 'default', text: '  admin     : ******** (WEAK — dictionary match)' },
      { type: 'default', text: '  user02    : ******** (WEAK — common pattern)' },
      { type: 'default', text: '  db_admin  : [NOT CRACKED — strong hash]' },
      { type: 'default', text: '  testuser  : ******** (WEAK — keyboard walk)' },
      { type: 'default', text: '  sysadmin  : [NOT CRACKED — strong hash]' },
      { type: 'default', text: '' },
      { type: 'info', text: '3 of 5 hashes cracked in 1.2 seconds (SIMULATED)' },
      { type: 'warn', text: 'Lesson: Always use strong, unique passwords and salted hashes.' },
      { type: 'warn', text: '⚠ No real passwords were cracked — this is a simulation.' }
    ]
  }
};

const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

function addTerminalLine(type, text) {
  if (!terminalOutput) return;
  const p = document.createElement('p');
  p.className = 'terminal-line';
  if (type === 'command') {
    p.innerHTML = `<span class="terminal-prompt">root@dativopk:~$</span> <span class="terminal-text">${text}</span>`;
  } else {
    const cls = type === 'warn' ? ' warn' : type === 'error' ? ' error' : type === 'info' ? ' info' : '';
    p.innerHTML = `<span class="terminal-text${cls}">${text}</span>`;
  }
  terminalOutput.appendChild(p);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function executeCommand(cmd) {
  const trimmed = cmd.trim().toLowerCase();
  addTerminalLine('command', cmd);
  
  if (trimmed === 'clear') {
    if (terminalOutput) {
      terminalOutput.innerHTML = `
        <p class="terminal-line"><span class="terminal-prompt">root@dativopk:~$</span> <span class="terminal-text">Terminal reset. Type 'help' for commands.</span></p>
        <p class="terminal-line"><span class="terminal-text warn">⚠ This is an educational simulation — no real systems are targeted.</span></p>
      `;
    }
    return;
  }
  
  if (TERMINAL_COMMANDS[trimmed]) {
    // Simulate typing delay for each line
    const lines = TERMINAL_COMMANDS[trimmed].output;
    let delay = 0;
    lines.forEach((line, i) => {
      delay += 60 + Math.random() * 40;
      setTimeout(() => {
        addTerminalLine(line.type, line.text);
      }, delay);
    });
  } else if (trimmed === '') {
    // Do nothing for empty
  } else {
    addTerminalLine('error', `Command not found: ${cmd}. Type 'help' for available commands.`);
  }
}

// Terminal input handler
if (terminalInput) {
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      executeCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });
}

// Quick command buttons
document.querySelectorAll('.quick-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cmd = btn.getAttribute('data-cmd');
    executeCommand(cmd);
    if (terminalInput) terminalInput.focus();
  });
});

// 10. DASHBOARD (Canvas Charts + Table) — LIVE PERIOD-BASED DATA
let dashboardInitialized = false;

// === DATASET FOR EACH PERIOD ===
const DASHBOARD_DATA = {
  monthly: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    revenue: [180, 220, 190, 310, 280, 350, 420, 380, 460, 510, 480, 540],
    kpi: { revenue: 'PKR 2.4M', users: '1,847', conversion: '3.2%', aov: 'PKR 1,350' },
    kpiChange: { revenue: '+12.5%', users: '+8.3%', conversion: '-0.4%', aov: '+5.1%' },
    kpiClass: { revenue: 'positive', users: 'positive', conversion: 'negative', aov: 'positive' },
    transactions: [
      { date: '2026-07-12', customer: 'Ahmad Khan', product: 'Laptop Pro X1', amount: 'PKR 185,000', status: 'completed' },
      { date: '2026-07-11', customer: 'Sara Malik', product: 'Wireless Headphones', amount: 'PKR 8,500', status: 'processing' },
      { date: '2026-07-10', customer: 'Hassan Raza', product: 'Office Chair Ergo', amount: 'PKR 42,000', status: 'completed' },
      { date: '2026-07-09', customer: 'Fatima Noor', product: 'USB-C Hub', amount: 'PKR 3,200', status: 'pending' },
      { date: '2026-07-08', customer: 'Usman Ali', product: 'Monitor 27" 4K', amount: 'PKR 65,000', status: 'completed' }
    ]
  },
  quarterly: {
    labels: ['Q1 2025','Q2 2025','Q3 2025','Q4 2025','Q1 2026','Q2 2026'],
    revenue: [590, 940, 1260, 1480, 1350, 1690],
    kpi: { revenue: 'PKR 7.3M', users: '5,412', conversion: '4.1%', aov: 'PKR 1,620' },
    kpiChange: { revenue: '+18.2%', users: '+14.7%', conversion: '+0.9%', aov: '+7.3%' },
    kpiClass: { revenue: 'positive', users: 'positive', conversion: 'positive', aov: 'positive' },
    transactions: [
      { date: 'Q2 2026', customer: 'Zain Traders', product: 'Bulk Server License', amount: 'PKR 620,000', status: 'completed' },
      { date: 'Q2 2026', customer: 'Paktech Ltd', product: 'Annual SaaS Plan', amount: 'PKR 385,000', status: 'completed' },
      { date: 'Q1 2026', customer: 'Karachi Solutions', product: 'Consulting Package', amount: 'PKR 210,000', status: 'processing' },
      { date: 'Q1 2026', customer: 'Lahore Retail Co.', product: 'POS System Bundle', amount: 'PKR 145,000', status: 'completed' },
      { date: 'Q4 2025', customer: 'Islamabad Bureau', product: 'Data Migration', amount: 'PKR 95,000', status: 'completed' }
    ]
  },
  yearly: {
    labels: ['2021','2022','2023','2024','2025','2026'],
    revenue: [1200, 1850, 2700, 3900, 5400, 7300],
    kpi: { revenue: 'PKR 22.4M', users: '18,640', conversion: '5.8%', aov: 'PKR 1,900' },
    kpiChange: { revenue: '+35.2%', users: '+41.0%', conversion: '+1.6%', aov: '+11.8%' },
    kpiClass: { revenue: 'positive', users: 'positive', conversion: 'positive', aov: 'positive' },
    transactions: [
      { date: '2026', customer: 'Enterprise A', product: 'Annual License Pack', amount: 'PKR 1.8M', status: 'completed' },
      { date: '2025', customer: 'Enterprise B', product: 'System Integration', amount: 'PKR 1.2M', status: 'completed' },
      { date: '2025', customer: 'Enterprise C', product: 'Training Bundle', amount: 'PKR 780,000', status: 'completed' },
      { date: '2024', customer: 'Govt. Dept X', product: 'Custom Dev Contract', amount: 'PKR 2.1M', status: 'completed' },
      { date: '2023', customer: 'NGO Project Y', product: 'Digital Infra Setup', amount: 'PKR 560,000', status: 'completed' }
    ]
  }
};

function updateKPIs(period) {
  const d = DASHBOARD_DATA[period];
  const fields = [
    ['kpi-revenue', 'revenue'],
    ['kpi-users', 'users'],
    ['kpi-conversion', 'conversion'],
    ['kpi-aov', 'aov']
  ];
  fields.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = d.kpi[key];
    // Update sibling change element
    const changeEl = el?.nextElementSibling;
    if (changeEl) {
      changeEl.textContent = d.kpiChange[key];
      changeEl.className = `kpi-change ${d.kpiClass[key]}`;
    }
  });
}

function initDashboard(period) {
  const p = period || (document.getElementById('dashboard-period')?.value) || 'monthly';
  updateKPIs(p);
  drawRevenueChart(p);
  drawCategoryChart();
  fillDataTable(p);
  dashboardInitialized = true;
}

function drawRevenueChart(period) {
  const canvas = document.getElementById('chart-revenue');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);
  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;

  const dataset = DASHBOARD_DATA[period || 'monthly'];
  const data = dataset.revenue;
  const labels = dataset.labels;
  const max = Math.max(...data) * 1.15;
  const padL = 50, padR = 20, padT = 20, padB = 40;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  // Grid lines
  ctx.strokeStyle = '#e0e0e0';
  ctx.lineWidth = 0.5;
  ctx.font = '11px Manrope, sans-serif';
  ctx.fillStyle = '#999';
  ctx.textAlign = 'right';
  for (let i = 0; i <= 4; i++) {
    const y = padT + (chartH / 4) * i;
    const val = Math.round(max - (max / 4) * i);
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(W - padR, y); ctx.stroke();
    ctx.fillText(val + 'K', padL - 8, y + 4);
  }

  // X labels
  ctx.textAlign = 'center';
  ctx.fillStyle = '#999';
  data.forEach((_, i) => {
    const x = padL + (chartW / (data.length - 1)) * i;
    ctx.fillText(labels[i], x, H - 12);
  });

  // Area fill
  ctx.beginPath();
  ctx.moveTo(padL, padT + chartH - (data[0] / max) * chartH);
  data.forEach((v, i) => {
    const x = padL + (chartW / (data.length - 1)) * i;
    const y = padT + chartH - (v / max) * chartH;
    ctx.lineTo(x, y);
  });
  ctx.lineTo(padL + chartW, padT + chartH);
  ctx.lineTo(padL, padT + chartH);
  ctx.closePath();
  const gradient = ctx.createLinearGradient(0, padT, 0, padT + chartH);
  gradient.addColorStop(0, 'rgba(212, 25, 32, 0.15)');
  gradient.addColorStop(1, 'rgba(212, 25, 32, 0.02)');
  ctx.fillStyle = gradient;
  ctx.fill();

  // Line
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = padL + (chartW / (data.length - 1)) * i;
    const y = padT + chartH - (v / max) * chartH;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#D41920';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Dots
  data.forEach((v, i) => {
    const x = padL + (chartW / (data.length - 1)) * i;
    const y = padT + chartH - (v / max) * chartH;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#D41920';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
  });
}

function drawCategoryChart() {
  const canvas = document.getElementById('chart-categories');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  ctx.scale(dpr, dpr);
  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;

  const data = [
    { label: 'Electronics', value: 35, color: '#D41920' },
    { label: 'Clothing', value: 25, color: '#1A1A1A' },
    { label: 'Food', value: 20, color: '#6B6B6B' },
    { label: 'Books', value: 12, color: '#A81118' },
    { label: 'Other', value: 8, color: '#D8D8D8' }
  ];
  const total = data.reduce((s, d) => s + d.value, 0);
  const cx = W / 2;
  const cy = H / 2 - 20;
  const r = Math.min(cx, cy) - 20;

  let startAngle = -Math.PI / 2;
  data.forEach(d => {
    const sliceAngle = (d.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    startAngle += sliceAngle;
  });

  // Center hole (donut)
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.55, 0, Math.PI * 2);
  ctx.fillStyle = '#F5F5F5';
  ctx.fill();

  // Legend
  ctx.font = '11px Manrope, sans-serif';
  ctx.textAlign = 'left';
  const legendY = H - 30;
  let legendX = 10;
  data.forEach(d => {
    ctx.fillStyle = d.color;
    ctx.fillRect(legendX, legendY, 10, 10);
    ctx.fillStyle = '#666';
    ctx.fillText(`${d.label} (${d.value}%)`, legendX + 14, legendY + 9);
    legendX += ctx.measureText(`${d.label} (${d.value}%)`).width + 24;
  });
}

function fillDataTable(period) {
  const tbody = document.getElementById('data-table-body');
  if (!tbody) return;
  const transactions = DASHBOARD_DATA[period || 'monthly'].transactions;
  tbody.innerHTML = transactions.map(t => `
    <tr>
      <td>${t.date}</td>
      <td>${t.customer}</td>
      <td>${t.product}</td>
      <td>${t.amount}</td>
      <td><span class="status-badge ${t.status}">${t.status.charAt(0).toUpperCase() + t.status.slice(1)}</span></td>
    </tr>
  `).join('');
}

// 11. STAR RATING

// Dashboard period change handler — updates all values live
const dashboardPeriod = document.getElementById('dashboard-period');
if (dashboardPeriod) {
  dashboardPeriod.addEventListener('change', () => {
    const period = dashboardPeriod.value;
    updateKPIs(period);
    drawRevenueChart(period);
    fillDataTable(period);
  });
}
const starRating = document.getElementById('star-rating');
let selectedRating = 0;
if (starRating) {
  const stars = starRating.querySelectorAll('.star');
  stars.forEach(star => {
    star.addEventListener('mouseenter', () => {
      const val = parseInt(star.getAttribute('data-value'));
      stars.forEach(s => {
        s.classList.toggle('active', parseInt(s.getAttribute('data-value')) <= val);
      });
    });
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.getAttribute('data-value'));
      stars.forEach(s => {
        s.classList.toggle('active', parseInt(s.getAttribute('data-value')) <= selectedRating);
      });
    });
  });
  starRating.addEventListener('mouseleave', () => {
    stars.forEach(s => {
      s.classList.toggle('active', parseInt(s.getAttribute('data-value')) <= selectedRating);
    });
  });
}

// 12. COMMENT FORM (UI only — no backend)
const commentForm = document.getElementById('comment-form');
if (commentForm) {
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = commentForm.commentName.value.trim();
    if (!name) { alert('Please enter your name.'); return; }
    alert(`Thank you, ${name}! Your comment has been submitted for review.`);
    commentForm.reset();
    selectedRating = 0;
    if (starRating) starRating.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
  });
}

// 13. ENROLLMENT FORM — VALIDATION + WHATSAPP
const enrollForm = document.getElementById('enrollment-form');
const WHATSAPP_NUMBER = '923160079650';

function showError(fieldId, message) {
  const errorEl = document.getElementById(`err-${fieldId}`);
  if (!errorEl) return;
  const row = errorEl.closest('.form-row');
  errorEl.textContent = message;
  if (row) row.classList.toggle('has-error', Boolean(message));
}

function validateEnrollment(data) {
  let valid = true;

  if (!data.fullName.trim()) {
    showError('fullName', 'Please enter your full name.');
    valid = false;
  } else showError('fullName', '');

  const phonePattern = /^[0-9+\\s-]{7,20}$/;
  if (!phonePattern.test(data.whatsapp.trim())) {
    showError('whatsapp', 'Please enter a valid WhatsApp number.');
    valid = false;
  } else showError('whatsapp', '');

  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailPattern.test(data.email.trim())) {
    showError('email', 'Please enter a valid email address.');
    valid = false;
  } else showError('email', '');

  if (!data.program) {
    showError('program', 'Please select a program pathway.');
    valid = false;
  } else showError('program', '');

  return valid;
}

if (enrollForm) {
  enrollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      fullName: enrollForm.fullName.value,
      whatsapp: enrollForm.whatsapp.value,
      email: enrollForm.email.value,
      program: enrollForm.program.value,
      background: enrollForm.background.value,
      message: enrollForm.message.value,
    };
    if (!validateEnrollment(data)) return;

    const text =
      `New Enrollment Request — DATIVOPK\n` +
      `Name: ${data.fullName}\n` +
      `WhatsApp: ${data.whatsapp}\n` +
      `Email: ${data.email}\n` +
      `Program: ${data.program}\n` +
      `Technical Background: ${data.background}\n` +
      `Message: ${data.message || 'N/A'}` +
      (enrollForm.feeSlip?.files[0] ? `\nFee Slip: ${enrollForm.feeSlip.files[0].name} (please send separately on WhatsApp)` : '');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
}

// Fee slip file input — update label with filename
const feeSlipInput = document.getElementById('feeSlip');
const fileLabelText = document.getElementById('file-label-text');
if (feeSlipInput && fileLabelText) {
  feeSlipInput.addEventListener('change', () => {
    const file = feeSlipInput.files[0];
    if (file) {
      fileLabelText.textContent = `\u2713 ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
    } else {
      fileLabelText.textContent = 'Choose file or drag here';
    }
  });
}
