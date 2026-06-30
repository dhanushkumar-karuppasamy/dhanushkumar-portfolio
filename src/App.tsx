import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, MapPin, Circle, Link2 } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────
type Tab = 'feed' | 'about' | 'projects' | 'contact';

// ─── 3D Futuristic Scene in Banner ───────────────────────────────────────────
function HeroScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#4a90d9" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Network lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="15%" y1="20%" x2="45%" y2="55%" className="network-line" stroke="#5ba3d9" strokeWidth="1" style={{animationDelay:'0s'}}/>
        <line x1="70%" y1="15%" x2="45%" y2="55%" className="network-line" stroke="#5ba3d9" strokeWidth="1" style={{animationDelay:'0.5s'}}/>
        <line x1="85%" y1="70%" x2="45%" y2="55%" className="network-line" stroke="#5ba3d9" strokeWidth="1" style={{animationDelay:'1s'}}/>
        <line x1="20%" y1="80%" x2="45%" y2="55%" className="network-line" stroke="#5ba3d9" strokeWidth="1" style={{animationDelay:'1.5s'}}/>
        <line x1="15%" y1="20%" x2="70%" y2="15%" className="network-line" stroke="#7dc4e8" strokeWidth="0.5" style={{animationDelay:'0.3s'}}/>
        <line x1="85%" y1="70%" x2="20%" y2="80%" className="network-line" stroke="#7dc4e8" strokeWidth="0.5" style={{animationDelay:'0.8s'}}/>
      </svg>

      {/* Main 3D Orb — drifts diagonally */}
      <div className="scene-drift absolute" style={{top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
        <div className="scene-3d relative" style={{width:130,height:130}}>
          <div className="inner-rotate absolute inset-0 flex items-center justify-center">
            {/* Ring 1 */}
            <div className="ring1 absolute" style={{
              width:120, height:120,
              border: '2px solid rgba(99,179,237,0.7)',
              borderRadius: '50%',
              boxShadow: '0 0 12px rgba(99,179,237,0.4)',
              top:'50%', left:'50%',
              marginLeft:-60, marginTop:-60,
            }}/>
            {/* Ring 2 */}
            <div className="ring2 absolute" style={{
              width:100, height:100,
              border: '2px solid rgba(224,64,251,0.6)',
              borderRadius: '50%',
              boxShadow: '0 0 10px rgba(224,64,251,0.3)',
              top:'50%', left:'50%',
              marginLeft:-50, marginTop:-50,
            }}/>
            {/* Ring 3 */}
            <div className="ring3 absolute" style={{
              width:80, height:80,
              border: '1.5px solid rgba(255,255,255,0.5)',
              borderRadius: '50%',
              top:'50%', left:'50%',
              marginLeft:-40, marginTop:-40,
            }}/>
            {/* Core */}
            <div className="core-anim absolute" style={{
              width:36, height:36,
              borderRadius:'50%',
              background: 'radial-gradient(circle, #fff 0%, #63b3ed 50%, #2b6cb0 100%)',
              top:'50%', left:'50%',
              marginLeft:-18, marginTop:-18,
            }}/>
          </div>

          {/* Orbiting dots */}
          <div className="dot-orbit1 absolute" style={{top:'50%',left:'50%',width:10,height:10,marginLeft:-5,marginTop:-5}}>
            <div style={{width:10,height:10,borderRadius:'50%',background:'#e040fb',boxShadow:'0 0 8px #e040fb'}}/>
          </div>
          <div className="dot-orbit2 absolute" style={{top:'50%',left:'50%',width:7,height:7,marginLeft:-3.5,marginTop:-3.5}}>
            <div style={{width:7,height:7,borderRadius:'50%',background:'#63b3ed',boxShadow:'0 0 6px #63b3ed'}}/>
          </div>
          <div className="dot-orbit3 absolute" style={{top:'50%',left:'50%',width:5,height:5,marginLeft:-2.5,marginTop:-2.5}}>
            <div style={{width:5,height:5,borderRadius:'50%',background:'#ffffff',boxShadow:'0 0 4px #fff'}}/>
          </div>
        </div>
      </div>

      {/* Floating nodes */}
      <div className="p1 absolute" style={{top:'18%',left:'12%'}}>
        <div style={{
          width:14,height:14,borderRadius:'50%',
          background:'radial-gradient(circle,#63b3ed,#2b6cb0)',
          boxShadow:'0 0 10px rgba(99,179,237,0.7)',
        }}/>
      </div>
      <div className="p2 absolute" style={{top:'22%',right:'15%'}}>
        <div style={{
          width:10,height:10,borderRadius:'50%',
          background:'radial-gradient(circle,#e040fb,#9b27af)',
          boxShadow:'0 0 8px rgba(224,64,251,0.6)',
        }}/>
      </div>
      <div className="p3 absolute" style={{bottom:'25%',left:'20%'}}>
        <div style={{
          width:8,height:8,borderRadius:'50%',
          background:'radial-gradient(circle,#fff,#a0aec0)',
          boxShadow:'0 0 6px rgba(255,255,255,0.5)',
        }}/>
      </div>
      <div className="p1 absolute" style={{bottom:'20%',right:'18%'}}>
        <div style={{
          width:12,height:12,borderRadius:'50%',
          background:'radial-gradient(circle,#63b3ed,#2b6cb0)',
          boxShadow:'0 0 8px rgba(99,179,237,0.6)',
        }}/>
      </div>
      <div className="p2 absolute" style={{top:'55%',left:'8%'}}>
        <div style={{
          width:6,height:6,borderRadius:'50%',
          background:'#e040fb',
          boxShadow:'0 0 6px rgba(224,64,251,0.5)',
        }}/>
      </div>

      {/* Hexagon / data card accent top-right */}
      <div className="hex-rotate absolute" style={{top:'12%',right:'8%',opacity:0.5}}>
        <svg width="40" height="46" viewBox="0 0 40 46">
          <polygon points="20,1 39,11.5 39,34.5 20,45 1,34.5 1,11.5"
            fill="none" stroke="#5ba3d9" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="p3 absolute" style={{top:'60%',right:'10%',opacity:0.4}}>
        <svg width="28" height="32" viewBox="0 0 28 32">
          <polygon points="14,1 27,8 27,24 14,31 1,24 1,8"
            fill="none" stroke="#e040fb" strokeWidth="1"/>
        </svg>
      </div>

      {/* Data stream dots */}
      {[0,1,2,3,4].map(i => (
        <div key={i} className="absolute" style={{
          left: `${20 + i*15}%`,
          top: '10%',
          animation: `dataStream ${2 + i*0.4}s ease-in-out ${i*0.3}s infinite`,
        }}>
          <div style={{width:3,height:3,borderRadius:'50%',background:'#63b3ed',opacity:0.6}}/>
        </div>
      ))}
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
function useEmailForm(placeholder = 'Your email address') {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) { setStatus('error'); return; }
    window.location.href = `mailto:dhanushkumark.tech@gmail.com?subject=Portfolio Contact&body=From: ${email}`;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return { email, setEmail, status, handleSubmit, placeholder };
}

// ─── Feed Tab ─────────────────────────────────────────────────────────────────
const feedItems = [
  { icon: '🏆', title: '1st Place — DevHack 2026', desc: '160+ teams · Built MASTER, a multi-agent trading simulation', tags: ['Hackathon','Python','Multi-Agent','Flask'] },
  { icon: '⚽', title: 'Built a Worldcup Predictor', desc: 'Full ML pipeline with Monte Carlo simulation for tournament outcomes', tags: ['Machine Learning','Python','Monte Carlo'] },
  { icon: '⚡', title: 'NameFlux — Sub-15μs Lookups', desc: 'Username lookup across 1M+ records in under 15 microseconds', tags: ['C++','Bloom Filter','LRU Cache','Performance'] },
  { icon: '🎙️', title: 'Shipped PODMASTER', desc: 'A fast, focused build solving a real podcast workflow gap end-to-end', tags: ['Python','AI','Automation'] },
  { icon: '🍪', title: 'CookieStore — Full-Stack Retail', desc: 'Retail management system with 8-role access control and complete order lifecycle', tags: ['Java','Spring Boot','React','MySQL'] },
  { icon: '🧩', title: 'Solved 200+ LeetCode Problems', desc: 'Strong focus on Data Structures, Algorithms, and SQL across all major topics', tags: ['DSA','Algorithms','SQL','Arrays','Trees'] },
];

function FeedTab() {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="tab-content space-y-4">
      {feedItems.map((item, i) => (
        <div key={i} className="feed-card rounded-2xl p-5 border" style={{
          background: 'rgba(255,255,255,0.04)',
          borderColor: 'rgba(255,255,255,0.08)',
        }}>
          <div className="flex items-start gap-4">
            <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-base mb-1">{item.title}</h3>
              <p className="text-sm mb-3" style={{color:'#8b949e'}}>{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full font-mono" style={{
                    background:'rgba(224,64,251,0.1)',
                    color:'#e040fb',
                    border:'1px solid rgba(224,64,251,0.2)',
                    fontFamily:'Fira Code, monospace',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
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
        background:'rgba(255,255,255,0.04)',
        borderColor:'rgba(255,255,255,0.08)',
      }}>
        <h2 className="text-xl font-bold text-white mb-4">About Me</h2>
        <div className="space-y-4 text-sm" style={{color:'#8b949e',lineHeight:1.7}}>
          <p>
            <span className="text-white font-medium">Dhanush Kumar K</span> — Final year B.Tech student in Artificial Intelligence &amp; Data Science at SKCT Coimbatore.
          </p>
          <div>
            <p className="text-white font-medium mb-2">Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {['Data Analytics','ETL Pipelines','Business Intelligence','Full-Stack Development'].map(f => (
                <span key={f} className="text-xs px-3 py-1 rounded-full" style={{
                  background:'rgba(99,179,237,0.1)',
                  color:'#63b3ed',
                  border:'1px solid rgba(99,179,237,0.2)',
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
            <p className="italic" style={{color:'#a0aec0'}}>
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
    name: 'MASTER',
    subtitle: 'Multi-Agent Stock Market Simulation',
    problem: '6 autonomous trading agents operating under real compliance rules in a simulated market.',
    result: '1st place at DevHack 2026 among 160+ teams — compliance-enforced multi-agent architecture.',
    tags: ['Python','Flask','React','Ollama','SQLite'],
    github: 'https://github.com/dhanushkumar-karuppasamy/MASTER.git',
  },
  {
    name: 'PODMASTER',
    subtitle: 'Podcast Workflow Automation',
    problem: 'Repetitive podcast production steps consuming too much manual effort.',
    result: 'A focused build tackling a real workflow problem end-to-end with AI automation.',
    tags: ['Python','AI','Automation'],
    github: 'https://github.com/dhanushkumar-karuppasamy/PodMaster.git',
  },
  {
    name: 'Worldcup Predictor',
    subtitle: 'ML Tournament Outcome Forecasting',
    problem: 'Predicting football World Cup results using historical data and statistical simulation.',
    result: 'Full ML pipeline forecasting tournament outcomes through Monte Carlo simulation.',
    tags: ['Python','Machine Learning','Monte Carlo Simulation'],
    github: 'https://github.com/dhanushkumar-karuppasamy/worldcup2026_predictor.git',
  },
  {
    name: 'NameFlux',
    subtitle: 'Low-Latency Username Lookup',
    problem: 'Username existence checks across 1M+ records at microsecond speed.',
    result: '5–15μs average lookup using Bloom Filters and LRU Cache — tested at scale.',
    tags: ['C++','Python','Streamlit','Bloom Filter','LRU Cache'],
    github: 'https://github.com/dhanushkumar-karuppasamy/NameFlux.git',
  },
  {
    name: 'CookieStore',
    subtitle: 'Retail Management System',
    problem: 'Multi-role retail operations requiring secure access control and order lifecycle tracking.',
    result: 'Full-stack retail platform with 8-role JWT access control and complete order management.',
    tags: ['Java','Spring Boot','React','MySQL','JWT'],
    github: 'https://github.com/dhanushkumar-karuppasamy/CookieStore_Management_System.git',
  },
];

function ProjectsTab() {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="tab-content">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <div key={i} className="project-card rounded-2xl p-5 border flex flex-col" style={{
            background:'rgba(255,255,255,0.04)',
            borderColor:'rgba(255,255,255,0.08)',
          }}>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-bold text-white text-base">{p.name}</h3>
                <p className="text-xs mt-0.5" style={{color:'#e040fb', fontFamily:'Fira Code, monospace'}}>{p.subtitle}</p>
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 ml-2 p-2 rounded-lg transition-colors"
                style={{color:'#8b949e'}}
                onMouseEnter={e => (e.currentTarget.style.color = '#e040fb')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
                aria-label={`GitHub — ${p.name}`}
              >
                <Github size={18}/>
              </a>
            </div>
            <p className="text-xs mb-1" style={{color:'#8b949e'}}><span className="text-white font-medium">Problem:</span> {p.problem}</p>
            <p className="text-xs mb-3" style={{color:'#8b949e'}}><span className="text-white font-medium">Result:</span> {p.result}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {p.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{
                  background:'rgba(255,255,255,0.06)',
                  color:'#a0aec0',
                  border:'1px solid rgba(255,255,255,0.1)',
                  fontFamily:'Fira Code, monospace',
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
function ContactTab() {
  const ref = useFadeIn();
  const { email, setEmail, status, handleSubmit } = useEmailForm();

  return (
    <div ref={ref} className="tab-content">
      <div className="rounded-2xl p-8 border text-center" style={{
        background:'rgba(255,255,255,0.04)',
        borderColor:'rgba(255,255,255,0.08)',
      }}>
        <h2 className="text-2xl font-bold text-white mb-2">Let's build something together</h2>
        <p className="text-sm mb-6" style={{color:'#8b949e'}}>
          Open to data analytics, data engineering, or software development roles.<br/>
          Always happy to collaborate on something interesting.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mb-6 max-w-md mx-auto">
          <input
            type="email"
            className="input-dark flex-1"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button type="submit" className="btn-accent whitespace-nowrap">Connect</button>
        </form>
        {status === 'success' && <p className="text-sm mb-4" style={{color:'#e040fb'}}>Opening your email client...</p>}
        {status === 'error' && <p className="text-sm mb-4" style={{color:'#fc8181'}}>Please enter a valid email.</p>}
        <div className="flex items-center justify-center gap-6 mt-4">
          <a href="https://www.linkedin.com/in/dhanushkumar-karuppasamy" target="_blank" rel="noopener noreferrer"
            className="transition-colors" style={{color:'#8b949e'}}
            onMouseEnter={e => (e.currentTarget.style.color = '#e040fb')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
            aria-label="LinkedIn">
            <Linkedin size={22}/>
          </a>
          <a href="https://github.com/dhanushkumar-karuppasamy" target="_blank" rel="noopener noreferrer"
            className="transition-colors" style={{color:'#8b949e'}}
            onMouseEnter={e => (e.currentTarget.style.color = '#e040fb')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
            aria-label="GitHub">
            <Github size={22}/>
          </a>
          <a href="mailto:dhanushkumark.tech@gmail.com"
            className="transition-colors" style={{color:'#8b949e'}}
            onMouseEnter={e => (e.currentTarget.style.color = '#e040fb')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8b949e')}
            aria-label="Email">
            <Mail size={22}/>
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
  const [subStatus, setSubStatus] = useState<'idle'|'success'|'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail || !subscribeEmail.includes('@')) { setSubStatus('error'); return; }
    window.location.href = `mailto:dhanushkumark.tech@gmail.com?subject=Subscribe&body=Please add me to your updates: ${subscribeEmail}`;
    setSubStatus('success');
    setSubscribeEmail('');
    setTimeout(() => setSubStatus('idle'), 3000);
  };

  const handleConnectClick = () => {
    window.open('https://www.linkedin.com/in/dhanushkumar-karuppasamy', '_blank', 'noopener,noreferrer');
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: 'feed', label: 'Feed' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px 80px' }}>

        {/* ── Hero Banner + Avatar wrapper ── */}
        <div style={{ position: 'relative', marginTop: 24 }}>
          {/* Banner */}
          <div className="hero-banner rounded-3xl overflow-hidden relative" style={{ height: 220 }}>
            <HeroScene />
          </div>

          {/* Avatar — sits half-outside the bottom of the banner */}
          <div style={{ position: 'absolute', bottom: -52, left: 16 }}>
            <div className="avatar-glow rounded-full overflow-hidden" style={{
              width: 104, height: 104,
              border: '4px solid #0d1117',
              background: 'linear-gradient(135deg, #1a2a4a 0%, #0d2137 50%, #1a1a2e 100%)',
              flexShrink: 0,
            }}>
              <img
                src="/image.png"
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

          {/* Connect button — aligned to banner bottom-right */}
          <div style={{ position: 'absolute', bottom: -44, right: 0 }}>
            <button className="btn-accent" onClick={handleConnectClick}>
              Connect
            </button>
          </div>
        </div>

        {/* ── Name + tagline ── */}
        <div style={{ paddingTop: 68, paddingLeft: 4 }}>
          <h1 className="font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 6 }}>
            Dhanush Kumar K <span style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>⚡</span>
          </h1>
          <p className="font-medium" style={{ color: '#e2e8f0', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: 6, minHeight: '1.5em' }}>
            {displayed}{!done && <span className="typewriter-cursor"/>}
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
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              className="input-dark flex-1"
              placeholder="Email Address"
              value={subscribeEmail}
              onChange={e => setSubscribeEmail(e.target.value)}
            />
            <button type="submit" className="btn-accent">Subscribe</button>
          </form>
          {subStatus === 'success' && <p className="text-xs mt-2" style={{color:'#e040fb'}}>Opening your email client...</p>}
          {subStatus === 'error' && <p className="text-xs mt-2" style={{color:'#fc8181'}}>Please enter a valid email.</p>}
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
          {activeTab === 'contact' && <ContactTab key="contact" />}
        </div>

      </div>
    </div>
  );
}
