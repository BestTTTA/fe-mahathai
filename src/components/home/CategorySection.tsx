
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  School, 
  Home, 
  Accessibility, 
  Baby, 
  HandHeart,
  FlaskConical,
  Mountain,
  ArrowRight
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "เด็กด้อยโอกาส",
    icon: <Baby className="h-6 w-6" />,
    color: "bg-blue-100 text-blue-600",
    path: "/categories/children"
  },
  {
    id: 2,
    name: "ผู้พิการ",
    icon: <Accessibility className="h-6 w-6" />,
    color: "bg-purple-100 text-purple-600",
    path: "/categories/disabled"
  },
  {
    id: 3,
    name: "การศึกษา",
    icon: <School className="h-6 w-6" />,
    color: "bg-yellow-100 text-yellow-600",
    path: "/categories/education"
  },
  {
    id: 4,
    name: "ที่อยู่อาศัย",
    icon: <Home className="h-6 w-6" />,
    color: "bg-green-100 text-green-600",
    path: "/categories/housing"
  },
  {
    id: 5,
    name: "ช่วยเหลือชุมชน",
    icon: <Users className="h-6 w-6" />,
    color: "bg-red-100 text-red-600",
    path: "/categories/community"
  },
  {
    id: 6,
    name: "สุขภาพ",
    icon: <Heart className="h-6 w-6" />,
    color: "bg-pink-100 text-pink-600",
    path: "/categories/health"
  },
  {
    id: 7,
    name: "การวิจัย",
    icon: <FlaskConical className="h-6 w-6" />,
    color: "bg-indigo-100 text-indigo-600",
    path: "/categories/research"
  },
  {
    id: 8,
    name: "สิ่งแวดล้อม",
    icon: <Mountain className="h-6 w-6" />,
    color: "bg-emerald-100 text-emerald-600",
    path: "/categories/environment"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light-300 mb-4">
            หมวดหมู่การระดมทุน
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ค้นหาและสนับสนุนแคมเปญตามหมวดหมู่ที่คุณสนใจ ร่วมสร้างการเปลี่ยนแปลงในด้านที่คุณใส่ใจ
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={category.path}
              className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100 card-hover"
            >
              <div className={`${category.color} p-3 rounded-full mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-light-300 text-center">{category.name}</h3>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/categories" className="flex items-center">
              ดูหมวดหมู่ทั้งหมด
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
