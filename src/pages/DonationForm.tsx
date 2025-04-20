
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight, BadgeCheck, Gift, Star, Sticker } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DonationAmountSection from "@/components/donation/DonationAmountSection";
import PaymentMethodSection from "@/components/donation/PaymentMethodSection";
import DonorInfoSection from "@/components/donation/DonorInfoSection";

const DonationForm = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [donationType, setDonationType] = useState("รายครั้ง");
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("qr");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [donorType, setDonorType] = useState("บุคคล");
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  
  // Mock campaign data
  const campaign = {
    id: id || "1",
    title: "กองทุนเพื่อการศึกษาเด็กและผู้หญิงชาติพันธุ์ ชายแดนเเละชายขอบ HERO FUND",
    organizer: "มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ",
    image: "/lovable-uploads/logo.jpg",
  };
  
  // Define donation tiers
  const donationTiers = [
    {
      amount: 100,
      title: "ผู้สนับสนุน",
      description: "ไม่มีของตอบแทน",
      perks: ["ได้รับการขอบคุณทางอีเมล", "ได้รับจดหมายข่าวประจำเดือน"],
      icon: BadgeCheck
    },
    {
      amount: 500,
      title: "ผู้สนับสนุนระดับต้น",
      description: "ได้สติ๊กเกอร์หรือโปสการ์ด",
      perks: ["ได้รับการขอบคุณทางอีเมล", "ได้รับจดหมายข่าวประจำเดือน", "สติ๊กเกอร์หรือโปสการ์ดที่ระลึก 1 ชิ้น"],
      icon: Sticker
    },
    {
      amount: 1000,
      title: "ผู้สนับสนุนระดับกลาง",
      description: "ได้เสื้อยืด 1 ตัว",
      perks: ["ได้รับการขอบคุณทางอีเมล", "ได้รับจดหมายข่าวประจำเดือน", "เสื้อยืดที่ระลึกจากโครงการ 1 ตัว"],
      icon: Gift
    },
    {
      amount: 3000,
      title: "ผู้สนับสนุนพิเศษ",
      description: "ได้เสื้อ + ของพรีเมียมอื่น ๆ",
      perks: ["ได้รับการขอบคุณทางอีเมล", "ได้รับจดหมายข่าวประจำเดือน", "เสื้อยืดที่ระลึกจากโครงการ 1 ตัว", "กระเป๋าผ้าที่ระลึก", "ใบประกาศเกียรติคุณ", "สิทธิพิเศษในการเข้าร่วมกิจกรรม"],
      icon: Star
    },
  ];
  
  // Convert donation tier amounts to strings for the donation options
  const donationOptions = donationTiers.map(tier => ({
    amount: tier.amount.toString(),
    description: tier.title
  }));
  
  // Handle tier selection
  useEffect(() => {
    if (selectedAmount) {
      const amount = parseInt(selectedAmount);
      const tierIndex = donationTiers.findIndex(tier => tier.amount === amount);
      setSelectedTier(tierIndex >= 0 ? tierIndex : null);
    } else if (customAmount) {
      const amount = parseInt(customAmount);
      const tierIndex = donationTiers.findIndex(tier => tier.amount === amount);
      setSelectedTier(tierIndex >= 0 ? tierIndex : null);
    } else {
      setSelectedTier(null);
    }
  }, [selectedAmount, customAmount]);
  
  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (!amount) {
      toast({
        title: "กรุณาระบุจำนวนเงิน",
        variant: "destructive"
      });
      return;
    }
    
    if (!firstName || !lastName) {
      toast({
        title: "กรุณากรอกข้อมูลผู้บริจาค",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "ขอบคุณสำหรับการบริจาค",
      description: `คุณได้บริจาคเงินจำนวน ${amount} บาท ให้กับโครงการนี้`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to={`/campaigns/${id}`} className="flex items-center text-gray-600 mb-6 hover:text-mahatai-primary">
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span>กลับ</span>
          </Link>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center mb-8 border-b pb-6">
              <img 
                src={campaign.image} 
                alt={campaign.title} 
                className="w-16 h-16 rounded-md object-cover mr-4"
              />
              <div>
                <h2 className="font-light-300 text-lg">ร่วมบริจาค</h2>
                <p className="text-sm text-gray-600">{campaign.title}</p>
              </div>
            </div>
            
            <DonationAmountSection 
              donationOptions={donationOptions}
              selectedAmount={selectedAmount}
              setSelectedAmount={setSelectedAmount}
              customAmount={customAmount}
              setCustomAmount={setCustomAmount}
              donationType={donationType}
              setDonationType={setDonationType}
            />
            
            {selectedTier !== null && (
              <div className="mb-8 p-4 bg-mahatai-light rounded-lg">
                <div className="flex items-center mb-2">
                  {React.createElement(donationTiers[selectedTier].icon, { className: "h-5 w-5 text-mahatai-primary mr-2" })}
                  <h3 className="font-light-300">{donationTiers[selectedTier].title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{donationTiers[selectedTier].description}</p>
                <div>
                  <h4 className="text-sm font-semibold mb-1">สิทธิประโยชน์ที่คุณจะได้รับ:</h4>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    {donationTiers[selectedTier].perks.map((perk, index) => (
                      <li key={index}>{perk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            <PaymentMethodSection 
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
            
            <DonorInfoSection 
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              donorType={donorType}
              setDonorType={setDonorType}
            />
            
            <div className="pt-4 flex justify-between">
              <Button variant="outline" asChild>
                <Link to={`/campaigns/${id}`}>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  กลับ
                </Link>
              </Button>
              
              <Button onClick={handleDonate} className="bg-mahatai-primary hover:bg-mahatai-secondary">
                ยืนยันบริจาค
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonationForm;
