"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.2", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer group">
      <motion.div
        ref={ref}
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden relative  h-[20.5rem] mb-6 hover:bg-gray-500"
      >
        <div className="pt-4 pb-7 px-5 max-w-[50%] h-full flex flex-col group-even:ml-80">
          <h3 className="mt-2 leading-relaxed text-gray-700 text-2xl font-bold">
            {title}
          </h3>
          <p className="mt-2 leading-relaxed">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-500 px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute top-4 -right-36 w-[28.25rem] rounded-t-lg shadow-2xl  group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2 group-hover:scale-[1.04] transition"
        />
      </motion.div>
    </Link>
  );
}
