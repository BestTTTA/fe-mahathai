
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {donationOptions.map((option) => (
              <div 
                key={option.amount}
                className={`border ${selectedAmount === option.amount ? 'border-mahathai-primary bg-mahathai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahathai-primary transition-colors text-center`}
                onClick={() => {
                  setSelectedAmount(option.amount);
                  setCustomAmount("");
                }}
              >
                <div className="text-xl font-bold">{option.amount} บาท</div>
                <div className="text-sm text-gray-600">{option.description}</div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
            {donationOptions.map((option) => (
              <div 
                key={option.amount}
                className={`border ${selectedAmount === option.amount ? 'border-mahathai-primary bg-mahathai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahathai-primary transition-colors text-center`}
                onClick={() => {
                  setSelectedAmount(option.amount);
                  setCustomAmount("");
                }}
              >
                <div className="text-xl font-bold">{option.amount} บาท / เดือน</div>
                <div className="text-sm text-gray-600">{option.description}</div>
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
