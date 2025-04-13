
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, QrCode, CreditCard, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
            <div className="flex items-center mb-6">
              <img 
                src={campaign.image} 
                alt={campaign.title} 
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h2 className="font-medium text-lg">ร่วมบริจาค</h2>
                <p className="text-sm text-gray-600">{campaign.title}</p>
              </div>
            </div>
            
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
            
            <div className="mb-8">
              <h3 className="flex items-center font-semibold text-lg mb-4">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">2</span>
                ช่องทางการชำระเงิน
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div 
                  className={`border ${paymentMethod === 'qr' ? 'border-mahathai-primary bg-mahathai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahathai-primary transition-colors text-center`}
                  onClick={() => setPaymentMethod('qr')}
                >
                  <div className="flex flex-col items-center justify-center">
                    <QrCode className="h-8 w-8 mb-2" />
                    <span>QR Code</span>
                  </div>
                </div>
                
                <div 
                  className={`border ${paymentMethod === 'card' ? 'border-mahathai-primary bg-mahathai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahathai-primary transition-colors text-center`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <div className="flex flex-col items-center justify-center">
                    <CreditCard className="h-8 w-8 mb-2" />
                    <span>บัตรเครดิต</span>
                  </div>
                </div>
                
                <div 
                  className={`border ${paymentMethod === 'line' ? 'border-mahathai-primary bg-mahathai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahathai-primary transition-colors text-center`}
                  onClick={() => setPaymentMethod('line')}
                >
                  <div className="flex flex-col items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="h-8 w-8 mb-2" 
                      fill="#06C755"
                    >
                      <path d="M19.952,13.594c0-3.545-3.559-6.424-7.93-6.424c-4.374,0-7.93,2.88-7.93,6.424c0,3.176,2.819,5.837,6.622,6.335c0.258,0.055,0.609,0.17,0.698,0.39c0.08,0.2,0.052,0.512,0.026,0.713c0,0-0.093,0.555-0.112,0.673c-0.034,0.198-0.158,0.774,0.68,0.421c0.836-0.353,4.515-2.659,6.158-4.554h0C19.256,16.122,19.952,14.921,19.952,13.594z M8.773,15.341h-1.727c-0.251,0-0.456-0.204-0.456-0.456V11.85c0-0.251,0.204-0.456,0.456-0.456c0.251,0,0.456,0.204,0.456,0.456v2.58h1.271c0.251,0,0.456,0.204,0.456,0.456C9.228,15.136,9.025,15.341,8.773,15.341z M10.934,14.885c0,0.251-0.204,0.456-0.456,0.456c-0.251,0-0.456-0.204-0.456-0.456v-3.03c0-0.251,0.204-0.456,0.456-0.456c0.251,0,0.456,0.204,0.456,0.456V14.885z M15.277,14.885c0,0.208-0.141,0.387-0.342,0.437c-0.038,0.01-0.076,0.014-0.114,0.014c-0.165,0-0.318-0.091-0.398-0.237l-1.779-2.416v2.203c0,0.251-0.204,0.456-0.456,0.456c-0.251,0-0.456-0.204-0.456-0.456v-3.03c0-0.208,0.141-0.387,0.342-0.437c0.038-0.01,0.076-0.014,0.114-0.014c0.165,0,0.318,0.091,0.398,0.237l1.779,2.416V11.85c0-0.251,0.204-0.456,0.456-0.456c0.251,0,0.456,0.204,0.456,0.456V14.885z M17.337,12.704c0.251,0,0.456,0.204,0.456,0.456c0,0.251-0.204,0.456-0.456,0.456h-1.271v0.814h1.271c0.251,0,0.456,0.204,0.456,0.456c0,0.251-0.204,0.456-0.456,0.456h-1.727c-0.251,0-0.456-0.204-0.456-0.456v-3.03c0-0.251,0.204-0.456,0.456-0.456h1.727c0.251,0,0.456,0.204,0.456,0.456c0,0.251-0.204,0.456-0.456,0.456h-1.271v0.814H17.337z" />
                    </svg>
                    <span>LINE Pay</span>
                  </div>
                </div>
                
                <div 
                  className={`border ${paymentMethod === 'bank' ? 'border-mahathai-primary bg-mahathai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahathai-primary transition-colors text-center`}
                  onClick={() => setPaymentMethod('bank')}
                >
                  <div className="flex flex-col items-center justify-center">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="h-8 w-8 mb-2" 
                      fill="currentColor"
                    >
                      <path d="M4 10H20V17H4V10ZM4 7H20V4H4V7ZM12 19C13.1046 19 14 18.1046 14 17H10C10 18.1046 10.8954 19 12 19ZM2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V18C22 18.5523 21.5523 19 21 19H15.9286C15.9752 19.3231 16 19.6575 16 20C16 21.1046 16.8954 22 18 22H3C2.44772 22 2 21.5523 2 21V3Z" />
                    </svg>
                    <span>โอนเงิน</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-md mb-4">
                <p className="text-sm text-gray-600">
                  * ใบเสร็จรับเงินอิเล็กทรอนิกส์จะถูกส่งมายังอีเมล์ จะมาภายหลังจากที่ชำระเงินเรียบร้อยแล้ว
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="flex items-center font-semibold text-lg mb-4">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">3</span>
                ข้อมูลใบเสร็จรับเงิน
              </h3>
              
              <div className="mb-4">
                <RadioGroup defaultValue="บุคคล" className="flex mb-4" onValueChange={setDonorType}>
                  <div className="flex items-center mr-6">
                    <RadioGroupItem value="บุคคล" id="person" />
                    <Label htmlFor="person" className="ml-2">บุคคล</Label>
                  </div>
                  <div className="flex items-center">
                    <RadioGroupItem value="นิติบุคคล" id="company" />
                    <Label htmlFor="company" className="ml-2">นิติบุคคล</Label>
                  </div>
                </RadioGroup>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstname" className="text-sm">ชื่อ*</Label>
                    <Input 
                      id="firstname" 
                      placeholder="ชื่อ" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastname" className="text-sm">เบอร์มือถือ*</Label>
                    <Input 
                      id="lastname" 
                      placeholder="เบอร์มือถือ" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-md mb-6">
                <p className="text-sm text-gray-600">
                  * ใบเสร็จรับเงินและข้อมูลการชำระเงินจะถูกส่งทางอีเมล์ หากเป็นการบริจาคแบบ e-Donation
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  หากคุณมีต้องการอื่น สามารถติดต่อเพิ่มเติมที่ช่องทางการติดต่อด้านล่าง หรือ โทร และเจ้าหน้าที่จะดูแลคุณอย่างเต็มที่
                </p>
              </div>
            </div>
            
            <div className="flex justify-between">
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
