"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-12 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/my_photo.jpeg" alt="" fill className="object-contain" />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
          Enthusiastically Innovating, Designing the Future of Digital Experiences.
          </h1>
          <p className="md:text-xl">
            Hello! I'm Ana! Welcome to my digital atelier, a space where creativity and innovation 
            seamlessly blend. 
          </p>
          <div className="w-full flex gap-4">
          <a href="/projects" className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </a>
          <a href="/contact" className="p-4 rounded-lg ring-1 ring-black">
             Let's connect
          </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;