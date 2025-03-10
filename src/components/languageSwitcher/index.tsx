"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const languages = [
  { code: "en", label: "EN English" },
  { code: "vi", label: "VN Vietnamese" },
  { code: "zh", label: "CN China" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState("vi"); // ✅ Giá trị mặc định

  useEffect(() => {
    const locales = ["en", "vi", "zh"];
    const segments = pathname.split("/").filter(Boolean);
    const detectedLocale = locales.includes(segments[0]) ? segments[0] : "vi";
    setSelectedLang(detectedLocale);
  }, [pathname]);

  const changeLanguage = (lang: string) => {
    if (lang === selectedLang) return; // ✅ Không reload nếu ngôn ngữ giống nhau

    const segments = pathname.split("/").filter(Boolean);
    const newPath = `/${lang}/${segments.slice(1).join("/")}`; // ✅ Giữ nguyên đường dẫn sau `locale`

    router.push(newPath);
  };

  return (
    <div className="relative">
      <select
        className="block w-40 p-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        value={selectedLang}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languages.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
