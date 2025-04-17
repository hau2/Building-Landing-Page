"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoreValuesPage() {
  const t = useTranslations("HomePage");

  const values = [
    {
      title: t("integrityTitle"),
      description: t("integrityDescription"),
      icon: "/images/chinh-truc.png",
    },
    {
      title: t("respectTitle"),
      description: t("respectDescription"),
      icon: "/images/ton-trong.png",
    },
    {
      title: t("fairnessTitle"),
      description: t("fairnessDescription"),
      icon: "/images/cong-bang.png",
    },
    {
      title: t("ethicsTitle"),
      description: t("ethicsDescription"),
      icon: "/images/dao-duc.png",
    },
    {
      title: t("complianceTitle"),
      description: t("complianceDescription"),
      icon: "/images/tuan-thu.png",
    },
  ];

  const getDirectionVariant = (isEven: boolean) => ({
    hidden: {
      x: isEven ? 120 : -120,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  });

  return (
    <section className="container mx-auto px-6 text-center">
      <motion.h1
        className="text-4xl font-bold text-[#DAB87A] mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("coreValuesHeading")}
      </motion.h1>

      <motion.p
        className="text-gray-600 italic mb-14 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {t("coreValuesSubtitle")}
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {values.map((item, index) => {
          const isEven = index % 2 === 0;
          const variants = getDirectionVariant(isEven);

          return (
            <motion.div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md flex flex-col items-center transition hover:shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants}
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-24 h-24 mb-4 rounded-full flex items-center justify-center bg-gray-50 shadow-sm"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
              <h2 className="text-lg font-semibold text-blue-800 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 max-w-[180px]">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
