import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <div>
            <h1 className="text-center mt-14 font-bold lg:text-5xl md:text-3xl sm:text-2xl text-green-500">Best Selling</h1>
            <h2 className="lg:text-2xl md:text-1xl sm:text-1xl mt-8 text-center text-slate-950">A good product description starts with an attention-grabbing product title, <br />followed by a brief paragraph telling a story about a products value</h2>
            

<div className="lg:grid-cols-3 md:grid-rows-2 sm:grid-rows-1 flex justify-evenly">
  <div className="mt-10">
  <Image width={300} height={50} src="/b1.jpg" alt="background " className="hover:translate-x-2 data-aos=fade-right"></Image>
  <p className="text-xl mt-4 text-center" >Dresses for Success:<br/>Interview Outfit For Women</p>
  <button className="bg-slate-950 text-white px-3  hover:bg-slate-400 mt-5">Order Now</button>
  </div>
  
  <div className="mt-10">
  <Image width={500} height={300} src="/b2.jpg" alt="background" className="hover:translate-x-2"></Image>
  <p className="text-xl mt-4 text-center" >Dresses for Success:<br/>Interview Outfit For Women</p>
  <button className="bg-slate-950 text-white px-3 hover:bg-slate-400 mt-5">Order Now</button>
  
  </div>
  <div className="mt-10">
  <Image width={400} height={200} src="/b3.jpg" alt="background " className="hover:translate-x-2"></Image>
  <p className="text-xl mt-4 text-center" >Dresses for Success:<br/>Interview Outfit For Women</p>
  <button className="bg-slate-950 text-white px-3 hover:bg-slate-400 mt-5">Order Now</button>
  
  </div>


                </div>
                </div>
    )
}
export default Hero 