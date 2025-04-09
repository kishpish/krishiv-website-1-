
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1c24] py-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Krishiv Potluri. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/krishiv-potluri-36821a2a8/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-magenta transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/kishpish" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-magenta transition-colors"
            >
              GitHub
            </a>
            <a 
              href="mailto:krishivrp@gmail.com" 
              className="text-gray-400 hover:text-magenta transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
