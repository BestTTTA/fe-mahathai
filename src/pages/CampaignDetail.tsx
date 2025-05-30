
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CampaignHeader from "@/components/campaign/CampaignHeader";
import CampaignTabs from "@/components/campaign/CampaignTabs";
import DonationCard from "@/components/campaign/DonationCard";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Gift, Star } from "lucide-react";

const CampaignDetail = () => {
  const { id } = useParams();
  
  // Mock campaign data - would normally be fetched from API using the id
  const campaign = {
    id: id || "1",
    title: "กองทุนเพื่อการศึกษาเด็กและผู้หญิงชาติพันธุ์ ชายแดนเเละชายขอบ HERO FUND",
    description: "กองทุนเพื่อการศึกษาเด็กและผู้หญิงชาติพันธุ์ ชายแดนเเละชายขอบ HERO FUND คือกองทุนที่เปิดพื้นที่ให้เด็กๆ และเยาวชนจากพื้นที่ห่างไกลและด้อยโอกาส สามารถเข้าถึงการศึกษาคุณภาพ เพื่อพัฒนาตัวเองให้ค้นพบและเข้าใจศักยภาพของตัวเอง",
    image: "/lovable-uploads/25389d50-4974-4b06-b157-de665c625578.jpg",
    raisedAmount: 4700000,
    goalAmount: 10000000,
    donorsCount: 1250,
    daysLeft: 45,
    category: "การศึกษา",
    organizer: "มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ",
    organizerLogo: "/lovable-uploads/logo.jpg",
    donationTiers: [
      {
        amount: 100,
        title: "ผู้สนับสนุน",
        description: "การสนับสนุนของคุณมีความหมายต่อพวกเรา ขอบคุณที่ร่วมสร้างการเปลี่ยนแปลง",
        perks: ["ได้รับการขอบคุณทางอีเมล", "ได้รับจดหมายข่าวประจำเดือน"],
        icon: BadgeCheck
      },
      {
        amount: 1000,
        title: "ผู้สนับสนุนพิเศษ",
        description: "รับเสื้อที่ระลึกจากโครงการ และร่วมเป็นส่วนหนึ่งของการเปลี่ยนแปลงที่ยั่งยืน",
        perks: ["ได้รับการขอบคุณทางอีเมล", "ได้รับจดหมายข่าวประจำเดือน", "เสื้อที่ระลึกจากโครงการ 1 ตัว"],
        icon: Gift
      },
      {
        amount: 5000,
        title: "นักสนับสนุนระดับพรีเมียม",
        description: "เป็นส่วนสำคัญในการผลักดันโครงการให้ประสบความสำเร็จ พร้อมของที่ระลึกพิเศษ",
        perks: ["ได้รับการขอบคุณทางอีเมล", "ได้รับจดหมายข่าวประจำเดือน", "เสื้อที่ระลึกจากโครงการ 1 ตัว", "ใบประกาศเกียรติคุณผู้สนับสนุนโครงการ", "เข้าร่วมกิจกรรมพิเศษกับทีมงานโครงการ"],
        icon: Star
      }
    ],
    updates: [
      {
        id: 1,
        date: "10 เมษายน 2024",
        title: "ความคืบหน้าโครงการประจำเดือนเมษายน",
        content: "ขณะนี้เราได้มอบทุนการศึกษาให้กับเด็กและเยาวชนไปแล้วกว่า 50 ทุน ครอบคลุมพื้นที่ 5 จังหวัดชายแดนภาคเหนือ"
      },
      {
        id: 2,
        date: "15 มีนาคม 2024",
        title: "เปิดตัวโครงการ HERO FUND อย่างเป็นทางการ",
        content: "เราได้จัดงานเปิดตัวโครงการที่จังหวัดเชียงราย มีตัวแทนชุมชนและนักเรียนเข้าร่วมกว่า 200 คน"
      }
    ],
    stories: [
      {
        id: 1,
        image: "https://picsum.photos/seed/story1/600/400",
        title: "น้องสายฝน เด็กหญิงชาติพันธุ์อาข่าที่ฝันอยากเป็นครู",
        content: "น้องสายฝนเป็นเด็กหญิงชาติพันธุ์อาข่าจากดอยแม่สลอง ที่มีความฝันอยากเป็นครูกลับมาสอนหนังสือเด็กๆ ในชุมชนของเธอ ด้วยการสนับสนุนจากกองทุน HERO FUND ทำให้เธอได้มีโอกาสเข้าศึกษาต่อในระดับมัธยมปลาย"
      },
      {
        id: 2,
        image: "https://picsum.photos/seed/story2/600/400",
        title: "โรงเรียนบนดอยสูง โอกาสที่ไกลเกินเอื้อม",
        content: "โรงเรียนบนพื้นที่สูงหลายแห่งยังขาดแคลนครูและอุปกรณ์การเรียนการสอน กองทุน HERO FUND ได้ช่วยสนับสนุนวัสดุอุปกรณ์และทุนการศึกษาให้กับนักเรียนในพื้นที่ห่างไกล"
      }
    ]
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Campaign details */}
          <div className="lg:col-span-2">
            <CampaignHeader campaign={campaign} />
            <CampaignTabs 
              description={campaign.description} 
              stories={campaign.stories} 
              updates={campaign.updates} 
            />
            
            {/* Donation Tiers */}
            <div className="mt-8">
              <h3 className="text-2xl font-light-300 mb-6">ระดับการสนับสนุน</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {campaign.donationTiers.map((tier, index) => (
                  <Card key={index} className="overflow-hidden border-2 hover:border-mahatai-primary transition-all hover:shadow-md">
                    <div className="bg-mahatai-light p-4 flex justify-between items-center">
                      <h4 className="font-light-300 text-lg">{tier.title}</h4>
                      <tier.icon className="h-6 w-6 text-mahatai-primary" />
                    </div>
                    <CardContent className="p-6">
                      <div className="text-2xl font-light-300 mb-2 text-mahatai-primary">
                        {tier.amount.toLocaleString()} บาท
                      </div>
                      <p className="text-gray-600 mb-4">{tier.description}</p>
                      <div>
                        <h5 className="font-semibold mb-2">สิทธิประโยชน์:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          {tier.perks.map((perk, i) => (
                            <li key={i} className="text-sm text-gray-700">{perk}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - Donation card */}
          <div className="lg:col-span-1">
            <DonationCard 
              campaignId={campaign.id}
              raisedAmount={campaign.raisedAmount}
              goalAmount={campaign.goalAmount}
              donorsCount={campaign.donorsCount}
              daysLeft={campaign.daysLeft}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CampaignDetail;
