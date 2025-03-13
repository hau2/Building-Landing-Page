"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TongQuan() {
  return (
    <div>
      <div className="pl-[32px] pr-[32px] my-[32px]">
        <div className="max-w-7xl mx-auto my-[16px] bg-white border-1 overflow-hidden flex flex-col sm:flex-row">
          {/* Cột bên trái: Hình ảnh và Slogan */}
          <div className="relative bg-blue-100 flex flex-1 items-center justify-center p-10">
            <Image
              src="/images/tongquan1.jpg" // Thay thế bằng đường dẫn ảnh thực tế
              alt="Company Building"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="absolute z-10 top-[20px] right-[20px]">
              <h2 className="text-orange-500 font-semibold text-2xl leading-tight uppercase">
                BUILD TRUST <br /> CREATE VALUE
              </h2>
            </div>
          </div>

          {/* Cột bên phải: Thông tin công ty */}
          <div className="flex-1 p-10 bg-white text-gray-800">
            <div className="grid grid-cols-2 gap-y-4">
              <div className="font-semibold">Tên đầy đủ</div>
              <div>CÔNG TY CỔ PHẦN XÂY DỰNG BÌNH DOANH</div>

              <div className="font-semibold">Tên viết tắt</div>
              <div>BÌNH DOANH</div>

              <div className="font-semibold">Mã số thuế</div>
              <div>031 447 66 89</div>

              <div className="font-semibold">Trụ sở chính</div>
              <div>
                204/9 Nguyễn Văn Hưởng, phường Thảo Điền, Thành phố Thủ Đức,
                Thành phố Hồ Chí Minh
              </div>

              <div className="font-semibold">Tel – Fax</div>
              <div>(+84) 28 3620 5151</div>

              <div className="font-semibold">Website</div>
              <div>
                <a
                  href="https://centralcons.vn"
                  className="text-blue-500 hover:underline"
                >
                  binhdoanh.vn
                </a>
              </div>

              <div className="font-semibold">Email</div>
              <div>
                <a
                  href="mailto:contact@centralcons.vn"
                  className="text-blue-500 hover:underline"
                >
                  contact@binhdoanh.vn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto my-12 flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Cột bên trái: Nội dung */}
          <div className="w-full md:w-1/2">
            <h2 className="text-orange-500 font-bold text-3xl md:text-4xl mb-4">
              {'"Xây Dựng Niềm Tin, Kiến Tạo Giá Trị"'}
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              Công ty cổ phần tư vấn thiết kế xây dựng Bình Doanh được thành lập
              năm 2006, tự hào là đơn vị dẫn đầu khu vực trong việc ứng dụng các
              giải pháp công nghệ hiện đại vào lĩnh vực xây dựng, nhằm mang đến
              cho khách hàng những công trình chất lượng cao, thân thiện với môi
              trường và tiết kiệm chi phí.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              Đội ngũ kỹ sư giàu kinh nghiệm của chúng tôi luôn nỗ lực nghiên
              cứu và triển khai các công nghệ mới như hệ thống mô phỏng dự án
              (BIM), giúp quản lý hiệu quả toàn bộ quy trình từ giai đoạn thiết
              kế đến khi hoàn thiện, giảm thiểu rủi ro và tối ưu thời gian. Đến
              với Bình Doanh, quý khách sẽ được tư vấn về thủ tục pháp lý, lựa
              chọn vật tư, giá cả xây dựng và sẽ được miễn giảm phần trăm chi
              phí thiết kế nếu các chủ đầu tư chọn công ty Bình Doanh chúng tôi
              là đơn vị nhà thầu thi công.
            </p>
            <p className="text-gray-800 leading-relaxed">
              BÌNH DOANH luôn dẫn đầu và khác biệt bởi sự uy tín, chính trực
              trong cam kết và cung cách làm việc chuyên nghiệp. Các dự án của
              chúng tôi luôn có tiến độ thi công ưu việt, chất lượng và thẩm mỹ
              cao.
            </p>
          </div>

          {/* Cột bên phải: Ảnh */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/tongquan2.jpg" // Thay bằng đường dẫn ảnh thực tế
              alt="Construction Site"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="p-[32px] flex items-center justify-center">
        <a
          href="https://pwa-app.leconghau.id.vn/BINH_DOANH_GROUP.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="m-auto h-[60px] w-[150px] rounded-2xl">
            E-Brochure
          </Button>
        </a>
      </div>
    </div>
  );
}
