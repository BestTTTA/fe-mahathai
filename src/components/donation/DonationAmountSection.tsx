
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DonationOption {
  amount: string;
  description: string;
}

interface DonationAmountSectionProps {
  donationOptions: DonationOption[];
  selectedAmount: string | null;
  setSelectedAmount: (amount: string | null) => void;
  customAmount: string;
  setCustomAmount: (amount: string) => void;
  donationType: string;
  setDonationType: (type: string) => void;
}

const DonationAmountSection = ({
  donationOptions,
  selectedAmount,
  setSelectedAmount,
  customAmount,
  setCustomAmount,
  donationType,
  setDonationType
}: DonationAmountSectionProps) => {
  // Predefined donation tiers with their rewards
  const donationTiers = [
    {
      amount: "100",
      title: "ผู้สนับสนุน",
      description: "ไม่มีของตอบแทน",
    },
    {
      amount: "500",
      title: "ผู้สนับสนุนระดับต้น",
      description: "ได้สติ๊กเกอร์หรือโปสการ์ด",
    },
    {
      amount: "1000",
      title: "ผู้สนับสนุนระดับกลาง",
      description: "ได้เสื้อยืด 1 ตัว",
    },
    {
      amount: "3000",
      title: "ผู้สนับสนุนพิเศษ",
      description: "ได้เสื้อ + ของพรีเมียมอื่น ๆ",
    },
  ];

  return (
    <div className="mb-8">
      <h3 className="flex items-center font-semibold text-lg mb-4">
        <span className="bg-yellow-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">1</span>
        เลือกจำนวนเงิน
      </h3>
      
      <Tabs defaultValue="รายครั้ง" className="mb-6" onValueChange={setDonationType}>
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="รายครั้ง" className="rounded-l-md">รายครั้ง</TabsTrigger>
          <TabsTrigger value="รายเดือน" className="rounded-r-md">รายเดือน</TabsTrigger>
        </TabsList>
        
        <TabsContent value="รายครั้ง">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {donationTiers.map((tier) => (
              <div 
                key={tier.amount}
                className={`border ${selectedAmount === tier.amount ? 'border-mahatai-primary bg-mahatai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahatai-primary transition-colors`}
                onClick={() => {
                  setSelectedAmount(tier.amount);
                  setCustomAmount("");
                }}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-light-300">{tier.amount} บาท</div>
                  <div className="text-sm font-light-300 text-mahatai-primary">{tier.title}</div>
                </div>
                <div className="text-sm text-gray-600">{tier.description}</div>
              </div>
            ))}
          </div>
          
          <div className="mb-4">
            <label className="text-sm text-gray-600 mb-1 block">ระบุจำนวน</label>
            <Input
              type="number"
              placeholder="ระบุจำนวนเงิน"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="รายเดือน">
          <div className="p-4 bg-gray-50 rounded-md">
            <p>การบริจาคแบบรายเดือนช่วยให้องค์กรสามารถวางแผนระยะยาวและดำเนินโครงการได้อย่างต่อเนื่อง</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {donationTiers.map((tier) => (
              <div 
                key={tier.amount}
                className={`border ${selectedAmount === tier.amount ? 'border-mahatai-primary bg-mahatai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahatai-primary transition-colors`}
                onClick={() => {
                  setSelectedAmount(tier.amount);
                  setCustomAmount("");
                }}
              >
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-light-300">{tier.amount} บาท / เดือน</div>
                  <div className="text-sm font-light-300 text-mahatai-primary">{tier.title}</div>
                </div>
                <div className="text-sm text-gray-600">{tier.description}</div>
              </div>
            ))}
          </div>
          
          <div className="mb-4">
            <label className="text-sm text-gray-600 mb-1 block">ระบุจำนวน / เดือน</label>
            <Input
              type="number"
              placeholder="ระบุจำนวนเงิน"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DonationAmountSection;
