"use client";

import Link from "next/link"; // ✅ Đúng cách, sử dụng `next/link`
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "../languageSwitcher";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation"; // ✅ Dùng `next/navigation`

export default function Header() {
  const t = useTranslations("HomePage");
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState("vi");

  useEffect(() => {
    const locales = ["en", "vi", "zh"];
    const segments = pathname.split("/").filter(Boolean);
    const detectedLocale = locales.includes(segments[0]) ? segments[0] : "vi";

    setCurrentLocale(detectedLocale);
    localStorage.setItem("locale", detectedLocale);
  }, [pathname]);

  console.log("pathname:", pathname);
  console.log("currentLocale:", currentLocale);

  return (
      <header>
          <div className="z-[999] bg-white p-[8px] fixed shadow-2xs left-0 right-0 flex justify-between">
              <div className="ml-20">
                  <Image
                      src={"/images/mainlogo.jpg"}
                      alt={"Bình Doanh"}
                      width={200}
                      height={80}
                      style={{ objectFit: "cover" }}
                  />
              </div>
              <div className="flex gap-[16px] flex-row items-center justify-between">
                  <ul className="flex gap-5 text-white">
                      <li>
                          <Link
                              href={`/${currentLocale}`}
                              className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold"
                          >
                              {t("homePage")}
                          </Link>
                      </li>
                      <li>
                          <Link
                              href={`/${currentLocale}/tong-quan`}
                              className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold"
                          >
                              {t("about")}
                          </Link>
                      </li>
                      <li>
                          <Link
                              href={`/${currentLocale}`}
                              className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold"
                          >
                              {t("capacity")}
                          </Link>
                      </li>
                      <li>
                          <Link
                              href={`/${currentLocale}/du-an`}
                              className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold"
                          >
                              {t("project")}
                          </Link>
                      </li>
                      <li>
                          <Link
                              href={`/${currentLocale}/tin-tuc`}
                              className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold"
                          >
                              {t("new")}
                          </Link>
                      </li>
                      <li>
                          <Link
                              href={`/${currentLocale}/tuyen-dung`}
                              className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold"
                          >
                              {t("recruitment")}
                          </Link>
                      </li>
                  </ul>
                  <LanguageSwitcher />
              </div>
          </div>
      </header>
  );
}
