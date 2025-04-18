"use client";

import { motion } from "framer-motion";

export default function SubmitCVButton() {
  return (
    <div className="flex justify-center">
      <motion.a
        href="#"
        className="bg-[#152E51] px-10 py-5 rounded-xl text-white text-lg font-semibold shadow-xl"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.06, 1] }} // scale liên tục
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{
          scale: 1.12,
          boxShadow: "0 0 20px rgba(255,255,255,0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        Nộp CV tại đây
      </motion.a>
    </div>
  );
}
