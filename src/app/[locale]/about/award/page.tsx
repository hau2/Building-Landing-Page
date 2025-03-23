"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/animations";

export default function Certificates() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">
      <FadeUp>
        <h2 className="text-4xl font-bold text-[#152E51] mb-10 border-b pb-4">
          {t("aboutAward")}
        </h2>
      </FadeUp>

      <FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-[9999999]">
          <Dialog>
            <DialogTrigger asChild>
              <div className="group cursor-pointer flex flex-col items-center">
                <div className="relative w-64 h-[360px] shadow-md hover:shadow-xl transition-all border rounded-lg overflow-hidden">
                  <Image
                    src="/images/chungchi.png" // Đường dẫn ảnh thumbnail nhỏ
                    alt="CC Năng Lực"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-gray-600 text-sm">
                  CC Năng Lực
                </p>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-4 bg-white">
              <DialogTitle className="sr-only">CC Năng Lực</DialogTitle>
              <div className="relative w-full h-[90vh]">
                <Image
                  src="/images/chungchi.png" // Đường dẫn ảnh lớn khi zoom
                  alt="CC Năng Lực lớn"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </FadeUp>
    </section>
  );
}
