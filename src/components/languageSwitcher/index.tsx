import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const languages = [
    { code: "en", label: "EN" },
    { code: "vi", label: "VI" },
    { code: "zh", label: "CN" },
];

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [selectedLang, setSelectedLang] = useState("vi");
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const locales = ["en", "vi", "zh"];
        const segments = pathname.split("/").filter(Boolean);
        const detectedLocale = locales.includes(segments[0])
            ? segments[0]
            : "vi";
        setSelectedLang(detectedLocale);
    }, [pathname]);

    const changeLanguage = (lang: string) => {
        if (lang === selectedLang) return;
        const segments = pathname.split("/").filter(Boolean);
        const newPath = `/${lang}/${segments.slice(1).join("/")}`;
        router.push(newPath);
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
        >
            <button className="inline-flex items-center px-3 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-100">
                {selectedLang.toUpperCase()}
                <ChevronDown className="h-4 w-4 ml-1" />
            </button>

            {showDropdown && (
                <ul className="absolute left-0 top-full w-full bg-white rounded-md z-10">
                    {languages
                        .filter((lang) => lang.code !== selectedLang)
                        .map(({ code, label }) => (
                            <li
                                key={code}
                                className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                                onClick={() => changeLanguage(code)}
                            >
                                {label}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}
