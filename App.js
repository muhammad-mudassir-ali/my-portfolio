import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, Brain, LineChart, ChevronDown, Menu, X, ExternalLink, Download, BarChart, TrendingUp, Activity, Cpu } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const experiences = [
    {
      title: "Research on Intrusion Detection in IoT Devices",
      company: "FAST University",
      period: "October 2025 – Present",
      description: [
        "Conducting research on cybersecurity threats in IoT ecosystems",
        "Developing machine learning models for detecting network intrusions",
        "Analyzing attack patterns and vulnerabilities in IoT devices",
        "Working on real-time threat detection systems"
      ],
      current: true
    },
    {
      title: "Intern – EUC Department",
      company: "Easypaisa",
      period: "July 2025 – September 2025",
      description: [
        "Worked with Active Directory and Microsoft Exchange for account management",
        "Assisted in VM deployment and system administration in enterprise environments",
        "Gained hands-on exposure to AWS, Azure, Docker, and Kubernetes",
        "Learned network administration practices through team collaboration"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Moqah.pk",
      period: "March 2025 – June 2025",
      description: [
        "Built responsive user interfaces using React.js and Tailwind CSS",
        "Collaborated with UI/UX and backend teams for API integration",
        "Debugged components and improved performance for seamless UX"
      ]
    },
    {
      title: "Research Intern – AI & LLMs",
      company: "UrduX Company",
      period: "July 2024 – August 2024",
      description: [
        "Researched Large Language Models and Generative AI applications",
        "Integrated AI tools into production-level systems with focus on scalability"
      ]
    }
  ];

  const projects = [
    {
      title: "IoT Intrusion Detection System",
      category: "Cybersecurity Research",
      description: "Research project on detecting and preventing network intrusions in IoT devices using machine learning",
      tags: ["ML", "IoT", "Cybersecurity", "Python"],
      current: true,
      link: "https://github.com/muhammad-mudassir-ali/info_sec-research-"
    },
    {
      title: "Netflix Data Visualization",
      category: "Data Visualization",
      description: "Interactive Tableau dashboard analyzing Netflix content trends, genres, and viewing patterns",
      tags: ["Tableau", "Data Analysis", "Visualization"],
      link: "https://github.com/muhammad-mudassir-ali/Netflix-Visualization"
    },
    {
      title: "Surface Temperature Analysis",
      category: "Data Science",
      description: "Comprehensive data cleaning and visualization project analyzing global surface temperature patterns using Python",
      tags: ["Python", "Pandas", "Matplotlib", "Data Cleaning"],
      link: "https://github.com/muhammad-mudassir-ali/Surface-temp-data-"
    },
    {
      title: "AI-Powered Chatbot",
      category: "AI/ML",
      description: "Built chatbot interfaces using LLMs and RAG models for enhanced conversational AI",
      tags: ["LLMs", "RAG", "Python", "AI"],
      link: "https://github.com/muhammad-mudassir-ali/ai-assistant"
    },
    {
      title: "Data-mining project on electricity consumption",
      category: "AI/ML",
      description: "Analyzed electricity consumption patterns using machine learning techniques",
      tags: ["ML", "Data Mining", "Python", "AI"],
      link: "https://github.com/muhammad-mudassir-ali/data-mining-project"
    },
    {
      title: "Text-to-Image Generator",
      category: "Generative AI",
      description: "Developed a generative AI platform for text-to-image creation, deployed on Netlify",
      tags: ["Generative AI", "JavaScript","Html","CSS", "Netlify"],
      link: "https://github.com/muhammad-mudassir-ali/text-to-image"
    },
    {
      title: "CNN open-cv project",
      category: "Computer Vision",
      description: "Implemented CNN-based deep learning models for image classification tasks",
      tags: ["CNN", "Deep Learning", "TensorFlow"]
    }
  ];

  const skills = [
    {
      category: "Programming",
      icon: <Code className="w-6 h-6" />,
      items: ["Python", "JavaScript", "C++", "C#", "SQL"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "AI & ML",
      icon: <Brain className="w-6 h-6" />,
      items: ["LLMs", "Generative AI", "CNN", "Computer Vision", "RAG"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Data Science",
      icon: <LineChart className="w-6 h-6" />,
      items: ["NumPy", "Pandas", "D3.js", "Tableau", "Matplotlib"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      items: ["AWS", "Azure", "Docker", "Kubernetes", "VMware"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Databases",
      icon: <Database className="w-6 h-6" />,
      items: ["MongoDB", "SQL", "Active Directory", "Exchange"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const stats = [
    { label: "Years of Study", value: "3+", icon: <Activity className="w-8 h-8" /> },
    { label: "Projects Completed", value: "15+", icon: <Code className="w-8 h-8" /> },
    { label: "Internships", value: "3", icon: <TrendingUp className="w-8 h-8" /> },
    { label: "Technologies", value: "25+", icon: <Cpu className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Data Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x / 50 + 'px',
            top: mousePosition.y / 50 + 'px',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            right: mousePosition.x / 30 + 'px',
            bottom: mousePosition.y / 30 + 'px',
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      {/* Matrix-style Data Stream */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.3) 25%, rgba(59, 130, 246, 0.3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.3) 75%, rgba(59, 130, 246, 0.3) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, 0.3) 25%, rgba(139, 92, 246, 0.3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.3) 75%, rgba(139, 92, 246, 0.3) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                MA
              </div>
              <span className="text-xs text-blue-400 font-mono">Data Science</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-mono text-sm transition-colors relative ${
                    activeSection === section
                      ? 'text-blue-400'
                      : 'text-gray-400 hover:text-blue-400'
                  }`}
                >
                  {activeSection === section && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400" />
                  )}
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-blue-500/20">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize font-mono text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-500/30 font-mono text-xs whitespace-nowrap animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {['import pandas as pd', 'model.fit(X_train, y_train)', 'df.groupby().agg()', 'np.array()', 'plt.show()'][i % 5]}
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <BarChart className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-mono text-sm">Data Science Student</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Muhammad Mudassir Ali
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-3 mb-4 text-xl md:text-2xl text-gray-300">
            <span className="text-blue-400">•</span>
            <span className="font-mono">Data Engineer</span>
            <span className="text-blue-400">•</span>
            <span className="font-mono">Data Analyst</span>
            <span className="text-blue-400">•</span>
            <span className="font-mono">Researcher</span>
            <span className="text-purple-400">•</span>
            <span className="font-mono">Web-Developer</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto font-light">
            Transforming data into insights and building intelligent systems that solve real-world problems
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a href="mailto:muhammadmudassirmagray7786@gmail.com" className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg transition-all hover:scale-110 shadow-lg shadow-blue-500/30">
              <Mail className="w-6 h-6 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-mudassir-2696a42bb/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg transition-all hover:scale-110 shadow-lg shadow-blue-500/30">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a href="https://github.com/muhammad-mudassir-ali" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 rounded-lg transition-all hover:scale-110 shadow-lg shadow-purple-500/30">
              <Github className="w-6 h-6 text-white" />
            </a>
            <a href="tel:+923479928151" className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-lg transition-all hover:scale-110 shadow-lg shadow-pink-500/30">
              <Phone className="w-6 h-6 text-white" />
            </a>
          </div>

          <a
            href="#"
            download="Muhammad_Mudassir_Ali_Resume.pdf"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={() => scrollToSection('about')}
            className="mt-12 animate-bounce block mx-auto"
          >
            <ChevronDown className="w-8 h-8 text-blue-400" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105"
              >
                <div className="text-blue-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1 text-center">{stat.value}</div>
                <div className="text-gray-400 text-sm text-center font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="max-w-5xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-center text-blue-400 font-mono mb-12"></p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2" />
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
               I’m Mudassir Ali,  Data Science student with a strong interest in Data Engineering, Data Analytics, AI/ML  and Web Development. My academic background has equipped me with a solid foundation in statistical analysis, machine learning, database systems, and data visualization.

              </p>
              <p className="text-gray-300 leading-relaxed">
                From building LLM-powered applications to creating insightful visualizations, I transform complex datasets into actionable intelligence that drives decision-making and design/develop data-driven solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                What I Do
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3" />
                  <p className="text-gray-300">Develop predictive models and perform statistical analysis using Python</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3" />
                  <p className="text-gray-300">Create interactive data visualizations and dashboards</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3" />
                  <p className="text-gray-300">Research cutting-edge AI technologies and LLMs</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3" />
                  <p className="text-gray-300">Develop applications with modern frameworks</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3" />
                  <p className="text-gray-300">Design and manage relational databases using SQL, MySQL</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 font-mono">Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300 font-mono text-sm">muhammadmudassirmagray7786@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="max-w-5xl w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-center text-blue-400 font-mono mb-12"></p>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all hover:scale-[1.02] ${
                  exp.current 
                    ? 'border-green-500/40 shadow-lg shadow-green-500/20' 
                    : 'border-blue-500/20 hover:border-blue-500/40'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-blue-400">{exp.title}</h3>
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 font-mono flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xl text-purple-400 font-mono">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0 font-mono text-sm">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-3 font-mono">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="max-w-6xl w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-center text-blue-400 font-mono mb-12"></p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border hover:scale-105 transition-all ${
                  project.current 
                    ? 'border-green-500/40 shadow-lg shadow-green-500/20' 
                    : 'border-blue-500/20 hover:border-blue-500/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-blue-400 font-mono">{project.category}</div>
                  {project.current && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30 font-mono">
                      Active
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-xs font-mono border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-sm font-mono"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="max-w-6xl w-full relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-center text-blue-400 font-mono mb-12"></p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800 text-gray-300 rounded-lg text-sm font-mono border border-slate-700 hover:border-blue-500/40 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="max-w-4xl w-full text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-blue-400 font-mono mb-8"></p>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and collaborations. Whether you have a question, a project idea, or just want to connect, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:muhammadmudassirmagray7786@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
            <a
              href="tel:+923479928151"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all border border-blue-500/20 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Me</span>
            </a>
          </div>
        </div>
      </section>

     
    </div>
  );
}