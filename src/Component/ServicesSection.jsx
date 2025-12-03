import React from 'react';
import {
    Search,
    MapPin,
    Palette,
    Layout,
    PenTool,
    Code2,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {   // <-- YE LINE MISSING THI

    const services = [
        {
            id: 1,
            title: "ADVANCED SEO",
            description: "We optimize your website for higher rankings and targeted traffic by analyzing search patterns and identifying high-impact keywords.",
            mainIcon: <Search className="w-8 h-8 text-white" />,
            features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
            color: "bg-orange-500",
            path: "/services/seo"
        },
        {
            id: 2,
            title: "GOOGLE MY BUSINESS",
            description: "We optimize your GMB profile, managing reviews and ensuring nearby customers find and choose you first.",
            mainIcon: <MapPin className="w-8 h-8 text-white" />,
            features: ["Profile Setup", "Local SEO", "Review Mgmt", "Insights"],
            color: "bg-blue-500",
            path: "/services/gmb"
        },
        {
            id: 3,
            title: "GRAPHIC DESIGN",
            description: "Bring your brand to life with creative graphic design that captures attention and reflects your unique identity.",
            mainIcon: <Palette className="w-8 h-8 text-white" />,
            features: ["Logo Design", "Social Assets", "Print Media", "Branding"],
            color: "bg-purple-500",
            path: "/services/graphic-design"
        },
        {
            id: 4,
            title: "UI/UX DESIGN",
            description: "Enhance user experience with intuitive UI/UX design that engages visitors and turns them into loyal customers.",
            mainIcon: <Layout className="w-8 h-8 text-white" />,
            features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
            color: "bg-pink-500",
            path: "/services/ui-ux"
        },
        {
            id: 5,
            title: "WEB DEVELOPMENT",
            description: "We design responsive websites enriched with AI features to create seamless user experiences tailored to your business needs.",
            mainIcon: <Code2 className="w-8 h-8 text-white" />,
            features: ["Strategy", "Design", "Development", "Launch"],
            color: "bg-cyan-600",
            path: "/services/web-development"
        },
        {
            id: 6,
            title: "CONTENT WRITING",
            description: "Our AI-driven content strategies produce high-quality, relevant content that ranks well and speaks directly to your audience.",
            mainIcon: <PenTool className="w-8 h-8 text-white" />,
            features: ["Blog Writing", "Copywriting", "SEO Content", "Editing"],
            color: "bg-yellow-500",
            path: "/services/content-writing"
        }
    ];

    return (
        <section className="py-16 bg-gray-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        What <span className="text-green-600">AI-Powered Services</span> Does <br className="hidden md:block" />
                        AUTOSKALER Offer?
                    </h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">

                            {/* MIND MAP VISUAL */}
                            <div className="relative h-48 mb-6 w-full flex items-center justify-center">
                                <svg className="absolute inset-0 w-full h-full text-gray-300 z-0 pointer-events-none">
                                    <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="currentColor" strokeWidth="1" />
                                    <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="currentColor" strokeWidth="1" />
                                    <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="currentColor" strokeWidth="1" />
                                    <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="currentColor" strokeWidth="1" />
                                </svg>

                                <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${service.color}`}>
                                    {service.mainIcon}
                                </div>

                                <div className="absolute top-4 left-0 w-1/3 text-center">
                                    <span className="text-[10px] font-bold bg-gray-50 border border-gray-200 px-2 py-1 rounded-full block shadow-sm">
                                        {service.features[0]}
                                    </span>
                                </div>

                                <div className="absolute top-4 right-0 w-1/3 text-center">
                                    <span className="text-[10px] font-bold bg-gray-50 border border-gray-200 px-2 py-1 rounded-full block shadow-sm">
                                        {service.features[1]}
                                    </span>
                                </div>

                                <div className="absolute bottom-4 left-0 w-1/3 text-center">
                                    <span className="text-[10px] font-bold bg-gray-50 border border-gray-200 px-2 py-1 rounded-full block shadow-sm">
                                        {service.features[2]}
                                    </span>
                                </div>

                                <div className="absolute bottom-4 right-0 w-1/3 text-center">
                                    <span className="text-[10px] font-bold bg-gray-50 border border-gray-200 px-2 py-1 rounded-full block shadow-sm">
                                        {service.features[3]}
                                    </span>
                                </div>

                            </div>

                            <div className="text-center flex-grow">
                                <h3 className="text-xl font-bold mb-3 uppercase">{service.title}</h3>
                                <p className="text-sm text-gray-600 mb-6">{service.description}</p>
                            </div>

                            <div className="mt-auto text-center">
                                <Link to={service.path} className="inline-flex items-center text-sm font-bold text-green-600 hover:text-green-700 transition-colors group">
                                    Learn more
                                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
