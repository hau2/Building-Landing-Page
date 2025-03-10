"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import React from "react";

export default function DuAnNoiBat() {
  return (
    <div>
      <h2 className="pl-[64px] font-bold text-[32px] text-black/70">
        Dự Án Nổi Bật
      </h2>
      <div className="flex justify-center">
        <Carousel
          className="mx-[64px]"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card className="p-0 rounded-2xl overflow-hidden">
                    <CardContent className="flex aspect-square items-center justify-center p-0 relative group">
                      <Image
                        src={"/images/duan1.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        alt="duan"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
                      <div className="absolute bottom-[32px] group-hover:opacity-0 bg-black/30 shadow-2xl">
                        <p className="text-white font-semibold uppercase shadow-lg">
                          Vinhome smart city
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-full p-4 bg-black/30 bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 flex flex-col">
                        <h5 className="font-semibold text-[24px] text-center text-orange-500">
                          Vinhome smart city
                        </h5>
                        <div className="flex flex-col gap-[16px]">
                          <div className="flex flex-row w-full gap-[8px]">
                            <p className="flex-1 text-sm">Khách hàng</p>
                            <p className="flex-1 text-sm">Masterise Homes</p>
                          </div>
                          <div className="flex flex-row w-full gap-[8px]">
                            <p className="flex-1 text-sm">Vị trí</p>
                            <p className="flex-1 text-sm">
                              Khu công nghệ cao, Q9, TP.HCM
                            </p>
                          </div>
                          <div className="flex flex-row w-full gap-[8px]">
                            <p className="flex-1 text-sm">Phạm vi công việc</p>
                            <p className="flex-1 text-sm">
                              Nhà thầu chính, 04 tầng hầm + 21 tầng cao
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
