import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Country from '../../../../models/Country';

// Create sample countries for initial setup
const sampleCountries = [
  {
    slug: 'united-kingdom',
    countryName: 'United Kingdom',
    bannerImage: 'uk',
    whyStudyReasons: [
      'World-class universities like Oxford and Cambridge',
      'High quality education standards',
      'Rich cultural heritage and history'
    ],
    topUniversities: [
      { name: 'University of Oxford', rank: '#1' },
      { name: 'University of Cambridge', rank: '#2' },
      { name: 'Imperial College London', rank: '#3' }
    ],
    visaProcess: [
      { step: 'Get Admission', description: 'Receive offer from UK university' },
      { step: 'Apply for Visa', description: 'Submit visa application online' }
    ],
    costData: {
      tuitionFees: [
        { level: 'Bachelor\'s Degree', range: '10,000 - 20,000 GBP / year' },
        { level: 'Master\'s Degree', range: '12,000 - 25,000 GBP / year' }
      ]
    },
    postStudyWork: {
      title: 'Post Study Work in UK',
      description: 'Graduate Route visa available for 2-3 years',
      benefits: ['Work without sponsorship', 'Path to permanent residency']
    },
    workRights: {
      termTime: '20 hrs/week',
      holidays: 'Full-time'
    }
  },
  {
    slug: 'united-states',
    countryName: 'United States',
    bannerImage: 'usa',
    whyStudyReasons: ['Top-ranked universities', 'Research opportunities', 'Diverse culture'],
    topUniversities: [],
    visaProcess: [],
    costData: { tuitionFees: [] },
    postStudyWork: { title: '', description: '', benefits: [] },
    workRights: { termTime: '', holidays: '' }
  },
  {
    slug: 'canada',
    countryName: 'Canada',
    bannerImage: 'canada',
    whyStudyReasons: ['High quality education', 'Multicultural society', 'Post-graduation work opportunities'],
    topUniversities: [],
    visaProcess: [],
    costData: { tuitionFees: [] },
    postStudyWork: { title: '', description: '', benefits: [] },
    workRights: { termTime: '', holidays: '' }
  },
  {
    slug: 'sweden',
    countryName: 'Sweden',
    bannerImage: 'sweden',
    whyStudyReasons: ['Free education for EU students', 'High quality of life', 'Innovation and technology focus'],
    topUniversities: [],
    visaProcess: [],
    costData: { tuitionFees: [] },
    postStudyWork: { title: '', description: '', benefits: [] },
    workRights: { termTime: '', holidays: '' }
  }
];

export async function POST() {
  try {
    console.log('🔄 Initializing MongoDB with sample data...');
    await dbConnect();
    
    // Check if countries already exist
    const existingCount = await Country.countDocuments();
    if (existingCount > 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'Database already contains country data. Use the admin interface to manage countries.' 
      });
    }
    
    console.log('📦 Adding sample country data...');
    const result = await Country.insertMany(sampleCountries);
    
    return NextResponse.json({ 
      success: true, 
      message: `Successfully initialized ${result.length} countries in MongoDB`,
      countries: result.map(country => ({
        slug: country.slug,
        name: country.countryName
      }))
    });
    
  } catch (error) {
    console.error('❌ Initialization failed:', error);
    return NextResponse.json(
      { success: false, message: `Initialization failed: ${error.message}` },
      { status: 500 }
    );
  }
}
