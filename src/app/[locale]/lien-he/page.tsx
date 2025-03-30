"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/animations";

export default function LienHe() {
  const t = useTranslations("contact");
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/du-an/duan-y-duoc-9.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-10 text-white h-full">
          <motion.h1
            className="text-5xl h-full flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t("contactPageTitle")}
          </motion.h1>
        </div>
      </div>

      <section className="w-full border-t border-gray-300 py-10 px-4 md:px-40 flex flex-col gap-6 md:gap-10 md:flex-row md:justify-between md:items-start">
        {/* Left: Title */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          {t("title")}
        </div>

        {/* Right: Description */}
        <div className="text-gray-700 text-xl sm:text-base md:text-base leading-relaxed max-w-full md:max-w-xl">
          {t("description")}
        </div>
      </section>

      <div className="bg-gray-100 min-h-screen p-6">
        <main className="max-w-6xl mx-auto mt-6 space-y-12">
          <div className="relative bg-white px-6 py-12 rounded-2xl shadow-xl overflow-hidden border border-gray-200 max-w-3xl mx-auto mt-20">
            {/* Hiệu ứng nền động */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-white to-blue-100 opacity-30 animate-pulse pointer-events-none" />

            {/* Nội dung */}
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                <span className="inline-block transform -rotate-1 bg-yellow-200 px-3 py-1 rounded shadow-lg">
                  Nơi nào đó
                </span>{" "}
                có{" "}
                <span className="text-green-800 font-vibes text-[1.8rem]">
                  “hạt giống”
                </span>{" "}
                <span className="text-green-700 font-playfair font-semibold">
                  Bình Doanh Construction
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-700 font-medium">
                Nơi đó{" "}
                <span className="bg-green-100 text-green-900 px-3 py-1 rounded-lg shadow font-playfair font-semibold">
                  “vững chắc”
                </span>{" "}
                và{" "}
                <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg shadow font-vibes text-[1.75rem]">
                  “vươn cao”
                </span>
              </p>
            </div>
          </div>

          {/* Bản đồ Google – có marker đúng địa chỉ */}
          <FadeUp>
            <div className="w-full h-[300px] sm:h-[400px] my-16">
              <iframe
                src="https://maps.google.com/maps?q=10.9813464,106.9527545&z=18&output=embed"
                width="100%"
                height="100%"
                className="rounded-xl border shadow"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </FadeUp>

          {/* Thông tin liên hệ */}
          <FadeUp>
            <section className="bg-[#fdf7e4] py-10 px-4 sm:px-8 md:px-20 text-center">
              {/* Title */}
              <div className="flex flex-wrap justify-center items-center gap-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
                <span className="text-[#1c355e]">
                  {t("sectionTitle.info")}
                </span>
                <span className="text-[#00a8e8]">
                  {t("sectionTitle.highlight")}
                </span>
              </div>

              {/* Company bar */}
              <div className="bg-[#1c355e] text-white font-semibold mt-6 py-2 px-4 inline-block text-sm sm:text-base md:text-lg">
                {t("company")}
              </div>

              {/* Info */}
              <div className="mt-4 space-y-2 text-sm sm:text-base text-[#1c355e] max-w-2xl mx-auto">
                <p className="px-2">{t("address")}</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 px-2 flex-wrap">
                  <p>{t("phone")}</p>
                  <p>{t("email")}</p>
                  <p>{t("website")}</p>
                </div>
              </div>
            </section>
          </FadeUp>
        </main>
      </div>
    </div>
  );
}
