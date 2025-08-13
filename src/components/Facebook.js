"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

const FacebookChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const openFacebook = () => {
    // Replace with your actual Facebook page URL
    const facebookURL = "https://www.facebook.com/share/1EBDZyaMMv/";
    window.open(facebookURL, '_blank');
  };

  return (
    <>
      {/* Floating Facebook Button */}
      <div className="fixed bottom-24 right-6 z-40">
        <button
          onClick={toggleChat}
          className="relative bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          {/* Facebook Icon SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>

          {/* Red notification dot */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            1
          </div>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-42 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="text-white p-4 flex items-center justify-between" style={{backgroundColor: '#1877F2'}}>
            <div className="flex items-center space-x-3">
              {/* Profile Picture with Online Indicator */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  {/* Default avatar */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#666"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                {/* Online blue dot */}
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-blue-400 rounded-full border-2 border-white"></div>
              </div>
              
              <div>
                <div className="font-medium">Facebook Support</div>
                <div className="text-sm opacity-90">Online</div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={toggleChat}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-gray-50 min-h-[200px]">
            {/* Message */}
            <div className="bg-white rounded-lg p-3 shadow-sm max-w-[85%] mb-4">
              <p className="text-gray-800">Hello! 👋</p>
              <p className="text-gray-800 mt-1">Connect with us on Facebook!</p>
              <div className="text-xs text-gray-500 mt-2">Just now</div>
            </div>
            
            {/* Facebook Button integrated in chat */}
            <button
              onClick={openFacebook}
              className="w-full text-white font-medium py-3 px-4 rounded-full flex items-center justify-center space-x-2 transition-colors hover:opacity-90"
              style={{backgroundColor: '#1877F2'}}
            >
              {/* Facebook Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Visit Facebook Page</span>
            </button>
          </div>  
        </div>
      )}
    </>
    );
};

export default FacebookChat;
