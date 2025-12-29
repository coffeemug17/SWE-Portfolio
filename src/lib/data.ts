export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export const courses = [
    "Data Structures and Algorithms", 
    "Object-Oriented Programming", 
    "Software Construction",
    "Distributed Systems",
    "Database Systems",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning", 
    "Deep Learning"
  ];

export const IMPACT_METRICS = [
  { label: "Production Incidents", value: "-40%", context: "at Clio" },
  { label: "Build/Test Cycles", value: "40% Faster", context: "at LGI" },
  { label: "Signal Lookup", value: "50% Reduction", context: "at MacDon" },
  { label: "Test Coverage", value: "90%", context: "at Clio" },
];

export const EXPERIENCE = [
  {
    company: "Emcon Services",
    role: "Software Developer (Freelance)",
    period: "Sept 2025 - Dec 2025",
    location: "Vancouver, BC",
    description: "Replaced a manual workflow for 100+ employees by building a Django/React claims portal with secure DigitalOcean Spaces uploads.",
    highlights: [
      "Architected an 8-model PostgreSQL schema for members and claims.",
      "Orchestrated production deployment using Docker multi-stage builds and CI/CD automation."
    ],
    stack: ["Django", "React", "PostgreSQL", "DigitalOcean", "Docker"]
  },
  {
    company: "Clio",
    role: "Software Developer Co-op",
    period: "Sept 2024 - May 2025",
    location: "Vancouver, BC",
    description: "Engineered 12 reusable Angular/Turbo Stream components, decreasing average feature-build time by 20%.",
    highlights: [
      "Integrated Launch Darkly feature flags, cutting weekly production incidents from 5 to 3.",
      "Refactored 6 Rails service objects to reduce technical debt by 20%.",
      "Increased test coverage from 60% to 90% via 50+ RSpec/Capybara tests."
    ],
    stack: ["Ruby on Rails", "Angular", "RSpec", "Turbo Stream", "Launch Darkly"]
  },
  {
    company: "LGI Healthcare Solutions",
    role: "Software Developer in Test Co-op",
    period: "Feb 2024 - Sept 2024",
    location: "Remote",
    description: "Shipped 70+ Selenium/C# scripts, raising code coverage from 40% to 65%.",
    highlights: [
      "Incorporated 45+ E2E tests into Azure DevOps CI/CD pipeline, cutting build cycles by 40%.",
      "Doubled release cadence from monthly to biweekly."
    ],
    stack: ["C#", "Selenium", "Azure DevOps", "CI/CD"]
  },
  {
    company: "MacDon Industries",
    role: "Software Engineer Co-op",
    period: "May 2022 - Sept 2022",
    location: "Winnipeg, MB",
    description: "Developed Python-based scraper modules to standardize 200 raw CAN signal files into DBC format.",
    highlights: [
      "Halved signal lookup time from 10 to 5 minutes per engineer session.",
      "Constructed a Django-based web UI, cutting full dataset processing by 30%."
    ],
    stack: ["Python", "Django", "GTest", "CAN bus"]
  }
];

export const PROJECTS = [
  {
    title: "LinkedUp",
    tech: ["React", "ExpressJS", "MongoDB", "NodeJS", "GitHub Actions"],
    description: "Built a MERN-stack social/job-network prototype with sub-2s local page loads and JWT-based auth.",
  },
  {
    title: "Workflow Wiz",
    tech: ["Django", "PostgreSQL", "AJAX", "Bootstrap"],
    description: "Crafted a project management app with real-time chat via Django Channels and role-based access.",
  }
];

export const SKILLS = {
  languages: ["Ruby", "Python", "C#", "C++", "Java", "JavaScript", "TypeScript", "SQL"],
  frameworks: ["NextJS", "Rails", "Django", "React", "Angular", "Express", "TailwindCSS"],
  tools: ["Docker", "AWS", "Azure", "DigitalOcean", "CI/CD", "Git"]
};