import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import dbConnect from '../../../../lib/dbConnect';
import Country from '../../../../models/Country';

export async function POST() {
  try {
    await dbConnect();
    
    // Get all countries to revalidate their paths
    const countries = await Country.find({}, { slug: 1 }).lean();
    
    // Revalidate all country pages
    for (const country of countries) {
      revalidatePath(`/destinations/${country.slug}`);
    }
    
    // Revalidate the main pages
    revalidatePath('/');
    revalidatePath('/destinations');
    
    return NextResponse.json({ 
      success: true, 
      message: `Cache cleared for ${countries.length} countries`,
      revalidatedPaths: countries.map(c => `/destinations/${c.slug}`)
    });
  } catch (error) {
    console.error('Error clearing cache:', error);
    return NextResponse.json(
      { success: false, message: `Failed to clear cache: ${error.message}` },
      { status: 500 }
    );
  }
}
