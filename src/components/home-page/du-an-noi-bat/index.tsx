"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const listDuAn = [
  {
    id: "1",
    name: "BỆNH VIỆN Y DƯỢC SHING MARK",
    image: "/images/du-an/duan-y-duoc-1.jpg",
    investor: "Công ty TNHH MTV Bệnh viện đại học Y Dược Shing Mark",
    address: "QL51, Phường Long Bình Tân, TP Biên Hoà, Đồng Nai",
    totalInvestment: "6.453.000.000.000 VND",
    businessSector: "Cung cấp dịch vụ y tế và chăm sóc sức khoẻ",
    constructionPeriod: "2013-2017",
    status: "Hoàn thành",
    detailImages: [
      "/images/du-an/duan-y-duoc-2.jpg",
      "/images/du-an/duan-y-duoc-3.jpg",
      "/images/du-an/duan-y-duoc-4.jpg",
      "/images/du-an/duan-y-duoc-5.jpg",
      "/images/du-an/duan-y-duoc-6.jpg",
      "/images/du-an/duan-y-duoc-7.jpg",
      "/images/du-an/duan-y-duoc-8.jpg",
      "/images/du-an/duan-y-duoc-9.jpg",
    ],
  },
  {
    id: "2",
    name: "CÔNG TY TNHH UNITED JUMMBO",
    image: "/images/du-an/duan-jumbo-1.jpg",
    investor: "Jumbo Asia Invesment Co.,Ltd",
    address: "KCN Suối Tre, TP Long Thành, tỉnh Đồng Nai",
    totalInvestment: "2.180.000.000 VND",
    status: "Hoàn thành",
    businessSector:
      "Sản xuất các sản phẩm dụng cụ, máy móc Công nghiệp, phụ tùng ô tô...",
    constructionPeriod: "2017-2020",
    detailImages: [
      "/images/du-an/duan-jumbo-2.jpg",
      "/images/du-an/duan-jumbo-3.jpg",
      "/images/du-an/duan-jumbo-4.jpg",
      "/images/du-an/duan-jumbo-5.jpg",
      "/images/du-an/duan-jumbo-6.jpg",
      "/images/du-an/duan-jumbo-7.jpg",
    ],
  },
  {
    id: "3",
    name: "CÔNG TY TTHH FULLWAY",
    image: "/images/du-an/duan-fullway-1.jpg",
    investor: "Super Way International Group Co.,Ltd (Protrend Group)",
    address: "KCN Long Khánh, TP Long Khánh, tỉnh Đồng Nai",
    totalInvestment: "2.721.600.000.000 VND",
    status: "Hoàn thành",
    businessSector: "Sản xuất các sản phẩm đồ gỗ, đồ điện tử gia dụng",
    constructionPeriod: "2017-2019",
    detailImages: [
      "/images/du-an/duan-fullway-2.jpg",
      "/images/du-an/duan-fullway-3.jpg",
      "/images/du-an/duan-fullway-4.jpg",
      "/images/du-an/duan-fullway-5.jpg",
      "/images/du-an/duan-fullway-6.jpg",
      "/images/du-an/duan-fullway-7.jpg",
      "/images/du-an/duan-fullway-8.jpg",
      "/images/du-an/duan-fullway-9.jpg",
    ],
  },
  {
    id: "4",
    name: "CÔNG TY TNHH SUMMER WIND",
    image: "/images/du-an/duan-summer-wind-1.jpg",
    investor: "Sigma Industrial INC.",
    address: " KCN Quốc tế Protrade, thị xã Bến Cát, tỉnh Bình Dương",
    totalInvestment: "669.000.000.000 VND",
    status: "Hoàn thành",
    businessSector:
      " Sản xuất đèn chiếu sáng các loại, quạt các loại, motor điều khiển từ xa...",
    constructionPeriod: "2017-2019",
    detailImages: [
      "/images/du-an/duan-summer-wind-2.jpg",
      "/images/du-an/duan-summer-wind-3.jpg",
      "/images/du-an/duan-summer-wind-4.jpg",
      "/images/du-an/duan-summer-wind-5.jpg",
      "/images/du-an/duan-summer-wind-6.jpg",
      "/images/du-an/duan-summer-wind-7.jpg",
      "/images/du-an/duan-summer-wind-8.jpg",
      "/images/du-an/duan-summer-wind-9.jpg",
      "/images/du-an/duan-summer-wind-10.jpg",
    ],
  },
  {
    id: "5",
    name: "CÔNG TY TNHH SHING MARK VINA",
    image: "/images/du-an/duan-shing-mark-vina-2.JPG",
    investor: "Carven Industries Limited",
    address: "KCN Bàu Xéo, huyện Trảng Bom, tỉnh Đồng Nai",
    totalInvestment: "10.581.950.000.000 VND",
    status: "Hoàn thành",
    businessSector: "Sản xuất các sản phẩm đồ gỗ nội thất xuất khẩu ",
    constructionPeriod: "2005 - 2016",
    detailImages: [
      "/images/du-an/duan-shing-mark-vina-2.JPG",
      "/images/du-an/duan-shing-mark-vina-3.JPG",
      "/images/du-an/duan-shing-mark-vina-4.JPG",
      "/images/du-an/duan-shing-mark-vina-5.jpg",
      "/images/du-an/duan-shing-mark-vina-6.JPG",
      "/images/du-an/duan-shing-mark-vina-7.JPG",
      "/images/du-an/duan-shing-mark-vina-8.JPG",
      "/images/du-an/duan-shing-mark-vina-9.JPG",
      "/images/du-an/duan-shing-mark-vina-10.jpg",
    ],
  },
  {
    id: "6",
    name: "CÔNG TY TNHH NGÀNH GIÀY APEX",
    image: "/images/du-an/duan-apex-1.jpg",
    investor: "Công ty TNHH Ngành giày Ái Phái Khách",
    address: "KCN Châu Đức, huyện Châu Đức, Bà Rịa Vũng Tàu",
    totalInvestment: "565.724.000.000 VND",
    status: "Hoàn thành",
    businessSector: " Sản xuất các sản phẩm ngành giày và phụ kiện ngành giày",
    constructionPeriod: "01/2020 - 06/2020",
    detailImages: [
      "/images/du-an/duan-apex-2.jpg",
      "/images/du-an/duan-apex-3.jpg",
      "/images/du-an/duan-apex-4.jpg",
      "/images/du-an/duan-apex-5.jpg",
      "/images/du-an/duan-apex-6.jpg",
      "/images/du-an/duan-apex-7.jpg",
      "/images/du-an/duan-apex-8.jpg",
      "/images/du-an/duan-apex-9.jpg",
      "/images/du-an/duan-apex-10.jpg",
    ],
  },
];

