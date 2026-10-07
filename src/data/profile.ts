/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit everything about the portfolio from this one file.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  LINKS
 *  • Any URL left as "" (or one of the placeholder strings below) is treated as
 *    missing — the matching button is hidden automatically, so nothing breaks.
 *  • Placeholders used:  ""  |  "PASTE_REAL_CERTIFICATE_URL_HERE"  |  "POST_URL_REQUIRED"
 *  • Paste the real link to make the button appear. Nothing here is invented.
 *
 *  FILES (in /public)
 *  • /public/resume.pdf           → the "Resume" download button
 *  • /public/aaditya-salwan.jpg   → profile photo (hero + Open Graph image)
 *  Replace either file with a new one of the same name to update it.
 */

export const profile = {
  name: "Aaditya Salwan",
  shortName: "Aaditya",
  initials: "AS",
  role: "AI/ML Engineer • Computer Vision • Software Developer",
  location: "Delhi, India",
  email: "salwanworks@gmail.com",
  phone: "+91 8178209887",
  photo: "/aaditya-salwan.jpg",
  photoAlt: "Portrait of Aaditya Salwan",
  intro:
    "Computer Science undergraduate building intelligent systems with AI/ML, computer vision and software engineering.",
  current:
    "Currently building a Fault Management System using AI/ML at DRDO's Defence Electronics Application Laboratory (DEAL).",
  about:
    "Computer Science undergraduate with a strong academic record and hands-on experience across AI/ML, computer vision, backend development and automation. Currently working as a DRDO intern at Defence Electronics Application Laboratory (DEAL), where I am working on a Fault Management System using AI/ML and developing Python-based SNMP telemetry tooling.",
  focus: [
    "AI/ML",
    "Computer Vision",
    "Python",
    "Software Engineering",
    "Intelligent Systems",
    "Automation",
  ],
  interests: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Intelligent Automation",
    "Backend Engineering",
    "Real-time Systems",
    "Software Engineering",
  ],
};

/** Resume download. Put your PDF at /public/resume.pdf (already placed). */
export const resume = {
  url: "/resume.pdf",
  downloadName: "Aaditya_Salwan_Resume.pdf",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/aaditya-salwan-7b5218295/",
  github: "https://github.com/salwanworks",
  email: "mailto:salwanworks@gmail.com",
  phone: "tel:+918178209887",
};

/** Used for canonical URL + Open Graph. Set to your deployed domain. */
export const siteUrl = "https://aaditya-salwan-portfolio.vercel.app/"; // ← replace with your live URL after deploying

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

/* ───────────────────────────── EXPERIENCE ───────────────────────────── */

export const drdo = {
  title: "DRDO Internship",
  organization: "Defence Research and Development Organisation (DRDO)",
  lab: "Defence Electronics Application Laboratory (DEAL)",
  labShort: "DEAL",
  location: "Dehradun, Uttarakhand",
  duration: "August 2026 – Present",
  project: "Fault Management System using AI/ML",
  description:
    "I am currently working on a Fault Management System using AI/ML at DRDO's Defence Electronics Application Laboratory.",
  work: [
    "Implemented a local SNMPv2c telemetry setup in Python using PySNMP.",
    "Developed an SNMP agent capable of serving GET, GETNEXT and GETBULK requests.",
    "Developed an SNMP manager that polls telemetry using SNMP GET.",
    "Investigated telemetry, fault and alarm handling for satellite-hub subsystems.",
    "Worked with subsystem concepts including ACU, BTR, HPA and modem.",
    "Worked with telemetry monitoring and fault/alarm handling concepts.",
  ],
  subsystems: ["ACU", "BTR", "HPA", "Modem"],
  stack: ["Python", "PySNMP", "SNMPv2c", "Telemetry Monitoring", "Fault & Alarm Handling"],
};

export type Experience = {
  role: string;
  organization: string;
  unit?: string;
  duration: string;
  location?: string;
  points: string[];
  tags: string[];
  highlight?: boolean;
};

