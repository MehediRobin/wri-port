import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Me from "../public/melink.png";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      id="about"
      className=" scroll-mt-28 max-w-50rem text-center mb-20 relative"
    >
      <SectionHeading> About Me</SectionHeading>
      <div className="flex items-center justify-center mt-10">
        <div className="w-[40%] text-justify text-[1rem] z-10 leading-10 flex flex-col gap-4">
          <motion.span
            initial={{ opacity: 0.2, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            I am a writer who knows what you are seeking. You want
            <span className="font-semibold">
              {" "}in-depth, research-based content
            </span>{" "}
            that precisely describe your products and services while resonating
            with your clients and customers. You want quality{" "}
            <span className="font-semibold"> SEO content to draw traffic </span>. You want ROI.
             <br />{" "}
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0.1, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            I write content that flows like a stream, seeps through minute details of the subject, and reflects on readers revelation. Dedicated to my craft, I am always working on several skills:
            <span className=" font-semibold">
              {" "}
              The Art of Writing Compelling Content, SEO,{" "}
            </span>{" "}
            content management system like{" "}
            <span className=" font-semibold"> WordPress </span>, front-end
            technologies like{" "}
            <span className=" font-semibold">
              {" "}
              JavaScript, React, and Next{" "}
            </span>
            .{" "}
          </motion.span>{" "}
          <br />{" "}
          <span className=" text-purple-500 font-semibold">
            {" "}
            Here are my specialties:{" "}
          </span>{" "}
          <motion.ul
            initial={{ opacity: 0.1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className=" block list-disc"
          >
            <li>
              <span className="font-semibold">3+ years</span> of writing experience{" "}
            </li>{" "}
            <li> An inquisitive mind that goes beyond limit while <span className="font-semibold"> researching</span> </li>{" "}
            <li> A profound <span className="font-semibold"> vocabulary and grammar</span> base, </li>{" "}
            <li> Writing sentences fine-tuned with diverse <span className="font-semibold">stylistic, rhetoric and syntactical</span> choices </li>{" "}
            <li> Natural in engraving <span className="font-semibold"> SEO Keywords</span></li>
            <li> Preaching readers about <span className="font-semibold"> products </span> and their qualities</li>
            <li> Explaining intricate topic with <span className="font-semibold"> easy to read</span> write-ups</li>
          </motion.ul>{" "}
        </div>
        <Image
          src={Me}
          alt="Mehedi Robin Portfolio"
          width={400}
          className="left-[55%] -top-[15%] absolute rotate-[35deg] opacity-20"
        />
      </div>
      <div></div>
    </motion.section>
  );
}
