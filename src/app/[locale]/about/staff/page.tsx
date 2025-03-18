// components/Footer.tsx

import Image from "next/image";

export default function Staff() {
  return (
    <div className="p-[32px]">
      <h2 className="text-black/80 font-semibold text-[32px]">
        Nhân sự cấp cao
      </h2>
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
            Tổng giám đốc
          </p>
        </div>
      </div>

      <div className="my-[64px] flex flex-row items-center justify-center gap-[64px]">
        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[300px] bg-amber-600 overflow-hidden border-8 shadow-2xl">
            <Image
              src={"/images/sdtc-tranngocchinh.png"}
              layout="fill"
              objectFit="cover"
              alt="Trần Ngọc Chính"
            />
          </div>
          <h5 className="font-semibold text-[16px] text-orange-800/70 mt-[16px]">
            Trần Ngọc Chính
          </h5>
          <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
            Phó tổng giám đốc - Trưởng phòng thiết kế
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[300px] bg-amber-600 overflow-hidden border-8 shadow-2xl">
            <Image
              src={"/images/sdtc-nguyenthikimoanh.png"}
              layout="fill"
              objectFit="cover"
              alt="Nguyễn Thị Kim Oanh"
            />
          </div>
          <h5 className="font-semibold text-[16px] text-orange-800/70 mt-[16px]">
            Nguyễn Thị Kim Oanh
          </h5>
          <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
            Giám đốc tài chính
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[300px] bg-amber-600 overflow-hidden border-8 shadow-2xl">
            <Image
              src={"/images/sdtc-thonglamgieng.png"}
              layout="fill"
              objectFit="cover"
              alt="Nguyễn Thị Kim Oanh"
            />
          </div>
          <h5 className="font-semibold text-[16px] text-orange-800/70 mt-[16px]">
            Thòng Lằm Giểng
          </h5>
          <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
            Trợ lý giám đốc - Giám đốc kinh doanh
          </p>
        </div>

      </div>

      <div className="my-[64px] flex flex-row items-center justify-center gap-[64px]">
        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[300px] bg-amber-600 overflow-hidden border-8 shadow-2xl">
            <Image
              src={"/images/sdtc-dangthituyetnhung.png"}
              layout="fill"
              objectFit="cover"
              alt="Đặng Thị Tuyết Nhung"
            />
          </div>
          <h5 className="font-semibold text-[16px] text-orange-800/70 mt-[16px]">
            Đặng Thị Tuyết Nhung
          </h5>
          <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
            Trưởng phòng kế toán
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[300px] bg-amber-600 overflow-hidden border-8 shadow-2xl">
            <Image
              src={"/images/sdtc-maithibachdan.png"}
              layout="fill"
              objectFit="cover"
              alt="Mai Thị Bạch Đàn"
            />
          </div>
          <h5 className="font-semibold text-[16px] text-orange-800/70 mt-[16px]">
            Mai Thị Bạch Đàn
          </h5>
          <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
            Trưởng phòng vật tư
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[300px] bg-amber-600 overflow-hidden border-8 shadow-2xl">
            <Image
              src={"/images/sdtc-truongthanhhai.png"}
              layout="fill"
              objectFit="cover"
              alt="Trương Thanh Hải"
            />
          </div>
          <h5 className="font-semibold text-[16px] text-orange-800/70 mt-[16px]">
            Trương Thanh Hải
          </h5>
          <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
            Trưởng phòng kỹ thuật
          </p>
        </div>

      </div>

      <div className="my-[64px] flex flex-row items-center justify-center gap-[64px]">
        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[300px] bg-amber-600 overflow-hidden border-8 shadow-2xl">
            <Image
              src={"/images/sdtc-honguyenkhang.png"}
              layout="fill"
              objectFit="cover"
              alt="Hồ Nguyên Khang"
            />
          </div>
          <h5 className="font-semibold text-[16px] text-orange-800/70 mt-[16px]">
            Hồ Nguyên Khang
          </h5>
          <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
            Chỉ huy trưởng
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[300px] bg-amber-600 overflow-hidden border-8 shadow-2xl">
            <Image
              src={"/images/sdtc-trandanghoi.png"}
              layout="fill"
              objectFit="cover"
              alt="Trần Đăng Hồi"
            />
          </div>
          <h5 className="font-semibold text-[16px] text-orange-800/70 mt-[16px]">
            Trần Đăng Hồi
          </h5>
          <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
            Chỉ huy phó công trình
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[300px] bg-amber-600 overflow-hidden border-8 shadow-2xl">
            <Image
              src={"/images/sdtc-lexuanluong.png"}
              layout="fill"
              objectFit="cover"
              alt="Lê Xuân Lương"
            />
          </div>
          <h5 className="font-semibold text-[16px] text-orange-800/70 mt-[16px]">
            Lê Xuân Lương
          </h5>
          <p className="font-semibold text-black/60 text-[14px] mt-[8px]">
            Phó phòng thiết kế
          </p>
        </div>

      </div>
    </div>

  );
}
