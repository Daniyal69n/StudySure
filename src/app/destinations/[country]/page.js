import React from 'react';
import { notFound } from 'next/navigation';
import PageBanner from '@/components/PageBanner';
import StudyContentLayout from '@/components/destinations/StudyContentLayout';
import dbConnect from '@/lib/dbConnect';
import Country from '@/models/Country';

// Force dynamic rendering to always fetch fresh data
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable caching completely

// This single file handles ALL countries dynamically
const CountryPage = async ({ params }) => {
  const { country } = params;
  
  // Get country data from MongoDB
  let countryData = null;
  
  try {
    await dbConnect();
    const countryDoc = await Country.findOne({ slug: country }).lean();
    
    if (countryDoc) {
      // Clean the data for client-side consumption
      countryData = {
        slug: countryDoc.slug,
        countryName: countryDoc.countryName,
        bannerImage: countryDoc.bannerImage,
        whyStudyReasons: countryDoc.whyStudyReasons || [],
        topUniversities: countryDoc.topUniversities || [],
        visaProcess: countryDoc.visaProcess || [],
        costData: countryDoc.costData || { tuitionFees: [] },
        postStudyWork: countryDoc.postStudyWork || { title: '', description: '', benefits: [] },
        workRights: countryDoc.workRights || { termTime: '', holidays: '' },
        sectionTitles: countryDoc.sectionTitles || {}
      };
    }
  } catch (error) {
    console.error('Error fetching country data:', error);
    // Fallback to empty data structure
    countryData = null;
  }
  
  // If country doesn't exist, show 404
  if (!countryData) {
    notFound();
  }

  // Capitalize country name for display
  const displayName = countryData.countryName || 
    country.charAt(0).toUpperCase() + country.slice(1).replace('-', ' ');

  // Get banner image path for the country
  // Map country slugs to banner image names
  const bannerImageMap = {
    'united-kingdom': 'uk',
    'united-states': 'usa',
    'dubai': 'dubai',
    'germany': 'germany',
    'italy': 'italy',
    'belarus': 'belarus',
    'france': 'france',
    'georgia': 'georgia',
    'hungary': 'hungary',
    'denmark': 'denmark',
    'cyprus': 'cyprus',
    'canada': 'canada',
    'australia': 'australia',
    'turkey': 'turkey',
    'china': 'china',
    'sweden': 'sweden'
  };
  
  const imageName = bannerImageMap[country] || country;
  // Use .jpeg for Sweden, .webp for others
  const fileExtension = country === 'sweden' ? 'jpeg' : 'webp';
  const bannerImage = `/destinations-banner/${imageName}.${fileExtension}`;

  return (
    <div>
      <PageBanner 
        title={`Study in ${displayName}`}
        breadcrumb={`studysure > destinations > ${country}`}
        backgroundImage={bannerImage}
      />
      <StudyContentLayout countryData={countryData} />
    </div>
  );
};

// Generate static paths for all countries (optional - for better SEO)
export async function generateStaticParams() {
  try {
    await dbConnect();
    const countries = await Country.find({}, { slug: 1 }).lean();
    
    return countries.map((country) => ({
      country: country.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return empty array as fallback
    return [];
  }
}

// Generate metadata for each country page
export async function generateMetadata({ params }) {
  const { country } = params;
  
  try {
    await dbConnect();
    const countryData = await Country.findOne({ slug: country }).lean();
    
    if (!countryData) {
      return {
        title: 'Country Not Found - StudySure',
      };
    }

    return {
      title: `Study in ${countryData.countryName} - StudySure`,
      description: `Complete guide to studying in ${countryData.countryName}. Learn about universities, admission requirements, visa process, and costs.`,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'StudySure - Study Abroad',
      description: 'Your trusted partner for studying abroad.',
    };
  }
}

export default CountryPage;
