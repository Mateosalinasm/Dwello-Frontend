import { useState, useEffect, React } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const stats = [
  { label: "Dwello's Global Presence", value: "7 Continents" },
  { label: "Premier Travel Destinations", value: "20 Exquisite Cities" },
  { label: "Delighted Explorers", value: "Over 500 Satisfied Travelers" },
];
const values = [
  {
    name: "Authenticity",
    description:
      "Immerse in the essence of a destination with authentic experiences and accommodations that reflect local culture and charm.",
  },
  {
    name: "Quality",
    description:
      "Deliver excellence across all aspects of our service, from handpicked accommodations to a seamless and memorable user experience.",
  },
  {
    name: "Personalization",
    description:
      "Tailor travel experiences to individual preferences, providing personalized recommendations and attentive customer service.",
  },
  {
    name: "Sustainability",
    description:
      "Promote sustainable tourism practices, supporting eco-friendly accommodations and fostering positive relationships with local communities and the environment.",
  },
  {
    name: "Trust",
    description:
      "Prioritize trust and transparency, ensuring accurate property information and verified guest reviews for confident decision-making.",
  },
  {
    name: "Discovery",
    description:
      "Inspire exploration, encouraging travelers to venture off the beaten path and uncover hidden gems for transformative and unforgettable experiences.",
  },
];
const team = [
  {
    name: "Mateo Salinas",
    role: "Full-stack Developer",
    imageUrl: "/images/Team/4.png",
  },
  {
    name: "Mia Salinas",
    role: "Graphic Designer",
    imageUrl: "/images/Team/3.png",
  },
  {
    name: "Kai Salinas",
    role: "Marketing Strategist",
    imageUrl: "/images/Team/1.png",
  },
  {
    name: "Rio Salinas",
    role: "Product Manager",
    imageUrl: "/images/Team/Social Media Profile Picture.png",
  },
];
const blogPosts = [
  {
    id: 1,
    title: "Travel Bucket List for 2023",
    href: "https://www.theblondeabroad.com/travel-bucket-list-for-2023/",
    description:
      "Every year, I like to put together a “travel bucket list” with inspiration for the coming year…a mood board for adventures, if you will. In taking a look at Expedia’s travel trends for 2023, it was really fun to see that so many of our thoughts about travel line up. ",
    imageUrl:
      "https://www.theblondeabroad.com/wp-content/uploads/2023/01/2022111518010489-4599939709005184162-.jpg",
    date: "Mar 15, 2023",
    datetime: "2023-03-15",
    author: {
      name: "Kiki",
      imageUrl:
        "https://www.theblondeabroad.com/wp-content/uploads/2019/11/top-of-the-rock-new-york-city.jpg",
    },
  },
  {
    id: 1,
    title: "6x Unique Eco-friendly Hotels Around the World",
    href: "https://www.saltinourhair.com/sustainability/eco-friendly-hotels/",
    description:
      "Wake up to the sound of a waterfall in Bali or monkeys in Costa Rica by spending the night close to nature at an eco-friendly hotel. Finding a special accommodation that also contributes to a healthy environment can sometimes be a challenge. However, it is possible to leave a smaller ecological footprint while traveling by choosing sustainable accommodation. Anne-Floor from slow travel platform Honeyguide is happy to share her 6 favorite extraordinary eco-friendly hotels—all offering you a greener stay.",
    imageUrl:
      "https://static.saltinourhair.com/wp-content/uploads/2022/12/13092735/Sebatu-Sanctuary-Eco-resort-1.jpg",
    date: "June 10, 2023",
    datetime: "2023-06-10",
    author: {
      name: "Hannah & Nick",
      imageUrl:
        "https://static.saltinourhair.com/build/images/kofi-block-image.png",
    },
  },
  {
    id: 1,
    title: "How to Become A Digital Nomad In Bali",
    href: "https://lostleblanc.com/blogs/news/bali-digital-nomad",
    description:
      "Ever wondered if you could become a digital nomad by making money online? I want to show you what the digital nomad lifestyle might look like in a place like Bali Indonesia and you can decide after if it’s something you could ever see yourself doing.",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1639/2777/files/Lost_LeBlanc_on_laptop_at_Tumpak_Sewu_Waterfall_in_East_Java_Indonesia.png?v=1581564361",
    date: "Jan 3, 2023",
    datetime: "2023-01-03",
    author: {
      name: "Lost Leblanc",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const About = () => {
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
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[780/1036] w-[50.0625rem] bg-gradient-to-tr from-[#f1e242] to-[#00fef2] opacity-40"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-16 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <motion.h1
                    initial={{ y: "-10%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative -top-10 left-0 text-4xl font-bold tracking-tight text-amber-500 max-sm:-top-20 max-sm:text-6xl sm:text-8xl"
                  >
                    About Us
                  </motion.h1>
                  <div className="-top-18 container relative">
                    <motion.h1
                      initial={{ y: "-10%", opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.7 }}
                      viewport={{ once: true }}
                      className=" text-6xl font-bold leading-18 tracking-tight text-amber-600 max-sm:text-4xl"
                    >
                      We’re changing the way people travel.
                    </motion.h1>
                    <motion.p
                      initial={{ y: "-10%", opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.7 }}
                      viewport={{ once: true }}
                      className="relative mt-6  text-lg leading-8 text-gray-700 sm:max-w-md lg:max-w-none"
                    >
                      At Dwello, we're revolutionizing the way people travel. By
                      providing a platform that connects travelers with unique
                      and exotic accommodations, we're transforming the
                      traditional travel experience. Gone are the days of
                      generic hotels and predictable stays. With Dwello,
                      travelers can discover extraordinary places to dwell,
                      immersing themselves in the true essence of their
                      destination. We believe that travel should be an
                      adventure, and our mission is to empower individuals to
                      explore the world in a truly exceptional way.
                    </motion.p>
                  </div>
                </div>
                <div className="sm:-mt-33 mt-14 flex justify-end gap-8 sm:justify-center sm:pl-40 lg:mt-0 lg:pl-0">
                  <div className="mr-auto w-44 flex-none space-y-8 max-sm:gap-4 sm:mr-0 sm:pt-52 lg:pt-6">
                    <motion.div
                      initial={{ y: "-10%", opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80"
                        alt=""
                        className="aspect-[2/4] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div
                      initial={{ y: "-10%", opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.3, duration: 1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                        alt=""
                        className="aspect-[2/4] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <motion.div
                      initial={{ y: "-10%", opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.6, duration: 1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                        alt=""
                        className="aspect-[2/4] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                    <motion.div
                      initial={{ y: "-10%", opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.9, duration: 1 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                        alt=""
                        className="aspect-[2/4] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl"
            >
              Our Mission
            </motion.h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  viewport={{ once: true }}
                  className="text-xl leading-8 text-gray-700"
                >
                  At Dwello, our mission is to redefine travel by connecting
                  people with extraordinary experiences. We curate a collection
                  of unique accommodations that capture the essence of each
                  destination, allowing travelers to immerse themselves in
                  authentic and unforgettable stays.
                </motion.p>
                <div className="mt-10 max-w-xl text-xl leading-7 text-gray-700">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    viewport={{ once: true }}
                  >
                    We believe that remarkable travel experiences should be
                    accessible to all. Whether you're an adventurous explorer or
                    a family seeking new horizons, Dwello offers a diverse range
                    of handpicked accommodations that cater to every traveler's
                    preferences and desires.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-10"
                  >
                    Dwello is not just a travel platform; it's a movement. We
                    aim to foster responsible and sustainable tourism practices,
                    supporting local communities and preserving the natural and
                    cultural heritage of each location. By facilitating
                    meaningful connections between travelers and local hosts, we
                    strive to promote cross-cultural understanding and economic
                    growth. Join us on a transformative journey of exploration,
                    connection, and discovery with Dwello.
                  </motion.p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-66 space-y-8 leading-16 xl:w-80">
                  {stats.map((stat, index) => (
                    <motion.div
                      initial={{ x: "100%", opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 2.4 + index, duration: 0.4 }}
                      viewport={{ once: true }}
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-2"
                    >
                      <dt className="text-base leading-7 text-amber-900">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-amber-600">
                        {stat.value}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.h2
              initial={{ y: "-10%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ y: "-10%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-gray-700"
            >
              We believe that travel accommodations are just as significant as
              the other activities you engage in during your journey. That's why
              we are committed to curating extraordinary accommodations that
              will make your next stay truly unforgettable and worthy of a
              scrapbook filled with cherished memories.
            </motion.p>
          </div>
          <motion.dl
            initial={{ y: "-10%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-amber-700">{value.name}</dt>
                <dd className="mt-1 text-gray-700">{value.description}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.h2
              initial={{ y: "-15%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.9, duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl"
            >
              Our Team
            </motion.h2>
            <motion.p
              initial={{ y: "-10%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              viewport={{ once: true }}
              className="mt-6 text-lg leading-8 text-gray-700"
            >
              Meet the brilliant team behind Dwello! With Mateo as the driving
              force of our development efforts, his exceptional expertise in
              front-end and back-end development has brought the project to
              life. Mia, our talented head graphic designer, infuses her
              artistic vision into every pixel, creating stunning visuals that
              captivate our users. Kai, our strategic mastermind, leads the way
              as the head marketing strategist, ensuring that our brand reaches
              and resonates with the right audience. Rio, our dedicated product
              manager, orchestrates the seamless integration of features and
              functionalities, enhancing the user experience. Together, this
              diverse and passionate team collaborates harmoniously to craft a
              truly immersive and unforgettable travel platform. When not
              immersed in their respective roles, you can find the team members
              enjoying a nice hike.
            </motion.p>
          </div>
          <motion.ul
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.9, duration: 1 }}
            viewport={{ once: true }}
            role="list"
            className="mx-auto mt-20 flex max-w-2xl grid-cols-2 flex-wrap justify-center gap-x-14 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img
                  className="mx-auto h-56 w-56"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-8 text-2xl font-semibold leading-7 tracking-tight text-amber-900">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-amber-600">
                  {person.role}
                </p>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Blog section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <motion.h2
              initial={{ y: "-10%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl"
            >
              From the blog
            </motion.h2>
            <motion.p
              initial={{ y: "-10%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              viewport={{ once: true }}
              className="mt-2 text-lg leading-8 text-gray-700"
            >
              Get ready for your next trip with these travel blogs!
            </motion.p>
          </div>
          <motion.div
            initial={{ y: "20%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.4, duration: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-16 mb-12 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.imageUrl}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
