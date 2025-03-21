// components/Footer.tsx

import { MapPin, Mail, Phone, Facebook } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#152E51] py-8 mt-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                <div>
                    <Image
                        src={"/images/logo-new.png"}
                        alt={"Bình Doanh"}
                        width={300}
                        height={180}
                        style={{
                            objectFit: "cover",
                            backgroundColor: "transparent",
                        }}
                    />
                    <h2 className="font-bold text-xl text-white mb-4 mt-4">
                        BINH DOANH
                    </h2>

                    <p className="text-gray-400 text-base mt-4">
                        Here you can use rows and columns here to organize your
                        footer content. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                    </p>
                </div>

                <div>
                    <div className="ml-24">
                        <h2 className="font-bold text-xl text-white mb-4">
                            SITEMAP
                        </h2>
                        <ul className="text-gray-400 text-base">
                            <li>Giới thiệu</li>
                            <li>Dự án</li>
                            <li>Tin tức</li>
                            <li>Tuyển dụng</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold text-xl text-white mb-4">
                        CONTACT
                    </h2>
                    <p className="flex items-center gap-2 text-gray-400 text-base">
                        <MapPin size={28} /> 204/09 Nguyễn Văn Hưởng, P. Thảo
                        Điền, TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam
                    </p>
                    <p className="flex items-center gap-2 text-gray-400 text-base">
                        <Mail size={18} /> binhdoanh@gmail.com
                    </p>
                    <p className="flex items-center gap-2 text-gray-400 text-base">
                        <Phone size={18} /> (+84) 358 500 195
                    </p>
                    <p className="flex items-center gap-2 text-gray-400 text-base">
                        <Facebook size={18} /> www.facebook.com/binhdoanhvn
                    </p>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-4">
                © 2024 BinhDoanh.com
            </div>
        </footer>
    );
}
