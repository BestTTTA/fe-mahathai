
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Heart, 
  Search, 
  User
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-mahathai-primary font-kanit">
            <span className="text-mahathai-dark">Mahathai</span>-X
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/campaigns" className="text-gray-700 hover:text-mahathai-primary font-medium transition">
            แคมเปญทั้งหมด
          </Link>
          <Link to="/categories" className="text-gray-700 hover:text-mahathai-primary font-medium transition">
            หมวดหมู่
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-mahathai-primary font-medium transition">
            วิธีการทำงาน
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-mahathai-primary font-medium transition">
            เกี่ยวกับเรา
          </Link>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="ค้นหา">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="แคมเปญที่ชื่นชอบ">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <Link to="/login">
              <User className="h-4 w-4" />
              <span>เข้าสู่ระบบ</span>
            </Link>
          </Button>
          <Button className="bg-mahathai-primary hover:bg-mahathai-secondary" asChild>
            <Link to="/donation">เริ่มต้นบริจาค</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/campaigns" 
              className="text-gray-700 hover:text-mahathai-primary font-medium py-2 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              แคมเปญทั้งหมด
            </Link>
            <Link 
              to="/categories" 
              className="text-gray-700 hover:text-mahathai-primary font-medium py-2 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              หมวดหมู่
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-700 hover:text-mahathai-primary font-medium py-2 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              วิธีการทำงาน
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-mahathai-primary font-medium py-2 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              เกี่ยวกับเรา
            </Link>
            <hr className="border-gray-200" />
            <div className="flex justify-between items-center">
              <Button variant="outline" className="flex-1 mr-2" asChild>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  เข้าสู่ระบบ
                </Link>
              </Button>
              <Button className="flex-1 bg-mahathai-primary hover:bg-mahathai-secondary" asChild>
                <Link to="/donation" onClick={() => setIsMenuOpen(false)}>
                  เริ่มต้นบริจาค
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
