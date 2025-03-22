"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// ✅ Import motion bằng dynamic để tắt SSR
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

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

  // Define animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Trick để chờ motion load trước khi render (tránh warning Next.js)
  const [showMotion, setShowMotion] = useState(false);
  useEffect(() => {
    setShowMotion(true);
  }, []);

  return (
    <div className="container mx-auto py-10 px-5 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#DAB87A]">
        {t("coreValuesHeading")}
      </h1>
      <p className="mb-12 italic text-gray-600 text-lg">
        {t("coreValuesSubtitle")}
      </p>

      {showMotion && (
        <MotionDiv
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((itemData, index) => (
            <MotionDiv
              key={index}
              className="flex flex-col items-center"
              variants={item}
            >
              <Image
                src={itemData.icon}
                alt={itemData.title}
                width={130}
                height={130}
                className="object-contain"
              />
              <h2 className="text-lg font-bold text-blue-800 mt-4 mb-2">
                {itemData.title}
              </h2>
              <p className="text-sm text-gray-600 max-w-xs text-lg">
                {itemData.description}
              </p>
            </MotionDiv>
          ))}
        </MotionDiv>
      )}
    </div>
  );
}
