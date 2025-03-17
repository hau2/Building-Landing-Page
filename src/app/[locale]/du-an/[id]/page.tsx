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
} from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
                    <h2 className="text-3xl font-bold text-[#DAB87A]">
                        {item?.name}
                    </h2>
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
                                <p className="text-l text-gray-700 mt-2">
                                    {item?.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mx-auto p-6">
                <h3 className="text-3xl font-bold text-blue-900 mb-6">
                    Hình ảnh dự án
                </h3>
                <div className="flex justify-center">
                    <Carousel
                        className="mx-[64px]"
                        opts={{
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                    >
                        <CarouselContent className="-ml-1 mt-2">
                            {item?.detailImages.map((image, index) => (
                                <CarouselItem
                                    key={index}
                                    className=" md:basis-2/3 lg:basis-1/4"
                                >
                                    <Image
                                        src={image}
                                        width={460}
                                        height={320}
                                        alt="duan"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
