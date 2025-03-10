import React from "react";
import Image from "next/image";
import Link from "next/link";

const TinTucItems = [
  {
    img: "/images/tintuc1.jpg",
    title: "Bình doanh tổ chức workshop chào mừng ngày quốc tế phụ nữ 8/3",
    subTitle: "Hoạt động nội bộ | 07/03/2025",
    desc: "Hòa trong không khí chào mừng ngày Quốc tế Phụ nữ 8/3, Công ty Cổ phần Xây dựng Bình Doanh đã tổ chức buổi lễ dành riêng cho Chị Em nhằm tri ân những cống hiến của phái đẹp. Buổi lễ...",
    link: '/'
  },
  {
    img: "/images/tintuc2.jpg",
    title: "Bình doanh tổ chức workshop chào mừng ngày quốc tế phụ nữ 8/3",
    subTitle: "Hoạt động nội bộ | 07/03/2025",
    desc: "Hòa trong không khí chào mừng ngày Quốc tế Phụ nữ 8/3, Công ty Cổ phần Xây dựng Bình Doanh đã tổ chức buổi lễ dành riêng cho Chị Em nhằm tri ân những cống hiến của phái đẹp. Buổi lễ...",
    link: '/'
  },
  {
    img: "/images/tintuc3.jpg",
    title: "Bình doanh tổ chức workshop chào mừng ngày quốc tế phụ nữ 8/3",
    subTitle: "Hoạt động nội bộ | 07/03/2025",
    desc: "Hòa trong không khí chào mừng ngày Quốc tế Phụ nữ 8/3, Công ty Cổ phần Xây dựng Bình Doanh đã tổ chức buổi lễ dành riêng cho Chị Em nhằm tri ân những cống hiến của phái đẹp. Buổi lễ...",
    link: '/'
  },
  {
    img: "/images/tintuc4.jpg",
    title: "Bình doanh tổ chức workshop chào mừng ngày quốc tế phụ nữ 8/3",
    subTitle: "Hoạt động nội bộ | 07/03/2025",
    desc: "Hòa trong không khí chào mừng ngày Quốc tế Phụ nữ 8/3, Công ty Cổ phần Xây dựng Bình Doanh đã tổ chức buổi lễ dành riêng cho Chị Em nhằm tri ân những cống hiến của phái đẹp. Buổi lễ...",
    link: '/'
  },
  {
    img: "/images/tintuc5.jpg",
    title: "Bình doanh tổ chức workshop chào mừng ngày quốc tế phụ nữ 8/3",
    subTitle: "Hoạt động nội bộ | 07/03/2025",
    desc: "Hòa trong không khí chào mừng ngày Quốc tế Phụ nữ 8/3, Công ty Cổ phần Xây dựng Bình Doanh đã tổ chức buổi lễ dành riêng cho Chị Em nhằm tri ân những cống hiến của phái đẹp. Buổi lễ...",
    link: '/'
  },
];

export default function TinTuc() {
  return (
    <div className="pr-[64px] pl-[64px] mt-[40px]">
      <h2 className="font-bold text-black/70 text-[32px]">Tin mới nhất</h2>
      <div className="flex flex-col gap-[24px] mt-[16px]">
        {TinTucItems.map((item, index) => (
          <Link href={item.link} key={index} className="flex flex-row items-center gap-[16px]">
            <Image src={item.img} width={180} height={100} alt={item.title} />
            <div>
              <h3 className="uppercase font-bold text-blue-950">
                {item.title}
              </h3>
              <h5 className="font-bold text-black/70 text-[14px]">
                {item.subTitle}
              </h5>
              <p className="font-thin text-[14px]">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
