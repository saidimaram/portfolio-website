import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import silvaryPinkWallpaper from './Layers/silvary_pink.jpg'
import maramProfileImage from './Layers/MaramS.JPG'
import maramResume from './Layers/MaramSaidi Resume CV.pdf'
import eduBoostVideoUrl from './Layers/Eduboost/Eduboost Chatbot.mp4'
import docSmartVideo from './Layers/Docsmart/Activité _ saidi Maram _ LinkedIn - Google Chrome 2026-10-22 22-47-45.mp4'
import winterSchoolCertificate from './Layers/participation certification .png'
import awsTrainingBadge from './Layers/AWS TrainingBadge.PNG'
import rexProjectManagerImage from './Layers/SagemCom/my project project manager.png'
import rexAddProjectImage from './Layers/SagemCom/add project.png'
import rexAdminIssueImage from './Layers/SagemCom/issue for admin.png'
import rexJenkinsImage from './Layers/SagemCom/jenkins front result.png'
import rexSonarQubeImage from './Layers/SagemCom/sonarQube result.png'
import bookingCaptureImage from './Layers/booking/Capture.PNG'
import bookingCapture2Image from './Layers/booking/Capture2.PNG'
import recouvraImage1 from './Layers/Recouvra/Recouvra1.png'
import recouvraImage2 from './Layers/Recouvra/Recouvra2.png'
import recouvraImage3 from './Layers/Recouvra/Recouvra3.png'
import recouvraImage4 from './Layers/Recouvra/Recouvra4.png'
import recouvraImage5 from './Layers/Recouvra/Recouvra5.png'

function IcGrid() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}
function IcUser() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  )
}
function IcZap() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}
function IcBriefcase() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}
function IcCode() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
function IcBook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}
function IcAward() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}
function IcGlobe() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
    </svg>
  )
}
function IcMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
function IcMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  )
}
function IcX() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  )
}
function IcChevLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}
function IcChevRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
function IcLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function IcGithub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
function IcExternal() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
function IcPlay() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}
function IcClock() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function IcPin() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IcDownload() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
function IcStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  )
}
function IcUsers() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function IcSend() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: 'about', label: 'About', icon: <IcUser /> },
  { id: 'skills', label: 'Skills', icon: <IcZap /> },
  { id: 'experience', label: 'Experience', icon: <IcBriefcase /> },
  { id: 'projects', label: 'Projects', icon: <IcCode /> },
  { id: 'certifications', label: 'Certifications', icon: <IcAward /> },
  { id: 'education', label: 'Education', icon: <IcBook /> },
  { id: 'languages', label: 'Languages', icon: <IcGlobe /> },
  { id: 'contact', label: 'Contact', icon: <IcMail /> },
]

