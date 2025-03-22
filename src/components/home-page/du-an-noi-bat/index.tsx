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
import { useTranslations } from "next-intl";
import Image from "next/image";

import React from "react";

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
        image: "/images/du-an/duan-shing-mark-vina-1.jpg",
        investor: "Carven Industries Limited",
        address: "KCN Bàu Xéo, huyện Trảng Bom, tỉnh Đồng Nai",
        totalInvestment: "10.581.950.000.000 VND",
        status: "Hoàn thành",
        businessSector: "Sản xuất các sản phẩm đồ gỗ nội thất xuất khẩu ",
        constructionPeriod: "2005 - 2016",
        detailImages: [
            "/images/du-an/duan-shing-mark-vina-2.jpg",
            "/images/du-an/duan-shing-mark-vina-3.jpg",
            "/images/du-an/duan-shing-mark-vina-4.jpg",
            "/images/du-an/duan-shing-mark-vina-5.jpg",
            "/images/du-an/duan-shing-mark-vina-6.jpg",
            "/images/du-an/duan-shing-mark-vina-7.jpg",
            "/images/du-an/duan-shing-mark-vina-8.jpg",
            "/images/du-an/duan-shing-mark-vina-9.jpg",
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
        businessSector:
            " Sản xuất các sản phẩm ngành giày và phụ kiện ngành giày",
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

    return (
        <div>
            <h2 className="pl-[64px] font-bold text-[32px] [#152E51]">
                {t("projectHighlightTitle")}
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
                        {listDuAn.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-1 md:basis-1/2 lg:basis-1/4"
                            >
                                <div className="p-1">
                                    <Card className="p-0 rounded-2xl overflow-hidden">
                                        <CardContent className="flex aspect-square items-center justify-center p-0 relative group">
                                            <Image
                                                src={item.image}
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                }}
                                                alt="duan"
                                            />
                                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
                                            <div className="absolute bottom-[32px] group-hover:opacity-0 bg-black/10 shadow-2xl">
                                                <p className="text-white text-[24px] font-semibold uppercase shadow-lg">
                                                    {item &&
                                                        projectTranslate(
                                                            `${item.id}.name`
                                                        )}
                                                </p>
                                            </div>
                                            <div className="absolute bottom-0 left-0 w-full h-full p-4 bg-black/30 bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 flex flex-col">
                                                <h5 className="font-semibold text-[24px] text-center text-white">
                                                    {item &&
                                                        projectTranslate(
                                                            `${item.id}.name`
                                                        )}
                                                </h5>
                                                <div className="flex flex-col gap-[16px] pt-1">
                                                    <div className="flex flex-row w-full">
                                                        <p className="flex-1 text-[14px]">
                                                            {t("investor")}
                                                        </p>
                                                        <p className="flex-1 text-[14px]">
                                                            {projectTranslate(
                                                                `${item?.id}.businessSector`
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-row w-full gap-[8px]">
                                                        <p className="flex-1 text-[14px]">
                                                            {t("address")}
                                                        </p>
                                                        <p className="flex-1 text-[14px]">
                                                            {projectTranslate(
                                                                `${item?.id}.address`
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-row w-full gap-[8px]">
                                                        <p className="flex-1 text-[14px]">
                                                            {t(
                                                                "totalInvestment"
                                                            )}
                                                        </p>
                                                        <p className="flex-1 text-[14px]">
                                                            {
                                                                item.totalInvestment
                                                            }
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
