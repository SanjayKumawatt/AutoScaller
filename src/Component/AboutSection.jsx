import React from 'react';
import { Palette, Globe, Cpu, MapPin, BarChart3, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section className=" bg-white pb-15 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* --- LEFT SIDE: NETWORK DIAGRAM --- */}
                    {/* Desktop: Circular/Connected Layout | Mobile: Grid Layout */}
                    <div className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center">

                        {/* Center Logo Node */}
                        <div className="relative z-20 bg-white p-6 rounded-2xl shadow-xl border border-green-100 flex flex-col items-center justify-center text-center w-48 h-24 md:w-56 md:h-28">
                            <span className="text-xl md:text-2xl font-bold text-green-600 tracking-wide">
                                AUTOSKALER
                            </span>
                            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mt-1">
                                Tech Pvt. Ltd.
                            </span>
                        </div>

                        {/* Connecting Lines (Desktop Only SVG) */}
                        <svg className="absolute inset-0 w-full h-full z-0 hidden md:block pointer-events-none text-green-200">
                            {/* Lines originating from center (50% 50%) to relative node positions */}
                            {/* Top Left */}
                            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="currentColor" strokeWidth="2" />
                            {/* Top Right */}
                            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="2" />
                            {/* Mid Left */}
                            <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="currentColor" strokeWidth="2" />
                            {/* Mid Right */}
                            <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="currentColor" strokeWidth="2" />
                            {/* Bottom Left */}
                            <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="2" />
                            {/* Bottom Right */}
                            <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="2" />
                        </svg>

                        {/* Service Nodes (Positioned absolutely on desktop, grid on mobile) */}
                        {/* Using a grid for mobile that transforms into absolute positions on lg screens */}
                        <div className="absolute inset-0 w-full h-full hidden md:block">
                            <ServiceNode icon={<Palette />} label="Graphic Design" position="top-10 left-10" />
                            <ServiceNode icon={<Globe />} label="Web & App" position="top-10 right-10" />
                            <ServiceNode icon={<Search />} label="Advanced SEO" position="top-1/2 left-0 -translate-y-1/2" />
                            <ServiceNode icon={<Cpu />} label="AI Tools" position="top-1/2 right-0 -translate-y-1/2" />
                            <ServiceNode icon={<BarChart3 />} label="Data Analysis" position="bottom-10 left-10" />
                            <ServiceNode icon={<MapPin />} label="Google My Business" position="bottom-10 right-10" />
                        </div>

                        {/* Mobile Only Grid View */}
                        <div className="grid grid-cols-2 gap-4 w-full md:hidden mt-8">
                            <MobileNode icon={<Palette />} label="Graphic Design" />
                            <MobileNode icon={<Globe />} label="Web & App" />
                            <MobileNode icon={<Search />} label="Advanced SEO" />
                            <MobileNode icon={<Cpu />} label="AI Tools" />
                            <MobileNode icon={<BarChart3 />} label="Data Analysis" />
                            <MobileNode icon={<MapPin />} label="Google Business" />
                        </div>

                    </div>

                    {/* --- RIGHT SIDE: CONTENT --- */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                            Your <span className="text-green-600">AI-Powered</span> Digital <br className="hidden lg:block" />
                            Solutions Partner
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            At <span className="font-semibold text-gray-800">Autoskaler</span>, we leverage the transformative power of Artificial Intelligence to propel local businesses toward unprecedented success.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our comprehensive suite of AI-driven services-ranging from <span className="text-green-600 font-medium">Advanced SEO</span> and <span className="text-green-600 font-medium">Content Creation</span> to <span className="text-green-600 font-medium">Custom AI Tools</span> and <span className="text-green-600 font-medium">Web & App Development</span>-is designed to bridge language barriers. Whether targeting audiences in English, Hindi, Punjabi, or Spanish, we help you connect with your ideal customers, amplify your digital footprint, and achieve sustainable, long-term growth.
                        </p>

                        <div className="pt-4 flex justify-center lg:justify-start">
                            <Link to={"/contact"}>
                                <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                    Contact Us
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Helper Component for Desktop Nodes
const ServiceNode = ({ icon, label, position }) => (
    <div className={`absolute ${position} flex flex-col items-center bg-white p-3 rounded-xl shadow-lg border border-gray-100 w-32 transition-transform hover:scale-110 z-10`}>
        <div className="text-green-600 mb-2">
            {React.cloneElement(icon, { size: 24 })}
        </div>
        <span className="text-xs font-bold text-gray-700 text-center leading-tight">
            {label}
        </span>
    </div>
);

// Helper Component for Mobile Nodes
const MobileNode = ({ icon, label }) => (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100">
        <div className="text-green-600 mb-2">
            {React.cloneElement(icon, { size: 24 })}
        </div>
        <span className="text-sm font-medium text-gray-700 text-center">
            {label}
        </span>
    </div>
);

export default AboutSection;