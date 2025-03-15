import React from 'react';
import { Github, Linkedin, Mail, Terminal, Globe, Shield, Database, Code, Link } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { FaEnvelope, FaCode } from "react-icons/fa";

function App() {
  const [projectsRef, projectsInView] = useInView({ threshold: 0.5 });
  const [skillsRef, skillsInView] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });
  const [faqRef, faqInView] = useInView({ threshold: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,200,255,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center relative animate-[fadeIn_1s_ease-out]">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-[slideDown_0.5s_ease-out]">
              Mishal Reuel D
            </h1>
            <p className="text-2xl text-gray-300 mb-2 animate-[slideUp_0.5s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
              Python & AI Enthusiast | Budding Flutter & Full Stack Developer
            </p>
            <p className="text-xl text-gray-400 mb-12 animate-[slideUp_0.5s_ease-out_0.3s] opacity-0 [animation-fill-mode:forwards]">
              B.Tech CSE with a specialization in Cyber Security
            </p>
            <div className="flex justify-center space-x-6 animate-[fadeIn_0.5s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]">
              {/* GitHub Icon (Colored) */}
              <a href="https://github.com/Mish7811" className="p-3 bg-gray-800/50 rounded-full hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-7 h-7 rounded-full" />
              </a>

              {/* LinkedIn Icon (Colored) */}
              <a href="https://www.linkedin.com/in/mishal-reuel-d" className="p-3 bg-gray-800/50 rounded-full hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-7 h-7 rounded-lg" />
              </a>

              {/* LeetCode Icon */}
              <a href="https://leetcode.com/u/lGxDFotVAd/" className="p-3 bg-gray-800/50 rounded-full hover:scale-110 transition-transform" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-7 h-7 rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className={`relative bg-gray-900/50 py-24 transition-all duration-1000 transform ${projectsInView ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10 blur-sm'}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,200,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,200,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-cyan-400/30"></div>
            <h2 className="text-4xl font-bold text-center mx-4">Projects</h2>
            <div className="h-px w-12 bg-cyan-400/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition group border border-gray-700/50 hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition-colors">DNACrypt</h3>
                <a href="https://mish7811.github.io/DNAcrypt/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Link className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300">
                A cryptographic tool utilizing DNA sequences for secure data encryption and decryption.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition group border border-gray-700/50 hover:scale-105 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition-colors">Constants</h3>
                <a href="https://mish7811.github.io/Constants/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Link className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-300">
                An interactive to-do website with separate categories with tasks which are daily Constants.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div ref={skillsRef} className={`relative py-24 transition-all duration-1000 transform ${skillsInView ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10 blur-sm'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,200,255,0.1),transparent_30%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-12 bg-cyan-400/30"></div>
            <h2 className="text-4xl font-bold text-center mx-4">Skills & Expertise</h2>
            <div className="h-px w-12 bg-cyan-400/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition group border border-gray-700/50 hover:scale-105 transition-transform">
              <Code className="w-10 h-10 mb-6 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <p className="text-gray-300">React, Flutter</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition group border border-gray-700/50 hover:scale-105 transition-transform">
              <Terminal className="w-10 h-10 mb-6 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <p className="text-gray-300">Node.js, Python</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition group border border-gray-700/50 hover:scale-105 transition-transform">
              <Shield className="w-10 h-10 mb-6 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p className="text-gray-300">Cybersecurity</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition group border border-gray-700/50 hover:scale-105 transition-transform">
              <Globe className="w-10 h-10 mb-6 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">DevOps</h3>
              <p className="text-gray-300">CI/CD, Cloud</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className={`relative bg-gray-900/50 py-24 transition-all duration-1000 transform ${aboutInView ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-10 blur-sm'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_100%,rgba(0,200,255,0.1),transparent_25%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-12 bg-cyan-400/30"></div>
              <h2 className="text-4xl font-bold text-center mx-4">About Me</h2>
              <div className="h-px w-12 bg-cyan-400/30"></div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 hover:scale-[1.02] transition-transform">
              <p className="text-gray-300 leading-relaxed text-lg">
                As a Computer Science student, I am passionate about leveraging technology to solve complex
                problems. With a strong foundation in Python, web development, and Flutter, I have a versatile skill
                set. During my internship at Innovation Labs, Hexaware Technologies, I deepened my expertise in
                DevOps by working on scalable automation solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div
      ref={faqRef}
      className={`relative py-24 transition-all duration-1000 transform ${
        faqInView ? "opacity-100 translate-y-0" : "opacity-30 translate-y-10 blur-sm"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,200,255,0.1),transparent_30%)]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-cyan-400/30"></div>
          <h2 className="text-4xl font-bold text-center mx-4">Contact & Profiles</h2>
          <div className="h-px w-12 bg-cyan-400/30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0.3, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 
                      hover:bg-gray-800/70 transition-all transform hover:scale-105 cursor-pointer flex items-center space-x-4"
            onClick={() => window.open("mailto:mishalreueld25@gmail.com", "_blank")}
          >
            <FaEnvelope className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="text-lg text-gray-300">mishalreueld25@gmail.com</span>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0.3, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 
                      hover:bg-gray-800/70 transition-all transform hover:scale-105 cursor-pointer flex items-center space-x-4"
            onClick={() => window.open("https://leetcode.com/u/lGxDFotVAd/", "_blank")}
          >
            <FaCode className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="text-lg text-gray-300">LeetCode Profile</span>
          </motion.div>
        </div>
      </div>
    </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2024 Mishal Reuel D. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;