import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Code, ChevronDown, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    bio: "Quality-focused automation engineer and mobile app developer with expertise in building robust test frameworks and native Android applications. Passionate about ensuring software quality through comprehensive automated testing and creating seamless mobile experiences."
  };

  const skills = [
    "Selenium", "Playwright", "Java", "Kotlin", "Python",
    "TestNG", "JUnit", "Android SDK", "Manual Testing", "CI/CD",
    "Git", "C#", "Page Object Model", "C++", "Gradle"
  ];

  const projects = [
    {
      id: 1,
      title: "Test Automation Framework (Selenium)",
      description: "Comprehensive test automation framework for a website with multiple test cases covering end-to-end user flows. Implemented with Page Object Model and parallel execution.",
      tech: ["Selenium", "Java", "TestNG"],
      github: "https://github.com/MuhammadAsim6/Website-Automation-with-Selenium",
      demo: ""
    },
    {
      id: 2,
      title: "Website Automation with Playwright",
      description: "Modern test automation suite for a web application using Playwright. Features include comprehensive reporting with screenshots and videos on failures.",
      tech: ["Playwright", "TypeScript", "CI/CD", "Allure Reports"],
      github: "https://github.com/MuhammadAsim6/Playwright_Website-Automation",
      demo: ""
    },
    {
      id: 3,
      title: "ShopEase Mobile App",
      description: "ShopEase Android App: E-commerce mobile app with azure database. Features include add to cart, products, and customer support with cloud storage.",
      tech: ["Java", "Android SDK", "Azure", "SQL"],
      github: "https://github.com/MuhammadAsim6/ShopEase_Project",
      demo: ""
    },
    {
      id: 4,
      title: "Dijkstra-Visualizer-App",
      description: "Dijkstra-Visualizer application built with Java, A simple and interactive tool to visualize Dijkstra's shortest path algorithm.",
      tech: ["Java", "Android SDK", "XML", "Android Studio"],
      github: "https://github.com/MuhammadAsim6/Dijkstra-Visualizer-App",
      demo: ""
    },
    {
      id: 5,
      title: "Automata-Simulator",
      description: "This App provides an interactive environment for users to create, modify, and test Finite Automata (DFA/NFA) With a user-friendly interface and step-by-step execution capabilities, it serves as an educational resource for students and professionals studying theoretical computer science.",
      tech: ["Java", "Android SDK", "XML", "Android Studio"],
      github: "https://github.com/MuhammadAsim6/Automata-Simulator",
      demo: ""
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Software Quality Assurance (SQA) Bootcamp Equivalent to internship–MAJU University",
      issuer: "MAJU",
      date: "2025"
    },
    {
      id: 2,
      name: "Android Developer Certification",
      issuer: "MAJU",
      date: "2024"
    }
  ];

  const navigation = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {profile.name.split(' ')[0]}
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-gray-300 hover:text-emerald-400 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-emerald-500/20">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-6 py-3 text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-4xl animate-fade-in">
          <div className="relative inline-block">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-7xl text-white shadow-2xl shadow-emerald-500/50 animate-float">
              {profile.name.charAt(0)}
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <Code className="text-white" size={28} />
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
            {profile.name}
          </h1>
          <p className="text-2xl sm:text-3xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
            {profile.title}
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {profile.bio}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4 pt-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" 
               className="p-4 bg-slate-800/50 rounded-full hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-cyan-500/20 border border-emerald-500/30 hover:border-emerald-400/50 transition-all transform hover:scale-110">
              <Github className="text-emerald-400" size={24} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-4 bg-slate-800/50 rounded-full hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-cyan-500/20 border border-emerald-500/30 hover:border-emerald-400/50 transition-all transform hover:scale-110">
              <Linkedin className="text-emerald-400" size={24} />
            </a>
            <a href={`mailto:${profile.email}`}
               className="p-4 bg-slate-800/50 rounded-full hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-cyan-500/20 border border-emerald-500/30 hover:border-emerald-400/50 transition-all transform hover:scale-110">
              <Mail className="text-emerald-400" size={24} />
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="mt-8 inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 backdrop-blur-sm p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-bold text-emerald-400">5+</div>
                  <p className="text-xl text-gray-300">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate SQA Automation Engineer and Mobile App Developer with a strong focus on quality and innovation. My expertise lies in creating robust test automation frameworks and developing intuitive Android applications.
              </p>
              <p>
                With hands-on experience in Selenium, Playwright, Java, and Kotlin, I bridge the gap between quality assurance and software development to deliver exceptional digital experiences.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies to provide the best solutions for modern software challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20"
              >
                <div className="text-center">
                  <p className="text-gray-300 group-hover:text-emerald-400 transition-colors font-medium">
                    {skill}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 rounded-xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Code className="text-emerald-400 group-hover:text-cyan-400 transition-colors" size={32} />
                  <span className="text-xs text-gray-500 bg-slate-800/50 px-3 py-1 rounded-full border border-emerald-500/20">
                    {project.tech.length} Technologies
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm text-emerald-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-lg text-emerald-300 hover:from-emerald-500/30 hover:to-cyan-500/30 hover:border-emerald-400/50 transition-all"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl border border-emerald-500/30">
                    <Award className="text-emerald-400" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-emerald-400 font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm">Issued: {cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/50"
            >
              Send Me an Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800/50 border-2 border-emerald-500/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 hover:border-emerald-400 transition-all transform hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-emerald-500/20">
            <p className="text-gray-500">
              © 2025 {profile.name}. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}