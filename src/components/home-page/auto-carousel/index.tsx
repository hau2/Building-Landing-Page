"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import "./global.css";

const slides = [
    {
        src: "/images/du-an/duan-y-duoc-1.jpg",
        title: "BỆNH VIỆN Y DƯỢC SHING MARK",
        description: "Description",
        link: "/",
    },
    {
        src: "/images/du-an/duan-jumbo-1.jpg",
        title: "CÔNG TY TNHH UNITED JUMMBO",
        description: "Description",
        link: "/",
    },
    {
        src: "/images/du-an/duan-fullway-1.jpg",
        title: "CÔNG TY TTHH FULLWAY",
        description: "Description",
        link: "/",
    },
    {
        src: "/images/du-an/duan-shing-mark-vina-4.jpg",
        title: "CÔNG TY TNHH SHING MARK VINA",
        description: "Description",
        link: "/",
    },
    {
        src: "/images/du-an/duan-apex-1.jpg",
        title: "CÔNG TY TNHH NGÀNH GIÀY APEX (VIỆT NAM)",
        description: "Description",
        link: "/",
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
                    <Link href={slide.link}>
                        {/* Image Section */}
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.src}
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
                                {slide.title}
                            </h3>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
