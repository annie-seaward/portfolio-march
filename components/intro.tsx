"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              className="h-24 w-24 sm:h-48 sm:w-48 object-cover"
              src="/headshot.png"
              alt="Annie Headshot"
              width="192"
              height="192"
              quality="95"
              priority={true}
            />
          </motion.div>
          <motion.span
            className="text-4xl sm:text-7xl	 absolute bottom-0 right-0 hover:cursor-default"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            whileHover={{
              rotate: [0, 20, 0],
              transition: {
                duration: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              },
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.div
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-bold">Hello World, I'm Annie.</h1>
        <h2 className="text-xl sm:text-3xl">
          I'm a <span className="font-bold">full-stack developer</span>, based
          in the UK.
        </h2>
        <h3 className="text-lg sm:text-xl mt-6">
          I'm passionate about creating engaging, creative and accessible user
          experiences.
        </h3>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:opacity-100 group-hover:stroke-1 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
          href="/CV.pdf"
          target="_blank"
        >
          View CV{" "}
          <HiDownload className="opacity-70 group-hover:opacity-100 group-hover:stroke-1 transition" />
        </a>
        <div className="flex flex-row gap-6">
          <a
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-110 transition"
            href="https://www.linkedin.com/in/annie-seaward-31a672249/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-110 transition"
            href="https://github.com/annie-seaward"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
