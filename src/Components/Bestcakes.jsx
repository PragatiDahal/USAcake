import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Bestcakes = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
     <div className="flex justify-center py-8 pt-10">
        <h1  data-aos="zoom-in" data-aos-duration="2000" className="text-2xl font-bold"> BEST SELLER CAKES</h1>
      </div>
    <div data-aos="fade-up" data-aos-duration="2000" className='flex flex-row gap-4 flex-wrap justify-center items-center pt-8'>
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:bg-red-200">
  <div 
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 ">
    <img  className="transition ease-in-out delay-150  hover:scale-110  duration-1000"
      src="https://i.pinimg.com/564x/af/e8/a0/afe8a0ce6eaee8a7bb59e4fde73b951e.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Chocolate Truffle Cake
    </h5>
  </div>
  </div>
  
  <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:bg-red-200">
  <div 
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 ">
    <img className="transition ease-in-out delay-150  hover:scale-110  duration-1000"
      src="https://i.pinimg.com/564x/9b/5e/7e/9b5e7e4444c6f1099cc7d95fea09cd24.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Almond Coconut Cake
    </h5>
  </div>
  </div>

  <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:bg-red-200">
  <div 
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img className="transition ease-in-out delay-150  hover:scale-110  duration-1000"
      src="https://i.pinimg.com/564x/00/16/05/0016056d7157f0e1e2b0da4336f160fe.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Themes Cake
    </h5>
  </div>
  </div>

  <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:bg-red-200">
  <div 
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img  className="transition ease-in-out delay-150  hover:scale-110  duration-1000"
      src="https://i.pinimg.com/564x/e5/d6/c2/e5d6c28ce54d52ee0aa0ea60ae8b0f88.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Strawberry Cake
    </h5>
  </div>
  </div>

  <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:bg-red-200">
  <div 
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img  className="transition ease-in-out delay-150  hover:scale-110  duration-1000"
      src="https://i.pinimg.com/736x/7e/85/6f/7e856f328480e27136b929903f421d12.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Oreo Cheese Cake
    </h5>
  </div>
  </div>

  <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:bg-red-200">
  <div 
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 ">
    <img className="transition ease-in-out delay-150  hover:scale-110  duration-1000"
      src="https://i.pinimg.com/564x/31/b5/f3/31b5f3244fc22aa954dcc2134b8be91b.jpg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Chocolate Mini Cakes
    </h5>
  </div>
  </div>
  </div>
<div className="mt-4">
  <button data-aos="fade-up" data-aos-duration="2000" className="w-[150px] h-[45px] left-[500px] bg-[#F4BBC9] hover:bg-red-500 text-base font-bold text-[#733D26] mx-auto rounded-xl block ">
     View all
    </button>
    </div>
</>
  )
}

export default Bestcakes