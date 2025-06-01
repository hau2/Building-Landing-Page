"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "../languageSwitcher";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const t = useTranslations("HomePage");
    const pathname = usePathname();
    const [currentLocale, setCurrentLocale] = useState("vi");
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenDropdown((prev) => (prev === index ? null : index));
    };

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
                    title: t("steelProduction"),
                    link: `/${currentLocale}/construction-capacity/steel-production`,
                },
                {
                    title: t("constructionGallery"),
                    link: `/${currentLocale}/construction-capacity/construction-gallery`,
                },
            ],
        },
        { title: t("recruitment"), link: `/${currentLocale}/tuyen-dung` },
        { title: t("contact"), link: `/${currentLocale}/lien-he` },
    ];

    return (
        <header className="z-50 fixed top-0 left-0 right-0 bg-white shadow-md">
            <div className="flex justify-between items-center px-4 py-3 lg:px-20">
                {/* Logo */}
                <Link href="/" onClick={() => setMenuOpen(false)}>
                    <Image
                        src="/images/mainlogo.jpg"
                        alt="Bình Doanh"
                        width={160}
                        height={60}
                        className="object-cover"
                    />
                </Link>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-8 items-center">
                    <ul className="flex gap-6 text-black/80 font-semibold">
                        {menuItems.map((menu, index) => (
                            <li key={index} className="relative group">
                                <Link
                                    href={menu.link}
                                    className="uppercase text-[14px] hover:text-yellow-600 flex items-center gap-1 transition"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    {menu.title}
                                    {menu.subMenu && (
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                    )}
                                </Link>
                                {menu.subMenu && (
                                    <ul className="absolute left-0 top-full mt-2 w-[210px] bg-white shadow-md rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                        {menu.subMenu.map((sub, idx) => (
                                            <li
                                                key={idx}
                                                className="px-4 py-2 hover:text-yellow-600 transition"
                                            >
                                                <Link
                                                    onClick={() =>
                                                        setMenuOpen(!menuOpen)
                                                    }
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
                    <Button size="lg">
                        <a
                            href="https://pwa-app.leconghau.id.vn/BINH_DOANH_GROUP.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            E-Brochure
                        </a>
                    </Button>
                </nav>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed top-[80px] left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto px-6 pb-6 pt-4"
                    >
                        <ul className="flex flex-col gap-2 text-black/80 font-semibold">
                            {menuItems.map((menu, index) => (
                                <li key={index}>
                                    <div
                                        onClick={() =>
                                            menu.subMenu
                                                ? toggleDropdown(index)
                                                : setMenuOpen(false)
                                        }
                                        className="flex justify-between items-center py-2 cursor-pointer"
                                    >
                                        <Link href={menu.link}>
                                            {menu.title}
                                        </Link>
                                        {menu.subMenu && (
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${
                                                    openDropdown === index
                                                        ? "rotate-180 text-orange-500"
                                                        : ""
                                                }`}
                                            />
                                        )}
                                    </div>

                                    {/* Submenu */}
                                    {menu.subMenu && openDropdown === index && (
                                        <ul className="ml-4 mt-1 text-sm text-gray-700">
                                            {menu.subMenu.map((sub, idx) => (
                                                <li key={idx}>
                                                    <Link
                                                        href={sub.link}
                                                        onClick={() =>
                                                            setMenuOpen(false)
                                                        }
                                                        className="block py-1"
                                                    >
                                                        {sub.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}

                            <li>
                                <LanguageSwitcher />
                            </li>

                            <li>
                                <Button size="sm" className="w-full mt-2">
                                    <a
                                        href="https://pwa-app.leconghau.id.vn/BINH_DOANH_GROUP.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        E-Brochure
                                    </a>
                                </Button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
