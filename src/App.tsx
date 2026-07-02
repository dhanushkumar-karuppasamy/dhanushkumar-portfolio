import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Circle, Link2 } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────
type Tab = 'feed' | 'about' | 'projects' | 'contact';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

// ─── 3D Futuristic Scene in Banner ───────────────────────────────────────────
function HeroScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#63b3ed" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Main SVG Scene */}
      <svg 
        viewBox="0 0 900 220" 
        className="w-full h-full floating-scene" 
        style={{ maxWidth: 900 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Neon gradients */}
          <radialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e040fb" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#e040fb" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e040fb" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── CONNECTION PIPELINES (Pulsing Data Flow) ── */}
        <path d="M 260 110 L 450 70" fill="none" stroke="rgba(0,240,255,0.2)" strokeWidth="1.5" />
        <path d="M 260 110 L 450 70" fill="none" stroke="#00f0ff" strokeWidth="1.5" className="pipeline-line" />

        <path d="M 260 110 L 480 150" fill="none" stroke="rgba(224,64,251,0.2)" strokeWidth="1.5" />
        <path d="M 260 110 L 480 150" fill="none" stroke="#e040fb" strokeWidth="1.5" className="pipeline-line" style={{ animationDirection: 'reverse' }} />

        <path d="M 260 60 L 580 40" fill="none" stroke="rgba(0,240,255,0.15)" strokeWidth="1" />
        <path d="M 260 160 L 560 180" fill="none" stroke="rgba(224,64,251,0.15)" strokeWidth="1" />

        {/* ── LEFT SIDE: FUTURISTIC DATABASE SERVER RACK (Isometric 3D) ── */}
        <g transform="translate(140, 40)">
          {/* Main Frame Outer shadow */}
          <polygon points="60,0 120,30 120,110 60,140 0,110 0,30" fill="rgba(13,17,23,0.85)" stroke="rgba(224,64,251,0.3)" strokeWidth="1.5" />
          
          {/* Top Panel (Isometric Top) */}
          <polygon points="60,0 120,30 60,60 0,30" fill="#141923" stroke="rgba(224,64,251,0.4)" strokeWidth="1" />
          <polygon points="60,10 100,30 60,50 20,30" fill="none" stroke="#00f0ff" strokeWidth="0.5" opacity="0.7" />

          {/* Right Side Wall (Isometric Side) */}
          <polygon points="120,30 120,110 60,140 60,60" fill="#0d1117" stroke="rgba(224,64,251,0.2)" strokeWidth="1" />
          {/* Horizontal side ventilation lines */}
          <line x1="80" y1="65" x2="105" y2="77" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="80" y1="75" x2="105" y2="87" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="80" y1="85" x2="105" y2="97" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="80" y1="95" x2="105" y2="107" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

          {/* Front Control Panel (Isometric Front) */}
          <polygon points="0,30 60,60 60,140 0,110" fill="#181e2b" stroke="rgba(224,64,251,0.4)" strokeWidth="1" />

          {/* Server Unit slots */}
          {/* Slot 1 */}
          <polygon points="8,40 52,62 52,78 8,56" fill="#0d1117" stroke="rgba(0,240,255,0.3)" strokeWidth="1" />
          {/* LEDs on Slot 1 */}
          <circle cx="20" cy="50" r="2.5" className="server-led" />
          <circle cx="28" cy="54" r="2" className="server-led-alt" />
          <line x1="36" y1="56" x2="48" y2="62" stroke="#00f0ff" strokeWidth="1.5" opacity="0.8" />

          {/* Slot 2 */}
          <polygon points="8,66 52,88 52,104 8,82" fill="#0d1117" stroke="rgba(224,64,251,0.3)" strokeWidth="1" />
          {/* LEDs on Slot 2 */}
          <circle cx="20" cy="76" r="2.5" className="server-led-alt" />
          <circle cx="28" cy="80" r="2" className="server-led" />
          <line x1="36" y1="82" x2="48" y2="88" stroke="#e040fb" strokeWidth="1.5" opacity="0.8" />

          {/* Slot 3 */}
          <polygon points="8,92 52,114 52,130 8,108" fill="#0d1117" stroke="rgba(0,240,255,0.3)" strokeWidth="1" />
          {/* LEDs on Slot 3 */}
          <circle cx="20" cy="102" r="2.5" className="server-led" />
          <circle cx="28" cy="106" r="2" className="server-led" />
          <line x1="36" y1="108" x2="48" y2="114" stroke="#00f0ff" strokeWidth="1.5" opacity="0.8" />
        </g>

        {/* ── RIGHT SIDE: NEURAL NETWORK GRAPH (AI) ── */}
        <g>
          {/* Graph lines (Static connections) */}
          <line x1="450" y1="70" x2="580" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="450" y1="70" x2="480" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="580" y1="40" x2="680" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="480" y1="150" x2="560" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="480" y1="150" x2="680" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="560" y1="180" x2="720" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="680" y1="90" x2="720" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="680" y1="90" x2="800" y2="60" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="720" y1="150" x2="800" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="800" y1="60" x2="800" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

          {/* Node 1 */}
          <circle cx="450" cy="70" r="15" fill="url(#cyanGlow)" />
          <circle cx="450" cy="70" r="6" fill="#00f0ff" className="neural-node" style={{ animationDelay: '0s' }} />

          {/* Node 2 */}
          <circle cx="580" cy="40" r="15" fill="url(#purpleGlow)" />
          <circle cx="580" cy="40" r="5" fill="#e040fb" className="neural-node" style={{ animationDelay: '0.8s' }} />

          {/* Node 3 */}
          <circle cx="480" cy="150" r="18" fill="url(#purpleGlow)" />
          <circle cx="480" cy="150" r="7" fill="#e040fb" className="neural-node" style={{ animationDelay: '0.4s' }} />

          {/* Node 4 */}
          <circle cx="560" cy="180" r="15" fill="url(#cyanGlow)" />
          <circle cx="560" cy="180" r="5" fill="#00f0ff" className="neural-node" style={{ animationDelay: '1.2s' }} />

          {/* Node 5 */}
          <circle cx="680" cy="90" r="22" fill="url(#cyanGlow)" />
          <circle cx="680" cy="90" r="9" fill="#00f0ff" className="neural-node" style={{ animationDelay: '1.6s' }} />

          {/* Node 6 */}
          <circle cx="720" cy="150" r="15" fill="url(#purpleGlow)" />
          <circle cx="720" cy="150" r="6" fill="#e040fb" className="neural-node" style={{ animationDelay: '2s' }} />

          {/* Node 7 (Output Node) */}
          <circle cx="800" cy="60" r="15" fill="url(#cyanGlow)" />
          <circle cx="800" cy="60" r="5" fill="#00f0ff" className="neural-node" style={{ animationDelay: '2.4s' }} />

          {/* Node 8 (Output Node 2) */}
          <circle cx="800" cy="140" r="15" fill="url(#purpleGlow)" />
          <circle cx="800" cy="140" r="5" fill="#e040fb" className="neural-node" style={{ animationDelay: '2.8s' }} />
        </g>

        {/* ── BACKGROUND DETAILS (Floating code bits, binaries, brackets) ── */}
        <text x="80" y="50" fill="#e040fb" opacity="0.25" fontSize="12" fontFamily="Fira Code, monospace">{"{ AI }"}</text>
        <text x="320" y="180" fill="#00f0ff" opacity="0.25" fontSize="12" fontFamily="Fira Code, monospace">{"[ Data Eng ]"}</text>
        <text x="500" y="110" fill="#e040fb" opacity="0.15" fontSize="10" fontFamily="Fira Code, monospace">{"101010"}</text>
        <text x="730" y="50" fill="#00f0ff" opacity="0.15" fontSize="10" fontFamily="Fira Code, monospace">{"011001"}</text>
        <text x="50" y="180" fill="#63b3ed" opacity="0.2" fontSize="11" fontFamily="Fira Code, monospace">{"import tensorflow as tf"}</text>
      </svg>
    </div>
  );
}

