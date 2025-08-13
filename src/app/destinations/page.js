import React from 'react';
import PageBanner from '@/components/PageBanner';
import CountriesFilter from '@/components/CountriesFilter';

const DestinationsPage = () => {
  return (
    <div>
      <PageBanner 
        title="Destinations"
        breadcrumb="studyshare > destinations"
      />
      <CountriesFilter />
    </div>
  );
};

export default DestinationsPage;
