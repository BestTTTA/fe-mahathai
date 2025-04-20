
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Search, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-mahatai-dark">
              สร้างการเปลี่ยนแปลงให้กับ <span className="text-mahatai-primary">สังคมไทย</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              แพลตฟอร์มระดมทุนเพื่อช่วยเหลือผู้พิการ เด็กด้อยโอกาส และชุมชนผู้ขาดแคลน 
              เราสร้างโอกาสและความหวังผ่านพลังแห่งการแบ่งปัน
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-mahatai-primary hover:bg-mahatai-secondary text-lg py-6" size="lg" asChild>
                <Link to="/campaigns">
                  สำรวจแคมเปญ
                  <Search className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="text-lg py-6" size="lg" asChild>
                <Link to="/start-campaign">
                  เริ่มต้นระดมทุน
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://upload.over24h.shop/files/1744783713_634e14e7-5210-4541-bb94-f31a247ef4c7.png" 
                alt="เด็กนักเรียนหลากหลายวัยนั่งรับประทานอาหารร่วมกันในโรงอาหาร" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <Users className="h-10 w-10 text-mahatai-primary" />
                <div>
                  <p className="text-gray-700">ผู้สนับสนุนทั้งหมด</p>
                  <p className="text-2xl font-light-300 text-mahatai-dark">152,487</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-float hidden md:block" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-3">
                <Heart className="h-10 w-10 text-red-500" />
                <div>
                  <p className="text-gray-700">ยอดบริจาคทั้งหมด</p>
                  <p className="text-2xl font-light-300 text-mahatai-dark">฿15.6M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
};

export default Hero;
