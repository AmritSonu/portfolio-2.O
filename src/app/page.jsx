"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import NavLink from "@/components/navLink";

const links = [
  { url: "/portfolio", title: "View My Work" },
  { url: "/contact", title: "Contact Me" },
];
const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-full lg:h-full lg:w-1/2 relative mr-5">
          <Image
            src="/sonu.jpeg"
            alt="Amritpal_Singh"
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center pt-12">
          {/* TITLE */}
          <h1 className="text-4xl md:text-4xl font-bold z-50 text-gray-900">
            Hi, I&rsquo;m Amritpal Singh
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            I am a Full Stack Software Developer with a strong background in
            both frontend and backend development. My expertise in creating
            responsive, dynamic, and visually appealing user interfaces. I also
            have experience in optimizing website speed and ensuring
            cross-browser compatibility.
          </p>
          {/* BUTTONS */}
          <div className="w-full">
            {links.map((link, index) => (
              <button
                className="p-4 rounded-lg ring-1 ring-black bg-black text-white mr-5"
                key={index}
              >
                <NavLink link={link} key={link.title} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
