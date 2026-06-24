export const siteConfig = {
  name: "Yasar Ameen H N",
  role: "Agentic AI Developer | Full-Stack Engineer",
  tagline: "Building agentic AI systems, RAG pipelines, and full-stack AI products.",
  email: "yasarameenhnise2025@gmail.com",
  phone: "+91 7022388449",
  location: "Bengaluru, India",
  github: "https://github.com/yasarameenhn",
  linkedin: "https://www.linkedin.com/in/yasar-ameen-965385201",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  heading: "YASAR AMEEN H N",
  subheading: "Agentic AI Developer | Full-Stack Engineer",
  description:
    "I build production-grade agentic AI systems, RAG pipelines, and full-stack applications with LangChain, LangGraph, FastAPI, React, and vector databases.",
  primaryCta: { label: "View Projects", href: "#projects" },
  secondaryCta: { label: "Download Resume", href: siteConfig.resumeUrl },
  scrollHint: "Scroll to explore",
};

export const aboutContent = {
  label: "01 / ABOUT",
  heading: "About Me",
  bio: "Information Science Engineer with hands-on experience in Generative AI development, Agentic AI systems, RAG pipelines, and full-stack application engineering. I work across Python, LangChain, LangGraph, FastAPI, React, and vector databases to ship practical AI products with strong prompt engineering, REST APIs, guardrails, and evaluation workflows.",
  focusAreas: [
    "Agentic AI Systems",
    "RAG Pipelines",
    "Full-Stack AI Apps",
    "Prompt Engineering",
  ],
  certifications: [
    "Get Started with AI Agent Development on Azure - Microsoft Learn",
    "Introduction to Generative AI and Agents - Microsoft Learn",
    "Introduction to AI Concepts - Microsoft Learn",
    "Java Basic - HackerRank",
    "SQL Basic, Intermediate, Advanced - HackerRank",
  ],
};

export type Skill = {
  name: string;
  category: string;
};

export const skills: Skill[] = [
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "LangChain", category: "AI Frameworks" },
  { name: "LangGraph", category: "AI Frameworks" },
  { name: "HuggingFace", category: "AI Frameworks" },
  { name: "LlamaIndex", category: "AI Frameworks" },
  { name: "Scikit-learn", category: "AI Frameworks" },
  { name: "TensorFlow", category: "AI Frameworks" },
  { name: "Gemini API", category: "Generative AI" },
  { name: "Gemini Vision API", category: "Generative AI" },
  { name: "LLMs", category: "Generative AI" },
  { name: "RAG Pipelines", category: "Generative AI" },
  { name: "Prompt Engineering", category: "Generative AI" },
  { name: "Multi-Agent Systems", category: "Generative AI" },
  { name: "NLP", category: "Generative AI" },
  { name: "React 18", category: "Frontend & Backend" },
  { name: "Vite", category: "Frontend & Backend" },
  { name: "TailwindCSS", category: "Frontend & Backend" },
  { name: "FastAPI", category: "Frontend & Backend" },
  { name: "REST APIs", category: "Frontend & Backend" },
  { name: "Streamlit", category: "Frontend & Backend" },
  { name: "Pydantic", category: "Frontend & Backend" },
  { name: "Pandas", category: "Data & Vector DBs" },
  { name: "MySQL", category: "Data & Vector DBs" },
  { name: "Pinecone", category: "Data & Vector DBs" },
  { name: "FAISS", category: "Data & Vector DBs" },
  { name: "Chroma", category: "Data & Vector DBs" },
  { name: "Qdrant", category: "Data & Vector DBs" },
  { name: "Microsoft Azure AI", category: "Cloud & DevOps" },
  { name: "AWS Bedrock", category: "Cloud & DevOps" },
  { name: "GCP", category: "Cloud & DevOps" },
  { name: "Docker", category: "Cloud & DevOps" },
  { name: "Git", category: "Cloud & DevOps" },
  { name: "CI/CD", category: "Cloud & DevOps" },
  { name: "Linux", category: "Cloud & DevOps" },
  { name: "ESP32 / IoT", category: "Hardware & IoT" },
  { name: "PII Filtering", category: "AI Safety" },
  { name: "Guardrails", category: "AI Safety" },
  { name: "Agent Evaluation", category: "AI Safety" },
];

export const skillsContent = {
  label: "02 / SKILLS",
  heading: "Tech Stack",
  subtitle: "Tools I use to design, build, and ship AI systems.",
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  technologies: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Java Developer Intern",
    company: "Codegnan Destination",
    period: "Feb 2025 - May 2025",
    technologies: ["Java", "OOP"],
    highlights: [
      "Applied OOP principles including inheritance, encapsulation, and polymorphism to develop modular Java applications.",
      "Built a quiz application with scoring logic, lifelines, edge-case handling, and clean code structure.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "YHills, Bengaluru",
    period: "Feb 2024 - Mar 2024",
    technologies: ["Python", "Pandas", "SQL"],
    highlights: [
      "Collected, cleaned, and preprocessed datasets with over 100,000 rows for ML pipeline readiness.",
      "Automated repetitive data cleaning and feature engineering tasks, improving team efficiency by 30%.",
      "Applied statistical analysis and visualization techniques to extract actionable insights from raw datasets.",
    ],
  },
];

export const experienceContent = {
  label: "03 / EXPERIENCE",
  heading: "Experience",
  subtitle: "Hands-on work building and shipping AI systems.",
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "OmniMind",
    subtitle: "Full-Stack Autonomous Agentic AI System",
    description:
      "Production-grade autonomous AI agent system built with LangChain and LangGraph using ReAct-style reasoning, multi-agent tool routing, RAG with HuggingFace embeddings and Pinecone retrieval, FastAPI APIs, PII filtering, rate limiting, and a React 18 + Vite + TailwindCSS frontend.",
    tags: [
      "Python",
      "LangChain",
      "LangGraph",
      "FastAPI",
      "Pinecone",
      "HuggingFace",
      "Gemini API",
      "React",
    ],
    link: "https://github.com/yasarameenhn",
  },
  {
    title: "AI Credit Card Expense Optimizer",
    subtitle: "Multi-Agent Financial Intelligence",
    description:
      "Multi-agent AI pipeline that analyzes financial transactions and generates personalized savings recommendations. Built a 3-agent LangChain workflow for categorization, validation, and recommendation, plus Gemini Vision OCR extraction, Pydantic typed models, Streamlit UI, reports, and JSON export.",
    tags: [
      "Python",
      "LangChain",
      "Gemini Vision API",
      "Streamlit",
      "Pandas",
      "Pydantic",
    ],
    link: "https://github.com/yasarameenhn",
  },
  {
    title: "Wireless Charging Vehicle",
    subtitle: "IoT EV Charging Prototype",
    description:
      "Led development of an IoT-enabled wireless EV charging system using ESP32, inductive charging, real-time web-based monitoring, vehicle motion control, failure-safe fallback logic, and offline local Wi-Fi battery monitoring.",
    tags: ["ESP32", "IoT", "Python", "Web GUI"],
    link: "https://github.com/yasarameenhn",
  },
];

export const projectsContent = {
  label: "04 / PROJECTS",
  heading: "Selected Works",
  subtitle: "Flagship projects showcasing end-to-end AI development.",
};

export const contactContent = {
  label: "05 / CONTACT",
  heading: "Let's build something intelligent.",
  subtitle: "Open to roles, collaborations, and conversations about AI.",
};

export const footerContent = {
  text: "Yasar Ameen - 2026",
};