export default function DuAnNoiBat() {
  const t = useTranslations("HomePage");
  const projectTranslate = useTranslations("project");

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const handleNavigate = (item: any) => {
     localStorage.setItem("duAnData", JSON.stringify(item));
   };

  return (
    <div className="px-20 w-full">
      <h2 className="text-4xl font-bold text-[#152E51] mb-4 pb-4 border-b">
        {t("projectHighlightTitle")}
      </h2>

      <div className="relative p-2 bg-[#F5F5F5]">
        <div className="custom-prev absolute top-1/2 left-0 z-20 -translate-y-1/2 cursor-pointer p-2 bg-white/80 rounded-full shadow-md hover:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 3000 }}
          speed={800}
          slidesPerView={4}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="w-full"
        >
          {listDuAn?.map((item, index) => (
            <SwiperSlide key={index} className="slide-custom">
              <motion.div
                className="relative w-full aspect-[4/5] sm:aspect-[4/5] max-h-[500px] sm:max-h-[500px] md:max-h-none"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  href={`/${localStorage.getItem("locale") || "vi"}/du-an/${
                    item.id
                  }`}
                  onClick={() => handleNavigate(item)}
                  className="relative w-full h-full block"
                >
                  <div className="p-1 flex items-center justify-center group relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={`Slide ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 "></div>

                    {/* Tiêu đề mặc định */}
                    <div className="absolute bottom-[32px] group-hover:opacity-0 bg-black/10 shadow-2xl transition-all duration-300 px-4 py-2 rounded-lg">
                      <p className="text-white text-[16px] font-semibold uppercase text-center">
                        {item && projectTranslate(`${item.id}.name`)}
                      </p>
                    </div>

                    {/* Hover nội dung */}
                    <div className="absolute bottom-0 left-0 w-full h-full p-4 bg-black/30 text-white opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 flex flex-col">
                      <h5 className="font-semibold text-[20px] text-center text-white">
                        {item && projectTranslate(`${item.id}.name`)}
                      </h5>
                      <div className="flex flex-col gap-[16px] pt-1">
                        <div className="flex flex-row w-full">
                          <p className="flex-1 text-[14px]">{t("investor")}</p>
                          <p className="flex-1 text-[14px]">
                            {projectTranslate(`${item?.id}.businessSector`)}
                          </p>
                        </div>
                        <div className="flex flex-row w-full gap-[8px]">
                          <p className="flex-1 text-[14px]">{t("address")}</p>
                          <p className="flex-1 text-[14px]">
                            {projectTranslate(`${item?.id}.address`)}
                          </p>
                        </div>
                        <div className="flex flex-row w-full gap-[8px]">
                          <p className="flex-1 text-[14px]">
                            {t("totalInvestment")}
                          </p>
                          <p className="flex-1 text-[14px]">
                            {item.totalInvestment}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-next absolute top-1/2 right-0 z-20 -translate-y-1/2 cursor-pointer p-2 bg-white/80 rounded-full shadow-md hover:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
