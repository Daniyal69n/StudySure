"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false)
  const [isEuropeSubmenuOpen, setIsEuropeSubmenuOpen] = useState(false)
  const [isUniversityDropdownOpen, setIsUniversityDropdownOpen] = useState(false)
  const [isUniversityEuropeSubmenuOpen, setIsUniversityEuropeSubmenuOpen] = useState(false)
  const [isDestinationDropdownOpen, setIsDestinationDropdownOpen] = useState(false)
  const [isDestinationEuropeSubmenuOpen, setIsDestinationEuropeSubmenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileUniversityOpen, setIsMobileUniversityOpen] = useState(false)
  const [isMobileDestinationOpen, setIsMobileDestinationOpen] = useState(false)
  return (
    <nav className="bg-white">
      {/* First Row - Contact Info and Social Icons */}
      <div className="py-3" style={{ backgroundColor: '#034833' }}>
        <div className="max-w-7xl mx-auto px-2">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center w-full">
            {/* Left Side - WhatsApp and Email */}
            <div className="flex items-center space-x-8">
              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <Image
                  src="/social-icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
                <span className="text-base text-white font-medium">+92 326 833 7390</span>
              </div>
              
              {/* Email */}
              <div className="flex items-center space-x-3">
                <Image
                  src="/social-icons/email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
                <span className="text-base text-white font-medium">studysure.info@gmail.com</span>
              </div>
            </div>

            {/* Right Side - Social Icons */}
            <div className="flex items-center space-x-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/share/1EBDZyaMMv/" target="_blank" className="transition-transform duration-200 hover:scale-110">
                <Image
                  src="/social-icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
              </a>
              
              {/* Instagram */}
              <a href="#" className="transition-transform duration-200 hover:scale-110">
                <Image
                  src="/social-icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="transition-transform duration-200 hover:scale-110">
                <Image
                  src="/social-icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
              </a>
            </div>
          </div>

          {/* Mobile Layout - Column Format */}
          <div className="md:hidden flex flex-col items-center space-y-4">
            {/* Contact Info */}
            <div className="flex flex-col items-center space-y-2">
              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <Image
                  src="/social-icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
                <span className="text-sm text-white font-medium">+1 234 567 8900</span>
              </div>
              
              {/* Email */}
              <div className="flex items-center space-x-3">
                <Image
                  src="/social-icons/email.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
                <span className="text-sm text-white font-medium">studysure.info@gmail.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {/* Facebook */}
              <a href="#" className="transition-transform duration-200 hover:scale-110">
                <Image
                  src="/social-icons/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
              </a>
              
              {/* Instagram */}
              <a href="#" className="transition-transform duration-200 hover:scale-110">
                <Image
                  src="/social-icons/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="transition-transform duration-200 hover:scale-110">
                <Image
                  src="/social-icons/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Light colored line */}
      <div className="h-px bg-[#034833] opacity-20"></div>

      {/* Second Row - Logo and Navigation */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/logo.jpeg"
                    alt="StudySure Logo"
                    width={300}
                    height={100}
                    className="h-25 w-auto"
                  />
                </Link>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold" style={{ color: '#034833' }}>STUDYSURE CONSULTANTS</span>
                <span className="text-sm font-medium" style={{ color: '#034833' }}>(PRIVATE) LIMITED</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:bg-[#034833] hover:text-white px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                HOME
              </Link>
              
              {/* DESTINATIONS Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsDestinationDropdownOpen(true)}
                onMouseLeave={() => {
                  setIsDestinationDropdownOpen(false)
                  setIsDestinationEuropeSubmenuOpen(false)
                }}
              >
                <button 
                  className="text-gray-700 hover:bg-[#034833] hover:text-white px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  DESTINATIONS
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDestinationDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {/* United Kingdom */}
                      <Link 
                        href="/destinations/united-kingdom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        United Kingdom
                      </Link>

                      {/* Europe Submenu */}
                      <div 
                        className="relative"
                        onMouseEnter={() => setIsDestinationEuropeSubmenuOpen(true)}
                        onMouseLeave={() => setIsDestinationEuropeSubmenuOpen(false)}
                      >
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200 flex items-center justify-between">
                          Europe
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </button>

                        {/* Europe Submenu */}
                        {isDestinationEuropeSubmenuOpen && (
                          <div className="absolute left-full top-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                            <div className="py-2">
                              <Link href="/destinations/germany" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Germany
                              </Link>
                              <Link href="/destinations/italy" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Italy
                              </Link>
                              <Link href="/destinations/belarus" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Belarus
                              </Link>
                              <Link href="/destinations/france" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                France
                              </Link>
                              <Link href="/destinations/georgia" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Georgia
                              </Link>
                              <Link href="/destinations/hungary" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Hungary
                              </Link>
                              <Link href="/destinations/denmark" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Denmark
                              </Link>
                              <Link href="/destinations/sweden" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Sweden
                              </Link>
                              <Link href="/destinations/cyprus" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Cyprus
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* USA */}
                      <Link 
                        href="/destinations/united-states"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        USA
                      </Link>

                      {/* Canada */}
                      <Link 
                        href="/destinations/canada"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        Canada
                      </Link>

                      {/* Australia */}
                      <Link 
                        href="/destinations/australia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        Australia
                      </Link>

                      {/* Turkey */}
                      <Link 
                        href="/destinations/turkey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        Turkey
                      </Link>

                      {/* China */}
                      <Link 
                        href="/destinations/china"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        China
                      </Link>

                      {/* UAE */}
                      <Link 
                        href="/destinations/dubai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        UAE
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* UNIVERSITIES Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsUniversityDropdownOpen(true)}
                onMouseLeave={() => {
                  setIsUniversityDropdownOpen(false)
                  setIsUniversityEuropeSubmenuOpen(false)
                }}
              >
                <button 
                  className="text-gray-700 hover:bg-[#034833] hover:text-white px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  UNIVERSITIES
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isUniversityDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {/* United Kingdom */}
                      <a 
                        href="https://www.topuniversities.com/university-rankings-articles/world-university-rankings/top-universities-uk" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        United Kingdom
                      </a>

                      {/* Europe Submenu */}
                      <div 
                        className="relative"
                        onMouseEnter={() => setIsUniversityEuropeSubmenuOpen(true)}
                        onMouseLeave={() => setIsUniversityEuropeSubmenuOpen(false)}
                      >
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200 flex items-center justify-between">
                          Europe
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </button>

                        {/* Europe Submenu */}
                        {isUniversityEuropeSubmenuOpen && (
                          <div className="absolute left-full top-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                            <div className="py-2">
                              <a href="https://www.topuniversities.com/university-rankings-articles/world-university-rankings/top-universities-germany" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Germany
                              </a>
                              <a href="https://www.timeshighereducation.com/student/best-universities/best-universities-italy" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Italy
                              </a>
                              <a href="https://edurank.org/geo/by/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Belarus
                              </a>
                              <a href="https://www.topuniversities.com/university-rankings-articles/world-university-rankings/top-universities-france" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                France
                              </a>
                              <a href="https://www.usnews.com/best-colleges/ga?_sort=rank&_sortDirection=asc" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Georgia
                              </a>
                              <a href="https://www.topuniversities.com/where-to-study/europe/hungary/guide" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Hungary
                              </a>
                              <a href="https://www.mastersportal.com/search/universities/master/rankings/denmark" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Denmark
                              </a>
                              <a href="https://www.topuniversities.com/where-to-study/europe/sweden" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Sweden
                              </a>
                              <a href="https://edurank.org/geo/cy/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200">
                                Cyprus
                              </a>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* USA */}
                      <a 
                        href="https://www.topuniversities.com/where-to-study/north-america/united-states/ranked-top-100-us-universities" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        USA
                      </a>

                      {/* Canada */}
                      <a 
                        href="https://www.topuniversities.com/university-rankings-articles/world-university-rankings/top-universities-canada" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        Canada
                      </a>

                      {/* Australia */}
                      <a 
                        href="https://www.topuniversities.com/university-rankings-articles/world-university-rankings/top-universities-australia" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        Australia
                      </a>

                      {/* Turkey */}
                      <a 
                        href="https://www.timeshighereducation.com/student/best-universities/best-universities-turkey" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        Turkey
                      </a>

                      {/* China */}
                      <a 
                        href="https://www.topuniversities.com/world-university-rankings?region=Asia&countries=cn,hk" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        China
                      </a>

                      {/* Dubai, UAE */}
                      <a 
                        href="https://www.edarabia.com/universities/dubai/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#034833] hover:text-white transition-colors duration-200"
                      >
                        Dubai, UAE
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              <Link 
                href="/studynews" 
                className="text-gray-700 hover:bg-[#034833] hover:text-white px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                STUDY NEWS
              </Link>
              
              <Link 
                href="/#faq" 
                className="text-gray-700 hover:bg-[#034833] hover:text-white px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                FAQs
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#034833]"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-page Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="StudySure Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold" style={{ color: '#034833' }}>StudySure</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-6">
                {/* Home */}
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-gray-700 hover:text-[#034833] py-2"
                >
                  HOME
                </Link>

                {/* Destinations - Matching Desktop Navigation */}
                <div className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setIsMobileDestinationOpen(!isMobileDestinationOpen)}
                    className="w-full flex items-center justify-between text-lg font-medium text-gray-700 py-2"
                  >
                    <span>DESTINATIONS</span>
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${isMobileDestinationOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {isMobileDestinationOpen && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {/* United Kingdom */}
                      <Link href="/destinations/united-kingdom" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">United Kingdom</Link>
                      {/* European Countries */}
                      <Link href="/destinations/germany" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Germany</Link>
                      <Link href="/destinations/italy" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Italy</Link>
                      <Link href="/destinations/belarus" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Belarus</Link>
                      <Link href="/destinations/france" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">France</Link>
                      <Link href="/destinations/georgia" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Georgia</Link>
                      <Link href="/destinations/hungary" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Hungary</Link>
                      <Link href="/destinations/denmark" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Denmark</Link>
                      <Link href="/destinations/sweden" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Sweden</Link>
                      <Link href="/destinations/cyprus" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Cyprus</Link>
                      {/* Other Countries */}
                      <Link href="/destinations/united-states" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">USA</Link>
                      <Link href="/destinations/canada" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Canada</Link>
                      <Link href="/destinations/australia" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Australia</Link>
                      <Link href="/destinations/turkey" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Turkey</Link>
                      <Link href="/destinations/china" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">China</Link>
                      <Link href="/destinations/dubai" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">UAE</Link>
                    </div>
                  )}
                </div>

                {/* Universities - Matching Desktop Navigation */}
                <div className="border-b border-gray-200 pb-4">
                  <button 
                    onClick={() => setIsMobileUniversityOpen(!isMobileUniversityOpen)}
                    className="w-full flex items-center justify-between text-lg font-medium text-gray-700 py-2"
                  >
                    <span>UNIVERSITIES</span>
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${isMobileUniversityOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {isMobileUniversityOpen && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {/* United Kingdom */}
                      <a href="https://www.topuniversities.com/university-rankings-articles/world-university-rankings/top-universities-uk" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">United Kingdom</a>
                      {/* European Countries */}
                      <a href="https://www.topuniversities.com/university-rankings-articles/world-university-rankings/top-universities-germany" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Germany</a>
                      <a href="https://www.timeshighereducation.com/student/best-universities/best-universities-italy" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Italy</a>
                      <a href="https://edurank.org/geo/by/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Belarus</a>
                      <a href="https://www.topuniversities.com/university-rankings-articles/world-university-rankings/top-universities-france" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">France</a>
                      <a href="https://www.usnews.com/best-colleges/ga?_sort=rank&_sortDirection=asc" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Georgia</a>
                      <a href="https://www.topuniversities.com/where-to-study/europe/hungary/guide" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Hungary</a>
                      <a href="https://www.mastersportal.com/search/universities/master/rankings/denmark" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Denmark</a>
                      <a href="https://www.topuniversities.com/where-to-study/europe/sweden" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Sweden</a>
                      <a href="https://edurank.org/geo/cy/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Cyprus</a>
                      {/* Other Countries */}
                      <a href="https://www.topuniversities.com/where-to-study/north-america/united-states/ranked-top-100-us-universities" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">USA</a>
                      <a href="https://www.topuniversities.com/university-rankings-articles/world-university-rankings/top-universities-canada" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Canada</a>
                      <a href="https://www.topuniversities.com/university-rankings-articles/world-university-rankings/top-universities-australia" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Australia</a>
                      <a href="https://www.timeshighereducation.com/student/best-universities/best-universities-turkey" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Turkey</a>
                      <a href="https://www.topuniversities.com/world-university-rankings?region=Asia&countries=cn,hk" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">China</a>
                      <a href="https://www.edarabia.com/universities/dubai/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-600 hover:text-[#034833] py-2 px-3 rounded-md hover:bg-gray-50">Dubai, UAE</a>
                    </div>
                  )}
                </div>



                {/* Study News */}
                <Link 
                  href="/studynews" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-gray-700 hover:text-[#034833] py-2"
                >
                  STUDY NEWS
                </Link>

                {/* FAQs */}
                <Link 
                  href="/#faq" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-gray-700 hover:text-[#034833] py-2"
                >
                  FAQs
                </Link>
              </div>
            </div>

            {/* Mobile Menu Footer - Contact Info */}
            <div className="border-t p-4" style={{ backgroundColor: '#034833' }}>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-3">
                  <Image
                    src="/social-icons/whatsapp.svg"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                    style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                  />
                  <span className="text-sm text-white font-medium">+1 234 567 8900</span>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <Image
                    src="/social-icons/email.svg"
                    alt="Email"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                    style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                  />
                  <span className="text-sm text-white font-medium">studysure.info@gmail.com</span>
                </div>

                <div className="flex items-center justify-center space-x-4 pt-2">
                  <a href="#" className="transition-transform duration-200 hover:scale-110">
                    <Image
                      src="/social-icons/facebook.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                      style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                    />
                  </a>
                  
                  <a href="#" className="transition-transform duration-200 hover:scale-110">
                    <Image
                      src="/social-icons/instagram.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                      style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                    />
                  </a>
                  
                  <a href="#" className="transition-transform duration-200 hover:scale-110">
                    <Image
                      src="/social-icons/linkedin.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                      style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar