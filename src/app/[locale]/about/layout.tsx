/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

  const tabRefs = useRef<any>({}); // Lưu ref cho từng tab

  useEffect(() => {
    // Khi pathname đổi, scroll tab tương ứng vào giữa
    const currentTab = tabRefs.current[pathname];
    if (currentTab) {
      currentTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [pathname]);

  useEffect(() => {
    const locales = ["en", "vi", "zh"];
    const segments = pathname.split("/").filter(Boolean);
    const detectedLocale = locales.includes(segments[0]) ? segments[0] : "vi";

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
            {t("aboutOverview")}
          </h1>
        </div>
      </div>
      <div className="w-full mx-auto">
      <div className="overflow-x-auto">
        <div className="flex border-b border-gray-200 bg-gray-100 rounded-t-lg min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.link}
              ref={(el: any) => (tabRefs.current[tab.link] = el)} // Gán ref
              onClick={() => router.push(tab.link)}
              className={`py-3 px-4 text-center text-sm font-semibold uppercase transition-all duration-300 border-r border-gray-300 last:border-r-0 whitespace-nowrap min-w-[140px] ${
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
    </div>

      {children}
    </div>
  );
}