export const experience: Experience[] = [
  {
    role: "DRDO Internship 2026",
    organization: "Defence Research and Development Organisation",
    unit: "Defence Electronics Application Laboratory (DEAL)",
    duration: "August 2026 – Present",
    location: "Dehradun, Uttarakhand",
    points: [
      "Project: Fault Management System using AI/ML.",
      "Built a local SNMPv2c telemetry setup in Python (PySNMP) — an agent serving GET / GETNEXT / GETBULK and a manager polling via SNMP GET.",
      "Investigated telemetry, fault and alarm handling for satellite-hub subsystems (ACU, BTR, HPA, modem).",
    ],
    tags: ["Python", "PySNMP", "SNMPv2c", "Telemetry"],
    highlight: true,
  },
  {
    role: "Information Technology Intern",
    organization: "MNR Solutions Pvt. Ltd.",
    duration: "June 2025 – July 2025",
    points: [
      "Developed and customized production WordPress websites.",
      "Built custom forms and performed front-end redesigns.",
      "Managed site updates and improvements, focusing on a responsive user experience.",
    ],
    tags: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
];

/* ───────────────────────────── PROJECTS ───────────────────────────── */

export type ProjectDetail = {
  problem: string;
  solution: string;
  implementation: string[];
  challenges: string[];
  results: string[];
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlights: string[];
  githubUrl: string; // ← paste repo URL; empty = button hidden
  linkedinPostUrl: string; // ← paste LinkedIn post URL; empty = button hidden
  visual: "handtracking" | "hireos";
  detail: ProjectDetail;
};

export const featuredProjects: Project[] = [
  {
    id: "fruit-ninja",
    title: "OpenCV Fruit Ninja",
    subtitle: "Real-Time Hand-Tracking Controller",
    description:
      "An interactive computer vision system that lets users play Fruit Ninja in BlueStacks using real-time hand tracking instead of conventional mouse control.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "PyAutoGUI", "pynput", "win32api", "pyttsx3"],
    highlights: [
      "MediaPipe Hands · 21 landmarks",
      "640×480 webcam stream",
      "EMA smoothing α = 0.25",
      "~7–8 → ~30 FPS",
    ],
    githubUrl: "", // PASTE GitHub repo URL
    linkedinPostUrl: "https://lnkd.in/p/gTbnWH2v", // PASTE LinkedIn post URL
    visual: "handtracking",
    detail: {
      problem:
        "Play Fruit Ninja (running in BlueStacks) with a bare hand in front of a webcam instead of a mouse — which needs a cursor that follows the hand smoothly and fast enough to feel like a real slice.",
      solution:
        "A Python pipeline that reads 640×480 webcam frames with OpenCV, tracks one hand with MediaPipe Hands (21 landmarks), and maps the index fingertip (landmark 8) to the screen cursor.",
      implementation: [
        "Index fingertip (landmark 8) mapped to screen coordinates using calibration and a 100-pixel margin.",
        "Two interaction modes: pinch-based interaction and Auto Slice.",
        "EMA motion smoothing with α = 0.25 to steady cursor movement.",
        "Gesture trails plus a HUD that displays the current mode and FPS.",
        "Voice feedback using pyttsx3.",
      ],
      challenges: [
        "The controller ran at only ~7–8 FPS — too slow for a slicing game.",
        "Profiling showed hand processing took ~20 ms, so tracking wasn't the problem.",
        "The bottleneck was PyAutoGUI cursor movement.",
      ],
      results: [
        "Switched cursor positioning to the lower-overhead win32api.SetCursorPos.",
        "Reached ~30 FPS in the optimized configuration (from ~7–8 FPS).",
      ],
    },
  },
  {
    id: "hireos",
    title: "HireOS",
    subtitle: "AI Interview Management System",
    description:
      "An AI-driven recruitment and interview management platform designed to streamline multi-round candidate assessment and hiring workflows.",
    tech: ["Python", "Flask", "MySQL", "NLP", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Admin · HR · Candidate portals",
      "Multi-round assessments",
      "Automated coding evaluation",
      "Offer-letter generation",
    ],
    githubUrl: "", // PASTE GitHub repo URL
    linkedinPostUrl: "https://lnkd.in/p/gTbnWH2v", // PASTE LinkedIn post URL
    visual: "hireos",
    detail: {
      problem:
        "Running multi-round technical hiring involves a lot of manual coordination — screening candidates, evaluating code, scoring and producing offer letters.",
      solution:
        "An AI-driven recruitment platform with separate Admin, HR and Candidate portals that supports multi-round candidate assessments and manages the hiring workflow end to end.",
      implementation: [
        "Three role-based portals: Admin, HR and Candidate.",
        "Multi-round candidate assessments.",
        "Automated coding evaluation and intelligent candidate scoring.",
        "Hiring workflow management.",
        "Automated offer-letter generation.",
        "Built with Python, Flask and MySQL, with NLP and an HTML/CSS/JavaScript front end.",
      ],
      challenges: [
        "Coordinating three user roles with different views and permissions over one hiring pipeline.",
        "Automating the screening steps that are normally done by hand.",
      ],
      results: [
        "Streamlined the technical screening pipeline through automated coding evaluation and scoring.",
        "Reduced manual HR overhead by automating offer letters and workflow management.",
      ],
    },
  },
];

export type OtherProject = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  linkedinPostUrl: string;
  liveUrl: string;
};