// ─── Typewriter Hook ──────────────────────────────────────────────────────────
function useTypewriter(text: string, speed = 45) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(timer); setDone(true); }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayed, done };
}

// ─── Intersection Observer for fade-in ───────────────────────────────────────
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('fade-in-up');
        el.style.opacity = '1';
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    el.style.opacity = '0';
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ─── Subscribe / Contact form handler ────────────────────────────────────────
// ─── Email Utilities ──────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// ─── Feed Tab ─────────────────────────────────────────────────────────────────
const feedItems = [
  { 
    icon: '🥗', 
    title: 'NutriSense India — Malnutrition Predictor', 
    desc: 'Built an XGBoost-based ML model trained on NFHS-5 data to predict child malnutrition risk (High / Medium / Low), with SHAP explainability and DiCE counterfactual recommendations, deployed as a bilingual Tamil/English dashboard for ASHA workers.', 
    tags: ['XGBoost', 'Machine Learning', 'SHAP', 'DiCE', 'Python', 'ASHA Dashboard'],
    link: 'https://github.com/dhanushkumar-karuppasamy/NutriSense-India'
  },
  { 
    icon: '🏆', 
    title: '1st Place — DevHack 2026', 
    desc: '160+ teams · Built MASTER, a multi-agent trading simulation', 
    tags: ['Hackathon', 'Python', 'Multi-Agent', 'Flask'],
    link: 'https://github.com/dhanushkumar-karuppasamy/MASTER.git'
  },
  { 
    icon: '🧩', 
    title: 'Solved 200+ LeetCode Problems', 
    desc: 'Strong focus on Data Structures, Algorithms, and SQL across all major topics', 
    tags: ['DSA', 'Algorithms', 'SQL', 'Arrays', 'Trees'],
    link: 'https://github.com/dhanushkumar-karuppasamy'
  },
];

