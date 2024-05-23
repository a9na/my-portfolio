"use client";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <div className="flex flex-col gap-12 justify-center">
            <Image
              src="/my_photo.jpeg"
              alt="My Photo"
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            <h1 className="font-bold text-2xl">About Me</h1>
            <p className="text-lg">
              An ambitious and dedicated student at FERIT Osijek with a firm drive and enthusiasm
              that fuels my pursuit of complex challenges, while uplifting and inspiring my colleagues and team.
            </p>
            <p>
              I am currently working as a private tutor, giving lessons to students in the area of
              mathematics, physics, programming (C, JavaScript) as well as information technology
              and computer networks.
            </p>
            <p>
              Also very actively volunteering in organizations as one of my main
              life principles is: &quot;The meaning of life is to find your gift.
              The purpose of life is to give it away.&quot;
            </p>
            <span className="italic">
              Open for full-stack development and software engineering roles.
            </span>
          </div>
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              MY SKILLSET
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-2 flex-wrap"
            >
              <div>Languages:</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C++
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JAVASCRIPT
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-2 flex-wrap"
            >
              <div>Technologies:</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                VUE.JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                REACT
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                QUASAR
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TAILWINDCSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NEXT
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                VITE
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                EXPRESS.JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MONGODB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                NODE.JS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                REDUX
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                BOOTSTRAP
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MYSQL
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-2 flex-wrap"
            >
              <div>Workflow:</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Visual Studio
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Visual Studio Code
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Linux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
            </motion.svg>
          </div>

          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              <div className="flex justify-between h-82">
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Private Tutor
                  </div>
                  <div className="p-3 text-sm italic">
                    <div>
                      • Giving lessons to students in the area of mathematics, physics,
                      programming (C, JavaScript) as well as information technology and computer networks
                    </div>
                    <br />
                    <div>
                      • Demonstrated leadership skills by effectively guiding and motivating students
                      to achieve academic success, fostering a supportive learning environment,
                      and providing mentorship to encourage personal and intellectual growth
                    </div>
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Aug 2023 - Present
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-12 justify-between h-82">            
            <h1 className="font-bold text-2xl">
              EDUCATION
            </h1>
            <h2>Faculty of Electrical Engineering and Computer Science Osijek</h2>
            <p className="text-lg">
              <div className="font-bold">Bachelor of technology in Computer Science</div>
              Relevant courses: Programming in Java; Data Structures and Algorithms; Information Systems 
              and Computer Networks; Operating Systems; Database Management Systems
            </p>
            <h2>CS50</h2>
            <p className="text-lg">
              <div className="font-bold">Harvard University&apos;s introduction to the intellectual enterprises of computer science and 
              the art of programming.</div>
              Languages include C, Python, SQL, and JavaScript as well as CSS and HTML.
            </p>
          </div>

          <div className="flex flex-col gap-12 justify-between h-82">            
            <h1 className="font-bold text-2xl">HOBBIES &amp; INTERESTS</h1>
            <div className="p-4 text-sm cursor-pointer bg-black text-white">
              Volunteering
            </div>
            <div className="p-4 text-sm cursor-pointer bg-black text-white">
              Language learning
              <div>I speak English (C2), German (B2) and Italian (B2)</div>
            </div>
            <div className="p-4 text-sm cursor-pointer bg-black text-white">
              Sports 
              <div>Volleyball, Running, Mountain climbing, Gym</div>
            </div>
            <div className="p-4 text-sm cursor-pointer bg-black text-white">
              Reading and Writing 
              <div>I write reviews regularly at <a href="https://www.goodreads.com/user/show/101703919-ana">Goodreads</a></div>
              <div>Also posting financial advice at <a href="https://www.instagram.com/fiscus.cro/">Instagram</a></div>
            </div>
          </div>
        </div>
      </div>          
    </motion.div>
  );
};

export default AboutPage;
