import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CampaignCard from "@/components/campaigns/CampaignCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Tag } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Campaigns = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  // Mock campaign data
  const campaigns = [
    {
      id: 1,
      title: "ช่วยเหลือเด็กด้อยโอกาสในจังหวัดเชียงใหม่",
      description: "สนับสนุนการศึกษาและพัฒนาทักษะชีวิตให้กับเด็กด้อยโอกาสกว่า 200 คนในจังหวัดเชียงใหม่",
      image: "https://upload.over24h.shop/files/1744783713_634e14e7-5210-4541-bb94-f31a247ef4c7.png",
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
    },
  ];

  // Filter campaigns based on search query and category filter
  const filteredCampaigns = campaigns.filter(campaign => {
    // Filter by search query
    const matchesSearch = campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      campaign.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    let matchesCategory = true;
    if (categoryFilter && categoryFilter !== "all") {
      matchesCategory = campaign.category === categoryFilter;
    }
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-light-300 mb-2">แคมเปญระดมทุน</h1>
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
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center">
                    <Tag size={16} className="mr-2" />
                    <SelectValue placeholder="ประเภทแคมเปญ" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ทุกประเภท</SelectItem>
                  <SelectItem value="ดนตรี">ดนตรี</SelectItem>
                  <SelectItem value="กีฬา">กีฬา</SelectItem>
                  <SelectItem value="การศึกษา">การศึกษา</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              <span>ตัวกรองอื่นๆ</span>
            </Button>
          </div>
          
          <Tabs defaultValue="all">
            <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCampaigns.map(campaign => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
              {filteredCampaigns.length === 0 && (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-500 mb-2">ไม่พบแคมเปญที่ตรงตามเงื่อนไขการค้นหา</p>
                  <Button variant="outline" onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("");
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
