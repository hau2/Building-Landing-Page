"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewAnimation } from "@/hook/animation";

export default function VisionMission() {
  const t = useTranslations("HomePage");

  const fadeLeftStrong = {
    hidden: { opacity: 0, x: -150, rotateY: -45, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeRightStrong = {
    hidden: { opacity: 0, x: 150, scale: 0.8, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: "easeOut", delay: 0.3 },
    },
  };

  const zoomInRotate = {
    hidden: { opacity: 0, scale: 0.7, rotate: -10, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: { duration: 1.1, ease: "easeOut", delay: 0.15 },
    },
  };

  const [visionControl, visionRef] = useInViewAnimation();
  const [imageControl, imageRef] = useInViewAnimation();
  const [missionControl, missionRef] = useInViewAnimation();

  return (
    <section className="container mx-auto py-24 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Vision */}
        <motion.div
          ref={visionRef}
          variants={fadeLeftStrong}
          initial="hidden"
          animate={visionControl}
          className="text-left md:col-span-1"
        >
          <h2 className="text-4xl font-bold text-[#DAB87A] mb-4">
            {t("visionTitle")}
          </h2>
          <p className="italic text-[#003DA5] text-lg font-medium">
            {t("visionHighlight")}
          </p>
          <p className="text-gray-600 mt-4">{t("visionDescription")}</p>
        </motion.div>

        {/* Image */}
        <motion.div
          ref={imageRef}
          variants={zoomInRotate}
          initial="hidden"
          animate={imageControl}
          className="rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:brightness-110 md:col-span-1"
        >
          <Image
            src="/images/vision-mission.jpg"
            alt="Tầm nhìn và sứ mệnh"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Mission */}
        <motion.div
          ref={missionRef}
          variants={fadeRightStrong}
          initial="hidden"
          animate={missionControl}
          className="text-left md:col-span-1"
        >
          <h2 className="text-4xl font-bold text-[#DAB87A] mb-4">
            {t("missionTitle")}
          </h2>
          <p className="italic text-[#003DA5] text-lg font-medium">
            {t("missionHighlight")}
          </p>
          <p className="text-gray-600 mt-4">{t("missionDescription")}</p>
        </motion.div>
      </div>
    </section>
  );
}
