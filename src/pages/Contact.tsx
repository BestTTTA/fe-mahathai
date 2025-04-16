
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
            <h1 className="text-3xl md:text-4xl font-light-300 text-mahathai-dark mb-4 font-kanit">
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
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-mahathai-light flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-mahathai-primary" />
                      </div>
                      <div>
                        <h3 className="font-light-300 text-gray-900 font-kanit text-lg">มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ</h3>
                        <p className="text-gray-600 mt-1">
                          ที่ตั้ง 440 อาคาร F ชั้น 1 ม.9 ต.หนองปรือ อ.บางละมุง จ.ชลบุรี 20150
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-600">
                          โทรศัพท์ 02-572-4042 ต่อ 8300
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-custom-orange/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-custom-orange" />
                      </div>
                      <div>
                        <p className="text-gray-600">
                          โทรศัพท์มือถือ 089-936-7598 (คุณทรงศักดิ์ รีฮุง)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-5 h-5 flex items-center justify-center text-blue-600 font-light-300">F</div>
                      </div>
                      <div>
                        <p className="text-gray-600">
                          โทรสาร 02-572-4042 กด 9993 (โทรสารอัตโนมัติ)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-gray-600">
                          อีเมล : <a href="mailto:info@mahatai.org" className="text-mahathai-primary hover:underline">info@mahatai.org</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-600">
                          ตู้ ปณ. 11 เมืองพัทยา ชลบุรี 20260
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <Facebook className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600">
                          <a href="https://www.facebook.com/mahatai" className="hover:text-mahathai-primary">
                            มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <div className="w-5 h-5 flex items-center justify-center text-white font-light-300">L</div>
                      </div>
                      <div>
                        <p className="text-gray-600">
                          <a href="https://line.me/R/ti/p/@994kykzq" className="hover:text-mahathai-primary">
                            มูลนิธิพระมหาไถ่
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                        <div className="w-5 h-5 flex items-center justify-center text-white font-light-300">T</div>
                      </div>
                      <div>
                        <p className="text-gray-600">
                          <a href="https://www.tiktok.com/@mahatai_official" className="hover:text-mahathai-primary">
                            มูลนิธิพระมหาไถ่
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                        <Youtube className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-600">
                          <a href="https://www.youtube.com/c/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A31479%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C/videos" className="hover:text-mahathai-primary">
                            รายการ Mahatai Chanel
                          </a>
                        </p>
                      </div>
                    </div>
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
                        <label htmlFor="name" className="text-sm font-light-300 text-gray-700">
                          ชื่อ-นามสกุล
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mahathai-primary focus:border-transparent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-light-300 text-gray-700">
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
                      <label htmlFor="phone" className="text-sm font-light-300 text-gray-700">
                        เบอร์โทรศัพท์
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mahathai-primary focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-light-300 text-gray-700">
                        เรื่อง
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-mahathai-primary focus:border-transparent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-light-300 text-gray-700">
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
