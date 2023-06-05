import { useEffect, useState } from "react";

const Dwellings = () => {
  // const [dwellings, setDwellings] = useState([]);
  // // const dwellings = await prisma.property.findMany();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await prisma.property.findMany();
  //       const data = await response.json();
  //       setDwellings(data);
  //     } catch (error) {
  //       console.error("Error fetching dwellings data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <div>
      <h1>Dwellings</h1>
      <ul>
        {dwellings &&
          dwellings.map((dwelling) => (
            <li key={dwelling.id}>
              <h2>{dwelling.name}</h2>
              <p>{dwelling.description}</p>
              <img src={dwelling.imageSrc} alt={dwelling.name} />
            </li>
          ))}
      </ul>
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
