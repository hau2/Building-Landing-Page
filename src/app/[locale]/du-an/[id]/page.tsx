"use client";

import { useEffect, useState } from "react";
import { IDuAn } from "@/components/du-an/du-an-item";
import Image from "next/image";
import {
  Building,
  MapPin,
  Wrench,
  Calendar,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Briefcase,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";

import { motion } from "framer-motion";

export default function DuAnDetail() {
  const [item, setItem] = useState<IDuAn | null>(null);
  const t = useTranslations("HomePage");
  const projectTranslate = useTranslations("project");

  useEffect(() => {
    const storedData = localStorage.getItem("duAnData");
    if (storedData) {
      setItem(JSON.parse(storedData));
    }
  }, []);

  return (
    <motion.div
      className="px-4 sm:px-10 md:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-4 mt-8 text-[#152E51]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {t("projectHighlightTitle")}
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row max-w-7xl mx-auto gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hình ảnh dự án */}
        <div className="w-full md:w-1/2">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-[#DAB87A]"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {item && projectTranslate(`${item.id}.name`)}
          </motion.h2>
          <div className="mt-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={item?.image || "/placeholder.jpg"}
                alt={item?.name || ""}
                width={800}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* Thông tin dự án */}
        <motion.div
          className="w-full md:w-1/2 space-y-10 mt-10 md:mt-20 md:ml-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                  <Building /> {t("investor")}
                </h4>
                <p className="text-base text-gray-700 mt-2">
                  {item?.investor || "Đang cập nhật"}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                  <Briefcase /> {t("businessSector")}
                </h4>
                <p className="text-base text-gray-700 mt-2">
                  {projectTranslate(`${item?.id}.businessSector`)}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                  <MapPin /> {t("address")}
                </h4>
                <p className="text-base text-gray-700 mt-2">
                  {projectTranslate(`${item?.id}.address`)}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                  <Calendar /> {t("constructionPeriod")}
                </h4>
                <p className="text-base text-gray-700 mt-2">
                  {item?.constructionPeriod}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                  <Wrench /> {t("status")}
                </h4>
                <p className="text-base text-gray-700 mt-2">
                  {projectTranslate(`${item?.id}.status`)}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                  <DollarSign /> {t("totalInvestment")}
                </h4>
                <p className="text-base text-gray-700 mt-2">
                  {item?.totalInvestment}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hình ảnh chi tiết */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold mb-4 mt-8 text-[#152E51]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {t("projectImagesTitle")}
      </motion.h1>

      <motion.div
        className="w-full mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative mx-auto px-2 sm:px-4 md:px-10 max-w-[1460px]">
          <button className="custom-prev absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full z-10 hover:bg-black/80 transition">
            <ChevronLeft size={20} />
          </button>
          <button className="custom-next absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full z-10 hover:bg-black/80 transition">
            <ChevronRight size={20} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000 }}
            speed={800}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {item?.detailImages.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="w-full h-[240px] sm:h-[300px] md:h-[360px] relative"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </motion.div>
  );
}
