"use client"
import React, { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do StudySure consultants help students in course / university selection?",
      answer: "We provide personalized guidance in line with student your preferences, aspirations and career goals, suggesting institutions and courses which best fit your profile."
    },
    {
      id: 2,
      question: "Can StudySure Consultants help students find scholarships?",
      answer: "Yes, we assist in finding suitable scholarships, provide application guidance, and offer financial counseling to benefit from other options i.e grants and loans."
    },
    {
      id: 3,
      question: "What type of pre-departure support can we provide at StudySure?",
      answer: "At StudySure, we offer pre-departure orientation, assist in travel arrangements i.e booking flight, airport pickups, and detailed packing lists to prepare student for living and studying abroad."
    },
    {
      id: 4,
      question: "How do we facilitate students to get their visa timely?",
      answer: "StudySure Consultants offer deliberate support to student for their visas, including visa application filing, document preparation, interview practice, and continuous support during the application process."
    },
    {
      id: 5,
      question: "What type of admission support can StudySure provide?",
      answer: "We help our students in application preparation, guide them in writing effective Statements of Purpose, help prepare recommendation letters, and guide them for university interviews to enhance their application acceptance prospects manifold."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* FAQ Container */}
        <div className="bg-[#034833] p-8 rounded-lg shadow-lg">
          {/* Green accent line */}
          <div 
            className="mb-6"
            style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#83CD20'
            }}
          ></div>
          
          {/* Section Title */}
          <h2 
            className="text-3xl font-bold mb-8 text-center"
            style={{ 
              color: '#fff',
              fontFamily: '"Plus Jakarta Sans", sans-serif'
            }}
          >
            FAQs ABOUT STUDYSURE
          </h2>
          
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className="border rounded-lg overflow-hidden"
                style={{ borderColor: '#034833' }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <span 
                    className="font-semibold text-lg pr-4"
                    style={{ color: '#034833' }}
                  >
                    {faq.question}
                  </span>
                  <span 
                    className="text-2xl font-bold flex-shrink-0 transition-transform duration-200"
                    style={{ 
                      color: '#83CD20',
                      transform: openFAQ === faq.id ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}
                  >
                    +
                  </span>
                </button>
                
                {/* Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 pt-2 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;