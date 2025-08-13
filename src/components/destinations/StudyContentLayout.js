"use client"
import React from 'react';
import StudentAdviceForm from '../StudentAdviceForm';

const StudyContentLayout = ({ countryData }) => {
  const {
    countryName,
    whyStudyReasons,
    topUniversities,
    visaProcess,
    costData,
    postStudyWork,
    workRights
  } = countryData;



  return (
    <div className="py-16 px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-full mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-8">
        
        {/* Row 1: Why Study & Top Universities */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Why Study Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">Why Study in {countryName}</h2>
            </div>
            <div className="space-y-4">
              {whyStudyReasons?.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-[#034833] w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{
                    __html: reason.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-green-600">$1</span>')
                  }}></p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Universities Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">Top Universities of {countryName}</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {topUniversities?.map((uni, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#034833] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-medium text-base">{uni.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Student Visa Process - Full Width */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#034833] p-3 rounded-full mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#034833]">Student Visa Process for {countryName}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {visaProcess?.map((step, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#034833] w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#034833] mb-2">{step.step}</h3>
                      <div className="text-gray-700 text-sm whitespace-pre-line">{step.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

            {/* Row 3: Cost & Post Study Work */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Cost Section */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#034833] p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-[#034833]">How Much It Costs to Study in {countryName}</h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {costData?.tuitionFees?.map((fee, index) => (
                    <div key={index} className={`p-4 rounded-lg text-white text-center ${
                      index % 2 === 0 ? 'bg-gradient-to-r from-[#034833] to-[#83CD20]' : 'bg-gradient-to-r from-[#83CD20] to-[#034833]'
                    }`}>
                      <h4 className="text-lg font-semibold mb-1">{fee.level}</h4>
                      <p className="text-2xl font-bold">{fee.range}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Post Study Work */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#034833] p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-[#034833]">{postStudyWork?.title || `Post Study Work / PR in ${countryName}`}</h2>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-lg border border-gray-200">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#034833] rounded-full flex-shrink-0 mt-2"></div>
                        <p className="text-gray-700" dangerouslySetInnerHTML={{
                          __html: postStudyWork?.description?.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-green-600">$1</span>') || ''
                        }}></p>
                      </div>
                      {postStudyWork?.benefits && postStudyWork.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#034833] rounded-full flex-shrink-0 mt-2"></div>
                          <p className="text-gray-700" dangerouslySetInnerHTML={{
                            __html: benefit.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-green-600">$1</span>')
                          }}></p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Student Advice Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <StudentAdviceForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyContentLayout;
