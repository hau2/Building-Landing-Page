import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/animations";

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

export default function Partner() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">
      <FadeUp>
        <h2 className="text-4xl font-bold text-[#152E51] mb-10 border-b pb-4">
          {t("aboutCustomer")}
        </h2>
      </FadeUp>
      <FadeUp>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white p-4 flex justify-center items-center transition duration-300 transform hover:scale-105 hover:shadow-md rounded-lg"
            >
              <div className="relative w-[120px] h-[60px] sm:w-[140px] sm:h-[70px]">
                <Image
                  src={logo}
                  alt={'Đối tác của Bình Doanh Group'}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 120px, 140px"
                />
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
