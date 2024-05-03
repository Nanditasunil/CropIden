import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
import hero from "../assets/home.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-green-300 "
    >
      <div className="flex-1 flex items-center justify-center h-full bg-green-300 mr-22">
        {/* Circular image container with increased size */}
        <div className="w-84 h-84 rounded-full overflow-hidden md:w-80 md:h-80">
          <img src={hero} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Cropify!
              <br />
            </span>
            <span className="md:text-3xl text-2xl">
              Empowering Agriculture Through Computer Vision
            </span>
          </h1>
          <h4 className="md:text-1xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600 mr-12">
            Welcome to Cropify, where we harness the power of computer vision to
            revolutionize agricultural practices. Our innovative solution helps
            insurance companies assess risk with precision by recognizing
            various crops and providing insights into their growth stages.
          </h4>
          <Link
            to="module"
            duration={500}
            className="btn-primary mt-8 text-1xl "
            style={{ maxWidth: "250px" }}
          >
            Check Out the modules
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
