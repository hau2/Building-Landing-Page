// components/Footer.tsx

import Link from "next/link";
import Image from "next/image";

export default function Staff() {
    return (
      <div className="p-[32px]">
          <h2 className="text-black/80 font-semibold text-[32px]">
              Nhân sự cấp cao
          </h2>
          <div className="my-[16px] flex flex-row items-center justify-center gap-[32px]">
              <div className="flex flex-col items-center">
                  <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
                      <Image
                          src={"/images/nhansu1.png"}
                          width={200}
                          height={200}
                          alt="nhansu"
                      />
                  </div>
                  <h5 className="font-semibold text-[16px] text-orange-800/70">
                      Trần Quang Tuấn
                  </h5>
                  <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
                      Giám đốc điều hành
                  </p>
                  <Link
                      className="text-[14px] text-blue-800 italic font-semibold"
                      href={"/"}
                  >
                      Xem thêm
                  </Link>
              </div>
          </div>
          <div className="my-[16px] flex flex-row items-center justify-center gap-[64px]">
              <div className="flex flex-col items-center">
                  <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
                      <Image
                          src={"/images/nhansu1.png"}
                          width={200}
                          height={200}
                          alt="nhansu"
                      />
                  </div>
                  <h5 className="font-semibold text-[16px] text-orange-800/70">
                      Trần Quang Tuấn
                  </h5>
                  <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
                      Giám đốc điều hành
                  </p>
                  <Link
                      className="text-[14px] text-blue-800 italic font-semibold"
                      href={"/"}
                  >
                      Xem thêm
                  </Link>
              </div>
              <div className="flex flex-col items-center">
                  <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
                      <Image
                          src={"/images/nhansu1.png"}
                          width={200}
                          height={200}
                          alt="nhansu"
                      />
                  </div>
                  <h5 className="font-semibold text-[16px] text-orange-800/70">
                      Trần Quang Tuấn
                  </h5>
                  <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
                      Giám đốc điều hành
                  </p>
                  <Link
                      className="text-[14px] text-blue-800 italic font-semibold"
                      href={"/"}
                  >
                      Xem thêm
                  </Link>
              </div>
          </div>
          <div className="my-[16px] flex flex-row items-center justify-center gap-[64px]">
              <div className="flex flex-col items-center">
                  <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
                      <Image
                          src={"/images/nhansu1.png"}
                          width={200}
                          height={200}
                          alt="nhansu"
                      />
                  </div>
                  <h5 className="font-semibold text-[16px] text-orange-800/70">
                      Trần Quang Tuấn
                  </h5>
                  <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
                      Giám đốc điều hành
                  </p>
                  <Link
                      className="text-[14px] text-blue-800 italic font-semibold"
                      href={"/"}
                  >
                      Xem thêm
                  </Link>
              </div>
              <div className="flex flex-col items-center">
                  <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
                      <Image
                          src={"/images/nhansu1.png"}
                          width={200}
                          height={200}
                          alt="nhansu"
                      />
                  </div>
                  <h5 className="font-semibold text-[16px] text-orange-800/70">
                      Trần Quang Tuấn
                  </h5>
                  <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
                      Giám đốc điều hành
                  </p>
                  <Link
                      className="text-[14px] text-blue-800 italic font-semibold"
                      href={"/"}
                  >
                      Xem thêm
                  </Link>
              </div>
              <div className="flex flex-col items-center">
                  <div className="w-[200px] h-[200px] rounded-[50%] bg-amber-600 overflow-hidden border-8 shadow-2xl">
                      <Image
                          src={"/images/nhansu1.png"}
                          width={200}
                          height={200}
                          alt="nhansu"
                      />
                  </div>
                  <h5 className="font-semibold text-[16px] text-orange-800/70">
                      Trần Quang Tuấn
                  </h5>
                  <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
                      Giám đốc điều hành
                  </p>
                  <Link
                      className="text-[14px] text-blue-800 italic font-semibold"
                      href={"/"}
                  >
                      Xem thêm
                  </Link>
              </div>
          </div>
      </div>
    );
}
