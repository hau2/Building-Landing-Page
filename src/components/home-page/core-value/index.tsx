import Image from "next/image";

const values = [
    {
        title: "CHÍNH TRỰC",
        description:
            "Liêm chính, Trung thực trong ứng xử và trong tất cả các giao dịch.",
        icon: "/images/chinh-truc.png",
    },
    {
        title: "TÔN TRỌNG",
        description:
            "Tôn trọng bản thân, Tôn trọng đồng nghiệp, Tôn trọng Công ty, Tôn trọng đối tác, Hợp tác trong sự tôn trọng.",
        icon: "/images/ton-trong.png",
    },
    {
        title: "CÔNG BẰNG",
        description:
            "Công bằng với nhân viên, khách hàng, nhà cung cấp và các bên liên quan khác.",
        icon: "/images/cong-bang.png",
    },
    {
        title: "ĐẠO ĐỨC",
        description:
            "Tôn trọng các tiêu chuẩn đã được thiết lập và hành động một cách đạo đức.",
        icon: "/images/dao-duc.png",
    },
    {
        title: "TUÂN THỦ",
        description:
            "Tuân thủ Luật pháp, Bộ Quy Tắc Ứng Xử và các quy chế, chính sách, quy định của Công ty.",
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
