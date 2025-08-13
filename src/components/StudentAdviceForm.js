"use client"
import React, { useState, useRef } from 'react';

const StudentAdviceForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    course: '',
    email: '',
    contact: '',
    location: '',
    testScore: '',
    budget: '',
    educationLevel: '',
    qualificationsDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // EmailJS configuration - Replace these with your actual values
  const EMAILJS_SERVICE_ID = 'service_khnfcxh'; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = 'template_zdqjxqc'; // Replace with your EmailJS template ID  
  const EMAILJS_PUBLIC_KEY = 'KIAGVDuvrJxNzlyLz'; // Replace with your EmailJS public key



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const loadEmailJS = () => {
    return new Promise((resolve, reject) => {
      if (typeof window !== 'undefined' && window.emailjs) {
        resolve(window.emailjs);
        return;
      }

      // Create script element
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.onload = () => {
        if (window.emailjs) {
          // Initialize EmailJS
          window.emailjs.init(EMAILJS_PUBLIC_KEY);
          resolve(window.emailjs);
        } else {
          reject(new Error('EmailJS failed to load'));
        }
      };
      script.onerror = () => reject(new Error('Failed to load EmailJS script'));

      // Add script to document head
      document.head.appendChild(script);
    });
  };

  const validateForm = () => {
    const errors = [];

    if (!formData.fullName.trim()) errors.push('Name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!formData.country) errors.push('Country selection is required');
    if (!formData.course.trim()) errors.push('Field of study is required');
    if (!formData.contact.trim()) errors.push('Contact number is required');
    if (!formData.location.trim()) errors.push('Location is required');
    if (!formData.budget) errors.push('Budget selection is required');
    if (!formData.educationLevel) errors.push('Education level is required');
    if (!formData.qualificationsDetails.trim()) errors.push('Qualifications details are required');

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setSubmitMessage(`Please fill in all required fields: ${validationErrors.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    try {
      // Load EmailJS if not already loaded
      const emailjs = await loadEmailJS();

      // Prepare email data with proper mapping
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        contact_number: formData.contact,
        location: formData.location,
        interested_country: formData.country,
        field_of_study: formData.course,
        test_score: formData.testScore || 'Not provided',
        budget_range: formData.budget,
        education_level: formData.educationLevel,
        qualifications: formData.qualificationsDetails,
        to_name: 'Student Advisory Team',
        reply_to: formData.email
      };

      console.log('Sending email with data:', templateParams); // Debug log

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('EmailJS result:', result); // Debug log

      if (result.status === 200) {
        setSubmitMessage('Thank you! Your form has been submitted successfully. We will contact you soon.');
        // Reset form
        setFormData({
          fullName: '',
          country: '',
          course: '',
          email: '',
          contact: '',
          location: '',
          testScore: '',
          budget: '',
          educationLevel: '',
          qualificationsDetails: ''
        });
      } else {
        throw new Error(`Email sending failed with status: ${result.status}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);

      // More specific error messages
      let errorMessage = 'Sorry, there was an error submitting your form. ';

      if (error.message && error.message.includes('400')) {
        errorMessage += 'Please check your email configuration.';
      } else if (error.message && error.message.includes('network')) {
        errorMessage += 'Please check your internet connection.';
      } else {
        errorMessage += 'Please try again later.';
      }

      setSubmitMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      id="contact"
      className="p-8 rounded-lg shadow-lg"
      style={{ 
        backgroundColor: 'rgba(3, 72, 51, 0.9)'
      }}
    >
      <h3
        className="text-2xl font-bold mb-2 text-white text-center"
        style={{
          fontFamily: '"Plus Jakarta Sans", sans-serif'
        }}
      >
        STUDENT ADVICE FORM
      </h3>

      {submitMessage && (
        <div className={`mb-4 p-3 rounded text-center text-sm ${submitMessage.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
          {submitMessage}
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border-2 rounded-md text-white placeholder-gray-300"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#83CD20'
            }}
            required
          />
        </div>

        {/* Country */}
        <div>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border-2 rounded-md text-white"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#83CD20'
            }}
            required
          >
            <option value="" className="text-gray-800">Select Interested Country</option>
            <option value="uk" className="text-gray-800">United Kingdom</option>
            <option value="usa" className="text-gray-800">United States</option>
            <option value="canada" className="text-gray-800">Canada</option>
            <option value="australia" className="text-gray-800">Australia</option>
            <option value="germany" className="text-gray-800">Germany</option>
            <option value="italy" className="text-gray-800">Italy</option>
            <option value="belarus" className="text-gray-800">Belarus</option>
            <option value="france" className="text-gray-800">France</option>
            <option value="georgia" className="text-gray-800">Georgia</option>
            <option value="hungary" className="text-gray-800">Hungary</option>
            <option value="denmark" className="text-gray-800">Denmark</option>
            <option value="cyprus" className="text-gray-800">Cyprus</option>
            <option value="turkey" className="text-gray-800">Turkey</option>
            <option value="china" className="text-gray-800">China</option>
            <option value="uae" className="text-gray-800">UAE</option>
          </select>
        </div>

        {/* Course Type */}
        <div>
          <input
            type="text"
            name="course"
            placeholder="Interested Field of Study"
            value={formData.course}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border-2 rounded-md text-white placeholder-gray-300"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#83CD20'
            }}
            required
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border-2 rounded-md text-white placeholder-gray-300"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#83CD20'
            }}
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <input
            type="tel"
            name="contact"
            placeholder="Contact #"
            value={formData.contact}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border-2 rounded-md text-white placeholder-gray-300"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#83CD20'
            }}
            required
          />
        </div>

        {/* Location */}
        <div>
          <input
            type="text"
            name="location"
            placeholder="Where are you located?"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border-2 rounded-md text-white placeholder-gray-300"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#83CD20'
            }}
            required
          />
        </div>

        {/* Test Score */}
        <div>
          <input
            type="text"
            name="testScore"
            placeholder="IELTS or TOEFL Score"
            value={formData.testScore}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border-2 rounded-md text-white placeholder-gray-300"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#83CD20'
            }}
          />
        </div>

        {/* Budget */}
        <div>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border-2 rounded-md text-white"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#83CD20'
            }}
            required
          >
            <option value="" className="text-gray-800">Select your budget</option>
            <option value="15-25" className="text-gray-800">Rs. 15 Lakh to 25 Lakh per year</option>
            <option value="25-35" className="text-gray-800">Rs. 25 Lakh to 35 Lakh per year</option>
            <option value="35-50" className="text-gray-800">Rs. 35 Lakh to 50 Lakh per year</option>
            <option value="50+" className="text-gray-800">Rs. 50 Lakh+ per year</option>
          </select>
        </div>

        {/* Education Level */}
        <div>
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border-2 rounded-md text-white"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#83CD20'
            }}
            required
          >
            <option value="" className="text-gray-800">Current Education Level</option>
            <option value="intermediate" className="text-gray-800">Intermediate</option>
            <option value="bachelors" className="text-gray-800">Bachelor's Degree</option>
            <option value="masters" className="text-gray-800">Master's Degree</option>
            <option value="phd" className="text-gray-800">PhD</option>
          </select>
        </div>

        {/* Qualifications Details */}
        <div>
          <textarea
            name="qualificationsDetails"
            placeholder="Field Of Study&#10;CGPA/Percentage&#10;Year&#10;College/University"
            value={formData.qualificationsDetails}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 text-sm border-2 rounded-md resize-none text-white placeholder-gray-300"
            style={{
              backgroundColor: 'transparent',
              borderColor: '#83CD20'
            }}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full py-3 px-4 text-white font-semibold rounded-md hover:opacity-90 transition-opacity duration-200 disabled:opacity-50"
          style={{ backgroundColor: '#83CD20' }}
        >
          {isSubmitting ? 'Sending...' : 'Get Expert Advice'}
        </button>
      </div>


    </div>
  );
};

export default StudentAdviceForm;