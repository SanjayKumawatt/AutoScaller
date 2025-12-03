import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Smartphone, PenTool, Users, Layers, Figma, Monitor, ArrowRight, CheckCircle2, MousePointerClick, Accessibility } from 'lucide-react';

const UiUxDesign = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "User Research & Strategy",
      description: "We conduct deep user interviews, create personas, and map user journeys to ensure the product solves real problems."
    },
    {
      icon: <Figma className="w-8 h-8 text-white" />,
      title: "Wireframing & Prototyping",
      description: "Low and high-fidelity prototypes that allow you to test workflows and interactions before writing a single line of code."
    },
    {
      icon: <Layout className="w-8 h-8 text-white" />,
      title: "Visual Interface Design (UI)",
      description: "Creating pixel-perfect, aesthetically pleasing interfaces that align with your brand identity and modern design trends."
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-white" />,
      title: "Interaction Design",
      description: "Designing seamless micro-interactions and transitions that make the digital experience feel alive and responsive."
    },
    {
      icon: <Accessibility className="w-8 h-8 text-white" />,
      title: "Accessibility (a11y)",
      description: "Ensuring your digital products are usable by everyone, including people with disabilities, following WCAG guidelines."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      title: "Multi-Platform Adaptation",
      description: "Consistent experiences across Web, iOS, Android, and Wearables, optimized for every screen size."
    }
  ];

  const processSteps = [
    { number: "01", title: "Discover", desc: "Stakeholder interviews and competitive analysis to define goals." },
    { number: "02", title: "Structure", desc: "Information architecture and low-fidelity wireframing." },
    { number: "03", title: "Craft", desc: "High-fidelity UI design and interactive prototyping." },
    { number: "04", title: "Validate", desc: "Usability testing and iteration based on user feedback." }
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* --- HERO SECTION --- */}
      <div className="relative bg-[#0b3d2c] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Abstract Background Shapes - Blueprint Style */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4ade80 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-800/50 border border-green-600 text-green-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <Figma className="w-4 h-4 mr-2" />
            <span>Product Design & Strategy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Crafting Digital Experiences <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
              Rooted in Empathy
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-green-100 leading-relaxed">
            We move beyond just "making it pretty." Our data-driven design process ensures your product is intuitive, accessible, and delightful to use.
          </p>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Holistic Design Services</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From the initial concept to the final pixel, we cover every aspect of the user's journey.
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

      {/* --- WHY UI/UX MATTERS --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2">
              <div className="relative">
                {/* Abstract Wireframe Graphic */}
                <div className="aspect-square rounded-2xl bg-gray-900 border border-gray-800 p-8 relative overflow-hidden shadow-2xl flex items-center justify-center">
                   {/* Blueprint Grid */}
                   <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                   
                   {/* Wireframe Mockup */}
                   <div className="w-3/5 h-4/5 border-2 border-dashed border-blue-400 rounded-lg p-4 relative bg-gray-800/50 backdrop-blur-sm transform -rotate-3">
                      {/* Header */}
                      <div className="h-4 w-1/3 bg-blue-400/30 mb-4 rounded"></div>
                      {/* Hero Image Placeholder */}
                      <div className="h-24 w-full border-2 border-dashed border-blue-400/50 rounded mb-4 flex items-center justify-center">
                          <div className="w-8 h-8 border-2 border-blue-400/50 rounded-full"></div>
                      </div>
                      {/* Text Lines */}
                      <div className="space-y-2">
                          <div className="h-2 w-full bg-blue-400/20 rounded"></div>
                          <div className="h-2 w-5/6 bg-blue-400/20 rounded"></div>
                          <div className="h-2 w-4/6 bg-blue-400/20 rounded"></div>
                      </div>
                      {/* CTA Button */}
                      <div className="mt-4 h-8 w-1/2 bg-blue-500/40 rounded border border-blue-400"></div>
                      
                      {/* Cursor */}
                      <MousePointerClick className="absolute bottom-10 right-10 text-white w-6 h-6 drop-shadow-lg" />
                   </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                The ROI of <span className="text-green-600">Good Design</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Design isn't just about how it looks; it's about how it works. A seamless user experience directly translates to customer loyalty and business growth.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "Reduced Churn: Users stay when they can achieve their goals easily.",
                  "Development Efficiency: Wireframing saves time by catching errors early.",
                  "Brand Perception: Professional design builds instant trust.",
                  "Accessibility: Reaching 100% of your potential audience."
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
            <h2 className="text-3xl font-bold">Our Design Thinking Process</h2>
            <p className="mt-4 text-green-100">A proven framework for innovation.</p>
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
            Have a Product Idea?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's prototype it first. Save time and money by validating your idea with a professional design sprint.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Schedule a Design Sprint
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default UiUxDesign;