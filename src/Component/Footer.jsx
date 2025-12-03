import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0b3d2c] text-white font-sans">

            {/* --- MAIN FOOTER CONTENT --- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* COLUMN 0 — Logo + About */}
                    <div>
                        <div className="flex-shrink-0 flex items-start">
                            <Link to="/" className="flex flex-col leading-tight">
                                <span className="text-2xl font-bold text-green-400 tracking-wide">
                                    AUTOSKALER
                                </span>
                                <span className="text-[10px] font-semibold text-gray-300 tracking-wider">
                                    TECHNOLOGIES PVT. LTD.
                                </span>
                            </Link>
                        </div>

                        <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                            Autoskaler is a modern IT solutions company delivering high-quality 
                            web development, digital growth, automation, and branding services 
                            to help businesses scale with confidence.
                        </p>
                    </div>

                    {/* COLUMN 1 — Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-green-400 mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/web-development" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMN 2 — Mumbai Address */}
                    <div>
                        <h3 className="text-xl font-bold text-green-400 mb-6">Mumbai Office</h3>
                        <div className="flex items-start space-x-3 text-gray-300">
                            <MapPin className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <p className="leading-relaxed">
                                D51, Chembur Village, 12th Rd,<br />
                                Rc Marg Opp Post Off, Mumbai,<br />
                                Mumbai, Maharashtra, India, 400071.
                            </p>
                        </div>
                    </div>

                    {/* COLUMN 3 — Get in Touch */}
                    <div>
                        <h3 className="text-xl font-bold text-green-400 mb-6">Get in Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Mail className="w-5 h-5 text-green-500" />
                                <a href="mailto:support@autoskaler.in" className="hover:text-white transition-colors">
                                    support@autoskaler.in
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- COPYRIGHT BAR --- */}
            <div className="border-t border-green-800 bg-[#092f22]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">

                    <p className="text-sm text-gray-400 text-center sm:text-left">
                        Copyright © {new Date().getFullYear()}{" "}
                        <span className="text-white font-semibold">Autoskaler Technologies Pvt. Ltd.</span>  
                        All rights reserved.
                    </p>

                    {/* Scroll to top button */}
                    <button
                        onClick={scrollToTop}
                        className="p-2 bg-green-600 hover:bg-green-500 rounded-md transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
