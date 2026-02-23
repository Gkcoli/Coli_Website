export default function Home() {
  const skills = [
    { name: "Python", color: "bg-[#e8e5a0]", icon: "🐍" },
    { name: "Java", color: "bg-[#a8c5d1]", icon: "☕" },
    { name: "TensorFlow", color: "bg-[#d4d4d4]", icon: "TF" },
    { name: "PyTorch", color: "bg-[#7ba7d1]", icon: "PT" },
    { name: "Pandas", color: "bg-[#9dcc7a]", icon: "🐼" },
    { name: "Git", color: "bg-[#7dd3c0]", icon: "GIT" },
  ];

  const projects = [
    {
      title: "Learning Through Play: Integer Damath AI",
      year: "2025",
      description: "Implemented and compared reinforcement learning algorithms (Q-Learning, Monte Carlo, and Dyna-Q) to develop intelligent agents for the educational game Integer Damath. Evaluated algorithm efficiency, learning speed, and decision-making performance."
    },
    {
      title: "ArtDecode: CNN Art Style Classification",
      year: "2025",
      description: "Engineered a computer vision model with 63.08% accuracy using custom Convolutional Neural Network (CNN) architectures in TensorFlow for classifying art styles using the WikiArt Dataset."
    },
    {
      title: "Flight Delay Prediction System",
      year: "2024",
      description: "Developed a machine learning model to predict flight arrival delays using Random Forest Regression. Performed data preprocessing, feature selection, and exploratory data analysis to improve prediction accuracy."
    },
    {
      title: "Manufacturing Resource Planning (MRP) System",
      year: "2024",
      description: "A centralized system designed to streamline production planning, inventory control, and procurement processes for ABC Manufacturing, optimizing resource allocation and reducing material shortages."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="text-lg font-medium">Gian Karl Colinares</div>
          
          <div className="flex items-center gap-8">
            <a href="#education" className="text-sm text-gray-400 hover:text-[#a8f5a8] transition-colors">
              education
            </a>
            <a href="#projects" className="text-sm text-gray-400 hover:text-[#a8f5a8] transition-colors">
              projects
            </a>
            <a href="#affiliations" className="text-sm text-gray-400 hover:text-[#a8f5a8] transition-colors">
              affiliations
            </a>
            
            <div className="flex items-center gap-4 ml-4">
              <a href="https://github.com/Gkcoli" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/gkcolinares/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:gkcolinares@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text Content */}
            <div className="space-y-8">
              <div>
                <p className="text-xl md:text-2xl text-gray-400 mb-2">Hi, I&apos;m</p>
                <h1 className="text-6xl md:text-7xl font-medium">
                  Gian Karl<br />Colinares
                </h1>
              </div>
              
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  A <span className="text-white font-medium">BS Computer Science</span> student specializing in <span className="text-white font-medium">Machine Learning</span> at National University - Manila. Passionate about developing intelligent systems and exploring the intersection of AI and education.
                </p>
                <p className="text-sm">
                  📧 gkcolinares@gmail.com | 📱 0956-253-5772
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="/COLINARESGIANKARL_CV.pdf" download className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                  Download CV
                </a>
                <a href="#projects" className="text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                  See projects
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#a8f5a8] to-[#7dd3c0] p-1">
                  <div className="w-full h-full rounded-full bg-[#0f0f0f] flex items-end justify-center overflow-hidden">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-gradient-to-br from-[#a8f5a8]/20 to-[#7dd3c0]/20 flex items-center justify-center">
                      <span className="text-8xl">👨‍💻</span>
                    </div>
                  </div>
                </div>
                {/* Green badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#a8f5a8] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          {/* Technical Skills Header */}
          <div className="mb-20">
            <div className="text-sm text-gray-500 mb-2">Technical</div>
            <h2 className="text-8xl font-bold mb-4">SKILLS</h2>
            <p className="text-gray-400">Languages, frameworks, and tools</p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-center transition-transform hover:scale-105 cursor-pointer`}
              >
                <div className="text-4xl font-bold text-black mb-3">
                  {skill.icon}
                </div>
                <div className="text-black font-medium text-sm">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Tools */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#a8f5a8]">Libraries & Frameworks</h3>
              <p className="text-gray-400 text-sm">Pandas, TensorFlow, Matplotlib, NumPy, PyTorch, Seaborn</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#a8f5a8]">Tools & Technologies</h3>
              <p className="text-gray-400 text-sm">Jupyter Notebook, Google Suite, Microsoft Office, Git, GitHub</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-[#a8f5a8]">Databases</h3>
              <p className="text-gray-400 text-sm">SQL, NoSQL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Education</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-[#a8f5a8] pl-8 py-4">
              <h3 className="text-2xl font-semibold mb-2">BS Computer Science - Machine Learning</h3>
              <p className="text-gray-400 mb-2">National University - Manila • 2022 - Present</p>
              <p className="text-gray-500">Specializing in Machine Learning and Artificial Intelligence</p>
            </div>
            
            <div className="border-l-4 border-[#7dd3c0] pl-8 py-4">
              <h3 className="text-2xl font-semibold mb-2">Information and Communication Technology</h3>
              <p className="text-gray-400 mb-2">Army's Angels Integrated School • 2020 - 2022</p>
              <p className="text-gray-500">Senior High School - ICT Strand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Academic Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#222] transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-[#a8f5a8]">{project.title}</h3>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* Seminars & Workshops */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8">Seminars, Trainings & Workshops</h3>
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-2">Concourse: Charting New Horizons in Technology</h4>
                <p className="text-gray-400 text-sm">College of Computing and Information Technology Student Council • 2025</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-2">Navigating the Path to Academic Publishing in Computer Science</h4>
                <p className="text-gray-400 text-sm">Computer Science Society • 2024</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-2">Dev Showcase: Mastering Git & GitHub</h4>
                <p className="text-gray-400 text-sm">GDG on Campus - National University - Manila • 2024</p>
              </div>
              <div className="bg-[#1a1a1a] rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-2">Collab Plus: Optimizing Team Collaboration with Google Workspace</h4>
                <p className="text-gray-400 text-sm">GDG on Campus - National University - Manila • 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section id="affiliations" className="py-20 px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Affiliations</h2>
          
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#222] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Treasurer</h3>
                  <p className="text-gray-400">NU-CCIT Student Council</p>
                </div>
                <span className="text-gray-500">July 2024 - July 2025</span>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Managing financial operations and budget allocation for the College of Computing and Information Technology Student Council.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#222] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Office-in-Charge, Office of the Auditor</h3>
                  <p className="text-gray-400">NU-CCIT Student Council</p>
                </div>
                <span className="text-gray-500">Nov 2023 - July 2024</span>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Oversaw audit operations and ensured financial transparency and compliance within the student council.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-[#0f0f0f] border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2026 Gian Karl Colinares. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/Gkcoli" className="text-gray-500 hover:text-white transition-colors text-sm">
              GitHub
            </a>
            <a href="https://linkedin.com/in/gkcolinares/" className="text-gray-500 hover:text-white transition-colors text-sm">
              LinkedIn
            </a>
            <a href="mailto:gkcolinares@gmail.com" className="text-gray-500 hover:text-white transition-colors text-sm">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
