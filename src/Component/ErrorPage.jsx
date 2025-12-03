import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-xl shadow-lg border border-gray-100">
        
        {/* --- Icon & Error Code --- */}
        <div className="flex flex-col items-center">
          <div className="bg-green-50 p-4 rounded-full mb-4 animate-pulse">
            <AlertCircle className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-9xl font-extrabold text-green-600 tracking-tight">404</h1>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 tracking-tight">
            Page Not Found
          </h2>
        </div>

        {/* --- Error Message --- */}
        <p className="mt-2 text-md text-gray-500">
          Oops! Lagta hai aap jis page ko dhoond rahe hain wo exist nahi karta ya move kar diya gaya hai.
        </p>

        {/* --- Action Buttons --- */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 shadow-sm"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-300 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            Autoskaler Technologies Pvt. Ltd.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;