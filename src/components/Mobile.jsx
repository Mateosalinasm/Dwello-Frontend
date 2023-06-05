"use client";

import "./Colors.css";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const phoneVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 1.4, delay: 0.5 } },
  hidden: { x: "100%", opacity: 0 },
};

const badgeVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 1.4, delay: 0.3 } },
  hidden: { x: "-100%", opacity: 0 },
};

const textVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 1.4, delay: 0.6 } },
  hidden: { x: "-100%", opacity: 0 },
};
const h1Variants = {
  visible: { x: 0, opacity: 1, transition: { duration: 1.4, delay: 0.4 } },
  hidden: { x: "-100%", opacity: 0 },
};

export default function Mobile() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div className="bg-beige">
      <div className="relative isolate pt-4">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={badgeVariants}
                className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 ring-1 ring-stone-400"
              >
                <span className="font-semibold text-amber-700 ">
                  In Development
                </span>
              </motion.div>
            </div>
            <motion.h1
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={h1Variants}
              className="mb-12 mt-10 max-w-lg text-4xl font-bold leading-18 tracking-tight text-amber-800 max-sm:leading-12 sm:text-6xl"
            >
              Mobile App Coming Soon!
            </motion.h1>
            <motion.p
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={textVariants}
              className="text-lg mt-6 leading-8 text-gray-600"
            >
              Our dedicated team is  working on developing a
              state-of-the-art mobile app for Dwello, leaving no room for
              compromise. Get ready to embark on an extraordinary journey that
              combines innovation, convenience, and seamless functionality. Your
              Dwello experience will never be the same again! Stay tuned...
            </motion.p>
          </div>
          {/* Iphone */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={phoneVariants}
            // whileHover={{
            //   scale: 1.05,
            //   transition: { duration: 0.2 },
            // }}
            // whileTap={{ scale: 1.02 }}
            className="mt-16 hover:drop-shadow-xl sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
          >
            <motion.svg

              viewBox="0 0 366 729"
              role="img"
              className="mx-auto w-[21rem] max-w-full hover:drop-shadow-xl"
            >
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect width={316} height={684} rx={36} />
                </clipPath>
              </defs>
              <path
                fill="#52443d"
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
              />
              <path
                fill="#1d2024"
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
              />
              <foreignObject
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
              >
                <video
                  src="/videos/Untitled.mp4"
                  alt=""
                  autoPlay
                  loop
                  muted
                  className=""
                />
              </foreignObject>
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
