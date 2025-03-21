import React from 'react'
import Image from 'next/image'

export default function OurBusinessLines() {
  return (
    <>
        <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Nội dung chữ */}
      <div>
        <h2 className="text-3xl font-bold text-[#152E51] mb-4">
          Tổng thầu
        </h2>
        <p className="text-gray-700 mb-4">
        Công ty cổ phần thiết kế xây dựng Bình Doanh với kinh nghiệm qua hàng loạt dự án thành công, luôn thấu hiểu những khó khăn mà Chủ đầu tư gặp phải trong quá trình triển khai và quản lý dự án. Những thách thức phổ biến bao gồm: thiếu nhân sự có kinh nghiệm quản lý, thời gian triển khai từ thiết kế đến thi công kéo dài, và chi phí quản lý cao.”
        </p>
        <p className="text-gray-700 mb-4">
        Nhằm mang lại nhiều lợi ích thiết thực hơn cho Chủ đầu tư, Bình Doanh đã nghiên cứu và áp dụng Vật liệu xây dựng tiên tiến, Mô hình thông tin công trình (BIM - Building Information Modeling). Những công nghệ này giúp giảm sai sót, tăng hiệu quả làm việc, giảm tác động đến môi trường, hạ chi phí vận hành lâu dài, và đảm bảo chất lượng công trình ở mức cao nhất.
        </p>
        <p className="text-gray-700 mb-6">
        Thương hiệu uy tín của Bình Doanh ngày nay được xây dựng từ sự tin tưởng và đánh giá cao của khách hàng, dựa trên những sản phẩm và dịch vụ chất lượng đẳng cấp mà công ty không ngừng cung cấp.
        </p>
        <div className="bg-gray-100 border-l-4 border-red-500 p-4 text-center">
          <p className="text-[#152E51] font-bold uppercase">
            Bảo chứng thương hiệu từ chất lượng công trình & niềm tin khách hàng
          </p>
        </div>
      </div>

      {/* Hình ảnh */}
      <div className="grid grid-cols-2 gap-4 items-center">
        <Image
          src="/images/du-an/duan-shing-mark-vina-8.jpg"
          height={500}
          width={500}
          alt="Dự án tiêu biểu"
          className="rounded-lg shadow-lg"
          style={{height: 500, objectFit: 'cover'}}
        />
        <Image
          src="/images/du-an/duan-shing-mark-vina-9.jpg"
          width={500}
          height={300}
          alt="Dự án tiêu biểu khác"
          className="rounded-lg shadow-lg"
          style={{height: 350, objectFit: 'cover'}}
        />
      </div>
    </section>
    <section className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold text-[#152E51] mb-4">
        Ưu điểm từ mô hình Tổng thầu Thiết kế & Thi công
      </h2>
      <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
      Công ty cổ phần thiết kế xây dựng Bình Doanh Construction sở hữu năng lực thi công vững mạnh, được khẳng định qua đội ngũ kiến trúc sư, kỹ sư và công nhân lành nghề, giàu kinh nghiệm. Chúng tôi chuyên cung cấp các dịch vụ từ thiết kế kiến trúc, thiết kế kết cấu, đến thi công xây dựng, quản lý dự án và tư vấn xây dựng. Với cam kết đảm bảo chất lượng vượt trội, đúng tiến độ và tối ưu chi phí, Bình Doanh Construction tự tin mang đến giải pháp toàn diện, đáp ứng mọi yêu cầu của khách hàng trong các dự án dân dụng, thương mại và công nghiệp
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Lợi ích 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <h3 className='font-bold text-[#152E51] mb-4'>Thiết kế kiến trúc</h3>
          <p className="text-gray-700">
          Tiết kiệm thời gian triển khai dự án ngay từ ban đầu, gia tăng giá trị lợi ích tối đa cho Chủ đầu tư khi dự án sớm đi vào hoạt động.
          </p>
        </div>

        {/* Lợi ích 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <h3 className='font-bold text-[#152E51] mb-4'>Thiết kế kết cấu</h3>
          <p className="text-gray-700">
          Với chuyên môn sâu về kỹ thuật, chúng tôi thực hiện thiết kế hệ thống kết cấu cho mọi loại công trình, đảm bảo độ an toàn, bền vững và tuân thủ các tiêu chuẩn xây dựng hiện hành.
          </p>
        </div>

        {/* Lợi ích 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <h3 className='font-bold text-[#152E51] mb-4'>Thi công xây dựng</h3>
          <p className="text-gray-700">
          Từ khâu làm nền móng đến hoàn thiện công trình, chúng tôi triển khai thi công với đội ngũ kỹ sư và công nhân lành nghề, cam kết chất lượng vượt trội và đúng tiến độ.
          </p>
        </div>

        {/* Lợi ích 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <h3 className='font-bold text-[#152E51] mb-4'>Quản lý dự án</h3>
          <p className="text-gray-700">
          Chúng tôi cung cấp dịch vụ quản lý dự án chuyên nghiệp, giám sát chặt chẽ từ giai đoạn lập kế hoạch đến khi hoàn thành, giúp khách hàng tối ưu hóa chi phí và thời gian.
          </p>
        </div>

        {/* Lợi ích 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
          <h3 className='font-bold text-[#152E51] mb-4'>Tư vấn xây dựng</h3>
          <p className="text-gray-700">
          Bình Doanh hỗ trợ khách hàng với các dịch vụ tư vấn toàn diện, bao gồm lựa chọn vật liệu, phương pháp thi công và giải pháp tối ưu cho từng dự án.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
