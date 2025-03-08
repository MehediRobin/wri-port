"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";



function Header({}) {
const {active, setActive, setTimeOfLastClick} = useActiveSectionContext()
  return (
    <div className="z-[999] relative">
      <motion.div
        className="fixed left-1/2 md:h-[3.5rem] lg:h-[3.8rem] md:w-[40rem] lg:w-[46rem] md:rounded-full top-6 h-[3.25rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed flex justify-center top-[1.3rem] lg:top-[1.9rem] left-1/2 -translate-x-1/2">
        <ul className=" flex items-center justify-center w-[24rem] text-xs font-medium md:space-x-16 md:text-[.7rem] text-gray-500 ml-10 lg:space-x-[3rem] lg:text-[.9rem]">
          {links.map((link) => (
            <motion.li
              className="h-[3rem] w-full flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, x: "-50%", opacity: 0 }}
              animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex justify-center w-full hover:text-gray-950 transition px-3 py-3",
                  {
                    "text-gray-950": active === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActive(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === active && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="active"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 50,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
