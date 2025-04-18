
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Search, User } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollToTop } = useScroll();
  
  const getLinkClasses = (path: string) => {
    return `text-gray-700 font-light-300 transition 
      ${location.pathname === path ? 'text-mahathai-primary' : 'hover:text-mahathai-primary'}`;
  };

  const handleClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  return <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" onClick={handleClick} className="flex items-center">
          <span className="text-2xl font-light-300 text-mahathai-primary font-mitr font-bold">
            <span className="text-mahathai-dark">Mahathai</span>-X
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/campaigns" onClick={handleClick} className={getLinkClasses("/campaigns")}>
            แคมเปญทั้งหมด
          </Link>
          <Link to="/donation" onClick={handleClick} className={getLinkClasses("/donation")}>
            หมวดหมู่
          </Link>
          <Link to="/news" onClick={handleClick} className={getLinkClasses("/news")}>
            ข่าวสารและกิจกรรม
          </Link>
          <Link to="/about" onClick={handleClick} className={getLinkClasses("/about")}>
            เกี่ยวกับเรา
          </Link>
          <Link to="/contact" onClick={handleClick} className={getLinkClasses("/contact")}>
            ติดต่อเรา
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="ค้นหา">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="แคมเปญที่ชื่นชอบ">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <Link to="/login" onClick={handleClick}>
              <User className="h-4 w-4" />
              <span>เข้าสู่ระบบ</span>
            </Link>
          </Button>
          <Button className="bg-mahathai-primary hover:bg-mahathai-secondary" asChild>
            <Link to="/donation" onClick={handleClick}>เริ่มต้นบริจาค</Link>
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/campaigns" className="text-gray-700 hover:text-mahathai-primary font-light-300 py-2 transition" onClick={handleClick}>
              แคมเปญทั้งหมด
            </Link>
            <Link to="/donation" className="text-gray-700 hover:text-mahathai-primary font-light-300 py-2 transition" onClick={handleClick}>
              หมวดหมู่
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-mahathai-primary font-light-300 py-2 transition" onClick={handleClick}>
              ข่าวสารและกิจกรรม
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-mahathai-primary font-light-300 py-2 transition" onClick={handleClick}>
              เกี่ยวกับเรา
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-mahathai-primary font-light-300 py-2 transition" onClick={handleClick}>
              ติดต่อเรา
            </Link>
            <hr className="border-gray-200" />
            <div className="flex justify-between items-center">
              <Button variant="outline" className="flex-1 mr-2" asChild>
                <Link to="/login" onClick={handleClick}>
                  เข้าสู่ระบบ
                </Link>
              </Button>
              <Button className="flex-1 bg-mahathai-primary hover:bg-mahathai-secondary" asChild>
                <Link to="/donation" onClick={handleClick}>
                  เริ่มต้นบริจาค
                </Link>
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};

export default Navbar;
