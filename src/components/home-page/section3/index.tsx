import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Section3() {
  return (
    <div className="relative mt-[64px] w-full h-[550px] overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/video3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex h-full w-full flex-col justify-center">
        <div className="flex w-full items-center gap-16 pr-[48px] pl-[48px]">
          <h2 className="relative z-10 flex-1 flex flex-col items-start justify-center gap-[32px] text-white text-[48px] font-thin">
            Được xác định bởi chất lượng của con người chúng tôi
          </h2>
          <p className="relative z-10 flex-1 flex flex-col items-start justify-center gap-[32px] text-white text-[20px] font-thin">
            Đội ngũ của chúng tôi mang đến sự xuất sắc về mặt kỹ thuật, sự khéo
            léo, động lực, sự sáng tạo và kinh nghiệm để giúp khách hàng đạt
            được tầm nhìn táo bạo của họ. Chúng tôi thành công thông qua quan hệ
            đối tác và mong muốn chung là tạo nên sự khác biệt. Được thúc đẩy
            bởi những thách thức của ngày mai, chúng tôi vượt qua giới hạn của
            những gì có thể.
          </p>
        </div>
        <Link href={"/"} className="relative z-10 pl-[48px] mt-[16px]">
          <div className="flex gap-[8px] w-[380px] text-white pl-0 hover:bg-red-400 hover:pl-[16px] pt-[16px] pr-[16px] pb-[16px] rounded-2xl transition-all duration-300 cursor-pointer">
            <span className="inline-block font-bold">
              Những người đứng sau các dự án
            </span>
            <MoveRight />
          </div>
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
}
