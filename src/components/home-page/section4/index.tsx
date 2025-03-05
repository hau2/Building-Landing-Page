import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Section4() {
  return (
    <div className="mt-[64px]">
      <div className="m-auto flex flex-col gap-[32px] w-[50%]">
        <h2 className="text-[36px] font-semibold opacity-[70%] text-center">
          Xây dựng ngày mai, cùng nhau
        </h2>
        <p className="text-[20px] font-thin">
          Với con người và dự án tại hơn 33 quốc gia, phạm vi tiếp cận và chuyên
          môn của chúng tôi là vô song. Tại Bechtel, chúng tôi không chỉ đảm
          nhận các dự án đầy thách thức nhất thế giới — chúng tôi giải quyết
          chúng. Cho dù là tháo dỡ an toàn các vật liệu phóng xạ, đào hầm qua
          các thành phố đông dân, củng cố chuỗi cung ứng quan trọng hay bảo vệ
          cơ sở hạ tầng, chúng tôi đều dẫn đầu bằng sự đổi mới và hợp tác.{" "}
        </p>
        <p className="text-[20px] font-thin">
          Từ các kỹ sư và quản lý dự án đến các chuyên gia thủ công lành nghề,
          chúng tôi tìm kiếm những đồng nghiệp có quan điểm đa dạng và toàn cầu,
          những người sẵn sàng đón nhận thử thách và vượt qua ranh giới của
          những điều có thể.{" "}
        </p>
        <Link href={"/"}>
          <div className="flex gap-[8px] w-[380px] text-red-500 pl-0 hover:bg-red-400 hover:text-white hover:pl-[16px] pt-[16px] pr-[16px] pb-[16px] rounded-2xl transition-all duration-300 cursor-pointer">
            <span className="inline-block font-bold">
              Tham gia nhóm Bechtel
            </span>
            <MoveRight />
          </div>
        </Link>
      </div>
    </div>
  );
}
