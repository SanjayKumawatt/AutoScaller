import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, ShoppingCart, Globe, Database, Smartphone, ShieldCheck, Zap, Monitor, ArrowRight, CheckCircle2 } from 'lucide-react';

import img from "../assets/img2.jpg";

const WebDevelopment = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-white" />,
      title: "Custom Web Development",
      description: "Tailor-made websites built from scratch using modern technologies like React, Node.js, and Python to fit your specific business needs."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-white" />,
      title: "E-commerce Solutions",
      description: "Scalable online stores with secure payment gateways, inventory management, and seamless user experiences (Shopify, WooCommerce, Custom)."
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "CMS Development",
      description: "Easy-to-manage websites using platforms like WordPress, Strapi, or Contentful, giving you full control over your content."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Responsive Design",
      description: "Mobile-first websites that look and perform perfectly on all devices, from desktops to smartphones and tablets."
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "API Integration",
      description: "Seamlessly connect your website with third-party tools, CRMs, and payment systems to automate your workflows."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Maintenance & Support",
      description: "Ongoing technical support, security updates, and performance optimization to keep your website running smoothly."
    }
  ];

  const processSteps = [
    { number: "01", title: "Strategy", desc: "We analyze your requirements and plan the technical architecture." },
    { number: "02", title: "Design", desc: "Creating wireframes and UI layouts that focus on user experience." },
    { number: "03", title: "Development", desc: "Coding the website using clean, scalable, and efficient code." },
    { number: "04", title: "Launch", desc: "Testing, deployment, and final handover with training." }
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#0b3d2c] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-green-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-green-400 rounded-full opacity-10 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-800/50 border border-green-600 text-green-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <Code2 className="w-4 h-4 mr-2" />
            <span>Full-Stack Web Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Building Digital Experiences <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
              That Drive Growth
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-green-100 leading-relaxed">
            From simple business websites to complex web applications, we build robust, secure, and scalable solutions that help your business succeed online.
          </p>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Development Expertise</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We leverage the latest technologies to build websites that are fast, secure, and built to last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-green-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY PROFESSIONAL WEB DEV MATTERS --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2">
              <img src={img} alt="" />
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Professional <span className="text-green-600">Web Development</span> Matters?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your website is often the first interaction a customer has with your brand. A professional website builds credibility and converts visitors into customers.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "Performance & Speed: Fast loading sites rank better on Google.",
                  "Mobile Responsiveness: 60% of traffic comes from mobile devices.",
                  "Security: Protect your business and customer data from threats.",
                  "Scalability: Build a foundation that grows with your business."
                ].map((point, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-20 bg-[#0b3d2c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Development Cycle</h2>
            <p className="mt-4 text-green-100">A proven approach to delivering high-quality software.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative p-6 border border-green-700 rounded-xl hover:bg-green-800/50 transition-colors">
                <div className="text-5xl font-black text-green-800/50 absolute top-4 right-4 select-none">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-green-300">{step.title}</h3>
                  <p className="text-green-100 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Build Your Dream Website
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Whether you need a simple landing page or a complex web application, we have the expertise to bring your vision to life.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default WebDevelopment;