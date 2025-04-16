
import { ArrowRight, CheckCircle2, FileSpreadsheet, Users, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: <CheckCircle2 className="h-12 w-12 text-mahathai-primary" />,
    title: "ผ่านการตรวจสอบอย่างเข้มงวด",
    description: "ทุกแคมเปญได้รับการคัดกรองและตรวจสอบโดยทีมผู้เชี่ยวชาญเพื่อความโปร่งใสและความน่าเชื่อถือ"
  },
  {
    icon: <FileSpreadsheet className="h-12 w-12 text-mahathai-primary" />,
    title: "สร้างเรื่องราวที่ทรงพลัง",
    description: "สร้างแคมเปญที่บอกเล่าเรื่องราวอย่างมีประสิทธิภาพด้วยเครื่องมือที่ใช้งานง่ายและเข้าถึงผู้สนับสนุนได้มากขึ้น"
  },
  {
    icon: <Users className="h-12 w-12 text-mahathai-primary" />,
    title: "ขยายการเข้าถึง",
    description: "แชร์แคมเปญไปยังเครือข่ายสังคมออนไลน์และได้รับการสนับสนุนจากชุมชน Mahathai-X ที่กำลังเติบโต"
  },
  {
    icon: <CreditCard className="h-12 w-12 text-mahathai-primary" />,
    title: "รับเงินบริจาคได้อย่างปลอดภัย",
    description: "รับเงินบริจาคผ่านระบบการชำระเงินที่หลากหลายและปลอดภัย พร้อมติดตามความคืบหน้าแบบเรียลไทม์"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light-300 mb-4">
            วิธีการทำงานของ Mahathai-X
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            แพลตฟอร์มของเราออกแบบมาเพื่อให้การระดมทุนเป็นเรื่องง่ายและมีประสิทธิภาพ ทั้งสำหรับผู้จัดแคมเปญและผู้บริจาค
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-light-300 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex justify-center mt-6">
                  <ArrowRight className="h-6 w-6 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-mahathai-primary hover:bg-mahathai-secondary" asChild>
            <Link to="/how-it-works">
              เรียนรู้เพิ่มเติม
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
