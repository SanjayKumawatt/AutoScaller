import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-[#0b3d2c] relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ready to Scale Your Business with <br/>
          <span className="text-green-400">AI-Powered Solutions?</span>
        </h2>
        
        <p className="text-green-100 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Join hundreds of local businesses who are growing faster, smarter, and more efficiently with Autoskaler.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Your Free Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;