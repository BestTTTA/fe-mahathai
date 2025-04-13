
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Youtube, Globe } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-mahathai-light py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-mahathai-dark mb-4 font-kanit">
              ติดต่อเรา
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ พร้อมให้บริการและตอบคำถามของท่าน
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <div className="h-64 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246356.31277651723!2d100.83855520040706!3d12.870618591263952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310296e572383963%3A0xc39a1bf496f65a63!2z4Lih4Li54Lil4LiZ4Li04LiY4Li04Lie4Lij4Liw4Lih4Lir4Liy4LmE4LiW4LmI4LmA4Lie4Li34LmI4Lit4LiB4Liy4Lij4Lie4Lix4LiS4LiZ4Liy4LiE4LiZ4Lie4Li04LiB4Liy4Lij!5e0!3m2!1sth!2sth!4v1681275074959!5m2!1sth!2sth" 
                    className="absolute inset-0 w-full h-full" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-mahathai-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 font-kanit">ที่ตั้ง</h3>
                        <p className="text-gray-600 mt-1">
                          440 อาคาร F ชั้น 1 ม.9 ต.หนองปรือ อ.บางละมุง จ.ชลบุรี 20150
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-mahathai-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 font-kanit">โทรศัพท์</h3>
                        <p className="text-gray-600 mt-1">
                          <a href="tel:025724042" className="hover:text-mahathai-primary transition">02-572-4042 ต่อ 8300</a>
                          <br />
                          <a href="tel:0899367598" className="hover:text-mahathai-primary transition">089-936-7598 (คุณทรงศักดิ์ รีฮุง)</a>
                          <br />
                          <span className="text-gray-500">โทรสาร: 02-572-4042 กด 9993 (โทรสารอัตโนมัติ)</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-mahathai-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 font-kanit">อีเมล</h3>
                        <p className="text-gray-600 mt-1">
                          <a href="mailto:info@mahatai.org" className="hover:text-mahathai-primary transition">info@mahatai.org</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-mahathai-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 font-kanit">ตู้ ปณ.</h3>
                        <p className="text-gray-600 mt-1">
                          11 เมืองพัทยา ชลบุรี 20260
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-mahathai-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-900 font-kanit">เวลาทำการ</h3>
                        <p className="text-gray-600 mt-1">
                          วันจันทร์ ถึง วันศุกร์ เวลา 08:00 น. - 17:00 น.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-mahathai-dark font-kanit">
                    ติดตามเรา
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="https://www.facebook.com/mahatai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition"
                    >
                      <Facebook className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">มูลนิธิพระมหาไถ่</span>
                    </a>
                    <a 
                      href="https://line.me/R/ti/p/@994kykzq" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="w-5 h-5 flex items-center justify-center bg-green-500 rounded-md text-white text-xs font-bold">L</div>
                      <span className="text-gray-700">มูลนิธิพระมหาไถ่</span>
                    </a>
                    <a 
                      href="https://www.tiktok.com/@mahatai_official" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition"
                    >
                      <div className="w-5 h-5 flex items-center justify-center bg-black rounded-md text-white text-xs font-bold">T</div>
                      <span className="text-gray-700">มูลนิธิพระมหาไถ่</span>
                    </a>
                    <a 
                      href="https://www.youtube.com/c/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A31479%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C/videos" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition"
                    >
                      <Youtube className="w-5 h-5 text-red-600" />
                      <span className="text-gray-700">MAHATAI CHANEL</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6 text-mahathai-dark font-kanit">ส่งข้อความถึงเรา</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          ชื่อ-นามสกุล
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mahathai-primary focus:border-transparent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          อีเมล
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mahathai-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        เบอร์โทรศัพท์
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mahathai-primary focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        เรื่อง
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mahathai-primary focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        ข้อความ
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mahathai-primary focus:border-transparent"
                      ></textarea>
                    </div>

                    <Button className="w-full bg-mahathai-primary hover:bg-mahathai-secondary">
                      ส่งข้อความ
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
