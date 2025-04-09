
import React from 'react';
import { Mail, Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1c24] light-mode:bg-white py-8 border-t border-gray-800 light-mode:border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold">
              <span className="text-white light-mode:text-black">Krishiv</span>
              <span className="text-magenta">Potluri</span>
            </h2>
          </div>
          
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com/kishpish" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#282c36] light-mode:bg-gray-100 hover:bg-gray-700 light-mode:hover:bg-gray-200 p-3 rounded-full text-gray-300 light-mode:text-gray-700 hover:text-white light-mode:hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/krishiv-potluri-36821a2a8/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#282c36] light-mode:bg-gray-100 hover:bg-gray-700 light-mode:hover:bg-gray-200 p-3 rounded-full text-gray-300 light-mode:text-gray-700 hover:text-white light-mode:hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:krishivrp@gmail.com" 
              className="bg-[#282c36] light-mode:bg-gray-100 hover:bg-gray-700 light-mode:hover:bg-gray-200 p-3 rounded-full text-gray-300 light-mode:text-gray-700 hover:text-white light-mode:hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.notion.so/Welcome-to-my-Page-on-Applications-of-AI-ML-with-Computational-Biology-501e7669ba0e4a669200651dd3a65d46" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#282c36] light-mode:bg-gray-100 hover:bg-gray-700 light-mode:hover:bg-gray-200 p-3 rounded-full text-gray-300 light-mode:text-gray-700 hover:text-white light-mode:hover:text-black transition-colors"
              aria-label="Articles"
            >
              <Code size={20} />
            </a>
          </div>
          
          <div className="text-gray-400 light-mode:text-gray-600 text-sm mb-2">
            © 2025 Krishiv Potluri. All rights reserved.
          </div>
          
          <div className="text-gray-500 light-mode:text-gray-500 text-xs">
            Student & ML Computational Biologist
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
