import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Disclosure, Tab, Menu, Transition } from "@headlessui/react";
import { StarIcon, EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Calendar from "./Calendar";
import { Link } from "react-router-dom";
import DotMenu from "./Menu";
import EditFormModal from "./EditModal";

const dwellingRating = {
  rating: 4,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dwelling() {
  const { propertyId } = useParams();
  const [dwelling, setDwelling] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchDwelling = async () => {
      try {
        const response = await axios.get(
          `https://dwello-backend.vercel.app/dwellings/${propertyId}`
        );
        setDwelling(response.data.data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchDwelling();
  }, [propertyId]);

  if (!dwelling) {
    return <div>Loading...</div>;
  }

  function handleEditDwelling(updatedDwelling) {
    setDwelling(updatedDwelling);
  }

  function handleEditButtonClick() {
    setIsEditModalOpen(true);
  }

  function handleCloseEditModal() {
    setIsEditModalOpen(false);
  }
  return (
    <div className="bg-beige">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {dwelling.propertyImages.map((image, index) => (
                  <Tab
                    key={index}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-beige text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{dwelling.name}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? "ring-amber-500" : "ring-transparent",
                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              {dwelling.propertyImages.map((image, index) => (
                <Tab.Panel key={index}>
                  <img
                    src={image}
                    alt={dwelling.name}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Property info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold tracking-tight text-amber-600">
                {dwelling.name}
              </h1>
              <DotMenu onEditButtonClick={handleEditButtonClick} />
            </div>

            <div className="mt-3">
              <h2 className="sr-only">Property information</h2>
              <p className="text-3xl tracking-tight text-gray-600">
                {dwelling.price}
              </p>
            </div>

            {/* Reviews  */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        dwellingRating.rating > rating
                          ? "text-amber-500"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">
                  {dwellingRating.rating} out of 5 stars
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: dwelling.description }}
              />
            </div>

            <form className="mt-6">
              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-2xl flex-1 items-center justify-center rounded-md border border-transparent bg-amber-600 px-8 py-3 text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Book
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                <Disclosure as="div" key={dwelling.name}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span
                            className={classNames(
                              open ? "text-amber-600" : "text-gray-900",
                              "text-sm font-medium"
                            )}
                          >
                            Features
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="block h-6 w-6 text-amber-400 group-hover:text-amber-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel
                        as="div"
                        className="prose prose-sm pb-6"
                      >
                        <motion.ul
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          role="list"
                        >
                          {dwelling.features.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </motion.ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Calendar />
              </div>
            </section>
          </div>
          {isEditModalOpen && (
            <EditFormModal
              showModal={isEditModalOpen}
              onClose={handleCloseEditModal}
              property={dwelling}
              onEditDwelling={handleEditDwelling} // Pass the function to handle updating the dwelling
            />
          )}
        </div>
      </div>
    </div>
  );
}
