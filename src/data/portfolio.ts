// All site content lives here, so updating the portfolio never means touching components.

const GITHUB = "https://github.com/Keshan-D-Adhikari";

export const profile = {
  name: "Keshan Adhikari",
  role: "IT Undergraduate · AI/ML & Software Engineering",
  location: "Sri Lanka",
  tagline:
    "I build practical software that mixes solid engineering with intelligent systems: multi-agent RAG apps, IoT platforms, ML models and CI/CD pipelines.",
  about: [
    "I'm a final-year BSc (Hons) Information Technology student at Horizon Campus. I like the whole path of a project: collecting the data, training the model, building the app around it and shipping it with a proper pipeline.",
    "Recently I've been building multi-agent LLM systems with LangGraph and RAG, and my final year project, SmartWaste Pro, connects an ESP32 smart bin to a recycling marketplace app.",
    "Outside code I served as Vice President of the Horizon Campus Sports Council, where I learned a lot about leading teams and getting things done on a deadline.",
  ],
  email: "adhikarikeshan@gmail.com",
  github: GITHUB,
  linkedin: "https://www.linkedin.com/in/keshan-d-adhikari-43b952230",
  // Public copy of the CV (cover letter and referees' contact details removed). Set to "" to hide the button.
  resume: "/Keshan-Adhikari-CV.pdf",
};

// Tech badges that float around the photo in the hero.
export const heroTech = [
  { src: "/icons/python.svg", label: "Python" },
  { src: "/icons/react.svg", label: "React" },
  { src: "/icons/nextjs.svg", label: "Next.js" },
  { src: "/icons/firebase.svg", label: "Firebase" },
  { src: "/icons/tensorflow.svg", label: "TensorFlow" },
  { src: "/icons/javascript.svg", label: "JavaScript" },
];

export const stats = [
  { value: "10+", label: "Projects built" },
  { value: "3rd", label: "Year completed" },
  { value: "5", label: "Certifications" },
];

export const skillGroups = [
  {
    title: "AI / ML",
    items: ["Python", "scikit-learn", "Pandas", "NumPy", "TensorFlow", "NLP / BERT", "LangGraph", "RAG", "ChromaDB"],
  },
  {
    title: "Web & Mobile",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "React Native", "Flutter", "FastAPI", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Data & Cloud",
    items: ["Firebase", "MongoDB", "MySQL", "Streamlit", "Vercel", "IoT (ESP32)"],
  },
  {
    title: "DevOps & Practices",
    items: ["Git & GitHub", "GitHub Actions", "CI/CD", "Automated testing", "SAST / DAST / SCA", "Blue-green deployment", "n8n"],
  },
];

export type Project = {
  title: string;
  summary: string;
  highlights?: string[];
  tags: string[];
  repo: string;
  demo?: string;
  images?: { src: string; alt: string }[];
};

export const featuredProject: Project = {
  title: "SmartWaste Pro",
  summary:
    "Final year project: an IoT-based waste management and recycling marketplace. An ESP32 smart bin reports fill level and weight in real time, sellers list recyclable waste, and buyers browse, make offers and pay.",
  highlights: [
    "ESP32 bin with ultrasonic, load-cell and moisture sensors streaming to Firebase Realtime Database",
    "React Native (Expo) app for sellers and buyers: live bin monitoring, listings, offers, orders, Stripe card payments",
    "React (Vite) admin dashboard for users, listings, orders and bin telemetry",
    "Cloud Functions, Firestore security rules and a GitHub Actions CI workflow",
  ],
  tags: ["React Native", "Firebase", "ESP32", "IoT", "Stripe", "React"],
  repo: `${GITHUB}/wast_pro`,
  images: [
    { src: "/projects/smartwaste-seller.png", alt: "SmartWaste Pro seller dashboard with live bin levels" },
    { src: "/projects/smartwaste-buyer.png", alt: "SmartWaste Pro buyer marketplace dashboard" },
  ],
};

