import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function loadCountryData() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'countryData.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error loading country data from JSON:', error);
    return {};
  }
}

export async function PUT(request) {
  try {
    const { countrySlug, data } = await request.json();
    
    // Load current data from JSON
    const countryDataMap = loadCountryData();
    
    // Update the specific country data
    countryDataMap[countrySlug] = {
      ...countryDataMap[countrySlug],
      ...data
    };
    
    // Write updated data back to JSON file
    const filePath = path.join(process.cwd(), 'src', 'data', 'countryData.json');
    fs.writeFileSync(filePath, JSON.stringify(countryDataMap, null, 2), 'utf8');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Country data updated successfully (using JSON fallback)',
      data: countryDataMap[countrySlug]
    });
    
  } catch (error) {
    console.error('Error updating country data:', error);
    return NextResponse.json(
      { success: false, message: `Failed to update: ${error.message}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const countryDataMap = loadCountryData();
    return NextResponse.json({ 
      success: true, 
      data: countryDataMap,
      message: 'Data loaded from JSON fallback'
    });
  } catch (error) {
    console.error('Error fetching country data:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch country data from JSON' },
      { status: 500 }
    );
  }
}
