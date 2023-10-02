"use client";

import useSectionInView from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Connect() {
  const ref = useSectionInView("Connect");

  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="connect"
      ref={ref}
    >
      <SectionHeading>Connect with me on</SectionHeading>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className={style}
          href="https://www.linkedin.com/in/akshaya-biswal/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className={style}
          href="https://github.com/akshaya-biswal"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className={style}
          href="https://www.instagram.com/akshaya_biswal_/"
          target="_blank"
        >
          <AiFillInstagram />
        </a>
      </motion.div>
    </section>
  );
}

const style =
  "bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack";
