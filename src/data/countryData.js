// Country data structure for study destinations
// MongoDB-based country data mapping

// Cache for country data to avoid repeated API calls
let countryDataCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Helper function to fetch all countries from MongoDB
export const fetchAllCountries = async () => {
  // Check if we have valid cached data
  if (countryDataCache && cacheTimestamp && (Date.now() - cacheTimestamp < CACHE_DURATION)) {
    return countryDataCache;
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/countries`, {
      cache: 'no-store' // Ensure fresh data
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    
    const result = await response.json();
    if (result.success) {
      countryDataCache = result.data;
      cacheTimestamp = Date.now();
      return result.data;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error('Error fetching countries:', error);
    // Return empty object as fallback
    return {};
  }
};

// Helper function to get single country data
export const getCountryData = async (countrySlug) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/countries/${countrySlug}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return null;
    }
    
    const result = await response.json();
    return result.success ? result.data : null;
  } catch (error) {
    console.error('Error fetching country:', error);
    return null;
  }
};

// Helper function to get all countries as array
export const getAllCountries = async () => {
  const countryDataMap = await fetchAllCountries();
  return Object.values(countryDataMap);
};

// For server-side usage (direct database access)
export const getCountryDataServer = async (countrySlug) => {
  const { default: dbConnect } = await import('../lib/dbConnect');
  const { default: Country } = await import('../models/Country');
  
  try {
    await dbConnect();
    const country = await Country.findOne({ slug: countrySlug }).lean();
    return country;
  } catch (error) {
    console.error('Error fetching country from server:', error);
    return null;
  }
};

export const getAllCountriesServer = async () => {
  const { default: dbConnect } = await import('../lib/dbConnect');
  const { default: Country } = await import('../models/Country');
  
  try {
    await dbConnect();
    const countries = await Country.find({}).lean();
    return countries;
  } catch (error) {
    console.error('Error fetching countries from server:', error);
    return [];
  }
};

// Template for adding new countries
export const countryDataTemplate = {
  slug: "",
  countryName: "",
  whyStudyReasons: [],
  topUniversities: [],
  visaProcess: [],
  costData: { tuitionFees: [] },
  postStudyWork: { title: "", description: "", benefits: [] },
  workRights: { termTime: "", holidays: "" }
};

// Legacy export for backward compatibility (will be deprecated)
export let countryDataMap = {};
export default countryDataMap;
