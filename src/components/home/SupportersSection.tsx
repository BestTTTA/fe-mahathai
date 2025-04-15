
import { AspectRatio } from "@/components/ui/aspect-ratio";

const supportersData = [
  {
    id: 1,
    name: "Central Group",
    logo: "https://scontent.fnak3-1.fna.fbcdn.net/v/t39.30808-6/347647427_639480968205671_8860404156229141131_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGV1c9JQ3Jq8fD3YISHcninUdqEzVsAaT5R2oTNWwBpPocfDHqkRKjuftQ4KLzwo5EF2GpdkfpnaqwTlZDIj2u5&_nc_ohc=cZo4wlewDXkQ7kNvwHP-moL&_nc_oc=Adl26Em73HLKupGH5TpUzZ8cVBbgPTrnu_iM5-tj6gFgaerr_wAVMuR4AqTvqO66nWlE_bOYIvmyKqd_qzDSGWzh&_nc_zt=23&_nc_ht=scontent.fnak3-1.fna&_nc_gid=Zf06CVbxqdt-kuAE4vdyXQ&oh=00_AfGHOG93EAeaTgKwz7GCmCi3p64bhJHktmK0G9NUF0udlg&oe=6803D3CF",
    alt: "Central Group logo"
  },
  {
    id: 2,
    name: "FWD Insurance",
    logo: "https://eb.fwd.co.th/hrbroker/web/images/allianz-logo-inv-cover-letter.png",
    alt: "FWD Insurance logo"
  },
  {
    id: 3,
    name: "Muang Thai Life Assurance",
    logo: "https://apea.asia/wp-content/uploads/2022/06/muang-thai-logo-2-ib.png",
    alt: "Muang Thai Life Assurance logo"
  },
  {
    id: 4,
    name: "PTT Public Company Limited",
    logo: "https://yt3.googleusercontent.com/ytc/AIdro_nv9US86r5_jhaXxEO9twLR9OqcgzOyDnh3sQC2MQAEX2s=s900-c-k-c0x00ffffff-no-rj",
    alt: "PTT logo"
  },
  {
    id: 5,
    name: "Thai Airways",
    logo: "https://assets.domesticflightsthailand.com/domestic-flights-thailand/assets/lfv9wlcy4s0okko8?key=700x467",
    alt: "Thai Airways logo"
  },
  {
    id: 6,
    name: "Bangkok Bank",
    logo: "https://fortunetown.co.th/wp-content/uploads/2021/09/Bangkok-Bank.jpg",
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
                  className="max-h-full max-w-full object-contain rounded-[30px]"
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
