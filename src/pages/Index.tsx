
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import FeaturedCampaigns from "@/components/home/FeaturedCampaigns";
import TransparencySection from "@/components/home/TransparencySection";
import ImpactSection from "@/components/home/ImpactSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import HowItWorks from "@/components/home/HowItWorks";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <FeaturedCampaigns />
      <TransparencySection />
      <ImpactSection />
      <HowItWorks />
      <TestimonialSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
