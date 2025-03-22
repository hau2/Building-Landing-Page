"use client";

import { useEffect, useState } from "react";
import { IDuAn } from "@/components/du-an/du-an-item";
import Image from "next/image";
import {
    Building,
    MapPin,
    Wrench,
    Calendar,
    DollarSign,
    ChevronLeft,
    ChevronRight,
    Briefcase,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";

export default function DuAnDetail() {
    const [item, setItem] = useState<IDuAn | null>(null);
    const t = useTranslations("HomePage");
    const projectTranslate = useTranslations("project");

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
            <h1 className="text-4xl font-bold mb-4 mt-8 text-[#152E51] ">
                {t("projectHighlightTitle")}
            </h1>
            <div className="flex max-w-7xl mx-auto gap-6">
                <div className="w-1/2">
                    <h2 className="text-3xl font-bold text-[#DAB87A]">
                        {item && projectTranslate(`${item.id}.name`)}
                    </h2>
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
                                    <Building /> {t("investor")}
                                </h4>
                                <p className="text-l text-gray-700 mt-2">
                                    {item?.investor || "Đang cập nhật"}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                                    <Briefcase /> {t("businessSector")}
                                </h4>
                                <p className="text-l text-gray-700 mt-2">
                                    {projectTranslate(
                                        `${item?.id}.businessSector`
                                    )}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                                    <MapPin /> {t("address")}
                                </h4>
                                <p className="text-l text-gray-700 mt-2">
                                    {projectTranslate(`${item?.id}.address`)}
                                </p>
                            </div>
                        </div>

                        {/* Cột phải */}

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                                    <Calendar /> {t("constructionPeriod")}
                                </h4>
                                <p className="text-l text-gray-700 mt-2">
                                    {item?.constructionPeriod}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                                    <Wrench /> {t("status")}
                                </h4>
                                <p className="text-l text-gray-700 mt-2">
                                    {projectTranslate(`${item?.id}.status`)}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                                    <DollarSign /> {t("totalInvestment")}
                                </h4>
                                <p className="text-l text-gray-700 mt-2">
                                    {formatCurrency(item?.totalInvestment || 0)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 mt-8 text-[#152E51]">
                {t("projectImagesTitle")}
            </h1>
            <div className="w-full mx-auto">
                <div className="relative mx-auto px-4 sm:px-10 max-w-[1460px]">
                    <button className="custom-prev absolute left-10 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/80 transition">
                        <ChevronLeft size={22} />
                    </button>
                    <button className="custom-next absolute right-10 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black/80 transition">
                        <ChevronRight size={22} />
                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        speed={800}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="w-full"
                    >
                        {item?.detailImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] relative">
                                    <Image
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
