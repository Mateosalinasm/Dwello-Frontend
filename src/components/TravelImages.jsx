import { motion } from 'framer-motion'
const files = [
  {
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    source:
      "https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    source:
      "https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    source:
      "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function TravelImages() {
  return (
        <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 p-10 pt-20 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      <motion.li
        initial={{ y: "-10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="group aspect-h-16 aspect-w-10 block w-full overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
            alt=""
            className="pointer-events-none object-cover"
          />
        </div>
      </motion.li>
      <motion.li
        initial={{ y: "-10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="group aspect-h-16 aspect-w-10 block w-full overflow-hidden rounded-lg">
          <img
            src="https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="pointer-events-none object-cover"
          />
        </div>
      </motion.li>
      <motion.li
        initial={{ y: "-10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="group aspect-h-16 aspect-w-10 block w-full overflow-hidden rounded-lg">
          <img
            src="https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="pointer-events-none object-cover"
          />
        </div>
      </motion.li>
      <motion.li
        initial={{ y: "-10%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.9, duration: 0.6 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="group aspect-h-16 aspect-w-10 block w-full overflow-hidden rounded-lg">
          <img
            src="https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="pointer-events-none object-cover"
          />
        </div>
      </motion.li>
    </ul>
  );
}

      // <ul
    //   role="list"
    //   className="grid grid-cols-2 gap-x-4 gap-y-8 p-10 pt-20 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    // >
    //   {files.map((file, index) => (
    //     <motion.li
    //       initial={{ y: "-5%", opacity: 0 }}
    //       whileInView={{ y: 0, opacity: 1 }}
    //       transition={{ delay: 2.5 + index, duration: 0.6 }}
    //       viewport={{ once: true }}
    //       key={file.source}
    //       className="relative"
    //     >
    //       <div className="group aspect-h-16 aspect-w-10 block w-full overflow-hidden rounded-lg">
    //         <img
    //           src={file.source}
    //           alt=""
    //           className="pointer-events-none object-cover"
    //         />
    //       </div>
    //     </motion.li>
    //   ))}
    // </ul>