const SKILLS: Record<string, string[]> = {
  Languages: ['Java', 'Python', 'TypeScript', 'SQL', 'C', 'PHP'],
  Frontend: ['Angular', 'React', 'Bootstrap', 'HTML5', 'CSS3', 'IONIC'],
  Backend: ['Spring Boot', 'Django REST', 'Symfony', 'Node.js', 'Express', 'FastAPI'],
  'DevOps & Cloud': ['Docker', 'Jenkins', 'GitLab CI/CD', 'SonarQube'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Data Warehousing', 'Big Data'],
  'AI & Data': ['RAG', 'Prompt Engineering', 'Machine Learning', 'Generative AI', 'LlamaIndex'],
  Tools: ['Figma', 'UML', 'Git', 'GitHub', 'GitLab'],
  Methodology: ['Agile/Scrum', 'Design Patterns', 'Software Architecture'],
}

const EXPERIENCES = [
  {
    company: 'El Mazraa',
    location: 'Fondouk Jedid',
    role: 'Full Stack Software Engineering Intern',
    period: 'Jul – Aug 2026',
    current: true,
    highlights: [
      'Built an enterprise workflow platform serving 3 agri-food companies',
      'Implemented role-based 7-step approval workflow with Spring Boot + JWT authentication',
      'Developed responsive Angular interfaces with MySQL data modeling',
      'Set up GitLab CI/CD pipeline with full Dockerized deployment',
    ],
    stack: ['Spring Boot', 'JWT', 'Angular', 'MySQL', 'Docker', 'GitLab CI/CD'],
  },
  {
    company: 'Sagemcom',
    location: 'Tunisia',
    role: 'Computer Science Intern — Final Year Project',
    period: 'Feb – May 2024',
    current: false,
    highlights: [
      'Digitized REX Excel file workflows into a modern web application',
      'Built Angular frontend with Django REST Framework backend',
      'Implemented full CI/CD pipeline: GitLab CI, Jenkins, SonarQube',
      'Dockerized the entire stack, working within an Agile/Scrum team',
    ],
    stack: ['Angular', 'Django REST', 'Docker', 'Jenkins', 'GitLab CI', 'SonarQube'],
  },
  {
    company: 'Elite Conseil Consulting',
    location: 'Tunis',
    role: 'Frontend Developer Intern',
    period: 'Jul – Sep 2023',
    current: false,
    highlights: [
      'Built a responsive booking web application end-to-end',
      'Created UI/UX mockups in Figma, implemented with Angular + Bootstrap',
      'Designed and implemented the relational database schema',
    ],
    stack: ['Angular', 'Bootstrap', 'Figma', 'MySQL'],
  },
  {
    company: 'STB Bank',
    location: 'Tunisia',
    role: 'Observational Intern',
    period: 'Jul – Sep 2022',
    current: false,
    highlights: [
      'Gained exposure to enterprise financial systems and IT infrastructure at one of Tunisia\'s largest banks',
    ],
    stack: [],
  },
]

const PROF_PROJECTS = [
  {
    title: 'Enterprise Workflow Management Platform',
    org: 'El Mazraa',
    desc: 'Multi-company approval system for 3 agri-food enterprises with role-based access control and a 7-step document tracking workflow.',
    stack: ['Spring Boot', 'JWT', 'Angular', 'MySQL', 'Docker', 'GitLab CI/CD'],
    media: 'video' as const,
    images: [],
  },
  {
    title: 'REX Automation Platform',
    org: 'Sagemcom — PFE',
    desc: 'Replaced fragmented Excel-based REX report processes with a unified web application backed by a full DevOps pipeline.',
    stack: ['Angular', 'Django REST', 'PostgreSQL', 'Docker', 'Jenkins', 'SonarQube'],
    media: 'carousel' as const,
    images: [
      rexProjectManagerImage,
      rexAddProjectImage,
      rexAdminIssueImage,
      rexJenkinsImage,
      rexSonarQubeImage,
    ],
  },
  {
    title: 'Booking Web Application',
    org: 'Elite Conseil Consulting',
    desc: 'End-to-end responsive booking platform — Figma-designed UI.',
    stack: [ 'Bootstrap', 'Figma', 'MySQL'],
    media: 'carousel' as const,
    images: [bookingCaptureImage, bookingCapture2Image],
  },
]

const ACADEMIC_PROJECTS = [
  {
    title: 'EduBoost',
    subtitle: 'AI-Driven E-Learning Platform',
    type: 'Team Project',
    teamSize: 4,
    role: 'AI / RAG Engineer',
    desc: 'AI-powered e-learning platform providing personalized learning paths, adaptive feedback, and early risk detection for students.',
    contribution: 'Designed and built the full Retrieval-Augmented Generation pipeline — document ingestion with incremental indexing, Q&A, summarization, quiz generation, level detection, and personalized recommendations.',
    stack: ['LlamaIndex', 'ChromaDB', 'Ollama', 'FastAPI', 'Groq', 'Llama 3.1 8B', 'nomic-embed-text'],
    media: 'video' as const,
    images: [eduBoostVideoUrl],
  },
  {
    title: 'Recouvra+',
    subtitle: 'Debt Collection Management Platform',
    type: 'Solo Project',
    teamSize: 1,
    role: 'Full Stack Developer',
    desc: 'Front-end application for debt recovery management — clients, invoices, recovery actions, and payments — with a real-time statistics dashboard.',
    contribution: 'Standalone Components with Angular Signals and Lazy Loading, JWT auth with Interceptor + Guard, full CRUD for all entities, real-time stats dashboard.',
    stack: ['Angular 21', 'Bootstrap 5', 'Node.js', 'Express', 'MongoDB'],
    media: 'carousel' as const,
    images: [
      recouvraImage1,
      recouvraImage2,
      recouvraImage3,
      recouvraImage4,
      recouvraImage5,
    ],
  },
  {
    title: 'DocSmart',
    subtitle: 'Medical Appointment Management System',
    type: 'Academic Project',
    teamSize: null,
    role: 'Full Stack Developer',
    desc: 'Platform bridging patients and healthcare providers with seamless appointment scheduling and tracking.',
    contribution: 'Full-stack implementation — React (Vite) frontend paired with a Spring Boot backend.',
    stack: ['React', 'Vite', 'Spring Boot'],
    media: 'video' as const,
    images: [docSmartVideo],
  },
]

const LANG_DATA = [
  { lang: 'Arabic', level: 'Native', pct: 100 },
  { lang: 'English ', level: 'B2', source: '(OnSet test)', pct: 72 } ,
  { lang: 'French', level: 'B1', pct: 55 },
  { lang: 'German', level: 'A1', pct: 20 },
  
]

// ─── Primitives ───────────────────────────────────────────────────────────────

function ProfileAvatar({ className = '', size = 'default' }: { className?: string; size?: 'default' | 'small' }) {
  return (
    <img
      src={maramProfileImage}
      alt="Maram Saidi"
      className={['profile-avatar', size === 'small' ? 'profile-avatar-small' : '', className].filter(Boolean).join(' ')}
    />
  )
}

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(entry.target)
        }
      },
      { threshold: 0.04, rootMargin: '0px 0px -32px 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(18px)',
        transition: visible
          ? `opacity 0.55s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.55s cubic-bezier(0.4,0,0.2,1) ${delay}ms`
          : 'none',
      }}
    >
      {children}
    </div>
  )
}

