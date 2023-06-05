import React from 'react'
import { Link } from "react-router-dom";
import '../fonts/fonts.css'


const Welcome = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center ">
        <video
          className="width"
          src="/videos/dwello welcome vid.mp4"
          autoPlay
          loop
          muted
        />
        <img
          className="neg-rem z-10 mb-12 block h-24 w-auto"
          src="/images/Logos/Dwello-white-logo.png"
          alt=""
        />
        <h2 className="aspekta neg-rem p-4 text-3xl  tracking-widest text-white max-sm:text-xl">
          WELCOME TO
        </h2>
        <h1 className="catchy-mager neg-rem text-10xl tracking-widest text-white subpixel-antialiased max-sm:text-7xl">
          Dwello
        </h1>
        <h2 className="aspekta relative  -top-16 text-4xl tracking-widest text-white max-sm:-top-10  max-sm:text-xl">
          Explore | Discover | Dream
        </h2>
        <div className="aspekta learn-more rounded-lg border p-3 px-10 text-xl tracking-widest text-white">
          <Link to="/dashboard" onClick={() => window.scrollTo(0, 0)}>LEARN MORE</Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome
