
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CampaignCard from "../campaigns/CampaignCard";
import { ArrowRight } from "lucide-react";

// Mock data for featured campaigns
const featuredCampaigns = [
  {
    id: 1,
    title: "ช่วยเหลือเด็กด้อยโอกาสในจังหวัดเชียงใหม่",
    description: "สนับสนุนการศึกษาและพัฒนาทักษะชีวิตให้กับเด็กด้อยโอกาสกว่า 200 คนในจังหวัดเชียงใหม่",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    raisedAmount: 850000,
    goalAmount: 1000000,
    donorsCount: 2546,
    daysLeft: 15,
    category: "เด็กด้อยโอกาส",
    organizer: "มูลนิธิเด็กแห่งความหวัง"
  },
  {
    id: 2,
    title: "ปรับปรุงที่อยู่อาศัยสำหรับผู้พิการในจังหวัดกระบี่",
    description: "ช่วยปรับปรุงบ้านให้เหมาะสมกับการใช้ชีวิตของผู้พิการกว่า 50 ครอบครัวในจังหวัดกระบี่",
    image: "https://www.krabinoi.go.th/storage/uploads/730-1..jpg",
    raisedAmount: 420000,
    goalAmount: 800000,
    donorsCount: 1253,
    daysLeft: 25,
    category: "ผู้พิการ",
    organizer: "เครือข่ายผู้พิการไทย"
  },
  {
    id: 3,
    title: "โครงการอาหารกลางวันเพื่อเด็กนักเรียนในถิ่นทุรกันดาร",
    description: "จัดหาอาหารกลางวันที่มีคุณค่าทางโภชนาการให้กับเด็กนักเรียนในพื้นที่ห่างไกล",
    image: "https://www.khaosod.co.th/technologychaoban/wp-content/uploads/2020/03/630320_-216.jpg",
    raisedAmount: 340000,
    goalAmount: 500000,
    donorsCount: 987,
    daysLeft: 30,
    category: "การศึกษา",
    organizer: "สมาคมช่วยเหลือเด็กชายขอบ"
  },
  {
    id: 4,
    title: "โครงการสร้างห้องสมุดชุมชนในพื้นที่ชนบท",
    description: "สร้างแหล่งเรียนรู้และส่งเสริมนิสัยรักการอ่านให้กับเด็กและเยาวชนในพื้นที่ชนบทห่างไกล",
    image: "https://www.taiwisdom.org/libdvlpt/copy_of_localcprt02.jpg",
    raisedAmount: 520000,
    goalAmount: 800000,
    donorsCount: 1120,
    daysLeft: 20,
    category: "การศึกษา",
    organizer: "มูลนิธิหนังสือเพื่อเด็ก"
  },
  {
    id: 5,
    title: "โครงการผ่าตัดแก้ไขปากแหว่งเพดานโหว่สำหรับเด็ก",
    description: "ช่วยเหลือเด็กที่มีภาวะปากแหว่งเพดานโหว่ให้ได้รับการผ่าตัดและฟื้นฟูอย่างมีคุณภาพ",
    image: "https://operationsmile.or.th/wp-content/uploads/2023/02/292414911_8440241066001524_5189051223366572609_n-1024x683.jpg",
    raisedAmount: 980000,
    goalAmount: 1500000,
    donorsCount: 2100,
    daysLeft: 10,
    category: "สาธารณสุข",
    organizer: "มูลนิธิเด็กโรงพยาบาลศิริราช"
  },
  {
    id: 6,
    title: "โครงการส่งเสริมอาชีพให้ผู้สูงอายุในชุมชน",
    description: "สร้างโอกาสและพัฒนาทักษะอาชีพให้กับผู้สูงอายุในชุมชนเพื่อสร้างรายได้และคุณค่าในตัวเอง",
    image: "https://www.bufai.go.th/dnm_file/news/1725952733037_7770_center.jpg",
    raisedAmount: 450000,
    goalAmount: 700000,
    donorsCount: 850,
    daysLeft: 35,
    category: "ผู้สูงอายุ",
    organizer: "มูลนิธิพัฒนาชีวิตผู้สูงวัย"
  }
];

const FeaturedCampaigns = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-light-300 mb-4">
              แคมเปญแนะนำ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              แคมเปญที่โดดเด่นและกำลังเป็นที่สนใจ ร่วมเป็นส่วนหนึ่งในการสร้างการเปลี่ยนแปลงไปด้วยกัน
            </p>
          </div>
          <Button variant="outline" size="lg" className="mt-4 md:mt-0" asChild>
            <Link to="/campaigns" className="flex items-center">
              ดูแคมเปญทั้งหมด
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredCampaigns.map(campaign => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
