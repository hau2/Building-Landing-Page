"use client";
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ThongSo() {
    const t = useTranslations("thongSo");
    const values = [130, 20000, 19, 200];

    return (
        <section className="w-full bg-gradient-to-b from-[#f5f7fa] to-[#e4ebf1]  py-20 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                {/* Tiêu đề */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-blue-900 uppercase tracking-wide">
                        {t("heading")}
                    </h2>
                </motion.div>

                {/* Dãy số liệu */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto"
                >
                    {values.map((value, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <div className="text-gray-700 text-sm font-medium tracking-wide mb-3">
                                {t(`data.${idx}.title`)}
                            </div>
                            <div
                                className="text-5xl font-extrabold text-[#c79538] drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
                                style={{ fontWeight: 900 }}
                            >
                                <CountUp
                                    end={value}
                                    duration={2.5}
                                    separator=","
                                />
                            </div>
                            <div className="text-sm text-gray-600 mt-3 uppercase tracking-wider">
                                {t(`data.${idx}.unit`)}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
