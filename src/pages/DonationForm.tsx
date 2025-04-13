
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight } from "lucide-react";
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
  
  // Mock campaign data
  const campaign = {
    id: id || "1",
    title: "กองทุนเพื่อการศึกษาเด็กและผู้หญิงชาติพันธุ์ ชายแดนเเละชายขอบ HERO FUND",
    organizer: "มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ",
    image: "/lovable-uploads/3a4e2117-b588-4492-b6f6-28a3bdb96294.png",
  };
  
  const donationOptions = [
    { amount: "470", description: "บริการสุขภาพจิต 1 sessions" },
    { amount: "2,350", description: "บริการสุขภาพจิต 5 sessions" },
    { amount: "4,700", description: "บริการสุขภาพจิต 10 sessions" },
  ];
  
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
          <Link to={`/campaigns/${id}`} className="flex items-center text-gray-600 mb-6 hover:text-mahathai-primary">
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
                <h2 className="font-medium text-lg">ร่วมบริจาค</h2>
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
              
              <Button onClick={handleDonate} className="bg-mahathai-primary hover:bg-mahathai-secondary">
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
