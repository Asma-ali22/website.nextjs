
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className=" bg-green-200">
            


<div className="text-black flex  flex-col sm:flex-row justify-evenly items-center">
        <h1 className="text-2xl sm:text-4xl  hover:text-blue-400 cursor-pointer px-28 font-semibold">Rivo</h1>
       <ul className= 'flex flex-col sm:flex-row gap-4 px-3 px--2cursor-default scroll-px-14'>
        <li className="hover:text-blue-400 text-1xl"><a href="/Home">Home</a></li>
        <li className="hover:text-blue-400 text-1xl"><a href="/About">About</a></li>
        <li className="hover:text-blue-400 text-1xl"><Link href="/our products">shops</Link></li>
        <li className="hover:text-blue-400 text-1xl"><Link href="/contact us">Contact us</Link></li>
        <button className= "bg-gray-900 text-white text-1xl py-2 hover:text-blue-400 px-4">Login</button>
  
       </ul>
                </div>
                <div className="mt-20 mx-12 ">
                <section className=" gap-8 items-center grid md:grid-cols-2 sm:grid-cols-1">
        {/* Left side */}
        <div className="flex-1">
          <h1 className="font-bold lg:text-5xl md:text-2xl sm:text-1xl">Discover And <br/> Find Your Own <br/> Fashion</h1>
          <p className="text-lg text-gray-600 mt-2">
          fashion industry, multibillion-dollar global enterprise devoted to the business 
          of making and selling clothes. Some observers distinguish between the fashion industry
           <br/>There may appear to be differences between the expensive designer fashions shown on the runways of Paris or New York and the mass-produced sportswear and street styles sold in malls and markets around the  types of apparel (men’s, women’s, and children’s) <br/>from the most rarefied and expensive haute couture (literally, “high sewing”) and designer fashions to ordinary everyday clothing—from couture ball gowns to casual sweatpants.
            
          </p>
          <button className="bg-gray-900 text-white py-2 mt-4 px-4" >Explore Now</button>
        </div >

        {/* Right Side */}
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"className="flex-1 cursor-pointer hover:shadow-xl z-90">
           <Image width={1500} height={1500} src="/pic2.webp" alt="shoes"  /> 
        </div>
      </section>
                </div>

            </div>
        
    )
}
export default Navbar


