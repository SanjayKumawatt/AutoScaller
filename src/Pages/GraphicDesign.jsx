import React from 'react';
import { Link } from 'react-router-dom';
import { PenTool, Layers, Image, Layout, Package, Share2, CheckCircle2, ArrowRight } from 'lucide-react';
import img from "../assets/img1.jpg";

const GraphicDesign = () => {
  const services = [
    {
      icon: <PenTool className="w-8 h-8 text-white" />,
      title: "Logo & Branding",
      description: "Create a memorable identity with unique logos and comprehensive branding guidelines that resonate with your audience."
    },
    {
      icon: <Share2 className="w-8 h-8 text-white" />,
      title: "Social Media Creatives",
      description: "Engage your followers with stunning visuals designed for Instagram, Facebook, LinkedIn, and Twitter."
    },
    {
      icon: <Layout className="w-8 h-8 text-white" />,
      title: "Marketing Collaterals",
      description: "Professional brochures, flyers, business cards, and banners that leave a lasting impression on your clients."
    },
    {
      icon: <Image className="w-8 h-8 text-white" />,
      title: "Infographics",
      description: "Turn complex data into easy-to-understand visual stories that are perfect for sharing and presentations."
    },
    {
      icon: <Package className="w-8 h-8 text-white" />,
      title: "Packaging Design",
      description: "Stand out on the shelf with creative packaging solutions that reflect your product's quality."
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: "Vector Art & Illustration",
      description: "Custom illustrations and vector art to add a unique artistic touch to your website or marketing materials."
    }
  ];

  const processSteps = [
    { number: "01", title: "Discovery", desc: "We understand your brand, audience, and goals." },
    { number: "02", title: "Concept", desc: "We sketch ideas and create initial design concepts." },
    { number: "03", title: "Design", desc: "We refine the chosen concept into a polished design." },
    { number: "04", title: "Delivery", desc: "You receive print-ready and web-optimized files." }
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
            <span>Premium Design Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Visuals That Speak <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
              Louder Than Words
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-green-100 leading-relaxed">
            Transform your brand with creative graphic design solutions. From logos to social media posts, we craft visuals that tell your story.
          </p>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Design Expertise</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of design services tailored to meet the unique needs of your business.
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

      {/* --- WHY GOOD DESIGN MATTERS --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2">
              <div className="relative">
                {/* Abstract decorative graphic mimicking an image */}
                
                  <img src={img} alt="" />
                
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Does <span className="text-green-600">Great Design</span> Matter?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Design is more than just aesthetics; it's a communication tool. Good design builds trust, makes your content readable, and encourages customers to take action.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "First Impressions Count: 94% of first impressions are design-related.",
                  "Brand Recognition: Consistency in design increases brand recognition.",
                  "Communication: Visuals process 60,000x faster than text.",
                  "Conversion: Good UI/UX design can raise conversion rates by 200%."
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
            <h2 className="text-3xl font-bold">Our Creative Process</h2>
            <p className="mt-4 text-green-100">Simple, transparent, and effective.</p>
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
            Ready to Start Your Design Project?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let's create something amazing together. Contact us today for a free consultation.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default GraphicDesign;