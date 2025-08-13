'use client';
import React, { useState, useEffect } from 'react';
import WhyStudyEditor from '../../components/admin/WhyStudyEditor';
import UniversitiesEditor from '../../components/admin/UniversitiesEditor';
import VisaProcessEditor from '../../components/admin/VisaProcessEditor';
import CostsEditor from '../../components/admin/CostsEditor';
import PostStudyWorkEditor from '../../components/admin/PostStudyWorkEditor';
import WorkRightsEditor from '../../components/admin/WorkRightsEditor';

import AdminAuth from '../../components/admin/AdminAuth';

const AdminDashboard = () => {
  const [selectedCountry, setSelectedCountry] = useState('united-kingdom');
  const [countryData, setCountryData] = useState({});
  const [allCountriesData, setAllCountriesData] = useState({});
  const [activeSection, setActiveSection] = useState('whyStudy');
  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [message, setMessage] = useState('');

  // Load data from MongoDB
  useEffect(() => {
    const loadCountriesData = async () => {
      try {
        setIsLoadingData(true);
        const response = await fetch('/api/admin/countries/vercel');
        const result = await response.json();
        
        if (result.success) {
          setAllCountriesData(result.data);
          setCountryData(result.data[selectedCountry] || {});
          setMessage('Data loaded successfully from MongoDB');
        } else {
          setMessage(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error('Error loading data:', error);
        setMessage(`Error loading data: ${error.message}`);
      } finally {
        setIsLoadingData(false);
      }
    };

    loadCountriesData();
  }, []);

  // Update country data when selection changes
  useEffect(() => {
    if (allCountriesData[selectedCountry]) {
      setCountryData(allCountriesData[selectedCountry]);
    }
  }, [selectedCountry, allCountriesData]);

  const countries = [
    { slug: 'united-kingdom', name: 'United Kingdom' },
    { slug: 'united-states', name: 'USA' },
    { slug: 'canada', name: 'Canada' },
    { slug: 'australia', name: 'Australia' },
    { slug: 'germany', name: 'Germany' },
    { slug: 'italy', name: 'Italy' },
    { slug: 'belarus', name: 'Belarus' },
    { slug: 'france', name: 'France' },
    { slug: 'georgia', name: 'Georgia' },
    { slug: 'hungary', name: 'Hungary' },
    { slug: 'denmark', name: 'Denmark' },
    { slug: 'cyprus', name: 'Cyprus' },
    { slug: 'turkey', name: 'Turkey' },
    { slug: 'china', name: 'China' },
    { slug: 'dubai', name: 'UAE' }
  ];

  const sections = [
    { id: 'whyStudy', name: 'Why Study Reasons', icon: '📚' },
    { id: 'universities', name: 'Top Universities', icon: '🎓' },
    { id: 'visaProcess', name: 'Visa Process', icon: '📋' },
    { id: 'costs', name: 'Study Costs', icon: '💰' },
    { id: 'postStudyWork', name: 'Post Study Work', icon: '💼' },
    { id: 'workRights', name: 'Work Rights', icon: '⏰' }
  ];

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/countries/vercel', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          countrySlug: selectedCountry,
          data: countryData
        })
      });

      const result = await response.json();

      if (result.success) {
        setSaveStatus('✅ Saved successfully to MongoDB!');
        setTimeout(() => setSaveStatus(''), 3000);
        
        // Update the local data to reflect changes without page reload
        setAllCountriesData(prev => ({
          ...prev,
          [selectedCountry]: { ...prev[selectedCountry], ...countryData }
        }));
      } else {
        setSaveStatus(`❌ Save failed: ${result.message}`);
        console.error('Save error:', result.message);
      }
    } catch (error) {
      setSaveStatus(`❌ Error saving: ${error.message}`);
      console.error('Save error:', error);
    }
    setIsLoading(false);
  };

  const handleInitializeData = async () => {
    if (!confirm('This will initialize the database with sample country data. Continue?')) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/migrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      const result = await response.json();
      
      if (result.success) {
        setSaveStatus(`✅ ${result.message}`);
        // Reload data after initialization
        window.location.reload();
      } else {
        setSaveStatus(`❌ ${result.message}`);
      }
    } catch (error) {
      setSaveStatus('❌ Initialization error');
    }
    setIsLoading(false);
  };

  const handleMigrateFromJSON = async () => {
    if (!confirm('This will migrate all data from countryData.json to MongoDB. This will update existing countries and add missing ones. Continue?')) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/migrate-json', {
        method: 'POST'
      });

      const result = await response.json();
      
      if (result.success) {
        setSaveStatus('✅ Migration completed successfully!');
        // Reload the data to reflect changes
        window.location.reload();
      } else {
        setSaveStatus(`❌ Migration failed: ${result.message}`);
      }
    } catch (error) {
      setSaveStatus(`❌ Migration error: ${error.message}`);
    }
    setIsLoading(false);
  };

  const handleClearCache = async () => {
    if (!confirm('This will clear all page caches and force fresh data on all country pages. Continue?')) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/admin/clear-cache', {
        method: 'POST'
      });

      const result = await response.json();
      
      if (result.success) {
        setSaveStatus('✅ Cache cleared! All pages will show fresh data.');
        setTimeout(() => setSaveStatus(''), 3000);
      } else {
        setSaveStatus(`❌ Cache clear failed: ${result.message}`);
      }
    } catch (error) {
      setSaveStatus(`❌ Cache clear error: ${error.message}`);
    }
    setIsLoading(false);
  };

  const getCompletionStatus = (country) => {
    const data = allCountriesData[country.slug];
    if (!data) return 0;
    
    let completed = 0;
    let total = 6;
    
    if (data.whyStudyReasons?.length > 0 && !data.whyStudyReasons[0]?.includes('Content to be added')) completed++;
    if (data.topUniversities?.length > 0) completed++;
    if (data.visaProcess?.length > 0) completed++;
    if (data.costData?.tuitionFees?.length > 0) completed++;
    if (data.postStudyWork?.description && !data.postStudyWork.description.includes('Content to be added')) completed++;
    if (data.workRights?.termTime) completed++;
    
    return Math.round((completed / total) * 100);
  };

  // Show loading state while data is being fetched
  if (isLoadingData) {
    return (
      <AdminAuth>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#034833] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading dashboard data...</p>
          </div>
        </div>
      </AdminAuth>
    );
  }

  return (
    <AdminAuth>
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">StudySure Admin Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Connected to MongoDB</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleClearCache}
                disabled={isLoading}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:opacity-50 flex items-center gap-2 text-sm"
              >
                {isLoading ? '🔄 Clearing...' : '🔄 Clear Cache'}
              </button>
              <button
                onClick={handleMigrateFromJSON}
                disabled={isLoading}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 disabled:opacity-50 flex items-center gap-2 text-sm"
              >
                {isLoading ? '🔄 Migrating...' : '📦 Migrate from JSON'}
              </button>
              {Object.keys(allCountriesData).length === 0 && (
                <button
                  onClick={handleInitializeData}
                  disabled={isLoading}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2 text-sm"
                >
                  {isLoading ? '🔄 Initializing...' : '🚀 Initialize Database'}
                </button>
              )}
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="bg-[#034833] text-white px-6 py-2 rounded-lg hover:bg-[#045a3d] disabled:opacity-50 flex items-center gap-2"
              >
                {isLoading ? '💾 Saving...' : '💾 Save Changes'}
              </button>
              {saveStatus && (
                <span className="text-sm font-medium">{saveStatus}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Country Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Select Country</h2>
              <div className="space-y-2">
                {countries.map((country) => {
                  const completion = getCompletionStatus(country);
                  return (
                    <button
                      key={country.slug}
                      onClick={() => setSelectedCountry(country.slug)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        selectedCountry === country.slug
                          ? 'bg-[#034833] text-white border-[#034833]'
                          : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{country.name}</span>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            completion === 100 ? 'bg-green-500' : 
                            completion > 0 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></div>
                          <span className="text-xs">{completion}%</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section Navigation */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4">Content Sections</h2>
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-[#034833] text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">
                  Editing: {countries.find(c => c.slug === selectedCountry)?.name}
                </h2>
                <div className="text-sm text-gray-500">
                  Section: {sections.find(s => s.id === activeSection)?.name}
                </div>
              </div>

              {/* Content Editor will be rendered here */}
              <div className="min-h-96">
                <ContentEditor
                  section={activeSection}
                  countryData={countryData}
                  setCountryData={setCountryData}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </AdminAuth>
  );
};

// Content Editor Component
const ContentEditor = ({ section, countryData, setCountryData }) => {
  const updateData = (field, value) => {
    setCountryData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateNestedData = (field, subField, value) => {
    setCountryData(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        [subField]: value
      }
    }));
  };

  switch (section) {
    case 'whyStudy':
      return <WhyStudyEditor data={countryData.whyStudyReasons || []} onChange={(value) => updateData('whyStudyReasons', value)} />;
    
    case 'universities':
      return <UniversitiesEditor data={countryData.topUniversities || []} onChange={(value) => updateData('topUniversities', value)} />;
    
    case 'visaProcess':
      return <VisaProcessEditor data={countryData.visaProcess || []} onChange={(value) => updateData('visaProcess', value)} />;
    
    case 'costs':
      return <CostsEditor data={countryData.costData || {}} onChange={(value) => updateData('costData', value)} />;
    
    case 'postStudyWork':
      return <PostStudyWorkEditor data={countryData.postStudyWork || {}} onChange={(value) => updateData('postStudyWork', value)} />;
    
    case 'workRights':
      return <WorkRightsEditor data={countryData.workRights || {}} onChange={(value) => updateData('workRights', value)} />;
    
    default:
      return <div>Select a section to edit</div>;
  }
};

export default AdminDashboard;
