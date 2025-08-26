import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  // Sample destination data - you can update image paths as needed
  const destinations = [
    { id: 1, name: 'United States', image: '/destinations/usa.webp' },
    { id: 2, name: 'United Kingdom', image: '/destinations/uk.webp' },
    { id: 3, name: 'Canada', image: '/destinations/canada.webp' },
    { id: 4, name: 'Australia', image: '/destinations/australia.webp' },
    { id: 5, name: 'Germany', image: '/destinations/germany.webp' },
    { id: 6, name: 'China', image: '/destinations/china.webp' }
  ];

  return (
    <section className="overflow-hidden px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
      <div 
        className="max-w-full mx-auto rounded-3xl overflow-hidden" 
        style={{ 
          minHeight: '1000px',
          height: 'clamp(1000px, 110vh, 1300px)',
          backgroundColor: '#034833' 
        }}
      >
        <div className="relative h-full flex flex-col lg:flex-row lg:items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 lg:py-0 gap-8 lg:gap-12">
          
          {/* Company Information Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
            <div className="text-center lg:text-left">
              {/* Logo above green line */}
              <div className="mb-4 flex justify-center lg:justify-start">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/logo.jpeg"
                    alt="StudySure Logo"
                    width={180}
                    height={180}
                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain rounded-full"
                  />
                </div>
              </div>
              {/* Green line above the text */}
              <div 
                className="mb-6 mx-auto lg:mx-0"
                style={{
                  width: '120px',
                  height: '4px',
                  backgroundColor: '#83CD20'
                }}
              ></div>
              <div className="text-white space-y-3">
                <h1 
                  className="font-bold"
                  style={{
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: 'clamp(20px, 5vw, 32px)',
                    lineHeight: 'clamp(24px, 5.5vw, 38px)',
                    fontWeight: '700',
                    letterSpacing: 'normal'
                  }}
                >
                  STUDYSURE CONSULTANTS (Pvt) Limited
                </h1>
                <div className="space-y-2 text-white" style={{ fontSize: 'clamp(12px, 3vw, 16px)' }}>
                  <p className="flex items-center justify-center lg:justify-start flex-wrap">
                    <span>📧 studysure.info@gmail.com</span>
                  </p>
                  <p className="flex items-center justify-center lg:justify-start flex-wrap">
                    <span>🌐 http://studysure.org</span>
                  </p>
                  <p className="flex items-center justify-center lg:justify-start flex-wrap">
                    <span>📞 03268337390</span>
                  </p>
                  <p className="flex items-center justify-center lg:justify-start text-center lg:text-left flex-wrap">
                    <span>📍 Plaza No-11, DHA-II, G.T. Road, near Giga Mall, Rawalpindi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards and Button Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
            
            {/* Cards Container */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-2 sm:px-4 md:px-0 w-full max-w-lg lg:max-w-none">
              {destinations.map((destination) => (
                <Link 
                  key={destination.id}
                  href={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex justify-center"
                >
                  <div 
                    className="relative shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    style={{
                      width: 'clamp(130px, 25vw, 208px)',
                      height: 'clamp(130px, 25vw, 208px)',
                      maxWidth: '170px',
                      maxHeight: '170px'
                    }}
                  >
                    {/* Image container */}
                    <div 
                      className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden transition-all duration-300 brightness-75 group-hover:brightness-100"
                      style={{
                        backgroundImage: `url(${destination.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                    </div>
                    
                    {/* Country Name Plate */}
                    <div 
                      className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white/40 backdrop-blur-md text-black text-center py-1 px-2 rounded shadow-md"
                      style={{
                        width: 'clamp(95px, 20vw, 112px)',
                        maxWidth: '130px'
                      }}
                    >
                      <span 
                        className="font-semibold"
                        style={{ 
                          fontFamily: '"Plus Jakarta Sans", sans-serif',
                          fontSize: 'clamp(9px, 2.5vw, 12px)'
                        }}
                      >
                        {destination.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Explore Countries Button - Always appears last */}
            <div className="w-full flex justify-center pb-4 sm:pb-6">
              <Link href="/destinations">
                <button className="bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold hover:bg-[#83CD20] hover:text-white cursor-pointer transition-colors flex items-center gap-2" 
                style={{
                  fontSize: 'clamp(12px, 3.5vw, 18px)',
                  fontFamily: '"Plus Jakarta Sans", sans-serif'
                }}>
                  Explore Countries
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-5 sm:h-5">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;