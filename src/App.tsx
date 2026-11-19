import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  AudioLines,
  Braces,
  Check,
  ChevronDown,
  CircleDot,
  Code2,
  ExternalLink,
  GitBranch,
  Github,
  Globe2,
  Linkedin,
  Menu,
  MessageSquareQuote,
  Network,
  Radar,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  SquareArrowOutUpRight,
  X,
} from 'lucide-react';

type Capability = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  accent: string;
};

type Role = {
  company: string;
  title: string;
  dates: string;
  location: string;
  summary: string;
  highlights: string[];
  metric?: string;
  metricLabel?: string;
};

type Pillar = {
  index: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

type Project = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  outcomes: string[];
  accent: string;
};

const capabilities: Capability[] = [
  {
    index: '01',
    title: 'Data annotation',
    description: 'High-context labeling that keeps linguistic nuance, intent, and edge cases intact across Arabic-first datasets.',
    tags: ['Arabic / English', 'QA rubrics', 'Speaker labels'],
    icon: Braces,
    accent: 'mint',
  },
  {
    index: '02',
    title: 'Prompt engineering',
    description: 'Test suites that make instruction following, factuality, tone, and user intent measurable — not subjective.',
    tags: ['Adversarial prompts', 'Eval design', 'Preference data'],
    icon: MessageSquareQuote,
    accent: 'blue',
  },
  {
    index: '03',
    title: 'Model safety / red teaming',
    description: 'Structured probing for hallucinations, unsafe completions, bias, and cultural mismatch in production scenarios.',
    tags: ['Risk taxonomy', 'Failure modes', 'Evidence review'],
    icon: ShieldCheck,
    accent: 'orange',
  },
  {
    index: '04',
    title: 'ASR audio alignment',
    description: 'Transcript-to-audio QA across dialects, code-switching, cut-off speech, and timing-sensitive training data.',
    tags: ['Speech segmentation', 'Timestamping', 'WER review'],
    icon: AudioLines,
    accent: 'yellow',
  },
];

const pillars: Pillar[] = [
  {
    index: 'M / 01',
    title: 'Universal SFT & RLHF Calibration',
    description: 'One calibrated standard for supervised-fine-tuning and preference data — applied consistently across STEM, legal, and medical domains in English and Arabic.',
    points: ['Rubric normalization across domains', 'Preference-pair scoring & ranking', 'Cross-lingual consistency checks'],
    icon: SlidersHorizontal,
  },
  {
    index: 'M / 02',
    title: 'Red Teaming & Adversarial Evaluation',
    description: 'Structured adversarial probing that surfaces hallucination, bias, unsafe completions, and cultural mismatch before they reach production.',
    points: ['Adversarial prompt suites (EN / AR)', 'Failure-mode & risk taxonomies', 'Evidence-backed severity reporting'],
    icon: ShieldCheck,
  },
  {
    index: 'M / 03',
    title: 'Chain-of-Thought Logical Reasoning',
    description: 'Step-level audit of reasoning traces — verifying each inference, spotting unjustified leaps, and scoring logical rigor, not just final answers.',
    points: ['Stepwise inference verification', 'Distractor & trap-resistance testing', 'Mathematical and legal reasoning QA'],
    icon: GitBranch,
  },
];

const roles: Role[] = [
  {
    company: 'Agents Only Inc',
    title: 'AI Training & Research Contributor',
    dates: 'Jun 2026 — Nov 2026',
    location: 'Remote · Contract',
    summary: 'Audited diverse AI-training datasets — STEM, legal, and medical content — in both English and Arabic, scoring complex tasks against instruction-following and domain rubrics.',
    highlights: [
      'Reviewed and calibrated evaluation rubrics, translating criteria into consistent annotations across STEM, legal, and medical subject matter.',
      'Prepared and audited English- and Arabic-language responses for AI-training tasks, adapting to revised instructions without loss of rigor.',
    ],
    metric: '24h',
    metricLabel: 'feedback turnaround',
  },
  {
    company: 'TrustScale AI',
    title: 'AI Response Evaluator & Fact-Verification Annotator',
    dates: 'Jul 2026 — Oct 2026',
    location: 'Remote · Contract',
    summary: 'Evaluated English and Arabic prompts and AI responses against guidelines covering clarity, information-seeking intent, sensitivity, and factuality — with STEM, legal, and medical claims in scope.',
    highlights: [
      'Decomposed responses into factual claims and researched reliable sources for verification across technical, legal, and medical content.',
      'Identified hallucinations, unsupported statements, misleading information, and contextual inaccuracies.',
    ],
    metric: '10D',
    metricLabel: 'quality dimensions',
  },
  {
    company: 'Acolad',
    title: 'Speech Data Annotation & Transcription QA Specialist',
    dates: 'Jul 2026 — Sep 2026',
    location: 'Remote · Contract',
    summary: 'Annotated Arabic speech data and aligned verbatim transcripts to audio within an approximately 300-millisecond tolerance.',
    highlights: [
      'Identified missing or mismatched words, timestamp drift, speaker-attribution errors, and transcript-audio inconsistencies.',
      'Applied a five-point quality scale to support accept/reject decisions across speech segments.',
    ],
    metric: '<300ms',
    metricLabel: 'timestamp tolerance',
  },
  {
    company: 'Frontier Design',
    title: 'Data Annotator & Linguist',
    dates: 'Sep 2025 — Dec 2025',
    location: 'Remote · Independent contract',
    summary: 'Annotated and evaluated more than 3,000 Arabic, Tigrinya, and English AI-training data segments, spanning STEM, legal, and medical source material.',
    highlights: [
      'Assessed generated content for factual accuracy, linguistic quality, contextual relevance, translation quality, bias, and safety.',
      'Escalated findings with supporting explanations and coordinated on data-quality issues.',
    ],
    metric: '3,000+',
    metricLabel: 'segments audited',
  },
];

