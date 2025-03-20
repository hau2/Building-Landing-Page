/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";

export default function TuyenDung() {
  const jobListings = [
    {
      stt: 1,
      position: "Kỹ sư xây dựng",
      location: "Hà Nội",
      quantity: 5,
      deadline: "30/04/2025",
      details: "Yêu cầu: Tốt nghiệp đại học chuyên ngành xây dựng, có ít nhất 3 năm kinh nghiệm, biết sử dụng AutoCAD, SAP2000. Công việc: Giám sát công trình, lập báo cáo kỹ thuật, đảm bảo tiến độ xây dựng."
    },
    {
      stt: 2,
      position: "Kỹ sư cơ khí",
      location: "TP. Hồ Chí Minh",
      quantity: 3,
      deadline: "15/05/2025",
      details: "Yêu cầu: Tốt nghiệp chuyên ngành cơ khí, biết sử dụng phần mềm thiết kế SolidWorks, AutoCAD. Công việc: Thiết kế và lắp đặt hệ thống cơ khí, giám sát chất lượng sản xuất."
    },
    {
      stt: 3,
      position: "Kỹ sư điện",
      location: "Đà Nẵng",
      quantity: 4,
      deadline: "10/06/2025",
      details: "Yêu cầu: Có bằng đại học ngành điện, có kinh nghiệm lắp đặt hệ thống điện tòa nhà. Công việc: Thiết kế hệ thống điện, bảo trì và xử lý sự cố."
    },
    {
      stt: 4,
      position: "Công nhân xây dựng",
      location: "Bình Dương",
      quantity: 10,
      deadline: "15/06/2025",
      details: "Yêu cầu: Có sức khỏe tốt, kinh nghiệm làm công trình xây dựng. Công việc: Hỗ trợ thi công, vận chuyển vật liệu, đảm bảo an toàn lao động."
    }
  ];
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
            Tuyển Dụng
          </h1>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen p-6">
        {/* Header */}
        <header className="bg-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bình Doanh Tuyển Dụng</h1>
        </header>

        {/* Environment and Career Opportunities Section */}
        <main className="max-w-6xl mx-auto mt-6 space-y-12">
          {/* Work Environment Section */}
          <section className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold text-blue-700">
                MÔI TRƯỜNG LÀM VIỆC
              </h2>
              <p className="text-gray-600 mt-4">
                DVSM mong muốn tạo nên môi trường làm việc kỷ luật, văn hóa, đề
                cao tính nhân văn. Tại đây, mỗi nhân viên được quan tâm tạo điều
                kiện để rèn luyện, phát triển bản thân và thăng tiến trong sự
                nghiệp.
              </p>
              <p className="text-gray-600 mt-2">
                Ngoài mức lương cố định, nhân viên được thưởng theo mức độ hoàn
                thành chỉ tiêu công việc được giao. Chế độ xem xét tăng lương
                gắn liền với hiệu quả công việc và hiệu quả hoạt động của công
                ty.
              </p>
            </div>
            <div className="relative w-full h-64">
              <Image
                src="/images/building1.jpg"
                alt="Work Environment"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </section>

          {/* Career Opportunities Section */}
          <section className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative w-full h-64">
              <Image
                src="/images/building2.jpg"
                alt="Company Building"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-700">
                CƠ HỘI NGHỀ NGHIỆP
              </h2>
              <p className="text-gray-600 mt-4">
                Tại DVSM, một vị trí nhân sự đồng nghĩa với một sự nghiệp được
                xây dựng bởi chính Bạn, cùng những cơ hội phát triển, lợi ích và
                một môi trường làm việc thỏa sức sáng tạo.
              </p>
              <p className="text-gray-600 mt-2">
                Chúng tôi tin rằng, bằng việc đặt nỗ lực của mình vào đội ngũ
                nhân sự và hết lòng tạo ra một môi trường làm việc tích cực,
                chúng ta sẽ gặt hái được không ít thành công trong tương lai.
              </p>
            </div>
          </section>

          {/* Human Resource Strategy Section */}
          <section className="relative bg-blue-800/80 py-12 text-center text-white">
            <h2 className="text-3xl font-bold">CHIẾN LƯỢC NHÂN SỰ</h2>
          </section>
          <section className="relative max-w-5xl mx-auto -mt-10 bg-white p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-64">
              <Image
                src="/images/building3.jpg"
                alt="Human Resource Strategy"
                layout="fill"
                objectFit="cover"
                className="rounded-lg opacity-50"
              />
            </div>
            <div className="relative p-6 bg-white rounded-lg shadow-md -mt-36">
              <p className="text-gray-700">
                Tại <strong>DVSM</strong>, nguồn nhân lực là nền tảng vững chắc
                giúp Công ty không ngừng tạo nên những giá trị gia tăng hiệu quả
                cho khách hàng và xã hội. Do đó, <strong>DVSM</strong> luôn đặt
                ra mục tiêu dài hạn và tầm nhìn trong việc xây dựng các giá trị
                văn hóa doanh nghiệp.
              </p>
              <p className="text-gray-700 mt-2">
                Chúng tôi luôn tự hào về một đội ngũ nhân sự{" "}
                <strong>CHUYÊN NGHIỆP - NĂNG ĐỘNG - TÂM HUYẾT</strong> trong
                công việc và đặc biệt không ngừng sáng tạo để kiến tạo những sản
                phẩm chất lượng mang thương hiệu DVSM.
              </p>
              <p className="text-gray-700 mt-2">
                Với hệ giá trị cốt lõi{" "}
                <strong>
                  “PHÁT TRIỂN BỀN VỮNG - TIN TƯỞNG ĐỒNG HÀNH - HÀI HÒA LỢI ÍCH”
                </strong>
                , DVSM luôn nỗ lực tạo dựng môi trường làm việc tốt nhất, thu
                hút nhân tài không chỉ bằng chế độ lương thưởng mà còn bằng cơ
                hội phát triển năng lực chuyên môn.
              </p>
            </div>
          </section>

          <section className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
              VỊ TRÍ ĐANG TUYỂN
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-blue-800">
                <thead>
                  <tr className="bg-blue-800 text-white text-left">
                    <th className="border border-white p-2">STT</th>
                    <th className="border border-white p-2">
                      VỊ TRÍ TUYỂN DỤNG
                    </th>
                    <th className="border border-white p-2">NƠI LÀM VIỆC</th>
                    <th className="border border-white p-2">SỐ LƯỢNG</th>
                    <th className="border border-white p-2">HẾT HẠN</th>
                    <th className="border border-white p-2">CHI TIẾT</th>
                  </tr>
                </thead>
                <tbody>
                  {jobListings.map((job, index) => (
                    <tr
                      key={index}
                      className="border border-blue-800 text-gray-700"
                    >
                      <td className="border border-blue-800 p-2 text-center">
                        {job.stt}
                      </td>
                      <td className="border border-blue-800 p-2">
                        {job.position}
                      </td>
                      <td className="border border-blue-800 p-2">
                        {job.location}
                      </td>
                      <td className="border border-blue-800 p-2 text-center">
                        {job.quantity}
                      </td>
                      <td className="border border-blue-800 p-2 text-center">
                        {job.deadline}
                      </td>
                      <td className="border border-blue-800 p-2 text-left">
                        {job.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
