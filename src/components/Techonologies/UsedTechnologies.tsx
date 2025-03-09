"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const UsedTechnologies = () => {
  const files: string[] = [
    "/tecnologies/ts.webp",
    "/tecnologies/js.webp",
    "/tecnologies/re.webp",
    "/tecnologies/njs.webp",
    "/tecnologies/g.webp",
    "/tecnologies/nx.webp",
    "/tecnologies/r.webp",
    "/tecnologies/ejs.webp",
    "/tecnologies/s.webp",
    "/tecnologies/tl.webp",
    "/tecnologies/fm.webp",
    "/tecnologies/mdb.webp",
    "/tecnologies/redis.webp",
    "/tecnologies/fb.webp",
    "/tecnologies/gh.webp",
    "/tecnologies/bs.webp",
    "/tecnologies/d.webp",
    "/tecnologies/ku.webp",
    "/tecnologies/ng.webp",
  ];

  return (
    <section className="w-full h-[200px]">
      <div className="w-full h-full">
        <h1 className="flex justify-center text-2xl md:text-3xl xl:text-4xl font-semibold">
          Recent Technologies I’ve Used
        </h1>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] pt-5">
          {/* Infinite Scrolling Animation */}
          <motion.div
            className="flex pt-5 gap-12 mr-[1200px]"
            animate={
              {
                translateX:"-50%"
              }
            }
            transition={{
              repeat: Infinity,
              repeatType:"loop",
              duration: 15,
              ease: "linear",
            }}
          >
            {files.map((src, i) => (
              <div key={i} className="relative w-[70px] h-[70px] hover:scale-105 duration-150 ease-in-out">
                <Image
                  alt="icons"
                  src={src}
                  fill
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            ))}
            {files.map((src, i) => (
              <div key={i} className="relative w-[70px] h-[70px] hover:scale-105 duration-150 ease-in-out">
                <Image
                  alt="icons"
                  src={src}
                  fill
                  objectFit="contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UsedTechnologies;
