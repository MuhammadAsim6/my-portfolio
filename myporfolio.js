import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Award, Code, Briefcase, User, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample data - Replace with your actual information
  const profile = {
    name: "Your Name",
    title: "SQA Automation Engineer & Mobile App Developer",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    bio: "Quality-focused automation engineer and mobile app developer with expertise in building robust test frameworks and native Android applications. Passionate about ensuring software quality through comprehensive automated testing and creating seamless mobile experiences."
  };

  const skills = [
    "Selenium", "Playwright", "Java", "Kotlin", "Python",
    "TestNG", "JUnit", "Android SDK", "REST API Testing", "CI/CD",
    "Git", "Appium", "Page Object Model", "Maven", "Gradle"
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Test Automation Framework (Selenium)",
      description: "Comprehensive test automation framework for an e-commerce platform with 200+ test cases covering end-to-end user flows, payment processing, and inventory management. Implemented with Page Object Model and parallel execution.",
      tech: ["Selenium", "Java", "TestNG", "Maven", "Jenkins"],
      github: "https://github.com/yourusername/ecommerce-selenium",
      demo: ""
    },
    {
      id: 2,
      title: "Banking App Automation Suite (Playwright)",
      description: "Modern test automation suite for a banking web application using Playwright. Features include API testing, visual regression testing, and comprehensive reporting with screenshots and videos on failures.",
      tech: ["Playwright", "JavaScript", "CI/CD", "Allure Reports"],
      github: "https://github.com/yourusername/banking-playwright",
      demo: ""
    },
    {
      id: 3,
      title: "Task Manager Mobile App",
      description: "Native Android task management application with offline support, push notifications, and Material Design UI. Features include task categorization, reminders, and data synchronization with cloud storage.",
      tech: ["Kotlin", "Android SDK", "Room Database", "MVVM"],
      github: "https://github.com/yourusername/task-manager-app",
      demo: "https://play.google.com/store/apps/details?id=com.yourapp"
    },
    {
      id: 4,
      title: "Fitness Tracker App",
      description: "Android fitness application built with Java featuring workout tracking, calorie counter, progress charts, and social sharing capabilities. Integrated with Google Fit API for health data.",
      tech: ["Java", "Android SDK", "Firebase", "Google Fit API"],
      github: "https://github.com/yourusername/fitness-tracker",
      demo: "https://play.google.com/store/apps/details?id=com.yourapp"
    },
    {
      id: 5,
      title: "API Test Automation Framework",
      description: "Reusable REST API testing framework with data-driven testing capabilities. Supports multiple environments, request/response validation, and generates detailed test execution reports.",
      tech: ["Java", "Rest Assured", "TestNG", "JSON/XML"],
      github: "https://github.com/yourusername/api-automation",
      demo: ""
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "ISTQB Certified Tester - Foundation Level",
      issuer: "International Software Testing Qualifications Board",
      date: "2023",
      credential: "ISTQB-CTFL-123456"
    },
    {
      id: 2,
      name: "Selenium WebDriver with Java Certification",
      issuer: "Udemy / Test Automation University",
      date: "2023",
      credential: "UC-SELENIUM-789"
    },
    {
      id: 3,
      name: "Android Developer Certification",
      issuer: "Google",
      date: "2024",
      credential: "GOOGLE-AND-456"
    },
    {
      id: 4,
      name: "Kotlin for Android Developers",
      issuer: "JetBrains Academy",
      date: "2023",
      credential: "JB-KOTLIN-321"
    }
  ];

  const experience = [
    {
      id: 1,
      title: "Senior SQA Automation Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading test automation initiatives using Selenium and Playwright. Designed and implemented automated testing frameworks that reduced testing time by 60%. Mentoring junior QA engineers in test automation best practices."
    },
    {
      id: 2,
      title: "Android App Developer",
      company: "Mobile Innovations Ltd.",
      period: "2021 - 2022",
      description: "Developed multiple native Android applications using Java and Kotlin. Implemented MVVM architecture, integrated REST APIs, and ensured app quality through comprehensive unit and UI testing."
    },
    {
      id: 3,
      title: "QA Automation Engineer",
      company: "Software Testing Corp.",
      period: "2020 - 2021",
      description: "Created automated test scripts using Selenium WebDriver and Java. Performed API testing with REST Assured and integrated tests into CI/CD pipelines using Jenkins."
    }
  ];

  const navigation = [
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {profile.name}
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'text-gray-300 hover:text-purple-300'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
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
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-2 px-6 py-3 ${
                  activeSection === item.id
                    ? 'bg-purple-500/20 text-purple-300'
                    : 'text-gray-300'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl text-white">
                {profile.name.charAt(0)}
              </div>
              <h2 className="text-4xl font-bold text-white">{profile.name}</h2>
              <p className="text-xl text-purple-300">{profile.title}</p>
              <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">{profile.bio}</p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-4 pt-4">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-slate-800 rounded-full hover:bg-purple-500/20 transition-all">
                  <Github className="text-gray-300" size={24} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-800 rounded-full hover:bg-purple-500/20 transition-all">
                  <Linkedin className="text-gray-300" size={24} />
                </a>
                <a href={`mailto:${profile.email}`}
                   className="p-3 bg-slate-800 rounded-full hover:bg-purple-500/20 transition-all">
                  <Mail className="text-gray-300" size={24} />
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
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
                    className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                <p className="text-purple-300 text-lg mb-2">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Section */}
        {activeSection === 'certifications' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20"
                >
                  <div className="flex items-start space-x-3">
                    <Award className="text-purple-400 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{cert.name}</h3>
                      <p className="text-purple-300 mb-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm">Issued: {cert.date}</p>
                      <p className="text-gray-500 text-xs mt-2">Credential: {cert.credential}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}