import { NextResponse } from 'next/server';
import dbConnect from '../../../../../lib/dbConnect';
import Country from '../../../../../models/Country';

export async function POST(request) {
  try {
    const { slug, countryName } = await request.json();
    
    if (!slug || !countryName) {
      return NextResponse.json(
        { success: false, message: 'Slug and country name are required' },
        { status: 400 }
      );
    }

    await dbConnect();
    
    // Check if country already exists
    const existingCountry = await Country.findOne({ slug });
    if (existingCountry) {
      return NextResponse.json(
        { success: false, message: 'Country with this slug already exists' },
        { status: 409 }
      );
    }
    
    // Create new country with default structure
    const newCountry = new Country({
      slug,
      countryName,
      bannerImage: '',
      whyStudyReasons: [],
      topUniversities: [],
      visaProcess: [],
      costData: { tuitionFees: [] },
      postStudyWork: { title: '', description: '', benefits: [] },
      workRights: { termTime: '', holidays: '' }
    });
    
    const savedCountry = await newCountry.save();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Country created successfully',
      data: savedCountry
    });
    
  } catch (error) {
    console.error('Error creating country:', error);
    return NextResponse.json(
      { success: false, message: `Failed to create country: ${error.message}` },
      { status: 500 }
    );
  }
}
