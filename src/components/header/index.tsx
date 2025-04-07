"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LanguageSwitcher from "../languageSwitcher";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const t = useTranslations("HomePage");
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState("vi");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const locales = ["en", "vi", "zh"];
    const segments = pathname.split("/").filter(Boolean);
    const detectedLocale = locales.includes(segments[0]) ? segments[0] : "vi";
    setCurrentLocale(detectedLocale);
    localStorage.setItem("locale", detectedLocale);
  }, [pathname]);

  const menuItems = [
    { title: t("homePage"), link: `/${currentLocale}` },
    { title: t("about"), link: `/${currentLocale}/about` },
    { title: t("project"), link: `/${currentLocale}/du-an` },
    {
      title: t("capacity"),
      link: `/${currentLocale}/construction-capacity/our-business-lines`,
    },
    { title: t("recruitment"), link: `/${currentLocale}/tuyen-dung` },
    { title: t("contact"), link: `/${currentLocale}/lien-he` },
  ];

  return (
    <header className="z-50 fixed top-0 left-0 right-0 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3 lg:px-20">
        {/* Logo */}
        <Link href={`/${currentLocale}`} onClick={() => setMenuOpen(false)}>
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
                  onClick={() => setMenuOpen(false)}
                >
                  {menu.title}
                </Link>
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
                  <Link
                    href={menu.link}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2"
                  >
                    {menu.title}
                  </Link>
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
