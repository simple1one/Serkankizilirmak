
import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  contactInfo: {
    name: "Serkan Kızılırmak",
    title: "Data Scientist",
    location: "Ankara, Türkiye",
    birthDate: "1998/06/25",
    phone: "+905306558590",
    email: "serkankizilirmaak@gmail.com",
    linkedin: "https://www.linkedin.com/in/serkankizilirmak/",
    medium: "https://medium.com/@serkankizilirmak",
    portfolio: "https://serkankizilirmak.github.io",
    militaryStatus: "Completed"
  },
  summary: "Data Scientist with 2+ years of experience specializing in Monitoring & Evaluation within the humanitarian sector. Proven ability to research, design, and implement innovative M&E frameworks integrating ML, statistical models, and causal inference to assess program impact and improve targeting accuracy. Expertise in engineering real-time data pipelines, developing interactive dashboards, and deploying ML models. Passionate about delivering impactful solutions through data storytelling, model deployment, and end-to-end ML workflows.",
  professionalExperience: [
    {
      role: "Data Scientist - Monitoring and Evaluation",
      company: "Türk Kızılay | KIZILAYKART",
      duration: "2023/05 - present",
      location: "Ankara, TR",
      description: [
        "Applied advanced Monitoring & Evaluation (M&E) methodologies (logframes, indicator tracking) within the world's largest cash assistance program, ensuring alignment with humanitarian standards.",
        "Designed and implemented monitoring frameworks integrating econometric, statistical, and Machine Learning models to enhance program outcome tracking and evidence-based decision-making.",
        "Engineered real-time data pipelines and developed interactive dashboards for real-time program monitoring and automated data quality assurance.",
        "Improved resource allocation accuracy by developing classification models for vulnerable household profiling, refining targeting criteria.",
        "Collaborated closely with program managers, field teams, and IT to understand needs, ensure data integrity, and translate complex data insights into actionable recommendations via compelling data storytelling for diverse stakeholders."
      ]
    },
    {
      role: "Entrepreneur",
      company: "E-commerce Initiative",
      duration: "2022/08 - 2023/05",
      location: "Ankara, TR",
      description: [
        "Founded and managed an e-commerce venture, leveraging data analysis to optimize operations and marketing, achieving a 10-15% profit margin."
      ]
    }
  ],
  internships: [
    {
      role: "Project Funding and Corporate Loans",
      company: "Türkiye Kalkınma ve Yatırım Bankası",
      duration: "2021/08 - 2022/04",
      location: "İstanbul",
      description: [
        "Assisted in analyzing companies, obtaining investment details/financial statements, and communicating findings.",
        "Gained insight into investment processes and sustainability policies within a framework aligned with international institutions and some of the largest companies in Türkiye."
      ]
    },
    {
      role: "Finance",
      company: "AFS Boru San. A.Ş.",
      duration: "2021/06 - 2021/08",
      location: "Ankara",
      description: [
        "Supported financial operations including cash management, banking activities, and import/export processes.",
        "Enhanced financial reporting through meticulous handling of cash flow, tax returns, and account reconciliations."
      ]
    }
  ],
  projects: [
    {
      name: "E-commerce Analytics Dashboard (Trendyol API)",
      date: "2025/01",
      description: [
        "Developed a dashboard integrating the Trendyol Seller API to automate sales, commission, and expense analysis.",
        "Enabled detailed P&L insights and data-driven pricing optimization via automated cost breakdowns."
      ]
    },
    {
      name: "Custom GIS Mapping & Geospatial Analysis",
      date: "2024/10",
      description: [
        "Leveraged Python, OpenStreetMap (OSM), and GeoPandas to generate customized regional maps.",
        "Integrated project-specific datasets onto maps for advanced geospatial visualization and analysis supporting institutional projects.",
        "Conducted spatial analysis to identify and map regional vulnerabilities based on datasets."
      ]
    },
    {
      name: "Real-Time Data Integration with ODK API",
      date: "2024/01",
      description: [
        "Engineered a real-time data pipeline integrating ODK APIs for automated data ingestion and immediate quality assurance checks.",
        "Built an interactive Streamlit reporting dashboard for real-time monitoring and data visualization.",
        "Significantly reduced manual workload for data monitoring through a Streamlit dashboard providing live tracking and visualization of data quality metrics."
      ]
    },
    {
      name: "Breast Cancer Detection, Kaggle Challenge | Inzva",
      date: "2023/12",
      description: [
        "Achieved Top-15 rank (Inzva ML Bootcamp Kaggle) by developing a PyTorch CNN for BI-RADS classification from mammograms.",
        "Optimized model focus for high recall on positive breast cancer cases, critical for diagnostic accuracy."
      ]
    },
    {
      name: "NLP Sentiment Classification & Deployment",
      date: "2022/09",
      description: [
        "Engineered an NLP system using (TF-IDF/SVM) to classify hotel reviews (Tripadvisor dataset via Webscraping) on a 1-5 scale.",
        "Deployed the model via a Streamlit web application for real-time sentiment analysis and visualization."
      ],
      technologies: ["Python", "Scikit-learn/Tensorflow", "Streamlit"]
    }
  ],
  bootcamps: [
    {
      name: "Applied AI",
      provider: "Inzva",
      duration: "2024/01 - 2024/04",
      location: "İstanbul, TR",
      description: [
        "Developed scalable ML products using APIs and MLOps principles.",
        "Applied advanced NLP (LLM fine-tuning, distillation, search engines) and Computer Vision techniques (ViT, CLIP, Diffusion Models)."
      ]
    },
    {
      name: "Google Developers Machine Learning Bootcamp Turkey",
      provider: "Google & Inzva",
      duration: "2023/05 - 2023/12",
      location: "İstanbul, TR",
      description: [
        "Completed intensive training focused on Deep Learning Specialization, TensorFlow Developer Certificate preparation, and practical problem-solving via Kaggle challenges."
      ]
    },
    {
      name: "Data Science Bootcamp",
      provider: "Çoşkunöz Eğitim Vakfı",
      duration: "2022/02 - 2022/09",
      location: "Bursa, TR",
      description: [
        "Comprehensive training in Machine Learning, Deep Learning, Cloud Computing, and End-to-End Big Data Analytics, featuring an NLP sentiment analysis project."
      ],
      projectLink: "#"
    }
  ],
  education: [
    {
      degree: "Bachelor of Economics",
      institution: "TOBB Ekonomi ve Teknoloji Üniversitesi",
      duration: "2017/08 - 2022/11",
      location: "Ankara, TR",
      details: [
        "Artificial Intelligence in Finance (Statistical Learning, Classification, Regularization)",
        "Econometrics & Microeconometrics (Hypothesis Testing, Discrete Choice Models, Panel Data)",
        "Time Series Analysis (Stationarity, ARMA/VAR Modeling, Forecasting)",
        "Probability & Statistics, Game Theory, Information Economics"
      ]
    }
  ],
  skills: [
    { 
      name: "Programming Languages", 
      type: 'levelled',
      skills: [
        { name: "Python", proficiency: "Advanced" },
        { name: "Stata", proficiency: "Intermediate" },
        { name: "E-Views", proficiency: "Intermediate" },
        { name: "SQL", proficiency: "Advanced" }
      ] 
    },
    { 
      name: "Machine Learning Frameworks", 
      type: 'levelled',
      skills: [
        { name: "Scikit-learn", proficiency: "Advanced" },
        { name: "TensorFlow", proficiency: "Intermediate" },
        { name: "PyTorch", proficiency: "Intermediate" },
        { name: "Hugging Face", proficiency: "Intermediate" },
        { name: "XGBoost", proficiency: "Intermediate" }
      ] 
    },
    { 
      name: "Deep Learning", 
      type: 'levelled',
      skills: [
        { name: "CNNs", proficiency: "Intermediate" },
        { name: "RNNs", proficiency: "Intermediate" },
        { name: "LSTMs", proficiency: "Intermediate" },
        { name: "GANs", proficiency: "Beginner" },
        { name: "Transfer Learning", proficiency: "Intermediate" },
        { name: "Pre-trained Models (BERT, ResNet)", proficiency: "Intermediate" },
        { name: "Fine-tuning Techniques", proficiency: "Intermediate" }
      ] 
    },
    { 
      name: "Natural Language Processing (NLP)", 
      type: 'levelled',
      skills: [
        { name: "LangChain", proficiency: "Intermediate" },
        { name: "Hugging Face Transformers", proficiency: "Intermediate" },
        { name: "spaCy", proficiency: "Intermediate" },
        { name: "NLTK", proficiency: "Intermediate" },
        { name: "Ollama Index", proficiency: "Beginner" },
        { name: "Text Preprocessing", proficiency: "Advanced" },
        { name: "Sentiment Analysis", proficiency: "Advanced" }
      ] 
    },
    { 
      name: "MLOps & Deployment", 
      type: 'levelled',
      skills: [
        { name: "Docker", proficiency: "Intermediate" },
        { name: "CI/CD (e.g., GitHub Actions)", proficiency: "Intermediate" },
        { name: "Model Monitoring", proficiency: "Intermediate" },
        { name: "MLflow", proficiency: "Intermediate" },
        { name: "Kubernetes", proficiency: "Beginner" }
      ] 
    },
    { 
      name: "Data Processing & Big Data", 
      type: 'levelled',
      skills: [
        { name: "Apache Spark", proficiency: "Intermediate" },
        { name: "Apache Kafka", proficiency: "Beginner" }
      ] 
    },
    { 
      name: "Relational Databases", 
      type: 'levelled',
      skills: [
        { name: "PostgreSQL", proficiency: "Advanced" },
        { name: "MySQL", proficiency: "Intermediate" }
      ] 
    },
    { 
      name: "GIS & Spatial Analysis", 
      type: 'levelled',
      skills: [
        { name: "GeoPandas", proficiency: "Intermediate" },
        { name: "OpenStreetMap APIs", proficiency: "Intermediate" },
        { name: "QGIS", proficiency: "Intermediate" },
        { name: "Spatial Statistics", proficiency: "Intermediate" }
      ] 
    },
    { 
      name: "API Development", 
      type: 'levelled',
      skills: [
        { name: "FastAPI", proficiency: "Intermediate" },
        { name: "RESTful APIs", proficiency: "Advanced" }
      ] 
    },
    { 
      name: "Experiment Tracking & Explainability", 
      type: 'levelled',
      skills: [
        { name: "Weights & Biases (W&B)", proficiency: "Intermediate" },
        { name: "SHAP", proficiency: "Intermediate" }
      ] 
    },
    { 
      name: "CS Fundamentals", 
      type: 'levelled',
      skills: [
        { name: "Linux (Shell Scripting)", proficiency: "Intermediate" },
        { name: "Version Control (Git)", proficiency: "Advanced" }
      ] 
    },
    { 
      name: "Web Application Development", 
      type: 'levelled',
      skills: [
        { name: "Streamlit", proficiency: "Advanced" },
        { name: "Gradio", proficiency: "Beginner" },
        { name: "Taipy", proficiency: "Beginner" }
      ] 
    },
    { 
      name: "Soft Skills", 
      type: 'list',
      skills: [
        { name: "Project Management" },
        { name: "Adaptability" },
        { name: "Critical Thinking" },
        { name: "Ethical Awareness" },
        { name: "Creativity" }
      ] 
    },
    { 
      name: "M&E Frameworks/Tools", 
      type: 'list',
      skills: [
        { name: "Logical Framework Approach (Logframes)" },
        { name: "Theory of Change (ToC)" },
        { name: "Results-Based Management (RBM)" },
        { name: "Indicator Development & Tracking" }
      ] 
    },
    { 
      name: "Data Collection & Management", 
      type: 'list',
      skills: [
        { name: "Advanced ODK (Complex Forms, ODK Central, API)" },
        { name: "Survey Implementation" },
        { name: "Data Quality Assurance Protocols" }
      ] 
    },
    { 
      name: "Survey Methodology", 
      type: 'list',
      skills: [
        { name: "Advanced Questionnaire Design" },
        { name: "Sampling Strategies" },
        { name: "Bias Reduction Techniques" },
        { name: "Reliability & Validity Assessment" }
      ] 
    }
  ],
  certificates: [
    "TensorFlow Developer Certificate",
    "Google Developers Machine Learning 2023",
    "Veri Bilimci Eğitim Programı (Çoşkunöz Eğitim Vakfı)",
    "Data Engineer Path (Miuul)",
    "Applied AI, Inzva",
    "Banka Tanıtım Programı (Türkiye Cumhuriyet Merkez Bankası)"
  ],
  languages: [
    { name: "English", proficiency: "TOEFL PBT 507-2018 [Advanced/Proficient]" },
    { name: "Turkish", proficiency: "Native" },
    { name: "Spanish", proficiency: "Basic" }
  ]
};
