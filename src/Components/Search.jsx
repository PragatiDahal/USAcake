import React from 'react'

const Search = () => {
  return (
    <>
    <section className=" flex felx-row flex-wrap pt-5 gap-8">
        <div className="flex items-center w-[450px] h-[45px] top-[45px] left-[205px] bg-white border-2 border-red-200 rounded-xl mx-5 ">
         <span className="text-base px-2">Search for cakes and bakeries?</span>
        </div>

        <div className="w-[250px] h-[45px] pt-2 px-12 bg-[#F4BBC9] bg-opacity-60 rounded-[30px] gap-8">
         <span className="text-base px-2"> Delivery Location</span>
        </div>

        <div className="w-[250px] h-[45px]  pt-2 px-12 bg-[#F4BBC9] bg-opacity-60 rounded-[30px] gap-8">
         <span className="text-bold px-2"> Call Us:</span>
         <span className="text-base">01011456</span>
        </div> 

    </section>
    </>
  )
}

export default Search