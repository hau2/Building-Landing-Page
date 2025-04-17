"use client";

import { FadeLeft, FadeUp } from "@/components/animations";
import { HardHat } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export type Department = {
  name: string;
  children?: Department[];
};

export default function Staff() {
  const t = useTranslations("staff");

  const staffData = [
    // {
    //   name: "Nguyễn Thanh Bình",
    //   image: "/images/sdtc1.png",
    //   roleKey: "role.ceo",
    // },
    {
      name: "Trần Ngọc Chính",
      image: "/images/sdtc-tranngocchinh.png",
      roleKey: "role.vice_ceo_design",
    },
    {
      name: "Nguyễn Thị Kim Oanh",
      image: "/images/sdtc-nguyenthikimoanh.png",
      roleKey: "role.cfo",
    },
    {
      name: "Thòng Lằm Giểng",
      image: "/images/sdtc-thonglamgieng.png",
      roleKey: "role.assistant_sales_director",
    },
    {
      name: "Đặng Thị Tuyết Nhung",
      image: "/images/sdtc-dangthituyetnhung.png",
      roleKey: "role.accounting_head",
    },
    {
      name: "Mai Thị Bạch Đàn",
      image: "/images/sdtc-maithibachdan.png",
      roleKey: "role.procurement_head",
    },
    {
      name: "Trương Thanh Hải",
      image: "/images/sdtc-truongthanhhai.png",
      roleKey: "role.tech_head",
    },
    {
      name: "Hồ Nguyên Khang",
      image: "/images/sdtc-honguyenkhang.png",
      roleKey: "role.site_manager",
    },
    {
      name: "Trần Đăng Hồi",
      image: "/images/sdtc-trandanghoi.png",
      roleKey: "role.deputy_site_manager",
    },
    {
      name: "Lê Xuân Lương",
      image: "/images/sdtc-lexuanluong.png",
      roleKey: "role.deputy_design",
    },
  ];

  return (
    <div className="py-16 md:px-12 bg-white">
      {/* <FadeUp>
                <h2 className="text-4xl font-bold text-[#152E51] mb-10 border-b pb-4">
                    {t("orgChart")}
                </h2>
                <OrgChartTree />
            </FadeUp> */}

      <FadeUp>
        <h2 className="text-4xl ml-[16px] font-bold text-[#152E51] mb-10 border-b pb-4 pt-10">
          {t("executives")}
        </h2>
      </FadeUp>

      <FadeUp>
        <div className="my-[64px] flex flex-row items-center justify-center gap-[32px]">
          <div className="flex flex-col items-center">
            <div className="relative w-[200px] h-[300px] bg-amber-600 overflow-hidden border-8 shadow-2xl">
              <Image
                src={"/images/sdtc1.png"}
                layout="fill"
                objectFit="cover"
                alt="Nguyễn Thanh Bình"
              />
            </div>
            <h5 className="font-semibold text-[16px] text-orange-800/70 mt-[16px]">
              Nguyễn Thanh Bình
            </h5>
            <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
              {t("role.ceo")}
            </p>
          </div>
        </div>
      </FadeUp>
        <FadeLeft>
        <div className="my-16">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1: { slidesPerView: 1, spaceBetween: 24 },
            640: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="px-2 sm:px-6"
        >
          {staffData.map((staff, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center">
                <div className="relative w-[200px] h-[300px] bg-amber-600 overflow-hidden border-8 shadow-2xl">
                  <Image
                    src={staff.image}
                    layout="fill"
                    objectFit="cover"
                    alt={staff.name}
                  />
                </div>
                <h5 className="font-semibold text-[16px] text-orange-800/70 mt-[16px]">
                  {staff.name}
                </h5>
                <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
                  {t(staff.roleKey)}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        </FadeLeft>

      <FadeUp>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200 py-20 px-4 md:px-12 lg:px-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300 opacity-10 rounded-full blur-3xl z-0" />

          <div className="relative z-10 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-wide uppercase animate-fade-in">
              {t("structureTitle")}
            </h2>
            <p className="text-gray-600 mt-3 text-lg animate-fade-in delay-200">
              {t("structureSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 relative z-10">
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-3xl shadow-2xl p-10 hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-center">
                {t("departmentsTitle")}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {t.raw("departments").map((item: string, idx: number) => (
                  <li key={idx} className="leading-tight">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 3 */}
            <div className="bg-white border border-blue-200 rounded-3xl shadow-2xl p-10 hover:scale-[1.02] transition-all duration-300">
              <div className="mb-6 text-center">
                <HardHat className="w-12 h-12 text-red-500 mb-2 mx-auto animate-float" />
                <h3 className="text-xl font-bold text-blue-800">
                  {t("workforceTitle")}
                </h3>
              </div>

              <div className="space-y-6 text-sm text-blue-900">
                <div>
                  <h4 className="font-bold text-red-600 uppercase mb-2">
                    {t("techTitle")}
                  </h4>
                  <ul
                    className="space-y-1"
                    dangerouslySetInnerHTML={{
                      __html: t
                        .raw("techList")
                        .map((item: string) => `<li>${item}</li>`)
                        .join(""),
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-red-600 uppercase mb-2">
                    {t("workerTitle")}
                  </h4>
                  <ul
                    className="space-y-1"
                    dangerouslySetInnerHTML={{
                      __html: t
                        .raw("workerList")
                        .map((item: string) => `<li>${item}</li>`)
                        .join(""),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>
    </div>
  );
}
