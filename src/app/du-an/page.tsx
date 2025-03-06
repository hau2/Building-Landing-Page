import DuAnItem, { IDuAn } from "@/components/du-an/du-an-item";
import React from "react";
import Image from "next/image";

const listDuAn: IDuAn[] = [
  {
    name: "Khách Sạn 5 Sao Marriott",
    desc: "Tổ hợp văn phòng, khách sạn, căn hộ cao cấp, tọa lạc vị trí trung tâm Thủ đô Hà Nội, được quản lý và vận hành theo tiêu chuẩn chất lượng quốc tế bởi Tập đoàn Marriott.",
    img: "/images/duan1.png",
    link: "./",
  },
  {
    name: "Vinhomes Dream City",
    desc: "Vinhomes Dream City là đại đô thị kiểu mẫu, văn minh, hiện đại; đa dạng về sản phẩm nhà ở, thương mại, dịch vụ được kiến tạo để trở thành một “Khu đô thị sinh thái trong mơ” với nhiều…",
    img: "/images/duan2.jpg",
    link: "./",
  },
  {
    name: "The Tropical",
    desc: "The Tropical nằm ngay trung tâm toàn khu, hưởng trọn vẹn hệ sinh thái đại công viên Grand Forest 36 hecta. Đặc biệt, phân khu The Beverly Solari còn nằm kế tuyến Metro số 1, view trực diện Sông Tắc,…",
    img: "/images/duan3.jpg",
    link: "./",
  },
  {
    name: "Fairmont Hanoi",
    desc: "Dự án được thiết kế bởi hai công ty nổi tiếng là Perkins Eastman và Aston Design, kiến trúc và nội thất của Khách sạn Fairmont Hanoi là sản phẩm của sự dày công nghiên cứu về văn hóa, lịch sử,…",
    img: "/images/duan4.jpg",
    link: "./",
  },
  {
    name: "The Pavilion – Vinhomes Ocean Park",
    desc: "Vinhomes Ocean Park là đại đô thị đẳng cấp quốc tế mang phong cách Singapore, sở hữu không gian xanh rộng lớn với những bãi cát trắng và hàng dừa nhiệt đới trải dài, mang đến một chất sống “đại…",
    img: "/images/duan5.jpg",
    link: "./",
  },
];

export default function DuAn() {
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
          <h1 className="text-5xl h-full flex justify-center items-center">Dự Án</h1>
        </div>
      </div>
      <div className="flex flex-col gap-[32px] items-center mt-[32px]">
        {listDuAn.map((item, index) => (
          <DuAnItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
