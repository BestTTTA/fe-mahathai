import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CampaignCard from "@/components/campaigns/CampaignCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Percent, BadgeDollarSign } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Campaigns = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [donationRange, setDonationRange] = useState<string>("");

  // Mock campaign data
  const campaigns = [
    {
      id: 1,
      title: "กองทุนเพื่อการศึกษาเด็กและผู้หญิงชาติพันธุ์ ชายแดนเเละชายขอบ HERO FUND",
      description: "กองทุนเพื่อการศึกษาเด็กและผู้หญิงชาติพันธุ์ ชายแดนเเละชายขอบ HERO FUND คือกองทุนที่เปิดพื้นที่ให้เด็กๆ และเยาวชนจากพื้นที่ห่างไกลและด้อยโอกาส สามารถเข้าถึงการศึกษาคุณภาพ เพื่อพัฒนาตัวเองให้ค้นพบและเข้าใจศักยภาพของตัวเอง",
      image: "https://pbs.twimg.com/media/F_hXCgDawAAHUPe?format=jpg&name=large",
      raisedAmount: 4700000,
      goalAmount: 10000000,
      donorsCount: 1250,
      daysLeft: 45,
      category: "การศึกษา",
      organizer: "มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ",
    },
    {
      id: 2,
      title: "ระดมทุนสร้างโรงพยาบาลสนาม COVID-19",
      description: "โครงการระดมทุนเพื่อสร้างโรงพยาบาลสนามและจัดซื้ออุปกรณ์ทางการแพทย์ที่จำเป็นเพื่อรองรับผู้ป่วย COVID-19 ในพื้นที่ห่างไกล",
      image: "https://picsum.photos/seed/campaign2/600/400",
      raisedAmount: 3500000,
      goalAmount: 5000000,
      donorsCount: 890,
      daysLeft: 15,
      category: "สาธารณสุข",
      organizer: "มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ",
    },
    {
      id: 3,
      title: "โครงการฟื้นฟูอาชีพเกษตรกรหลังวิกฤต",
      description: "ช่วยเหลือเกษตรกรที่ได้รับผลกระทบจากภัยแล้งและน้ำท่วมให้สามารถกลับมาประกอบอาชีพได้อีกครั้ง ผ่านการฝึกอบรมและสนับสนุนปัจจัยการผลิต",
      image: "https://picsum.photos/seed/campaign3/600/400",
      raisedAmount: 1200000,
      goalAmount: 3000000,
      donorsCount: 350,
      daysLeft: 60,
      category: "เกษตรกรรม",
      organizer: "มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ",
    },
    {
      id: 4,
      title: "กองทุนช่วยเหลือผู้ประสบภัยพิบัติทางธรรมชาติ",
      description: "กองทุนสำหรับช่วยเหลือผู้ประสบภัยพิบัติทางธรรมชาติในประเทศไทย เพื่อบรรเทาความเดือดร้���นเบื้องต้นและฟื้นฟูชีวิตความเป็นอยู่",
      image: "https://picsum.photos/seed/campaign4/600/400",
      raisedAmount: 2800000,
      goalAmount: 5000000,
      donorsCount: 720,
      daysLeft: 30,
      category: "ภัยพิบัติ",
      organizer: "มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ",
    },
    {
      id: 5,
      title: "โครงการพัฒนาการเรียนรู้สำหรับเด็กพิการ",
      description: "โครงการพัฒนาสื่อการเรียนรู้และอุปกรณ์การศึกษาสำหรับเด็กพิการ เพื่อส่งเสริมโอกาสในการเข้าถึงการศึกษาที่มีคุณภาพ",
      image: "https://picsum.photos/seed/campaign5/600/400",
      raisedAmount: 1500000,
      goalAmount: 3000000,
      donorsCount: 450,
      daysLeft: 75,
      category: "การศึกษา",
      organizer: "มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ",
    },
    {
      id: 6,
      title: "ฟื้นฟูป่าชายเลนเพื่อระบบนิเวศที่ยั่งยืน",
      description: "โครงการปลูกและฟื้นฟูป่าชายเลนในพื้นที่ชายฝั่งทะเลไทย เพื่อรักษาระบบนิเวศและเป็นแหล่งอนุบาลสัตว์น้ำ",
      image: "https://picsum.photos/seed/campaign6/600/400",
      raisedAmount: 900000,
      goalAmount: 2000000,
      donorsCount: 280,
      daysLeft: 90,
      category: "สิ่งแวดล้อม",
      organizer: "มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ",
    },
  ];

  // Filter campaigns based on search query and donation range
  const filteredCampaigns = campaigns.filter(campaign => {
    // Filter by search query
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by donation range
    let matchesDonationRange = true;
    if (donationRange) {
      const raisedAmount = campaign.raisedAmount;
      
      switch (donationRange) {
        case "under-1m":
          matchesDonationRange = raisedAmount < 1000000;
          break;
        case "1m-3m":
          matchesDonationRange = raisedAmount >= 1000000 && raisedAmount < 3000000;
          break;
        case "3m-5m":
          matchesDonationRange = raisedAmount >= 3000000 && raisedAmount < 5000000;
          break;
        case "over-5m":
          matchesDonationRange = raisedAmount >= 5000000;
          break;
        default:
          matchesDonationRange = true;
      }
    }
    
    return matchesSearch && matchesDonationRange;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">แคมเปญระดมทุน</h1>
          <p className="text-gray-600">ร่วมสนับสนุนโครงการที่สร้างการเปลี่ยนแปลงให้กับสังคม</p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="ค้นหาแคมเปญ..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-64">
              <Select value={donationRange} onValueChange={setDonationRange}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center">
                    <BadgeDollarSign size={16} className="mr-2" />
                    <SelectValue placeholder="จำนวนเงินระดมทุน" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">ทุกจำนวน</SelectItem>
                  <SelectItem value="under-1m">น้อยกว่า 1 ล้านบาท</SelectItem>
                  <SelectItem value="1m-3m">1 - 3 ล้านบาท</SelectItem>
                  <SelectItem value="3m-5m">3 - 5 ล้านบาท</SelectItem>
                  <SelectItem value="over-5m">มากกว่า 5 ล้านบาท</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              <span>ตัวกรองอื่นๆ</span>
            </Button>
          </div>
          
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
              <TabsTrigger value="education">การศึกษา</TabsTrigger>
              <TabsTrigger value="health">สาธารณสุข</TabsTrigger>
              <TabsTrigger value="environment">สิ่งแวดล้อม</TabsTrigger>
              <TabsTrigger value="disaster">ภัยพิบัติ</TabsTrigger>
              <TabsTrigger value="agriculture">เกษตรกรรม</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns.map(campaign => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
              {filteredCampaigns.length === 0 && (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-500 mb-2">ไม่พบแคมเปญที่ตรงตามเงื่อนไขการค้นหา</p>
                  <Button variant="outline" onClick={() => {
                    setSearchQuery("");
                    setDonationRange("");
                  }}>ล้างตัวกรอง</Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="education" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns
                .filter(campaign => campaign.category === "การศึกษา")
                .map(campaign => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))
              }
            </TabsContent>
            
            <TabsContent value="health" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns
                .filter(campaign => campaign.category === "สาธารณสุข")
                .map(campaign => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))
              }
            </TabsContent>
            
            <TabsContent value="environment" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns
                .filter(campaign => campaign.category === "สิ่งแวดล้อม")
                .map(campaign => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))
              }
            </TabsContent>
            
            <TabsContent value="disaster" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns
                .filter(campaign => campaign.category === "ภัยพิบัติ")
                .map(campaign => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))
              }
            </TabsContent>
            
            <TabsContent value="agriculture" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns
                .filter(campaign => campaign.category === "เกษตรกรรม")
                .map(campaign => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))
              }
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Campaigns;
