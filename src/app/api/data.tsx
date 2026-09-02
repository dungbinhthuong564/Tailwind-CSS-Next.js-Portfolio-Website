import { getImgPath } from "@/utils/image";

export const personalInfo = {
  name: "An Trung Dũng",
  nickname: "Dung An",
  role: "Front-End Developer",
  status: "Available for Front-End Intern roles",
  bio: "Third-year Software Engineering student at FPT University, aspiring to become a Front-end Developer. Proficient in HTML5, CSS3, JavaScript, React, Next.js, and Tailwind CSS. Experienced in building interactive personal and team web applications with seamless REST API integration, state management, and responsive designs. Fast learner, passionate about clean code and delivering engaging user experiences.",
  email: "dungbinhthuong564@gmail.com",
  phone: "0373848905",
  location: "Long Binh, Dong Nai, Vietnam",
  birthDate: "03/05/2005",
  facebook: "https://www.facebook.com/dung.an.92167789/",
  github: "https://github.com/dungbinhthuong564",
  university: "FPT University – Ho Chi Minh City",
  major: "Software Engineering",
  educationYears: "2023 - Present",
};

export const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export const count = [
  {
    icon: getImgPath("/images/counter/star.svg"),
    value: "5+",
    description: "Featured web & software engineering projects completed",
  },
  {
    icon: getImgPath("/images/counter/admin.svg"),
    value: "3rd",
    description: "Year Software Engineering student at FPT University HCM",
  },
  {
    icon: getImgPath("/images/counter/bag.svg"),
    value: "100%",
    description: "Dedication to clean code, modern UI & responsive design",
  },
];

export const Progress = [
  { title: "React.js / Next.js / Vite", Progress: 92 },
  { title: "HTML5, CSS3 & Tailwind CSS", Progress: 95 },
  { title: "JavaScript (ES6+) & TypeScript Basics", Progress: 88 },
  { title: "RESTful API & Mock API Integration", Progress: 85 },
  { title: "Git & GitHub Collaboration", Progress: 85 },
  { title: "Responsive Web & UI Animation", Progress: 90 },
];

export const skillsList = [
  {
    category: "Front-End Technologies",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    category: "State & API Integration",
    skills: ["RESTful APIs", "Mock API", "Fetch / AJAX", "Context API", "Local Storage Caching", "Spotify Web API"],
  },
  {
    category: "Tools & Methodologies",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Responsive Design", "Clean Architecture", "Component-Driven Dev"],
  },
  {
    category: "Soft Skills & Mindset",
    skills: ["Teamwork", "Effective Communication", "Fast Self-Learning", "Problem Solving", "Attention to Detail"],
  },
];

export const Servicebox = [
  {
    icon: getImgPath("/images/services/ux-design-product_1.svg"),
    title: "Front-End Web Development",
    description: "Building fast, high-performance, and responsive single-page and multi-page web applications using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: getImgPath("/images/services/perfomance-optimization.svg"),
    title: "API Integration & State Flow",
    description: "Seamlessly connecting RESTful APIs & Mock APIs with asynchronous data handling (Fetch/AJAX), local storage caching, and clean state management.",
  },
  {
    icon: getImgPath("/images/services/ux-design-product_2.svg"),
    title: "UI/UX & Interactive Design",
    description: "Crafting modern, accessible, and mobile-first user interfaces with smooth animations, dark/light theme switching, and multi-language support.",
  },
];

