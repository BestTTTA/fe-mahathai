
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import NewsCard from "@/components/news/NewsCard";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const NewsAndEvents = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-kanit font-bold text-mahathai-dark mb-10 text-left">
          ข่าวสารและผลงาน
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <NewsCard
            image="/lovable-uploads/a4821d3e-49c3-426e-beab-586b70330202.png"
            title="มูลนิธิฯ ร่วมนำไร่เพื่อการพัฒนาคนพิการ ร่วมการสัมมนา "คนพิการไทยกับโอกาสในโลกยุคใหม่""
            url="/news/1"
          />
          <NewsCard
            image="/lovable-uploads/d5a0aee6-d6de-4d97-86b0-4c0bf1101cff.png"
            title="มูลนิธิฯ ให้การต้อนรับนักศึกษาโครงการฝึกอบรมหลักสูตร "ข้าราชการท้องถิ่นระดับชำนาญการพิเศษ" รุ่นที่ 21"
            url="/news/2"
          />
          <NewsCard
            image="/lovable-uploads/ea9bbcf8-1200-4aea-84af-d5336c66ea78.png"
            title="ต้อนรับคณะศึกษาดูงานอาจารย์และนักศึกษาจากมหาวิทยาลัยบูรพ์"
            url="/news/3"
          />
          <NewsCard
            image="/lovable-uploads/a4821d3e-49c3-426e-beab-586b70330202.png"
            title="Meatstuffpattaya ร่วมแบ่งปันให้กับมูลนิธิฯ"
            url="/news/4"
          />
        </div>

        <div className="flex justify-center mb-16">
          <Button className="px-10 py-6 rounded-full bg-custom-orange hover:bg-custom-orange/90 text-white">
            ดูเพิ่ม
          </Button>
        </div>

        <h1 className="text-3xl font-kanit font-bold text-mahathai-dark mb-10 text-left">
          ข่าวประชาสัมพันธ์
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <NewsCard
            image="/lovable-uploads/ea9bbcf8-1200-4aea-84af-d5336c66ea78.png"
            title="อีก 16 วันนับถอยหลัง ที่จะถึงงานบุญกองข้าฟ้ามหากุศล"
            url="/news/5"
          />
          <NewsCard
            image="/lovable-uploads/d5a0aee6-d6de-4d97-86b0-4c0bf1101cff.png"
            title='"รักของแม่ รักแท้ไร้เงื่อนไข"'
            url="/news/6"
          />
          <NewsCard
            image="/lovable-uploads/a4821d3e-49c3-426e-beab-586b70330202.png"
            title='ขอเชิญชมการแสดง "สุดยอดนักรำอาวุโธเด็กพิเศษ"'
            url="/news/7"
          />
          <NewsCard
            image="/lovable-uploads/ea9bbcf8-1200-4aea-84af-d5336c66ea78.png"
            title="ประชาสัมพันธ์ การแข่งขันโบว์ลิ่งการกุศล ชิงถ้วยรางวัลเกียรติยศ"
            url="/news/8"
          />
        </div>

        <div className="flex justify-center mb-16">
          <Button className="px-10 py-6 rounded-full bg-custom-orange hover:bg-custom-orange/90 text-white">
            ดูเพิ่ม
          </Button>
        </div>

        <h1 className="text-3xl font-kanit font-bold text-mahathai-dark mb-10 text-left">
          ผู้ให้การสนับสนุน
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <NewsCard
            image="/lovable-uploads/a4821d3e-49c3-426e-beab-586b70330202.png"
            title="Meatstuffpattaya ร่วมแบ่งปันให้กับมูลนิธิฯ"
            url="/news/9"
          />
          <NewsCard
            image="/lovable-uploads/d5a0aee6-d6de-4d97-86b0-4c0bf1101cff.png"
            title="ขอบคุณจากใจ อิ่มท้อง อิ่มใจ"
            url="/news/10"
          />
          <NewsCard
            image="/lovable-uploads/ea9bbcf8-1200-4aea-84af-d5336c66ea78.png"
            title="โรงแรมราวินทรา บีช รีสอร์ท แอนด์ สปา ร่วมทำ CSR"
            url="/news/11"
          />
          <NewsCard
            image="/lovable-uploads/a4821d3e-49c3-426e-beab-586b70330202.png"
            title="กิจกรรม CSR สถาบันพระปกเกล้า"
            url="/news/12"
          />
        </div>

        <div className="flex justify-center mt-10 mb-16">
          <Button className="px-10 py-6 rounded-full bg-custom-orange hover:bg-custom-orange/90 text-white">
            ดูเพิ่ม
          </Button>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </Layout>
  );
};

export default NewsAndEvents;
