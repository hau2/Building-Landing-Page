import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, PhoneCall } from "lucide-react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  variable: "--font-roboto-thin",
  subsets: ["vietnamese"],
  weight: ["100", "300"],
});

export const metadata: Metadata = {
  title: "CÔNG TY CỔ PHẦN XÂY DỰNG BÌNH DOANH",
  description:
    "BÌNH DOANH được hình thành và phát triển với khát khao tạo dựng nên những công trình kiến trúc kỳ vĩ có độ bền đến hàng thế kỷ.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <header>
          <div className="z-[999] bg-white p-4 fixed shadow-2xs left-0 right-0 flex justify-end">
            <div className="flex gap-[16px] items-center">
              <ul className="flex gap-5 text-white">
                <li>
                  <Link href={"/"} className="text-black">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-black">
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-black">
                    Năng lực thi công
                  </Link>
                </li>
                <li>
                  <Link href={"/du-an"} className="text-black">
                    Dự án
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-black">
                    Tin tức
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-black">
                    Tuyển dụng
                  </Link>
                </li>
              </ul>
              <Input placeholder="Search ..." className="w-[200px] bg-white" />
            </div>
          </div>
        </header>
        <div className="h-[80px]" />
        {children}
        <footer className="h-auto mt-[32px] pt-[32px] pb-[32px] text-white bg-black/50 flex flex-row justify-center gap-[64px] pl-[32px] pr-[32px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="uppercase font-bold">Liên hệ</h2>
            <div className="flex flex-row gap-[8px]">
              <MapPin />
              <span>
                204/09 Nguyễn Văn Hưởng, P. Thảo Điền, TP. Thủ Đức, TP. Hồ Chí
                Minh, Việt Nam
              </span>
            </div>
            <div className="flex flex-row gap-[8px]">
              <PhoneCall />
              <span>
                (+84) 358 500 195
              </span>
            </div>
            <div className="flex flex-row gap-[8px]">
              <Mail />
              <span>
                contact@binhdoanh.vn
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h2 className="uppercase font-bold">Văn phòng đà nẵng</h2>
            <div className="flex flex-row gap-[8px]">
              <MapPin />
              <span>
                204/09 Nguyễn Văn Hưởng, P. Thảo Điền, TP. Thủ Đức, TP. Hồ Chí
                Minh, Việt Nam
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h2 className="uppercase font-bold">Theo dõi</h2>
            <div className="flex flex-row gap-[8px]">
              <Mail />
              <span>
                www.facebook.com/binhdoanhvn
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
