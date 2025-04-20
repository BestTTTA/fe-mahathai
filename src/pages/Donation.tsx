
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BanknoteIcon, 
  GiftIcon, 
  GraduationCapIcon, 
  UtensilsIcon, 
  UsersIcon, 
  BoxIcon,
  PhoneIcon,
  MailIcon,
  QrCodeIcon,
  BuildingIcon
} from "lucide-react";

const DonationPage = () => {
  return (
    <Layout>
      <div className="bg-mahatai-light py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-light-300 text-mahatai-dark mb-4 font-kanit">
              บริจาค
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ร่วมเป็นส่วนหนึ่งในการพัฒนาคุณภาพชีวิตคนพิการและผู้ด้อยโอกาสในสังคมไทย
            </p>
          </div>

          {/* Donation Options */}
          <div className="mb-16">
            <h2 className="text-2xl font-light-300 mb-6 text-center text-mahatai-dark font-kanit">
              รูปแบบและรายละเอียดการสนับสนุน
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-mahatai-primary/10 rounded-full flex items-center justify-center">
                      <BanknoteIcon className="h-8 w-8 text-mahatai-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center font-kanit">บริจาคเงิน</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    สนับสนุนด้วยการบริจาคเงินผ่านช่องทางธนาคารหรือ QR Code
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-mahatai-primary/10 rounded-full flex items-center justify-center">
                      <GiftIcon className="h-8 w-8 text-mahatai-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center font-kanit">บริจาคสิ่งของ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    บริจาคสิ่งของอุปโภคบริโภคและอุปกรณ์การเรียนการสอน
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-mahatai-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCapIcon className="h-8 w-8 text-mahatai-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center font-kanit">ทุนการศึกษาคนพิการ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    สนับสนุนทุนการศึกษาให้แก่นักเรียนนักศึกษาที่พิการ
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-mahatai-primary/10 rounded-full flex items-center justify-center">
                      <UtensilsIcon className="h-8 w-8 text-mahatai-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center font-kanit">เลี้ยงอาหารคนพิการ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    ร่วมเลี้ยงอาหารกลางวันแก่นักเรียนและบุคลากรในมูลนิธิ
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-mahatai-primary/10 rounded-full flex items-center justify-center">
                      <UsersIcon className="h-8 w-8 text-mahatai-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center font-kanit">จ้างงานคนพิการ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    ร่วมจ้างงานคนพิการตามมาตรา 33 หรือฝึกงานตามมาตรา 35
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white transition-all duration-300 hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-mahatai-primary/10 rounded-full flex items-center justify-center">
                      <BoxIcon className="h-8 w-8 text-mahatai-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center font-kanit">วางตู้บริจาค</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    สนับสนุนสถานที่วางตู้รับบริจาคเพื่อช่วยเหลือคนพิการ
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Donation Details */}
          <Tabs defaultValue="money" className="mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="money">บริจาคเงิน</TabsTrigger>
              <TabsTrigger value="goods">บริจาคสิ่งของ</TabsTrigger>
              <TabsTrigger value="scholarship">ทุนการศึกษา</TabsTrigger>
              <TabsTrigger value="food">เลี้ยงอาหาร</TabsTrigger>
              <TabsTrigger value="employment">จ้างงาน</TabsTrigger>
              <TabsTrigger value="donation-box">ตู้บริจาค</TabsTrigger>
            </TabsList>
            
            <TabsContent value="money" className="border rounded-lg p-6 bg-white">
              <h3 className="text-xl font-light-300 mb-4 text-mahatai-dark font-kanit">ร่วมบริจาคผ่านช่องทางดังนี้</h3>
              
              <div className="space-y-6">
                {/* <div>
                  <h4 className="text-lg font-light-300 mb-3 text-mahatai-dark">1. โอนเงินเข้าบัญชี มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-gray-50">
                      <CardContent className="pt-6">
                        <div className="text-center mb-4">
                          <div className="inline-block p-3 rounded-full bg-mahatai-primary text-white mb-3">
                            <BuildingIcon className="h-6 w-6" />
                          </div>
                          <h5 className="text-lg font-semibold">342-3-04066-0</h5>
                        </div>
                        <p className="text-gray-600 text-center">
                          บัญชีกระแสรายวัน<br />
                          สาขาบางละมุง
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-50">
                      <CardContent className="pt-6">
                        <div className="text-center mb-4">
                          <div className="inline-block p-3 rounded-full bg-mahatai-primary text-white mb-3">
                            <BuildingIcon className="h-6 w-6" />
                          </div>
                          <h5 className="text-lg font-semibold">227-6-02845-9</h5>
                        </div>
                        <p className="text-gray-600 text-center">
                          บัญชีกระแสรายวัน<br />
                          สาขาพัทยากลาง
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div> */}
                
                <div>
                  <h4 className="text-lg font-light-300 mb-3 text-mahatai-dark">บริจาคผ่าน พร้อมเพย์ (Prompt Pay) สแกน QR code ด้านล่าง</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-gray-50">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="inline-block p-3 rounded-full bg-mahatai-primary text-white mb-3">
                            <QrCodeIcon className="h-6 w-6" />
                          </div>
                          <h5 className="text-lg font-semibold mb-2">ธนาคารกรุงเทพ</h5>
                          <div className="bg-white p-4 inline-block rounded-lg border mb-3">
                            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                              <span className="text-gray-500 text-sm">QR Code</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gray-50">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="inline-block p-3 rounded-full bg-mahatai-primary text-white mb-3">
                            <QrCodeIcon className="h-6 w-6" />
                          </div>
                          <h5 className="text-lg font-semibold mb-2">ธนาคารกรุงไทย</h5>
                          <div className="bg-white p-4 inline-block rounded-lg border mb-3">
                            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                              <span className="text-gray-500 text-sm">QR Code</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700">
                    <strong>เงินบริจาคสามารถลดหย่อนภาษีได้</strong> สามารถส่งสลิปมาเพื่อออกใบเสร็จได้ที่ มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ
                  </p>
                  <p className="text-gray-700 mt-2">
                    อีเมล: <a href="mailto:info@mahatai.org" className="text-mahatai-primary">info@mahatai.org</a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    เรื่องลดหย่อนภาษีดูได้จาก <a href="https://www.rd.go.th/th/home" target="_blank" rel="noopener noreferrer" className="text-mahatai-primary">เว็บไซต์กรมสรรพากร</a>
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="goods" className="border rounded-lg p-6 bg-white">
              <h3 className="text-xl font-light-300 mb-4 text-mahatai-dark font-kanit">ร่วมบริจาคสิ่งของอุปโภคบริโภคและอุปกรณ์การเรียนการสอน</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-light-300 mb-4 text-mahatai-dark">สิ่งของที่รับบริจาค</h4>
                  
                  <ol className="space-y-4 list-decimal list-inside text-gray-700">
                    <li>สามารถสนับสนุนของใช้ที่จำเป็น เช่น ผ้าอ้อมผู้ใหญ่ กระดาษทิชชู่ และของใช้จำเป็นอื่นๆ</li>
                    <li>สามารถสนับสนุนเครื่องอุปโภคบริโภค เช่น ข้าวสาร บะหมี่กึ่งสำเร็จรูป ปลากระป๋อง นมกล่อง เป็นต้น</li>
                    <li>สามารถสนับสนุนเป็นอุปกรณ์สำหรับใช้ในการเรียนการสอน เช่น อุปกรณ์เครื่องเขียน กระดาษ A4 และคอมพิวเตอร์เก่า โน๊ตบุ๊คเก่า เพื่อใช้ในการเรียนการสอน เป็นต้น</li>
                  </ol>
                </div>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-light-300 mb-4 text-mahatai-dark">สำหรับท่านใดที่ต้องการสนับสนุน สามารถติดต่อได้ตามรายละเอียด</h4>
                    
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <PhoneIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            โทรศัพท์: <a href="tel:025724042" className="hover:text-mahatai-primary transition">02-572-4042 ต่อ 8100</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <PhoneIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            โทรศัพท์มือถือ: <a href="tel:0899367598" className="hover:text-mahatai-primary transition">089-936-7598 (คุณทรงศักดิ์ รีฮุง)</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-5 h-5 flex items-center justify-center bg-green-500 rounded-sm text-white text-xs font-light-300 flex-shrink-0">L</div>
                        <div>
                          <p className="text-gray-700">
                            Line: มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="scholarship" className="border rounded-lg p-6 bg-white">
              <h3 className="text-xl font-light-300 mb-4 text-mahatai-dark font-kanit">ร่วมทุนการศึกษา</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    บริจาคทุนการศึกษาให้กับนักเรียน นักศึกษารายบุคคล 6,000 บาท/ปี เดือนละ 500 บาท หรือตามกำลังศรัทธา
                  </p>
                </div>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-light-300 mb-4 text-mahatai-dark">สำหรับท่านใดที่ต้องการสนับสนุน สามารถติดต่อได้ตามรายละเอียด</h4>
                    
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <PhoneIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            โทรศัพท์: <a href="tel:025724042" className="hover:text-mahatai-primary transition">02-572-4042 ต่อ 8300</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <PhoneIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            โทรศัพท์มือถือ: <a href="tel:0899367598" className="hover:text-mahatai-primary transition">089-936-7598 (คุณทรงศักดิ์ รีฮุง)</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <MailIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            อีเมล: <a href="mailto:info@mahatai.org" className="hover:text-mahatai-primary transition">info@mahatai.org</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="food" className="border rounded-lg p-6 bg-white">
              <h3 className="text-xl font-light-300 mb-4 text-mahatai-dark font-kanit">ร่วมเลี้ยงอาหารกลางวันคนพิการ</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-light-300 mb-4 text-mahatai-dark">ร่วมเลี้ยงอาหารกลางวันคนพิการ รายละเอียด ดังนี้ เลี้ยงอาหาร 5,000 บาท/มื้อ</h4>
                  
                  <ol className="space-y-4 list-decimal list-inside text-gray-700">
                    <li>วิทยาลัยเทคโนโลยีพระมหาไถ่ พัทยา<br />
                      <span className="text-sm text-gray-600 ml-6">เลี้ยงนักเรียน 170 คน และครู-เจ้าหน้าที่ 40 คน รวม 210 คน</span>
                    </li>
                    
                    <li>โรงเรียนสอนคนตาบอดพระมหาไถ่ พัทยา ในพระราชูปถัมภ์<br />
                      <span className="text-sm text-gray-600 ml-6">เลี้ยงนักเรียน 130 คน</span>
                    </li>
                    
                    <li>วิทยาลัยเทคโนโลยีพระมหาไถ่ หนองคาย ในพระราชูปถัมภ์<br />
                      <span className="text-sm text-gray-600 ml-6">เลี้ยงนักเรียน 61 คน และครู-เจ้าหน้าที่ 21 คน รวม 82 คน</span>
                    </li>
                  </ol>
                </div>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-light-300 mb-4 text-mahatai-dark">สำหรับท่านใดที่ต้องการสนับสนุน สามารถติดต่อได้ตามรายละเอียด</h4>
                    
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <PhoneIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            โทรศัพท์: <a href="tel:025724042" className="hover:text-mahatai-primary transition">02-572-4042 ต่อ 8300</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <PhoneIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            โทรศัพท์มือถือ: <a href="tel:0899367598" className="hover:text-mahatai-primary transition">089-936-7598 (คุณทรงศักดิ์ รีฮุง)</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <MailIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            อีเมล: <a href="mailto:info@mahatai.org" className="hover:text-mahatai-primary transition">info@mahatai.org</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="employment" className="border rounded-lg p-6 bg-white">
              <h3 className="text-xl font-light-300 mb-4 text-mahatai-dark font-kanit">การจ้างงานคนพิการ</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    มูลนิธิพระมหาไถ่เพื่อการพัฒนาคนพิการ เรามีรูปแบบบริการให้ท่านได้เลือกใช้บริการจ้างานคนพิการตาม มาตรา 33 หรือฝึกงานตามมาตรา 35 โดยสถานประกอบการจะได้รับการลดหย่อนภาษี และเราจะจัดทำเอกสารประสานหาคนพิการพร้อมทั้งประสานหน่วยราชการให้เรียบร้อย
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-light-300 text-mahatai-dark mb-2">(มาตรา 33)</h5>
                      <p className="text-gray-700">
                        ท่านสามารถจ้างนักเรียนคนพิการไปทำงานที่สถานประกอบการของท่านโดยตรง หรือทำงานเพื่อประโยชน์สาธารณะ โดยเรามีนักศึกษาที่จบพร้อมทำงานในหลักสูตร ดังนี้
                      </p>
                      <ol className="list-decimal list-inside mt-2 space-y-1 text-gray-700">
                        <li>
                          ใบประกาศนียบัตรวิชาชีพ (ปวช.)
                          <ul className="list-disc list-inside ml-6 mt-1 mb-2">
                            <li>สาขาเทคโนโลยีสารสนเทศ</li>
                            <li>สาขาคอมพิวเตอร์ธุรกิจ</li>
                          </ul>
                        </li>
                        <li>
                          ใบประกาศนียบัตรวิชาชีพขั้นสูง (ปวส.)
                          <ul className="list-disc list-inside ml-6 mt-1">
                            <li>สาขาเทคโนโลยีธุรกิจดิจิทัล</li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                    
                    <div>
                      <h5 className="font-light-300 text-mahatai-dark mb-2">ฝึกงาน (มาตรา 35)</h5>
                      <p className="text-gray-700">
                        โดยมีหลักสูตรให้เลือกดังนี้
                      </p>
                      <ol className="list-decimal list-inside mt-2 space-y-1 text-gray-700">
                        <li>หลักสูตรคอมพิวเตอร์และงานสำนักงาน</li>
                        <li>หลักสูตรวิชาชีพพัฒนาระบบสานสนเทศ</li>
                        <li>หลักสูตรคอมพิวเตอร์และการจัดการธุรกิจ</li>
                        <li>หลักสูตรวิชาชีพช่างอิเล็กทรอนิกส์</li>
                      </ol>
                    </div>
                    
                    <p className="text-gray-700">
                      ทั้งนี้หากคนพิการฝึกอบรมจบตามหลักสูตร มาตรา 35 แล้วหากสถานประกอบการมีความประสงค์จะรับคนพิการเข้าทำงานตามมารตา 33 มูลนิธิฯ ยินดีส่งคนพิการให้ท่านได้พิจารณา โดยท่านสามารถเข้ามามีส่วนร่วมตั้งแต่เริ่มแรกคือการคัดเลือกคนพิการเข้าฝึกงานจนจบหลักสูตรได้ (มาตรา 33 สู่ มาตรา 35) ต้องการสอบถามข้อมูลเพิ่มเติม โทร. 1479 สายด่วนคนพิการประชารัฐ ให้บริการทุกวันตลอด 24 ชั่วโมง
                    </p>
                  </div>
                </div>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-light-300 mb-4 text-mahatai-dark">สำหรับท่านใดที่ต้องการจ้างงานคนพิการ สามารถติดต่อได้ตามรายละเอียด</h4>
                    
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <PhoneIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            โทรศัพท์: <a href="tel:025724042" className="hover:text-mahatai-primary transition">02-572-4042 ต่อ 8300</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <PhoneIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            โทรศัพท์มือถือ: <a href="tel:0899367598" className="hover:text-mahatai-primary transition">089-936-7598 (คุณทรงศักดิ์ รีฮุง)</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <MailIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            อีเมล: <a href="mailto:info@mahatai.org" className="hover:text-mahatai-primary transition">info@mahatai.org</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-light-300 text-mahatai-dark mb-3">กฎหมายที่เกี่ยวข้อง</h5>
                  <p className="text-gray-700 mb-3">
                    พระราชบัญญัติส่งเสริมและพัฒนาคุณภาพชีวิตคนพิการ พ.ศ.2550 และที่แก้ไขเพิ่มเติม (ฉบับที่ 2) พ.ศ. 2556 มีการกำหนดใน 3 มาตรา คือ มาตรา 33 มาตรา 34 มาตรา 35 ที่มีเจตนารมณ์ให้คนพิการได้มีโอกาสใช้ความสามารถในการมีรายได้และพึ่งพาตนเองลดภาระของครอบครัวและสังคม ประกอบด้วย
                  </p>
                  
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>
                      <strong>มาตรา 33</strong> กำหนดให้นายจ้างหรือเจ้าของสถานประกอบการและหน่วยงานของรัฐรับคนพิการเข้าทำงานตามลักษณะของงานในสัดส่วนที่เหมาะสมในอัตรา 100 คนต่อ คนพิการ 1 คน (โดยนับจำนวนผู้ปฏิบัติงานเพื่อคำนวณจำนวนคนพิการที่ต้องรับเข้าทำงาน ณ วันที่ 1 ตุลาคม ของแต่ละปี)
                    </li>
                    <li>
                      <strong>มาตรา 34</strong> นายจ้างหรือเจ้าของสถานประกอบการที่ไม่ได้รับคนพิการเข้าทำงานตามจำนวนที่กำหนดตามมาตรา 33 ให้ส่งเงินเข้ากองทุนตามอัตราค่าจ้างขั้นต่ำคูณด้วย 365 วัน คูณด้วยจำนวนคนพิการที่ต้องรับเข้าทำงาน
                    </li>
                    <li>
                      <strong>มาตรา 35</strong> กรณีที่ไม่รับคนพิการเข้าทำงานตาม มาตรา 33 และไม่ประสงค์ส่งเงินเข้ากองทุนตาม มาตรา 34 หน่วยงานรัฐ หรือเจ้าของสถานประกอบการ อาจให้สัมปทานจัดสถานที่จำหน่ายสินค้าหรือบริการ จัดจ้างเหมาช่วงงาน ฝึกงาน หรือจัดให้มีอุปกรณ์หรือสิ่งอำนวยความสะดวก ล่ามภาษามือ หรือการช่วยเหลือต่าง ๆ ให้กับคนพิการ/ผู้ดูแลได้
                    </li>
                  </ol>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="donation-box" className="border rounded-lg p-6 bg-white">
              <h3 className="text-xl font-light-300 mb-4 text-mahatai-dark font-kanit">ร่วมวางตู้บริจาค</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    สถานที่วางตู้บริจาค ผู้มีจิตศรัทธาที่เป็นองค์กรสามารถสนับสนุนการดำเนินงานของมูลนิธิฯ โดยการให้สถานที่วางตู้บริจาคที่เหมาะสม มูลนิธิฯ จะออกหนังสือขอบคุณ การแจ้งข้อมูลข่าวสาร และการเชิญร่วมกิจกรรมสำคัญของมูลนิธิฯ ตามโอกาสที่เหมาะสม
                  </p>
                </div>
                
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="text-lg font-light-300 mb-4 text-mahatai-dark">สำหรับท่านใดที่ต้องการสนับสนุน สามารถติดต่อได้ตามรายละเอียด</h4>
                    
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <PhoneIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            โทรศัพท์: <a href="tel:025724042" className="hover:text-mahatai-primary transition">02-572-4042 ต่อ 8300</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <PhoneIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            โทรศัพท์มือถือ: <a href="tel:0899367598" className="hover:text-mahatai-primary transition">089-936-7598 (คุณทรงศักดิ์ รีฮุง)</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <MailIcon className="w-5 h-5 text-mahatai-primary flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            อีเมล: <a href="mailto:info@mahatai.org" className="hover:text-mahatai-primary transition">info@mahatai.org</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <div className="bg-mahatai-secondary/10 p-8 rounded-lg text-center">
            <h3 className="text-xl font-light-300 mb-3 text-mahatai-dark font-kanit">
              ร่วมเป็นส่วนหนึ่งในการเปลี่ยนแปลงชีวิตคนพิการให้ดีขึ้น
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              การบริจาคของท่านมีความหมายอย่างยิ่งต่อคุณภาพชีวิตของคนพิการและผู้ด้อยโอกาสในสังคมไทย
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button className="bg-mahatai-primary hover:bg-mahatai-secondary">
                บริจาคตอนนี้
              </Button>
              <Button variant="outline">
                สอบถามข้อมูลเพิ่มเติม
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonationPage;
