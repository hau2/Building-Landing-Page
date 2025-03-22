"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const t = useTranslations("HomePage");
    const router = useRouter();
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState("vi");
    const tabs = [
        { title: t("aboutOverview"), link: `/${currentLocale}/about` },
        {
            title: t("aboutForeword"),
            link: `/${currentLocale}/about/foreword`,
        },
        {
            title: t("aboutCoreVision"),
            link: `/${currentLocale}/about/core-vision`,
        },
        {
            title: t("aboutStaff"),
            link: `/${currentLocale}/about/staff`,
        },
        {
            title: t("aboutAward"),
            link: `/${currentLocale}/about/award`,
        },
        {
            title: t("aboutCustomer"),
            link: `/${currentLocale}/about/customer`,
        },
    ];
    useEffect(() => {
        const locales = ["en", "vi", "zh"];
        const segments = pathname.split("/").filter(Boolean);
        const detectedLocale = locales.includes(segments[0])
            ? segments[0]
            : "vi";

        setCurrentLocale(detectedLocale);
        localStorage.setItem("locale", detectedLocale);
    }, [pathname]);
    return (
        <div>
            <div className="relative w-full h-[300px]">
                <Image
                    src="/images/duan.png"
                    alt="Background"
                    fill
                    style={{ objectFit: "cover", zIndex: -1 }}
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 p-10 text-white h-full">
                    <h1 className="text-5xl h-full flex justify-center items-center">
                        {t("aboutForeword")}
                    </h1>
                </div>
            </div>
            <div className="w-full mx-auto">
                <div className="flex border-b border-gray-200 bg-gray-100 rounded-t-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab.link}
                            onClick={() => router.push(tab.link)}
                            className={`flex-1 py-3 text-center text-sm font-semibold uppercase transition-all duration-300 border-r border-gray-300 last:border-r-0 ${
                                pathname === tab.link
                                    ? "border-b-4 border-[#c79538] text-[#c79538] bg-white"
                                    : "text-gray-600 hover:text-[#c79538] hover:bg-gray-200"
                            }`}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>
            </div>
            {children}
        </div>
    );
}
