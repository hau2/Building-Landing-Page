"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedDivider from "@/components/animations/LineAnimation";
import AnimatedText from "@/components/animations/AnimatedText";

export default function ChairmanMessage() {
    const t = useTranslations("chairmanMessages");

    return (
        <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold text-[#152E51]">
                    {t("chairmanMessageTitle")}
                </h2>
                <AnimatedDivider />
            </motion.div>

            <div
                className="relative bg-gray-100 rounded-xl overflow-hidden p-6 lg:p-12 flex flex-col lg:flex-row items-center lg:items-start justify-between mt-8"
                style={{
                    backgroundImage: "url('/images/du-an/duan-y-duoc-1.jpg')",
                    backgroundPosition: "right bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-white/50 pointer-events-none z-0" />

                {/* Avatar */}
                <div className="relative w-40 h-40 md:w-80 md:h-80 mb-6 lg:mb-0 lg:mr-12 z-10 mt-[32px]">
                    <div className="absolute inset-0 rounded-full bg-[#152E51] shadow-2xl">
                        <div className="absolute inset-1 bg-white rounded-full">
                            <Image
                                src="/images/CEO.jpg"
                                alt="Nguyễn Thanh Bình - Chủ tịch Bình Doanh Group"
                                fill
                                className="rounded-full object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Các đoạn văn hiển thị cùng lúc */}
                <div className="flex-1 text-gray-700 text-base md:text-l z-10 space-y-4">
                    <AnimatedText text={t("chairmanMessageParagraph1")} />
                    <AnimatedText text={t("chairmanMessageParagraph2")} />
                    <AnimatedText text={t("chairmanMessageParagraph3")} />
                    <AnimatedText text={t("chairmanMessageParagraph4")} />
                    <AnimatedText text={t("chairmanMessageParagraph5")} />
                    <AnimatedText text={t("chairmanMessageParagraph6")} />
                    <AnimatedText text={t("respectfully")} className="mt-6" />
                    <AnimatedText
                        text={t("chairmanMessageParagraph7")}
                        className="font-bold text-[#c79538] text-lg md:text-xl"
                    />
                    <AnimatedText
                        text={t("chairmanMessageParagraph8")}
                        className="mt-6 font-bold text-lg md:text-xl"
                    />
                </div>
            </div>
        </div>
    );
}
