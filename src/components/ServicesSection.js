"use client"
import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: What We Offer */}
          <div className="bg-[#ECDBBA] p-8 rounded-lg shadow-lg">
            {/* Green accent line inside card, above title */}
            <div 
              className="mb-6"
              style={{
                width: '80px',
                height: '4px',
                backgroundColor: '#83CD20'
              }}
            ></div>
            <h2 
              className="text-3xl font-bold mb-8 text-center"
              style={{ 
                color: '#034833',
                fontFamily: '"Plus Jakarta Sans", sans-serif'
              }}
            >
              What We Offer
            </h2>
            
            <div className="space-y-6">
              {/* Student Counseling */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md" style={{ border: '2px solid #1C5A47' }}>
                    <Image
                      src="/ourservices/icon1.png"
                      alt="Student Counseling"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(89%) saturate(1000%) hue-rotate(147deg) brightness(95%) contrast(101%)' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#034833' }}>
                    Student Counseling
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Being a premier Student Consultancy Service, we provide professional advice and student specific guidance for study abroad, from undergraduate to postgraduate levels. Our professional Counselors do consider your qualification, aptitude interests, market trends, and recommend a specific / tailor-made solution to meet your requirement.
                  </p>
                </div>
              </div>

              {/* Admission Process */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md" style={{ border: '2px solid #1C5A47' }}>
                    <Image
                      src="/ourservices/icon2.png"
                      alt="Admission Process"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(89%) saturate(1000%) hue-rotate(147deg) brightness(95%) contrast(101%)' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#034833' }}>
                    Admission Process
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    At StudySure, we do our best to ensure speedy admission processing by an immediate / regular follow up with universities.
                  </p>
                </div>
              </div>

              {/* Visa Guidance */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md" style={{ border: '2px solid #1C5A47' }}>
                    <Image
                      src="/ourservices/icon3.png"
                      alt="Visa Guidance"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(89%) saturate(1000%) hue-rotate(147deg) brightness(95%) contrast(101%)' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#034833' }}>
                    Visa Guidance
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We offer a complete visa application guidance and help to file visa. Our visa officer personally takes care of the visa filing process and documentation. We will help / guide you for visa interview thus enhancing your visa prospects. As our Counselors remain up to date and well informed, hence, they provide realistic guidance in line with latest rules.
                  </p>
                </div>
              </div>

              {/* IELTS Coaching */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md" style={{ border: '2px solid #1C5A47' }}>
                    <Image
                      src="/ourservices/icon4.png"
                      alt="IELTS Coaching"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(89%) saturate(1000%) hue-rotate(147deg) brightness(95%) contrast(101%)' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#034833' }}>
                    IELTS Coaching
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    IELTS, or the International English Language Testing System, is a test designed to assess the English language proficiency of non-native speakers. It evaluates four key skills; Listening, Reading, Writing, and Speaking. IELTS is often required for those wishing to study abroad, migrate to an English-speaking country, or work in an environment where English is the primary language. We at StudySure, provide full preparatory coaching / guidance for the test.
                  </p>
                </div>
              </div>

              {/* Statement of Purpose Writing */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md" style={{ border: '2px solid #1C5A47' }}>
                    <Image
                      src="/ourservices/icon5.png"
                      alt="SOP Writing"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(89%) saturate(1000%) hue-rotate(147deg) brightness(95%) contrast(101%)' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#034833' }}>
                    Statement of Purpose (SOP) Writing
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We provide comprehensive guidance on writing an effective and compelling SOP.
                  </p>
                </div>
              </div>

              {/* Free Counseling Services */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md" style={{ border: '2px solid #1C5A47' }}>
                    <Image
                      src="/ourservices/icon1.png"
                      alt="Free Counseling Services"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(89%) saturate(1000%) hue-rotate(147deg) brightness(95%) contrast(101%)' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#034833' }}>
                    We also offer free counseling services for following:
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>a) How to get scholarship, so you can study just for free</li>
                    <li>b) Finding the best study program / specific discipline</li>
                    <li>c) CV writing in line with international standards</li>
                    <li>d) Selection and enrolment in top foreign universities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Why Choose StudySure */}
          <div className="bg-[#D1D4C9] p-8 rounded-lg shadow-lg">
            {/* Green accent line inside card, above title */}
            <div 
              className="mb-6"
              style={{
                width: '80px',
                height: '4px',
                backgroundColor: '#83CD20'
              }}
            ></div>
            <h2 
              className="text-3xl font-bold mb-8 text-center"
              style={{ 
                color: '#034833',
                fontFamily: '"Plus Jakarta Sans", sans-serif'
              }}
            >
              Why Choose StudySure
            </h2>
            
            <div className="space-y-6">
              {/* Student-Centered Approach */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md" style={{ border: '2px solid #1C5A47' }}>
                    <Image
                      src="/whyus/student.png"
                      alt="Student-Centered Approach"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(89%) saturate(1000%) hue-rotate(147deg) brightness(95%) contrast(101%)' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#034833' }}>
                    Student-Centered Approach
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    I understand the unique challenges and concerns of individual student and offer specific / tailored guidance / advice.
                  </p>
                </div>
              </div>

              {/* Expert Team */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md" style={{ border: '2px solid #1C5A47' }}>
                    <Image
                      src="/whyus/team.png"
                      alt="Expert Team"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(89%) saturate(1000%) hue-rotate(147deg) brightness(95%) contrast(101%)' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#034833' }}>
                    Expert Team
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We have competent team of experienced and friendly counselors who remain abreast with the latest trends, issues and opportunities, hence, provide best guidance to our valued students. We challenge that you will never have as good a briefing anywhere as at StudySure.
                  </p>
                </div>
              </div>

              {/* All in One Solution */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md" style={{ border: '2px solid #1C5A47' }}>
                    <Image
                      src="/whyus/allinone.png"
                      alt="All in One Solution"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(89%) saturate(1000%) hue-rotate(147deg) brightness(95%) contrast(101%)' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#034833' }}>
                    All in One Solution
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    StudySure offers all in one solution to our valued students including University / Country selection, IELTS preparation, Visa filing and visa interview preparation.
                  </p>
                </div>
              </div>

              {/* Diverse Destinations */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md" style={{ border: '2px solid #1C5A47' }}>
                    <Image
                      src="/whyus/destination.png"
                      alt="Diverse Destinations"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                      style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(89%) saturate(1000%) hue-rotate(147deg) brightness(95%) contrast(101%)' }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#034833' }}>
                    Diverse Destinations
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We have excellent educational partners across the Globe including Europe, Asia, America and Australia. So, you can study in the country / university of your choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;