function Card({
  children,
  className = '',
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`bg-white rounded-xl border p-6 shadow-sm ${className}`}
      style={{ borderColor: '#ebcfc6', ...style }}
    >
      {children}
    </div>
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="rule-l flex-1" />
      <h2 className="editorial-section-label uppercase">
        {label}
      </h2>
      <div className="rule-r flex-1" />
    </div>
  )
}

function TechPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{ background: '#f7dfd9', color: '#a65a68', border: '1px solid rgba(166,90,104,0.18)' }}
    >
      {label}
    </span>
  )
}

function SkillPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
      style={{ background: '#fbefea', color: '#4a2730', border: '1px solid #ebcfc6' }}
    >
      {label}
    </span>
  )
}

// ─── Media ────────────────────────────────────────────────────────────────────

function VideoSlot({ title, src }: { title: string; src?: string }) {
  if (src) {
    return (
      <video
        className="block w-full rounded-xl bg-[#4a2730]"
        style={{ aspectRatio: '16/9' }}
        controls
        preload="metadata"
        playsInline
        aria-label={`${title} video demo`}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    )
  }

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col items-center justify-center gap-3"
      style={{ background: '#4a2730', aspectRatio: '16/9' }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.1)' }}
      >
        <span className="text-white ml-0.5">
          <IcPlay />
        </span>
      </div>
      <div className="text-center px-4">
        <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
          {title}
        </div>
        <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Video Demo
        </div>
      </div>
    </div>
  )
}

