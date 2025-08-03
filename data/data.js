// Resume data - shared across all pages
const resumeData = {
    contactInfo: {
        email: "serkankizilirmaak@gmail.com"
    },
    contact: {
        title: "Let's Start a Conversation",
        subtitle: "Whether you're looking for a data scientist, have a project in mind, or just want to network, I'm always open to interesting discussions.",
        methods: [
            {
                icon: "fas fa-envelope",
                title: "Email Me",
                description: "Reach me for business inquiries",
                link: "mailto:serkankizilirmaac@gmail.com",
                linkText: "serkankizilirmaak@gmail.com"
            },
            {
                icon: "fab fa-linkedin",
                title: "LinkedIn",
                description: "Connect with me professionally",
                link: "https://www.linkedin.com/in/serkankizilirmak/",
                linkText: "linkedin.com/in/serkankizilirmak",
                target: "_blank"
            },
            {
                icon: "fab fa-github",
                title: "GitHub",
                description: "My code repositories and open source contributions",
                link: "https://github.com/Serkankizilirmak",
                linkText: "github.com/Serkankizilirmak",
                target: "_blank"
            }
        ],
        quickInfo: [
            {
                icon: "fas fa-map-marker-alt",
                title: "Location",
                content: "Ankara, Türkiye",
                link: "https://www.google.com/maps/place/Ankara/@39.902959,32.4509538,11z/data=!3m1!4b1!4m12!1m5!3m4!2zMznCsDU1JzMwLjYiTiAzMsKwNTAnMTIuNSJF!8m2!3d39.925179!4d32.8368!3m5!1s0x14d347d520732db1:0xbdc57b0c0842b8d!8m2!3d39.9333635!4d32.8597419!16zL20vMGp5dw?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D",
                subtitle: "Available for remote work worldwide & willing to relocate"
            },
            {
                icon: "fas fa-clock",
                title: "Response Time",
                content: "Usually within 24 hours",
                subtitle: "Monday to Friday, 8 AM - 8 PM (GMT+3)"
            },
            {
                icon: "fas fa-language",
                title: "Languages",
                content: "Turkish, English",
                subtitle: "Comfortable in both languages"
            }
        ]
    },
    about: {
        introduction: [
            "Data Scientist with 3+ years of experience specializing in Monitoring & Evaluation within the humanitarian sector. Proven ability to research, design, and implement innovative M&E frameworks integrating ML, statistical models, and causal inference to assess program impact and improve targeting accuracy.",
            "With a dedicated focus on AI Safety and Explainable AI (XAI), committed to building transparent and ethical solutions. A persistent and creative problem-solver, passionate about delivering impactful, end-to-end ML workflows—from data storytelling and model deployment to ensuring robust and interpretable outcomes."
        ],
        quickFacts: [
            {
                icon: "fas fa-map-marker-alt",
                title: "Location",
                content: "Ankara, Türkiye"
            },
            {
                icon: "fas fa-graduation-cap",
                title: "Education",
                content: "Bachelor of Economics",
                subtitle: "TOBB University"
            },
            {
                icon: "fas fa-briefcase",
                title: "Experience",
                content: "3+ Years Experience",
                subtitle: "in Data Science"
            },
            {
                icon: "fas fa-globe",
                title: "Languages",
                content: "Turkish (Native)",
                subtitle: "English"
            },
            {
                icon: "fas fa-shield-alt",
                title: "Military Service",
                content: "Completed",
                subtitle: " "
            }
        ],
        services: [
            {
                icon: "fas fa-brain",
                title: "AI & Machine Learning",
                description: "Build intelligent systems using deep learning, NLP, and computer vision to solve complex humanitarian challenges and optimize program outcomes."
            },
            {
                icon: "fas fa-chart-line",
                title: "Predictive Analytics",
                description: "Develop forecasting models and causal inference frameworks to predict program impact and identify high-risk populations before crises occur."
            },
            {
                icon: "fas fa-shield-alt",
                title: "AI Safety & XAI",
                description: "Ensure ethical AI deployment with explainable models, bias detection, and transparent decision-making systems for humanitarian applications."
            },
            {
                icon: "fas fa-satellite",
                title: "Geospatial Intelligence",
                description: "Leverage satellite imagery, GIS analysis, and location-based data to map vulnerabilities and optimize resource distribution strategies."
            },
            {
                icon: "fas fa-users",
                title: "Impact Measurement",
                description: "Design comprehensive M&E systems using randomized controlled trials and quasi-experimental methods to measure real-world program effectiveness."
            },
            {
                icon: "fas fa-code-branch",
                title: "Data Engineering",
                description: "Build scalable data pipelines, ETL processes, and cloud infrastructure to handle massive humanitarian datasets efficiently and securely."
            }
        ]
    },
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
            ],
            technologies: ["Python", "API Integration", "Dashboard", "Data Analytics"]
        },
        {
            name: "Custom GIS Mapping & Geospatial Analysis",
            date: "2024/10",
            description: [
                "Leveraged Python, OpenStreetMap (OSM), and GeoPandas to generate customized regional maps.",
                "Integrated project-specific datasets onto maps for advanced geospatial visualization and analysis supporting institutional projects.",
                "Conducted spatial analysis to identify and map regional vulnerabilities based on datasets."
            ],
            technologies: ["Python", "GeoPandas", "OpenStreetMap", "GIS", "Spatial Analysis"]
        },
        {
            name: "Real-Time Data Integration with ODK API",
            date: "2024/01",
            description: [
                "Engineered a real-time data pipeline integrating ODK APIs for automated data ingestion and immediate quality assurance checks.",
                "Built an interactive Streamlit reporting dashboard for real-time monitoring and data visualization.",
                "Significantly reduced manual workload for data monitoring through a Streamlit dashboard providing live tracking and visualization of data quality metrics."
            ],
            technologies: ["Python", "ODK API", "Streamlit", "Data Pipeline", "Real-time Processing"]
        },
        {
            name: "Breast Cancer Detection, Kaggle Challenge | Inzva",
            date: "2023/12",
            description: [
                "Achieved Top-15 rank (Inzva ML Bootcamp Kaggle) by developing a PyTorch CNN for BI-RADS classification from mammograms.",
                "Optimized model focus for high recall on positive breast cancer cases, critical for diagnostic accuracy."
            ],
            technologies: ["PyTorch", "CNN", "Computer Vision", "Kaggle", "Medical AI"]
        },
        {
            name: "NLP Sentiment Classification & Deployment",
            date: "2022/09",
            description: [
                "Engineered an NLP system using (TF-IDF/SVM) to classify hotel reviews (Tripadvisor dataset via Webscraping) on a 1-5 scale.",
                "Deployed the model via a Streamlit web application for real-time sentiment analysis and visualization."
            ],
            technologies: ["Python", "Scikit-learn", "TensorFlow", "Streamlit", "NLP", "Web Scraping"]
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
                { name: "Text Preprocessing", proficiency: "Advanced" },
                { name: "Sentiment Analysis", proficiency: "Advanced" }
            ] 
        },
        { 
            name: "MLOps & Deployment", 
            type: 'levelled',
            skills: [
                { name: "Docker", proficiency: "Intermediate" },
                { name: "CI/CD (GitHub Actions)", proficiency: "Intermediate" },
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
            name: "Databases", 
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
            name: "Web Development", 
            type: 'levelled',
            skills: [
                { name: "Streamlit", proficiency: "Advanced" },
                { name: "FastAPI", proficiency: "Intermediate" },
                { name: "RESTful APIs", proficiency: "Advanced" },
                { name: "Gradio", proficiency: "Beginner" }
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
                { name: "Creativity" },
                { name: "Data Storytelling" },
                { name: "Cross-functional Collaboration" }
            ] 
        },
        { 
            name: "M&E Frameworks/Tools", 
            type: 'list',
            skills: [
                { name: "Logical Framework Approach (Logframes)" },
                { name: "Theory of Change (ToC)" },
                { name: "Results-Based Management (RBM)" },
                { name: "Indicator Development & Tracking" },
                { name: "Impact Assessment" }
            ] 
        },
        { 
            name: "Data Collection & Management", 
            type: 'list',
            skills: [
                { name: "Advanced ODK (Complex Forms, ODK Central, API)" },
                { name: "Survey Implementation" },
                { name: "Data Quality Assurance Protocols" },
                { name: "Real-time Data Monitoring" }
            ] 
        }
    ]
};
