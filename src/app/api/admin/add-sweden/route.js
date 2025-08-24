import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Country from '../../../../models/Country';

export async function POST() {
  try {
    await dbConnect();
    
    // Check if Sweden already exists
    const existingSweden = await Country.findOne({ slug: 'sweden' });
    if (existingSweden) {
      return NextResponse.json({ 
        success: false, 
        message: 'Sweden already exists in the database' 
      });
    }
    
    // Create Sweden with initial data
    const swedenData = {
      slug: 'sweden',
      countryName: 'Sweden',
      bannerImage: 'sweden',
      whyStudyReasons: [
        'Free education for EU students',
        'High quality of life and work-life balance',
        'Innovation and technology focus',
        'English-taught programs available'
      ],
      topUniversities: [
        { name: 'KTH Royal Institute of Technology', rank: '#1 in Sweden' },
        { name: 'Uppsala University', rank: '#2 in Sweden' },
        { name: 'Lund University', rank: '#3 in Sweden' }
      ],
      visaProcess: [
        { step: 'Get University Admission', description: 'Receive acceptance letter from Swedish university' },
        { step: 'Apply for Residence Permit', description: 'Submit application to Swedish Migration Agency' },
        { step: 'Wait for Approval', description: 'Processing time: 2-3 months' }
      ],
      costData: {
        tuitionFees: [
          { level: 'Bachelor\'s Degree', range: 'Free for EU students, 7,000-15,000 EUR/year for others' },
          { level: 'Master\'s Degree', range: 'Free for EU students, 8,000-18,000 EUR/year for others' }
        ],
        intro: 'Sweden offers free education for EU/EEA students. Non-EU students pay tuition fees.',
        notes: [
          'Living costs: 700-1,200 EUR/month',
          'Health insurance included for students',
          'Part-time work allowed: 20 hours/week'
        ]
      },
      postStudyWork: {
        title: 'Post Study Work in Sweden',
        description: 'Graduates can apply for a residence permit to seek work or start a business',
        benefits: [
          '12-month job seeker permit available',
          'Path to permanent residency after 4 years',
          'Strong job market in tech and engineering'
        ]
      },
      workRights: {
        termTime: '20 hours/week during studies',
        holidays: 'Full-time during holidays and breaks'
      },
      sectionTitles: {
        whyStudy: 'Why Study in Sweden',
        universities: 'Top Universities in Sweden',
        visaProcess: 'Student Visa Process for Sweden',
        costs: 'Study Costs in Sweden',
        postStudyWork: 'Post Study Work Opportunities',
        workRights: 'Work Rights for Students'
      }
    };
    
    const newSweden = await Country.create(swedenData);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Sweden added successfully to database',
      data: newSweden
    });
    
  } catch (error) {
    console.error('Error adding Sweden:', error);
    return NextResponse.json(
      { success: false, message: `Failed to add Sweden: ${error.message}` },
      { status: 500 }
    );
  }
}
