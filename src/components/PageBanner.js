import React from 'react';

const PageBanner = ({ title, breadcrumb, backgroundImage = '/banner-default.png' }) => {
  return (
    <div className="relative h-96 w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`
        }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#034833',
          opacity: 0.7
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-8 md:px-16 lg:px-24">
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          {breadcrumb && (
            <p className="text-lg md:text-xl opacity-90">
              {breadcrumb}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
