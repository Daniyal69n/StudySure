import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect';
import Country from '../../../models/Country';

export async function GET() {
  try {
    console.log('🔄 Testing database connection...');
    await dbConnect();
    console.log('✅ Database connected successfully');
    
    // Test basic operations
    const countryCount = await Country.countDocuments();
    console.log(`📊 Found ${countryCount} countries in database`);
    
    // Get a sample of countries
    const sampleCountries = await Country.find({}).limit(3).select('slug countryName').lean();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      countryCount,
      sampleCountries,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ Database test failed:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: `Database test failed: ${error.message}`,
        error: error.stack
      },
      { status: 500 }
    );
  }
}
