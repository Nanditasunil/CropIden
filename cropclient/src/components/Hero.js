import React from "react";
import { Link } from "react-scroll";
import hero from "../assets/home1.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-green-400"
    >
      <div className="flex-1 flex items-center justify-center h-full bg-green-400 mr-42">
        {/* Image container */}
        <div className="w-1496 h-1496  overflow-hidden md:w-680 md:h-680 pl-20">
          <img src={hero} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex-1 md:pl-20">
        {/* Content shifted to the left */}
        <div className="md:text-left text-center pr-20">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-green-800 md:text-7xl text-5xl">
              Introducing CropPal!
              <br />
            </span>
            <span className="md:text-3xl text-2xl">
              "Empowering Agriculture Through Computer Vision"
            </span>
          </h1>
          <h4 className="md:text-1xl text-xl md:leading-normal leading-5 mt-4 font-bold text-green-900 mr-12">
            Welcome to CropPal, where we harness the power of computer vision to
            revolutionize agricultural practices. Our innovative solution helps
            insurance companies assess risk with precision by recognizing
            various crops and providing insights into their growth stages.
          </h4>
          <Link
            to="module"
            duration={500}
            className="btn-primary mt-8 text-xl"
            style={{ maxWidth: "300px" }}
          >
            Check Out the Modules
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
