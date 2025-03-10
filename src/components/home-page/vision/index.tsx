// pages/vision-mission.tsx

import Image from 'next/image';

export default function VisionMission() {
  return (
      <div className="container mx-auto py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                  <h1 className="text-3xl font-bold text-[#DAB87A] mb-4">
                      TẦM NHÌN
                  </h1>
                  <p className="italic text-gray-600 max-w-lg text-lg">
                      Trở thành biểu tượng niềm tin hàng đầu Việt Nam về sản
                      phẩm dinh dưỡng và sức khỏe phục vụ cuộc sống con người
                  </p>

                  <h2 className="mt-16 text-3xl font-bold text-[#003DA5]">
                      SỨ MỆNH
                  </h2>
                  <p className="italic text-gray-600 max-w-lg mt-4 text-lg">
                      Vinamilk cam kết mang đến cho cộng đồng nguồn dinh dưỡng
                      và sức khỏe tốt nhất, thông qua các sản phẩm chất lượng
                      cao và dịch vụ xuất sắc.
                  </p>
              </div>
              <Image
                  src="/images/vision-mission.jpg"
                  alt="Tổng Giám đốc"
                  width={1000}
                  height={1200}
                  className="w-full rounded-lg shadow-xl"
              />
          </div>
      </div>
  );
}
