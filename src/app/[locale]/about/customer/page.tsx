import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/animations";

export default function Partner() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">
      <FadeUp>
        <h2 className="text-4xl font-bold text-[#152E51] mb-10 border-b pb-4">
          {t("aboutCustomer")}
        </h2>
      </FadeUp>
      <FadeUp>
        <div className="relative w-full h-[800px] overflow-hidden">
          <Image
            src={"/images/doitac.png"}
            layout="fill"
            objectFit="contain"
            alt="Đối tác của BÌNH DOANH GROUP"
          />
        </div>
      </FadeUp>
    </section>
  );
}
