/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TuyenDung() {
    const t = useTranslations("career");

    const jobListings: any[] = [
        // {
        //   stt: 1,
        //   position: "Kỹ sư xây dựng",
        //   location: "Hà Nội",
        //   quantity: 5,
        //   deadline: "30/04/2025",
        //   details:
        //     "Yêu cầu: Tốt nghiệp đại học chuyên ngành xây dựng, có ít nhất 3 năm kinh nghiệm, biết sử dụng AutoCAD, SAP2000. Công việc: Giám sát công trình, lập báo cáo kỹ thuật, đảm bảo tiến độ xây dựng.",
        // },
        // {
        //   stt: 2,
        //   position: "Kỹ sư cơ khí",
        //   location: "TP. Hồ Chí Minh",
        //   quantity: 3,
        //   deadline: "15/05/2025",
        //   details:
        //     "Yêu cầu: Tốt nghiệp chuyên ngành cơ khí, biết sử dụng phần mềm thiết kế SolidWorks, AutoCAD. Công việc: Thiết kế và lắp đặt hệ thống cơ khí, giám sát chất lượng sản xuất.",
        // },
        // {
        //   stt: 3,
        //   position: "Kỹ sư điện",
        //   location: "Đà Nẵng",
        //   quantity: 4,
        //   deadline: "10/06/2025",
        //   details:
        //     "Yêu cầu: Có bằng đại học ngành điện, có kinh nghiệm lắp đặt hệ thống điện tòa nhà. Công việc: Thiết kế hệ thống điện, bảo trì và xử lý sự cố.",
        // },
        // {
        //   stt: 4,
        //   position: "Công nhân xây dựng",
        //   location: "Bình Dương",
        //   quantity: 10,
        //   deadline: "15/06/2025",
        //   details:
        //     "Yêu cầu: Có sức khỏe tốt, kinh nghiệm làm công trình xây dựng. Công việc: Hỗ trợ thi công, vận chuyển vật liệu, đảm bảo an toàn lao động.",
        // },
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
                        {t("recruitmentBannerTitle")}
                    </h1>
                </div>
            </div>

            <div className="bg-gray-100 min-h-screen p-6">
                <header className="bg-white p-4 flex justify-between items-center">
                    <h1 className="text-2xl text-[#152E51] font-bold">
                        {t("recruitmentPageTitle")}
                    </h1>
                </header>

                <main className="max-w-6xl mx-auto mt-6 space-y-12">
                    {/* Work Environment Section */}
                    <section className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-[#152E51]">
                                {t("workEnvironmentTitle")}
                            </h2>
                            <p className="text-gray-600 mt-4">
                                {t("workEnvironmentParagraph1")}
                            </p>
                            <p className="text-gray-600 mt-2">
                                {t("workEnvironmentParagraph2")}
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

                    {/* Career Opportunity Section */}
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
                            <h2 className="text-2xl font-bold text-[#152E51]">
                                {t("careerOpportunityTitle")}
                            </h2>
                            <p className="text-gray-600 mt-4">
                                {t("careerOpportunityParagraph1")}
                            </p>
                            <p className="text-gray-600 mt-2">
                                {t("careerOpportunityParagraph2")}
                            </p>
                        </div>
                    </section>

                    {/* HR Strategy Section */}
                    <section className="relative bg-[#152E51] py-12 text-center text-white">
                        <h2 className="text-3xl font-bold">
                            {t("hrStrategyTitle")}
                        </h2>
                    </section>

                    <section className="relative max-w-5xl mx-auto -mt-10 bg-white p-6 rounded-lg shadow-lg">
                        <div className="relative w-full h-64">
                            <Image
                                src="/images/building3.jpg"
                                alt="HR Strategy"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg opacity-50"
                            />
                        </div>
                        <div className="relative p-6 bg-white rounded-lg shadow-md -mt-36">
                            <p className="text-gray-700">
                                {t("hrStrategyParagraph1")}
                            </p>
                            <p className="text-gray-700 mt-2">
                                {t("hrStrategyParagraph2")}
                            </p>
                            <p className="text-gray-700 mt-2">
                                {t("hrStrategyParagraph3")}
                            </p>
                        </div>
                    </section>

                    {/* Job Listings Section */}
                    <section className="max-w-6xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-center text-[#152E51] mb-6">
                            {t("positionTitle")}
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-[#152E51]">
                                <thead>
                                    <tr className="bg-[#152E51] text-white text-left">
                                        <th className="border border-white p-2">
                                            {t("tableHeaderNo")}
                                        </th>
                                        <th className="border border-white p-2">
                                            {t("tableHeaderPosition")}
                                        </th>
                                        <th className="border border-white p-2">
                                            {t("tableHeaderLocation")}
                                        </th>
                                        <th className="border border-white p-2">
                                            {t("tableHeaderQuantity")}
                                        </th>
                                        <th className="border border-white p-2">
                                            {t("tableHeaderDeadline")}
                                        </th>
                                        <th className="border border-white p-2">
                                            {t("tableHeaderDetails")}
                                        </th>
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
