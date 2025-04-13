
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Story {
  id: number;
  image: string;
  title: string;
  content: string;
}

interface Update {
  id: number;
  date: string;
  title: string;
  content: string;
}

interface CampaignTabsProps {
  description: string;
  stories: Story[];
  updates: Update[];
}

const CampaignTabs = ({ description, stories, updates }: CampaignTabsProps) => {
  return (
    <Tabs defaultValue="story" className="mb-8">
      <TabsList className="mb-4">
        <TabsTrigger value="story">เรื่องราว</TabsTrigger>
        <TabsTrigger value="updates">อัพเดทล่าสุด</TabsTrigger>
      </TabsList>
      
      <TabsContent value="story" className="space-y-6">
        <div className="prose max-w-none">
          <p className="text-lg">{description}</p>
          <p>
            กองทุน HERO FUND มีเป้าหมายในการช่วยเหลือเด็กและเยาวชนที่ขาดโอกาสทางการศึกษา โดยเฉพาะในพื้นที่ชายขอบและชุมชนชาติพันธุ์ ซึ่งมักจะประสบปัญหาในการเข้าถึงการศึกษาที่มีคุณภาพ การสนับสนุนของท่านจะช่วยให้เด็กๆ ได้มีโอกาสในการเรียนรู้และพัฒนาศักยภาพของตนเอง
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-4">เรื่องราวจากผู้รับทุน</h3>
          
          {stories.map(story => (
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
        {updates.map(update => (
          <div key={update.id} className="border-b border-gray-200 pb-6 mb-6 last:border-0">
            <div className="text-sm text-gray-500 mb-1">{update.date}</div>
            <h3 className="text-lg font-semibold mb-2">{update.title}</h3>
            <p>{update.content}</p>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );
};

export default CampaignTabs;
