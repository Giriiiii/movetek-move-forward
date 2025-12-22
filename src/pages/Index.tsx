import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import AboutPreview from '@/components/home/AboutPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import StatsSection from '@/components/home/StatsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTABanner from '@/components/home/CTABanner';
import FAQSection from '@/components/home/FAQSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </Layout>
  );
};

export default Index;
