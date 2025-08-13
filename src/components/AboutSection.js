"use client"
import React from 'react';
import Image from 'next/image';
import StudentAdviceForm from './StudentAdviceForm';

const AboutSection = () => {

  return (
    <section 
      id="about"
      className="py-16 relative"
      style={{
        backgroundImage: 'url(/about-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* White overlay to reduce background opacity */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)'
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: About StudySure */}
          <div 
            className="p-8 rounded-lg shadow-lg"
            style={{ 
              backgroundColor: 'rgba(3, 72, 51, 0.9)'
            }}
          >
            {/* Logo2 - 3x bigger and rounded */}
            <div className="flex justify-center mb-6">
              <Image
                src="/logo2.png"
                alt="StudySure Logo"
                width={180}
                height={180}
                className="w-56 h-56 object-contain rounded-full"
              />
            </div>
            <div 
              className="mb-4"
              style={{
                width: '60px',
                height: '4px',
                backgroundColor: '#83CD20'
              }}
            ></div>
            <h2 
              className="text-3xl font-bold mb-6 text-white"
              style={{ 
                fontFamily: '"Plus Jakarta Sans", sans-serif'
              }}
            >
              ABOUT STUDYSURE
            </h2>
            <p className="text-white/90 leading-relaxed text-sm">
              StudySure is a dedicated, detail oriented student consultancy, offering professional advice and guidance to students for study abroad. We serve as a vital link between our students and the foreign universities. At StudySure, we provide expert guidance with a view to help navigate challenges for study in prestigious foreign Universities around the globe. We provided step by step guidance / coaching to realize your dream of studying abroad including selection of best foreign university tailored to your academic requirements, IELTS preparation and Visa processing / visa interview preparation.
            </p>
          </div>

          {/* Column 2: Vision, Mission, Inspiration */}
          <div className="space-y-6">
            {/* Our Vision */}
            <div 
              className="p-6 rounded-lg shadow-lg relative overflow-hidden" 
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 opacity-100"
                style={{
                  backgroundImage: 'url(/about/card1.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="relative z-10 bg-white  rounded-lg p-4">
              <div className="flex justify-start mb-4">
                <Image
                  src="/about/vision.png"
                  alt="Vision Icon"
                  width={60}
                  height={60}
                  className="w-15 h-15 object-contain"
                />
              </div>
              <h3 
                className="text-xl font-bold mb-4"
                style={{ 
                  color: '#034833',
                  fontFamily: '"Plus Jakarta Sans", sans-serif'
                }}
              >
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                <strong>Shaping Futures</strong> - Our vision is to become No.1 global education consultancy service by enabling our students to realize their dreams of study abroad thus help SHAPE THEIR FUTURES.
              </p>
              </div>
            </div>

            {/* Our Mission */}
            <div 
              className="p-6 rounded-lg shadow-lg relative overflow-hidden" 
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 opacity-100"
                style={{
                  backgroundImage: 'url(/about/card2.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="relative z-10 bg-white  rounded-lg p-4">
              <div className="flex justify-start mb-4">
                <Image
                  src="/about/mission.png"
                  alt="Mission Icon"
                  width={60}
                  height={60}
                  className="w-15 h-15 object-contain"
                />
              </div>
              <h3 
                className="text-xl font-bold mb-4"
                style={{ 
                  color: '#034833',
                  fontFamily: '"Plus Jakarta Sans", sans-serif'
                }}
              >
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                To enable our worthy students through specific / tailored guidance, with a view to ensure their admissions in International Universities that best suit their academic objectives and help fulfil their career aspirations.
              </p>
              </div>
            </div>

            {/* Our Inspiration */}
            <div 
              className="p-6 rounded-lg shadow-lg relative overflow-hidden" 
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 opacity-100"
                style={{
                  backgroundImage: 'url(/about/card3.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              <div className="relative z-10 bg-white  rounded-lg p-4">
              <div className="flex justify-start mb-4">
                <Image
                  src="/about/inspiration.png"
                  alt="Inspiration Icon"
                  width={60}
                  height={60}
                  className="w-15 h-15 object-contain"
                />
              </div>
              <h3 
                className="text-xl font-bold mb-4"
                style={{ 
                  color: '#034833',
                  fontFamily: '"Plus Jakarta Sans", sans-serif'
                }}
              >
                Our Inspiration
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                The need to establish a premier consultancy service for foreign study is inspired by the sole idea of providing student centric, realistic and true guidance / facilitation to the students aspiring for study in prestigious foreign institutions.
              </p>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Form */}
          <StudentAdviceForm />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
