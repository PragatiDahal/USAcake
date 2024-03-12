import React from "react";
import logo from "../images/USAlogo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-1000"></div>
      <nav className="flex justify-between  bg-[#F4BBC9] px-10 h-16  text-white sticky top-0 z-20 font-poppins">
        <Link to="/" className="title size-10 m-4 font-bold">
          <img
            className="w-[55px] h-[45px] left-[115px] top-[5px] absolute"
            src={logo}
            alt="Logo"
          />
        </Link>
        <div className="w-[120px] h-[84px] left-[215px] top-[5px] absolute text-[#733D26] text-xl font-bold font-poppins">
          USA
          <br />
          CAKES
        </div>

        <ul>
          <li className="list-none w-[71px] h-[29px] left-[389px] top-[25px] absolute text-[#733D26] text-xl font-bold font-poppins">
            Cakes
          </li>
          <li className="list-none w-[124px] h-[29px] left-[537px] top-[25px] absolute text-yellow-900 text-xl font-bold font-poppins">
            Occasions
          </li>
        </ul>

        
      </nav>
    </>
  );
};

export default Navbar;
