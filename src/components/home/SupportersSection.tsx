
import { AspectRatio } from "@/components/ui/aspect-ratio";

const supportersData = [
  {
    id: 1,
    name: "Central Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Central_Group_Logo.svg/2560px-Central_Group_Logo.svg.png",
    alt: "Central Group logo"
  },
  {
    id: 2,
    name: "FWD Insurance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/FWD_logo.svg/2560px-FWD_logo.svg.png",
    alt: "FWD Insurance logo"
  },
  {
    id: 3,
    name: "Muang Thai Life Assurance",
    logo: "https://www.muangthai.co.th/MTLWeb/wp-content/uploads/2023/10/Logo_MTL.jpg",
    alt: "Muang Thai Life Assurance logo"
  },
  {
    id: 4,
    name: "PTT Public Company Limited",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/PTT_Logo.svg/2560px-PTT_Logo.svg.png",
    alt: "PTT logo"
  },
  {
    id: 5,
    name: "Thai Airways",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Thai_Airways_Logo.svg/1024px-Thai_Airways_Logo.svg.png",
    alt: "Thai Airways logo"
  },
  {
    id: 6,
    name: "Bangkok Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Bangkok_Bank_logo.svg/1200px-Bangkok_Bank_logo.svg.png",
    alt: "Bangkok Bank logo"
  }
];

const SupportersSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ผู้ให้การสนับสนุน
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ขอขอบคุณองค์กรและบริษัทที่ให้การสนับสนุนการดำเนินงานของเรา
            เพื่อร่วมสร้างการเปลี่ยนแปลงที่ดีให้กับสังคมไทย
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {supportersData.map((supporter) => (
            <div key={supporter.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <AspectRatio ratio={16/9} className="flex items-center justify-center p-2">
                <img 
                  src={supporter.logo} 
                  alt={supporter.alt} 
                  className="max-h-full max-w-full object-contain"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportersSection;
