import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface IDuAn {
  name: string;
  desc: string;
  img: string;
  link: string;
}

export default function DuAnItem(props: Readonly<{ item: IDuAn }>) {
  return (
    <div className="w-[80%] h-[200px] relative border-[1px]">
      <Link href={props.item.link} className="flex flex-row w-full h-full">
        <Image
          src={props.item.img}
          alt={props.item.name}
          width={400}
          height={200}
          style={{ objectFit: "cover" }}
        />
        <div className="h-full flex flex-col justify-center gap-[16px] pl-3 pr-3">
          <h3 className="font-bold text-blue-950 text-[20px]">{props.item.name}</h3>
          <p className="font-thin">{props.item.desc}</p>
          <span className="uppercase text-orange-700 underline text-[16px] font-semibold">Xem chi tiết</span>
        </div>
      </Link>
    </div>
  );
}

