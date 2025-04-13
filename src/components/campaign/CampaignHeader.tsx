
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, Users, Calendar } from "lucide-react";

interface CampaignHeaderProps {
  campaign: {
    image: string;
    category: string;
    donorsCount: number;
    daysLeft: number;
    title: string;
    organizer: string;
    organizerLogo: string;
  };
}

const CampaignHeader = ({ campaign }: CampaignHeaderProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="mb-8">
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
    </div>
  );
};

export default CampaignHeader;
