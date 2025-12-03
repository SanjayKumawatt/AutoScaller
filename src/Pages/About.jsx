import React from 'react';
import { Link } from 'react-router-dom';
import {
  History,
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';

import img from "../assets/about.webp";
import AboutSection from '../Component/AboutSection';

const About = () => {
  return (
    <div className="bg-white font-sans">

      {/* --- HERO SECTION (About Specific) --- */}
      <div className="relative bg-[#0b3d2c] py-20 sm:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            About <span className="text-green-400">AUTOSKALER</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-green-100 leading-relaxed">
            Bridging the gap between technological excellence and local business growth through AI-powered solutions.
          </p>
        </div>
      </div>

      <div className='py-20'>

        <AboutSection />
      </div>
      {/* --- SECTION 1: OUR STORY --- */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">

            <div className="w-full md:w-1/2">
              <img src={img} alt="" />
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                <History className="w-4 h-4 mr-2" /> Our Story
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Rooted in Innovation, <br /> Driven by Results.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Autoskaler began with a simple idea: a vision to bridge technological excellence with digital development practices. The name "Autoskaler" represents our commitment to helping businesses scale automatically through smart technology.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What started as a small initiative has grown into a full-service digital transformation agency, guided by the philosophy that knowledge is only powerful when implemented effectively.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 2: UNDERSTANDING YOUR NEEDS & COMMITMENT (Grid) --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

            {/* Understanding Your Needs */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Understanding Your Needs</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Every business is unique. We take the time to understand your specific challenges, goals, and values before recommending any solutions. This approach helps us create strategies that truly work for you, not just generic templates.
              </p>
            </div>

            {/* Our Commitment */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Commitment to You</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Being responsive to your needs.",
                  "Providing honest, practical advice.",
                  "Delivering solutions that grow with your business.",
                  "Making technology work for you, not the other way around."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: REAL RESULTS --- */}


      {/* --- SECTION 4: LET'S WORK TOGETHER (CTA) --- */}
      <section className="py-20 bg-green-600 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-green-500 rounded-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-green-700 rounded-full opacity-50"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Whether you're looking to increase your online visibility, need help with digital marketing, or want to modernize your business systems, we're here to help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-bold rounded-full border border-green-500 hover:bg-green-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;