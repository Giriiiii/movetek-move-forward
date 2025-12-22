import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import AboutPreview from '@/components/home/AboutPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';


import CTABanner from '@/components/home/CTABanner';


const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <WhyChooseUs />
      
      
      
      <CTABanner />
    </Layout>
  );
};

export default Index;
