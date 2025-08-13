import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Country from '../../../../models/Country';

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    
    await dbConnect();
    const country = await Country.findOne({ slug }).lean();
    
    if (!country) {
      return NextResponse.json(
        { success: false, message: 'Country not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: country });
  } catch (error) {
    console.error('Error fetching country:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch country from database' },
      { status: 500 }
    );
  }
}
