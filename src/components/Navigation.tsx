
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { Button } from './ui/button';

const Navigation = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-navy/90 backdrop-blur-md z-50 border-b border-gray-800 light-mode:border-gray-200 light-mode:bg-white/90">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="/" className="text-xl font-bold text-white light-mode:text-gray-900">KrishivPotluri</a>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="/" 
              className={`text-sm ${isActive('/') ? 'text-magenta border-b-2 border-magenta' : 'text-gray-300 hover:text-white light-mode:text-gray-600 light-mode:hover:text-gray-900'} transition-colors duration-200`}
            >
              About
            </a>
            <a 
              href="/papers" 
              className={`text-sm ${isActive('/papers') ? 'text-magenta border-b-2 border-magenta' : 'text-gray-300 hover:text-white light-mode:text-gray-600 light-mode:hover:text-gray-900'} transition-colors duration-200`}
            >
              Papers/Articles
            </a>
            <a 
              href="/honors" 
              className={`text-sm ${isActive('/honors') ? 'text-magenta border-b-2 border-magenta' : 'text-gray-300 hover:text-white light-mode:text-gray-600 light-mode:hover:text-gray-900'} transition-colors duration-200`}
            >
              Honors/Experiences
            </a>
            <Button 
              onClick={toggleTheme}
              variant="ghost" 
              size="icon"
              className="p-2 rounded-full hover:bg-gray-700 light-mode:hover:bg-gray-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? 
                <Sun size={20} className="text-gray-300 light-mode:text-gray-700" /> : 
                <Moon size={20} className="text-gray-700" />
              }
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
