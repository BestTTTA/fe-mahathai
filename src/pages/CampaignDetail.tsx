
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import CampaignHeader from "@/components/campaign/CampaignHeader";
import CampaignTabs from "@/components/campaign/CampaignTabs";
import DonationCard from "@/components/campaign/DonationCard";

const CampaignDetail = () => {
  const { id } = useParams();
  
  // Mock campaign data - would normally be fetched from API using the id
  const campaign = {
    id: id || "1",
    title: "กองทุนเพื่อการศึกษาเด็กและผู้หญิงชาติพันธุ์ ชายแดนเเละชายขอบ HERO FUND",
    description: "กองทุนเพื่อการศึกษาเด็กและผู้หญิงชาติพันธุ์ ชายแดนเเละชายขอบ HERO FUND คือกองทุนที่เปิดพื้นที่ให้เด็กๆ และเยาวชนจากพื้นที่ห่างไกลและด้อยโอกาส สามารถเข้าถึงการศึกษาคุณภาพ เพื่อพัฒนาตัวเองให้ค้นพบและเข้าใจศักยภาพของตัวเอง",
    image: "https://pbs.twimg.com/media/F_hXCgDawAAHUPe?format=jpg&name=large",
    raisedAmount: 4700000,
    goalAmount: 10000000,
    donorsCount: 1250,
    daysLeft: 45,
    category: "การศึกษา",
    organizer: "มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ",
    organizerLogo: "/lovable-uploads/3a4e2117-b588-4492-b6f6-28a3bdb96294.png",
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