export const portfolioinfo = [
  {
    image: getImgPath("/images/portfolio/cozycasa.png"),
    alt: "Personal Finance Manager",
    title: "Personal Finance Manager",
    slug: "personal-finance-manager",
    info: "React / Vite • Tailwind CSS • Lucide Icons",
    date: "08/08/2026 - 12/08/2026",
    role: "Personal project — Demo: Dung An's Finance Tracker",
    description: "Developed a comprehensive personal financial management system with interactive SVG dashboard charts, budget planner, transaction CRUD with search/filter/deletion, and confirmation modals. Features local storage caching, Vietnamese & English localization context, and custom light/dark theme switching.",
    github: "https://github.com/dungbinhthuong564/React_Project_Dung_An_Finance",
    tags: ["React", "Vite", "Tailwind CSS", "Charts", "Localization", "Dark Mode"],
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/humans.png"),
    alt: "AI Study Hub",
    title: "AI Study Hub",
    slug: "ai-study-hub",
    info: "React • RESTful API • Community Platform",
    date: "14/07/2026 - 03/08/2026",
    role: "Team project – Role: Front-end Developer (Community & Notification)",
    description: "Developed responsive UI components for the Community feed and Notification system using React. Integrated RESTful APIs to handle real-time notifications and community post interactions. Collaborated smoothly with team members via GitHub to build and integrate Front-end features.",
    github: "https://github.com/TuanAnhTran2k5/FE-Ai-Study-Hub-P2",
    tags: ["React", "REST API", "Community Feed", "Notifications", "Teamwork"],
    Class: "md:mt-24",
  },
  {
    image: getImgPath("/images/portfolio/mars.png"),
    alt: "Spotify Clone",
    title: "Spotify Clone",
    slug: "spotify-clone",
    info: "HTML5/CSS3 • JavaScript • Spotify Web API",
    date: "15/07/2026 - 15/07/2026",
    role: "Personal project",
    description: "Built a Spotify-like music player interface with pure HTML/CSS and JavaScript. Integrated Spotify Web API to fetch top tracks, search songs/artists, and play 30-second audio previews. Implemented access-token authentication and displayed real-time now-playing track information.",
    github: "https://github.com/dungbinhthuong564/Spotify_Clone",
    tags: ["JavaScript", "Spotify API", "Music Player", "OAuth Token", "Audio"],
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/portfolio/roket-squred.png"),
    alt: "To-do List App",
    title: "To-do List App",
    slug: "todo-list-app",
    info: "HTML5/CSS3 • JavaScript • Mock API",
    date: "15/07/2026 - 16/07/2026",
    role: "Personal project",
    description: "Built a real-time task management application using pure HTML/CSS and JavaScript. Integrated Mock API to add, edit, and delete tasks in real time. Handled asynchronous Fetch/AJAX calls and dynamically updated the UI based on response data.",
    github: "https://github.com/dungbinhthuong564/ToDo_List",
    tags: ["JavaScript", "Mock API", "CRUD", "Async Fetch", "Task Management"],
    Class: "md:mt-24",
  },
  {
    image: getImgPath("/images/portfolio/panda-logo.png"),
    alt: "Personal Portfolio",
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    info: "Next.js • Tailwind CSS • TypeScript",
    date: "17/07/2026 - 19/07/2026",
    role: "Personal project",
    description: "Built a personal portfolio website to showcase background, technical skills, and completed projects. Designed UI with structured clear sections: Home, About, Services, Work, and Contact. Implemented JavaScript scroll interactions, smooth navigation, and UI animation effects.",
    github: "https://github.com/dungbinhthuong564/PORITAL_DUNG_AN",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Responsive", "Portfolio"],
    Class: "md:mt-0",
  },
];

export const educationList = [
  {
    school: "FPT University – Ho Chi Minh City",
    degree: "Software Engineering (Major)",
    time: "2023 - Present",
    details: "Third-year undergraduate student focusing on Front-End Web Development, Software Engineering methodologies, and Web Architecture.",
  },
  {
    school: "Le Quy Don High School – Long Binh Tan",
    degree: "High School Diploma",
    time: "2020 - 2023",
    details: "Academic Excellence Award (1st semester, Grade 10). Solid foundation in mathematics, science, and logical problem solving.",
  },
];

export const activitiesList = [
  {
    title: "Voluntary Blood Donation",
    role: "Blood donor volunteer",
    time: "25/10/2025 - 25/10/2025",
    description: "Participated in a voluntary blood donation drive organized in Ho Chi Minh City, contributing positively to community health support.",
  },
];

export const interestsList = [
  "Reading technical books & personal growth literature",
  "Playing video games (strategic thinking & fast reflexes)",
  "Exploring emerging web development trends & UI designs",
];