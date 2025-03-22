"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hook/animation";

export default function VisionMission() {
  const t = useTranslations("HomePage");

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [visionControl, visionRef] = useInViewAnimation();
  const [imageControl, imageRef] = useInViewAnimation();
  const [missionControl, missionRef] = useInViewAnimation();

  return (
    <div className="container mx-auto py-16 px-8 flex flex-col items-center text-center">
      <motion.div
        className="max-w-4xl"
        ref={visionRef}
        variants={fadeUp}
        initial="hidden"
        animate={visionControl}
      >
        <h1 className="text-3xl font-bold text-[#DAB87A] mb-4">
          {t("visionTitle")}
        </h1>
        <p className="italic text-[#003DA5] text-lg  font-medium">
          {t("visionHighlight")}
        </p>
        <p className="text-gray-600 mt-4">{t("visionDescription")}</p>
      </motion.div>

      <motion.div
        ref={imageRef}
        variants={fadeUp}
        initial="hidden"
        animate={imageControl}
        className="w-full max-w-3xl mt-10 rounded-lg shadow-xl overflow-hidden"
      >
        <Image
          src="/images/vision-mission.jpg"
          alt="Tổng Giám đốc"
          width={1200}
          height={1200}
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        className="max-w-3xl mt-16"
        ref={missionRef}
        variants={fadeUp}
        initial="hidden"
        animate={missionControl}
      >
        <h2 className="text-3xl font-bold text-[#DAB87A] mb-4">
          {t("missionTitle")}
        </h2>
        <p className="italic text-[#003DA5] text-lg  font-medium">
          {t("missionHighlight")}
        </p>
        <p className="text-gray-600 mt-4">{t("missionDescription")}</p>
      </motion.div>
    </div>
  );
}
