
import React from 'react';
import { Briefcase, Mail, GraduationCap, Linkedin, Github } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-magenta mb-6">
            <img
              src="/lovable-uploads/7c6df4d1-3057-4e82-bbbc-c81eb80f6559.png"
              alt="Krishiv Potluri"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span>Hi, I'm </span>
            <span className="text-magenta">Krishiv Potluri</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">Student & ML Computational Biologist</p>
          <div className="flex space-x-4 mb-8">
            <a
              href="https://www.linkedin.com/in/krishiv-potluri-36821a2a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-magenta hover:bg-opacity-80 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 flex items-center gap-2"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:krishivrp@gmail.com"
              className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 flex items-center gap-2"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#282c36] p-6 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mb-4">
              <Briefcase className="text-magenta mr-3" size={24} />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <p className="text-gray-300">ML & Computational Biology Research at UT Austin Oden Institute under Dr. Chandrajit Bajaj, developing Reinforcement Learning Based models for antibody design.</p>
          </div>
          
          <div className="bg-[#282c36] p-6 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-4">
              <GraduationCap className="text-magenta mr-3" size={24} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="text-gray-300">Focused on computational biology with emphasis on machine learning applications for protein modeling and drug discovery.</p>
          </div>
          
          <div className="bg-[#282c36] p-6 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center mb-4">
              <Mail className="text-magenta mr-3" size={24} />
              <h3 className="text-xl font-semibold">Contact</h3>
            </div>
            <p className="text-gray-300">Email: krishivrp@gmail.com</p>
            <p className="text-gray-300 flex items-center gap-2 mt-2">
              <Github size={16} className="text-magenta" />
              <a href="https://github.com/kishpish" target="_blank" rel="noopener noreferrer" className="hover:text-magenta">
                @kishpish
              </a>
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Research Focus</h2>
          <div className="bg-[#282c36] p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">De Novo Structure-Based Design of TEM-171 β-Lactamase Protein Inhibitors</h3>
            <p className="text-gray-300 mb-4">
              My research focuses on the design of protein inhibitors using integrated deep learning and multi-scale simulations to combat bacterial resistance.
            </p>
            <a 
              href="https://www.linkedin.com/in/krishiv-potluri-36821a2a8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-magenta hover:text-opacity-80 font-medium underline"
            >
              Read the full paper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
