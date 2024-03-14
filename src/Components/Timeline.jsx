import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import logo from "../images/USAlogo1.png";

const Timeline = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="flex justify-center py-8 pt-10">
        <h1
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="text-2xl font-bold"
        >
          Timeline of our progress
        </h1>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="w-full max-w-[1440px] h-auto relative bg-white mx-auto"
      >
        <div className="w-1/50 h-full absolute bg-red-200 bg-opacity-60 left-[10%]" />
        <div className="w-1/4 h-0.25rem absolute bg-red-200 bg-opacity-60 left-[30%] top-[10%]" />
        <div className="w-1/4 h-0.25rem absolute bg-red-200 bg-opacity-60 left-[55%] top-[25%]" />
        <div className="w-1/4 h-0.25rem absolute bg-red-200 bg-opacity-60 left-[30%] top-[40%]" />
        <div className="w-1/4 h-0.25rem absolute bg-red-200 bg-opacity-60 left-[30%] top-[80%]" />
        <div className="w-1/4 h-0.25rem absolute bg-red-200 bg-opacity-60 left-[55%] top-[60%]" />
        <img
          className="w-20 h-20 absolute rounded-full left-[20%] top-[3%]"
          src={logo}
          alt="Logo"
        />
        <img
          className="w-20 h-20 absolute rounded-full left-[20%] top-[25%]"
          src={logo}
          alt="Logo"
        />
        <img
          className="w-20 h-20 absolute rounded-full left-[20%] top-[65%]"
          src={logo}
          alt="Logo"
        />
        <img
          className="w-20 h-20 absolute rounded-full left-[70%] top-[15%]"
          src={logo}
          alt="Logo"
        />
        <img
          className="w-20 h-20 absolute rounded-full left-[70%] top-[45%]"
          src={logo}
          alt="Logo"
        />
        <div className="absolute text-yellow-900 font-semibold font-poppins left-[35%] top-[1%]">
          2015
        </div>
        <div className="absolute text-yellow-900 font-semibold font-poppins left-[60%] top-[15%]">
          2017
        </div>
        <div className="absolute text-yellow-900 font-semibold font-poppins left-[35%] top-[30%]">
          2019
        </div>
        <div className="absolute text-yellow-900 font-semibold font-poppins left-[35%] top-[70%]">
          Today
        </div>
        <div className="absolute text-yellow-900 font-semibold font-poppins left-[60%] top-[50%]">
          2021
        </div>
        <div className="absolute text-yellow-900 font-semibold font-poppins left-[35%] top-[10%]">
          USA cake shop
        </div>
        <div className="absolute text-yellow-900 font-semibold font-poppins left-[65%] top-[20%]">
          2nd location
        </div>
        <div className="absolute text-yellow-900 font-semibold font-poppins left-[63%] top-[55%]">
          Best cake shop of Butwal.
        </div>
        <div className="absolute text-yellow-900 font-semibold font-poppins left-[35%] top-[80%]">
          Most popular and renowned cake shop with best customer services.
        </div>
        <div className="absolute text-yellow-900 font-semibold font-poppins left-[40%] top-[40%]">
          3rd location
        </div>
      </div>
    </>
  );
};

export default Timeline;
