import React from 'react'

const Search = () => {
  return (
    <>
   <section className="flex flex-col md:flex-row flex-wrap pt-5 gap-8 justify-center items-center">
  
  <div className="flex items-center w-full md:w-[450px] h-[45px] md:top-[45px] md:left-[205px] bg-white border-2 border-red-200 rounded-xl mx-5">
    <span className="text-base px-2">Search for cakes and bakeries?</span>
  </div>

  <div className="w-full md:w-[250px] h-[45px] md:pt-2 md:px-12 bg-[#F4BBC9] rounded-[30px] my-2 md:my-0">
    <span className="text-base px-2">Delivery Location</span>
  </div>

  <div className="w-full md:w-[250px] h-[45px] md:pt-2 md:px-12 bg-[#F4BBC9] rounded-[30px] my-2 md:my-0">
    <span className="text-bold px-2">Call Us:</span>
    <span className="text-base">01011456</span>
  </div> 

</section>

    </>
  )
}

export default Search