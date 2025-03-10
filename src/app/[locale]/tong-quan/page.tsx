"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TongQuan() {
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/duan.png"
          alt="Background"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-10 text-white h-full">
          <h1 className="text-5xl h-full flex justify-center items-center">
            Tổng Quan
          </h1>
        </div>
      </div>
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
              BÌNH DOANH được hình thành và phát triển với khát khao tạo dựng nên
              những công trình kiến trúc kỳ vĩ có độ bền đến hàng thế kỷ.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              Sứ mệnh của chúng tôi qua mỗi dự án không chỉ là xây dựng đơn
              thuần mà còn định hình một nền tảng sống tốt hơn. Chúng tôi tự hào
              góp phần trong việc phát triển đô thị gắn liền với các mục tiêu
              tăng trưởng kinh tế xã hội. Với tinh thần tiên phong, công nghệ
              tiên tiến, BÌNH DOANH từng bước nâng cao chất lượng cuộc sống, kiến
              tạo vị thế lâu dài và bền vững tại Việt Nam và khu vực Đông Nam Á.
            </p>
            <p className="text-gray-800 leading-relaxed">
              BÌNH DOANH luôn dẫn đầu và khác biệt bởi sự uy tín, chính trực trong
              cam kết và cung cách làm việc chuyên nghiệp. Các dự án của chúng
              tôi luôn có tiến độ thi công ưu việt, chất lượng và thẩm mỹ cao.
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
      <div className="p-[64px]">
        <h2 className="text-black/80 font-semibold text-[32px]">
          Nhân sự cấp cao
        </h2>
        <div className="my-[16px] flex flex-row items-center justify-center gap-[32px]">
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
              <Image
                src={"/images/nhansu1.png"}
                width={200}
                height={200}
                alt="nhansu"
              />
            </div>
            <h5 className="font-semibold text-[16px] text-orange-800/70">
              Trần Quang Tuấn
            </h5>
            <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
              Giám đốc điều hành
            </p>
            <Link
              className="text-[14px] text-blue-800 italic font-semibold"
              href={"/"}
            >
              Xem thêm
            </Link>
          </div>
        </div>
        <div className="my-[16px] flex flex-row items-center justify-center gap-[32px]">
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
              <Image
                src={"/images/nhansu1.png"}
                width={200}
                height={200}
                alt="nhansu"
              />
            </div>
            <h5 className="font-semibold text-[16px] text-orange-800/70">
              Trần Quang Tuấn
            </h5>
            <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
              Giám đốc điều hành
            </p>
            <Link
              className="text-[14px] text-blue-800 italic font-semibold"
              href={"/"}
            >
              Xem thêm
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
              <Image
                src={"/images/nhansu1.png"}
                width={200}
                height={200}
                alt="nhansu"
              />
            </div>
            <h5 className="font-semibold text-[16px] text-orange-800/70">
              Trần Quang Tuấn
            </h5>
            <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
              Giám đốc điều hành
            </p>
            <Link
              className="text-[14px] text-blue-800 italic font-semibold"
              href={"/"}
            >
              Xem thêm
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
              <Image
                src={"/images/nhansu1.png"}
                width={200}
                height={200}
                alt="nhansu"
              />
            </div>
            <h5 className="font-semibold text-[16px] text-orange-800/70">
              Trần Quang Tuấn
            </h5>
            <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
              Giám đốc điều hành
            </p>
            <Link
              className="text-[14px] text-blue-800 italic font-semibold"
              href={"/"}
            >
              Xem thêm
            </Link>
          </div>
        </div>
        <div className="my-[16px] flex flex-row items-center justify-center gap-[32px]">
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
              <Image
                src={"/images/nhansu1.png"}
                width={200}
                height={200}
                alt="nhansu"
              />
            </div>
            <h5 className="font-semibold text-[16px] text-orange-800/70">
              Trần Quang Tuấn
            </h5>
            <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
              Giám đốc điều hành
            </p>
            <Link
              className="text-[14px] text-blue-800 italic font-semibold"
              href={"/"}
            >
              Xem thêm
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
              <Image
                src={"/images/nhansu1.png"}
                width={200}
                height={200}
                alt="nhansu"
              />
            </div>
            <h5 className="font-semibold text-[16px] text-orange-800/70">
              Trần Quang Tuấn
            </h5>
            <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
              Giám đốc điều hành
            </p>
            <Link
              className="text-[14px] text-blue-800 italic font-semibold"
              href={"/"}
            >
              Xem thêm
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
              <Image
                src={"/images/nhansu1.png"}
                width={200}
                height={200}
                alt="nhansu"
              />
            </div>
            <h5 className="font-semibold text-[16px] text-orange-800/70">
              Trần Quang Tuấn
            </h5>
            <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
              Giám đốc điều hành
            </p>
            <Link
              className="text-[14px] text-blue-800 italic font-semibold"
              href={"/"}
            >
              Xem thêm
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
              <Image
                src={"/images/nhansu1.png"}
                width={200}
                height={200}
                alt="nhansu"
              />
            </div>
            <h5 className="font-semibold text-[16px] text-orange-800/70">
              Trần Quang Tuấn
            </h5>
            <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
              Giám đốc điều hành
            </p>
            <Link
              className="text-[14px] text-blue-800 italic font-semibold"
              href={"/"}
            >
              Xem thêm
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
              <Image
                src={"/images/nhansu1.png"}
                width={200}
                height={200}
                alt="nhansu"
              />
            </div>
            <h5 className="font-semibold text-[16px] text-orange-800/70">
              Trần Quang Tuấn
            </h5>
            <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
              Giám đốc điều hành
            </p>
            <Link
              className="text-[14px] text-blue-800 italic font-semibold"
              href={"/"}
            >
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
