"use client";

import { FadeUp } from "@/components/animations";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import AnimatedDivider from "../animations/LineAnimation";
import { RESOURCES, STORAGE_PREFIX } from "@/constants/storage-prefix";

export function SteelProduction() {
    const [open, setOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<string | null>(null);

    const t = useTranslations("HomePage");

    const handleOpen = (url: string) => {
        setCurrentVideo(url);
        setOpen(true);
    };

    const getVideoUrl = () => {
        const locale = localStorage.getItem("locale") || "vi"
        if(locale === "vi") {
            return RESOURCES.videos.thep.vn;
        } else if(locale === "cn") {
            return RESOURCES.videos.thep.cn;
        } else {
            return RESOURCES.videos.thep.en;
        }
    }

    return (
        <section className="px-4 py-4 sm:px-8 md:px-20 w-full">
            <FadeUp>
                <h2 className="text-4xl font-bold text-[#152E51]">
                    {t("productTitle")}
                </h2>
                <AnimatedDivider></AnimatedDivider>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div
                        onClick={() => handleOpen(`${STORAGE_PREFIX}/${getVideoUrl()}`)}
                        className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
                    >
                        <Image
                            src={'/images/sxkeothep.png'}
                            alt={""}
                            width={500}
                            height={300}
                            className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition flex items-center justify-center">
                            <PlayCircle className="text-white w-16 h-16 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="dialog-video-large overflow-hidden">
                    <DialogTitle className="hidden">Video Nổi Bật</DialogTitle>
                    <video
                        src={currentVideo || ""}
                        className="w-full h-full rounded-md"
                        autoPlay
                        playsInline
                        loop
                        preload="auto"
                        controls
                    />
                </DialogContent>
            </Dialog>
        </section>
    );
}
