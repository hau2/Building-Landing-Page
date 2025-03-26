"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FadeUp } from "@/components/animations";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";

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
      <section className="bg-gray-50 py-16 px-16">
        <FadeUp>
          <h2 className="text-4xl font-bold text-[#152E51] mb-10 border-b pb-4">
            {t("aboutCustomer")}
          </h2>
        </FadeUp>
        <FadeUp>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="px-6"
          >
            {logos.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center p-4 h-32 sm:h-36">
                  <div className="relative  w-[160px] h-[80px] sm:w-[180px] sm:h-[90px]">
                    <Image
                      src={src}
                      alt={`partner-${index}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 160px, 180px"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Link
            className="italic text-[#152E51] text-lg  font-medium"
            href={`/${localStorage.getItem("locale") || "vi"}/about/customer`}
          >
            {t("seeAll")}
          </Link>
        </FadeUp>
      </section>
    );
}
