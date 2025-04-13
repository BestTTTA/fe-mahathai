
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Users, 
  ArrowRight 
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CampaignProps {
  campaign: {
    id: number;
    title: string;
    description: string;
    image: string;
    raisedAmount: number;
    goalAmount: number;
    donorsCount: number;
    daysLeft: number;
    category: string;
    organizer: string;
  };
}

const CampaignCard = ({ campaign }: CampaignProps) => {
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
    <Card className="overflow-hidden card-hover border border-gray-200">
      <div className="relative">
        <Link to={`/campaigns/${campaign.id}`}>
          <img 
            src={campaign.image} 
            alt={campaign.title} 
            className="w-full h-48 object-cover"
          />
        </Link>
        <Badge className="absolute top-3 left-3 bg-mahathai-primary hover:bg-mahathai-secondary">
          {campaign.category}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2 line-clamp-2">
            <Link to={`/campaigns/${campaign.id}`} className="hover:text-mahathai-primary transition">
              {campaign.title}
            </Link>
          </h3>
          <p className="text-gray-600 line-clamp-2 text-sm mb-2">{campaign.description}</p>
          <p className="text-sm text-gray-500">โดย: {campaign.organizer}</p>
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700 font-medium">
                ระดมทุนแล้ว {formatCurrency(campaign.raisedAmount)}
              </span>
              <span className="text-gray-700 font-medium">
                {progress}%
              </span>
            </div>
            <div className="progress-bar">
              <div className="progress-value" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          
          <div className="flex justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{campaign.donorsCount.toLocaleString()} ผู้สนับสนุน</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>อีก {campaign.daysLeft} วัน</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-mahathai-primary hover:bg-mahathai-secondary" asChild>
          <Link to={`/campaigns/${campaign.id}`} className="flex items-center justify-center">
            <span>ร่วมบริจาค</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CampaignCard;
