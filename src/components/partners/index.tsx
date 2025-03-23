"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FadeUp } from "@/components/animations";
import { useTranslations } from "next-intl";
import Link from "next/link";

const logos = [
  "/images/partners/1.png",
  "/images/partners/2.png",
  "/images/partners/3.png",
  "/images/partners/4.png",
  "/images/partners/5.png",
  "/images/partners/6.png",
  "/images/partners/7.png",
  "/images/partners/8.png",
  "/images/partners/9.png",
  "/images/partners/12.png",
  "/images/partners/13.png",
  "/images/partners/14.png",
  "/images/partners/15.png",
  "/images/partners/16.png",
  "/images/partners/17.png",
  "/images/partners/18.png",
  "/images/partners/19.png",
  "/images/partners/20.png",
  "/images/partners/21.png",
  "/images/partners/22.png",
  "/images/partners/23.png",
  "/images/partners/24.png",
  "/images/partners/25.png",
  "/images/partners/26.png",
  "/images/partners/27.png",
  "/images/partners/28.png",
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
              <div className="flex justify-center items-center h-24">
                <img
                  src={src}
                  alt={`partner-${index}`}
                  className="h-full object-contain hover:grayscale-0 transition duration-300 scale-200"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      <Link className="italic text-[#152E51] text-lg  font-medium" href={`/${localStorage.getItem("locale") || "vi"}/about/customer`}>{`Xem tất cả >`}</Link>
      </FadeUp>
    </section>
  );
}
