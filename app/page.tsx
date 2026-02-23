export default function Home() {
  const skills = [
    { name: "JavaScript", color: "bg-[#e8e5a0]", icon: "JS" },
    { name: "React", color: "bg-[#a8c5d1]", icon: "⚛" },
    { name: "Next.JS", color: "bg-[#d4d4d4]", icon: "N" },
    { name: "TypeScript", color: "bg-[#7ba7d1]", icon: "TS" },
    { name: "Node.js", color: "bg-[#9dcc7a]", icon: "N" },
    { name: "Tailwind", color: "bg-[#7dd3c0]", icon: "T" },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="text-lg font-medium">Cocoli</div>
          
          <div className="flex items-center gap-8">
            <a href="#education" className="text-sm text-gray-400 hover:text-[#a8f5a8] transition-colors">
              education
            </a>
            <a href="#experience" className="text-sm text-gray-400 hover:text-[#a8f5a8] transition-colors">
              experience
            </a>
            
            <div className="flex items-center gap-4 ml-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
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
                  Gian Karl Colinares
                </h1>
              </div>
              
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  During these <span className="text-white font-medium">4 years</span> as <span className="text-white font-medium">Front-End Software Engineer</span>. My role has extended beyond coding to effective communication with various departments, to define new features and spearheading the development of new apps.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                  Download CV
                </button>
                <button className="text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                  See experiences
                </button>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#a8f5a8] to-[#7dd3c0] p-1">
                  <div className="w-full h-full rounded-full bg-[#0f0f0f] flex items-end justify-center overflow-hidden">
                    {/* Placeholder for profile image */}
                    <div className="w-full h-full bg-gradient-to-br from-[#a8f5a8]/20 to-[#7dd3c0]/20 flex items-center justify-center">
                      <span className="text-8xl">👤</span>
                    </div>
                  </div>
                </div>
                {/* Green badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#a8f5a8] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section className="py-20 px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          {/* XP Section */}
          <div className="mb-20">
            <div className="text-sm text-gray-500 mb-2">4 years of</div>
            <h2 className="text-8xl font-bold mb-4">XP</h2>
            <p className="text-gray-400">with the most popular ecosystem</p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Education</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-[#a8f5a8] pl-8 py-4">
              <h3 className="text-2xl font-semibold mb-2">Bachelor of Computer Science</h3>
              <p className="text-gray-400 mb-2">University Name • 2015 - 2019</p>
              <p className="text-gray-500">Specialized in Software Engineering and Web Development</p>
            </div>
            
            <div className="border-l-4 border-[#7dd3c0] pl-8 py-4">
              <h3 className="text-2xl font-semibold mb-2">Advanced Web Development Certification</h3>
              <p className="text-gray-400 mb-2">Online Platform • 2020</p>
              <p className="text-gray-500">Focused on modern JavaScript frameworks and best practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">Experience</h2>
          
          <div className="space-y-12">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#222] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Senior Front-End Developer</h3>
                  <p className="text-gray-400">Tech Company Inc.</p>
                </div>
                <span className="text-gray-500">2022 - Present</span>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Leading the development of user-facing features using React and Next.js. 
                Collaborating with cross-functional teams to define and implement new features. 
                Mentoring junior developers and conducting code reviews.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#222] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Front-End Developer</h3>
                  <p className="text-gray-400">Startup Solutions</p>
                </div>
                <span className="text-gray-500">2020 - 2022</span>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Developed responsive web applications using modern JavaScript frameworks. 
                Improved application performance and user experience. 
                Worked closely with designers to implement pixel-perfect designs.
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-8 hover:bg-[#222] transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Junior Web Developer</h3>
                  <p className="text-gray-400">Digital Agency</p>
                </div>
                <span className="text-gray-500">2019 - 2020</span>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Built and maintained client websites using HTML, CSS, and JavaScript. 
                Assisted in the development of e-commerce platforms. 
                Learned best practices in web development and agile methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-[#0f0f0f] border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2026 Lucas Viga. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
