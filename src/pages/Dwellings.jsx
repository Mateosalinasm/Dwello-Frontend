import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const Dwellings = () => {
  const [dwellings, setDwellings] = useState([]);

  useEffect(() => {
    const fetchDwellings = async () => {
      try {
        const response = await axios.get("https://dwello-backend.vercel.app/dwellings/");
        console.log(response)
        setDwellings(response.data.data);
      } catch (error) {
        console.error("Error fetching dwellings data:", error);
      }
    };

    fetchDwellings();
  }, []);

  return (
    <div className="bg-beige">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <h1 className="mb-10 mt-5 text-5xl font-bold tracking-tight text-amber-500 sm:text-6xl">
          Dwellings
        </h1>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          {dwellings.map((dwelling) => (
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
      </div>
    </div>
  );
};

export default Dwellings;

//  <div className="bg-beige">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="sr-only">Products</h2>
//         <h1 className="mb-10 mt-5 text-5xl font-bold tracking-tight text-amber-500 sm:text-6xl">
//           Dwellings
//         </h1>
//         <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
//           {properties.map((property) => (
//             <div
//               key={property.id}
//               className="bg-beige group relative flex flex-col overflow-hidden"
//             >
//               <div className="bg-beige aspect-h-2 aspect-w-3 mb-4 sm:aspect-none group-hover:opacity-80 sm:h-80">
//                 <img
//                   src={property.imageSrc}
//                   className="h-full w-full rounded-md object-cover object-center sm:h-full sm:w-full"
//                 />
//               </div>
//               <div className="bg-beige flex flex-1 flex-col space-y-2 rounded border border-amber-800 p-4">
//                 <h3 className="text-sm font-medium text-amber-800">
//                   <a href={property.href}>
//                     <span aria-hidden="true" className="absolute inset-0" />
//                     {property.name}
//                   </a>
//                 </h3>

//                 <div className="flex flex-1 flex-col justify-end">
//                   <p className="mb-4 text-sm italic text-gray-700">
//                     {property.options}
//                   </p>
//                   <p className="text-base font-medium text-amber-800">
//                     {property.price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
