"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export default function OurBusinessLines() {
  const t = useTranslations("ourBusiness");

  const effects = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 80 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    slideRight: {
      hidden: { opacity: 0, x: -80 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    },
    flip: {
      hidden: { rotateY: 90, opacity: 0 },
      visible: { rotateY: 0, opacity: 1, transition: { duration: 0.8 } },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const [showMotion, setShowMotion] = useState(false);
  useEffect(() => setShowMotion(true), []);

  return (
    <div className="px-12">
      <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {showMotion && (
          <MotionDiv
            variants={effects.slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[#152E51] mb-4">
              {t("generalTitle")}
            </h2>
            <p className="text-gray-700 font-bold mb-4">{t("paragraph1")}</p>
            <p className="text-gray-700 mb-4">{t("paragraph2")}</p>
            <p className="text-gray-700 mb-6">{t("paragraph3")}</p>
            <div className="bg-gray-100 border-l-4 border-red-500 p-4 text-center">
              <p className="text-[#152E51] font-bold uppercase">
                {t("slogan")}
              </p>
            </div>
          </MotionDiv>
        )}

        {showMotion && (
          <MotionDiv
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"
            variants={effects.zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-full h-[400px] sm:h-[500px]">
              <Image
                src="/images/du-an/duan-shing-mark-vina-8.JPG"
                alt="Dự án tiêu biểu"
                fill
                className="rounded-2xl shadow-lg object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative w-full h-[300px] sm:h-[350px]">
              <Image
                src="/images/du-an/duan-shing-mark-vina-9.JPG"
                alt="Dự án tiêu biểu khác"
                fill
                className="rounded-2xl shadow-lg object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </MotionDiv>
        )}
      </section>

      <section className="container mx-auto px-4 py-12 text-center">
        {showMotion && (
          <>
            <MotionDiv
              variants={effects.fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-[#152E51] mb-4">
                {t("advantagesTitle")}
              </h2>
              <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                {t("advantagesDescription")}
              </p>
            </MotionDiv>

            <MotionDiv
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                {
                  title: t("servicesArchitectureTitle"),
                  desc: t("servicesArchitectureDesc"),
                },
                {
                  title: t("servicesStructureTitle"),
                  desc: t("servicesStructureDesc"),
                },
                {
                  title: t("servicesConstructionTitle"),
                  desc: t("servicesConstructionDesc"),
                },
                {
                  title: t("servicesManagementTitle"),
                  desc: t("servicesManagementDesc"),
                },
                {
                  title: t("servicesConsultingTitle"),
                  desc: t("servicesConsultingDesc"),
                },
              ].map((item, index) => (
                <MotionDiv
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center cursor-pointer"
                  variants={effects.flip}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                    rotate: [0, 1, -1, 0],
                    transition: { duration: 0.4 },
                  }}
                >
                  <h3 className="font-bold text-[#DAB87A] text-[20px] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </MotionDiv>
              ))}
            </MotionDiv>
          </>
        )}
      </section>
    </div>
  );
}
