// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import Image from "next/image";

// const images = [
//   "/images/slide1.jpg",
//   "/images/slide2.jpg",
// ];

// export default function AutoCarousel() {
//   return (
//     <Swiper
//       modules={[Autoplay, Pagination, Navigation]}
//       spaceBetween={0} // Không có khoảng cách giữa các slide
//       slidesPerView={1}
//       autoplay={{ delay: 3000, disableOnInteraction: false }}
//       pagination={{ clickable: true }}
//       navigation
//       className="w-full h-full rounded-xl shadow-lg"
//     >
//       {images.map((src, index) => (
//         <SwiperSlide key={index} className="relative w-full h-full">
//           <h3>Hello</h3>
//           <div className="h-[50]">
//           <Image
//             src={src}
//             alt={`Slide ${index + 1}`}
//             layout="fill" // Image full width + height
//             objectFit="cover" // Giữ đúng tỷ lệ ảnh, không bị méo
//             className="rounded-xl"
//           />
//           <div className="mt-4 text-center">
//             <p className="text-lg font-semibold text-gray-800">{'AAAA'}</p>
//           </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/images/slide1.jpg", text: "Một năm phát triển trong việc xây dựng bệ phóng di động 2 của NASA", link: "/" },
  {
    src: "/images/slide2.jpg",
    text: "Dự án tàu điện ngầm lớn nhất thế giới được xây dựng trong 1 giai đoạn",
    link: "/",
  },
  { src: "/images/slide3.jpg", text: "Khả năng chi trả là chìa khóa cho tương lai lớn của năng lượng hạt nhân", link: "/" },
];

export default function AutoCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="w-full max-w-3xl h-full rounded-xl"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="relative w-full h-full flex flex-col items-center"
        >
          <Link href={slide.link}>
            {/* Image Section */}
            <div className="relative w-full h-[250px]">
              <Image
                src={slide.src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Text Section */}
            <div className="h-[100px] p-[16px] pb-[30px] flex-[1] text-left bg-white rounded-b-2xl opacity-[70%]">
              <p className="text-lg font-semibold text-gray-800">
                {slide.text}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
