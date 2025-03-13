import React from "react";
import Image from "next/image";

const articles = [
  {
    title:
      "Ricons ký kết hợp tác chiến lược tổng thầu thi công dự án The Gió cùng chủ đầu tư",
    date: "11/03/2025",
    image: "/images/duan.png",
  },
  {
    title: "Những đóa hồng Ricons lung linh trong sự kiện ngày Quốc tế Phụ nữ",
    date: "08/03/2025",
    image: "/images/duan.png",
  },
  {
    title:
      "Ricons khai giảng khóa đào tạo quản lý tài chính dành cho chỉ huy trưởng",
    date: "07/03/2025",
    image: "/images/duan.png",
  },
];

const projects = [
  {
    title: "Dự án Bệnh viện Đa khoa Hồng Ngọc - Phúc Trường Minh",
    date: "11-11-2024",
    image: "/images/tintuc1.jpg",
  },
  {
    title: "Dự án Nhà máy Milwaukee TTI",
    date: "23-10-2024",
    image: "/images/tintuc2.jpg",
  },
  {
    title: "Dự án Sanctuary Hồ Tràm",
    date: "16-08-2024",
    image: "/images/tintuc3.jpg",
  },
  {
    title: "Dự án Sân bay Quốc tế Long Thành",
    date: "12-06-2024",
    image: "/images/tintuc4.jpg",
  },
  {
    title: "Dự án Nhà máy Milwaukee",
    date: "28-05-2024",
    image: "/images/tintuc5.jpg",
  },
  {
    title: "Căn hộ hạng sang LUMIÈRE riverside của Masterise Homes",
    date: "03-04-2024",
    image: "/images/tintuc1.jpg",
  },
];

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
      <div className="p-12">
        <div className="flex flex-col md:flex-row gap-4 p-4 max-w-7xl mx-auto">
          <div className="relative group flex-[2] overflow-hidden rounded-lg">
            <Image
              src={articles[0].image}
              alt={articles[0].title}
              width={900}
              height={500}
              className="rounded-lg transition-transform duration-700 ease-in-out transform group-hover:scale-130 group-hover:shadow-lg w-full"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
              <h3 className="text-2xl font-bold truncate w-full overflow-hidden">
                {articles[0].title}
              </h3>
              <p className="text-sm">{articles[0].date}</p>
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-4">
            {articles.slice(1).map((article, index) => (
              <div
                key={index}
                className="relative group w-full overflow-hidden rounded-lg"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="rounded-lg transition-transform duration-600 ease-in-out transform group-hover:scale-130 group-hover:shadow-lg w-full"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                  <h3 className="text-lg font-bold truncate w-full overflow-hidden">
                    {article.title}
                  </h3>
                  <p className="text-sm">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-[16px] font-semibold text-black/80 truncate">
                    {project.title}
                  </h3>
                  <p className="text-gray-500">{project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
