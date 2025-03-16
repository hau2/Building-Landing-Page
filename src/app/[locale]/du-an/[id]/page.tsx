"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { IDuAn } from "@/components/du-an/du-an-item";

export default function DuAnDetail() {
    const router = useRouter();
    const { slug } = router.query;
    const [item, setItem] = useState<IDuAn | null>(null);

    useEffect(() => {
      const storedData = localStorage.getItem("duAnData");
      if (storedData) {
          setItem(JSON.parse(storedData));
      }
    }, []);

    if (!item) return <p>Loading...</p>;

    return (
        <div>
            <div className="max-w-5xl mx-auto p-6">
                {/* Tên dự án */}
                <h2 className="text-3xl font-bold text-blue-900">
                    {item?.name}
                </h2>
                <p className="text-gray-600 uppercase font-semibold mt-2">
                    Nhà Cao Tầng
                </p>

                {/* Biểu tượng mạng xã hội */}
                <div className="flex space-x-4 mt-4">
                    <button className="border p-2 rounded-md text-blue-700 hover:bg-blue-100">
                        <i className="fab fa-facebook"></i>
                    </button>
                    <button className="border p-2 rounded-md text-blue-700 hover:bg-blue-100">
                        <i className="fab fa-twitter"></i>
                    </button>
                    <button className="border p-2 rounded-md text-blue-700 hover:bg-blue-100">
                        <i className="fab fa-google"></i>
                    </button>
                </div>

                {/* Layout thông tin dự án */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                    {/* Cột trái */}
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-gray-700">
                                🏗 Chủ đầu tư
                            </h4>
                            <p className="text-gray-800">
                                {item?.investor || "Đang cập nhật"}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700">
                                📏 Quy mô
                            </h4>
                            <p className="text-gray-800">
                                {item?.totalInvestment || "Đang cập nhật"}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700">
                                📍 Vị trí
                            </h4>
                            <p className="text-gray-800">
                                {item?.address || "Đang cập nhật"}
                            </p>
                        </div>
                    </div>

                    {/* Cột phải */}
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-gray-700">
                                📅 Dự kiến hoàn thành
                            </h4>
                            <p className="text-gray-800">
                                {item?.constructionPeriod}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700">
                                🚧 Tiến độ
                            </h4>
                            <p className="text-gray-800">
                                {item?.status || "Đang thi công"}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700">
                                ⚙️ Gói thầu
                            </h4>
                            <p className="text-gray-800">
                                {item?.goithau || "Tổng thầu"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