const projects: Project[] = [
  {
    number: 'CASE / 01',
    title: 'Canva Arabic AI Quality Evaluation',
    subtitle: 'Arabic AI-generated design quality · 2026',
    description: 'A structured review of Egyptian Arabic prompts and AI-generated design outputs, scored across language, visual, and cultural dimensions.',
    tags: ['Egyptian Arabic', '10 quality dimensions', 'UX evaluation'],
    outcomes: [
      'Benchmarked image and copy accuracy, coherence, formatting, fluency, and generation quality.',
      'Compared outputs with cultural relevance, dialect/register fit, and entity recognition in view.',
      'Produced a targeted QA recommendation with product-risk and mitigation notes.',
    ],
    accent: 'mint',
  },
  {
    number: 'CASE / 02',
    title: 'Speech Dataset QA',
    subtitle: 'Arabic ASR alignment pipeline · 2026',
    description: 'A quality-control workflow for speech data where every word, speaker switch, and timestamp needs to survive contact with the audio.',
    tags: ['ASR QA', 'Code-switching', '<300ms alignment'],
    outcomes: [
      'Aligned verbatim Arabic transcripts to audio while preserving natural disfluencies and cut-off speech.',
      'Flagged transcript drift, speaker-attribution errors, and unintelligible segments for review.',
      'Converted edge cases into consistent accept/reject decisions with a five-point quality scale.',
    ],
    accent: 'blue',
  },
];

