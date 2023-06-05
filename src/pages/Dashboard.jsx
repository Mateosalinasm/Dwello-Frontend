import React from 'react'
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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import SlideShow from "../components/SlideShow";
import Mobile from "../components/Mobile";
// const Mobile = dynamic(() => import("../components/Mobile"));
import { TestimonialCarousel } from "../components/TestimonialCarousel";

const primaryFeatures = [
  {
    name: "Worldwide Accommodations",
    description:
      "Discover a vast selection of accommodations spanning the globe, offering diverse and immersive experiences in every corner of the world.",
    href: "#",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Exceptional Customer Service",
    description:
      "Experience top-notch customer service with our dedicated team, ready to assist you throughout your journey and ensure your satisfaction.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Intuitive Booking System",
    description:
      "Streamline your travel planning with our user-friendly booking system, designed to provide a seamless and hassle-free experience from start to finish.",
    href: "#",
    icon: CalendarDaysIcon,
  },
];
const secondaryFeatures = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    icon: FingerPrintIcon,
  },
  {
    name: "Powerful API.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
    icon: ServerIcon,
  },
];
const stats = [
  { id: 1, name: "Developers on the platform", value: "8,000+" },
  { id: 2, name: "Daily requests", value: "900m+" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Projects deployed", value: "12m" },
];

export default function Dashboard() {
  return (
    <div className="bg-beige overflow-x-hidden">
      <Navbar />
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
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-amber-500 sm:text-8xl sm:leading-24">
                Welcome to <br />
                Dwello
              </h1>
              <p className="text-lg mt-6 leading-8 text-gray-600">
                We are an innovative travel platform designed to redefine the
                way people explore the world. where extraordinary adventures
                await. Discover unique accommodations curated from around the
                world. Our intuitive platform makes finding the perfect stay
                effortless. We prioritize quality, comfort, and safety for your
                peace of mind. Let us be your trusted companion on the journey
                to unforgettable memories. Choose dwello and embrace the
                extraordinary in your travels. We are an innovative travel
                platform designed to redefine the way people explore the world.
                With a focus on providing unique and immersive experiences,
                Dwello offers a curated selection of exceptional accommodations
                in exotic destinations across the globe
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/top-rated"
                  onClick={() => window.scrollTo(0, 0)}
                  className="bg-mute-green rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
                >
                  Top Dwellings
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <img
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
        <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
          <h1 className="text-center text-5xl font-semibold leading-8 text-amber-600 max-sm:leading-14">
            Explore Beautiful Destinations
          </h1>
          <div className="mx-auto mt-10 flex justify-center max-sm:hover:w-10">
            <SlideShow />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl">
              Everything you need for your next stay
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-amber-950">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6"></p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-amber-500">
                Everything you need for your next stay
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                No server? No problem.
              </p>
              <p className="text-lg mt-6 leading-8 text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-stone-100 pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        {/* Mobile App */}
        <Mobile />
        {/* Stats */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base font-semibold leading-8 text-indigo-400">
              Our track record
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by thousands of developers&nbsp;worldwide
            </p>
            <p className="text-lg mt-6 leading-8 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
              >
                <dt className="text-sm leading-6">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {/* Testimonials */}
        <TestimonialCarousel />
        {/* CTA section */}
        <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl">
              Elevate your stay
              <br />
              Book your first stay today
            </h2>
            <p className="text-lg mx-auto mt-6 max-w-xl leading-8 text-gray-300">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
              anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="dwellings"
                className="bg-mute-green rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Check out our Dwellings
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

// import React from 'react'
// import Testimonial from '../components/Testimonials'
// import Footer from '../components/Footer'
// import Mobile from '../components/Mobile'
// import Navbar from '../components/Navbar'

// const page = () => {
//   return (
//     <div>
//       <Navbar />
//       <Testimonial />
//       <Mobile />
//       <Footer />
//     </div>
//   );
// }

// export default page

//bg effect
{
  /* <div
            className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#0ccd20] to-[#19ad0f] opacity-20"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div> */
}