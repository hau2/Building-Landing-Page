import Image from "next/image";

const values = [
    {
        title: "CHÍNH TRỰC",
        description:
            "Trung thực và minh bạch trong mọi hoạt động, xây dựng niềm tin với khách hàng và đối tác thông qua sự chuyên nghiệp.",
        icon: "/images/chinh-truc.png",
    },
    {
        title: "TÔN TRỌNG",
        description:
            "Tôn trọng khách hàng, nhân viên, đối tác và các bên liên quan, tạo dựng môi trường hợp tác và hỗ trợ lẫn nhau.",
        icon: "/images/ton-trong.png",
    },
    {
        title: "CÔNG BẰNG",
        description:
            "Cung cấp dịch vụ công bằng cho khách hàng, nhân viên và các đối tác kinh doanh, đảm bảo sự phát triển và lợi ích chung.",
        icon: "/images/cong-bang.png",
    },
    {
        title: "ĐẠO ĐỨC",
        description:
            "Tuân thủ các tiêu chuẩn đạo đức cao, giữ gìn các giá trị đạo đức trong mọi hoạt động của công ty.",
        icon: "/images/dao-duc.png",
    },
    {
        title: "TUÂN THỦ",
        description:
            "Chấp hành đầy đủ các quy định của pháp luật, bộ quy tắc ứng xử và các chính sách, quy định của công ty để duy trì sự chuyên nghiệp và trách nhiệm.",
        icon: "/images/tuan-thu.png",
    },
];

export default function CoreValuesPage() {
    return (
        <div className="container mx-auto py-10 px-5 text-center">
            <h1 className="text-3xl font-bold mb-4 text-[#DAB87A]">
                GIÁ TRỊ CỐT LÕI
            </h1>
            <p className="mb-12 italic text-gray-600 text-lg">
                {
                    "Trở thành biểu tượng niềm tin hàng đầu Việt Nam về sản phẩm dinh dưỡng và sức khỏe phục vụ cuộc sống con người"
                }
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
                {values.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {/* <div className="bg-blue-700 rounded-full p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"> */}
                        <Image
                            src={item.icon}
                            alt={item.title}
                            width={130}
                            height={130}
                            className="object-contain"
                        />
                        {/* </div> */}
                        <h2 className="text-lg font-bold text-blue-800 mt-4 mb-2 text-lg">
                            {item.title}
                        </h2>
                        <p className="text-sm text-gray-600 max-w-xs text-lg">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
