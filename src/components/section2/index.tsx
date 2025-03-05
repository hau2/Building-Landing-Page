import React from "react";

export default function Section2() {
  return (
    <div className="flex p-[64px] items-center gap-[64px]">
      <div className="flex-1">
        <h2 className="text-[48px] font-thin p-0 m-0 line">
          Các đội nhóm phi thường xây dựng các dự án truyền cảm hứng
        </h2>
        <p className="font-thin text-[20px] mt-[64px]">
          Chúng tôi thực hiện các dự án đầu tiên giúp cải thiện chất lượng cuộc
          sống, thúc đẩy tăng trưởng kinh tế và phát triển bền vững trên toàn
          thế giới — từ hệ thống giao thông sạch và hiệu quả cùng các giải pháp
          năng lượng bền vững đến các cơ sở sản xuất tiên tiến, chuỗi cung ứng
          khoáng sản quan trọng, cơ sở hạ tầng năng lượng và hệ thống an ninh
          quốc gia quan trọng.
        </p>
        <p className="font-thin text-[20px] mt-[64px]">
          Chúng tôi rất vinh dự khi được giao phó công việc mà chúng tôi yêu
          thích, xây dựng các dự án có mục đích rõ ràng và giải quyết những
          thách thức quan trọng trên toàn thế giới.
        </p>
      </div>
      <div className="flex-1 h-[400px] items-center">
        <video
          className="w-full h-full object-cover rounded-2xl shadow-2xl overflow-hidden"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
