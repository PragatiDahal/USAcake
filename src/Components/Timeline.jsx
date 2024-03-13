import React from "react";
import logo from "../images/USAlogo.png";
const Timeline = () => {
  return (
    <>
      <section className="flex justify-center items-center mt-10 relative top-[100px] pt-5 mx-auto ">
        <div className="w-3.5 h-[705px] left-[666px] top-[9px] absolute bg-[#F4BBC9] bg-opacity-60" />
        <div className="w-[272px] h-3.5 left-[394px] top-[84px] absolute bg-[#F4BBC9] bg-opacity-60" />
        <div className="w-[272px] h-3.5 left-[680px] top-[208px] absolute bg-[#F4BBC9] bg-opacity-60" />
        <div className="w-[272px] h-3.5 left-[394px] top-[318px] absolute bg-[#F4BBC9] bg-opacity-60" />
        <div className="w-[272px] h-3.5 left-[394px] top-[634px] absolute bg-[#F4BBC9] bg-opacity-60" />
        <div className="w-[272px] h-3.5 left-[680px] top-[486px] absolute bg-[#F4BBC9] bg-opacity-60" />
        <img
          className="w-[126px] h-[126px] left-[268px] top-[28px] absolute rounded-full"
          src={logo}
        />
        <img
          className="w-[126px] h-[126px] left-[268px] top-[262px] absolute rounded-full"
          src={logo}
        />
        <img
          className="w-[126px] h-[126px] left-[268px] top-[575px] absolute rounded-full"
          src={logo}
        />
        <img
          className="w-[126px] h-[126px] left-[937px] top-[148px] absolute rounded-full"
          src={logo}
        />
        <img
          className="w-[126px] h-[126px] left-[937px] top-[423px] absolute rounded-full"
          src={logo}
        />
        <div className="w-[73px] h-[34px] left-[494px] top-[37px] absolute text-[#733D26] text-2xl font-semibold font-poppins">
          2015
        </div>
        <div className="w-[73px] h-[34px] left-[743px] top-[165px] absolute text-[#733D26] text-2xl font-semibold font-poppins">
          2017
        </div>
        <div className="w-[73px] h-[34px] left-[494px] top-[274px] absolute text-[#733D26] text-2xl font-semibold font-poppins">
          2019
        </div>
        <div className="w-[95px] h-[34px] left-[494px] top-[585px] absolute text-[#733D26] text-2xl font-semibold font-poppins">
          Today
        </div>
        <div className="w-[73px] h-[34px] left-[750px] top-[439px] absolute text-[#733D26] text-2xl font-semibold font-poppins">
          2021
        </div>
        <div className="w-[185px] h-[37px] left-[438px] top-[111px] absolute text-[#733D26] text-2xl font-semibold font-poppins">
          USA cake shop
        </div>
        <div className="w-[185px] h-[37px] left-[710px] top-[231px] absolute text-[#733D26] text-2xl font-semibold font-poppins">
          2nd location
        </div>
        <div className="w-[227px] h-[72px] left-[702px] top-[513px] absolute text-[#733D26] text-2xl font-semibold font-poppins">
          Best cake shop of Butwal.
        </div>
        <div className="w-[272px] h-36 left-[394px] top-[652px] absolute text-[#733D26] text-2xl font-semibold font-poppins">
          Most popular and renowned cake shop with best customer services.
        </div>
        <div className="w-[185px] h-[37px] left-[452px] top-[350px] absolute text-[#733D26] text-2xl font-semibold font-poppins">
          3rd location
        </div>
      </section>
    </>
  );
};

export default Timeline;
