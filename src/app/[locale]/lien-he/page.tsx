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

      <div className="bg-gray-100 min-h-screen p-6">
        <main className="max-w-6xl mx-auto mt-6 space-y-12">
          {/* Bản đồ Google – có marker đúng địa chỉ */}
          <FadeUp>
            <div className="w-full h-[300px] sm:h-[400px] my-32">
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
            <div className="bg-gray-100 rounded-xl p-6 sm:p-8 shadow-md space-y-4 text-sm sm:text-base">
              <h2 className="text-xl font-semibold">Thông tin liên hệ</h2>
              <p>
                <strong>Địa chỉ:</strong> Tỉnh lộ 767, thôn Tây Lạc, Ấp Bùi Chu,
                xã Bắc Sơn, huyện Trảng Bom, tỉnh Đồng Nai, Việt Nam
              </p>
              <p>
                <strong>Điện thoại:</strong> (+84) 91 379 57 65
              </p>
              <p>
                <strong>Email:</strong> binhdoanhgroup@gmail.com
              </p>
              <p>
                <strong>Giờ làm việc:</strong> Thứ 2 - Thứ 6 (8:00 - 17:00)
              </p>
            </div>
          </FadeUp>
        </main>
      </div>
    </div>
  );
}
