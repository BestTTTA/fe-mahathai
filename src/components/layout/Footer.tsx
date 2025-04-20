import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-light-300 text-mahatai-primary font-mitr">
                <span className="text-mahatai-dark">mahatai</span>-X
              </span>
            </Link>
            <p className="text-gray-600 mb-4">
              แพลตฟอร์มระดมทุนเพื่อช่วยเหลือผู้พิการ เด็กด้อยโอกาส และชุมชนผู้ขาดแคลนในประเทศไทย
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-mahatai-primary transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-mahatai-primary transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-mahatai-primary transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-mahatai-primary transition" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-mitr font-light-300 text-lg mb-4">เกี่ยวกับเรา</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-mahatai-primary transition">
                  เกี่ยวกับ mahatai-X
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-mahatai-primary transition">
                  วิธีการทำงาน
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-600 hover:text-mahatai-primary transition">
                  ผลกระทบของเรา
                </Link>
              </li>
              <li>
                <Link to="/verification" className="text-gray-600 hover:text-mahatai-primary transition">
                  กระบวนการตรวจสอบ
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-mahatai-primary transition">
                  ร่วมงานกับเรา
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mitr font-light-300 text-lg mb-4">บริการของเรา</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/start-campaign" className="text-gray-600 hover:text-mahatai-primary transition">
                  เริ่มต้นระดมทุน
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-gray-600 hover:text-mahatai-primary transition">
                  แคมเปญทั้งหมด
                </Link>
              </li>
              <li>
                <Link to="/for-charities" className="text-gray-600 hover:text-mahatai-primary transition">
                  สำหรับองค์กรการกุศล
                </Link>
              </li>
              <li>
                <Link to="/for-individuals" className="text-gray-600 hover:text-mahatai-primary transition">
                  สำหรับบุคคลทั่วไป
                </Link>
              </li>
              <li>
                <Link to="/for-corporates" className="text-gray-600 hover:text-mahatai-primary transition">
                  สำหรับภาคธุรกิจ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mitr font-light-300 text-lg mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-mahatai-primary mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  123 อาคารมหาไทย ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพฯ 10500
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-mahatai-primary flex-shrink-0" />
                <a href="tel:+6621234567" className="text-gray-600 hover:text-mahatai-primary transition">
                  02-123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-mahatai-primary flex-shrink-0" />
                <a href="mailto:contact@mahatai-x.org" className="text-gray-600 hover:text-mahatai-primary transition">
                  contact@mahatai-x.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-gray-200" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} mahatai-X. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-mahatai-primary transition">
              เงื่อนไขการใช้งาน
            </Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-mahatai-primary transition">
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link to="/cookies" className="text-gray-500 text-sm hover:text-mahatai-primary transition">
              นโยบายคุกกี้
            </Link>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center">
            สร้างด้วยความรัก <Heart size={14} className="mx-1 text-red-500" /> เพื่อสังคมไทย
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
