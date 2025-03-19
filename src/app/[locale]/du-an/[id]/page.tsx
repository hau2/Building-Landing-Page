"use client";

import { useEffect, useState } from "react";
import { IDuAn } from "@/components/du-an/du-an-item";
import Image from "next/image";
import {
    Building,
    MapPin,
    Wrench,
    Calendar,
    Layers,
    DollarSign,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


export default function DuAnDetail() {
    const [item, setItem] = useState<IDuAn | null>(null);

    useEffect(() => {
        const storedData = localStorage.getItem("duAnData");
        if (storedData) {
            setItem(JSON.parse(storedData));
        }
    }, []);

    const formatCurrency = (value: number) => {
        return value
            ? new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
              }).format(value)
            : "Tổng thầu";
    };
    console.log("item?.detailImages", item);
    return (
      <div className="pl-20 pr-20">
        <h1 className="text-3xl font-bold mb-4 mt-8  text-blue-900 ">
          Dự án nổi bật
        </h1>
        <div className="flex max-w-7xl mx-auto p-6 gap-6">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-[#DAB87A]">{item?.name}</h2>
            <p className="text-xl text-gray-600 font-semibold mt-2">
              {item?.businessSector}
            </p>
            <div className="mt-4">
              <Image
                src={item?.image || "/placeholder.jpg"}
                alt={item?.name || ""}
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="w-1/2 space-y-10 mt-20 ml-30">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                    <Building /> Chủ đầu tư
                  </h4>
                  <p className="text-l text-gray-700 mt-2">
                    {item?.investor || "Đang cập nhật"}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                    <DollarSign /> Tổng mức đầu tư
                  </h4>
                  <p className="text-l text-gray-700 mt-2">
                    {formatCurrency(item?.totalInvestment || 0)}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                    <MapPin /> Vị trí
                  </h4>
                  <p className="text-l text-gray-700 mt-2">
                    {item?.address || "Đang cập nhật"}
                  </p>
                </div>
              </div>

              {/* Cột phải */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                    <Calendar /> Thời gian xây dựng
                  </h4>
                  <p className="text-l text-gray-700 mt-2">
                    {item?.constructionPeriod}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                    <Wrench /> Tiến độ
                  </h4>
                  <p className="text-l text-gray-700 mt-2">
                    {item?.status || "Đang thi công"}
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                    <Layers /> Quy mô
                  </h4>
                  <p className="text-l text-gray-700 mt-2">{item?.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto">
          {/* Swiper Container */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20} // Khoảng cách giữa ảnh (20px)
            slidesPerView="auto" // Cho phép ảnh có width cố định
            loop={true} // Chạy vòng lặp
            autoplay={{ delay: 3000 }} // Tự động chạy mỗi 3 giây
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {item?.detailImages.map((image, index) => (
              <SwiperSlide key={index} style={{ width: "480px" }}>
                {" "}
                {/* Set width = 480px */}
                <div className="w-[480px] h-[360px] relative">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition">
            <ChevronLeft size={28} />
          </button>
          <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition">
            <ChevronRight size={28} />
          </button>
        </div>

      </div>
    );
}
