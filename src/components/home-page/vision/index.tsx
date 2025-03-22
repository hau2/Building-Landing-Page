import { useTranslations } from "next-intl";
import Image from "next/image";

export default function VisionMission() {
    const t = useTranslations("HomePage");

    return (
        <div className="container mx-auto py-16 px-8 flex flex-col items-center text-center">
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold text-[#DAB87A] mb-4">
                    {t("visionTitle")}
                </h1>
                <p className="italic text-[#003DA5] text-lg  font-medium">
                    {t("visionHighlight")}
                </p>
                <p className="text-gray-600 mt-4">{t("visionDescription")}</p>
            </div>

            <Image
                src="/images/vision-mission.jpg"
                alt="Tổng Giám đốc"
                width={1200}
                height={1200}
                className="w-full max-w-3xl mt-10 rounded-lg shadow-xl"
            />

            <div className="max-w-3xl mt-16">
                <h2 className="text-3xl font-bold text-[#DAB87A] mb-4">
                    {t("missionTitle")}
                </h2>
                <p className="italic text-[#003DA5] text-lg  font-medium">
                    {t("missionHighlight")}
                </p>
                <p className="text-gray-600 mt-4">{t("missionDescription")}</p>
            </div>
        </div>
    );
}
