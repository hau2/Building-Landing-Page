// pages/hero.tsx
import Image from "next/image";
import Head from "next/head";
import { useTranslations } from "next-intl";

export default function HeroPage() {
    const t = useTranslations("HomePage");

    return (
        <div className="mb-12">
            <Head>
                <title>{t("title")}</title>
            </Head>

            <div className="relative w-full h-[calc(100vh-80px)]">
                <Image
                    src="/images/slide1.jpg"
                    alt="Hero background"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    quality={100}
                    priority
                />

                <div className="absolute left-10 bottom-10 bg-black/60 px-6 py-4 rounded-md shadow-xl max-w-[750px] backdrop-blur-sm space-y-2">
                    {/* Dòng 1 – vàng đồng nổi bật */}
                    <p className="text-gray-100 text-3xl md:text-4xl font-bold uppercase tracking-wide">
                        {t("sloganLine1")}
                    </p>

                    {/* Dòng 2 – trắng sáng hơn, rõ ràng */}
                    <p className="text-[#c79538] text-3xl md:text-4xl font-bold uppercase tracking-wide">
                        {t("sloganLine2")}
                    </p>

                    {/* Dòng 3 – xám xanh nhạt, nghiêng nhẹ */}
                    <p className="text-[#c79538] text-3xl md:text-4xl font-bold tracking-wide italic">
                        {t("sloganLine3")}
                    </p>
                </div>
            </div>
        </div>
    );
}
