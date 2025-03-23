"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ThongSo() {
  const t = useTranslations("thongSo");

  // Giá trị số cố định tại FE
  const values = [130, 16955, 900, 10000];

  return (
    <section className="w-full bg-gray-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase">
            {t("heading")}
          </h2>
          <p className="text-xl md:text-2xl font-bold text-orange-600 mt-4">
            <i className="fas fa-award animate-pulse mr-2" />
            {t("subheading")}
            <i className="fas fa-award animate-pulse ml-2" />
          </p>
        </motion.div>

        {/* Dãy số liệu */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto"
        >
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-gray-500 text-sm font-medium tracking-wide mb-2">
                {t(`data.${idx}.title`)}
              </div>
              <div className="text-5xl font-extrabold text-orange-600 drop-shadow-glow">
                <CountUp end={value} duration={2.5} separator="," />
              </div>
              <div className="text-sm text-gray-600 mt-1 uppercase">
                {t(`data.${idx}.unit`)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
