import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="z-[999] bg-white p-[8px] fixed shadow-2xs left-0 right-0 flex justify-between">
        <div>
          <Image
            src={"/images/mainlogo.jpg"}
            alt={"Bình Doanh"}
            width={200}
            height={80}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex gap-[16px] fle-row items-center justify-between">
          <ul className="flex gap-5 text-white">
            <li>
              <Link href={"/"} className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href={"/tong-quan"} className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link href={"/"} className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold">
                Năng lực thi công
              </Link>
            </li>
            <li>
              <Link href={"/du-an"} className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold">
                Dự án
              </Link>
            </li>
            <li>
              <Link href={"/"} className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold">
                Tin tức
              </Link>
            </li>
            <li>
              <Link href={"/"} className="uppercase text-[14px] hover:text-yellow-600 text-black/70 font-semibold">
                Tuyển dụng
              </Link>
            </li>
          </ul>
          <Input placeholder="Search ..." className="w-[200px] bg-white" />
        </div>
      </div>
    </header>
  );
}
