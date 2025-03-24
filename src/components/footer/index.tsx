"use client";

import { MapPin, Mail, Phone, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer() {
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
    return (
        <footer className="bg-[#152E51] py-8 mt-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                <div>
                    <Image
                        src={"/images/logo-new.png"}
                        alt={"Bình Doanh"}
                        width={300}
                        height={180}
                        style={{
                            objectFit: "cover",
                            backgroundColor: "transparent",
                        }}
                    />

                    <p className="text-gray-400 text-base mt-4">
                        {t("vision")}
                    </p>
                </div>

                <div>
                    <div className="ml-24">
                        <h2 className="font-bold text-xl text-white mb-4">
                            SITEMAP
                        </h2>
                        <ul className="text-gray-400 text-base">
                            <li>
                                <Link
                                    href={`/${currentLocale}/about`}
                                    className="hover:underline"
                                >
                                    {t("about")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${currentLocale}/du-an`}
                                    className="hover:underline"
                                >
                                    {t("project")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${currentLocale}/tin-tuc`}
                                    className="hover:underline"
                                >
                                    {t("new")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`/${currentLocale}/tuyen-dung`}
                                    className="hover:underline"
                                >
                                    {t("recruitment")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold text-xl text-white mb-4">
                        CONTACT
                    </h2>
                    <p className="flex items-center gap-2 text-gray-400 text-base">
                        <MapPin size={28} /> {t("companyAddressFull")}
                    </p>
                    <p className="flex items-center gap-2 text-gray-400 text-base">
                        <Mail size={18} /> binhdoanhgroup@gmail.com
                    </p>
                    <p className="flex items-center gap-2 text-gray-400 text-base">
                        <Phone size={18} /> (+84) 91 379 57 65
                    </p>
                    <p className="flex items-center gap-2 text-gray-400 text-base">
                        <Facebook size={18} /> www.facebook.com/binhdoanhvn
                    </p>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-4">
                © 2024 BinhDoanh.com
            </div>
        </footer>
    );
}
