
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Share2, Users, Calendar, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CampaignDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  
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
  
  const progress = Math.round((campaign.raisedAmount / campaign.goalAmount) * 100);
  
  // Format currency to Thai Baht
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Campaign details */}
          <div className="lg:col-span-2">
            <img 
              src={campaign.image} 
              alt={campaign.title} 
              className="w-full h-auto rounded-lg mb-6 object-cover"
              style={{ maxHeight: "500px" }}
            />
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <Badge className="bg-mahathai-primary">{campaign.category}</Badge>
              <div className="flex items-center gap-2 text-gray-600">
                <Users size={16} />
                <span>{campaign.donorsCount.toLocaleString()} ผู้สนับสนุน</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} />
                <span>อีก {campaign.daysLeft} วัน</span>
              </div>
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="ml-auto flex items-center gap-1 text-gray-600 hover:text-mahathai-primary"
              >
                <Heart size={20} fill={isFavorite ? "#d1536a" : "none"} color={isFavorite ? "#d1536a" : "currentColor"} />
                <span>ถูกใจโครงการ</span>
              </button>
              <button className="flex items-center gap-1 text-gray-600 hover:text-mahathai-primary">
                <Share2 size={20} />
                <span>แชร์</span>
              </button>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{campaign.title}</h1>
            
            <div className="flex items-center mb-6">
              <img 
                src={campaign.organizerLogo} 
                alt={campaign.organizer} 
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <p className="text-sm text-gray-600">โดย</p>
                <p className="font-medium">{campaign.organizer}</p>
              </div>
            </div>
            
            <Tabs defaultValue="story" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="story">เรื่องราว</TabsTrigger>
                <TabsTrigger value="updates">อัพเดทล่าสุด</TabsTrigger>
              </TabsList>
              
              <TabsContent value="story" className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-lg">{campaign.description}</p>
                  <p>
                    กองทุน HERO FUND มีเป้าหมายในการช่วยเหลือเด็กและเยาวชนที่ขาดโอกาสทางการศึกษา โดยเฉพาะในพื้นที่ชายขอบและชุมชนชาติพันธุ์ ซึ่งมักจะประสบปัญหาในการเข้าถึงการศึกษาที่มีคุณภาพ การสนับสนุนของท่านจะช่วยให้เด็กๆ ได้มีโอกาสในการเรียนรู้และพัฒนาศักยภาพของตนเอง
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-4">เรื่องราวจากผู้รับทุน</h3>
                  
                  {campaign.stories.map(story => (
                    <div key={story.id} className="mb-8 bg-gray-50 p-6 rounded-lg">
                      <img 
                        src={story.image} 
                        alt={story.title} 
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <h4 className="text-lg font-semibold mb-2">{story.title}</h4>
                      <p>{story.content}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="updates" className="space-y-6">
                {campaign.updates.map(update => (
                  <div key={update.id} className="border-b border-gray-200 pb-6 mb-6 last:border-0">
                    <div className="text-sm text-gray-500 mb-1">{update.date}</div>
                    <h3 className="text-lg font-semibold mb-2">{update.title}</h3>
                    <p>{update.content}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right column - Donation card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-lg font-bold text-gray-700">
                    {formatCurrency(campaign.raisedAmount)}
                  </span>
                  <span className="text-gray-700 font-medium">
                    {progress}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div className="progress-value" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  เป้าหมาย {formatCurrency(campaign.goalAmount)}
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{campaign.donorsCount.toLocaleString()} ผู้สนับสนุน</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>อีก {campaign.daysLeft} วัน</span>
                </div>
              </div>
              
              <Button className="w-full bg-mahathai-primary hover:bg-mahathai-secondary mb-4" asChild>
                <Link to={`/campaigns/${id}/donate`} className="flex items-center justify-center">
                  <span>ร่วมบริจาค</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button variant="outline" className="w-full" asChild>
                <Link to="#" className="flex items-center justify-center">
                  <Heart className="mr-2 h-4 w-4" />
                  <span>ถูกใจโครงการ</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CampaignDetail;
