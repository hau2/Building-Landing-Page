/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function TuyenDung() {
  const t = useTranslations("career");

  const jobListings: any[] = [];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  };

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
            {t("recruitmentBannerTitle")}
          </motion.h1>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen p-6">
        <main className="max-w-6xl mx-auto mt-6 space-y-12">
          <motion.section
            className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            {...fadeInUp}
          >
            <div>
              <h2 className="text-2xl font-bold text-[#152E51]">
                {t("workEnvironmentTitle")}
              </h2>
              <p className="text-gray-600 mt-4">
                {t("workEnvironmentParagraph1")}
              </p>
              <p className="text-gray-600 mt-2">
                {t("workEnvironmentParagraph2")}
              </p>
            </div>
            <motion.div
              className="relative w-full h-64"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/building1.jpg"
                alt="Work Environment"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          </motion.section>

          <motion.section
            className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            {...fadeInUp}
          >
            <motion.div
              className="relative w-full h-64"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/building2.jpg"
                alt="Company Building"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-[#152E51]">
                {t("careerOpportunityTitle")}
              </h2>
              <p className="text-gray-600 mt-4">
                {t("careerOpportunityParagraph1")}
              </p>
              <p className="text-gray-600 mt-2">
                {t("careerOpportunityParagraph2")}
              </p>
            </div>
          </motion.section>

          <motion.section
            className="relative bg-[#152E51] py-12 text-center text-white"
            {...fadeIn}
          >
            <h2 className="text-3xl font-bold">{t("hrStrategyTitle")}</h2>
          </motion.section>

          <motion.section
            className="relative max-w-5xl mx-auto -mt-10 bg-white p-6 rounded-lg shadow-lg"
            {...fadeInUp}
          >
            <div className="relative w-full h-64">
              <Image
                src="/images/building3.jpg"
                alt="HR Strategy"
                layout="fill"
                objectFit="cover"
                className="rounded-lg opacity-50"
              />
            </div>
            <div className="relative p-6 bg-white rounded-lg shadow-md -mt-36">
              <p className="text-gray-700">{t("hrStrategyParagraph1")}</p>
              <p className="text-gray-700 mt-2">{t("hrStrategyParagraph2")}</p>
              <p className="text-gray-700 mt-2">{t("hrStrategyParagraph3")}</p>
            </div>
          </motion.section>

          <motion.section
            className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg"
            {...fadeInUp}
          >
            <h2 className="text-3xl font-bold text-center text-[#152E51] mb-6">
              {t("positionTitle")}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-[#152E51]">
                <thead>
                  <tr className="bg-[#152E51] text-white text-left">
                    <th className="border border-white p-2">
                      {t("tableHeaderNo")}
                    </th>
                    <th className="border border-white p-2">
                      {t("tableHeaderPosition")}
                    </th>
                    <th className="border border-white p-2">
                      {t("tableHeaderLocation")}
                    </th>
                    <th className="border border-white p-2">
                      {t("tableHeaderQuantity")}
                    </th>
                    <th className="border border-white p-2">
                      {t("tableHeaderDeadline")}
                    </th>
                    <th className="border border-white p-2">
                      {t("tableHeaderDetails")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobListings.map((job, index) => (
                    <motion.tr
                      key={index}
                      className="border border-blue-800 text-gray-700"
                      whileHover={{ backgroundColor: "#f0f8ff" }}
                    >
                      <td className="border border-blue-800 p-2 text-center">
                        {job.stt}
                      </td>
                      <td className="border border-blue-800 p-2">
                        {job.position}
                      </td>
                      <td className="border border-blue-800 p-2">
                        {job.location}
                      </td>
                      <td className="border border-blue-800 p-2 text-center">
                        {job.quantity}
                      </td>
                      <td className="border border-blue-800 p-2 text-center">
                        {job.deadline}
                      </td>
                      <td className="border border-blue-800 p-2 text-left">
                        {job.details}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
