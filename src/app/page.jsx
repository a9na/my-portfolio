"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
            Hello! I&apos;m Ana! A software engineer, educator, and author with a passion for innovation at the intersection of technology, data science, and finance. 
            <br></br>
            <br></br>
            Currently pursuing a Bachelor&apos;s in Computer Science at the University of Osijek&apos;s Faculty of Electrical Engineering, Computer Science, and Information Technology, where I'm a teaching assistant and avid volunteer.
<br></br>
<br></br>
I am a builder—of solutions, knowledge, and communities. From tutoring and course development to inspiring leadership, I thrive on making complex ideas accessible. As an author, I strive to inform, inspire, and challenge readers to see the world from new perspectives. Through my latest book, "The Everyday Equation: How Math Shapes Our Lives", I strive to bridge the gap between theory and real-world impact.

Beyond my work in software and education, I share insights through my newsletter, podcast (Empowerment Equation), and writings on Medium and dev.to. I also lead Bright Labs, a platform dedicated to fostering innovation and empowering the next generation of tech leaders.
<br></br>
<br></br>
Always a committed volunteer and humanitarian, I believe in using leadership, technology and knowledge as forces for good. Let&apos;s connect and create something meaningful! 🚀
          </p>
          <div className="w-full flex gap-4">
            <a href="/projects" className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </a>
            <a href="/about" className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              About me
            </a>
            <a href="/contact" className="p-4 rounded-lg ring-1 ring-black">
              Let&apos;s connect
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
