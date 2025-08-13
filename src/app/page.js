import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import FAQSection from '@/components/FAQSection';

const page = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
    </div>
  );
};

export default page;