"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const MotionH2 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h2),
  { ssr: false }
);

export default function ChairmanMessage() {
  const t = useTranslations("chairmanMessages");

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8 },
  };

  const zoomIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="bg-white py-12 px-6 lg:px-6">
      <MotionH2
        className="text-3xl md:text-4xl font-bold text-[#152E51] mb-8 text-center md:text-left"
        {...fadeUp}
      >
        {t("chairmanMessageTitle")}
      </MotionH2>

      <MotionDiv
        className="relative bg-gray-100 rounded-xl overflow-hidden p-6 lg:p-12 flex flex-col lg:flex-row items-center lg:items-start justify-between"
        style={{
          backgroundImage: "url('/images/du-an/duan-y-duoc-1.jpg')",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "contain",
        }}
        {...fadeUp}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/100 to-white/60 pointer-events-none z-0"></div>

        <MotionDiv
          className="relative w-40 h-40 md:w-80 md:h-80 mb-6 lg:mb-0 lg:mr-12 z-10 mt-[32px]"
          {...zoomIn}
        >
          <div className="absolute inset-0 rounded-full bg-[#152E51] shadow-2xl">
            <div className="absolute inset-1 bg-white rounded-full">
              <Image
                src="/images/sdtc1.png"
                alt="Nguyễn Thanh Bình - Chủ tịch Bình Doanh Group"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
          </div>
        </MotionDiv>

        <MotionDiv
          className="flex-1 text-gray-700 text-base md:text-l z-10 space-y-4"
          {...fadeUp}
        >
          <p>{t("chairmanMessageParagraph1")}</p>
          <p>{t("chairmanMessageParagraph2")}</p>
          <p>{t("chairmanMessageParagraph3")}</p>
          <p>{t("chairmanMessageParagraph4")}</p>
          <p>{t("chairmanMessageParagraph5")}</p>
          <p>{t("chairmanMessageParagraph6")}</p>
          <p className="mt-6 font-bold text-yellow-600 text-lg md:text-xl">
            {t("chairmanMessageParagraph7")}
          </p>
          <p className="text-[#152E51] font-semibold text-sm md:text-base">
            {t("chairmanMessageParagraph8")}
          </p>
        </MotionDiv>
      </MotionDiv>
    </div>
  );
}
