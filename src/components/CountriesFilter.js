'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CountriesFilter = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Flag mapping for countries
  const flagMap = {
    'united-kingdom': '/flags/uk.png',
    'united-states': '/flags/usa.png',
    'canada': '/flags/canada.jpg',
    'australia': '/flags/australia.png',
    'germany': '/flags/germany.png',
    'italy': '/flags/italy.jpg',
    'belarus': '/flags/belarus.png',
    'france': '/flags/france.png',
    'georgia': '/flags/georgia.png',
    'hungary': '/flags/hungary.jpg',
    'denmark': '/flags/denmark.jpg',
    'cyprus': '/flags/cyprus.png',
    'turkey': '/flags/turkey.png',
    'china': '/flags/china.webp',
    'dubai': '/flags/uae.png'
  };

  // Fetch countries from MongoDB API
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('/api/countries', {
          cache: 'no-store', // Disable caching to get fresh data
          headers: {
            'Cache-Control': 'no-cache'
          }
        });
        const result = await response.json();
        
        if (result.success && result.data) {
          // Convert country data to the format needed for the UI
          const countryList = Object.values(result.data).map(country => ({
            name: country.countryName || country.slug.replace('-', ' '),
            flag: flagMap[country.slug] || '/flags/default.png',
            slug: country.slug
          }));
          setCountries(countryList);
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
        // Keep empty array as fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (isLoading) {
    return (
      <div className="py-16 px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#034833] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading destinations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {countries.map((country, index) => (
            <Link
              key={`${country.name}-${index}`}
              href={`/destinations/${country.slug}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center group cursor-pointer">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-gray-200">
                    <Image
                      src={country.flag}
                      alt={`${country.name} flag`}
                      fill
                      className="object-cover group-hover:rotate-360 transition-transform duration-500"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#034833] transition-colors duration-300">
                  {country.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Countries Count Display */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-[#034833]">{countries.length}</span> destinations
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountriesFilter;
