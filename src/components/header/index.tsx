"use client";

import Link from "next/link"; // ✅ Đúng cách, sử dụng `next/link`
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "../languageSwitcher";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation"; // ✅ Dùng `next/navigation`
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Header() {
    const t = useTranslations("HomePage");
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState("vi");

    useEffect(() => {
        const locales = ["en", "vi", "zh"];
        const segments = pathname.split("/").filter(Boolean);
        const detectedLocale = locales.includes(segments[0])
            ? segments[0]
            : "vi";

        setCurrentLocale(detectedLocale);
        localStorage.setItem("locale", detectedLocale);
    }, [pathname]);

    const menuItems = [
        { title: t("homePage"), link: `/${currentLocale}` },
        {
            title: t("about"),
            link: `/${currentLocale}/about`,
            subMenu: [
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
            ],
        },
        {
            title: t("project"),
            link: `/${currentLocale}/du-an`,
        },
        {
            title: t("capacity"),
            link: `/${currentLocale}/construction-capacity/our-business-lines`,
            subMenu: [
                {
                    title: t("constructionBusinessLines"),
                    link: `/${currentLocale}/construction-capacity/our-business-lines`,
                },
                {
                    title: t("constructionGallery"),
                    link: `/${currentLocale}/construction-capacity/construction-gallery`,
                },
            ],
        },
        { title: t("new"), link: `/${currentLocale}/tin-tuc` },
        {
            title: t("recruitment"),
            link: `/${currentLocale}/tuyen-dung`,
        },
    ];

    return (
        <header>
            <div className="z-[49] bg-white p-[8px] fixed shadow-2xs left-0 right-0 flex justify-between">
                <div className="ml-20">
                    <Image
                        src={"/images/mainlogo.jpg"}
                        alt={"Bình Doanh"}
                        width={200}
                        height={80}
                        style={{ objectFit: "cover" }}
                    />
                </div>

                {/* Menu */}
                <nav className="flex gap-8 items-center">
                    <ul className="flex gap-6 text-black/80 font-semibold">
                        {menuItems.map((menu, index) => (
                            <li key={index} className="relative group">
                                <Link
                                    href={menu.link}
                                    className="uppercase text-[14px] hover:text-yellow-600 flex items-center gap-1 transition duration-300"
                                >
                                    {menu.title}
                                    {menu.subMenu && (
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {menu.subMenu && (
                                    <ul className="absolute left-0 top-full mt-2 w-[210px] bg-white shadow-md rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        {menu.subMenu.map((sub, idx) => (
                                            <li
                                                key={idx}
                                                className="px-4 py-2 hover:text-yellow-600 transition"
                                            >
                                                <Link
                                                    href={sub.link}
                                                    className="block text-sm"
                                                >
                                                    {sub.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <LanguageSwitcher />
                    <div className="flex items-center justify-center">
                        <Button size={"lg"} className="m-auto">
                            <a
                                href="https://pwa-app.leconghau.id.vn/BINH_DOANH_GROUP.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                E-Brochure
                            </a>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
