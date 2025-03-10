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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="p-0">
                    <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                      <Image
                        src={"/images/duan1.png"}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                        alt="duan"
                      />
                      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
                      <div className="absolute bottom-[32px] bg-black/30 shadow-2xl">
                        <p className="text-white font-semibold uppercase shadow-lg">
                          Vinhome smart city
                        </p>
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
