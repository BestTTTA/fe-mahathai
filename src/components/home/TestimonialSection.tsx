
import { useState } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Quote 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote: "mahatai-X ทำให้การช่วยเหลือเด็กด้อยโอกาสของเราเข้าถึงผู้สนับสนุนได้มากขึ้น เราสามารถระดมทุนได้เกินเป้าหมายและขยายโครงการได้อย่างที่ไม่เคยเป็นมาก่อน",
    name: "คุณสุภาพร จริยวัฒนา",
    position: "ผู้อำนวยการมูลนิธิเด็กแห่งความหวัง",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 2,
    quote: "ในฐานะผู้พิการ การได้รับความช่วยเหลือจากแคมเปญบน mahatai-X ทำให้ผมมีโอกาสได้ปรับปรุงบ้านให้เหมาะกับการใช้ชีวิต และมีคุณภาพชีวิตที่ดีขึ้นอย่างมาก",
    name: "คุณวิชัย สุขสมบูรณ์",
    position: "ผู้ได้รับความช่วยเหลือ",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    quote: "ความโปร่งใสของ mahatai-X ทำให้ผมมั่นใจในการบริจาค ผมสามารถติดตามความคืบหน้าและเห็นผลกระทบจริงของการบริจาคได้อย่างชัดเจน",
    name: "คุณนิธิ พงศ์ภาณุ",
    position: "ผู้บริจาคประจำ",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const current = testimonials[currentIndex];

  return (
    <section className="py-16 bg-mahatai-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light-300old mb-4">
            เสียงจากชุมชนของเรา
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            เรื่องราวของผู้คนที่ mahatai-X ได้มีส่วนช่วยเปลี่ยนแปลงชีวิตและสร้างผลกระทบเชิงบวกต่อสังคม
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-mahatai-dark/40 p-8 md:p-10 rounded-2xl border border-gray-700 relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-mahatai-primary opacity-20" />
            
            <div className="text-center">
              <p className="text-xl md:text-2xl mb-8 relative z-10">
                "{current.quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <img 
                  src={current.image} 
                  alt={current.name} 
                  className="w-16 h-16 rounded-full mb-4 border-2 border-mahatai-primary" 
                />
                <h4 className="text-lg font-light-300">{current.name}</h4>
                <p className="text-gray-400">{current.position}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="border-gray-700 hover:bg-gray-800 text-black"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-mahatai-primary w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="border-gray-700 hover:bg-gray-800 text-black"
            >
              <ArrowRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
