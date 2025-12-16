import React from 'react';
import { CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {

    const features = [
        {
            title: "AI-Powered Strategies",
            description: "We use advanced AI to analyse data, predict trends, and make smarter decisions that keep you ahead of the competition."
        },
        {
            title: "Multilingual and Local Focus",
            description: "We break language barriers by providing services in English, Hindi, Punjabi, and Spanish to deeply connect with your local audience."
        },
        {
            title: "Flexible Pricing",
            description: "Choose from fixed monthly fees or revenue-based models designed to suit startups and established businesses alike."
        },
        {
            title: "Early-stage Success with AI",
            description: "Our AI-driven approaches have consistently delivered measurable growth and high ROI for our clients."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* --- LEFT SIDE: TEXT CONTENT --- */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                Why Choose <span className="text-green-600">AUTOSKALER's</span> <br />
                                AI-Powered Services?
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At Autoskaler, we merge human creativity with cutting-edge AI technology to offer innovative, tailored strategies. Here’s what makes us stand out:
                            </p>
                        </div>

                        <div className="space-y-6">
                            {features.map((item, index) => (
                                <div key={index} className="flex items-start group">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 group-hover:text-green-600 transition-colors" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link to={"/about"}>
                                <button className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 uppercase text-sm tracking-wide">
                                    Learn More About Our AI Approach
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: GROWTH GRAPH ILLUSTRATION --- */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">

                        {/* Background Decor Elements */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-green-50 rounded-full blur-3xl opacity-50 z-0"></div>

                        <div className="relative z-10 w-full max-w-md aspect-square flex items-end justify-center p-8">

                            {/* Bar 1 */}
                            <div className="w-16 sm:w-20 bg-red-400 rounded-t-lg shadow-md mx-2 h-32 animate-pulse-slow transform transition-all hover:scale-105 hover:bg-red-500"></div>

                            {/* Bar 2 */}
                            <div className="w-16 sm:w-20 bg-cyan-500 rounded-t-lg shadow-md mx-2 h-48 animate-pulse-slow delay-100 transform transition-all hover:scale-105 hover:bg-cyan-600"></div>

                            {/* Bar 3 */}
                            <div className="w-16 sm:w-20 bg-yellow-400 rounded-t-lg shadow-md mx-2 h-64 animate-pulse-slow delay-200 transform transition-all hover:scale-105 hover:bg-yellow-500"></div>

                            {/* Rising Arrow SVG Overlay */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                                {/* Hand-drawn style arrow path */}
                                <path
                                    d="M 50 250 Q 150 200 350 50"
                                    fill="none"
                                    stroke="#374151"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    className="drop-shadow-lg"
                                />
                                {/* Arrowhead */}
                                <path
                                    d="M 310 60 L 350 50 L 330 90"
                                    fill="none"
                                    stroke="#374151"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="drop-shadow-lg"
                                />
                            </svg>

                            {/* Floating Badge */}
                            <div className="absolute top-10 left-0 bg-white p-4 rounded-xl shadow-xl border border-green-100 flex items-center animate-bounce-slow">
                                <div className="bg-green-100 p-2 rounded-full mr-3">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase">Growth Rate</p>
                                    <p className="text-xl font-bold text-green-600">+150%</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;