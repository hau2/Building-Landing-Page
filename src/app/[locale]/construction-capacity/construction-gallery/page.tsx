import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const images = [
    "/images/thicong1.jpg",
    "/images/thicong2.jpg",
    "/images/thicong3.jpg",
    "/images/thicong4.jpg",
    "/images/thicong5.jpg",
    "/images/thicong6.jpg",
    "/images/du-an/duan-apex-1.jpg",
    "/images/du-an/duan-apex-2.jpg",
    "/images/du-an/duan-apex-3.jpg",
    "/images/du-an/duan-apex-4.jpg",
    "/images/du-an/duan-apex-5.jpg",
    "/images/du-an/duan-apex-6.jpg",
    "/images/du-an/duan-apex-7.jpg",
    "/images/du-an/duan-apex-8.jpg",
    "/images/du-an/duan-apex-9.jpg",
    "/images/du-an/duan-apex-10.jpg",
    "/images/du-an/duan-broad-ocean-1.jpg",
    "/images/du-an/duan-broad-ocean-2.jpg",
    "/images/du-an/duan-broad-ocean-3.jpg",
    "/images/du-an/duan-broad-ocean-4.jpg",
    "/images/du-an/duan-broad-ocean-5.jpg",
    "/images/du-an/duan-broad-ocean-6.jpg",
    "/images/du-an/duan-broad-ocean-7.jpg",
    "/images/du-an/duan-broad-ocean-8.jpg",
    "/images/du-an/duan-broad-ocean-9.jpg",
    "/images/du-an/duan-broad-ocean-10.jpg",
    "/images/du-an/duan-broad-ocean-11.jpg",
    "/images/du-an/duan-fullway-1.jpg",
    "/images/du-an/duan-fullway-2.jpg",
    "/images/du-an/duan-fullway-3.jpg",
    "/images/du-an/duan-fullway-4.jpg",
    "/images/du-an/duan-fullway-5.jpg",
    "/images/du-an/duan-fullway-6.jpg",
    "/images/du-an/duan-fullway-7.jpg",
    "/images/du-an/duan-fullway-8.jpg",
    "/images/du-an/duan-fullway-9.jpg",
    "/images/du-an/duan-summer-wind-1.jpg",
    "/images/du-an/duan-summer-wind-2.jpg",
    "/images/du-an/duan-summer-wind-3.jpg",
    "/images/du-an/duan-summer-wind-4.jpg",
    "/images/du-an/duan-summer-wind-5.jpg",
    "/images/du-an/duan-summer-wind-6.jpg",
    "/images/du-an/duan-summer-wind-7.jpg",
    "/images/du-an/duan-summer-wind-8.jpg",
    "/images/du-an/duan-summer-wind-9.jpg",
    "/images/du-an/duan-summer-wind-10.jpg",
    "/images/du-an/duan-summer-wind-11.jpg",
];

export default function ConstructionGallery() {
    const t = useTranslations("HomePage");

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl text-[#152E51] font-bold text-center mb-6">
                {t("constructionGallery")}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative w-full h-64 rounded-lg overflow-hidden shadow-md"
                    >
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
