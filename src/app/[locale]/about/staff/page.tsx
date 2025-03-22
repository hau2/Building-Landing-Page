import { HardHat, Share2 } from "lucide-react";
import Image from "next/image";

export default function Staff() {
  return (
    <div className="p-[32px]">
      <h2 className="text-4xl font-bold text-white bg-blue-900 py-4 px-6 rounded-lg mb-6">
        SƠ ĐỒ TỔ CHỨC
      </h2>
      <div className="relative w-full h-[500px] overflow-hidden">
        <Image
          src={"/images/sodotochuc.png"}
          layout="fill"
          objectFit="contain"
          alt="Sơ đồ tổ chức"
        />
      </div>

      <h2 className="text-4xl font-bold text-white bg-blue-900 py-4 px-6 rounded-lg mb-6">
        NHÂN SỰ CẤP CAO
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

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-200 py-20 px-4 md:px-12 lg:px-24">
      {/* Background decorative circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300 opacity-10 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-wide uppercase animate-fade-in">Bộ Máy Công Ty</h2>
        <p className="text-gray-600 mt-3 text-lg animate-fade-in delay-200">Cấu trúc tổ chức và đội ngũ nhân sự chuyên môn cao</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 relative z-10">
        {/* Cột 1 - Giới thiệu tổ chức */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300">
          <Share2 className="w-14 h-14 text-blue-700 mb-4 animate-float" />
          <h3 className="text-xl font-bold text-blue-900 mb-2">Cơ Cấu Tổ Chức</h3>
          <p className="text-gray-600 leading-relaxed">
            Bộ máy điều hành gồm các phòng ban chuyên môn, vận hành linh hoạt và hiệu quả trong mọi lĩnh vực thi công.
          </p>
        </div>

        {/* Cột 2 - Các bộ phận chính */}
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-3xl shadow-2xl p-10 hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-xl font-bold mb-6 text-center">Các Bộ Phận Chính</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              'Chủ tịch hội đồng thành viên',
              'Ban giám đốc',
              'Phòng kế toán',
              'Phòng kinh doanh',
              'Phòng cung ứng vật tư',
              'Phòng hành chính',
              'Phòng thiết kế',
              'Phòng kỹ thuật',
              'Đội thi công xây dựng',
              'Đội thi công cầu đường',
              'Đội thi công cơ giới',
              'Đội TC điện, nước, lạnh',
              'Đội san lấp, cải tạo',
              'Đội lắp đặt cơ khí'
            ].map((item, idx) => (
              <li key={idx} className="leading-tight">{item}</li>
            ))}
          </ul>
        </div>

        {/* Cột 3 - Nhân sự kỹ thuật */}
        <div className="bg-white border border-blue-200 rounded-3xl shadow-2xl p-10 hover:scale-[1.02] transition-all duration-300">
          <div className="mb-6 text-center">
            <HardHat className="w-12 h-12 text-red-500 mb-2 mx-auto animate-float" />
            <h3 className="text-xl font-bold text-blue-800">Lực Lượng Lao Động</h3>
          </div>

          <div className="space-y-6 text-sm text-blue-900">
            <div>
              <h4 className="font-bold text-red-600 uppercase mb-2">Lao động kỹ thuật</h4>
              <ul className="space-y-1">
                <li>Kiến trúc sư: <strong>10 người</strong></li>
                <li>Kỹ sư xây dựng: <strong>40 người</strong></li>
                <li>Kỹ sư cơ khí: <strong>15 người</strong></li>
                <li>Kỹ sư cầu đường: <strong>5 người</strong></li>
                <li>Kỹ sư điện công nghiệp: <strong>5 người</strong></li>
                <li>Kỹ sư điện, điện lạnh: <strong>5 người</strong></li>
                <li>Cử nhân kinh tế tài chính: <strong>15 người</strong></li>
                <li>Cử nhân trắc địa: <strong>15 người</strong></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-red-600 uppercase mb-2">Công nhân & Thợ lành nghề</h4>
              <ul className="space-y-1">
                <li>Thường xuyên: <strong>Hơn 800 người</strong></li>
                <li>Thời vụ: <strong>Hơn 1.200 người</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
