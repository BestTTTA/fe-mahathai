
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="bg-mahathai-light py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-mahathai-dark mb-4 font-kanit">
              เกี่ยวกับมูลนิธิฯ
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ (THE REDEMPTORIST FOUNDATION FOR PEOPLE WITH DISABILITIES)
            </p>
          </div>

          <div className="mb-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-mahathai-dark font-kanit text-center">
                  คณะผู้บริหารมูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {/* First row - centered */}
                  <div className="col-span-1 md:col-span-3">
                    <div className="text-center max-w-sm mx-auto">
                      <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                        <img 
                          src="https://www.mahatai.org/wp-content/uploads/2024/03/%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%B8%E0%B8%A1-1.png" 
                          alt="Board member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-mahathai-dark font-kanit">บาทหลวง สุขุม ธนะสิงห์, C.Ss.R.</h3>
                      <p className="text-gray-600">ประธานกรรมการ</p>
                    </div>
                  </div>

                  {/* Remaining members */}
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                      <img 
                        src="https://www.mahatai.org/wp-content/uploads/2021/04/%E0%B8%9A%E0%B8%B2%E0%B8%97%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%98%E0%B8%99%E0%B8%B9-%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%AD%E0%B8%87-C.Ss_.R2.png" 
                        alt="Board member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">บาทหลวง ธนู กระทอง, C.Ss.R.</h3>
                    <p className="text-gray-600">รองประธานกรรมการและเหรัญญิก</p>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                      <img 
                        src="https://www.mahatai.org/wp-content/uploads/2023/04/%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%A7%E0%B8%B4%E0%B8%9A%E0%B8%B9%E0%B8%A3%E0%B8%A2%E0%B9%8C-1-300x300.jpg" 
                        alt="Board member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">บาทหลวง วิบูลย์ ลิมปนวุฒิ, C.Ss.R.</h3>
                    <p className="text-gray-600">กรรมการ</p>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                      <img 
                        src="https://www.mahatai.org/wp-content/uploads/2023/06/%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A3%E0%B8%95%E0%B8%B4-3-300x300.jpg" 
                        alt="Board member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">บาทหลวง ก่อเกียรติ ดีศรี, C.Ss.R.</h3>
                    <p className="text-gray-600">กรรมการ</p>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                      <img 
                        src="https://www.mahatai.org/wp-content/uploads/2024/03/%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%AD%E0%B8%A0%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%97%E0%B8%98%E0%B8%B4%E0%B9%8C.png" 
                        alt="Board member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">บาทหลวง อภิสิทธิ์ กฤษราลัมณ์, C.Ss.R.</h3>
                    <p className="text-gray-600">กรรมการ</p>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                      <img 
                        src="https://www.mahatai.org/wp-content/uploads/2024/03/%E0%B8%8B%E0%B8%B4%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A0%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%93%E0%B8%B5-300x300.png" 
                        alt="Board member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">ซิสเตอร์ ภาวิณี พิชัยศรีสวัสดิ์, IJ</h3>
                    <p className="text-gray-600">กรรมการ</p>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                      <img 
                        src="https://www.mahatai.org/wp-content/uploads/2021/06/%E0%B8%AD.%E0%B8%95%E0%B8%B1%E0%B9%8B%E0%B8%99-5-300x300.png" 
                        alt="Board member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">ดร.สุภรธรรม มงคลสวัสดิ์</h3>
                    <p className="text-gray-600">กรรมการและเลขาธิการ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3">
                    <div className="aspect-square bg-gray-200 rounded-lg">
                    <img 
                        src="https://www.mahatai.org/wp-content/uploads/2021/05/%E0%B8%9E%E0%B8%B4%E0%B8%98%E0%B8%B5-602x650.jpg" 
                        alt="Board member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-xl font-bold mb-4 text-mahathai-dark font-kanit">
                      บาทหลวงเรย์มอนด์ อัลลีน เบรนนัน (พ่อเรย์)
                    </h2>
                    <p className="text-gray-600 mb-4">
                      ประวัติย่อ ของ บาทหลวงเรย์มอนด์ อัลลีน เบรนนัน หรือ คุณพ่อเรย์มอนล์ แอลลีน เบร็นนัน ชายผู้ยิ้มเสมอ หรือที่เรียกกันทั่วไปว่า "พ่อเรย์" เป็นชาวอเมริกันเชื้อสายไอริซ เป็นบุตรคนที่ 2 ในจำนวนพี่น้อง 3 คน
                    </p>
                    <p className="text-gray-600">
                      ท่านเกิดเมื่อวันที่ 7 ธันวาคม ค.ศ.1932 (พ.ศ.2475) ที่ชิคาโก มลรัฐอิลลินอยส์ ประเทศสหรัฐอเมริกา เมืองที่ท่านและครอบครัวอาศัยอยู่ เป็นแหล่งความเจริญทางด้านเกษตรกรรมและอุตสาหกรรม ชีวิตในวัยเด็กของท่านอยู่ในบรรยากาศของครอบครัวคาทอลิกที่เคร่งครัด ท่านสนใจศึกษาในเรื่องของศาสนา และปรัชญา
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-gray-600 mb-4">
                    บาทหลวง ดอน (พี่ชาย) เล่าว่า ท่านใฝ่ฝัน และมีความตั้งใจอย่างแน่วแน่เมื่อเติบโตขึ้นจะทำงานเพื่อช่วยเหลือคนยากจน ผู้ยากไร้และขาดที่พึ่ง
                  </p>
                  <p className="text-gray-600 mb-4">
                    วันที่ 2 สิงหาคม ค.ศ.1954 (พ.ศ.2497) ท่านได้ตัดสินใจ เข้าบ้านเณรของคณะพระมหาไถ่ โดยได้รับแรงบันดาลใจอย่างมากจากคณะพระมหาไถ่ และจากความเชื่อความศรัทธา ที่ได้รับการหล่อหลอมปลูกฝังจากครอบครัว
                  </p>
                  <p className="text-gray-600 mb-4">
                    จากกระแสเรียกที่เกิดขึ้นนั้นไม่น่าสงสัยเลยว่าพระเป็นเจ้าได้ทรงมีแผนการจัดเตรียมท่านมาเป็นมิชชั่นนารีในประเทศไทย ท่านได้ดำเนินชีวิตสามเณรในสามเณราลัยใหญ่ ที่เคริกวู๊ด มลรัฐมิซูรี่ ผู้ดูแลระเบียบของสามเณรคุมเข้มความคิดอันเป็นอิสระของท่าน อย่างไรก็ตาม ท่านมีความนอบน้อมต่อผู้ใหญ่เสมอ ผู้ใหญ่ที่ดูแลรู้จักทั้งข้อดีข้อเสียของท่านเป็นอย่างดี อีกทั้งยังแนะนำให้ท่านได้ดำเนินชีวิตเข้าสู่ฐานะอันสมบูรณ์แบบของชีวิตนักบวช
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="aspect-video bg-gray-200 rounded-lg">
                  <img 
                        src="https://www.mahatai.org/wp-content/gallery/e0b89ce0b8b9e0b989e0b881e0b988e0b8ade0b895e0b8b1e0b989e0b887/%E0%B9%84%E0%B8%AB%E0%B8%A7%E0%B8%84%E0%B8%A3%E0%B8%B9.jpg" 
                        alt="Board member"
                        className="w-full h-full object-cover"
                      />
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg">
                  <img 
                        src="https://www.mahatai.org/wp-content/gallery/e0b89ce0b8b9e0b989e0b881e0b988e0b8ade0b895e0b8b1e0b989e0b887/%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%82%E0%B9%88%E0%B8%AD%E0%B8%A23.jpg" 
                        alt="Board member"
                        className="w-full h-full object-cover"
                      />
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg">
                  <img 
                        src="https://www.mahatai.org/wp-content/gallery/e0b89ce0b8b9e0b989e0b881e0b988e0b8ade0b895e0b8b1e0b989e0b887/1_FRRAY1.jpg" 
                        alt="Board member"
                        className="w-full h-full object-cover"
                      />
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg">
                  <img 
                        src="https://www.mahatai.org/wp-content/gallery/e0b89ce0b8b9e0b989e0b881e0b988e0b8ade0b895e0b8b1e0b989e0b887/CONGET02.jpg" 
                        alt="Board member"
                        className="w-full h-full object-cover"
                      />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
