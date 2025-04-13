
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface DonorInfoSectionProps {
  firstName: string;
  setFirstName: (name: string) => void;
  lastName: string;
  setLastName: (name: string) => void;
  donorType: string;
  setDonorType: (type: string) => void;
}

const DonorInfoSection = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  donorType,
  setDonorType
}: DonorInfoSectionProps) => {
  return (
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
  );
};

export default DonorInfoSection;
