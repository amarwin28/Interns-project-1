import type { TeamMember, ExpertiseItem, ProcessStep, TechnologyItem } from '../types/team';

export const teamMembers: TeamMember[] = [
  {
    id: 'member-1',
    name: 'Member One',
    department: 'Computer Science & Engineering',
    year: 'Final Year (2026)',
    role: 'Frontend Developer',
    description: 'Specializes in crafting responsive, high-performance UI components with React, TypeScript, and modern CSS architecture. Passionate about glassmorphic animations and accessible web interfaces.',
    skills: ['React', 'TypeScript', 'CSS3/HTML5', 'Framer Motion', 'Tailwind CSS', 'UI/UX Design'],
    avatarGrad: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    avatarIcon: 'Layout',
    initials: 'M1',
    socials: {
      github: '#',
      linkedin: '#',
      email: 'member1@example.com'
    }
  },
  {
    id: 'member-2',
    name: 'Member Two',
    department: 'Information Technology',
    year: 'Final Year (2026)',
    role: 'Frontend Developer',
    description: 'Focuses on client-side state management, responsive web architecture, interactive dashboards, and design system integration with modern web standards.',
    skills: ['React', 'JavaScript (ES6+)', 'State Management', 'Vite', 'Responsive Web Design', 'Git'],
    avatarGrad: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    avatarIcon: 'Code',
    initials: 'M2',
    socials: {
      github: '#',
      linkedin: '#',
      email: 'member2@example.com'
    }
  },
  {
    id: 'member-3',
    name: 'Member Three',
    department: 'Computer Engineering',
    year: 'Final Year (2026)',
    role: 'Project Manager / Developer / Tester',
    description: 'Coordinates sprint planning, system architecture design, end-to-end integration testing, and quality assurance while writing production-ready frontend & backend code.',
    skills: ['Project Management', 'Agile / Scrum', 'End-to-End Testing', 'React', 'Node.js', 'QA Automation'],
    avatarGrad: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)',
    avatarIcon: 'ShieldCheck',
    initials: 'M3',
    socials: {
      github: '#',
      linkedin: '#',
      email: 'member3@example.com'
    }
  },
  {
    id: 'member-4',
    name: 'Member Four',
    department: 'Computer Science & Engineering',
    year: 'Final Year (2026)',
    role: 'Backend Developer',
    description: 'Engineers robust REST APIs, microservices, authentication systems, server-side business logic, and asynchronous data processing pipelines.',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'System Architecture', 'JSON / WebSockets', 'Middleware'],
    avatarGrad: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    avatarIcon: 'Server',
    initials: 'M4',
    socials: {
      github: '#',
      linkedin: '#',
      email: 'member4@example.com'
    }
  },
  {
    id: 'member-5',
    name: 'Member Five',
    department: 'Artificial Intelligence & Data Science',
    year: 'Final Year (2026)',
    role: 'Database & FastAPI Developer',
    description: 'Expert in high-performance Python services with FastAPI, database schema design, indexing, AI model integration, and asynchronous backend services.',
    skills: ['FastAPI', 'Python', 'PostgreSQL', 'MongoDB', 'Database Optimization', 'AI Integration'],
    avatarGrad: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    avatarIcon: 'Database',
    initials: 'M5',
    socials: {
      github: '#',
      linkedin: '#',
      email: 'member5@example.com'
    }
  }
];

