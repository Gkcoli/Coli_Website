'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  SiAndroidstudio,
  SiFigma,
  SiGit,
  SiGithub,
  SiKotlin,
  SiOpencv,
  SiPhp,
  SiReact,
  SiScikitlearn,
  SiVercel,
  SiYii,
} from 'react-icons/si';

// Skills Carousel Component
function SkillsCarousel({ theme }: { theme: 'dark' | 'light' }) {
  const [current, setCurrent] = useState(0);
  const skillsData = [
    {
      cat: 'Languages',
      accent: '#a8f5a8',
      items: [
        { name: 'Python', icon: '/python.png', img: true },
        { name: 'Java', icon: '/java.png', img: true },
        { name: 'JavaScript', icon: '/javascript.png', img: true },
        { name: 'SQL', icon: '/sql.png', img: true },
        { name: 'PHP', icon: 'php' },
        { name: 'Kotlin', icon: 'kotlin' },
      ],
    },
    {
      cat: 'Technologies',
      accent: '#7dd3fc',
      items: [
        { name: 'Machine Learning', icon: 'ml' },
        { name: 'TensorFlow', icon: '/Tensorflow_logo.svg.webp', img: true },
        { name: 'Scikit-learn', icon: 'sklearn' },
        { name: 'OpenCV', icon: 'cv' },
        { name: 'React', icon: 'react' },
        { name: 'Node.js', icon: '/nodejs.png', img: true },
      ],
    },
    {
      cat: 'Tools',
      accent: '#c4a7f5',
      items: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'VS Code', icon: '/vscode.png', img: true },
        { name: 'Vercel', icon: 'vercel' },
        { name: 'Yii2', icon: 'yii2' },
        { name: 'Figma', icon: 'figma' },
        { name: 'Android Studio', icon: 'android' },
      ],
    },
  ];

  const active = skillsData[current];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {skillsData.map((s, i) => (
            <button
              key={s.cat}
              onClick={() => setCurrent(i)}
              style={current === i ? { color: s.accent, borderColor: `${s.accent}55`, background: `${s.accent}18` } : {}}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                current === i ? '' : theme === 'light' ? 'text-gray-800 border-transparent hover:text-gray-900 hover:border-gray-400' : 'text-gray-500 border-transparent hover:text-gray-300 hover:border-gray-700'
              }`}
            >
              {s.cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
          {active.items.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 group ${
                theme === 'light' 
                  ? 'bg-gray-100 border-gray-300 hover:border-gray-400 hover:bg-gray-150' 
                  : 'bg-[#161616] border-[#242424] hover:border-[#333] hover:bg-[#1c1c1c]'
              }`}
            >
              <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                {item.img ? (
                  <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain opacity-75 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <IconComponent icon={item.icon} theme={theme} />
                )}
              </div>
              <span className={`text-xs font-medium transition-colors leading-tight ${
                theme === 'light' 
                  ? 'text-gray-700 group-hover:text-gray-900' 
                  : 'text-gray-400 group-hover:text-gray-200'
              }`}>{item.name}</span>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex gap-2 mt-6 justify-center">
        {skillsData.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={current === i ? { background: s.accent, width: '22px' } : {}}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === i ? '' : theme === 'light' ? 'bg-gray-400 w-1.5 hover:bg-gray-500' : 'bg-[#333] w-1.5 hover:bg-[#555]'
            }`}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

// Icon Component for SVG icons
function IconComponent({ icon, theme }: { icon: string; theme?: 'dark' | 'light' }) {
  const iconProps =
    theme === 'light' 
      ? 'w-10 h-10 text-gray-800 opacity-80 group-hover/item:opacity-100 transition-opacity' 
      : 'w-10 h-10 text-gray-300 opacity-80 group-hover/item:opacity-100 transition-opacity'; 

  switch (icon) {
    case 'ml':
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v2m-4 0h8a3 3 0 013 3v7a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3z"
          />
          <circle cx="9.5" cy="11" r="1" fill="currentColor" />
          <circle cx="14.5" cy="11" r="1" fill="currentColor" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 15h6"
          />
        </svg>
      );
    case 'sklearn':
      return <SiScikitlearn className={iconProps} aria-label="Scikit-learn icon" />;
    case 'cv':
      return <SiOpencv className={iconProps} aria-label="OpenCV icon" />;
    case 'react':
      return <SiReact className={iconProps} aria-label="React icon" />;
    case 'git':
      return <SiGit className={iconProps} aria-label="Git icon" />;
    case 'github':
      return <SiGithub className={iconProps} aria-label="GitHub icon" />;
    case 'vercel':
      return <SiVercel className={iconProps} aria-label="Vercel icon" />;
    case 'php':
      return <SiPhp className={iconProps} aria-label="PHP icon" />;
    case 'kotlin':
      return <SiKotlin className={iconProps} aria-label="Kotlin icon" />;
    case 'yii2':
      return <SiYii className={iconProps} aria-label="Yii icon" />;
    case 'figma':
      return <SiFigma className={iconProps} aria-label="Figma icon" />;
    case 'android':
      return <SiAndroidstudio className={iconProps} aria-label="Android Studio icon" />;
    default:
      return <div className={`${iconProps} bg-gray-600 rounded`} />;
  }
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const projects = [
    {
      title: "Data-Driven Analysis of Daily Stress Levels and Stress-Relief Activities",
      role: "Data Scientist",
      year: "2026",
      description: "Analyzed smartwatch-generated stress data to identify patterns and correlations between stress levels and daily activities. Generated visual insights through time-series analysis to identify effective stress-relief activities and peak stress periods.",
      technologies: ["Python", "Pandas", "Matplotlib", "NumPy", "Jupyter Notebook"],
      github_url: "https://github.com/Gkcoli/Data-Driven-Analysis-of-Daily-Stress-Levels-and-the-Effectiveness-of-Stress-Relief-Activities"
    },
    {
      title: "Meteorologically Aware AI for Enhanced Heat-Index Forecasting in the Philippine-Context",
      role: "Data Engineer",
      year: "2026",
      description: "Collected and structured heat index datasets by scraping PAGASA benchmarks, LGU Facebook pages, and X sources to build a clean dataset for model training. Enabled reliable heat index forecasting across 23 PAGASA stations with strong performance metrics (RMSE = 2.35°C, MAE = 1.74°C, R² = 0.82).",
      technologies: ["Python", "Pandas", "NumPy", "XGBoost", "Google Earth Engine", "Jupyter Notebook"],
      github_url: "https://github.com/machiwao/Meteorologically-aware-AI-for-Enhanced-Heat-Index-Forecasting-in-the-Philippine-Context"
    },
    {
      title: "ArtDecode: Leveraging Convolutional Neural Networks for Multi-Class Art Style Classification",
      role: "Machine Learning Engineer",
      year: "2025",
      description: "Designed and trained a custom Convolutional Neural Network (CNN) to classify art styles using the WikiArt dataset. Achieved 63.08% classification accuracy across multiple art styles through systematic model tuning and dataset preprocessing.",
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
      github_url: "https://github.com/machiwao/ArtDecode-Leveraging-Convolutional-Neural-Networks-for-Multi-Class-Art-Style-Classification"
    },
    {
      title: "Learning Through Play: Evaluating Reinforcement Learning Algorithms in Integer Damath",
      role: "Machine Learning Engineer",
      year: "2025",
      description: "Developed and implemented reinforcement learning agents including Q-Learning, Monte Carlo, and a custom Dyna-Q model to simulate intelligent gameplay strategies in Integer Damath. Created the Dyna-Q algorithm from scratch and evaluated algorithm efficiency and learning performance to compare learning speed and decision accuracy across the three RL approaches.",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
      github_url: "https://github.com/machiwao/Learning-Through-Play-Evaluating-Reinforcement-Learning-Algorithms-in-Integer-Damath"
    },
    {
      title: "Predicting Flight Delays: Using Regression Analysis",
      role: "Machine Learning Engineer",
      year: "2024",
      description: "Built a machine learning model using Random Forest Regression to predict flight arrival delays based on operational and scheduling features. Achieved strong predictive performance through systematic feature selection and hyperparameter tuning.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter Notebook"],
      github_url: "https://github.com/Gkcoli/Predicting-Flight-Delays-A-Machine-Learning-Approach/tree/main"
    }
  ];

  return (
    <div className={`min-h-screen bg-[#0f0f0f] text-white ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div 
              className="text-base sm:text-lg font-semibold bg-gradient-to-r from-[#a8f5a8] to-[#7dd3c0] bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Gian Karl Colinares
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className={`text-sm transition-all duration-300 hover:scale-105 ${theme === 'light' ? 'text-gray-800 hover:text-[#7dd3c0]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}>
                About
              </a>
              <a href="#education" className={`text-sm transition-all duration-300 hover:scale-105 ${theme === 'light' ? 'text-gray-800 hover:text-[#7dd3c0]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}>
                Education
              </a>
              <a href="#projects" className={`text-sm transition-all duration-300 hover:scale-105 ${theme === 'light' ? 'text-gray-800 hover:text-[#7dd3c0]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}>
                Projects
              </a>
              <a href="#seminars" className={`text-sm transition-all duration-300 hover:scale-105 ${theme === 'light' ? 'text-gray-800 hover:text-[#7dd3c0]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}>
                Seminars
              </a>
              <a href="#experience-activities" className={`text-sm transition-all duration-300 hover:scale-105 ${theme === 'light' ? 'text-gray-800 hover:text-[#7dd3c0]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}>
                Experience & Activities
              </a>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className={`p-2 rounded-full border transition-colors ${theme === 'light' ? 'border-gray-400 text-gray-800 hover:text-[#a8f5a8] hover:border-[#a8f5a8]' : 'border-gray-700 text-gray-300 hover:text-[#a8f5a8] hover:border-[#a8f5a8]'}`}
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0L16.95 7.05M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3c.12.68.19 1.38.19 2.1a7 7 0 007 7c.72 0 1.42-.07 2.1-.19z" />
                  </svg>
                )}
              </button>
              
              {/* Social Icons */}
              <div className={`flex items-center gap-3 ml-2 pl-4 border-l ${theme === 'light' ? 'border-gray-300' : 'border-gray-700'}`}>
                <a href="https://github.com/Gkcoli" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub"
                   className={`relative group transition-all duration-300 hover:scale-110 ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 rounded-md border text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap ${theme === 'light' ? 'border-gray-300 bg-gray-100 text-gray-800' : 'border-gray-700 bg-[#1a1a1a] text-gray-200'}`}>
                    GitHub
                  </span>
                </a>
                <a href="https://linkedin.com/in/gkcolinares/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"
                   className={`relative group transition-all duration-300 hover:scale-110 ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 rounded-md border text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap ${theme === 'light' ? 'border-gray-300 bg-gray-100 text-gray-800' : 'border-gray-700 bg-[#1a1a1a] text-gray-200'}`}>
                    LinkedIn
                  </span>
                </a>
                <a href="mailto:gkcolinares@gmail.com" title="Email" aria-label="Email"
                   className={`relative group transition-all duration-300 hover:scale-110 ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 rounded-md border text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap ${theme === 'light' ? 'border-gray-300 bg-gray-100 text-gray-800' : 'border-gray-700 bg-[#1a1a1a] text-gray-200'}`}>
                    Email
                  </span>
                </a>
              </div>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-2">
              <motion.button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className={`p-2 rounded-full border transition-colors ${theme === 'light' ? 'border-gray-400 text-gray-800 hover:text-[#a8f5a8] hover:border-[#a8f5a8]' : 'border-gray-700 text-gray-300 hover:text-[#a8f5a8] hover:border-[#a8f5a8]'}`}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0L16.95 7.05M7.05 16.95l-1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3c.12.68.19 1.38.19 2.1a7 7 0 007 7c.72 0 1.42-.07 2.1-.19z" />
                  </svg>
                )}
              </motion.button>

              <motion.button
                className={`p-2 rounded-lg transition-colors ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8] hover:bg-gray-200' : 'text-gray-400 hover:text-[#a8f5a8] hover:bg-gray-800/50'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden border-t border-gray-800/50 bg-[#0f0f0f]/98 backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                <a 
                  href="#about" 
                  className={`block transition-colors py-2 ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#education" 
                  className={`block transition-colors py-2 ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Education
                </a>
                <a 
                  href="#projects" 
                  className={`block transition-colors py-2 ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#seminars" 
                  className={`block transition-colors py-2 ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Seminars
                </a>
                <a 
                  href="#experience-activities" 
                  className={`block transition-colors py-2 ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience & Activities
                </a>
                
                {/* Mobile Social Icons */}
                <div className={`flex items-center gap-6 pt-4 border-t ${theme === 'light' ? 'border-gray-300' : 'border-gray-800/50'}`}>
                  <a href="https://github.com/Gkcoli" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub"
                     className={`transition-colors ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/gkcolinares/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"
                     className={`transition-colors ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="mailto:gkcolinares@gmail.com" title="Email" aria-label="Email"
                     className={`transition-colors ${theme === 'light' ? 'text-gray-800 hover:text-[#a8f5a8]' : 'text-gray-400 hover:text-[#a8f5a8]'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div 
              className="space-y-6 md:space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <motion.p 
                  className={`text-lg sm:text-xl md:text-2xl mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-gray-400'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Hi, I&apos;m
                </motion.p>
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Gian Karl<br />Colinares
                </motion.h1>
              </div>
              
              <div className={`space-y-4 leading-relaxed text-sm sm:text-base ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
                <p>
                  Computer Science student focused on machine learning and data science, with a particular interest in building data-driven systems that address real-world, socially relevant problems.
                </p>
                <p className="text-xs sm:text-sm">
                  📧 gkcolinares@gmail.com | 📱 0956-253-5772
                </p>
              </div>
            </motion.div>

            {/* Right - Profile Image */}
            <motion.div 
              className="flex justify-center lg:justify-end order-first lg:order-last"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-[#a8f5a8] to-[#7dd3c0] p-1">
                  <div className="w-full h-full rounded-full bg-[#0f0f0f] flex items-center justify-center overflow-hidden">
                    {/* Profile image */}
                    <img 
                      src="/DSC_0402.JPG" 
                      alt="Gian Karl Colinares" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
              <p>
                I&apos;m a Computer Science student with a growing practice in machine learning and data science, focused on turning messy data into useful, human-centered insights and tools.
              </p>
              <p>
                I care about applied ML, analytics, and AI that can support communities and public-impact work, especially as newer generative and data-centric methods become part of everyday systems.
              </p>
              <p>
                Right now I&apos;m focused on deepening my machine learning and data science practice through projects, collaborations, and experiments that move from raw data to real-world impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Modern Carousel */}
      <section className={`py-12 md:py-20 px-4 sm:px-6 lg:px-8 ${theme === 'light' ? 'bg-white' : 'bg-[#0f0f0f]'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>

          <SkillsCarousel theme={theme} />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          
          <div className="space-y-6 md:space-y-8">
            <motion.div 
              className="border-l-4 border-[#a8f5a8] pl-4 sm:pl-6 md:pl-8 py-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">BS Computer Science - Machine Learning</h3>
              <p className={`text-sm sm:text-base mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>National University - Manila • 2022 - Present</p>
              <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-gray-800' : 'text-gray-500'}`}>Specializing in Machine Learning</p>
            </motion.div>
            
            <motion.div 
              className="border-l-4 border-[#7dd3c0] pl-4 sm:pl-6 md:pl-8 py-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Information and Communication Technology</h3>
              <p className={`text-sm sm:text-base mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>Army's Angels Integrated School • 2020 - 2022</p>
              <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-gray-800' : 'text-gray-500'}`}>Senior High School - ICT Strand</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h2>

          <motion.div
            className="relative bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-[#242424] hover:border-[#333] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span className="inline-block text-xs font-medium text-[#a8f5a8] bg-[#a8f5a8]/10 border border-[#a8f5a8]/25 px-3 py-1 rounded-full mb-3">
                  Internship
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-white">Machine Learning & Android Developer Intern</h3>
                <p className={`text-sm mt-1 ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>DOST-ITDI &nbsp;·&nbsp; Central Bicutan, Taguig City</p>
              </div>
              <span className={`text-xs whitespace-nowrap mt-1 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'}`}>Mar 2026 – May 2026</span>
            </div>
            <ul className="space-y-2 mt-4">
              <li className={`flex gap-3 text-sm leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
                <span className="text-[#a8f5a8] mt-1 flex-shrink-0">▸</span>
                Designed and developed a mobile application for LGUs and households to streamline waste management and segregation.
              </li>
              <li className={`flex gap-3 text-sm leading-relaxed ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>
                <span className="text-[#a8f5a8] mt-1 flex-shrink-0">▸</span>
                Implemented a MobileNetV2-based waste classification model to automatically identify and categorize waste materials from images.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Academic Projects
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-[#222] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start gap-2 mb-3 md:mb-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#a8f5a8]">{project.title}</h3>
                  <span className={`text-xs sm:text-sm flex-shrink-0 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'}`}>{project.year}</span>
                </div>
                <p className={`text-xs sm:text-sm mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                  Role: <span className={`font-medium ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>{project.role}</span>
                </p>
                <p className={`leading-relaxed text-xs sm:text-sm mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-gray-400'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-[#a8f5a8] text-black px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#a8f5a8] hover:text-[#7dd3c0] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Seminars & Workshops */}
          <div id="seminars" className="mt-12 md:mt-16">
            <motion.h3 
              className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Seminars, Trainings & Workshops
            </motion.h3>
            <div className="space-y-3 md:space-y-4">
              <motion.div 
                className="bg-[#1a1a1a] rounded-lg md:rounded-xl p-5 md:p-8 hover:bg-[#222] transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: 5 }}
              >
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Concourse: Charting New Horizons in Technology</h4>
                <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>College of Computing and Information Technology Student Council • 2025</p>
              </motion.div>
              <motion.div 
                className="bg-[#1a1a1a] rounded-lg md:rounded-xl p-5 md:p-8 hover:bg-[#222] transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ x: 5 }}
              >
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Navigating the Path to Academic Publishing in Computer Science</h4>
                <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>Computer Science Society • 2024</p>
              </motion.div>
              <motion.div 
                className="bg-[#1a1a1a] rounded-lg md:rounded-xl p-5 md:p-8 hover:bg-[#222] transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Dev Showcase: Mastering Git & GitHub</h4>
                <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>GDG on Campus - National University - Manila • 2024</p>
              </motion.div>
              <motion.div 
                className="bg-[#1a1a1a] rounded-lg md:rounded-xl p-5 md:p-8 hover:bg-[#222] transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 5 }}
              >
                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Collab Plus: Optimizing Team Collaboration with Google Workspace</h4>
                <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'}`}>GDG on Campus - National University - Manila • 2024</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Self Projects Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Self Projects
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                title: 'F1 Prediction: Grand Prix Winners',
                role: 'Data Scientist',
                year: '2026',
                highlights: [
                  'Built an ML pipeline on 70+ years of F1 data; top Random Forest model hit 92% accuracy and 0.946 ROC-AUC for race winner prediction.',
                  'Engineered rolling driver/constructor form features — qualifying and grid positions carry over 59% of predictive weight.',
                  'Secondary model forecasts season-long WDC with 96% accuracy and 1.00 ROC-AUC.',
                ],
                tags: ['Python', 'Scikit-learn', 'Random Forest', 'Pandas'],
              },
              {
                title: 'IMDb Top 250 Movies of All Time',
                role: 'Data Scientist',
                year: '2026',
                highlights: [
                  'One-Way ANOVA (p = 0.596) proved a film\'s primary genre has no statistically significant bias on its IMDb score.',
                  '5-year rolling-mean forecasting tracks rating shifts across decades and projects top-tier scores up to 2030.',
                ],
                tags: ['Python', 'Pandas', 'Matplotlib', 'SciPy'],
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="bg-[#1a1a1a] rounded-2xl p-6 md:p-8 border border-[#242424] hover:border-[#333] hover:bg-[#1e1e1e] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h4 className="text-base md:text-lg font-semibold text-[#a8f5a8] leading-snug">{p.title}</h4>
                  <span className={`text-xs flex-shrink-0 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'}`}>{p.year}</span>
                </div>
                <p className={`text-xs mb-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'}`}>Role: <span className={`font-medium ${theme === 'light' ? 'text-slate-900' : 'text-gray-300'}`}>{p.role}</span></p>
                <ul className="space-y-2 mb-5">
                  {p.highlights.map((h, hi) => (
                    <li key={hi} className={`flex gap-2.5 text-xs leading-relaxed ${theme === 'light' ? 'text-gray-800' : 'text-gray-400'}`}>
                      <span className="text-[#a8f5a8] flex-shrink-0 mt-0.5">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t, ti) => (
                    <span key={ti} className="text-[11px] bg-[#a8f5a8] text-black px-2.5 py-1 rounded-full font-medium">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Activities Section */}
      <section id="experience-activities" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience & Activities
          </motion.h2>
          
          <div className="space-y-4 md:space-y-6">
            <motion.div 
              className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-[#222] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Student Council Treasurer</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'light' ? 'text-gray-800' : 'text-gray-500'}`}>
                Handled budgeting and financial tracking for student council activities and events.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-[#222] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Student Council Auditor</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'light' ? 'text-gray-800' : 'text-gray-500'}`}>
                Assisted in reviewing financial records and ensuring transparency and accuracy in student council funds.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-[#222] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Machine Learning Projects</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'light' ? 'text-gray-800' : 'text-gray-500'}`}>
                Worked on multiple machine learning projects including prediction models and AI-based applications.
              </p>
            </motion.div>

            <motion.div 
              className="bg-[#1a1a1a] rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-[#222] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Software Development Projects</h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'light' ? 'text-gray-800' : 'text-gray-500'}`}>
                Developed applications as part of academic and personal projects using modern technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f] border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'}`}>© 2026 Gian Karl Colinares</p>
          <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-gray-700' : 'text-gray-500'}`}>Built with React and Vercel</p>
        </div>
      </footer>
    </div>
  );
}
