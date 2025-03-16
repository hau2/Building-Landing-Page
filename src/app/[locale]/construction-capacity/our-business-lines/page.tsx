import React from 'react'
import Image from 'next/image'

export default function OurBusinessLines() {
  return (
    <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Nội dung chữ */}
      <div>
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
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
          <p className="text-blue-900 font-bold uppercase">
            Bảo chứng thương hiệu từ chất lượng công trình & niềm tin khách hàng
          </p>
        </div>
      </div>

      {/* Hình ảnh */}
      <div className="grid grid-cols-2 gap-4 items-center">
        <Image
          src="/images/linh-vuc-thi-cong1.jpg"
          height={500}
          width={500}
          alt="Dự án tiêu biểu"
          className="rounded-lg shadow-lg"
          style={{height: 500, objectFit: 'cover'}}
        />
        <Image
          src="/images/linh-vuc-thi-cong2.jpg"
          width={500}
          height={300}
          alt="Dự án tiêu biểu khác"
          className="rounded-lg shadow-lg"
          style={{height: 350, objectFit: 'cover'}}
        />
      </div>
    </section>
  )
}
