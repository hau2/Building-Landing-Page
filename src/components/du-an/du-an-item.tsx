"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface IDuAn {
  name: string;
  desc: string;
  img: string;
  link: string;
}

export default function DuAnItem(props: Readonly<{ item: IDuAn }>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[400px] h-[300px] overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={props.item.link} className="relative w-full h-full block">
        <Image
          src={props.item.img}
          alt={props.item.name}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 ease-in-out hover:bg-black/60"></div>
        {!isHovered && (
          <div className="absolute bottom-0 left-0 p-4 text-white transition-all duration-500 ease-in-out">
            <h3 className="font-bold text-lg">{props.item.name}</h3>
            <p className="text-sm opacity-90">{props.item.desc}</p>
          </div>
        )}

        {isHovered && (
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 text-white flex flex-col gap-2 transition-opacity duration-500 ease-in-out">
            <p className="text-sm opacity-90">
              📍 Khu đô thị Tây Hồ Tây, Hà Nội
            </p>
            <p className="text-sm opacity-90">
              🏢 01 tháp văn phòng: 20 tầng, 02 tháp căn hộ...
            </p>
            <button className="border border-white py-2 px-4 text-white font-semibold uppercase hover:bg-white hover:text-black transition-all duration-300">
              Xem Chi Tiết
            </button>
          </div>
        )}
      </Link>
    </div>
  );
}
