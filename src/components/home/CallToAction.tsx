
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-mahathai-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="mx-auto h-16 w-16 text-white mb-6 animate-pulse-light" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ร่วมเป็นส่วนหนึ่งในการสร้างสังคมไทยที่ดีขึ้น
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            ทุกการสนับสนุนของคุณ ไม่ว่าจะเล็กหรือใหญ่ ล้วนมีความหมายและสร้างการเปลี่ยนแปลง 
            เริ่มต้นวันนี้กับ Mahathai-X
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-mahathai-primary hover:bg-gray-100 text-lg py-6 px-8" 
              asChild
            >
              <Link to="/campaigns">
                สำรวจแคมเปญ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 text-lg py-6 px-8" 
              asChild
            >
              <Link to="/start-campaign">
                เริ่มต้นระดมทุน
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
