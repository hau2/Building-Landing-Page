"use client";

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";

export default function VideoPopup() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative z-10 pl-[48px] mt-[16px] w-[400px]">
          <div className="flex flex-col text-white pl-0 hover:bg-red-400 hover:pl-[16px] pt-[16px] pr-[16px] pb-[16px] rounded-2xl transition-all duration-300 cursor-pointer">
            <div className="flex gap-[8px] items-center">
              <span className="inline-block font-bold">
                Làm những gì không thể làm được
              </span>
              <PlayCircle size={50} className="inline-block" />
            </div>
            <span className="inline-block">Xem video (4:45)</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogTitle>Làm những gì không thể làm được</DialogTitle>
        <video controls className="w-full rounded-lg">
          <source src="/videos/video5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  );
}
