
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Users, Calendar } from "lucide-react";

interface DonationCardProps {
  campaignId: string;
  raisedAmount: number;
  goalAmount: number;
  donorsCount: number;
  daysLeft: number;
}

const DonationCard = ({ campaignId, raisedAmount, goalAmount, donorsCount, daysLeft }: DonationCardProps) => {
  const progress = Math.round((raisedAmount / goalAmount) * 100);
  
  // Format currency to Thai Baht
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-lg font-light-300 text-gray-700">
            {formatCurrency(raisedAmount)}
          </span>
          <span className="text-gray-700 font-light-300">
            {progress}%
          </span>
        </div>
        <div className="progress-bar">
          <div className="progress-value" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="text-sm text-gray-600 mt-1">
          เป้าหมาย {formatCurrency(goalAmount)}
        </div>
      </div>
      
      <div className="flex justify-between text-sm text-gray-600 mb-6">
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          <span>{donorsCount.toLocaleString()} ผู้สนับสนุน</span>
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          <span>อีก {daysLeft} วัน</span>
        </div>
      </div>
      
      <Button className="w-full bg-mahathai-primary hover:bg-mahathai-secondary mb-4" asChild>
        <Link to={`/campaigns/${campaignId}/donate`} className="flex items-center justify-center">
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
  );
};

export default DonationCard;
