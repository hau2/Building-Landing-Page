"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FadeUp } from "@/components/animations";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import AnimatedDivider from "../animations/LineAnimation";

const logos = [
    "/images/partner/1.png",
    "/images/partner/2.png",
    "/images/partner/3.png",
    "/images/partner/4.png",
    "/images/partner/5.png",
    "/images/partner/6.png",
    "/images/partner/7.png",
    "/images/partner/8.png",
    "/images/partner/9.png",
    "/images/partner/12.png",
    "/images/partner/13.png",
    "/images/partner/14.png",
    "/images/partner/15.png",
    "/images/partner/16.png",
    "/images/partner/17.png",
    "/images/partner/18.png",
    "/images/partner/19.png",
    "/images/partner/20.png",
    "/images/partner/21.png",
    "/images/partner/22.png",
    "/images/partner/23.png",
    "/images/partner/24.png",
    "/images/partner/25.png",
    "/images/partner/26.png",
    "/images/partner/27.png",
    "/images/partner/28.png",
];

export default function ClientPartnerSlider() {
    const t = useTranslations("HomePage");
    return (
        <section className="bg-gray-50 py-12 px-4 sm:px-8 md:px-16">
            <FadeUp>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#152E51]">
                    {t("aboutCustomer")}
                </h2>
                <AnimatedDivider></AnimatedDivider>
            </FadeUp>
            <FadeUp>
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 1200,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        1: { slidesPerView: 1, spaceBetween: 24 },
                        640: { slidesPerView: 2.5, spaceBetween: 24 },
                        768: { slidesPerView: 4, spaceBetween: 30 },
                        1024: { slidesPerView: 6, spaceBetween: 30 },
                    }}
                    className="px-2 sm:px-6"
                >
                    {logos.map((src, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center p-3 h-24 sm:h-32">
                                <div className="relative w-[180px] h-[90px] sm:w-[200px] sm:h-[100px]">
                                    <Image
                                        src={src}
                                        alt={`partner-${index}`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 100vw"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Link
                    className="italic text-[#152E51] text-lg font-medium block mt-4"
                    href={`/${
                        localStorage.getItem("locale") || "vi"
                    }/about/customer`}
                >
                    {t("seeAll")}
                </Link>
            </FadeUp>
        </section>
    );
}
