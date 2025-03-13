import Image from "next/image";

export default function VisionMission() {
  return (
    <div className="container mx-auto py-16 px-8 flex flex-col items-center text-center">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-[#DAB87A] mb-4">TẦM NHÌN</h1>
        <p className="italic text-[#003DA5] text-lg  font-medium">
          Xây dựng tương lai bền vững, kiến tạo không gian sống đẳng cấp, mang
          đến giá trị vượt trội cho cộng đồng và khách hàng.
        </p>
        <p className="text-gray-600 mt-4">
          Công ty hướng đến trở thành đơn vị tiên phong trong ngành xây dựng,
          cam kết chất lượng, đổi mới và bền vững. Thông qua công nghệ tiên tiến
          và nâng cao năng lực, công ty tạo ra công trình an toàn, thân thiện
          với môi trường, đóng góp tích cực cho cộng đồng và mang lại giá trị
          lâu dài cho khách hàng
        </p>
      </div>

      <Image
        src="/images/vision-mission.jpg"
        alt="Tổng Giám đốc"
        width={1200}
        height={1200}
        className="w-full max-w-3xl mt-10 rounded-lg shadow-xl"
      />

      <div className="max-w-3xl mt-16">
        <h2 className="text-3xl font-bold text-[#DAB87A] mb-4">SỨ MỆNH</h2>
        <p className="italic text-[#003DA5] text-lg  font-medium">
          Cam kết xây dựng chất lượng, an toàn và bền vững, đáp ứng vượt trội
          nhu cầu khách hàng, góp phần phát triển cộng đồng và bảo vệ môi
          trường.
        </p>
        <p className="text-gray-600 mt-4">
          Bình Doanh Construction cam kết xây dựng các công trình đạt tiêu chuẩn
          cao nhất, sử dụng công nghệ tiên tiến, vật liệu chất lượng và tuân thủ
          nghiêm ngặt các quy định an toàn. Đặt trọng tâm vào việc vượt qua kỳ
          vọng của khách hàng thông qua dịch vụ xuất sắc, hoàn thành dự án đúng
          thời hạn, trong ngân sách và mang lại giá trị bền vững. Tham gia các
          dự án cộng đồng, áp dụng phương pháp xây dựng xanh và đóng góp vào sự
          phát triển bền vững.
        </p>
      </div>
    </div>
  );
}