export const otherProjects: OtherProject[] = [
  {
    title: "Daily Activity Tracker",
    description:
      "A full-stack activity tracking web application supporting secure authentication, activity management, daily completion tracking and visual progress analytics.",
    tech: ["Python", "Flask", "MySQL", "Bcrypt", "Matplotlib"],
    features: [
      "Secure registration/login",
      "Password hashing with Bcrypt",
      "Add/edit/manage activities",
      "Daily activity completion",
      "Auto-generated progress donut chart",
      "MySQL database",
    ],
    githubUrl: "",
    linkedinPostUrl: "",
    liveUrl: "",
  },
  {
    title: "Devisons E-commerce Website",
    description:
      "E-commerce website developed for Devisons Private Limited, specializing in stainless steel utensils.",
    tech: ["WordPress", "HTML", "CSS", "JavaScript", "PayPal"],
    features: [
      "Product/category pages",
      "Ordering system",
      "Mess plates, iron & stainless steel cookware",
      "PayPal payment integration",
    ],
    githubUrl: "",
    linkedinPostUrl: "",
    liveUrl: "",
  },
];

/* ───────────────────────────── SKILLS ───────────────────────────── */

export const skillGroups: { title: string; key: string; items: string[]; primary?: boolean }[] = [
  { title: "AI / ML / Data", key: "ml", primary: true, items: ["Machine Learning", "Deep Learning", "NLP", "Scikit-Learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib"] },
  { title: "Computer Vision", key: "cv", primary: true, items: ["OpenCV", "MediaPipe", "Real-time Video Processing", "Hand Tracking"] },
  { title: "Telemetry & Networking", key: "net", primary: true, items: ["SNMP", "SNMPv2c", "PySNMP", "Telemetry Monitoring", "Fault & Alarm Handling"] },
  { title: "Programming", key: "lang", items: ["Python", "Java", "SQL", "C"] },
  { title: "Automation", key: "auto", items: ["PyAutoGUI", "pynput", "win32api", "pyttsx3"] },
  { title: "Backend & Web", key: "web", items: ["Flask", "HTML", "CSS", "JavaScript", "PHP", "WordPress"] },
  { title: "Core CS", key: "core", items: ["Data Structures & Algorithms", "OOP", "DBMS"] },
  { title: "Databases & Tools", key: "tools", items: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code", "Jupyter Notebook"] },
];

/* ───────────────────────────── CERTIFICATIONS ───────────────────────────── */

export type Certification = {
  name: string;
  issuer: string;
  platform: string;
  category: string;
  /** Direct verification / certificate link. Leave the placeholder until you have the real link. */
  certificateUrl: string;
  /** Fallback: LinkedIn post about this certificate (used if certificateUrl is missing). */
  linkedinPostUrl: string;
};

export const certifications: Certification[] = [
  {
    name: "Python for Data Science",
    issuer: "Indian Institute of Technology Madras",
    platform: "NPTEL",
    category: "Data Science",
    certificateUrl: "PASTE_REAL_CERTIFICATE_URL_HERE",
    linkedinPostUrl: "POST_URL_REQUIRED",
  },
  {
    name: "The Joy of Computing using Python",
    issuer: "Indian Institute of Technology Madras",
    platform: "NPTEL",
    category: "Python",
    certificateUrl: "PASTE_REAL_CERTIFICATE_URL_HERE",
    linkedinPostUrl: "POST_URL_REQUIRED",
  },
  {
    name: "Database Management Systems",
    issuer: "Indian Institute of Technology Kharagpur",
    platform: "NPTEL",
    category: "Databases",
    certificateUrl: "PASTE_REAL_CERTIFICATE_URL_HERE",
    linkedinPostUrl: "POST_URL_REQUIRED",
  },
  {
    name: "Programming in Java",
    issuer: "Indian Institute of Technology Kharagpur",
    platform: "NPTEL",
    category: "Java",
    certificateUrl: "PASTE_REAL_CERTIFICATE_URL_HERE",
    linkedinPostUrl: "POST_URL_REQUIRED",
  },
  {
    name: "Getting Started with MongoDB Atlas",
    issuer: "MongoDB",
    platform: "MongoDB",
    category: "Databases",
    certificateUrl: "PASTE_REAL_CERTIFICATE_URL_HERE",
    linkedinPostUrl: "POST_URL_REQUIRED",
  },
  {
    name: "Java Training Certificate",
    issuer: "IIT Bombay – Spoken Tutorial",
    platform: "Spoken Tutorial",
    category: "Java",
    certificateUrl: "PASTE_REAL_CERTIFICATE_URL_HERE",
    linkedinPostUrl: "POST_URL_REQUIRED",
  },
];

/* ───────────────────────────── LINKEDIN ACHIEVEMENTS ───────────────────────────── */

export type Achievement = {
  title: string;
  description: string;
  kind: "Project" | "Certification" | "Internship";
  metric?: string;
  date: string; // leave "" if unknown — hidden when empty
  postUrl: string; // direct LinkedIn post URL, or "POST_URL_REQUIRED"
};

export const achievements: Achievement[] = [
  {
    title: "OpenCV Fruit Ninja — Hand-Tracking Controller",
    description:
      "Project update on the real-time hand-tracking controller built with OpenCV and MediaPipe.",
    kind: "Project",
    metric: "~30 FPS",
    date: "",
    postUrl: "POST_URL_REQUIRED",
  },
  {
    title: "NPTEL — Programming in Java",
    description: "Completed the IIT Kharagpur NPTEL course with an Elite certificate.",
    kind: "Certification",
    metric: "90% · Elite",
    date: "",
    postUrl: "POST_URL_REQUIRED",
  },
  {
    title: "NPTEL — The Joy of Computing using Python",
    description: "Completed the IIT Madras NPTEL course with an Elite certificate.",
    kind: "Certification",
    metric: "87% · Elite",
    date: "",
    postUrl: "POST_URL_REQUIRED",
  },
  {
    title: "NPTEL — Python for Data Science",
    description: "Completed the IIT Madras NPTEL course, placing in the top 5%.",
    kind: "Certification",
    metric: "81% · Top 5%",
    date: "",
    postUrl: "POST_URL_REQUIRED",
  },
  {
    title: "IIT Bombay Spoken Tutorial — Java Training",
    description: "Completed Java training certified by IIT Bombay's Spoken Tutorial programme.",
    kind: "Certification",
    metric: "92.50%",
    date: "",
    postUrl: "POST_URL_REQUIRED",
  },
  {
    title: "Daily Activity Tracker",
    description:
      "Project post on the Flask + MySQL activity tracker with Bcrypt authentication and progress analytics.",
    kind: "Project",
    date: "",
    postUrl: "POST_URL_REQUIRED",
  },
  {
    title: "Internship Update",
    description: "Internship milestone shared on LinkedIn.",
    kind: "Internship",
    date: "",
    postUrl: "POST_URL_REQUIRED",
  },
];

/* ───────────────────────────── TIMELINE ───────────────────────────── */

export const timeline: { year: string; items: string[] }[] = [
  { year: "2023", items: ["Started B.E. Computer Science"] },
  {
    year: "2025",
    items: [
      "IT Internship at MNR Solutions",
      "NPTEL certifications",
      "Java training",
      "Projects in web development / data / Python",
    ],
  },
  {
    year: "2026",
    items: [
      "DRDO Internship at DEAL",
      "Fault Management System using AI/ML",
      "SNMP/PySNMP telemetry work",
      "Advanced computer vision project work",
    ],
  },
];

/* ───────────────────────────── LEADERSHIP ───────────────────────────── */

export const leadership = [
  {
    role: "Event Management Co-Head",
    org: "NULL Chapter – Technical Society",
    place: "BVDUCOEP",
    description:
      "Led planning and on-ground execution of technical events, coordinating cross-functional student teams.",
  },
  {
    role: "Public Relations Associate",
    org: "DCSE & EDC – Student Bodies",
    place: "BVDUCOEP",
    description:
      "Managed outreach, communication and event coordination across departmental and entrepreneurship cell activities.",
  },
];

/* ───────────────────────────── EDUCATION ───────────────────────────── */

export const education = {
  institution: "Bharati Vidyapeeth University",
  college: "College of Engineering, Pune",
  degree: "Bachelor of Engineering – Computer Science",
  duration: "2023 – 2027",
  cgpa: "9.12 / 10.0",
  cgpaNote: "up to Semester 6",
};
