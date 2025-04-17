"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Partner() {
  const t = useTranslations("HomePage");

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-white">
      <motion.h2
        className="text-4xl font-bold text-[#152E51] mb-12 border-b pb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("aboutCustomer")}
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {logos.map((logo, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-white p-4 flex justify-center items-center rounded-lg shadow-sm hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="relative w-[120px] h-[60px] sm:w-[140px] sm:h-[70px]">
              <Image
                src={logo}
                alt={`Đối tác ${idx + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 120px, 140px"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
