// pages/factory.tsx
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FactoryPage() {
    const t = useTranslations("SteelFactory");
    return (
        <>
            <div className="px-6 py-10 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-[#152E51] transition-opacity duration-700 opacity-100">
                    {t("title")}
                </h1>

                <p className="text-lg text-gray-700 mb-10 text-justify leading-relaxed animate-fade-in">
                    {t("description")}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-105">
                        <Image
                            src="/images/steel1.JPG"
                            alt="Quá trình thi công nền móng nhà máy"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-105">
                        <Image
                            src="/images/steel2.JPG"
                            alt="Khung thép nhà máy đang thi công"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
