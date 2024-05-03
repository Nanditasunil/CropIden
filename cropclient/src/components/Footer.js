import React from "react";
import logo from "../assets/home.jpg";
import navIcon1 from "../assets/home.jpg";
import navIcon2 from "../assets/home.jpg";
import navIcon3 from "../assets/home.jpg";

const Footer = () => {
  return (
    <footer className="footer bg-green-800 text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/6">
            <h4 className="text-4xl uppercase font-bold">
              Cro<span className="text-green-500">pi</span>fy
            </h4>
          </div>
          <div className="lg:w-1/6 text-center lg:text-right">
            <p className="text-sm">&copy;Copyright 2024. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
