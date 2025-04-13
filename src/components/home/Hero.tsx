import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Search, Users } from "lucide-react";
const Hero = () => {
  return <section className="relative py-16 md:py-24 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-mahathai-dark">
              สร้างการเปลี่ยนแปลงให้กับ <span className="text-mahathai-primary">สังคมไทย</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              แพลตฟอร์มระดมทุนเพื่อช่วยเหลือผู้พิการ เด็กด้อยโอกาส และชุมชนผู้ขาดแคลน 
              เราสร้างโอกาสและความหวังผ่านพลังแห่งการแบ่งปัน
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-mahathai-primary hover:bg-mahathai-secondary text-lg py-6" size="lg" asChild>
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
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="เด็กไทยยิ้มแย้มแจ่มใส" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">ช่วยเหลือเด็กด้อยโอกาสในจังหวัดเชียงใหม่</h3>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 mr-1 text-red-400" fill="currentColor" />
                    <span>2,546 ผู้สนับสนุน</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-mahathai-accent font-bold">85%</span>
                    <span className="ml-1">สำเร็จแล้ว</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <Users className="h-10 w-10 text-mahathai-primary" />
                <div>
                  <p className="text-gray-700">ผู้สนับสนุนทั้งหมด</p>
                  <p className="text-2xl font-bold text-mahathai-dark">152,487</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4 animate-float hidden md:block" style={{
            animationDelay: "1s"
          }}>
              <div className="flex items-center gap-3">
                <Heart className="h-10 w-10 text-red-500" />
                <div>
                  <p className="text-gray-700">ยอดบริจาคทั้งหมด</p>
                  <p className="text-2xl font-bold text-mahathai-dark">฿15.6M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white"></div>
    </section>;
};
export default Hero;