"use client";
import DuAnItem, { IDuAn } from "@/components/du-an/du-an-item";
import React from "react";
import Image from "next/image";

const listDuAn: IDuAn[] = [
  {
    id: "1",
    name: "BỆNH VIỆN Y DƯỢC SHING MARK",
    image: "/images/du-an/duan-y-duoc-1.jpg",
    investor: "Công ty TNHH MTV Bệnh viện đại học Y Dược Shing Mark",
    address: "QL51, Phường Long Bình Tân, TP Biên Hoà, Đồng Nai",
    totalInvestment: "6.453.000.000.000 VND",
    businessSector: "Cung cấp dịch vụ y tế và chăm sóc sức khoẻ",
    constructionPeriod: "2013-2017",
    status: "Hoàn thành",
    detailImages: [
      "/images/du-an/duan-y-duoc-2.jpg",
      "/images/du-an/duan-y-duoc-3.jpg",
      "/images/du-an/duan-y-duoc-4.jpg",
      "/images/du-an/duan-y-duoc-5.jpg",
      "/images/du-an/duan-y-duoc-6.jpg",
      "/images/du-an/duan-y-duoc-7.jpg",
      "/images/du-an/duan-y-duoc-8.jpg",
      "/images/du-an/duan-y-duoc-9.jpg",
    ],
  },
  {
    id: "2",
    name: "CÔNG TY TNHH UNITED JUMMBO",
    image: "/images/du-an/duan-jumbo-1.jpg",
    investor: "Jumbo Asia Invesment Co.,Ltd",
    address: "KCN Suối Tre, TP Long Thành, tỉnh Đồng Nai",
    totalInvestment: "2.180.000.000 VND",
    status: "Hoàn thành",
    businessSector:
      "Sản xuất các sản phẩm dụng cụ, máy móc Công nghiệp, phụ tùng ô tô...",
    constructionPeriod: "2017-2020",
    detailImages: [
      "/images/du-an/duan-jumbo-2.jpg",
      "/images/du-an/duan-jumbo-3.jpg",
      "/images/du-an/duan-jumbo-4.jpg",
      "/images/du-an/duan-jumbo-5.jpg",
      "/images/du-an/duan-jumbo-6.jpg",
      "/images/du-an/duan-jumbo-7.jpg",
    ],
  },
  {
    id: "3",
    name: "CÔNG TY TTHH FULLWAY",
    image: "/images/du-an/duan-fullway-1.jpg",
    investor: "Super Way International Group Co.,Ltd (Protrend Group)",
    address: "KCN Long Khánh, TP Long Khánh, tỉnh Đồng Nai",
    totalInvestment: "2.721.600.000.000 VND",
    status: "Hoàn thành",
    businessSector: "Sản xuất các sản phẩm đồ gỗ, đồ điện tử gia dụng",
    constructionPeriod: "2017-2019",
    detailImages: [
      "/images/du-an/duan-fullway-2.jpg",
      "/images/du-an/duan-fullway-3.jpg",
      "/images/du-an/duan-fullway-4.jpg",
      "/images/du-an/duan-fullway-5.jpg",
      "/images/du-an/duan-fullway-6.jpg",
      "/images/du-an/duan-fullway-7.jpg",
      "/images/du-an/duan-fullway-8.jpg",
      "/images/du-an/duan-fullway-9.jpg",
    ],
  },
  {
    id: "4",
    name: "CÔNG TY TNHH SUMMER WIND",
    image: "/images/du-an/duan-summer-wind-1.jpg",
    investor: "Sigma Industrial INC.",
    address: " KCN Quốc tế Protrade, thị xã Bến Cát, tỉnh Bình Dương",
    totalInvestment: "669.000.000.000 VND",
    status: "Hoàn thành",
    businessSector:
      " Sản xuất đèn chiếu sáng các loại, quạt các loại, motor điều khiển từ xa...",
    constructionPeriod: "2017-2019",
    detailImages: [
      "/images/du-an/duan-summer-wind-2.jpg",
      "/images/du-an/duan-summer-wind-3.jpg",
      "/images/du-an/duan-summer-wind-4.jpg",
      "/images/du-an/duan-summer-wind-5.jpg",
      "/images/du-an/duan-summer-wind-6.jpg",
      "/images/du-an/duan-summer-wind-7.jpg",
      "/images/du-an/duan-summer-wind-8.jpg",
      "/images/du-an/duan-summer-wind-9.jpg",
      "/images/du-an/duan-summer-wind-10.jpg",
    ],
  },
  {
    id: "5",
    name: "CÔNG TY TNHH SHING MARK VINA",
    image: "/images/du-an/duan-shing-mark-vina-1.JPG",
    investor: "Carven Industries Limited",
    address: "KCN Bàu Xéo, huyện Trảng Bom, tỉnh Đồng Nai",
    totalInvestment: "10.581.950.000.000 VND",
    status: "Hoàn thành",
    businessSector: "Sản xuất các sản phẩm đồ gỗ nội thất xuất khẩu ",
    constructionPeriod: "2005 - 2016",
    detailImages: [
      "/images/du-an/duan-shing-mark-vina-2.JPG",
      "/images/du-an/duan-shing-mark-vina-3.JPG",
      "/images/du-an/duan-shing-mark-vina-4.JPG",
      "/images/du-an/duan-shing-mark-vina-5.jpg",
      "/images/du-an/duan-shing-mark-vina-6.JPG",
      "/images/du-an/duan-shing-mark-vina-7.JPG",
      "/images/du-an/duan-shing-mark-vina-8.JPG",
      "/images/du-an/duan-shing-mark-vina-9.JPG",
      "/images/du-an/duan-shing-mark-vina-10.jpg",
    ],
  },
  {
    id: "6",
    name: "CÔNG TY TNHH NGÀNH GIÀY APEX (VIỆT NAM)",
    image: "/images/du-an/duan-apex-1.jpg",
    investor: "Công ty TNHH Ngành giày Ái Phái Khách",
    address: "KCN Châu Đức, huyện Châu Đức, Bà Rịa Vũng Tàu",
    totalInvestment: "565.724.000.000 VND",
    status: "Hoàn thành",
    businessSector: " Sản xuất các sản phẩm ngành giày và phụ kiện ngành giày",
    constructionPeriod: "01/2020 - 06/2020",
    detailImages: [
      "/images/du-an/duan-apex-2.jpg",
      "/images/du-an/duan-apex-3.jpg",
      "/images/du-an/duan-apex-4.jpg",
      "/images/du-an/duan-apex-5.jpg",
      "/images/du-an/duan-apex-6.jpg",
      "/images/du-an/duan-apex-7.jpg",
      "/images/du-an/duan-apex-8.jpg",
      "/images/du-an/duan-apex-9.jpg",
      "/images/du-an/duan-apex-10.jpg",
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
