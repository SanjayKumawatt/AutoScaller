import React from 'react';
import { MessageCircle, ArrowRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-green-600 overflow-hidden pb-20 font-sans ">
      
      {/* --- BACKGROUND PATTERN (Network Effect) --- */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="text-white" fill="currentColor" />
              <path d="M0 0 L50 50" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>
      
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800/95 via-green-600/90 to-green-500/80 z-0"></div>

      {/* --- CONTENT SECTION --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[600px] text-center">
        
        {/* Badge / Small Tag */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-green-400 bg-green-800/30 text-green-50 text-sm font-semibold mb-8 backdrop-blur-sm">
          <TrendingUp className="w-4 h-4 mr-2" />
          <span>Elevating Local Businesses</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
          Accelerate Your Growth with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-50 to-green-200">
            AI-Powered Digital Solutions
          </span>
        </h1>


      </div>

      {/* Decorative Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto block">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;