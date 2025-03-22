import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CoreValuesPage() {
    const t = useTranslations("HomePage");
    const values = [
        {
            title: t("integrityTitle"),
            description: t("integrityDescription"),
            icon: "/images/chinh-truc.png",
        },
        {
            title: t("respectTitle"),
            description: t("respectDescription"),
            icon: "/images/ton-trong.png",
        },
        {
            title: t("fairnessTitle"),
            description: t("fairnessDescription"),
            icon: "/images/cong-bang.png",
        },
        {
            title: t("ethicsTitle"),
            description: t("ethicsDescription"),
            icon: "/images/dao-duc.png",
        },
        {
            title: t("complianceTitle"),
            description: t("complianceDescription"),
            icon: "/images/tuan-thu.png",
        },
    ];

    return (
        <div className="container mx-auto py-10 px-5 text-center">
            <h1 className="text-3xl font-bold mb-4 text-[#DAB87A]">
                {t("coreValuesHeading")}
            </h1>
            <p className="mb-12 italic text-gray-600 text-lg">
                {t("coreValuesSubtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
                {values.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {/* <div className="bg-blue-700 rounded-full p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"> */}
                        <Image
                            src={item.icon}
                            alt={item.title}
                            width={130}
                            height={130}
                            className="object-contain"
                        />
                        {/* </div> */}
                        <h2 className="text-lg font-bold text-blue-800 mt-4 mb-2 text-lg">
                            {item.title}
                        </h2>
                        <p className="text-sm text-gray-600 max-w-xs text-lg">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
