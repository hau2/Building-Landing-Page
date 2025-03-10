/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";

const jobs = [
  {
    title: "Giám sát Cơ điện",
    salary: "Lương thỏa thuận",
    location: "Hà Nội, Bắc Ninh",
    tags: ["Cơ điện", "Điện tử"],
    image: "/images/job1.png",
  },
  {
    title: "Giám sát Xây dựng",
    salary: "Kỹ sư - Lương thỏa thuận",
    location: "Hà Nội, Bắc Ninh, Đà Nẵng, Long An",
    tags: ["Xây dựng"],
    image: "/images/job2.png",
  },
  {
    title: "Kỹ sư BIM MEP",
    salary: "Lương thỏa thuận",
    location: "Hồ Chí Minh",
    tags: ["Điện lạnh", "Cơ điện"],
    image: "/images/job3.jpg",
  },
  {
    title: "Thực tập sinh xây dựng",
    salary: "Phụ cấp thực tập",
    location: "Hồ Chí Minh",
    tags: ["Điện lạnh", "Cơ điện"],
    image: "/images/job4.jpg",
  },
  {
    title: "Thực tập sinh Thiết Kế",
    salary: "Trợ cấp: 4tr/tháng",
    location: "Newtecons Tower, 96 Phan Đăng Lưu, Phường 5, Quận Phú Nhuận, TPHCM",
    tags: ["Điện lạnh", "Cơ điện"],
    image: "/images/job5.jpg",
  },
];

const JobCard = (props: { job: any }) => {
  const { job } = props;
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      <Image
        src={job.image}
        alt={job.title}
        width={240}
        height={240}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{job.title}</h2>
        <p className="text-gray-600">{job.salary}</p>
        <p className="text-gray-500">{job.location}</p>
        <div className="flex space-x-2 mt-2">
          {job.tags.map((tag: any, index: number) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
        MỚI
      </span>
    </div>
  );
};

export default function TuyenDung() {
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
            Tuyển dụng
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
