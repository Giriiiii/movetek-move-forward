import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import AboutPreview from '@/components/home/AboutPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import AuthorizedOrganization from '@/components/home/AuthorizedOrganization';
import CTABanner from '@/components/home/CTABanner';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <WhyChooseUs />
      <AuthorizedOrganization />
      <CTABanner />
    </Layout>
  );
};

export default Index;
