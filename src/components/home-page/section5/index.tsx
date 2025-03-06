import React from "react";
import VideoPopup from "@/components/home-page/video-popup";

export default function Section5() {
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
        <source src="/videos/video4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex h-full w-full flex-col justify-center">
        <div className="flex w-full items-center gap-16 pr-[48px] pl-[48px]">
          <h2 className="relative z-10 flex-1 flex flex-col items-start justify-center gap-[32px] text-white text-[48px] font-semibold">
            Chúng tôi là BÌNH DOANH
          </h2>
          <p className="relative z-10 flex-1 flex flex-col items-start justify-center gap-[32px] text-white text-[20px] font-thin">
            Tính chính trực, sự đổi mới và tinh thần “không bao giờ thỏa hiệp”
            là cốt lõi trong mọi việc chúng tôi làm. Nhân viên của chúng tôi là
            những người có tư duy táo bạo và là những người giải quyết vấn đề
            khéo léo, những người biến thách thức thành cơ hội để đạt được điều
            phi thường. Đằng sau mỗi chiếc mũ cứng và bản thiết kế là động lực
            không ngừng nghỉ để đạt được những gì người khác không thể.
          </p>
        </div>

        <div className="relative z-10 mt-[16px] w-[800px]">
          <VideoPopup />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
}
