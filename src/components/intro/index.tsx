import React from "react";
import AutoCarousel from "@/components/auto-carousel";

export default function Intro() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex h-full w-full items-center gap-10 pr-[48px] pl-[48px]">
        <div className="relative z-10 flex-1 flex flex-col items-start justify-center h-full gap-[32px]">
          <h2 className="p-0 m-0 relative z-10 text-white font-thin text-6xl">
            Chúng ta sống vì một thử thách
          </h2>

          <h5 className="p-0 m-0 text-white text-3xl font-thin text-left text-[20px]">
            Tại Bechtel, chúng tôi hợp tác với khách hàng để hiện thực hóa tham
            vọng của họ, thực hiện các dự án tạo ra sự khác biệt lâu dài và có ý
            nghĩa cho mọi người và cộng đồng trên toàn thế giới.
          </h5>
        </div>

        <div className="flex flex-1 z-[9999] h-[350px] w-[200px]">
          <AutoCarousel />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
}
