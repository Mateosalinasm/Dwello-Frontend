import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Skeleton from "@mui/material/Skeleton";
import Footer from "../components/Footer";
import Modal from "../components/Modal"
import FormModal from "../components/NewModal"

const Dwellings = () => {
  const [dwellings, setDwellings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchDwellings = async () => {
      try {
        const response = await axios.get(
          `https://dwello-backend.vercel.app/dwellings`
        );
        console.log(response);
        setDwellings(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dwellings data:", error);
      }
    };

    fetchDwellings();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-beige">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-row items-center justify-between">
          <h1 className="mb-10 mt-5 text-5xl font-bold tracking-tight text-amber-500 sm:text-6xl">
            Dwellings
          </h1>
          <div className="flex-shrink-0">
            <button
              type="button"
              className="relative items-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              onClick={toggleModal}
            >
              New
              {/* <Link to="/dwellings/new">New Dwello</Link> */}
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-beige group relative flex flex-col overflow-hidden"
                >
                  <Skeleton variant="rectangular" width="100%" height={240} />
                  <div className="bg-beige flex flex-1 flex-col space-y-2 rounded border border-amber-800 p-4">
                    <Skeleton variant="text" width="60%" />
                    <Skeleton variant="text" width="40%" />
                    <Skeleton variant="text" width="80%" />
                  </div>
                </div>
              ))
            : dwellings.map((dwelling) => (
                <div
                  key={dwelling._id}
                  className="bg-beige group relative flex flex-col overflow-hidden"
                >
                  <Link to={`/dwellings/${dwelling._id}`}>
                    <div className="bg-beige aspect-h-2 aspect-w-3 mb-4 sm:aspect-none group-hover:opacity-80 sm:h-80">
                      <img
                        src={dwelling.imageSrc}
                        className="h-full w-full rounded-md object-cover object-center sm:h-full sm:w-full"
                      />
                    </div>
                    <div className="bg-beige flex flex-1 flex-col space-y-2 rounded border border-amber-800 p-4">
                      <h3 className="text-sm font-medium text-amber-800">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {dwelling.name}
                      </h3>

                      <div className="flex flex-1 flex-col justify-end">
                        <p className="mb-4 text-sm italic text-gray-700">
                          {dwelling.options}
                        </p>
                        <p className="text-base font-medium text-amber-800">
                          {dwelling.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
        <FormModal showModal={showModal} onClose={toggleModal} />
        <Footer />
      </div>
    </div>
  );
};

export default Dwellings;
