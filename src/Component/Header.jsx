import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Filtered Services List (removed digital marketing, etc.)
  const servicesList = [
    { name: 'Graphic Designing', path: '/services/graphic-design' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Advanced SEO', path: '/services/seo' },
    { name: 'Google My Business Optimization', path: '/services/gmb' },
    { name: 'Content Writing', path: '/services/content-writing' },
    { name: 'UI/UX Design', path: '/services/ui-ux' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* --- LOGO SECTION --- */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-green-600 tracking-wide">
                AUTOSKALER
              </span>
              <span className="text-[10px] font-semibold text-gray-600 tracking-wider">
                TECHNOLOGIES PVT. LTD.
              </span>
            </Link>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition duration-200">
              HOME
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition duration-200">
              ABOUT US
            </Link>

            {/* Services Dropdown (Desktop) */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 group-hover:text-green-600 font-medium transition duration-200 focus:outline-none">
                SERVICES
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-50 last:border-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition duration-200">
              CONTACT US
            </Link>
          </nav>

          {/* --- CTA BUTTON (Desktop) --- */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-md font-semibold transition duration-300 shadow-sm hover:shadow-md uppercase text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION DRAWER --- */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 shadow-inner">
          <Link 
            to="/" 
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT US
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              SERVICES
              <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`pl-6 space-y-1 transition-all duration-300 ${isMobileServicesOpen ? 'block py-2' : 'hidden'}`}>
              {servicesList.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 border-l-2 border-transparent hover:border-green-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            to="/contact" 
            className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT US
          </Link>

          <div className="pt-4">
            <Link
              to="/get-started"
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-bold uppercase transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;