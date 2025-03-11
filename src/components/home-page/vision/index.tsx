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
                  Trở thành biểu tượng uy tín hàng đầu Việt Nam trong lĩnh vực xây dựng và hạ tầng, đóng góp vào sự phát triển bền vững của đất nước.
                  </p>

                  <h2 className="mt-16 text-3xl font-bold text-[#003DA5]">
                      SỨ MỆNH
                  </h2>
                  <p className="italic text-gray-600 max-w-lg mt-4 text-lg">
                  Chúng tôi cam kết cung cấp các giải pháp xây dựng chất lượng cao, đáp ứng nhu cầu xã hội, đảm bảo an toàn và tính bền vững cho mọi dự án.
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
