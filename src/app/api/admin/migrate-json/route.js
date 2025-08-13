import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Country from '../../../../models/Country';
import countryDataJson from '../../../../data/countryData.json';

export async function POST() {
  try {
    console.log('🔄 Starting migration from JSON to MongoDB...');
    await dbConnect();
    
    console.log('📦 Migrating country data from JSON...');
    console.log('Available countries in JSON:', Object.keys(countryDataJson));
    
    const results = [];
    const errors = [];
    
    // Process each country individually to catch specific errors
    for (const [slug, data] of Object.entries(countryDataJson)) {
      try {
        console.log(`Processing country: ${slug}`);
        
        const countryData = {
          slug,
          countryName: data.countryName || slug.replace('-', ' '),
          bannerImage: data.bannerImage || '',
          whyStudyReasons: Array.isArray(data.whyStudyReasons) ? data.whyStudyReasons : [],
          topUniversities: Array.isArray(data.topUniversities) ? data.topUniversities.map(uni => ({
            name: uni?.name || '',
            rank: uni?.rank || ''
          })) : [],
          visaProcess: Array.isArray(data.visaProcess) ? data.visaProcess.map(visa => ({
            step: visa?.step || '',
            description: visa?.description || ''
          })) : [],
          costData: {
            tuitionFees: Array.isArray(data.costData?.tuitionFees) ? data.costData.tuitionFees.map(fee => ({
              level: fee?.level || '',
              range: fee?.range || ''
            })) : []
          },
          postStudyWork: {
            title: data.postStudyWork?.title || '',
            description: data.postStudyWork?.description || '',
            benefits: Array.isArray(data.postStudyWork?.benefits) ? data.postStudyWork.benefits : []
          },
          workRights: {
            termTime: data.workRights?.termTime || '',
            holidays: data.workRights?.holidays || ''
          }
        };
        
        console.log(`Upserting country: ${slug}`);
        const result = await Country.findOneAndUpdate(
          { slug: countryData.slug },
          countryData,
          { 
            upsert: true, 
            new: true,
            runValidators: false // Disable validators to avoid issues
          }
        );
        
        results.push(result);
        console.log(`✅ Successfully processed: ${slug}`);
        
      } catch (countryError) {
        console.error(`❌ Error processing ${slug}:`, countryError);
        errors.push({ slug, error: countryError.message });
      }
    }
    
    const message = `Migration completed: ${results.length} countries processed successfully`;
    if (errors.length > 0) {
      console.log('Errors encountered:', errors);
    }
    
    return NextResponse.json({ 
      success: true, 
      message,
      processed: results.length,
      errors: errors.length,
      errorDetails: errors,
      countries: results.map(country => ({
        slug: country.slug,
        name: country.countryName
      }))
    });
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      { 
        success: false, 
        message: `Migration failed: ${error.message}`,
        stack: error.stack
      },
      { status: 500 }
    );
  }
}
