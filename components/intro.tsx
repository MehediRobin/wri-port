"use client";
import Image from "next/image";
import Me from "@/public/me.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { SiUpwork } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";

function Intro() {
  const { ref } = useSectionInView("Home");
  return (
    <section ref={ref} id="home">
      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="relative flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              stiffness: 125,
              delay: 0.1,
              duration: 0.25,
            }}
          >
            <Image
              src={Me}
              alt="Mehedi Robin"
              className="w-[7rem] h-[7rem] rounded-full border-8 border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
        <motion.h1
          className="flex flex-col items-center justify-center space-y-8 text-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <span className="text-[1.3rem] leading-relaxed tracking-wide ">
            Hi, I am <b>Mehedi</b>, a <i> content writer </i> and a{" "}
            <i> front-end web developer </i> .
          </span>
          <span className="text-[1.3rem] leading-relaxed tracking-wide ">
            If you want{" "}
            <i>
              <u className="font-medium">
                personalized, well-reasearched, & organic
              </u>
            </i>
            <br /> articles for your blog or website, I can write them for you.
          </span>
          <span className="text-[1.25rem] font-semibold">My articles are </span>
          <motion.ol
            className="flex space-x-12 list-disc text-[1.1rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <li>
              <u> SEO Friendly </u>{" "}
            </li>
            <li>
              <u> Engaging </u>{" "}
            </li>
            <li>
              <u> Storytelling </u>{" "}
            </li>
          </motion.ol>
        </motion.h1>
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition scale-100 cursor-pointer"
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <a
            href="/cv.pdf"
            className=" group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 active:scale-105 transition scale-100 cursor-pointer"
            download="cv.pdf"
          >
            Download CV
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
          </a>
          <a
            href=""
            className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full"
          >
            <BsLinkedin />
          </a>
          <a
            href=""
            className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-lg"
          >
            <SiUpwork />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Intro;
