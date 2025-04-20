
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HandHeart, Users, LucideHome, School, HandCoins } from "lucide-react";

const stats = [
  {
    icon: <HandHeart className="h-8 w-8 text-mahatai-primary" />,
    value: "125M",
    label: "บาทที่ระดมทุน"
  },
  {
    icon: <Users className="h-8 w-8 text-mahatai-primary" />,
    value: "50,000+",
    label: "ผู้ได้รับความช่วยเหลือ"
  },
  {
    icon: <School className="h-8 w-8 text-mahatai-primary" />,
    value: "200+",
    label: "โรงเรียนได้รับการสนับสนุน"
  },
  {
    icon: <LucideHome className="h-8 w-8 text-mahatai-primary" />,
    value: "800+",
    label: "บ้านที่ได้รับการปรับปรุง"
  },
];

const ImpactSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light-300 mb-6">
              ผลกระทบของเราต่อสังคมไทย
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              mahatai-X ไม่ได้เป็นเพียงแพลตฟอร์มระดมทุน แต่เป็นการเคลื่อนไหวเพื่อสร้างการเปลี่ยนแปลงที่ยั่งยืนในสังคมไทย 
              ด้วยการร่วมมือกับผู้คนนับแสนคน เราได้สร้างผลกระทบเชิงบวกในหลายพื้นที่ทั่วประเทศ
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    {stat.icon}
                    <span className="text-2xl md:text-3xl font-light-300 text-mahatai-dark">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-mahatai-primary hover:bg-mahatai-secondary" asChild>
              <Link to="/impact">
                ดูข้อมูลผลกระทบเพิ่มเติม
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="ผลกระทบของเราต่อชุมชน" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-5 animate-float">
              <div className="flex items-center gap-3">
                <HandCoins className="h-12 w-12 text-mahatai-primary" />
                <div>
                  <p className="text-gray-600">ค่าดำเนินการเฉลี่ย</p>
                  <p className="text-2xl font-light-300 text-mahatai-dark">เพียง 2%</p>
                  <p className="text-sm text-green-600">ต่ำกว่าค่าเฉลี่ยอุตสาหกรรม</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
