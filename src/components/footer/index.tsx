import { Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="h-auto mt-[32px] pt-[32px] pb-[32px] text-white bg-black/50 flex flex-row justify-center gap-[64px] pl-[32px] pr-[32px]">
      <div className="flex flex-col gap-[8px]">
        <h2 className="uppercase font-bold">Liên hệ</h2>
        <div className="flex flex-row gap-[8px]">
          <MapPin />
          <span>
            204/09 Nguyễn Văn Hưởng, P. Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh,
            Việt Nam
          </span>
        </div>
        <div className="flex flex-row gap-[8px]">
          <PhoneCall />
          <span>(+84) 358 500 195</span>
        </div>
        <div className="flex flex-row gap-[8px]">
          <Mail />
          <span>contact@binhdoanh.vn</span>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <h2 className="uppercase font-bold">Văn phòng đà nẵng</h2>
        <div className="flex flex-row gap-[8px]">
          <MapPin />
          <span>
            204/09 Nguyễn Văn Hưởng, P. Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh,
            Việt Nam
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <h2 className="uppercase font-bold">Theo dõi</h2>
        <div className="flex flex-row gap-[8px]">
          <Mail />
          <span>www.facebook.com/binhdoanhvn</span>
        </div>
      </div>
    </footer>
  );
}
