export const projects = [
  {
    title: "QuizMind AI",
    description:
      "Built custom RAG pipeline from scratch (no LangChain) for document-to-quiz conversion from PDF/TXT files. Implemented text chunking, HuggingFace embeddings, cosine similarity search with Turso vector database. Integrated Groq/LLaMA 3 for intelligent quiz generation; deployed serverless on Vercel.",
    tech: ["Next.js", "TypeScript", "Groq", "HuggingFace", "Turso", "Tailwind"],
    liveUrl: "https://quizmind-ai.vercel.app",
    githubUrl: "https://github.com/aqsaafzal702/quizmind-ai",
    featured: true,
  },
  {
    title: "Student Performance Tracker",
    description:
      "Full-stack web app with JWT authentication and role-based dashboards. CRUD operations for grades/attendance using MongoDB Atlas and REST APIs.",
    tech: ["Next.js", "MongoDB", "Tailwind", "JWT"],
    githubUrl: "https://github.com/aqsaafzal702/student-performance-tracker-nextjs",
    featured: false,
  },
  {
    title: "Customer Segmentation",
    description:
      "KMeans-based ML app with PCA and elbow method for customer clustering. Interactive Streamlit dashboard with Plotly visualizations for non-technical users.",
    tech: ["Python", "Scikit-learn", "Streamlit", "Plotly", "Pandas"],
    githubUrl: "https://github.com/aqsaafzal702/customer-segmentation-app",
    featured: false,
  },
  {
    title: "Email Spam Detection",
    description:
      "Real-time spam classifier using Logistic Regression and TF-IDF (94% accuracy). Streamlit interface with visual insights and model explanation.",
    tech: ["Python", "Scikit-learn", "Streamlit", "NLP", "Joblib"],
    githubUrl: "https://github.com/aqsaafzal702/E-mail-Spam-Classification-Streamlit-App",
    featured: false,
  },
  {
    title: "E-Commerce Sales Dashboard",
    description:
      "Interactive Power BI dashboard analyzing sales, profit, payment modes, customer segments, and category trends.",
    tech: ["Power BI", "Excel"],
    githubUrl: "https://github.com/aqsaafzal702/E-commerce-Sales-Dashboard-Power-BI-",
    featured: false,
  },
  {
    title: "Car Price Prediction",
    description:
      "Regression model with feature engineering and hyperparameter tuning for car price prediction based on brand, mileage, and age.",
    tech: ["Python", "XGBoost", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/aqsaafzal702/Car-Price-Prediction-using-XGBoost",
    featured: false,
  },
];

export const skills = [
  {
    category: "Programming Languages",
    icon: "💻",
    items: ["Python", "SQL", "R", "Java", "TypeScript"],
  },
  {
    category: "Web Development",
    icon: "🌐",
    items: ["Next.js", "Tailwind CSS", "REST APIs", "Git", "GitHub"],
  },
  {
    category: "AI/ML Frameworks",
    icon: "🤖",
    items: ["PyTorch", "Scikit-learn", "Hugging Face", "XGBoost"],
  },
  {
    category: "Data Science",
    icon: "📊",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Statistical Analysis", "EDA"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    items: ["MongoDB", "PostgreSQL", "Turso (Vector DB)"],
  },
  {
    category: "Cloud & Deployment",
    icon: "☁️",
    items: ["AWS (SageMaker, EC2, S3)", "Vercel", "CI/CD Pipelines"],
  },
  {
    category: "BI & Visualization",
    icon: "📈",
    items: ["Power BI", "Excel", "Streamlit", "Plotly"],
  },
  {
    category: "Soft Skills",
    icon: "🧠",
    items: ["Problem-Solving", "Communication", "Team Collaboration", "Analytical Thinking"],
  },
];

export const certifications = [
  {
    name: "Career Essentials in Data Analysis",
    issuer: "Microsoft LinkedIn Learning",
    icon: "📊",
  },
  {
    name: "Career Essentials in Business Analysis",
    issuer: "Microsoft LinkedIn Learning",
    icon: "💼",
  },
  {
    name: "AI for Everyone",
    issuer: "Coursera (deeplearning.ai)",
    icon: "🤖",
  },
  {
    name: "AI for Medical Diagnosis",
    issuer: "Coursera (deeplearning.ai)",
    icon: "🏥",
  },
  {
    name: "Data Analyst Associate",
    issuer: "DataCamp",
    icon: "🎯",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera (deeplearning.ai)",
    icon: "🧠",
  },
];