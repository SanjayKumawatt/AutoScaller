import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, FileText, Globe, ShoppingBag, Mail, Edit3, MessageSquare, Feather, ArrowRight, CheckCircle2 } from 'lucide-react';

const ContentWriting = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "SEO Blog Writing",
      description: "Well-researched, keyword-optimized articles that drive organic traffic and establish your authority in the industry."
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Website Copywriting",
      description: "Compelling content for your Home, About, and Service pages that clearly communicates your value and converts visitors."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-white" />,
      title: "Product Descriptions",
      description: "Persuasive descriptions for e-commerce stores that highlight features, benefits, and trigger purchasing decisions."
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Email Marketing Copy",
      description: "Engaging newsletters and drip campaigns designed to nurture leads and boost open rates and click-throughs."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: "Social Media Content",
      description: "Catchy captions, threads, and post scripts tailored for platforms like LinkedIn, Instagram, and Twitter."
    },
    {
      icon: <Edit3 className="w-8 h-8 text-white" />,
      title: "Editing & Proofreading",
      description: "Polishing your existing content to ensure it's grammatically correct, concise, and aligned with your brand voice."
    }
  ];

  const processSteps = [
    { number: "01", title: "Research", desc: "Understanding your audience, competitors, and industry trends." },
    { number: "02", title: "Drafting", desc: "Creating the initial content structure focusing on flow and engagement." },
    { number: "03", title: "Optimization", desc: "Integrating keywords naturally and formatting for readability (SEO)." },
    { number: "04", title: "Polishing", desc: "Final review for tone, grammar, and alignment with your goals." }
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
            <PenTool className="w-4 h-4 mr-2" />
            <span>Premium Content Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Words That Engage, Convert, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
              and Rank on Google
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-green-100 leading-relaxed">
            Content is the voice of your brand. We craft compelling narratives that resonate with your audience and drive measurable business results.
          </p>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Writing Expertise</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From technical articles to creative storytelling, our writers adapt to your brand's unique style and tone.
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

      {/* --- WHY CONTENT MATTERS --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2">
              <div className="relative">
                {/* Abstract Notebook/Writing Graphic */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-900 to-[#0b3d2c] border border-green-700 p-8 relative overflow-hidden shadow-2xl flex items-center justify-center">
                   {/* Simplified Document UI */}
                   <div className="w-3/4 h-5/6 bg-white rounded-lg shadow-xl p-6 relative transform -rotate-3 transition-transform hover:rotate-0 duration-500">
                      <div className="w-12 h-12 bg-green-100 rounded-full absolute -top-6 -left-6 flex items-center justify-center shadow-md">
                        <Feather className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="space-y-4 mt-2">
                        <div className="h-4 w-3/4 bg-gray-800 rounded"></div>
                        <div className="h-2 w-full bg-gray-200 rounded"></div>
                        <div className="h-2 w-full bg-gray-200 rounded"></div>
                        <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
                        <div className="h-2 w-full bg-gray-200 rounded"></div>
                        <div className="h-24 w-full bg-green-50 rounded-lg border border-green-100 mt-4"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why <span className="text-green-600">Professional Content</span> is King?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In the digital world, content is how you communicate, convince, and convert. Poor writing can damage your credibility, while great writing builds trust.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "Boosts SEO: Google rewards high-quality, relevant content with better rankings.",
                  "Builds Authority: Expertly written articles position you as an industry leader.",
                  "Drives Sales: Persuasive copy guides visitors through the buying journey.",
                  "Brand Voice: Consistent tone helps customers recognize and connect with you."
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
            <h2 className="text-3xl font-bold">Our Writing Process</h2>
            <p className="mt-4 text-green-100">From blank page to published perfection.</p>
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
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let our expert writers craft content that captures your brand's essence and speaks directly to your customers.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Request Content Samples
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ContentWriting;