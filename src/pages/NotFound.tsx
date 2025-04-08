
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4 text-magenta">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <a href="/" className="bg-magenta hover:bg-opacity-80 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