export const projects: Project[] = [
  {
    title: "CeylonGuide AI",
    summary:
      "Multi-agent travel planner for Sri Lanka. A LangGraph router, planner and critic build personalised itineraries grounded in a local RAG knowledge base.",
    tags: ["LangGraph", "RAG", "ChromaDB", "Groq", "Streamlit"],
    repo: `${GITHUB}/ceylonguide-ai`,
  },
  {
    title: "Dengue Guideline Advisor",
    summary:
      "RAG-grounded advisory agent for dengue clinical guidelines, with an emergency fast path and a cross-vendor model that independently verifies every answer.",
    tags: ["Multi-agent", "RAG", "LLM", "Streamlit", "Python"],
    repo: `${GITHUB}/dengue-guideline-advisor`,
  },
  {
    title: "Stress vs Depression NLP",
    summary:
      "Compares TF-IDF with Logistic Regression and SVM against BERT for classifying Reddit posts as stress or depression, on a balanced 3,708-post dataset.",
    tags: ["NLP", "BERT", "scikit-learn", "Jupyter"],
    repo: `${GITHUB}/stress-depression-nlp-classification`,
  },
  {
    title: "TaskFlow DevOps",
    summary:
      "Team todo app delivered with a full DevOps workflow: branching strategy, ESLint, automated tests, and a GitHub Actions pipeline that deploys to GitHub Pages.",
    tags: ["GitHub Actions", "CI/CD", "JavaScript", "Testing"],
    repo: `${GITHUB}/taskflow-devops-team`,
    demo: "https://keshan-d-adhikari.github.io/taskflow-devops-team/",
  },
  {
    title: "FastAPI ML Service",
    summary:
      "REST API that serves a trained Random Forest Iris classifier with FastAPI, including a training script, tests and run instructions.",
    tags: ["FastAPI", "scikit-learn", "REST API", "Python"],
    repo: `${GITHUB}/fastapi-ml-app`,
  },
  {
    title: "Wine Quality Prediction",
    summary:
      "Random Forest model (70% accuracy vs 63% for Logistic Regression) wrapped in a Streamlit app for data exploration, visualisation and live predictions.",
    tags: ["Random Forest", "Streamlit", "Pandas", "Seaborn"],
    repo: `${GITHUB}/wine-quality-model-`,
  },
  {
    title: "Global Travel Safety Dashboard",
    summary:
      "Service-oriented country search dashboard combining country, weather and currency APIs, with an Express + MongoDB backend secured by API keys.",
    tags: ["Node.js", "Express", "MongoDB", "REST APIs"],
    repo: `${GITHUB}/global-travel-safety-dashboard`,
  },
  {
    title: "Library Management System",
    summary:
      "Java Swing desktop app with an MVC structure for managing books, members, borrowing and returns on a MySQL database.",
    tags: ["Java", "Swing", "MySQL", "JDBC"],
    repo: `${GITHUB}/ITBIN-2211-0137`,
  },
];

export const education = [
  {
    title: "BSc (Hons) Information Technology",
    place: "Horizon Campus",
    period: "2022 – Present",
    detail: "Completed 3rd year. Focus on software engineering, AI/ML, networking and mobile computing.",
  },
  {
    title: "G.C.E. Advanced Level",
    place: "Sir John Kotelawala Central College, Dodamgaslanda",
    period: "2017 – 2019",
  },
];

export const certifications = [
  { name: "100 Days of Code: The Complete Python Pro Bootcamp", issuer: "Udemy" },
  { name: "Selenium WebDriver 2025: Automation Testing & CI/CD", issuer: "Udemy" },
  { name: "AI/ML Engineer – Stage 1", issuer: "SLIIT" },
  { name: "Python for Beginners", issuer: "University of Moratuwa" },
  { name: "Pandas", issuer: "Kaggle" },
];

export const leadership = [
  {
    title: "Vice President",
    place: "Horizon Campus Sports Council",
    period: "2025 – 2026",
    detail: "Led student sports activities and organisational initiatives across the university.",
  },
  {
    title: "Graphic Designer",
    place: "Horizon Campus Sports Council",
    period: "2024 – 2025",
    detail: "Designed visual material for university sports events and campaigns.",
  },
];
