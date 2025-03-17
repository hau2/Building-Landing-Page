import React from 'react'
import Image from 'next/image'

const images = [
  "/images/thicong1.jpg",
  "/images/thicong2.jpg",
  "/images/thicong3.jpg",
  "/images/thicong4.jpg",
  "/images/thicong5.jpg",
  "/images/thicong6.jpg",
];

export default function ConstructionGallery() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Hình Ảnh Công Trình</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
