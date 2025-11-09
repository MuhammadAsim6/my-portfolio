import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Code, Terminal, Sparkles, Rocket, Zap, Brain, Star, ChevronRight, Play, Pause } from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [particles, setParticles] = useState([]);
  const [activeProject, setActiveProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [cursorTrail, setCursorTrail] = useState([]);
  const canvasRef = useRef(null);
  
  const fullText = "< Building Quality. Creating Innovation. />";

  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Cursor trail effect
      setCursorTrail(prev => [
        ...prev.slice(-20),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
    }
  }, [typedText]);

  // Floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  // Auto-rotate projects
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    let animationId;
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0ff';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const profile = {
    name: "Muhammad Asim",
    title: "SQA Automation & Mobile App Developer",
    email: "m.asim6@outlook.com",
    github: "https://github.com/MuhammadAsim6",
    linkedin: "https://linkedin.com/in/MuhammadAsim6",
    bio: "Quality-focused automation engineer and mobile app developer with expertise in building robust test frameworks and native Android applications."
  };

  const skills = [
    { name: "Selenium", level: 90, icon: "🔍", category: "Automation", color: "from-cyan-500 to-blue-500" },
    { name: "Playwright", level: 85, icon: "🎭", category: "Automation", color: "from-blue-500 to-purple-500" },
    { name: "Java", level: 88, icon: "☕", category: "Programming", color: "from-orange-500 to-red-500" },
    { name: "Kotlin", level: 85, icon: "🎯", category: "Programming", color: "from-purple-500 to-pink-500" },
    { name: "Python", level: 80, icon: "🐍", category: "Programming", color: "from-green-500 to-teal-500" },
    { name: "TestNG", level: 90, icon: "✅", category: "Testing", color: "from-teal-500 to-cyan-500" },
    { name: "JUnit", level: 88, icon: "🧪", category: "Testing", color: "from-cyan-500 to-blue-500" },
    { name: "Android SDK", level: 87, icon: "📱", category: "Mobile", color: "from-green-500 to-emerald-500" },
    { name: "Git", level: 92, icon: "🔀", category: "Tools", color: "from-orange-500 to-amber-500" },
    { name: "CI/CD", level: 83, icon: "🔄", category: "DevOps", color: "from-blue-500 to-indigo-500" },
    { name: "C#", level: 75, icon: "💎", category: "Programming", color: "from-purple-500 to-violet-500" },
    { name: "C++", level: 78, icon: "⚡", category: "Programming", color: "from-yellow-500 to-orange-500" }
  ];

  const projects = [
    {
      id: 1,
      title: "Test Automation Framework",
      subtitle: "Selenium WebDriver",
      description: "Comprehensive test automation framework with Page Object Model and parallel execution capabilities for end-to-end testing.",
      tech: ["Selenium", "Java", "TestNG"],
      github: "https://github.com/MuhammadAsim6/Website-Automation-with-Selenium",
      gradient: "from-cyan-500 to-blue-500",
      icon: "🔍",
      stats: { tests: "200+", coverage: "85%" }
    },
    {
      id: 2,
      title: "Playwright Automation Suite",
      description: "Modern test automation with visual regression testing, comprehensive reporting with screenshots and failure analysis.",
      tech: ["Playwright", "TypeScript", "CI/CD", "Allure"],
      github: "https://github.com/MuhammadAsim6/Playwright_Website-Automation",
      gradient: "from-green-500 to-teal-500",
      icon: "🎭",
      stats: { speed: "3x faster", reliability: "99%" }
    },
    {
      id: 3,
      title: "ShopEase",
      subtitle: "E-Commerce Android App",
      description: "Full-featured e-commerce mobile application with Azure database integration, shopping cart, and real-time customer support.",
      tech: ["Java", "Android SDK", "Azure", "SQL"],
      github: "https://github.com/MuhammadAsim6/ShopEase_Project",
      gradient: "from-purple-500 to-pink-500",
      icon: "🛒",
      stats: { users: "1K+", rating: "4.8★" }
    },
    {
      id: 4,
      title: "Dijkstra Visualizer",
      description: "Interactive visualization tool for Dijkstra's shortest path algorithm with step-by-step execution and graph manipulation.",
      tech: ["Java", "Android SDK", "XML"],
      github: "https://github.com/MuhammadAsim6/Dijkstra-Visualizer-App",
      gradient: "from-orange-500 to-red-500",
      icon: "🗺️",
      stats: { nodes: "100+", animations: "Smooth" }
    },
    {
      id: 5,
      title: "Automata Simulator",
      description: "Educational tool for creating and testing Finite Automata (DFA/NFA) with interactive visualization and step-by-step execution.",
      tech: ["Java", "Android SDK", "XML"],
      github: "https://github.com/MuhammadAsim6/Automata-Simulator",
      gradient: "from-indigo-500 to-purple-500",
      icon: "🤖",
      stats: { states: "Unlimited", modes: "DFA/NFA" }
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Software Quality Assurance Bootcamp",
      issuer: "MAJU University",
      date: "2025",
      icon: "🎓",
      color: "from-green-400 to-cyan-400"
    },
    {
      id: 2,
      name: "Android Developer Certification",
      issuer: "MAJU",
      date: "2024",
      icon: "📱",
      color: "from-blue-400 to-purple-400"
    }
  ];

  const testimonials = [
    { text: "Outstanding automation skills!", author: "Tech Lead", rating: 5 },
    { text: "Delivers quality code every time.", author: "Project Manager", rating: 5 },
    { text: "Excellent problem-solving abilities.", author: "Senior Developer", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Matrix Rain Background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-10 z-0" />

      {/* Animated Background with Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity: 0.6
            }}
          />
        ))}
        
        {/* Cursor trail */}
        {cursorTrail.map((point, index) => (
          <div
            key={point.id}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full pointer-events-none"
            style={{
              left: point.x,
              top: point.y,
              opacity: 1 - (index / cursorTrail.length),
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.1s'
            }}
          />
        ))}
        
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease'
          }}
        />
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-full px-8 py-3 shadow-2xl shadow-cyan-500/20 animate-slide-down">
        <div className="flex items-center space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hover:scale-110 transition-transform">
            MA
          </button>
          <div className="hidden md:flex space-x-6">
            {['About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-gray-300 hover:text-cyan-400 transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all" />
              </button>
            ))}
          </div>
          <button className="md:hidden text-cyan-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Terminal size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
          {/* 3D Rotating Icon */}
          <div className="inline-block relative perspective-1000">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center transform-3d animate-rotate-3d shadow-2xl">
              <Terminal className="text-white" size={64} />
            </div>
          </div>

          {/* Terminal typing effect */}
          <div className="font-mono text-green-400 text-xl mb-4 animate-fade-in">
            {typedText}<span className="animate-pulse">|</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              {profile.name}
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full backdrop-blur hover:scale-110 transition-transform cursor-pointer">
              🔍 SQA Automation
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-full backdrop-blur hover:scale-110 transition-transform cursor-pointer">
              📱 Mobile Developer
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full backdrop-blur hover:scale-110 transition-transform cursor-pointer">
              ⚡ Tech Enthusiast
            </span>
          </div>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {profile.bio}
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer"
               className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center gap-2">
              <Github size={20} />
              View GitHub
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-slate-800/50 border-2 border-cyan-500/50 rounded-xl font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all transform hover:scale-105 flex items-center gap-2">
              <Linkedin size={20} />
              Connect
            </a>
            <button
              onClick={() => {
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 3000);
              }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Star size={20} />
              Hire Me
            </button>
          </div>

          {/* Confetti Effect */}
          {showConfetti && (
            <div className="fixed inset-0 pointer-events-none z-50">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '-10px',
                    animationDelay: `${Math.random() * 0.5}s`,
                    animationDuration: `${2 + Math.random()}s`
                  }}
                />
              ))}
            </div>
          )}

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {[
              { label: "Projects", value: "5+", icon: Rocket },
              { label: "Technologies", value: "12+", icon: Code },
              { label: "Certifications", value: "2", icon: Award },
              { label: "GitHub Stars", value: "50+", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="group bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:scale-110 cursor-pointer">
                <stat.icon className="text-cyan-400 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform" size={32} />
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section with Interactive Cards */}
      <section id="about" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Get to know the developer behind the code</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Fast Learner", desc: "Quick to adapt to new technologies and frameworks, always staying ahead.", gradient: "from-cyan-500 to-blue-500" },
              { icon: Brain, title: "Problem Solver", desc: "Passionate about finding elegant solutions to complex challenges.", gradient: "from-green-500 to-teal-500" },
              { icon: Sparkles, title: "Quality Focused", desc: "Committed to delivering high-quality, tested code in every project.", gradient: "from-purple-500 to-pink-500" }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105 hover:-rotate-2 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Animated Bars */}
      <section id="skills" className="relative py-32 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Hover to see proficiency levels</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-slate-900/50 backdrop-blur border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:scale-110 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Progress background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                  style={{ clipPath: `inset(${100 - skill.level}% 0 0 0)` }}
                />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{skill.icon}</div>
                  <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">{skill.name}</h3>
                  <div className="text-sm text-gray-500 group-hover:text-cyan-400 transition-colors">{skill.level}%</div>
                </div>
                
                {/* Hover tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 border border-cyan-500/50 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {skill.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section id="projects" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Swipe through my best work</p>
          </div>

          {/* Project Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeProject * 100}%)` }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="min-w-full px-4"
                  >
                    <div className="bg-slate-900/50 backdrop-blur border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all">
                      {/* Project Header */}
                      <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center text-9xl animate-pulse">
                          {project.icon}
                        </div>
                        <div className="absolute top-6 right-6 flex gap-2">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="bg-black/30 backdrop-blur px-4 py-2 rounded-full text-sm">
                              <span className="font-bold">{value}</span> {key}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-8 space-y-6">
                        <div>
                          <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
                          {project.subtitle && (
                            <p className="text-cyan-400 text-lg font-semibold">{project.subtitle}</p>
                          )}
                        </div>
                        
                        <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Button */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${project.gradient} rounded-2xl font-bold text-lg hover:shadow-2xl transition-all group`}
                        >
                          <Github size={24} />
                          View Project
                          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => setActiveProject((activeProject - 1 + projects.length) % projects.length)}
                className="p-3 bg-slate-800/50 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all"
              >
                <ChevronRight size={24} className="rotate-180" />
              </button>
              
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeProject 
                        ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-500' 
                        : 'w-2 bg-gray-700 hover:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setActiveProject((activeProject + 1) % projects.length)}
                className="p-3 bg-slate-800/50 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all"
              >
                <ChevronRight size={24} />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 bg-slate-800/50 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all ml-4"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-32 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Certifications
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="group bg-slate-900/50 backdrop-blur border border-gray-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:rotate-12 transition-transform`}>
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{cert.name}</h3>
                <p className="text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-cyan-400 font-semibold">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                What Others Say
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur border border-gray-800 rounded-3xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="text-cyan-400 font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
            >
              <Mail size={24} />
              {profile.email}
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 border border-cyan-500/30 rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all hover:scale-110"
            >
              <Github size={32} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 border border-cyan-500/30 rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all hover:scale-110"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Muhammad Asim. Built with React & Tailwind CSS.
          </p>
          <p className="text-cyan-400 mt-2 font-mono text-sm">
            &lt;/&gt; with passion
          </p>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(5px); }
        }
        
        @keyframes rotate-3d {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(360deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes slide-down {
          from { transform: translate(-50%, -100%); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float-particle { animation: float-particle linear infinite; }
        .animate-rotate-3d { animation: rotate-3d 20s linear infinite; }
        .animate-gradient { animation: gradient 3s ease infinite; background-size: 200% 200%; }
        .animate-confetti { animation: confetti linear forwards; }
        .animate-slide-down { animation: slide-down 0.5s ease-out; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        .perspective-1000 { perspective: 1000px; }
        .transform-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
}