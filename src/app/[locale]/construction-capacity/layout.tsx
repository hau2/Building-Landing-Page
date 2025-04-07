"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ConstructionCapacityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const t = useTranslations("HomePage");
    return (
        <div>
            <div className="relative w-full h-[300px]">
                <Image
                    src="/images/du-an/duan-y-duoc-9.jpg"
                    alt="Background"
                    fill
                    style={{ objectFit: "cover", zIndex: -1 }}
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 p-10 text-white h-full">
                    <h1 className="text-5xl h-full flex justify-center items-center">
                        {t("constructionBusinessLines")}
                    </h1>
                </div>
            </div>
            {children}
        </div>
    );
}
