import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function FormModal({ showModal, onClose }) {
  const [imageFile, setImageFile] = useState(null);
  const [features, setFeatures] = useState([]);
  const [propertyImages, setPropertyImages] = useState([]);

  const addFeature = (feature) => {
    setFeatures([...features, feature]);
  };

  const addPropertyImage = (image) => {
    setPropertyImages([...propertyImages, image]);
  };

  const handlePropertyImagesDrop = (e, callback) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        callback(e.target.result);
      };
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      setImageFile(file);
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        document.getElementById("imageSrc").value = e.target.result;
      };
    }
  };

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 items-center justify-center text-2xl font-semibold text-amber-500 ">
                    <h1>New Dwelling</h1>
                  </div>
                  <form
                    action="#"
                    method="POST"
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      addFeature(document.getElementById("feature").value);
                      // Add the rest of the form submission logic here
                    }}
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Rate per night
                      </label>
                      <div className="mt-2">
                        <input
                          id="price"
                          name="price"
                          type="text"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="description"
                          name="description"
                          rows={2}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="options"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Bed | Baths
                      </label>
                      <div className="mt-2">
                        <input
                          id="options"
                          name="options"
                          type="text"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="cover-photo"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Main photo
                      </label>
                      <div
                        className=" flex justify-center rounded-lg border border-dashed border-gray-900/25 py-4"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                      >
                        <div className="text-center">
                          <PhotoIcon
                            className="mx-auto h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="imageSrc"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-amber-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-amber-600 focus-within:ring-offset-2 hover:text-amber-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="imageSrc"
                                name="imageSrc"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="feature"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Features
                      </label>
                      <div className="mt-2">
                        <input
                          id="feature"
                          name="feature"
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div>
                        {features.map((feature, index) => (
                          <p key={index}>{feature}</p>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="propertyImage"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Property Images
                      </label>
                      <div
                        className="flex justify-center rounded-lg border border-dashed border-gray-900/25 py-4"
                        onDragOver={handleDragOver}
                        onDrop={(e) => {
                          handleDrop(e, addPropertyImage);
                        }}
                      >
                        {/* ... */}
                        <label
                          htmlFor="propertyImage"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-amber-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-amber-600 focus-within:ring-offset-2 hover:text-amber-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="propertyImage"
                            name="propertyImage"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        {/* ... */}
                      </div>
                      <div>
                        {propertyImages.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Property Image ${index}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                      >
                        Create
                      </button>
                    </div>
                  </form>

                  {/* <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-semibold leading-6 text-amber-500"
                    >
                      New Dwelling Addeddfhdfbnsdb
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        The new Dwelling has been added and its ready to receive
                        bookings
                      </p>
                    </div>
                  </div> */}
                </div>
                {/* <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                    onClick={onClose}
                  >
                    Back to Dwellings
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
