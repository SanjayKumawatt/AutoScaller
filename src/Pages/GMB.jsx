import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, MessageSquare, TrendingUp, LayoutGrid, ShieldCheck, Navigation, Store, ArrowRight, CheckCircle2 } from 'lucide-react';

const GMB = () => {
  const services = [
    {
      icon: <Store className="w-8 h-8 text-white" />,
      title: "Profile Setup & Optimization",
      description: "We set up your profile with accurate NAP (Name, Address, Phone) data, business hours, and category selection for maximum visibility."
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Local Map Ranking",
      description: "Strategies to get your business in the coveted 'Local Pack' (top 3 results) when customers search for services nearby."
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Review Management",
      description: "We help you generate more positive reviews and craft professional responses to build trust with potential customers."
    },
    {
      icon: <LayoutGrid className="w-8 h-8 text-white" />,
      title: "Posts & Updates",
      description: "Regularly posting offers, events, and product updates on your GMB profile to keep your audience engaged and informed."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Spam Fighting",
      description: "Monitoring and removing fake listings or spam reviews that might be hurting your business's reputation or ranking."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Insights & Analytics",
      description: "Tracking calls, direction requests, and website clicks generated from your GMB profile to measure real-world impact."
    }
  ];

  const processSteps = [
    { number: "01", title: "Audit", desc: "Checking your current profile health and competitor positioning." },
    { number: "02", title: "Verify", desc: "Ensuring your business location is verified and trusted by Google." },
    { number: "03", title: "Optimize", desc: "Adding photos, services, and keywords to boost relevance." },
    { number: "04", title: "Manage", desc: "Weekly posts, review responses, and continuous monitoring." }
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
            <MapPin className="w-4 h-4 mr-2" />
            <span>Local Business Growth</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Get Found by Customers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
              Right in Your Neighborhood
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-green-100 leading-relaxed">
            46% of all Google searches are local. We optimize your Google My Business profile to ensure local customers find YOU first, not your competitors.
          </p>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">GMB Optimization Services</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Turn your Google listing into a powerful lead generation tool with our comprehensive management services.
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

      {/* --- WHY GMB MATTERS --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2">
              <div className="relative">
                {/* Abstract Map Graphic */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-900 to-[#0b3d2c] border border-green-700 p-8 relative overflow-hidden shadow-2xl flex items-center justify-center">
                   {/* Simplified Map UI */}
                   <div className="w-full h-full relative z-10 opacity-90">
                      {/* Map Points */}
                      <div className="absolute top-1/3 left-1/4 animate-bounce delay-100">
                         <MapPin className="w-12 h-12 text-red-500 drop-shadow-lg" fill="currentColor" />
                      </div>
                      <div className="absolute bottom-1/3 right-1/3">
                         <div className="w-4 h-4 bg-green-400 rounded-full opacity-50"></div>
                      </div>
                      <div className="absolute top-1/2 right-1/4">
                         <div className="w-4 h-4 bg-green-400 rounded-full opacity-50"></div>
                      </div>
                      
                      {/* Review Card */}
                      <div className="absolute bottom-10 left-10 bg-white p-4 rounded-lg shadow-xl max-w-[200px] transform rotate-2">
                        <div className="flex space-x-1 mb-2">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded mb-1"></div>
                        <div className="h-2 w-3/4 bg-gray-200 rounded"></div>
                      </div>
                   </div>
                   {/* Background Grid Lines */}
                   <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-20">
                      {[...Array(36)].map((_, i) => <div key={i} className="border border-green-500/30"></div>)}
                   </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why <span className="text-green-600">Google My Business</span> is Critical?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For local businesses, your Google profile is often more important than your website. It's the first thing customers see when searching for your services nearby.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "Zero-Click Searches: Many customers call or visit without ever clicking your website.",
                  "Trust Factor: Profiles with reviews and photos are 2x more likely to be considered reputable.",
                  "Mobile Dominance: 'Near me' searches on mobile have grown 500%+ in recent years.",
                  "Free Traffic: It's one of the most cost-effective ways to get local leads."
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
            <h2 className="text-3xl font-bold">Our Optimization Process</h2>
            <p className="mt-4 text-green-100">Systematic approach to local dominance.</p>
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
            Ready to Rule the Local Map?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let us optimize your profile and help you get more calls, visits, and customers from Google.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Optimize My Profile
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default GMB;