import DuAnItem, { IDuAn } from "@/components/du-an/du-an-item";
import React from "react";
import Image from "next/image";

const listDuAn: IDuAn[] = [
  {
    id: "1",
    name: "Lumi Hanoi",
    image: "/images/duan1.jpg",
    investor: "CapitaLand Development",
    address: "Tay Ho Tay Urban Area, Hanoi",
    totalInvestment: 1500000000000,
    businessSector: "High-rise residential and commercial complex",
    constructionPeriod: "2020-2024",
    status: 'Hoan thanh',
    detailImages: [
      "/images/duan1.jpg",
      "/images/duan1.jpg",
      "/images/duan1.jpg",
    ],
  },
  {
    id: "2",
    name: "Sigma Industrial Park",
    image: "/images/duan2.jpg",
    investor: "Sigma Industrial INC.",
    address: "Protrade International Industrial Park, Ben Cat, Binh Duong",
    totalInvestment: 669000000000,
    status: 'Hoan thanh',
    businessSector:
      "Manufacturing of lighting products, fans, remote control motors",
    constructionPeriod: "2017-2019",
    detailImages: [
      "/images/duan2.jpg",
      "/images/duan2.jpg",
      "/images/duan2.jpg",
    ],
  },
  {
    id: "3",
    name: "Sunshine City Saigon",
    image: "/images/duan3.jpg",
    investor: "Sunshine Group",
    address: "District 7, Ho Chi Minh City",
    totalInvestment: 1800000000000,
    status: 'Hoan thanh',
    businessSector:
      "Luxury apartments, smart homes, and commercial offices",
    constructionPeriod: "2019-2023",
    detailImages: [
      "/images/duan3.jpg",
      "/images/duan3.jpg",
      "/images/duan3.jpg",
    ],
  },
  {
    id: "4",
    name: "VinCity Grand Park",
    image: "/images/duan4.jpg",
    investor: "Vingroup",
    address: "District 9, Ho Chi Minh City",
    totalInvestment: 3000000000000,
    status: 'Dang thi cong',
    businessSector: "Integrated urban development with smart utilities",
    constructionPeriod: "2021-2026",
    detailImages: [
      "/images/duan4.jpg",
      "/images/duan4.jpg",
      "/images/duan4.jpg",
    ],
  },
  {
    id: "5",
    name: "Eco Green Saigon",
    image: "/images/duan3.jpg",
    investor: "Xuan Mai Corp",
    address: "Nguyen Van Linh, District 7, Ho Chi Minh City",
    totalInvestment: 1200000000000,
    status: 'Hoan thanh',
    businessSector: "Eco-friendly urban area with green spaces",
    constructionPeriod: "2018-2023",
    detailImages: [
      "/images/duan3.jpg",
      "/images/duan3.jpg",
      "/images/duan3.jpg",
    ],
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
        <div className="relative z-10 p-10 text-white h-full flex justify-center items-center">
          <h1 className="text-5xl">Dự Án</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-6 mt-10 px-10 max-w-7xl mx-auto p-3">
        {listDuAn.map((item, index) => (
          <DuAnItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
