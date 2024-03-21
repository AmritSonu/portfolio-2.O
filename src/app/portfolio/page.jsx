"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import webapp from "../../../public/blogweb-app.png";
import movieapp from "../../../public/movie-app.png";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Blog Web app",
    desc: "Secure login with personalized accounts ,Categorized blogs with lazy loading,Cloud-based image upload,Dynamic dashboard for easy exploration,Rich text editor for content creation,Customizable user profiles with picture uploads,Secure CRUD operations for data management.",
    img: webapp,
    link: "https://web-bee-neon.vercel.app",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Movie review app",
    desc: "Implemented features like movie search functionality, total movie count display, star ratings for each movie,lazy loading for optimized performance, and user-centric functionalities like adding movies to a watched list.",
    img: movieapp,
    link: "https://moviecorn6.netlify.app",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden bg-gradient-to-r from-purple-200 to-red-200">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color} `}
                key={item.id}
              >
                <div className="flex flex-col gap-2 items-start text-white py-28 ">
                  <div className="w-80 h-20 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt={item.title} />
                  </div>
                  <h1 className="text-xl font-bold xl:text-4xl">
                    {item.title}
                  </h1>

                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] font-semibold">
                    {item.desc}
                  </p>
                  <Link href={item.link}>
                    <button className="p-2 text-vs md:px-4 md:text-md lg:px-8 lg:text-lg bg-white text-gray-600 font-semibold my-1 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center mt-10">
        <h1 className="text-6xl mt-10 lg:mt-32">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
