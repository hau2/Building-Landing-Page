"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export interface IDuAn {
    id: string;
    name: string;
    image: string;
    investor: string;
    address: string;
    totalInvestment: number;
    businessSector: string;
    constructionPeriod: string;
    detailImages: string[];
    status: string;
}

export default function DuAnItem(props: Readonly<{ item: IDuAn }>) {
    const t = useTranslations("project");
    const commonTranslate = useTranslations("HomePage");

    console.log("aaaaaaa", t);
    const [isHovered, setIsHovered] = useState(false);
    const handleNavigate = () => {
        localStorage.setItem("duAnData", JSON.stringify(props.item));
    };
    return (
        <div
            className="relative w-[400px] h-[300px] overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link
                href={`/${localStorage.getItem("locale") || "vi"}/du-an/${
                    props.item.id
                }`}
                onClick={handleNavigate}
                className="relative w-full h-full block"
            >
                <Image
                    src={props.item.image}
                    alt={t(`${props.item.id}.name`)}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/2 transition-opacity duration-500 ease-in-out hover:bg-black/20"></div>
                {!isHovered && (
                    <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-500 ease-in-out">
                        <h3 className="font-bold text-xl">
                            {t(`${props.item.id}.name`)}
                        </h3>
                        <p className="text-l opacity-90">
                            {t(`${props.item.id}.businessSector`)}
                        </p>
                    </div>
                )}

                {isHovered && (
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 text-white flex flex-col gap-2 transition-opacity duration-500 ease-in-out">
                        <p className="text-sm font-bold text-white">
                            {t(`${props.item.id}.businessSector`)}
                        </p>
                        <p className="text-sm opacity-90 flex items-center gap-2">
                            <MapPin
                                size={16}
                                className="text-gray-500 text-white"
                            />
                            {t(`${props.item.id}.address`)}
                        </p>
                        <p className="text-sm opacity-90 flex items-center gap-2">
                            <Calendar
                                size={16}
                                className="text-gray-500 text-white"
                            />
                            {props.item.constructionPeriod}
                        </p>
                        <button className="border border-white py-2 px-4 text-white font-semibold uppercase hover:bg-white hover:text-black transition-all duration-300">
                            {commonTranslate("viewDetail")}
                        </button>
                    </div>
                )}
            </Link>
        </div>
    );
}
