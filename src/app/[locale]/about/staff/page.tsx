// components/Footer.tsx

import Image from "next/image";

export default function Staff() {
  return (
    <div className="p-[32px]">
      <h2 className="text-4xl font-bold text-white bg-blue-900 py-4 px-6 rounded-lg mb-6">SƠ ĐỒ TỔ CHỨC</h2>
      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src={"/images/sodotochuc.png"}
          layout="fill"
          objectFit="contain"
          alt="Sơ đồ tổ chức"
        />
      </div>

      <h2 className="text-4xl font-bold text-white bg-blue-900 py-4 px-6 rounded-lg mb-6">NHÂN SỰ CẤP CAO</h2>
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

      <h2 className="text-4xl font-bold text-white bg-blue-900 py-4 px-6 rounded-lg mb-6">BỘ MÁY CÔNG TY</h2>
      
      <div className="grid grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Left Section - Organization Structure */}
        <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">CÁC BỘ PHẬN CHÍNH</h3>
          <ul className="space-y-2">
            <li>🔵 CHỦ TỊCH HỘI ĐỒNG THÀNH VIÊN</li>
            <li>🔵 BAN GIÁM ĐỐC</li>
            <li className="text-blue-300">🔵 PHÒNG KẾ TOÁN</li>
            <li className="text-blue-300">🔵 PHÒNG KINH DOANH</li>
            <li className="text-blue-300">🔵 PHÒNG CUNG ỨNG VẬT TƯ</li>
            <li className="text-blue-300">🔵 PHÒNG HÀNH CHÍNH</li>
            <li className="text-blue-300">🔵 PHÒNG THIẾT KẾ</li>
            <li className="text-blue-300">🔵 PHÒNG KỸ THUẬT</li>
          </ul>
          <hr className="border-blue-300 my-4" />
          <ul className="space-y-2">
            <li>🔵 ĐỘI THI CÔNG XÂY DỰNG CÔNG TRÌNH</li>
            <li>🔵 ĐỘI THI CÔNG CẦU ĐƯỜNG</li>
            <li>🔵 ĐỘI THI CÔNG CƠ GIỚI</li>
            <li>🔵 ĐỘI TC ĐIỆN, NƯỚC, ĐIỆN LẠNH</li>
            <li>🔵 ĐỘI SAN LẤP, CẢI TẠO</li>
            <li>🔵 ĐỘI LẮP ĐẶT CƠ KHÍ</li>
          </ul>
        </div>
        
        {/* Right Section - Workforce Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b-2 pb-2">LỰC LƯỢNG LAO ĐỘNG</h3>
          <p className="text-red-600 font-semibold flex items-center">➡️ LAO ĐỘNG KỸ THUẬT</p>
          <ul className="space-y-2 text-blue-800">
            <li>🔵 KIẾN TRÚC SƯ: <span className="font-bold">10 NGƯỜI</span></li>
            <li>🔵 KỸ SƯ XÂY DỰNG: <span className="font-bold">40 NGƯỜI</span></li>
            <li>🔵 KỸ SƯ CƠ KHÍ: <span className="font-bold">15 NGƯỜI</span></li>
            <li>🔵 KỸ SƯ CẦU ĐƯỜNG: <span className="font-bold">5 NGƯỜI</span></li>
            <li>🔵 KỸ SƯ ĐIỆN CÔNG NGHIỆP: <span className="font-bold">5 NGƯỜI</span></li>
            <li>🔵 KỸ SƯ ĐIỆN, ĐIỆN LẠNH: <span className="font-bold">5 NGƯỜI</span></li>
            <li>🔵 CỬ NHÂN KINH TẾ TÀI CHÍNH: <span className="font-bold">15 NGƯỜI</span></li>
            <li>🔵 CỬ NHÂN TRẮC ĐẠC: <span className="font-bold">15 NGƯỜI</span></li>
          </ul>
          <p className="text-red-600 font-semibold flex items-center mt-4">➡️ CÔNG NHÂN BẬC CAO VÀ THỢ LÀNH NGHỀ</p>
          <ul className="space-y-2 text-blue-800">
            <li>🔵 THƯỜNG XUYÊN: <span className="font-bold">HƠN 800 NGƯỜI</span></li>
            <li>🔵 THỜI VỤ: <span className="font-bold">HƠN 1.200 NGƯỜI</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
