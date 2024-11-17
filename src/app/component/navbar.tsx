
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (


<div className="bg-green-200">
  {/* Navbar Section */}
  <div className="text-black flex flex-col sm:flex-row justify-between items-center py-4 px-6">
    {/* Logo */}
    <h1 className="sm:text-4xl md:text-3xl lg:text-5xl hover:text-blue-400 cursor-pointer font-semibold">
      Rivo
    </h1>

    {/* Navigation Links */}
    <ul className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 text-lg">
      <li className="hover:text-blue-400">
        <a href="/Home">Home</a>
      </li>
      <li className="hover:text-blue-400">
        <a href="/About">About</a>
      </li>
      <li className="hover:text-blue-400">
        <Link href="/our products">Shops</Link>
      </li>
      <li className="hover:text-blue-400">
        <Link href="/contact us">Contact Us</Link>
      </li>
    </ul>

    {/* Login Button */}
    <button className="bg-gray-900 text-white py-2 px-4 mt-4 sm:mt-0 sm:ml-4 hover:bg-gray-700">
      Login
    </button>
  </div>

  {/* Hero Section */}
  <div className="mt-10 mx-6">
    <section className="grid gap-8 items-center md:grid-cols-2 sm:grid-cols-1">
      {/* Left Side */}
      <div className="flex-1">
        <h1 className="font-bold lg:text-4xl md:text-3xl sm:text-2xl">
          Discover And <br /> Find Your Own <br /> Fashion
        </h1>
        <p className="text-base lg:text-lg text-gray-600 mt-4">
          The fashion industry is a multibillion-dollar global enterprise devoted to the business 
          of making and selling clothes. Some observers distinguish between the fashion industry. <br />
          There may appear to be differences between the expensive designer fashions shown on the 
          runways of Paris or New York and the mass-produced sportswear and street styles sold in malls 
          and markets around the world. From couture ball gowns to casual sweatpants.
        </p>
        <button className="bg-gray-900 text-white py-2 mt-6 px-6 hover:bg-gray-700">
          Explore Now
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-1 cursor-pointer hover:shadow-xl">
        <Image
          width={1500}
          height={1500}
          src="/pic2.webp"
          alt="Fashion display"
          className="rounded-lg"
        />
      </div>
    </section>
  </div>
</div>
        
    )
}
export default Navbar


