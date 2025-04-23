"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { FadeUp } from "@/components/animations";

export default function ChairmanMessage() {
    const t = useTranslations("chairmanMessages");
    return (
        <div className="py-16 px-4 md:px-12 lg:px-24 bg-white">
            <FadeUp>
                <h2 className="text-4xl font-bold text-[#152E51] mb-10 border-b pb-4">
                    {t("chairmanMessageTitle")}
                </h2>
            </FadeUp>

            <FadeUp>
                <div
                    className="relative bg-gray-100 rounded-xl overflow-hidden p-6 lg:p-12 flex flex-col lg:flex-row items-center lg:items-start justify-between"
                    style={{
                        backgroundImage:
                            "url('/images/du-an/duan-y-duoc-1.jpg')",
                        backgroundPosition: "right bottom",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        objectFit: "contain",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/100 to-white/60 pointer-events-none z-0"></div>

                    <div className="relative w-40 h-40 md:w-80 md:h-80 mb-6 lg:mb-0 lg:mr-12 z-10 mt-[32px]">
                        <div className="absolute inset-0 rounded-full bg-[#152E51] shadow-2xl">
                            <div className="absolute inset-1 bg-white rounded-full">
                                <Image
                                    src="/images/CEO.jpg"
                                    alt="Nguyễn Thanh Bình - Chủ tịch Bình Doanh Group"
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 text-gray-700 text-base md:text-l z-10 space-y-4">
                        <p>{t("chairmanMessageParagraph1")}</p>
                        <p>{t("chairmanMessageParagraph2")}</p>
                        <p>{t("chairmanMessageParagraph3")}</p>
                        <p>{t("chairmanMessageParagraph4")}</p>
                        <p>{t("chairmanMessageParagraph5")}</p>
                        <p>{t("chairmanMessageParagraph6")}</p>
                        <p className="mt-6  text-gray-700 text-base md:text-l">
                            {t("respectfully")}
                        </p>
                        <p className=" font-bold text-[#c79538] text-lg md:text-xl" style={{fontWeight: 700}}>
                            {t("chairmanMessageParagraph7")}
                        </p>
                        <p className="mt-6 font-bold text-lg md:text-xl">
                            {t("chairmanMessageParagraph8")}
                        </p>
                    </div>
                </div>
            </FadeUp>
        </div>
    );
}
