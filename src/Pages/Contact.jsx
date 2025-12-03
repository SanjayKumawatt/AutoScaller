import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    isGenuine: false
  });
  
  // State to handle submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call or EmailJS)
    console.log('Form Submitted:', formData);
    
    // Show success message in UI instead of alert
    setIsSubmitted(true);
    
    // Clear form fields immediately upon submission
    setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        isGenuine: false
    });
    
    // Reset submission status (hide success message) after 5 seconds
    setTimeout(() => {
        setIsSubmitted(false);
    }, 5000);
  };

  const services = [
    "Web Development",
    "Graphic Designing",
    "Advanced SEO",
    "Google My Business Optimization",
    "Content Writing",
    "UI/UX Design"
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* --- HERO / HEADER SECTION --- */}
      <div className="bg-[#0b3d2c] py-20 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <circle cx="0" cy="0" r="40" fill="white" />
             <circle cx="100" cy="100" r="40" fill="white" />
           </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            We'd love to hear from you!
          </h1>
          <p className="text-lg md:text-xl text-green-100 leading-relaxed">
            Thinking of us 'coz you've got an idea in mind that you want to discuss? Or need help with a project or dedicated team? We're all ears.
          </p>
          <p className="text-green-200 font-medium">
            Fill the form, and we'll get back to you at the earliest.
          </p>
          <div className="pt-4">
            <p className="text-lg">
              Let's kickoff a conversation; drop us a line at <span className="font-bold underline text-green-400">support@autoskaler.in</span>
            </p>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT SIDE: CONTACT FORM */}
          <div>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900">
                Tell us about your requirement
              </h2>
              <p className="text-green-600 font-medium mt-2">
                We'll get back to you within a few hours!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none bg-gray-50 focus:bg-white"
                    placeholder="+91 98765 43210"
                    onChange={handleChange}
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">Which service are you interested in?</label>
                  <div className="relative">
                    <select
                      name="service"
                      id="service"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                      onChange={handleChange}
                      value={formData.service}
                    >
                      <option value="" disabled>Select a Service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                    {/* Custom Arrow */}
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirement Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Tell us more about your requirement</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none bg-gray-50 focus:bg-white resize-none"
                  placeholder="Describe your project, goals, and timeline..."
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Checkbox */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="isGenuine"
                    name="isGenuine"
                    type="checkbox"
                    checked={formData.isGenuine}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 cursor-pointer"
                    onChange={handleChange}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="isGenuine" className="font-medium text-gray-600 cursor-pointer select-none">
                    I confirm that I am not a robot and my inquiry is genuine
                  </label>
                </div>
              </div>

              {/* Submit Button or Success Message */}
              <div>
                {isSubmitted ? (
                    <div className="w-full sm:w-auto px-8 py-4 bg-green-100 text-green-700 border border-green-200 font-bold rounded-md flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        Thank you! We will connect with you shortly.
                    </div>
                ) : (
                    <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center uppercase tracking-wider text-sm"
                    >
                    Submit
                    <Send className="w-4 h-4 ml-2" />
                    </button>
                )}
              </div>

            </form>
          </div>

          {/* RIGHT SIDE: CONTACT INFO CARDS & MAP */}
          <div className="space-y-8">
            
            {/* Contact Information Cards */}
            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-gray-900 uppercase">Address</p>
                    <p className="text-gray-600 mt-1">
                      D51, Chembur Village, 12th Rd,<br />
                      Rc Marg Opp Post Off, Mumbai,<br />
                      Maharashtra, India, 400071.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-bold text-gray-900 uppercase">Email</p>
                    <a href="mailto:info@autoskaler.in" className="text-green-600 hover:text-green-800 transition-colors mt-1 block">
                      support@autoskaler.in
                    </a>
                  </div>
                </div>

                
              </div>
            </div>

            {/* Map Placeholder (Iframe Simulation) */}
           
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;