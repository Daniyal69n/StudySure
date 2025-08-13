import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import Country from '../../../models/Country';

// Disable caching for this API route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    await dbConnect();
    const countries = await Country.find({}).lean();
    
    // Convert array to object with slug as key for compatibility
    const countryDataMap = {};
    countries.forEach(country => {
      countryDataMap[country.slug] = country;
    });
    
    return NextResponse.json({ success: true, data: countryDataMap });
  } catch (error) {
    console.error('Error fetching countries:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch countries from database' },
      { status: 500 }
    );
  }
}
