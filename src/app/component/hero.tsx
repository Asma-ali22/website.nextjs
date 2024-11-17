import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
//         

<div>
  {/* <!-- Heading Section --> */}
  <h1 className="text-center mt-14 font-bold text-green-500 lg:text-5xl md:text-4xl sm:text-3xl">
    Best Selling
  </h1>
  <h2 className="mt-8 text-center text-slate-950 lg:text-2xl md:text-xl sm:text-lg">
    A good product description starts with an attention-grabbing product title, <br />
    followed by a brief paragraph telling a story about a product's value
  </h2>

  {/* <!-- Product Grid --> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-evenly mt-10 px-4">
    {/* <!-- Product Card 1 --> */}
    <div className="flex flex-col items-center">
      <Image
        width={300}
        height={200}
        src="/b1.jpg"
        alt="background"
        className="hover:translate-x-2 w-full h-auto"
      />
      <p className="text-center text-lg md:text-xl mt-4">
        Dresses for Success:<br />Interview Outfit For Women
      </p>
      <button className="bg-slate-950 text-white px-6 py-2 mt-4 hover:bg-slate-400 w-full sm:w-auto">
        Order Now
      </button>
    </div>

    {/* <!-- Product Card 2 --> */}
    <div className="flex flex-col items-center">
      <Image
        width={300}
        height={200}
        src="/b2.jpg"
        alt="background"
        className="hover:translate-x-2 w-full h-auto"
      />
      <p className="text-center text-lg md:text-xl mt-4">
        Dresses for Success:<br />Interview Outfit For Women
      </p>
      <button className="bg-slate-950 text-white px-6 py-2 mt-4 hover:bg-slate-400 w-full sm:w-auto">
        Order Now
      </button>
    </div>

    {/* <!-- Product Card 3 --> */}
    <div className="flex flex-col items-center">
      <Image
        width={300}
        height={200}
        src="/b3.jpg"
        alt="background"
        className="hover:translate-x-2 w-full h-auto"
      />
      <p className="text-center text-lg md:text-xl mt-4">
        Dresses for Success:<br />Interview Outfit For Women
      </p>
      <button className="bg-slate-950 text-white px-6 py-2 mt-4 hover:bg-slate-400 w-full sm:w-auto">
        Order Now
      </button>
    </div>
  </div>
</div>
    )
}
export default Hero 