const navItems = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case studies', href: '#projects' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (title: string): void => {
    setOpenProject((current) => (current === title ? null : title));
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jaefer Ibrahim home">
          <span className="brand-mark"><CircleDot size={16} strokeWidth={2.5} /></span>
          <span>JAEFER<span className="brand-muted">/</span>IBRAHIM</span>
        </a>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-contact" href="mailto:contact.jaefer@gmail.com">Start a conversation <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Arabic AI evaluation / available for select contracts</div>
            <h1>AI Data Trainer <span>&amp;</span> LLM Evaluation Engineer<span className="hero-title-sub"> | Multilingual Specialist</span></h1>
            <p className="hero-description">I audit and calibrate the datasets behind frontier models — STEM, legal, and medical content in English and Arabic — turning ambiguous model behavior into clear, defensible quality signals.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:contact.jaefer@gmail.com">Work with me <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#projects">View case studies <span>↓</span></a>
            </div>
            <div className="social-row">
              <a href="https://github.com" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ExternalLink size={12} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ExternalLink size={12} /></a>
            </div>
          </div>

          <div className="signal-panel" aria-label="Professional snapshot">
            <div className="panel-topline"><span>LIVE PROFILE / 2026</span><span className="panel-live"><span className="status-dot" /> open</span></div>
            <div className="signal-visual">
              <div className="signal-grid" />
              <div className="signal-orbit orbit-one" />
              <div className="signal-orbit orbit-two" />
              <div className="signal-core"><Radar size={30} strokeWidth={1.2} /><span>QUALITY<br />SIGNAL</span></div>
              <span className="signal-label label-one">LANG / AR</span>
              <span className="signal-label label-two">RLHF / 04</span>
              <span className="signal-label label-three">QA / 99.2</span>
              <span className="signal-cross cross-one">+</span>
              <span className="signal-cross cross-two">+</span>
            </div>
            <div className="panel-readout">
              <div><span className="readout-label">Primary lens</span><strong>Multi-domain quality</strong></div>
              <div><span className="readout-label">Working mode</span><strong>Human-in-the-loop</strong></div>
            </div>
            <div className="panel-footer"><Code2 size={14} /> <span>evidence // context // judgment</span><span>v.01</span></div>
          </div>
        </section>

        <section className="marquee-strip" aria-label="Areas of focus">
          <div className="marquee-track"><span>SFT / RLHF CALIBRATION</span><span>RED TEAMING</span><span>CHAIN-OF-THOUGHT QA</span><span>STEM / LEGAL / MEDICAL</span><span>ENGLISH · ARABIC</span><span>ASR ALIGNMENT</span><span>SFT / RLHF CALIBRATION</span><span>RED TEAMING</span></div>
        </section>

        <section id="capabilities" className="content-section section-wrap">
          <div className="section-heading"><div><p className="section-kicker">01 / The toolkit</p><h2>AI lifecycle, viewed through a language lens.</h2></div><p className="section-intro">From raw data to release decisions, I build the human judgment layer that makes model quality legible.</p></div>
          <div className="capability-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return <article key={capability.index} className={`capability-card accent-${capability.accent}`}>
                <div className="card-topline"><span>{capability.index}</span><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="tag-row">{capability.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>;
            })}
          </div>
        </section>

        <section id="methodology" className="content-section section-wrap methodology-section">
          <div className="section-heading"><div><p className="section-kicker">02 / Core methodology</p><h2>Core Methodology &amp; Rubric Expertise.</h2></div><p className="section-intro">Three disciplines, one standard: every judgment traceable to a rubric, every rubric tested against real failure modes.</p></div>
          <div className="methodology-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return <article key={pillar.index} className="methodology-card">
                <div className="card-topline"><span>{pillar.index}</span><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <ul className="pillar-points">{pillar.points.map((point) => <li key={point}><span className="detail-bullet" />{point}</li>)}</ul>
              </article>;
            })}
          </div>
        </section>

        <section id="experience" className="content-section section-wrap experience-section">
          <div className="section-heading"><div><p className="section-kicker">03 / Field notes</p><h2>Selected contract history.</h2></div><p className="section-intro">A record of the review rooms, annotation queues, and edge cases behind the signal.</p></div>
          <div className="experience-layout">
            <div className="timeline">
              {roles.map((role, index) => <article className="timeline-item" key={role.company}>
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
                <div className="timeline-content">
                  <div className="role-meta"><span>{role.dates}</span><span>{role.location}</span></div>
                  <h3>{role.company}</h3>
                  <p className="role-title">{role.title}</p>
                  <p className="role-summary">{role.summary}</p>
                  <ul>{role.highlights.map((highlight) => <li key={highlight}><Check size={14} /> {highlight}</li>)}</ul>
                </div>
                {role.metric && <div className="role-metric"><strong>{role.metric}</strong><span>{role.metricLabel}</span></div>}
              </article>)}
            </div>
            <aside className="impact-card">
              <div className="impact-icon"><Sparkles size={18} /></div>
              <p className="section-kicker">Impact, in numbers</p>
              <div className="big-stat">3K<span>+</span></div>
              <p>data segments audited across STEM, legal, and medical content — in English, Arabic, and Tigrinya.</p>
              <div className="mini-bars"><span style={{ height: '44%' }} /><span style={{ height: '66%' }} /><span style={{ height: '57%' }} /><span style={{ height: '82%' }} /><span style={{ height: '72%' }} /><span style={{ height: '96%' }} /></div>
              <div className="impact-footer"><span>2025</span><span>2026</span><span className="impact-key"><i /> review volume</span></div>
            </aside>
          </div>
        </section>

        <section id="projects" className="content-section section-wrap projects-section">
          <div className="section-heading"><div><p className="section-kicker">04 / Proof of work</p><h2>Case studies, not claims.</h2></div><p className="section-intro">Open a project to see the evaluation logic, the edge cases, and what a useful decision looked like at the end.</p></div>
          <div className="projects-list">
            {projects.map((project) => {
              const isOpen = openProject === project.title;
              return <article key={project.title} className={`project-card accent-${project.accent} ${isOpen ? 'is-open' : ''}`}>
                <button type="button" className="project-trigger" onClick={() => toggleProject(project.title)} aria-expanded={isOpen}>
                  <span className="project-number">{project.number}</span>
                  <span className="project-title-wrap"><span className="project-title">{project.title}</span><span className="project-subtitle">{project.subtitle}</span></span>
                  <span className="project-toggle">{isOpen ? <X size={18} /> : <ChevronDown size={19} />}</span>
                </button>
                <div className="project-preview"><p>{project.description}</p><span className="case-link">{isOpen ? 'Close case study' : 'Open case study'} <SquareArrowOutUpRight size={15} /></span></div>
                <div className={`project-details ${isOpen ? 'details-visible' : ''}`}>
                  <div className="detail-label"><Network size={16} /> evaluation output</div>
                  <ul>{project.outcomes.map((outcome) => <li key={outcome}><span className="detail-bullet" />{outcome}</li>)}</ul>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>;
            })}
          </div>
        </section>

        <section className="closing-cta section-wrap">
          <div className="cta-grid" />
          <div className="cta-content"><p className="section-kicker">Have a hard-to-evaluate problem?</p><h2>Let’s make the signal clear.</h2><p>For Arabic LLM evaluation, dataset QA, and rapid review work, send the brief and I’ll bring the rubric.</p><a className="button button-primary" href="mailto:contact.jaefer@gmail.com">contact.jaefer@gmail.com <ArrowUpRight size={16} /></a></div>
          <div className="cta-stamp"><Globe2 size={24} /><span>GIZA<br />EGYPT</span></div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><span>© 2026 Jaefer Ibrahim</span><span>Arabic AI quality / human judgment</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
