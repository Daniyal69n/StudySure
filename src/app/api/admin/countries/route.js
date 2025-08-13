import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Country from '../../../../models/Country';

async function getAllCountries() {
  try {
    await dbConnect();
    const countries = await Country.find({}).lean();
    
    console.log(`Found ${countries.length} countries in database`);
    
    // Convert array to object with slug as key for compatibility
    const countryDataMap = {};
    countries.forEach(country => {
      countryDataMap[country.slug] = country;
    });
    
    return countryDataMap;
  } catch (error) {
    console.error('Error loading country data:', error);
    console.error('Error details:', error.stack);
    throw new Error('Failed to load countries from database');
  }
}

export async function PUT(request) {
  try {
    const { countrySlug, data } = await request.json();
    
    await dbConnect();
    
    // Update the specific country data in MongoDB
    const updatedCountry = await Country.findOneAndUpdate(
      { slug: countrySlug },
      { 
        $set: {
          ...data,
          slug: countrySlug // Ensure slug is preserved
        }
      },
      { 
        new: true, // Return updated document
        upsert: true, // Create if doesn't exist
        runValidators: false // Disable validators to avoid issues
      }
    );
    
    return NextResponse.json({ 
      success: true, 
      message: 'Country data updated successfully',
      data: updatedCountry
    });
    
  } catch (error) {
    console.error('Error updating country data:', error);
    console.error('Error details:', error.stack);
    return NextResponse.json(
      { success: false, message: `Failed to update: ${error.message}`, details: error.stack },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const countryDataMap = await getAllCountries();
    return NextResponse.json({ success: true, data: countryDataMap });
  } catch (error) {
    console.error('Error fetching country data:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch country data from MongoDB' },
      { status: 500 }
    );
  }
}
