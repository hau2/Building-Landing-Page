"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";

const images = [
    "/images/thicong1.jpg",
    "/images/thicong2.jpg",
    "/images/thicong3.jpg",
    "/images/thicong4.jpg",
    "/images/thicong5.jpg",
    "/images/thicong6.jpg",
    "/images/du-an/duan-apex-1.jpg",
    "/images/du-an/duan-apex-2.jpg",
    "/images/du-an/duan-apex-3.jpg",
    "/images/du-an/duan-apex-4.jpg",
    "/images/du-an/duan-apex-5.jpg",
    "/images/du-an/duan-apex-6.jpg",
    "/images/du-an/duan-apex-7.jpg",
    "/images/du-an/duan-apex-8.jpg",
    "/images/du-an/duan-apex-9.jpg",
    "/images/du-an/duan-apex-10.jpg",
    "/images/du-an/duan-broad-ocean-1.jpg",
    "/images/du-an/duan-broad-ocean-2.jpg",
    "/images/du-an/duan-broad-ocean-3.jpg",
    "/images/du-an/duan-broad-ocean-4.jpg",
    "/images/du-an/duan-broad-ocean-5.jpg",
    "/images/du-an/duan-broad-ocean-6.jpg",
    "/images/du-an/duan-broad-ocean-7.jpg",
    "/images/du-an/duan-broad-ocean-8.jpg",
    "/images/du-an/duan-broad-ocean-9.jpg",
    "/images/du-an/duan-broad-ocean-10.jpg",
    "/images/du-an/duan-broad-ocean-11.jpg",
    "/images/du-an/duan-fullway-1.jpg",
    "/images/du-an/duan-fullway-2.jpg",
    "/images/du-an/duan-fullway-3.jpg",
    "/images/du-an/duan-fullway-4.jpg",
    "/images/du-an/duan-fullway-5.jpg",
    "/images/du-an/duan-fullway-6.jpg",
    "/images/du-an/duan-fullway-7.jpg",
    "/images/du-an/duan-fullway-8.jpg",
    "/images/du-an/duan-fullway-9.jpg",
    "/images/du-an/duan-summer-wind-1.jpg",
    "/images/du-an/duan-summer-wind-2.jpg",
    "/images/du-an/duan-summer-wind-3.jpg",
    "/images/du-an/duan-summer-wind-4.jpg",
    "/images/du-an/duan-summer-wind-5.jpg",
    "/images/du-an/duan-summer-wind-6.jpg",
    "/images/du-an/duan-summer-wind-7.jpg",
    "/images/du-an/duan-summer-wind-8.jpg",
    "/images/du-an/duan-summer-wind-9.jpg",
    "/images/du-an/duan-summer-wind-10.jpg",
    "/images/du-an/duan-summer-wind-11.jpg",
];

export default function ConstructionGallery() {
  const t = useTranslations("HomePage");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-[#152E51] font-bold text-center mb-6">
        {t("constructionGallery")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Ngăn click ảnh đóng
            >
              <Image
                src={selectedImage}
                alt="Preview"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-2xl object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white text-xl bg-black/50 hover:bg-black/80 px-3 py-1 rounded-full"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}