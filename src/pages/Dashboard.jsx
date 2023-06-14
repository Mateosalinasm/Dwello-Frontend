import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import {
  GlobeAmericasIcon,
  CalendarDaysIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import "../components/Colors.css";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import SlideShow from "../components/SlideShow";
import Mobile from "../components/Mobile";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { Transition } from "@headlessui/react";
import TravelImages from "../components/TravelImages";

const primaryFeatures = [
  {
    name: "Worldwide Accommodations",
    description:
      "Discover a vast selection of accommodations spanning the globe, offering diverse and immersive experiences in every corner of the world.",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Exceptional Customer Service",
    description:
      "Experience top-notch customer service with our dedicated team, ready to assist you throughout your journey and ensure your satisfaction.",
    icon: UsersIcon,
  },
  {
    name: "Intuitive Booking System",
    description:
      "Streamline your travel planning with our user-friendly booking system, designed to provide a seamless and hassle-free experience from start to finish.",
    icon: CalendarDaysIcon,
  },
];

const h1Variants = {
  visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  hidden: { y: "-10%", opacity: 0 },
};

const imgVariants = {
  visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.7 } },
  hidden: { y: "-10%", opacity: 0 },
};
export default function Dashboard() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } 
  }, [controls, inView]);
  return (
    <div className="overflow-x-hidden bg-beige">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden">
          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-40rem)] lg:-left-10 lg:top-[calc(50%-31rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1008/332] w-[130.25rem] bg-gradient-to-r from-[#f1e242] to-[#00fef2] opacity-40"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 90.8%, 100% 700.4%, 97.4% 82.2%, 92.5% 84.9%, 85.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 0.4% 51.1%, 5.4% 63.9%, 58.9% 0.2%, 100.6% 100.7%)",
              }}
            />
          </div>
          <div className="mx-auto mb-10 max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={h1Variants}
              className="z-10 mx-auto  max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
            >
              <motion.h1 className="mt-14 text-6xl font-bold leading-14 tracking-tight text-amber-500 sm:text-8xl sm:leading-24">
                Welcome to <br />
                Dwello
              </motion.h1>
              <motion.p className="mt-6 text-lg leading-8 text-gray-600">
                Explore the world with Dwello, the innovative travel platform
                offering unique accommodations curated for extraordinary
                adventures. Discover quality, comfort, and safety in every stay.
                Let Dwello be your trusted companion on the journey to
                unforgettable memories.
              </motion.p>
              <motion.div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/luxe"
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-mute-green rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
                >
                  Explore
                </Link>
              </motion.div>
            </motion.div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none pb-10 sm:max-w-5xl lg:max-w-none">
                <motion.img
                  ref={ref}
                  initial="hidden"
                  animate={controls}
                  variants={imgVariants}
                  src="/images/Travel Images/pexels-josh-hild-2422259.jpg"
                  alt="App screenshot"
                  // width={2432}
                  // height={1442}
                  className="w-[32rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 max-sm:w-[21rem]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <motion.div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
            className="text-center text-5xl font-semibold leading-8 text-amber-600 max-md:leading-14 max-sm:leading-14"
          >
            Explore Beautiful Destinations
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 flex justify-center max-sm:hover:w-10"
          >
            <SlideShow />
          </motion.div>
        </motion.div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-2 text-4xl font-bold  text-amber-600 max-md:leading-14 max-sm:leading-10 sm:text-5xl"
            >
              Everything you need for your next stay
            </motion.p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  viewport={{ once: true }}
                  key={feature.name}
                  className="flex flex-col"
                >
                  <motion.dt className="text-base font-semibold leading-7 text-amber-950">
                    <motion.div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </motion.div>
                    {feature.name}
                  </motion.dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="flex-auto"
                    >
                      {feature.description}
                    </motion.p>
                    <p className="mt-6"></p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
        <TravelImages />
        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl sm:text-center"
            >
              <h2 className="text-4xl font-bold text-amber-600 sm:text-4xl">
                Breathtaking destinations across the globe
              </h2>
            </motion.div>
          </div>
          <div className="relative  pt-16">
            <div className="mx-auto w-screen ">
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 top-0 bg-gradient-to-b from-beige pt-[10%]" />
              </div>
              <img
                src="/images/Travel Images/pexels-thanhhoa-tran-1506836.jpg"
                alt="App screenshot"
                className=" w-screen ring-1 ring-white/10"
                // width={2432}
                // height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-beige pt-[8%]" />
              </div>
              <div className="mx-auto max-w-2xl sm:text-center">
                <p className="mx-auto mt-6 text-lg leading-8 text-amber-400">
                  Experience Đắk Ya, Gia Lai, Vietnam like this
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile App */}
        <div className="mb-10 mt-10">
          <Mobile />
        </div>
        {/* Testimonials */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
            className="mt-2 text-4xl font-bold  text-amber-600 max-md:leading-14 max-sm:leading-10 sm:text-5xl"
          >
            Testimonials
          </motion.h1>
        </div>

        <TestimonialCarousel />
        {/* CTA section */}
        <div className="relative isolate mt-10 px-6 py-10 sm:mt-40 sm:pb-72 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ y: "20%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl"
            >
              Don't dwell on the possibilities
              <br />
              Elevate your stay today
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: true }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                to="/dwellings"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-mute-green rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Check out our Dwellings
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
