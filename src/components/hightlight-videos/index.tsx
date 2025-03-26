"use client";

import { FadeUp } from "@/components/animations";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const videos = [
  {
    id: 4,
    title: "Sự kiện cuối năm",
    thumbnail: "/images/videonoibatthumb4.png",
    url: "https://pwa-app.leconghau.id.vn/videonoibat4.mp4",
  },
  {
    id: 5,
    title: "Sự kiện cuối năm",
    thumbnail: "/images/videonoibatthumb5.png",
    url: "https://pwa-app.leconghau.id.vn/videonoibat5.mp4",
  },
  {
    id: 1,
    title: "Công trường thi công",
    thumbnail: "/images/videonoibatthumb1.png",
    url: "https://pwa-app.leconghau.id.vn/videonoibat1.mp4",
  },
  {
    id: 2,
    title: "Doanh nghiệp xuất sắc 2021",
    thumbnail: "/images/videonoibatthumb2.png",
    url: "https://pwa-app.leconghau.id.vn/videonoibat2.mp4",
  },
  {
    id: 3,
    title: "Sự kiện cuối năm",
    thumbnail: "/images/videonoibatthumb3.png",
    url: "https://pwa-app.leconghau.id.vn/videonoibat3.mp4",
  },
];

export function VideoGallery() {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const t = useTranslations("HomePage");

  const handleOpen = (url: string) => {
    setCurrentVideo(url);
    setOpen(true);
  };

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <FadeUp>
        <h2 className="text-4xl font-bold text-[#152E51] mb-10 border-b pb-4">
          {t("projectVideoHighlightTitle")}
        </h2>
      </FadeUp>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => handleOpen(video.url)}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={video.thumbnail}
              alt={""}
              width={500}
              height={300}
              className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition flex items-center justify-center">
              <PlayCircle className="text-white w-16 h-16 opacity-80 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="dialog-video-large overflow-hidden">
          <DialogTitle className="hidden">Video Nổi Bật</DialogTitle>
          <video
            src={currentVideo || ""}
            className="w-full h-full rounded-md"
            controls
            autoPlay
            playsInline
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
