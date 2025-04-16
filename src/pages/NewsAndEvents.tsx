
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import NewsCard from "@/components/news/NewsCard";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const NewsAndEvents = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-kanit font-light-300 text-mahathai-dark mb-10 text-left">
          ข่าวสารและผลงาน
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2025/04/488442393_980448204212679_5264969045550352452_n-360x360.jpg"
            title="มูลนิธิฯ ร่วมนำไร่เพื่อการพัฒนาคนพิการ ร่วมการสัมมนา 'คนพิการไทยกับโอกาสในโลกยุคใหม่'"
            url="/news/1"
          />
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2025/04/450097_0-360x360.jpg"
            title="มูลนิธิฯ ให้การต้อนรับนักศึกษาโครงการฝึกอบรมหลักสูตร 'ข้าราชการท้องถิ่นระดับชำนาญการพิเศษ' รุ่นที่ 21"
            url="/news/2"
          />
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2025/04/488244985_1061670965991540_6383894636023263036_n-360x360.jpg"
            title="ต้อนรับคณะศึกษาดูงานอาจารย์และนักศึกษาจากมหาวิทยาลัยบูรพ์"
            url="/news/3"
          />
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2025/03/448830_0-360x360.jpg"
            title="Meatstuffpattaya ร่วมแบ่งปันให้กับมูลนิธิฯ"
            url="/news/4"
          />
        </div>

        <div className="flex justify-center mb-16">
          <Button className="px-10 py-6 rounded-full bg-custom-orange hover:bg-custom-orange/90 text-white">
            ดูเพิ่ม
          </Button>
        </div>

        <h1 className="text-3xl font-kanit font-light-300 text-mahathai-dark mb-10 text-left">
          ข่าวประชาสัมพันธ์
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2025/02/475147893_1014046257420678_5987736214211952856_n-360x360.jpg"
            title="อีก 16 วันนับถอยหลัง ที่จะถึงงานบุญกองข้าฟ้ามหากุศล"
            url="/news/5"
          />
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2024/07/268144-360x360.jpg"
            title="'รักของแม่ รักแท้ไร้เงื่อนไข'"
            url="/news/6"
          />
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2024/01/1705290566643-360x262.jpg"
            title="ขอเชิญชมการแสดง 'สุดยอดนักรำอาวุโธเด็กพิเศษ'"
            url="/news/7"
          />
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2023/10/1696390294264-360x274.jpg"
            title="ประชาสัมพันธ์ การแข่งขันโบว์ลิ่งการกุศล ชิงถ้วยรางวัลเกียรติยศ"
            url="/news/8"
          />
        </div>

        <div className="flex justify-center mb-16">
          <Button className="px-10 py-6 rounded-full bg-custom-orange hover:bg-custom-orange/90 text-white">
            ดูเพิ่ม
          </Button>
        </div>

        <h1 className="text-3xl font-kanit font-light-300 text-mahathai-dark mb-10 text-left">
          ผู้ให้การสนับสนุน
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2025/03/448830_0.jpg"
            title="Meatstuffpattaya ร่วมแบ่งปันให้กับมูลนิธิฯ"
            url="/news/9"
          />
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2025/03/482258758_1044720951019875_1996453548843719964_n-1024x768.jpg"
            title="ขอบคุณจากใจ อิ่มท้อง อิ่มใจ"
            url="/news/10"
          />
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2024/12/424882_0-720x540.jpg"
            title="โรงแรมราวินทรา บีช รีสอร์ท แอนด์ สปา ร่วมทำ CSR"
            url="/news/11"
          />
          <NewsCard
            image="https://www.mahatai.org/wp-content/uploads/2021/11/85549-1024x402.jpg"
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