export const expertiseData: ExpertiseItem[] = [
  {
    id: 'exp-1',
    title: 'Frontend Development',
    description: 'Building ultra-fast, responsive, pixel-perfect user interfaces with React, TypeScript, and modern CSS animations.',
    iconName: 'Monitor',
    tags: ['React', 'TypeScript', 'CSS Glassmorphism', 'Responsive UI']
  },
  {
    id: 'exp-2',
    title: 'Backend Development',
    description: 'Architecting scalable server-side systems, RESTful microservices, and asynchronous event streams.',
    iconName: 'Server',
    tags: ['Node.js', 'Express.js', 'System Architecture', 'Security']
  },
  {
    id: 'exp-3',
    title: 'Database Management',
    description: 'Designing structured relational and NoSQL schemas with indexing, data integrity, and high-speed query optimization.',
    iconName: 'Database',
    tags: ['Relational & NoSQL', 'Schema Design', 'Data Security', 'ORM']
  },
  {
    id: 'exp-4',
    title: 'API Development',
    description: 'Creating well-documented, type-safe REST APIs and WebSocket layers connecting frontends to backend services.',
    iconName: 'Cpu',
    tags: ['REST APIs', 'Swagger/OpenAPI', 'WebSockets', 'Type Safety']
  },
  {
    id: 'exp-5',
    title: 'AI / FastAPI Integration',
    description: 'Deploying high-throughput Python backends powered by FastAPI to integrate AI/ML models into web solutions.',
    iconName: 'Sparkles',
    tags: ['FastAPI', 'Python', 'AI Integration', 'Async Core']
  },
  {
    id: 'exp-6',
    title: 'Testing & Quality Assurance',
    description: 'Ensuring bug-free stability through unit testing, integration tests, dynamic component auditing, and code reviews.',
    iconName: 'CheckCircle2',
    tags: ['Unit Testing', 'E2E Testing', 'Code Quality', 'Bug Hunting']
  },
  {
    id: 'exp-7',
    title: 'Project Management',
    description: 'Structuring project roadmaps, managing deliverables, sprint backlogs, and ensuring seamless team alignment.',
    iconName: 'Kanban',
    tags: ['Agile Workflow', 'Sprint Planning', 'Git Flow', 'Technical Docs']
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Ideate',
    description: 'We analyze problem statements, define business goals, map user journeys, and establish technical feasibility.',
    details: ['Requirements Analysis', 'Architecture Planning', 'Scope Definition']
  },
  {
    step: '02',
    title: 'Design',
    description: 'We craft intuitive wireframes, visual prototypes, and component design systems focused on user experience.',
    details: ['UI/UX Prototyping', 'Component Specs', 'Design System']
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Our engineering team writes clean, modular, production-ready code with modern frontend and backend tech.',
    details: ['Clean Code Principles', 'Type-Safe Architecture', 'Feature Modules']
  },
  {
    step: '04',
    title: 'Test',
    description: 'We perform thorough testing, bug auditing, performance optimizations, and code reviews before release.',
    details: ['Component Audits', 'API Validation', 'Cross-Browser Testing']
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'We package applications, configure production builds, launch live apps, and maintain steady updates.',
    details: ['Vite Production Build', 'Performance Tuning', 'Final Delivery']
  }
];

export const technologiesData: TechnologyItem[] = [
  { name: 'React', category: 'Frontend', iconName: 'Atom', badgeColor: '#61dafb', description: 'Component-Driven UI Framework' },
  { name: 'TypeScript', category: 'Frontend', iconName: 'FileCode2', badgeColor: '#3178c6', description: 'Static Typing for Scalable Code' },
  { name: 'Vite', category: 'Frontend', iconName: 'Zap', badgeColor: '#646cff', description: 'Next-Generation Frontend Tooling' },
  { name: 'JavaScript', category: 'Frontend', iconName: 'Code', badgeColor: '#f7df1e', description: 'Core Web Scripting Engine' },
  { name: 'Node.js', category: 'Backend & API', iconName: 'Server', badgeColor: '#339933', description: 'Asynchronous Server Runtime' },
  { name: 'Express.js', category: 'Backend & API', iconName: 'Layers', badgeColor: '#ffffff', description: 'Flexible Web Application Framework' },
  { name: 'FastAPI', category: 'Backend & API', iconName: 'Rocket', badgeColor: '#009688', description: 'High-Speed Python Web Framework' },
  { name: 'Python', category: 'Backend & API', iconName: 'Terminal', badgeColor: '#3776ab', description: 'Versatile Programming & AI Engine' },
  { name: 'Database', category: 'Database', iconName: 'Database', badgeColor: '#4479a1', description: 'Structured & Relational Storage' },
  { name: 'Git', category: 'Tools & Version Control', iconName: 'GitBranch', badgeColor: '#f05032', description: 'Distributed Version Control System' },
  { name: 'GitHub', category: 'Tools & Version Control', iconName: 'Github', badgeColor: '#ffffff', description: 'Collaborative Code Repository & Management' }
];

export const teamObjectivePoints = [
  'Build modern, fast, and responsive web applications with state-of-the-art frameworks.',
  'Develop reliable backend systems capable of processing high-concurrency requests.',
  'Work with structured and secure database architectures to ensure data safety.',
  'Integrate AI-powered technologies & FastAPI microservices when required.',
  'Maintain clean, documented, and scalable code structures for long-term viability.',
  'Deliver high-quality software through disciplined teamwork and continuous testing.'
];
