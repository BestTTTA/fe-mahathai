
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-6xl font-light-300 text-mahatai-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">ไม่พบหน้าที่คุณกำลังค้นหา</h2>
          <p className="text-gray-600 mb-8">
            หน้าที่คุณกำลังค้นหาอาจถูกย้าย ลบ หรือไม่เคยมีอยู่ในระบบ
          </p>
          <Button className="bg-mahatai-primary hover:bg-mahatai-secondary" asChild>
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              กลับไปที่หน้าหลัก
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
