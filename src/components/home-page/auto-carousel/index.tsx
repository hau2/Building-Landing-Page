"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import "./global.css";

const slides = [
  {
    id: "1",
    name: "BỆNH VIỆN Y DƯỢC SHING MARK",
    image: "/images/du-an/duan-y-duoc-1.jpg",
  },
  {
    id: "2",
    name: "CÔNG TY TNHH UNITED JUMMBO",
    image: "/images/du-an/duan-jumbo-1.jpg",
  },
  {
    id: "3",
    name: "CÔNG TY TTHH FULLWAY",
    image: "/images/du-an/duan-fullway-1.jpg",
  },
  {
    id: "4",
    name: "CÔNG TY TNHH SUMMER WIND",
    image: "/images/du-an/duan-summer-wind-1.jpg",
  },
  {
    id: "5",
    name: "CÔNG TY TNHH SHING MARK VINA",
    image: "/images/du-an/duan-shing-mark-vina-2.jpg",
  },
  {
    id: "6",
    name: "CÔNG TY TNHH NGÀNH GIÀY APEX (VIỆT NAM)",
    image: "/images/du-an/duan-apex-1.jpg",
  },
];

export default function AutoCarousel() {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full h-full"
            navigation
        >
            {slides.map((slide, index) => (
                <SwiperSlide
                    key={index}
                    className="relative w-full h-full flex flex-col items-center"
                >
                        {/* Image Section */}
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                        {/* Text Section */}
                        {/* <div className="h-[100px] p-[16px] pb-[30px] flex-[1] text-left bg-white rounded-b-2xl opacity-[70%]">
              <p className="text-lg font-semibold text-gray-800">
                {slide.text}
              </p>
            </div> */}

                        <div
                            className="absolute bottom-[10%] left-[5%]"
                            style={{
                                backgroundColor: "#032b6e85",
                                borderLeft: "4px solid #e84f04",
                            }}
                        >
                            <h3 className="text-[36px] text-white p-[16px] uppercase font-semibold">
                                {slide.name}
                            </h3>
                        </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
