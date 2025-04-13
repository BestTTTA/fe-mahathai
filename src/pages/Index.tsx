
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import FeaturedCampaigns from "@/components/home/FeaturedCampaigns";
import TransparencySection from "@/components/home/TransparencySection";
import ImpactSection from "@/components/home/ImpactSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import HowItWorks from "@/components/home/HowItWorks";
import CallToAction from "@/components/home/CallToAction";
import { Link } from "react-router-dom";

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
      
      {/* Quick links to our sample campaign for demo purposes */}
      <div className="bg-mahathai-light py-6">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">ทดลองดูแคมเปญตัวอย่าง</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/campaigns" 
              className="px-4 py-2 bg-mahathai-primary text-white rounded-md hover:bg-mahathai-secondary transition-colors"
            >
              ดูแคมเปญทั้งหมด
            </Link>
            <Link 
              to="/campaigns/1" 
              className="px-4 py-2 bg-mahathai-primary text-white rounded-md hover:bg-mahathai-secondary transition-colors"
            >
              กองทุน HERO FUND
            </Link>
            <Link 
              to="/campaigns/1/donate" 
              className="px-4 py-2 bg-mahathai-primary text-white rounded-md hover:bg-mahathai-secondary transition-colors"
            >
              ร่วมบริจาค
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