function FeedTab() {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="tab-content space-y-4">
      {feedItems.map((item, i) => (
        <a 
          key={i} 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="feed-card rounded-2xl p-5 border" 
          style={{
            background: 'rgba(255,255,255,0.04)',
            borderColor: 'rgba(255,255,255,0.08)',
            textDecoration: 'none'
          }}
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-base mb-1">{item.title}</h3>
              <p className="text-sm mb-3" style={{ color: '#8b949e' }}>{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full font-mono" style={{
                    background: 'rgba(224,64,251,0.1)',
                    color: '#e040fb',
                    border: '1px solid rgba(224,64,251,0.2)',
                    fontFamily: 'Fira Code, monospace',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

// ─── About Tab ────────────────────────────────────────────────────────────────
function AboutTab() {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="tab-content space-y-6">
      <div className="rounded-2xl p-6 border" style={{
        background: 'rgba(255,255,255,0.04)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}>
        <h2 className="text-xl font-bold text-white mb-4">About Me</h2>
        <div className="space-y-4 text-sm" style={{ color: '#8b949e', lineHeight: 1.7 }}>
          <p>
            <span className="text-white font-medium">Dhanush Kumar K</span> — Final year B.Tech student in Artificial Intelligence &amp; Data Science at SKCT Coimbatore.
          </p>
          <div>
            <p className="text-white font-medium mb-2">Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {['Data Analytics', 'ETL Pipelines', 'Business Intelligence', 'Full-Stack Development'].map(f => (
                <span key={f} className="text-xs px-3 py-1 rounded-full" style={{
                  background: 'rgba(99,179,237,0.1)',
                  color: '#63b3ed',
                  border: '1px solid rgba(99,179,237,0.2)',
                }}>{f}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-white font-medium mb-1">Problem Solving</p>
            <p>200+ LeetCode problems solved across Arrays, Strings, Trees, Graphs, and Dynamic Programming.</p>
          </div>
          <div>
            <p className="text-white font-medium mb-1">Approach</p>
            <p className="italic" style={{ color: '#a0aec0' }}>
              "I like building things end-to-end — from messy raw data to a working, deployed system. I learn best by shipping."
            </p>
          </div>
          <div>
            <p className="text-white font-medium mb-1">Currently Exploring</p>
            <p>Multi-agent AI systems, applied machine learning, and scalable backend design.</p>
          </div>
          <div>
            <p className="text-white font-medium mb-1">Location</p>
            <p>Coimbatore, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Projects Tab ─────────────────────────────────────────────────────────────
const projects = [
  {
    name: 'NutriSense India',
    subtitle: 'ASHA Malnutrition Risk Dashboard',
    problem: 'ASHA workers needing localized, explainable, and bilingual tools to assess and mitigate child malnutrition risks using NFHS-5 data.',
    result: 'XGBoost model predicting risk (High/Med/Low) with SHAP explanations and DiCE counterfactuals in Tamil & English.',
    tags: ['Python', 'XGBoost', 'SHAP', 'DiCE', 'Streamlit', 'NFHS-5'],
    github: 'https://github.com/dhanushkumar-karuppasamy/NutriSense-India',
  },
  {
    name: 'MASTER',
    subtitle: 'Multi-Agent Stock Market Simulation',
    problem: '6 autonomous trading agents operating under real compliance rules in a simulated market.',
    result: '1st place at DevHack 2026 among 160+ teams — compliance-enforced multi-agent architecture.',
    tags: ['Python', 'Flask', 'React', 'Ollama', 'SQLite'],
    github: 'https://github.com/dhanushkumar-karuppasamy/MASTER.git',
  },
  {
    name: 'PODMASTER',
    subtitle: 'Podcast Workflow Automation',
    problem: 'Repetitive podcast production steps consuming too much manual effort.',
    result: 'A focused build tackling a real workflow problem end-to-end with AI automation.',
    tags: ['Python', 'AI', 'Automation'],
    github: 'https://github.com/dhanushkumar-karuppasamy/PodMaster.git',
  },
  {
    name: 'Worldcup Predictor',
    subtitle: 'ML Tournament Outcome Forecasting',
    problem: 'Predicting football World Cup results using historical data and statistical simulation.',
    result: 'Full ML pipeline forecasting tournament outcomes through Monte Carlo simulation.',
    tags: ['Python', 'Machine Learning', 'Monte Carlo Simulation'],
    github: 'https://github.com/dhanushkumar-karuppasamy/worldcup2026_predictor.git',
  },
  {
    name: 'NameFlux',
    subtitle: 'Low-Latency Username Lookup',
    problem: 'Username existence checks across 1M+ records at microsecond speed.',
    result: '5–15μs average lookup using Bloom Filters and LRU Cache — tested at scale.',
    tags: ['C++', 'Python', 'Streamlit', 'Bloom Filter', 'LRU Cache'],
    github: 'https://github.com/dhanushkumar-karuppasamy/NameFlux.git',
  },
  {
    name: 'CookieStore',
    subtitle: 'Retail Management System',
    problem: 'Multi-role retail operations requiring secure access control and order lifecycle tracking.',
    result: 'Full-stack retail platform with 8-role JWT access control and complete order management.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'JWT'],
    github: 'https://github.com/dhanushkumar-karuppasamy/CookieStore_Management_System.git',
  },
  {
    name: 'CUSTOMER RETENTION ANALYSIS',
    subtitle: 'Data-Driven Attrition Modeling',
    problem: 'Identifying hidden patterns and key drivers behind customer churn to prevent revenue loss.',
    result: 'An end-to-end predictive model and analytics dashboard delivering actionable retention strategies.',
    tags: ['Python', 'Machine Learning', 'Data Analysis', 'Predictive Modeling'],
    github: 'https://github.com/dhanushkumar-karuppasamy/Customer-Retention-Analysis.git'
  },
  {
    name: 'FIRESTICK MOVIE RECOMMENDER',
    subtitle: 'AI-Driven Personalized & Social OTT Experience',
    problem: 'Generic, time-agnostic streaming recommendations and a fragmented OTT experience leading to user decision fatigue.',
    result: 'A mood-aware, behavior-driven recommendation engine integrated with real-time social watch features to slash decision time.',
    tags: ['JavaScript', 'Firebase', 'HTML & CSS', 'Sentiment Analysis'],
    github: 'https://github.com/dhanushkumar-karuppasamy/Firestick-movie-recommender.git'
  },
  {
    name: 'AUTOMATED BANKING ANALYTICS',
    subtitle: 'Production-Style Banking ETL & Reporting System',
    problem: 'Manual effort, lack of data integrity controls, and fragmented processing in transactional banking data pipelines.',
    result: 'An end-to-end automated pipeline running financial reconciliation checks and feeding a reusable analytics dashboard.',
    tags: ['Python', 'MySQL', 'Power BI', 'ETL', 'Automation'],
    github: 'https://github.com/dhanushkumar-karuppasamy/Automated_Banking_Analytics.git'
  },
  {
    name: 'TITANIC SURVIVAL PREDICTION',
    subtitle: 'End-to-End Machine Learning Pipeline',
    problem: 'Predicting passenger survival outcomes from unstructured tabular demographics without data leakage.',
    result: 'A clean, modular Gradient Boosting pipeline utilizing advanced feature engineering to achieve ~84% cross-validation accuracy.',
    tags: ['Python', 'Machine Learning', 'scikit-learn', 'Feature Engineering'],
    github: 'https://github.com/dhanushkumar-karuppasamy/titanic_ml.git'
  },
  {
    name: 'NEET-PG TRACKER',
    subtitle: 'Exam Preparation & MCQ Analytics Platform',
    problem: 'Fragmented study resources, lack of actionable preparation metrics, and inconsistent revision scheduling for medical aspirants.',
    result: 'A comprehensive web application combining spaced-repetition logic, customizable Pomodoro timers, and structured MCQ analytics to streamline exam preparation.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Chart.js'],
    github: 'https://github.com/dhanushkumar-karuppasamy/neet-pg-tracker.git'
  },
  {
    name: 'DATA CHEF',
    subtitle: 'End-to-End Data Preprocessing Pipeline',
    problem: 'Handling, cleaning, and transforming messy, raw real-world datasets into analysis-ready formats without losing critical data integrity.',
    result: 'A structured workflow utilizing automated pipelines to execute missing value imputation, duplicate removal, feature encoding, and interactive EDA visualization.',
    tags: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Data Preprocessing'],
    github: 'https://github.com/dhanushkumar-karuppasamy/data-chef.git'
  },
  {
    name: 'COOKIE CLASSIFIER',
    subtitle: 'Predictive Recipe Flavor Modeling',
    problem: 'Comparing different supervised learning techniques to accurately categorize flavor profiles from ingredient proportions.',
    result: 'An end-to-end classification workflow using Random Forest to achieve 98% prediction accuracy alongside automated feature importance analytics.',
    tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Feature Engineering'],
    github: 'https://github.com/dhanushkumar-karuppasamy/CookieClassifier.git'
  },
  {
    name: 'VOICE RECOGNITION ASSISTANT',
    subtitle: 'Modular AI-Powered Voice Companion',
    problem: 'Fragmented voice control pipelines and lack of contextual memory in standard lightweight voice assistants.',
    result: 'A clean, modular assistant named Jersey that utilizes local wake-word activation, speech-to-text, and short-term conversation memory with Gemini AI.',
    tags: ['Python', 'AI', 'Voice Recognition', 'Speech-to-Text'],
    github: 'https://github.com/dhanushkumar-karuppasamy/voice-recognition-project.git'
  },
  {
    name: 'DEPLOY SPRINGAPP',
    subtitle: 'Personal Finance Tracker REST API',
    problem: 'Managing personal finance tracking securely while establishing a clean, structured CRUD architecture.',
    result: 'A production-ready REST API integrated with Spring Boot, customized MySQL config, JPA/Hibernate, and Swagger API docs.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'JPA'],
    github: 'https://github.com/dhanushkumar-karuppasamy/Deploy-Springapp.git'
  }
];

function getProjectCategories(p: typeof projects[0]): string[] {
  const cats = ['All'];
  const tagsLower = p.tags.map(t => t.toLowerCase());

  // Machine Learning check
  if (
    tagsLower.some(t => 
      t.includes('machine learning') || 
      t.includes('xgboost') || 
      t.includes('shap') || 
      t.includes('dice') || 
      t.includes('ollama') || 
      t.includes('ai') || 
      t.includes('automation') || 
      t.includes('monte carlo') ||
      t.includes('sentiment') ||
      t.includes('scikit') ||
      t.includes('random forest')
    )
  ) {
    cats.push('Machine Learning');
  }

  // Full-Stack check
  if (
    tagsLower.some(t => 
      t.includes('react') || 
      t.includes('spring boot') || 
      t.includes('flask') || 
      t.includes('mysql') || 
      t.includes('jwt') ||
      t.includes('firebase') ||
      t.includes('javascript') ||
      t.includes('html') ||
      t.includes('css') ||
      t.includes('java') ||
      t.includes('api')
    )
  ) {
    cats.push('Full-Stack');
  }

  // Data Engineering check
  if (
    tagsLower.some(t => 
      t.includes('python') || 
      t.includes('sqlite') || 
      t.includes('mysql') || 
      t.includes('bloom filter') || 
      t.includes('lru cache') || 
      t.includes('nfhs-5') ||
      t.includes('streamlit') ||
      t.includes('etl') ||
      t.includes('pandas') ||
      t.includes('numpy') ||
      t.includes('power bi') ||
      t.includes('preprocessing')
    )
  ) {
    cats.push('Data Engineering');
  }

  return cats;
}

function ProjectsTab() {
  const ref = useFadeIn();
  const [filter, setFilter] = useState<'All' | 'Machine Learning' | 'Full-Stack' | 'Data Engineering'>('All');

  const filteredProjects = projects.filter(p => {
    if (filter === 'All') return true;
    return getProjectCategories(p).includes(filter);
  });

  const categories = ['All', 'Machine Learning', 'Full-Stack', 'Data Engineering'] as const;

  return (
    <div ref={ref} className="tab-content">
      {/* Filter Bar */}
      <div 
        className="flex gap-2 overflow-x-auto pb-3 mb-6 select-none" 
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {categories.map(cat => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300"
              style={{
                background: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.02)',
                color: isActive ? '#fff' : '#8b949e',
                border: isActive ? '1px solid var(--accent)' : '1px solid rgba(255, 255, 255, 0.15)',
                cursor: 'pointer',
                boxShadow: isActive ? '0 0 15px rgba(224, 64, 251, 0.3)' : 'none',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = 'rgba(224, 64, 251, 0.05)';
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.color = '#8b949e';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((p) => (
          <div 
            key={p.name} 
            className="project-card rounded-2xl p-5 border flex flex-col" 
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderColor: 'rgba(255,255,255,0.08)',
              animation: 'fadeInUp 0.4s ease forwards'
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-bold text-white text-base">{p.name}</h3>
                <p className="text-xs mt-0.5" style={{ color: '#e040fb', fontFamily: 'Fira Code, monospace' }}>{p.subtitle}</p>
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 ml-2 p-2 rounded-lg transition-colors"
                style={{ color: '#8b949e' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#e040fb')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
                aria-label={`GitHub — ${p.name}`}
              >
                <Github size={18} />
              </a>
            </div>
            <p className="text-xs mb-1" style={{ color: '#8b949e' }}><span className="text-white font-medium">Problem:</span> {p.problem}</p>
            <p className="text-xs mb-3" style={{ color: '#8b949e' }}><span className="text-white font-medium">Result:</span> {p.result}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {p.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: '#a0aec0',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontFamily: 'Fira Code, monospace',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Contact Tab ──────────────────────────────────────────────────────────────
// ─── Contact Tab ──────────────────────────────────────────────────────────────
interface ContactTabProps {
  onToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

function ContactTab({ onToast }: ContactTabProps) {
  const ref = useFadeIn();
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam protection (Attack Prevention)
    if (honeypot) {
      onToast('Message sent successfully!', 'success');
      setEmail('');
      setHoneypot('');
      return;
    }

    // Length check (Attack Prevention)
    if (email.length > 100) {
      onToast('Input is too long.', 'error');
      return;
    }

    // RFC 5322 Email regex check
    if (!email || !EMAIL_REGEX.test(email)) {
      onToast('Please enter a valid email address.', 'error');
      return;
    }

    // Rate limiting protection
    const lastSubmit = localStorage.getItem('last_contact_time');
    if (lastSubmit) {
      const elapsed = Date.now() - parseInt(lastSubmit, 10);
      if (elapsed < 15000) {
        onToast('Too many requests. Please wait 15 seconds.', 'error');
        return;
      }
    }
    localStorage.setItem('last_contact_time', Date.now().toString());

    // Clipboard copy and Gmail launch
    const myEmail = 'dhanushkumark.tech@gmail.com';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${encodeURIComponent('Portfolio Contact')}&body=${encodeURIComponent(`From: ${email}`)}`;
    
    navigator.clipboard.writeText(myEmail)
      .then(() => {
        onToast("Dhanush's email copied to clipboard! Opening Gmail...", 'success');
        window.open(gmailUrl, '_blank');
      })
      .catch(() => {
        onToast("Opening Gmail...", 'info');
        window.open(gmailUrl, '_blank');
      });

    setEmail('');
  };

  return (
    <div ref={ref} className="tab-content">
      <div className="rounded-2xl p-8 border text-center" style={{
        background: 'rgba(255,255,255,0.04)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}>
        <h2 className="text-2xl font-bold text-white mb-2">Let's build something together</h2>
        <p className="text-sm mb-6" style={{ color: '#8b949e' }}>
          Open to data analytics, data engineering, or software development roles.<br />
          Always happy to collaborate on something interesting.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-md mx-auto">
          {/* Honeypot field hidden from real users */}
          <input
            type="text"
            name="website_honeypot"
            className="hidden-honeypot"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <input
            type="email"
            className="input-dark flex-1"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            maxLength={100}
            required
          />
          <button type="submit" className="btn-accent whitespace-nowrap">Connect</button>
        </form>
        <div className="flex items-center justify-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/dhanushkumar-karuppasamy" target="_blank" rel="noopener noreferrer"
            className="transition-colors" style={{ color: '#8b949e' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#e040fb')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
            aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="https://github.com/dhanushkumar-karuppasamy" target="_blank" rel="noopener noreferrer"
            className="transition-colors" style={{ color: '#8b949e' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#e040fb')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
            aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="mailto:dhanushkumark.tech@gmail.com"
            className="transition-colors" style={{ color: '#8b949e' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#e040fb')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
            aria-label="Email">
            <Mail size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('feed');
  const { displayed, done } = useTypewriter('Turns raw data into decisions. Builds systems that scale.');
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subHoneypot, setSubHoneypot] = useState('');
  const [subLoading, setSubLoading] = useState(false);
  const [subSuccess, setSubSuccess] = useState(false);
  const [subError, setSubError] = useState('');
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubError('');

    // Honeypot spam defense (Attack Prevention)
    if (subHoneypot) {
      setSubSuccess(true);
      setSubscribeEmail('');
      setSubHoneypot('');
      return;
    }

    // Input length limit (Attack Prevention)
    if (subscribeEmail.length > 100) {
      setSubError('Input is too long.');
      addToast('Input is too long.', 'error');
      return;
    }

    // RFC 5322 validation
    if (!subscribeEmail || !EMAIL_REGEX.test(subscribeEmail)) {
      setSubError('Please enter a valid email address.');
      addToast('Please enter a valid email address.', 'error');
      return;
    }

    // Rate Limiting protection
    const lastSub = localStorage.getItem('last_subscribe_time');
    if (lastSub) {
      const elapsed = Date.now() - parseInt(lastSub, 10);
      if (elapsed < 15000) {
        setSubError('Too many requests. Please wait 15 seconds.');
        addToast('Too many requests. Please wait 15 seconds.', 'error');
        return;
      }
    }
    localStorage.setItem('last_subscribe_time', Date.now().toString());

    // Show loading state
    setSubLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Copy & redirect action
      const myEmail = 'dhanushkumark.tech@gmail.com';
      navigator.clipboard.writeText(myEmail)
        .then(() => {
          addToast("Dhanush's email copied to clipboard! Opening mail client...", 'success');
          window.location.href = `mailto:${myEmail}?subject=Subscribe&body=Please add me to your updates: ${encodeURIComponent(subscribeEmail)}`;
        })
        .catch(() => {
          addToast("Opening mail client...", 'info');
          window.location.href = `mailto:${myEmail}?subject=Subscribe&body=Please add me to your updates: ${encodeURIComponent(subscribeEmail)}`;
        });

      setSubLoading(false);
      setSubSuccess(true);
      setSubscribeEmail('');
    }, 1500);
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: 'feed', label: 'Feed' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <main style={{ background: '#0d1117', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px 80px' }}>

        {/* ── Hero Banner + Avatar wrapper ── */}
        <div style={{ position: 'relative', marginTop: 24 }}>
          {/* Banner */}
          <div className="hero-banner rounded-3xl overflow-hidden relative">
            <HeroScene />
          </div>

          {/* Avatar — sits half-outside the bottom of the banner */}
          <div style={{ position: 'absolute', bottom: 'var(--avatar-bottom)', left: 16 }}>
            <div className="avatar-glow rounded-full overflow-hidden" style={{
              width: 'var(--avatar-size)', height: 'var(--avatar-size)',
              border: '4px solid #0d1117',
              background: 'linear-gradient(135deg, #1a2a4a 0%, #0d2137 50%, #1a1a2e 100%)',
              flexShrink: 0,
              transition: 'width 0.2s ease, height 0.2s ease',
            }}>
              <img
                src="/dk_suit.jpeg"
                alt="Dhanush Kumar K"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={e => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  (e.currentTarget.parentElement as HTMLElement).style.display = 'flex';
                  (e.currentTarget.parentElement as HTMLElement).style.alignItems = 'center';
                  (e.currentTarget.parentElement as HTMLElement).style.justifyContent = 'center';
                  const span = document.createElement('span');
                  span.style.fontSize = '42px';
                  span.textContent = '👨‍💻';
                  e.currentTarget.parentElement?.appendChild(span);
                }}
              />
            </div>
          </div>

          {/* Action buttons — aligned to banner bottom-right */}
          <div style={{ position: 'absolute', bottom: 'var(--connect-bottom)', right: 0, display: 'flex', gap: '12px' }}>
            <a
              href="https://www.linkedin.com/in/dhanushkumar-karuppasamy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              Connect
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              View Resume
            </a>
          </div>
        </div>

        {/* ── Name + tagline ── */}
        <div style={{ paddingTop: 'var(--name-pt)', paddingLeft: 4, transition: 'padding-top 0.2s ease' }}>
          <h1 className="font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 6 }}>
            Dhanush Kumar K <span style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>⚡</span>
          </h1>
          <p className="font-medium" style={{ color: '#e2e8f0', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: 6, minHeight: '1.5em' }}>
            {displayed}{!done && <span className="typewriter-cursor" />}
          </p>
          <p className="text-sm" style={{ color: '#8b949e', marginBottom: 14 }}>
            Final Year B.Tech AI &amp; DS&nbsp;·&nbsp;Data Analytics&nbsp;·&nbsp;Data Engineering&nbsp;·&nbsp;Software Development
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm" style={{ color: '#8b949e' }}>
            <span className="flex items-center gap-1.5">
              <Circle size={8} fill="#4ade80" style={{ color: '#4ade80', flexShrink: 0 }} />
              Open to opportunities
            </span>
            <a
              href="https://www.linkedin.com/in/dhanushkumar-karuppasamy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors"
              style={{ color: '#8b949e' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e040fb')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
            >
              <Link2 size={13} /> Links
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> Coimbatore, India
            </span>
            <span className="flex items-center gap-1.5" style={{ color: '#6b7280' }}>
              <ExternalLink size={12} /> Available 2025
            </span>
          </div>
        </div>

        {/* ── Subscribe card ── */}
        <div className="rounded-2xl p-6 border mt-8" style={{
          background: 'rgba(255,255,255,0.04)',
          borderColor: 'rgba(255,255,255,0.08)',
        }}>
          <h3 className="font-semibold text-white mb-1" style={{ fontSize: '1rem' }}>
            Keep up with my latest builds and breakthroughs
          </h3>
          <p className="text-xs mb-4" style={{ color: '#8b949e' }}>No spam. Just real progress updates.</p>
          
          {subSuccess ? (
            <div className="py-2 text-sm font-semibold" style={{ color: '#e040fb', animation: 'fadeInUp 0.3s ease' }}>
              ✨ Thanks for subscribing! You're on the list.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 relative">
              {/* Honeypot field */}
              <input
                type="text"
                name="website_honeypot"
                className="hidden-honeypot"
                value={subHoneypot}
                onChange={e => setSubHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="flex-1 flex flex-col gap-1.5">
                <input
                  type="email"
                  className="input-dark w-full"
                  placeholder="Email Address"
                  value={subscribeEmail}
                  onChange={e => {
                    setSubscribeEmail(e.target.value);
                    if (subError) setSubError('');
                  }}
                  maxLength={100}
                  disabled={subLoading}
                  required
                />
                {subError && (
                  <span className="text-xs px-2" style={{ color: '#fc8181', animation: 'fadeInUp 0.2s ease' }}>
                    {subError}
                  </span>
                )}
              </div>
              <button type="submit" className="btn-accent" style={{ height: '42px', minWidth: '120px' }} disabled={subLoading}>
                {subLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>

        {/* ── Tab Navigation ── */}
        <div className="flex overflow-x-auto mt-8 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)', scrollbarWidth: 'none' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-5 py-3 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0"
              style={{
                color: activeTab === tab.id ? '#ffffff' : '#8b949e',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full" style={{ background: '#e040fb' }} />
              )}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        <div className="mt-6">
          {activeTab === 'feed' && <FeedTab key="feed" />}
          {activeTab === 'about' && <AboutTab key="about" />}
          {activeTab === 'projects' && <ProjectsTab key="projects" />}
          {activeTab === 'contact' && <ContactTab key="contact" onToast={addToast} />}
        </div>

      </div>

      {/* Toast container */}
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast toast-${t.type}`}>
            <span>
              {t.type === 'success' && '✨'}
              {t.type === 'error' && '❌'}
              {t.type === 'info' && 'ℹ️'}
            </span>
            <span style={{ fontWeight: 500 }}>{t.message}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
