"use client";
import React from "react";
import CountUp from "react-countup";

export default function ThongSo() {
  return (
    <div className="pt-[28px] pb-[2px] flex flex-col items-center justify-center bg-white">
      <div className="text-center p-5">
        <div className="text-2xl font-bold text-blue-900">
          TỔNG THẦU XÂY DỰNG & MEPF HÀNG ĐẦU VIỆT NAM
        </div>
        <div className="text-3xl font-bold text-orange-600 my-4">
          <i className="fas fa-leaf mx-2"></i>
          DOANH NGHIỆP XUẤC SẮC CHÂU Á APEA 3 NĂM LIÊN TIẾP
          <i className="fas fa-leaf mx-2"></i>
        </div>
        <div className="flex flex-wrap justify-around mt-8">
          <div className="m-4 text-center">
            <div className="text-lg font-bold text-gray-700">
              DỰ ÁN THI CÔNG
            </div>
            <div className="text-4xl font-bold text-orange-600">
              <CountUp end={130} duration={3} />
            </div>
            <div className="text-lg text-gray-700">dự án</div>
          </div>
          <div className="m-4 text-center">
            <div className="text-lg font-bold text-gray-700">
              DOANH SỐ BACKLOG
            </div>
            <div className="text-4xl font-bold text-orange-600">
              <CountUp end={16955} duration={3} />
            </div>
            <div className="text-lg text-gray-700">tỷ</div>
          </div>
          <div className="m-4 text-center">
            <div className="text-lg font-bold text-gray-700">
              TỔNG SỐ NHÂN VIÊN
            </div>
            <div className="text-4xl font-bold text-orange-600">
              <CountUp end={900} duration={3} />
            </div>
            <div className="text-lg text-gray-700">nhân viên</div>
          </div>
          <div className="m-4 text-center">
            <div className="text-lg font-bold text-gray-700">
              LỰC LƯỢNG THI CÔNG
            </div>
            <div className="text-4xl font-bold text-orange-600">
              <CountUp end={10000} duration={3} />
            </div>
            <div className="text-lg text-gray-700">nhân công</div>
          </div>
        </div>
      </div>
    </div>
  );
}
