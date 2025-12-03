import React from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, BarChart3, Globe, Target, FileText, Settings, MousePointerClick, ArrowRight, CheckCircle2 } from 'lucide-react';

import img from "../assets/img3.webp";

const SEO = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "Keyword Research & Strategy",
      description: "We identify high-value keywords that your potential customers are searching for to target the right audience."
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Technical SEO",
      description: "Optimizing your site's structure, speed, and mobile-friendliness to ensure search engines can crawl and index it easily."
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "On-Page Optimization",
      description: "Refining meta tags, headings, content, and internal linking to improve relevance and user experience."
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Link Building (Off-Page)",
      description: "Acquiring high-quality backlinks from reputable websites to boost your domain authority and credibility."
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Local SEO & GMB",
      description: "Dominate local search results and Google Maps to attract customers in your specific geographic area."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Analytics & Reporting",
      description: "Transparent monthly reports tracking rankings, traffic, and conversions so you can see the ROI."
    }
  ];

  const processSteps = [
    { number: "01", title: "Audit", desc: "Deep dive analysis of your current website and competitors." },
    { number: "02", title: "Strategy", desc: "Creating a customized roadmap to target easy wins and long-term goals." },
    { number: "03", title: "Optimize", desc: "Implementing technical fixes, content updates, and on-page changes." },
    { number: "04", title: "Growth", desc: "Building authority through content marketing and link acquisition." }
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
            <TrendingUp className="w-4 h-4 mr-2" />
            <span>Result-Driven SEO Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Dominate Search Results & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
              Drive Organic Traffic
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-green-100 leading-relaxed">
            Stop guessing and start ranking. We use data-driven strategies to put your business in front of customers exactly when they are searching for you.
          </p>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive SEO Solutions</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              SEO isn't just about keywords; it's about building a brand that search engines trust and users love.
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

      {/* --- WHY SEO MATTERS --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2">
              <img src={img} alt="" />
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Invest in <span className="text-green-600">Advanced SEO</span>?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Paid ads stop working the moment you stop paying. SEO builds a sustainable foundation that continues to bring in leads for years to come.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "High Intent Traffic: People searching are already looking for solutions.",
                  "Credibility & Trust: Ranking #1 signals you are the industry leader.",
                  "Better UX: SEO involves optimizing site speed and usability.",
                  "Long-Term ROI: One of the most cost-effective marketing channels."
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
            <h2 className="text-3xl font-bold">Our SEO Methodology</h2>
            <p className="mt-4 text-green-100">No tricks, just proven white-hat strategies.</p>
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
            Ready to Climb the Rankings?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Get a free SEO audit of your current website and see where you stand against your competitors.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Free Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default SEO;