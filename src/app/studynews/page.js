"use client"
import React from 'react';
import PageBanner from '../../components/PageBanner';
import StudentAdviceForm from '../../components/StudentAdviceForm';

const StudyNews = () => {

  const adCards = [
    {
      id: 1,
      title: "Study in Italy",
      description: "Discover world-class education in the heart of Europe. Experience rich culture, historic universities, and affordable tuition fees.",
      image: "/study-news/italy.webp",
      features: ["Affordable Tuition", "Rich Cultural Heritage", "EU Education Standards", "Beautiful Locations"],
      ctaText: "Learn More",
      ctaLink: "/destinations/italy"
    },
    {
      id: 2,
      title: "Study in Germany",
      description: "Join thousands of international students in Germany's top-ranked universities. No tuition fees at public universities!",
      image: "/study-news/germany.webp",
      features: ["No Tuition Fees", "World-Class Universities", "Strong Economy", "Post-Study Work Visa"],
      ctaText: "Explore Now",
      ctaLink: "/destinations/germany"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Banner */}
      <PageBanner 
        title="Study News" 
        breadcrumb="studysure > studynews"
      />

      {/* Main Content */}
      <div className="max-full mx-auto px-12 sm:px-6 lg:px-24 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content - Takes 3 columns */}
          <div className="lg:col-span-3">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Study Opportunities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover amazing study abroad opportunities and educational programs tailored for your success.
              </p>
            </div>

            {/* Ad Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
          {adCards.map((ad) => (
            <div key={ad.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Card Image */}
              <div 
                className="h-64 bg-cover bg-center bg-no-repeat relative overflow-hidden"
                style={{
                  backgroundImage: `url('${ad.image}')`
                }}
              >
                <div className="absolute inset-0 bg-[#034833]/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{ad.title}</h3>
                    <div className="w-16 h-1 bg-white mx-auto rounded"></div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {ad.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {ad.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-[#034833] rounded-full mr-2"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <a
                    href={ad.ctaLink}
                    className="bg-[#034833] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#045a3f] transition-colors duration-200 inline-flex items-center"
                  >
                    {ad.ctaText}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            ))}
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

export default StudyNews;
