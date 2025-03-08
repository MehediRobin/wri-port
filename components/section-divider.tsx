"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-200 my-20 h-16 w-1 rounded-full"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      }}
    ></motion.div>
  );
}