function DemoSoon() {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col items-center justify-center gap-3"
      style={{ background: '#4a2730', aspectRatio: '16/9' }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.07)' }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.5)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
        </svg>
      </div>
      <span
        className="px-3 py-1 text-xs font-medium rounded-full"
        style={{
          background: 'rgba(255,255,255,0.07)',
          color: 'rgba(255,255,255,0.45)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        Demo Coming Soon
      </span>
    </div>
  )
}

function Carousel({ images }: { images: string[] }) {
  const [cur, setCur] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (!isExpanded) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsExpanded(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isExpanded])

  const showPrevious = () => setCur(i => (i - 1 + images.length) % images.length)
  const showNext = () => setCur(i => (i + 1) % images.length)

  return (
    <>
      <div className="relative rounded-xl overflow-hidden" style={{ background: '#4a2730', aspectRatio: '16/9' }}>
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          aria-label={`View screenshot ${cur + 1} larger`}
          className="block w-full h-full cursor-zoom-in"
        >
          <img
            src={images[cur]}
            alt={`Screenshot ${cur + 1}`}
            className="w-full h-full object-cover"
            style={{ transition: 'opacity 0.25s ease' }}
          />
        </button>
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.88)' }}
            >
              <IcChevLeft />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.88)' }}
            >
              <IcChevRight />
            </button>
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCur(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                  aria-current={i === cur}
                  className="w-1.5 h-1.5 rounded-full transition-all"
                  style={{ background: i === cur ? '#fff8f5' : 'rgba(255,255,255,0.32)' }}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {isExpanded &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Screenshot ${cur + 1}`}
            onClick={() => setIsExpanded(false)}
            style={{ background: 'rgba(10,12,20,0.92)' }}
          >
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              aria-label="Close enlarged screenshot"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white"
              style={{ background: 'rgba(255,255,255,0.14)' }}
            >
              <IcX />
            </button>
            <img
              src={images[cur]}
              alt={`Screenshot ${cur + 1}`}
              onClick={event => event.stopPropagation()}
              className="max-h-full max-w-full rounded-lg object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={event => {
                    event.stopPropagation()
                    showPrevious()
                  }}
                  aria-label="Previous screenshot"
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white sm:left-8"
                  style={{ background: 'rgba(255,255,255,0.14)' }}
                >
                  <IcChevLeft />
                </button>
                <button
                  type="button"
                  onClick={event => {
                    event.stopPropagation()
                    showNext()
                  }}
                  aria-label="Next screenshot"
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-white sm:right-8"
                  style={{ background: 'rgba(255,255,255,0.14)' }}
                >
                  <IcChevRight />
                </button>
                <span className="absolute bottom-4 rounded-full px-3 py-1 text-xs text-white" style={{ background: 'rgba(255,255,255,0.14)' }}>
                  {cur + 1} / {images.length}
                </span>
              </>
            )}
          </div>,
          document.body,
        )}
    </>
  )
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="pt-12 pb-16">
      <FadeIn>
        <SectionLabel label="About" />
        <div className="mb-12 grid md:grid-cols-[1fr_auto] items-center gap-10">
          <div>
            <div className="flex items-center gap-1.5 text-xs mb-5" style={{ color: '#8a6b6b' }}>
              <IcPin />
              <span>Ben Arous, Tunisia</span>
            </div>
            <h1 className="editorial-hero-title mb-4" style={{ color: '#4a2730' }}>
              Maram Saidi
            </h1>
            <p className="font-serif italic text-2xl mb-4 rose-gold-text" style={{ color: '#4a2730' }}>
              Software Engineer in the making
            </p>
            <p className="text-base font-medium mb-3" style={{ color: 'rgba(74,39,48,0.65)' }}>
              Software Engineering Student&nbsp;·&nbsp;Full-Stack Developer&nbsp;·&nbsp;AI &amp; Cloud Enthusiast
            </p>
            <p className="font-serif text-xl leading-snug max-w-lg mb-8 hero-quote" style={{ color: '#7e3e4b' }}>
              Building end-to-end solutions with modern tech stacks — from enterprise workflows to AI-powered applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <IcCode />
              </a>
              <a href={maramResume} download="MaramSaidi-Resume-CV.pdf" className="btn-ghost">
                <IcDownload />
                Download CV
              </a>
            </div>
          </div>
          <div className="hidden sm:block justify-self-center" aria-hidden="true">
            <div className="hero-arch">
              <div className="hero-arch-inner">
                <img src={maramProfileImage} alt="Maram Saidi" className="hero-arch-image" />
                <span className="hero-monogram-sub">Software Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={120}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '4', label: 'Internships', sub: 'Real-company experience' },
            { value: '3', label: 'Featured Projects', sub: 'Production delivered' },
            { value: 'AWS', label: 'AI Cert', sub: 'In progress' },
            { value: '4', label: 'Languages', sub: ' (3 Spoken fluently)' },
          ].map((m, i) => (
            <Card key={i} className="flex flex-col items-center text-center gap-1 !py-5">
              <div className="stat-number">
                {m.value}
              </div>
              <div className="text-xs font-semibold" style={{ color: '#4a2730' }}>
                {m.label}
              </div>
              <div className="text-xs" style={{ color: '#a98b8b' }}>
                {m.sub}
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={180}>
        <div className="mt-12 pt-10" style={{ borderTop: '1px solid #d1a19a' }}>
          <div className="grid lg:grid-cols-3 gap-5">
            <Card className="lg:col-span-2">
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(74,39,48,0.75)' }}>
                Final-year Software Engineering student (<em>Génie Logiciel et Systèmes d'Information</em>) with
                hands-on experience delivering full-stack, DevOps, and AI-powered solutions in real company
                environments. I've shipped production software at 4 companies across the software, telecom,
                consulting, and banking sectors.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(74,39,48,0.75)' }}>
                Currently pursuing the AWS Generative AI certification to deepen my cloud and AI expertise.
                I'm drawn to the intersection of solid engineering practice and intelligent systems.
              </p>
            </Card>
            <Card>
              <div className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: '#a98b8b' }}>
                Focus Areas
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Full-Stack Dev', 'DevOps', 'Generative AI', 'Cloud', 'Agile'].map(f => (
                  <SkillPill key={f} label={f} />
                ))}
              </div>
            </Card>

          </div>
          <Card
            className="mt-5 overflow-hidden"
            style={{ background: '#f7dfd9', borderColor: 'rgba(166,90,104,0.18)', padding: '0' }}
          >
            <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-0 items-center min-h-[400px]">
              <div className="flex h-full items-center justify-center p-8 md:p-10">
                <div className="max-w-xl text-center md:text-left">
                  <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide uppercase mb-4 md:justify-start" style={{ color: '#a65a68' }}>
                    <IcStar />
                    <span>Professional Development · 2026</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold leading-tight mb-3" style={{ color: '#4a2730' }}>
                    International Winter School — Turkey
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8a6b6b' }}>
                    Selected for Soft Skills &amp; Professional Development
                  </p>
                </div>
              </div>
              <div className="flex h-full items-center justify-center bg-[#f9f0ee] p-4 md:p-6">
                <img
                  src={winterSchoolCertificate}
                  alt="International Winter School participation certificate"
                  className="w-full max-w-[520px] rounded-lg border border-dashed bg-white object-contain shadow-sm"
                  style={{ borderColor: 'rgba(166,90,104,0.3)' }}
                />
              </div>
            </div>
          </Card>
        </div>
      </FadeIn>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-16" style={{ borderTop: '1px solid #d1a19a' }}>
      <FadeIn>
        <SectionLabel label="Skills &amp; Competencies" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(SKILLS).map(([cat, items], i) => (
            <FadeIn key={cat} delay={i * 45} className="h-full">
              <Card className="h-full" style={{ borderTop: '2px solid #f7dfd9' }}>
                <div className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: '#a65a68' }}>
                  {cat}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(s => (
                    <SkillPill key={s} label={s} />
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="py-16" style={{ borderTop: '1px solid #d1a19a' }}>
      <FadeIn>
        <SectionLabel label="Professional Experience" />
      </FadeIn>
      <div className="relative">
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{ left: '11px', background: '#ebcfc6' }}
        />
        <div className="flex flex-col gap-6">
          {EXPERIENCES.map((exp, i) => (
            <FadeIn key={i} delay={i * 70}>
              <div className="relative pl-9">
                <div
                  className="absolute top-5 w-3 h-3 rounded-full border-2"
                  style={{
                    left: '5px',
                    background: exp.current ? '#a65a68' : '#fff8f5',
                    borderColor: exp.current ? '#a65a68' : '#e0b9b0',
                  }}
                />
                <Card className="!p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="text-sm font-bold" style={{ color: '#4a2730' }}>
                        {exp.company}
                        {exp.current && (
                          <span
                            className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full align-middle"
                            style={{ background: '#f7dfd9', color: '#a65a68' }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: '#a98b8b' }}>
                        {exp.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs flex-shrink-0" style={{ color: '#8a6b6b' }}>
                      <IcClock />
                      {exp.period}
                    </div>
                  </div>
                  <div className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: '#a65a68' }}>
                    {exp.role}
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-xs leading-relaxed flex items-start gap-2" style={{ color: 'rgba(74,39,48,0.65)' }}>
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: '#a65a68' }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                  {exp.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map(s => (
                        <TechPill key={s} label={s} />
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  p,
  delay = 0,
  academic = false,
}: {
  p: (typeof PROF_PROJECTS)[0] | (typeof ACADEMIC_PROJECTS)[0]
  delay?: number
  academic?: boolean
}) {
  const ap = p as (typeof ACADEMIC_PROJECTS)[0]
  const pp = p as (typeof PROF_PROJECTS)[0]

  return (
    <FadeIn delay={delay} className="h-full">
      <Card
        className="flex flex-col gap-4 !p-5 h-full"
        style={academic ? { borderTop: '3px solid #f7dfd9' } : undefined}
      >
        {p.media === 'video' && <VideoSlot title={p.title} src={p.images[0]} />}
        
        {p.media === 'carousel' && p.images.length > 0 && <Carousel images={p.images} />}

        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <div className="text-sm font-bold truncate" style={{ color: '#4a2730' }}>
                  {p.title}
                </div>
                {academic && (
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{
                      background:
                        ap.type === 'Team Project'
                          ? '#f7dfd9'
                          : ap.type === 'Solo Project'
                            ? '#f9e4dd'
                            : '#f8ebe6',
                      color:
                        ap.type === 'Team Project'
                          ? '#a65a68'
                          : ap.type === 'Solo Project'
                            ? '#a9715e'
                            : '#8a6b6b',
                      border: `1px solid ${ap.type === 'Team Project' ? 'rgba(166,90,104,0.2)' : ap.type === 'Solo Project' ? 'rgba(169,113,94,0.2)' : '#ebcfc6'}`,
                    }}
                  >
                    {ap.type}
                  </span>
                )}
              </div>
              <div className="text-xs" style={{ color: '#a98b8b' }}>
                {'org' in pp ? pp.org : ap.subtitle}
              </div>
            </div>
          </div>

          <p className="text-xs leading-relaxed mb-3" style={{ color: '#8a6b6b' }}>
            {p.desc}
          </p>

          {academic && (
            <div className="rounded-lg p-3 mb-3" style={{ background: '#fbefea' }}>
              <span className="text-xs font-semibold" style={{ color: '#a65a68' }}>
                My role:{' '}
              </span>
              <span className="text-xs font-medium" style={{ color: '#a65a68' }}>
                {ap.role}
              </span>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: '#8a6b6b' }}>
                {ap.contribution}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {p.stack.map(s => (
              <TechPill key={s} label={s} />
            ))}
          </div>

          {academic && ap.teamSize && ap.teamSize > 1 && (
            <div className="flex items-center gap-1.5 mt-2 text-xs" style={{ color: '#a98b8b' }}>
              <IcUsers />
              {ap.teamSize} team members
            </div>
          )}
        </div>
      </Card>
    </FadeIn>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-16" style={{ borderTop: '1px solid #d1a19a' }}>
      <FadeIn>
        <SectionLabel label="Projects" />
      </FadeIn>

      <div className="mb-12">
        <FadeIn>
          <h3 className="text-sm font-semibold mb-5" style={{ color: '#4a2730' }}>
            Professional Work
          </h3>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-5">
          {PROF_PROJECTS.map((p, i) => (
            <ProjectCard key={i} p={p} delay={i * 70} />
          ))}
        </div>
      </div>

      <div>
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-sm font-semibold" style={{ color: '#4a2730' }}>
              Coursework &amp; Team Projects
            </h3>
            <span
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{ background: '#fbe9e3', color: '#a65a68', border: '1px solid rgba(166,90,104,0.2)' }}
            >
              Academic
            </span>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-5">
          {ACADEMIC_PROJECTS.map((p, i) => (
            <ProjectCard key={i} p={p} delay={i * 70} academic />
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="py-16" style={{ borderTop: '1px solid #d1a19a' }}>
      <FadeIn>
        <SectionLabel label="Education" />
        <div className="grid md:grid-cols-2 gap-5">
          <Card style={{ borderTop: '3px solid #a65a68' }}>
            <div className="flex items-start gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#f7dfd9', color: '#a65a68' }}
              >
                <IcBook />
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: '#4a2730' }}>
                  TEKUP University
                </div>
                <div className="text-xs" style={{ color: '#a98b8b' }}>
                  Tunis, Tunisia
                </div>
              </div>
            </div>
            <div className="text-sm font-semibold mb-0.5" style={{ color: '#4a2730' }}>
              Engineer's Degree in Software Engineering
            </div>
            <div className="text-xs mb-1" style={{ color: '#a98b8b' }}>
              Génie Logiciel et Systèmes d'Information
            </div>
            <span
              className="text-xs font-medium px-2.5 py-0.5 rounded-full inline-flex mb-5"
              style={{ background: '#f7dfd9', color: '#a65a68' }}
            >
              2024 – Present · 4th Year
            </span>
            <div className="text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: '#a98b8b' }}>
              Relevant Coursework
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                'DevOps Engineering',
                'AI & ML',
                'Big Data & BI',
                'Software Architecture',
                'Generative AI & Image Processing',
                'Advanced Data Structures & Algorithms',
                'Object-Oriented Programming',
                'Advanced Database Systems',
                'Web Development',
                'UML Concepts',
              ].map(c => (
                <SkillPill key={c} label={c} />
              ))}
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#fbefea', color: '#8a6b6b' }}
              >
                <IcBook />
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: '#4a2730' }}>
                  ISTIC
                </div>
                <div className="text-xs leading-relaxed" style={{ color: '#a98b8b' }}>
                  Higher Institute of Information Technologies and Communication, Tunisia
                </div>
              </div>
            </div>
            <div className="text-sm font-semibold mb-1" style={{ color: '#4a2730' }}>
              Computer Science Bachelor
            </div>
            <span
              className="text-xs font-medium px-2.5 py-0.5 rounded-full inline-flex mb-5"
              style={{ background: '#fbefea', color: '#8a6b6b', border: '1px solid #ebcfc6' }}
            >
              2021 – 2024
            </span>
            <div className="text-xs font-semibold tracking-wide uppercase mb-2" style={{ color: '#a98b8b' }}>
              Relevant Coursework
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Data Structures & Algorithms',
                'Object-Oriented Programming',
                'Database Systems',
                'Operating Systems',
                'Web Development',
                'UML Concepts',
              ].map(c => (
                <SkillPill key={c} label={c} />
              ))}
            </div>
          </Card>
        </div>
      </FadeIn>
    </section>
  )
}

function Certifications() {
  const [isBadgeExpanded, setIsBadgeExpanded] = useState(false)

  useEffect(() => {
    if (!isBadgeExpanded) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsBadgeExpanded(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isBadgeExpanded])

  return (
    <section id="certifications" className="py-16" style={{ borderTop: '1px solid #d1a19a' }}>
      <FadeIn>
        <SectionLabel label="Certifications" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="sm:col-span-2 lg:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 !p-6">
            <div className="text-center sm:text-left">
              <div className="text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: '#a9715e' }}>
                Amazon Web Services
              </div>
              <div className="text-xl font-bold mb-1" style={{ color: '#4a2730' }}>
                AWS Training Badge
              </div>
              <div className="text-sm" style={{ color: '#8a6b6b' }}>
                Training completed
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsBadgeExpanded(true)}
              aria-label="View AWS Training Badge larger"
              className="shrink-0 cursor-zoom-in"
            >
              <img
                src={awsTrainingBadge}
                alt="AWS Training Badge"
                className="w-44 h-44 sm:w-52 sm:h-52 object-contain"
              />
            </button>
          </Card>

          {/* Future certification placeholders are kept here for later use.
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="rounded-xl flex flex-col items-center text-center gap-3 py-6 px-6"
              style={{
                background: '#fff8f5',
                border: '1.5px dashed #ebcfc6',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: '#fbefea' }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#e0b9b0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium" style={{ color: '#e0b9b0' }}>
                  Future Certification
                </div>
                <div className="text-xs mt-1" style={{ color: '#ebcfc6' }}>
                  — · —
                </div>
              </div>
            </div>
          ))}
          */}
        </div>
      </FadeIn>
      {isBadgeExpanded &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="AWS Training Badge"
            onClick={() => setIsBadgeExpanded(false)}
            style={{ background: 'rgba(10,12,20,0.92)' }}
          >
            <button
              type="button"
              onClick={() => setIsBadgeExpanded(false)}
              aria-label="Close enlarged AWS Training Badge"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-white"
              style={{ background: 'rgba(255,255,255,0.14)' }}
            >
              <IcX />
            </button>
            <img
              src={awsTrainingBadge}
              alt="AWS Training Badge"
              onClick={event => event.stopPropagation()}
              className="max-h-full max-w-full rounded-lg object-contain"
            />
          </div>,
          document.body,
        )}
    </section>
  )
}

function Languages() {
  return (
    <section id="languages" className="py-16" style={{ borderTop: '1px solid #d1a19a' }}>
      <FadeIn>
        <SectionLabel label="Languages" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LANG_DATA.map((l, i) => (
            <FadeIn key={l.lang} delay={i * 55} className="h-full">
              <Card className="!py-5 h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-bold" style={{ color: '#4a2730' }}>
                    {l.lang}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: l.pct === 100 ? '#f7dfd9' : '#fbefea',
                        color: l.pct === 100 ? '#a65a68' : '#8a6b6b',
                        border: `1px solid ${l.pct === 100 ? 'rgba(166,90,104,0.2)' : '#ebcfc6'}`,
                      }}
                    >
                      {l.level}
                    </span>
                    {l.source && (
                      <span className="text-[10px] font-medium" style={{ color: '#a98b8b' }}>
                        {l.source}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full rounded-full overflow-hidden h-1" style={{ background: '#f3e1dc' }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${l.pct}%`, background: '#a65a68' }}
                  />
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-16" style={{ borderTop: '1px solid #d1a19a' }}>
      <FadeIn>
        <SectionLabel label="Contact" />
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="text-sm font-bold mb-4" style={{ color: '#4a2730' }}>
              Get in touch
            </div>
            <div className="space-y-3">
              <a
                href="mailto:saiidimarram@gmail.com"

                className="flex items-center gap-3 text-sm transition-colors"
                style={{ color: '#8a6b6b' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#a65a68')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8a6b6b')}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#f7dfd9', color: '#a65a68' }}
                >
                  <IcMail />
                </div>
                saiidimarram@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/saidi-maram-437357253"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm transition-colors"
                style={{ color: '#8a6b6b' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#a65a68')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8a6b6b')}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: '#f7dfd9', color: '#a65a68' }}
                >
                  <IcLinkedin />
                </div>
                linkedin.com/in/saidi-maram
              </a>
            </div>
          </Card>
          <div className="wine-card relative overflow-hidden rounded-xl p-6">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center wine-icon">
                  <IcBriefcase />
                </div>
                <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#e2b5a0' }}>
                  Availability
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold whitespace-nowrap wine-pill">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#e2b5a0' }} />
                Open to opportunities
              </span>
            </div>
            <div className="font-serif text-3xl mb-2" style={{ color: '#fbefea' }}>
              Let&apos;s collaborate!
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(251,239,234,0.75)' }}>
              Eager to contribute to a team building useful software and reliable digital products, while growing
              through hands-on engineering work.
            </p>
            <div className="pt-4" style={{ borderTop: '1px solid rgba(226,181,160,0.3)' }}>
              <div className="text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: '#e2b5a0' }}>
                Areas of interest
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Software Engineering', 'DevOps', 'Generative AI'].map(focus => (
                  <span key={focus} className="text-[11px] font-medium px-2.5 py-1 rounded-full wine-pill">
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid #d1a19a', color: '#a98b8b' }}
        >
          <span>© Maram Saidi. All rights reserved.</span>
          
        </div>
      </FadeIn>
    </section>
  )
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({
  active,
  onClose,
}: {
  active: string
  onClose?: () => void
}) {
  const socials = [
    { icon: <IcLinkedin />, href: 'https://linkedin.com/in/saidi-maram-437357253', title: 'LinkedIn' },
    { icon: <IcGithub />, href: 'https://github.com/saidimaram', title: 'GitHub' },
  ]
  return (
    <div className="sidebar-wine flex flex-col h-full">
      <div className="px-6 py-7 text-center" style={{ borderBottom: '1px solid rgba(226,181,160,0.25)' }}>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="lg:hidden absolute right-3 top-3 p-1 rounded-md"
            style={{ color: '#e2b5a0' }}
          >
            <IcX />
          </button>
        )}
        <ProfileAvatar className="sidebar-monogram mx-auto mb-3" />
        <div className="font-serif text-2xl tracking-wide" style={{ color: '#fbefea' }}>
          Maram Saidi
        </div>
        <div className="text-[11px] tracking-[0.25em] uppercase mt-1" style={{ color: '#e2b5a0' }}>
          Portfolio
        </div>
      </div>

      <nav className="flex-1 px-4 py-5 overflow-y-auto" aria-label="Sections">
        <div className="space-y-0.5">
          {NAV_ITEMS.map(item => {
            const isActive = active === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => onClose?.()}
                aria-current={isActive ? 'true' : undefined}
                className={`nav-item flex items-center gap-3 w-full px-3 py-2.5 text-sm text-left ${isActive ? 'is-active' : ''}`}
              >
                <span style={{ opacity: isActive ? 1 : 0.65 }}>{item.icon}</span>
                {item.label}
              </a>
            )
          })}
        </div>
      </nav>

      <div className="px-6 py-5" style={{ borderTop: '1px solid rgba(226,181,160,0.25)' }}>
        <div className="flex items-center justify-center gap-3">
          {socials.map(({ icon, href, title }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              title={title}
              aria-label={title}
              className="social-btn w-9 h-9 rounded-full flex items-center justify-center"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState('about')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const ids = NAV_ITEMS.map(n => n.id)
    const obs = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 },
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  // Close mobile nav on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setMobileOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <div
      className="portfolio-background"
      style={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(251, 239, 234, 0.68), rgba(251, 239, 234, 0.68)), url("${silvaryPinkWallpaper}")`,
      }}
    >
      {/* Desktop sidebar */}
      <aside
        className="fixed inset-y-0 left-0 w-64 z-30 hidden lg:block"
      >
        <Sidebar active={active} />
      </aside>

      {/* Mobile top bar */}
      <header
        className="topbar-wine fixed top-0 left-0 right-0 h-14 z-30 flex items-center justify-between px-4 lg:hidden"
      >
        <div className="flex items-center gap-2.5">
          <ProfileAvatar size="small" className="border border-[#e2b5a0]" />
          <span className="font-serif text-lg" style={{ color: '#fbefea' }}>
            Maram Saidi
          </span>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="p-2 transition-colors"
          style={{ color: '#e2b5a0' }}
        >
          <IcMenu />
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(74,39,48,0.25)' }}
            onClick={() => setMobileOpen(false)}
          />
          <aside
            className="absolute inset-y-0 left-0 w-72"
          >
            <Sidebar active={active} onClose={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      {/* Content */}
      <div className="lg:pl-64 pt-14 lg:pt-0">
        <main id="main" className="max-w-4xl mx-auto px-5 sm:px-8">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Languages />
          <Contact />
        </main>
      </div>
    </div>
  )
}
