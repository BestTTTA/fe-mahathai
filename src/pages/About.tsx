
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
                <h2 className="text-xl font-bold mb-4 text-mahathai-dark font-kanit">
                  คณะผู้บริหารมูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">บาทหลวง สุขุม ธนะสิงห์, C.Ss.R.</h3>
                    <p className="text-gray-600">ประธานกรรมการ</p>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">บาทหลวง ธนู กระทอง, C.Ss.R.</h3>
                    <p className="text-gray-600">รองประธานกรรมการและเหรัญญิก</p>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">บาทหลวง วิบูลย์ ลิมปนวุฒิ, C.Ss.R.</h3>
                    <p className="text-gray-600">กรรมการ</p>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">บาทหลวง ก่อเกียรติ ดีศรี, C.Ss.R.</h3>
                    <p className="text-gray-600">กรรมการ</p>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">บาทหลวง อภิสิทธิ์ กฤษราลัมณ์, C.Ss.R.</h3>
                    <p className="text-gray-600">กรรมการ</p>
                  </div>

                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-bold text-mahathai-dark font-kanit">ซิสเตอร์ ภาวิณี พิชัยศรีสวัสดิ์, IJ</h3>
                    <p className="text-gray-600">กรรมการ</p>
                  </div>

                  <div className="text-center md:col-start-2">
                    <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
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
                    <div className="aspect-square bg-gray-200 rounded-lg"></div>
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
                  <div className="aspect-video bg-gray-200 rounded-lg"></div>
                  <div className="aspect-video bg-gray-200 rounded-lg"></div>
                  <div className="aspect-video bg-gray-200 rounded-lg"></div>
                  <div className="aspect-video bg-gray-200 rounded-lg"></div>
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
