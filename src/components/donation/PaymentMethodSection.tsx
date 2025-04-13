
import { QrCode, CreditCard } from "lucide-react";

interface PaymentMethodSectionProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

const PaymentMethodSection = ({
  paymentMethod,
  setPaymentMethod
}: PaymentMethodSectionProps) => {
  return (
    <div className="mb-8">
      <h3 className="flex items-center font-semibold text-lg mb-4">
        <span className="bg-yellow-500 text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-2">2</span>
        ช่องทางการชำระเงิน
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div 
          className={`border ${paymentMethod === 'qr' ? 'border-mahathai-primary bg-mahathai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahathai-primary transition-colors text-center`}
          onClick={() => setPaymentMethod('qr')}
        >
          <div className="flex flex-col items-center justify-center">
            <QrCode className="h-8 w-8 mb-2" />
            <span>QR Code</span>
          </div>
        </div>
        
        <div 
          className={`border ${paymentMethod === 'card' ? 'border-mahathai-primary bg-mahathai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahathai-primary transition-colors text-center`}
          onClick={() => setPaymentMethod('card')}
        >
          <div className="flex flex-col items-center justify-center">
            <CreditCard className="h-8 w-8 mb-2" />
            <span>บัตรเครดิต</span>
          </div>
        </div>
        
        <div 
          className={`border ${paymentMethod === 'line' ? 'border-mahathai-primary bg-mahathai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahathai-primary transition-colors text-center`}
          onClick={() => setPaymentMethod('line')}
        >
          <div className="flex flex-col items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              className="h-8 w-8 mb-2" 
              fill="#06C755"
            >
              <path d="M19.952,13.594c0-3.545-3.559-6.424-7.93-6.424c-4.374,0-7.93,2.88-7.93,6.424c0,3.176,2.819,5.837,6.622,6.335c0.258,0.055,0.609,0.17,0.698,0.39c0.08,0.2,0.052,0.512,0.026,0.713c0,0-0.093,0.555-0.112,0.673c-0.034,0.198-0.158,0.774,0.68,0.421c0.836-0.353,4.515-2.659,6.158-4.554h0C19.256,16.122,19.952,14.921,19.952,13.594z M8.773,15.341h-1.727c-0.251,0-0.456-0.204-0.456-0.456V11.85c0-0.251,0.204-0.456,0.456-0.456c0.251,0,0.456,0.204,0.456,0.456v2.58h1.271c0.251,0,0.456,0.204,0.456,0.456C9.228,15.136,9.025,15.341,8.773,15.341z M10.934,14.885c0,0.251-0.204,0.456-0.456,0.456c-0.251,0-0.456-0.204-0.456-0.456v-3.03c0-0.251,0.204-0.456,0.456-0.456c0.251,0,0.456,0.204,0.456,0.456V14.885z M15.277,14.885c0,0.208-0.141,0.387-0.342,0.437c-0.038,0.01-0.076,0.014-0.114,0.014c-0.165,0-0.318-0.091-0.398-0.237l-1.779-2.416v2.203c0,0.251-0.204,0.456-0.456,0.456c-0.251,0-0.456-0.204-0.456-0.456v-3.03c0-0.208,0.141-0.387,0.342-0.437c0.038-0.01,0.076-0.014,0.114-0.014c0.165,0,0.318,0.091,0.398,0.237l1.779,2.416V11.85c0-0.251,0.204-0.456,0.456-0.456c0.251,0,0.456,0.204,0.456,0.456V14.885z M17.337,12.704c0.251,0,0.456,0.204,0.456,0.456c0,0.251-0.204,0.456-0.456,0.456h-1.271v0.814h1.271c0.251,0,0.456,0.204,0.456,0.456c0,0.251-0.204,0.456-0.456,0.456h-1.727c-0.251,0-0.456-0.204-0.456-0.456v-3.03c0-0.251,0.204-0.456,0.456-0.456h1.727c0.251,0,0.456,0.204,0.456,0.456c0,0.251-0.204,0.456-0.456,0.456h-1.271v0.814H17.337z" />
            </svg>
            <span>LINE Pay</span>
          </div>
        </div>
        
        <div 
          className={`border ${paymentMethod === 'bank' ? 'border-mahathai-primary bg-mahathai-light' : 'border-gray-200'} rounded-md p-4 cursor-pointer hover:border-mahathai-primary transition-colors text-center`}
          onClick={() => setPaymentMethod('bank')}
        >
          <div className="flex flex-col items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              className="h-8 w-8 mb-2" 
              fill="currentColor"
            >
              <path d="M4 10H20V17H4V10ZM4 7H20V4H4V7ZM12 19C13.1046 19 14 18.1046 14 17H10C10 18.1046 10.8954 19 12 19ZM2 3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V18C22 18.5523 21.5523 19 21 19H15.9286C15.9752 19.3231 16 19.6575 16 20C16 21.1046 16.8954 22 18 22H3C2.44772 22 2 21.5523 2 21V3Z" />
            </svg>
            <span>โอนเงิน</span>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-md mb-4">
        <p className="text-sm text-gray-600">
          * ใบเสร็จรับเงินอิเล็กทรอนิกส์จะถูกส่งมายังอีเมล์ จะมาภายหลังจากที่ชำระเงินเรียบร้อยแล้ว
        </p>
      </div>
    </div>
  );
};

export default PaymentMethodSection;
