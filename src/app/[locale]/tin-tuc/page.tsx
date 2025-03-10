import React from "react";
import Image from "next/image";

export default function TinTuc() {
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/duan.png"
          alt="Background"
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-10 text-white h-full">
          <h1 className="text-5xl h-full flex justify-center items-center">
            Tin Tức
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg overflow-hidden">
          <img src="/images/tintuc1.jpg" alt="Project 1" className="w-full h-64 object-cover rounded-lg" />
          <div className="p-4">
            <h3 className="text-[16px] font-semibold text-black/80">Dự án Bệnh viện Đa khoa Hồng Ngọc - Phúc Trường Minh</h3>
            <p className="text-gray-500">11-11-2024</p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden">
          <img src="/images/tintuc2.jpg" alt="Project 2" className="w-full h-64 object-cover rounded-lg" />
          <div className="p-4">
            <h3 className="text-[16px] font-semibold text-black/80">Dự án Nhà máy Milwaukee TTI</h3>
            <p className="text-gray-500">23-10-2024</p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden">
          <img src="/images/tintuc3.jpg" alt="Project 3" className="w-full h-64 object-cover rounded-lg" />
          <div className="p-4">
            <h3 className="text-[16px] font-semibold text-black/80">Dự án Sanctuary Hồ Tràm</h3>
            <p className="text-gray-500">16-08-2024</p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden">
          <img src="/images/tintuc4.jpg" alt="Project 4" className="w-full h-64 object-cover rounded-lg" />
          <div className="p-4">
            <h3 className="text-[16px] font-semibold text-black/80">Dự án Sân bay Quốc tế Long Thành</h3>
            <p className="text-gray-500">12-06-2024</p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden">
          <img src="/images/tintuc5.jpg" alt="Project 5" className="w-full h-64 object-cover rounded-lg" />
          <div className="p-4">
            <h3 className="text-[16px] font-semibold text-black/80">Dự án Nhà máy Milwaukee</h3>
            <p className="text-gray-500">28-05-2024</p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden">
          <img src="/images/tintuc1.jpg" alt="Project 6" className="w-full h-64 object-cover rounded-lg" />
          <div className="p-4">
            <h3 className="text-[16px] font-semibold text-black/80">Căn hộ hạng sang LUMIÈRE riverside của Masterise Homes</h3>
            <p className="text-gray-500">03-04-2024</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
