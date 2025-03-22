import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function OurBusinessLines() {
    const t = useTranslations("ourBusiness");

    return (
        <>
            <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Nội dung chữ */}
                <div>
                    <h2 className="text-3xl font-bold text-[#152E51] mb-4">
                        {t("generalTitle")}
                    </h2>
                    <p className="text-gray-700 mb-4">{t("paragraph1")}</p>
                    <p className="text-gray-700 mb-4">{t("paragraph2")}</p>
                    <p className="text-gray-700 mb-6">{t("paragraph3")}</p>
                    <div className="bg-gray-100 border-l-4 border-red-500 p-4 text-center">
                        <p className="text-[#152E51] font-bold uppercase">
                            {t("slogan")}
                        </p>
                    </div>
                </div>

                {/* Hình ảnh */}
                <div className="grid grid-cols-2 gap-4 items-center">
                    <Image
                        src="/images/du-an/duan-shing-mark-vina-8.jpg"
                        height={500}
                        width={500}
                        alt="Dự án tiêu biểu"
                        className="rounded-lg shadow-lg"
                        style={{ height: 500, objectFit: "cover" }}
                    />
                    <Image
                        src="/images/du-an/duan-shing-mark-vina-9.jpg"
                        width={500}
                        height={300}
                        alt="Dự án tiêu biểu khác"
                        className="rounded-lg shadow-lg"
                        style={{ height: 350, objectFit: "cover" }}
                    />
                </div>
            </section>

            <section className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-3xl font-bold text-[#152E51] mb-4">
                    {t("advantagesTitle")}
                </h2>
                <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                    {t("advantagesDescription")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                        >
                            <h3 className="font-bold text-[#DAB87A] text-[20px] mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-700">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
