
import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '@/contexts/ThemeContext';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-navy/90 backdrop-blur-md z-50 border-b border-gray-800 light:border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="/" className="text-xl font-bold text-white light:text-gray-900">KrishivPotluri</a>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="/" 
              className={`text-sm ${isActive('/') ? 'text-magenta border-b-2 border-magenta' : 'text-gray-300 hover:text-white'} transition-colors duration-200`}
            >
              About
            </a>
            <a 
              href="/papers" 
              className={`text-sm ${isActive('/papers') ? 'text-magenta border-b-2 border-magenta' : 'text-gray-300 hover:text-white'} transition-colors duration-200`}
            >
              Papers/Articles
            </a>
            <a 
              href="/honors" 
              className={`text-sm ${isActive('/honors') ? 'text-magenta border-b-2 border-magenta' : 'text-gray-300 hover:text-white'} transition-colors duration-200`}
            >
              Honors/Experiences
            </a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-700 light:hover:bg-gray-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} className="text-gray-300" /> : <Moon size={20} className="text-gray-700" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
