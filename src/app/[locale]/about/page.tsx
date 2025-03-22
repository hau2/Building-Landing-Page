"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function TongQuan() {
    const t = useTranslations("HomePage");

    return (
        <div>
            <div className="pl-[32px] pr-[32px] my-[32px]">
                <div className="max-w-7xl mx-auto my-[16px] bg-white border-1 overflow-hidden flex flex-col sm:flex-row">
                    {/* Cột bên trái: Hình ảnh và Slogan */}
                    <div className="relative bg-blue-100 flex flex-1 items-center justify-center p-10">
                        <Image
                            src="/images/tongquan1.jpg" // Thay thế bằng đường dẫn ảnh thực tế
                            alt="Company Building"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                        <div className="absolute z-10 top-[20px] right-[20px]">
                            <h2 className="text-orange-500 font-semibold text-2xl leading-tight uppercase">
                                BUILD TRUST <br /> CREATE VALUE
                            </h2>
                        </div>
                    </div>

                    {/* Cột bên phải: Thông tin công ty */}
                    <div className="flex-1 p-10 bg-white text-gray-800">
                        <div className="grid grid-cols-2 gap-x-1 gap-y-4">
                            <div className="font-semibold">{t("fullName")}</div>
                            <div className="ml-1">{t("companyName")}</div>

                            <div className="font-semibold">
                                {t("shortName")}
                            </div>
                            <div className="ml-1">BÌNH DOANH</div>

                            <div className="font-semibold">{t("taxCode")}</div>
                            <div className="ml-1">360 079 69 42</div>

                            <div className="font-semibold">
                                {t("charterCapital")}
                            </div>
                            <div className="ml-1">200.000.000.000 VND</div>

                            <div className="font-semibold">
                                {t("headOffice")}
                            </div>
                            <div className="ml-1">
                                {t("companyAddressFull")}
                            </div>

                            <div className="font-semibold">
                                {t("phoneNumber")}
                            </div>
                            <div className="ml-1">(+84) 91 379 57 65</div>

                            <div className="font-semibold">Website</div>
                            <div className="ml-1">
                                <a
                                    href="https://centralcons.vn"
                                    className="text-blue-500 hover:underline"
                                >
                                    binhdoanh.com
                                </a>
                            </div>

                            <div className="font-semibold">Email</div>
                            <div className="ml-1">
                                <a
                                    href="mailto:binhdoanhgroup@gmail.com"
                                    className="text-blue-500 hover:underline"
                                >
                                    binhdoanhgroup@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto my-12 flex flex-col-reverse md:flex-row items-center gap-8">
                    {/* Cột bên trái: Nội dung */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-orange-500 font-bold text-3xl md:text-4xl mb-4">
                            {t("slogan")}
                        </h2>
                        <p className="text-gray-800 leading-relaxed mb-4">
                            {t("description")}
                        </p>
                        <p className="text-gray-800 leading-relaxed mb-4">
                            {t("serviceCommitment")}
                        </p>
                        <p className="text-gray-800 leading-relaxed">
                            {t("brandStatement")}
                        </p>
                    </div>

                    {/* Cột bên phải: Ảnh */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/images/tongquan2.jpg" // Thay bằng đường dẫn ảnh thực tế
                            alt="Construction Site"
                            width={800}
                            height={500}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="p-[32px] flex items-center justify-center">
                <a
                    href="https://pwa-app.leconghau.id.vn/BINH_DOANH_GROUP.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="m-auto h-[60px] w-[150px] rounded-2xl">
                        E-Brochure
                    </Button>
                </a>
            </div>
        </div>
    );
}
