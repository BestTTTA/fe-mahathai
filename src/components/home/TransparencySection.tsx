
import { 
  ShieldCheck, 
  Verified, 
  Award, 
  BarChart, 
  ArrowUpRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <ShieldCheck className="h-12 w-12 text-mahathai-primary" />,
    title: "การตรวจสอบที่เข้มงวด",
    description: "ทุกแคมเปญได้รับการตรวจสอบและคัดกรองโดยทีมผู้เชี่ยวชาญเพื่อรับรองความถูกต้องและความโปร่งใส"
  },
  {
    icon: <Verified className="h-12 w-12 text-mahathai-primary" />,
    title: "การติดตามเงินบริจาค",
    description: "ผู้บริจาคสามารถติดตามการใช้จ่ายเงินบริจาคได้อย่างโปร่งใสผ่านระบบรายงานแบบเรียลไทม์"
  },
  {
    icon: <Award className="h-12 w-12 text-mahathai-primary" />,
    title: "องค์กรที่ได้รับการรับรอง",
    description: "ร่วมมือกับองค์กรที่ได้รับการรับรองและมีความน่าเชื่อถือในการดำเนินโครงการช่วยเหลือ"
  },
  {
    icon: <BarChart className="h-12 w-12 text-mahathai-primary" />,
    title: "รายงานผลกระทบ",
    description: "แสดงผลกระทบเชิงบวกของการบริจาคผ่านรายงานที่ชัดเจนและข้อมูลเชิงสถิติที่เข้าใจง่าย"
  }
];

const TransparencySection = () => {
  return (
    <section className="py-16 bg-mahathai-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ความโปร่งใสคือหัวใจของเรา
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mahathai-X มุ่งมั่นในการรักษามาตรฐานสูงสุดด้านความโปร่งใสและการตรวจสอบได้ เพื่อให้คุณมั่นใจในการบริจาค
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/verification" 
            className="inline-flex items-center text-mahathai-primary hover:text-mahathai-secondary font-medium"
          >
            เรียนรู้เพิ่มเติมเกี่ยวกับกระบวนการตรวจสอบของเรา
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
