export interface StatItem {
  num: string
  label: string
}

export const stats: StatItem[] = [
  { num: '7+', label: 'Years Experience' },
  { num: '10+', label: 'Projects Delivered' },
  { num: '4+', label: 'Integrations' },
  { num: '3', label: 'Companies' },
]

export interface ContactItem {
  icon: string
  label: string
  href?: string
}

export const contactItems: ContactItem[] = [
  { icon: '📞', label: '+91 9599337311', href: 'tel:+919599337311' },
  { icon: '✉', label: 'riteshkumar.coder@gmail.com', href: 'mailto:riteshkumar.coder@gmail.com' },
  { icon: '📍', label: 'New Delhi, India' },
  { icon: '🌐', label: 'Open to Remote / Freelance' },
]

export const marqueeSkills: string[] = [
  'Laravel',
  'PHP',
  'MySQL',
  'REST API',
  'React.js',
  'XERO',
  'Linux Server',
  'Git',
  'Firebase',
  'cPanel',
  'MongoDB',
  'NodeJS',
]

export interface SkillGroup {
  label: string
  tags: { name: string; highlight?: boolean }[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: '⚙ Backend',
    tags: [
      { name: 'Laravel', highlight: true },
      { name: 'PHP (Core/Adv)', highlight: true },
      { name: 'CodeIgniter 3' },
      { name: 'NodeJS' },
      { name: 'REST API' },
    ],
  },
  {
    label: '🗄 Database',
    tags: [
      { name: 'MySQL', highlight: true },
      { name: 'MongoDB' },
    ],
  },
  {
    label: '🖥 Frontend',
    tags: [
      { name: 'React.js' },
      { name: 'Redux' },
      { name: 'AngularJS' },
      { name: 'JavaScript' },
      { name: 'jQuery' },
      { name: 'Bootstrap' },
      { name: 'HTML / CSS' },
    ],
  },
  {
    label: '🔧 DevOps & Tools',
    tags: [
      { name: 'cPanel', highlight: true },
      { name: 'Linux Server', highlight: true },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Bitbucket' },
      { name: 'Jira' },
      { name: 'Monday.com' },
      { name: 'Trello' },
    ],
  },
]

export interface Project {
  name: string
  desc: string
  link?: { href: string; label: string }
}

export interface Experience {
  period: string
  company: string
  location: string
  role: string
  stack: string
  desc: string
  projects: Project[]
}

export const experiences: Experience[] = [
  {
    period: 'Jul 2022 — Present',
    company: 'Brain Technosys Pvt Ltd',
    location: 'New Delhi, India',
    role: 'Senior Web Developer',
    stack: '🇦🇺 Australian Client · Laravel, MySQL',
    desc: 'Managing end-to-end software product lifecycle — from understanding client requirements to deploying on production. Responsible for multiple database management, issue resolution with zero downtime, and driving new feature development.',
    projects: [
      {
        name: 'QuickB2B — Main Platform',
        desc: 'Complete CRM for managing Wholesale & Retail Customers, Inventory, Orders, Purchase Orders, Delivery Routes, Stock & QPOD management.',
        link: { href: 'https://go.quickb2b.com/', label: '↗ go.quickb2b.com' },
      },
      {
        name: 'QuickB2B — Access Portal',
        desc: 'Admin panel for managing all QuickB2B client credentials and feature access control.',
        link: { href: 'https://access.quickb2b.com/', label: '↗ access.quickb2b.com' },
      },
    ],
  },
  {
    period: 'Jan 2020 — Jun 2022',
    company: 'Invoidea Technology Pvt Ltd',
    location: 'New Delhi, India',
    role: 'PHP Developer',
    stack: 'Laravel, React, MySQL',
    desc: 'Full-stack development across e-commerce and SaaS platforms — integrating payment gateways, shipping APIs, and building dynamic frontends with React/Redux.',
    projects: [
      {
        name: 'PapaChina — B2B E-Commerce',
        desc: 'Bulk-order reseller platform. Built backend features, integrated PayPal, Stripe & BillPlz payment gateways, and handled data parsing.',
        link: { href: 'https://www.papachina.com/', label: '↗ papachina.com' },
      },
      {
        name: 'WooMarketplace',
        desc: 'Built USPS shipping integration, age-restricted product categories, and payment integrations (PayPal, Stripe).',
        link: { href: 'https://woomarketplace.com/', label: '↗ woomarketplace.com' },
      },
      {
        name: 'SupportNanny — CRM/HRM System',
        desc: 'React/Redux frontend for a full CRM, HRM, and e-commerce management platform. API integration and theme development.',
      },
    ],
  },
  {
    period: 'Oct 2018 — Oct 2019',
    company: 'Webdukes Technology Pvt Ltd',
    location: 'New Delhi, India',
    role: 'PHP Developer',
    stack: 'CodeIgniter, AngularJS, MySQL',
    desc: 'Backend development and feature design for e-commerce and real estate platforms, working directly with client requirements.',
    projects: [
      {
        name: 'DiscountLulu — E-Commerce',
        desc: 'New feature development and continuous updates using AngularJS and CodeIgniter.',
      },
      {
        name: 'Aureal.in — Real Estate',
        desc: 'Admin dashboard for property listings and website configuration management. User inquiry system development.',
      },
    ],
  },
]

export interface Integration {
  name: string
  category: string
}

export const integrations: Integration[] = [
  { name: 'Stripe', category: 'Payment Gateway' },
  { name: 'PayPal', category: 'Payment Gateway' },
  { name: 'Paytm', category: 'Payment Gateway' },
  { name: 'BillPlz', category: 'Payment Gateway' },
  { name: 'XERO', category: 'Accounting' },
  { name: 'MYOB', category: 'Accounting' },
  { name: 'Business Central', category: 'ERP / Accounting' },
  { name: 'ABM', category: 'Accounting' },
  { name: 'PandaDoc', category: 'Digital Signature' },
  { name: 'DocuSign', category: 'Digital Signature' },
  { name: 'Firebase', category: 'Push Notifications' },
  { name: 'Pusher', category: 'Realtime Broadcasting' },
  { name: 'USPS Shipping', category: 'Logistics API' },
]

export interface EducationItem {
  inst: string
  degree: string
  year: string
}

export const education: EducationItem[] = [
  { inst: 'IGNOU', degree: 'Master of Computer Applications (MCA)', year: '2018 – 2021' },
  { inst: 'IGNOU', degree: 'Bachelor of Computer Applications (BCA)', year: '2014 – 2018' },
  { inst: 'BSEB · Science Stream', degree: 'Higher Secondary (XII)', year: 'Bihar School of Examination' },
]

export const profile = {
  name: 'Ritesh Kumar',
  initials: 'RK.',
  title: 'Senior Laravel Developer',
  tag: 'Senior Laravel Developer · Available for Freelance',
  email: 'riteshkumar.coder@gmail.com',
  phone: '+91 9599337311',
  location: 'New Delhi, India',
  heroSub:
    '7+ years building high-performance web applications, B2B SaaS platforms, and API integrations. Specialist in Laravel, MySQL, and production-grade deployments.',
}
