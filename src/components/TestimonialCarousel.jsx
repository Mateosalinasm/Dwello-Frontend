
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot) => emblaRoot.parentElement,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
};

export const TestimonialCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const peopleTestimonials = [
    {
      name: "Santiago Rodriguez",
      title: "Software Engineer - Pinterest",
      imageUrl: "/images/Testimonial Photos/1.png",
      testimonial:
        "I had the most incredible stay with Dwello! Their unique property selection allowed me to find the perfect hidden gem for my vacation. The booking process was seamless, and the accommodation exceeded my expectations. I highly recommend Dwello for anyone seeking unforgettable travel experiences.",
    },
    {
      name: "James Walton",
      title: "Wall Street Broker",
      imageUrl: "/images/Testimonial Photos/2.png",
      testimonial:
        "Dwello has been my go-to platform for booking accommodations during my business trips. Their attention to detail and commitment to quality ensure a comfortable and hassle-free stay every time. I trust Dwello to provide exceptional service, allowing me to focus on my work.",
    },
    {
      name: "Brad Harrison",
      title: "CEO - Rogue Fitness",
      imageUrl: "/images/Testimonial Photos/3.png",
      testimonial:
        "As a busy executive, I rely on Dwello to handle all my travel arrangements. Their extensive network of premium accommodations ensures that I have access to the best options wherever I go. Dwello's professionalism and dedication to customer satisfaction make them my preferred choice for corporate travel.",
    },
    {
      name: "Carmen Alvarez",
      title: "Psychologist",
      imageUrl: "/images/Testimonial Photos/4.png",
      testimonial:
        "Dwello helped me create unforgettable memories during my family vacation. The accommodations were not only comfortable but also provided a perfect setting for quality time with my loved ones. My kids still talk about the core memories they made during our stay. Thank you, Dwello, for making our trip truly special.",
    },
    {
      name: "Ben Thomson",
      title: "Social Media Influencer",
      imageUrl: "/images/Testimonial Photos/5.png",
      testimonial:
        "As a travel influencer, finding unique and Instagram-worthy accommodations is crucial for my content. Dwello never disappoints! Their carefully curated selection of properties has become a valuable resource for me. I can always count on Dwello to deliver memorable experiences that resonate with my audience.",
    },
    {
      name: "Ahmed Ali",
      title: "Financial Analyst",
      imageUrl: "/images/Testimonial Photos/6.png",
      testimonial:
        "Dwello provides an exceptional level of service for business travelers like me. Their efficient booking system and attention to detail ensure a seamless experience from start to finish. I appreciate the peace of mind knowing that I can rely on Dwello for a comfortable and productive stay during my work trips.",
    },
    {
      name: "Juan Caseres",
      title: "Web Designer - Snapchat",
      imageUrl: "/images/Testimonial Photos/7.png",
      testimonial:
        "Dwello is my go-to platform for finding unique accommodations that inspire my creativity. Their selection of artistic and design-oriented properties never fails to impress. Dwello has become an essential tool for me in discovering hidden gems that align with my aesthetic sensibilities.",
    },
    {
      name: "Jake Pine",
      title: "High School Teacher",
      imageUrl: "/images/Testimonial Photos/8.png",
      testimonial:
        "Planning a group trip with fellow teachers was made effortless with Dwello. Their user-friendly platform allowed us to browse and book accommodations that catered to our specific needs. The seamless coordination and support from the Dwello team ensured a memorable and stress-free experience for our entire group.",
    },
    {
      name: "Sarah Evans",
      title: "Graphic Designer - Etsy",
      imageUrl: "/images/Testimonial Photos/9.png",
      testimonial:
        "Dwello played a significant role in making our family vacation truly unforgettable. From the moment we booked our accommodation, we knew we were in good hands. The attention to detail and personalized service provided by Dwello exceeded our expectations. What made our stay truly special was that our two daughters had the opportunity to immerse themselves in the local culture and create lasting memories. Thank you, Dwello, for helping us create cherished moments as a family.",
    },
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="bg-beige pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
            <div className="bg-amber-800 pb-20 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="xl:aspect-auto relative aspect-[2/3] h-full max-md:mx-auto max-md:aspect-[2/3] max-md:w-80 max-sm:mx-auto max-sm:aspect-[2/3] max-sm:w-80 md:mx-auto md:w-96 lg:w-96 xl:mx-0">
                    <img
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 bg-bottom object-cover shadow-2xl"
                      src="/images/Testimonial Photos/1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                      <p>
                        Dwello made my stay incredible! Unique property
                        selection, seamless booking process, and accommodation
                        that exceeded expectations. Highly recommend for
                        unforgettable travel experiences. Attention to detail
                        and commitment to quality stand out. The customer
                        service is the best I've seen!
                      </p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div className="font-semibold text-white">
                        Santiago Rodriguez
                      </div>
                      <div className="mt-1 text-amber-500">
                        Software Engineer - Pinterest
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="bg-beige pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
            <div className="bg-amber-800 pb-20 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="xl:aspect-auto relative aspect-[2/3] h-full max-md:mx-auto max-md:aspect-[2/3] max-md:w-80 max-sm:mx-auto max-sm:aspect-[2/3] max-sm:w-80 md:mx-auto md:w-96 lg:w-96 xl:mx-0">
                    <img
                      className="absolute inset-0 h-full w-full  rounded-2xl bg-gray-800 object-cover shadow-2xl"
                      src="/images/Testimonial Photos/2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl max-md:text-base xl:max-w-none xl:flex-auto xl:px-16 xl:py-24 ">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                      <p>
                        Dwello is my go-to platform for business trip
                        accommodations. Attention to detail and commitment to
                        quality ensure a hassle-free stay. Seamless booking and
                        exceptional service make them stand out. Trust them to
                        provide the best options, allowing me to focus on work.
                        Highly recommended for reliable travel experiences.
                      </p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div className="font-semibold text-white">
                        James Walton
                      </div>
                      <div className="mt-1 text-amber-500">
                        Wall Street Broker
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="bg-beige pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
            <div className="bg-amber-800 pb-20 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="xl:aspect-auto max-md:w-80 relative aspect-[2/3] md:w-96 h-full max-md:mx-auto max-md:aspect-[2/3] max-sm:mx-auto max-sm:aspect-[2/3] max-sm:w-80 md:mx-auto lg:w-96 xl:mx-0–">
                    <img
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                      src="/images/Testimonial Photos/3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                      <p>
                        Dwello handles all my travel arrangements as a busy CEO.
                        Extensive network, premium accommodations, and
                        professionalism make them my preferred choice for
                        corporate travel. Trust Dwello for top-notch
                        accommodations. Their commitment to quality sets them
                        apart. Amazing Company!
                      </p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div className="font-semibold text-white">
                        Brad Harrison
                      </div>
                      <div className="mt-1 text-amber-500">
                        CEO - Rogue Fitness
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="bg-beige pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
            <div className="bg-amber-800 pb-20 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="xl:aspect-auto max-md:w-80 relative aspect-[2/3] md:w-96 h-full max-md:mx-auto max-md:aspect-[2/3] max-sm:mx-auto max-sm:aspect-[2/3] max-sm:w-80 md:mx-auto lg:w-96 xl:mx-0–">
                    <img
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                      src="/images/Testimonial Photos/4.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                      <p>
                        Dwello helped create unforgettable memories during our
                        family vacation. Comfortable accommodations and quality
                        time with loved ones. Kids still talk about the core
                        memories made. Attention to detail and personalized
                        service exceeded expectations. Thank you, Dwello! Truly
                        and unforgettable experience.
                      </p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div className="font-semibold text-white">
                        Carmen Alvarez
                      </div>
                      <div className="mt-1 text-amber-500">Psychologist </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="bg-beige pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
            <div className="bg-amber-800 pb-20 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="xl:aspect-auto max-md:w-80 relative aspect-[2/3] md:w-96 h-full max-md:mx-auto max-md:aspect-[2/3] max-sm:mx-auto max-sm:aspect-[2/3] max-sm:w-80 md:mx-auto lg:w-96 xl:mx-0–">
                    <img
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                      src="/images/Testimonial Photos/5.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                      <p>
                        As a travel influencer, finding unique and
                        Instagram-worthy accommodations is crucial for my
                        content. Dwello never disappoints! Their carefully
                        curated selection of properties has become a valuable
                        resource for me. I can always count on Dwello to deliver
                        memorable experiences that resonate with my audience.
                      </p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div className="font-semibold text-white">
                        Ben Thomson"
                      </div>
                      <div className="mt-1 text-amber-500">
                        Social Media Influencer
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="bg-beige pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
            <div className="bg-amber-800 pb-20 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="xl:aspect-auto max-md:w-80 relative aspect-[2/3] md:w-96 h-full max-md:mx-auto max-md:aspect-[2/3] max-sm:mx-auto max-sm:aspect-[2/3] max-sm:w-80 md:mx-auto lg:w-96 xl:mx-0–">
                    <img
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                      src="/images/Testimonial Photos/7.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                      <p>
                        Dwello is my go-to platform for finding unique
                        accommodations that inspire my creativity. Their
                        selection of artistic and design-oriented properties
                        never fails to impress. Dwello has become an essential
                        tool for me in discovering hidden gems that align with
                        my aesthetic sensibilities.
                      </p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div className="font-semibold text-white">
                        Juan Caseres
                      </div>
                      <div className="mt-1 text-amber-500">
                        Web Designer - Snapchat
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="bg-beige pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
            <div className="bg-amber-800 pb-20 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="xl:aspect-auto max-md:w-80 relative aspect-[2/3] md:w-96 h-full max-md:mx-auto max-md:aspect-[2/3] max-sm:mx-auto max-sm:aspect-[2/3] max-sm:w-80 md:mx-auto lg:w-96 xl:mx-0–">
                    <img
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                      src="/images/Testimonial Photos/8.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                      <p>
                        Planning a group trip was effortless with Dwello.
                        User-friendly platform for accommodations that cater to
                        specific needs. Seamless coordination and support from
                        the Dwello team. Memorable and stress-free experience
                        for the entire group. Highly recommended for hassle-free
                        group travel. Will never choose anyone else.
                      </p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div className="font-semibold text-white">Jake Pine</div>
                      <div className="mt-1 text-amber-500">
                        High School Teacher
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="bg-beige pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
            <div className="bg-amber-800 pb-20 sm:pb-24 xl:pb-0">
              <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                  <div className="xl:aspect-auto max-md:w-80 relative aspect-[2/3] md:w-96 h-full max-md:mx-auto max-md:aspect-[2/3] max-sm:mx-auto max-sm:aspect-[2/3] max-sm:w-80 md:mx-auto lg:w-96 xl:mx-0–">
                    <img
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                      src="/images/Testimonial Photos/9.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                  <figure className="relative isolate pt-6 sm:pt-12">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use
                        href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                        x={86}
                      />
                    </svg>
                    <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                      <p>
                        Dwello helped make our family vacation unforgettable.
                        Attention to detail and personalized service exceeded
                        expectations. The kids still talk about the core
                        memories made during our stay. Dwello understands the
                        importance of family experiences. Thank you, Dwello, for
                        making our trip memorable!
                      </p>
                    </blockquote>
                    <figcaption className="mt-8 text-base">
                      <div className="font-semibold text-white">
                        Sarah Evans
                      </div>
                      <div className="mt-1 text-amber-500">
                        Graphic Designer - Etsy
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
