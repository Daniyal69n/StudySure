import { NextResponse } from 'next/server';
import dbConnect from '../../../../../lib/dbConnect';
import Country from '../../../../../models/Country';

// Disable caching for this API route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    await dbConnect();
    const countries = await Country.find({}).lean();
    
    console.log(`Found ${countries.length} countries in database`);
    
    // Convert array to object with slug as key for compatibility
    const countryDataMap = {};
    countries.forEach(country => {
      // Clean the data to remove MongoDB-specific fields
      const cleanCountry = {
        slug: country.slug,
        countryName: country.countryName,
        bannerImage: country.bannerImage || '',
        whyStudyReasons: country.whyStudyReasons || [],
        topUniversities: country.topUniversities || [],
        visaProcess: country.visaProcess || [],
        costData: country.costData || { tuitionFees: [], intro: '', notes: [] },
        postStudyWork: country.postStudyWork || { title: '', description: '', benefits: [] },
        workRights: country.workRights || { termTime: '', holidays: '' },
        sectionTitles: country.sectionTitles || {}
      };
      countryDataMap[country.slug] = cleanCountry;
    });
    
    return NextResponse.json({ 
      success: true, 
      data: countryDataMap,
      message: 'Data loaded from MongoDB'
    });
  } catch (error) {
    console.error('Error loading country data:', error);
    console.error('Error details:', error.stack);
    return NextResponse.json(
      { success: false, message: `Failed to load countries: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { countrySlug, data } = await request.json();
    
    await dbConnect();
    
    // Clean the data before saving
    const cleanData = {
      slug: countrySlug,
      countryName: data.countryName || '',
      bannerImage: data.bannerImage || '',
      whyStudyReasons: Array.isArray(data.whyStudyReasons) ? data.whyStudyReasons : [],
      topUniversities: Array.isArray(data.topUniversities) ? data.topUniversities : [],
      visaProcess: Array.isArray(data.visaProcess) ? data.visaProcess : [],
      costData: {
        tuitionFees: Array.isArray(data.costData?.tuitionFees) ? data.costData.tuitionFees : [],
        intro: data.costData?.intro || '',
        notes: Array.isArray(data.costData?.notes) ? data.costData.notes : []
      },
      postStudyWork: {
        title: data.postStudyWork?.title || '',
        description: data.postStudyWork?.description || '',
        benefits: Array.isArray(data.postStudyWork?.benefits) ? data.postStudyWork.benefits : []
      },
      workRights: {
        termTime: data.workRights?.termTime || '',
        holidays: data.workRights?.holidays || ''
      },
      sectionTitles: {
        whyStudy: data.sectionTitles?.whyStudy || '',
        universities: data.sectionTitles?.universities || '',
        visaProcess: data.sectionTitles?.visaProcess || '',
        costs: data.sectionTitles?.costs || '',
        postStudyWork: data.sectionTitles?.postStudyWork || '',
        workRights: data.sectionTitles?.workRights || ''
      }
    };
    
    // Update the specific country data in MongoDB
    const updatedCountry = await Country.findOneAndUpdate(
      { slug: countrySlug },
      cleanData,
      { 
        new: true,
        upsert: true,
        runValidators: false
      }
    );
    
    // Return clean data without MongoDB-specific fields
    const responseData = {
      slug: updatedCountry.slug,
      countryName: updatedCountry.countryName,
      bannerImage: updatedCountry.bannerImage,
      whyStudyReasons: updatedCountry.whyStudyReasons,
      topUniversities: updatedCountry.topUniversities,
      visaProcess: updatedCountry.visaProcess,
      costData: updatedCountry.costData,
      postStudyWork: updatedCountry.postStudyWork,
      workRights: updatedCountry.workRights,
      sectionTitles: updatedCountry.sectionTitles
    };
    
    return NextResponse.json({ 
      success: true, 
      message: 'Country data updated successfully',
      data: responseData
    });
    
  } catch (error) {
    console.error('Error updating country data:', error);
    console.error('Error details:', error.stack);
    return NextResponse.json(
      { success: false, message: `Failed to update: ${error.message}` },
      { status: 500 }
    );
  }
}
