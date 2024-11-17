import React from "react";
import Image from "next/image";

const Card=()=>{
    return(
  <main>

     <h1 className="text-4xl lg:text-5xl md:text-4xl sm:text-3xl text-center text-green-500 mt-10">
  Designer Clothes For You
</h1>
<p className="mt-5 text-center text-black text-lg lg:text-2xl md:text-xl sm:text-lg">
  Here are Several Designer Clothes Available
</p>

<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 px-6 sm:px-16 md:px-32 lg:px-40 mt-10 items-start">
  {/* Wedding Wear */}
  <div className="bg-white shadow-lg rounded-lg p-4">
    <Image
      width={1200}
      height={800}
      src="/g17.jpg"
      alt="Wedding Wear"
      className="w-full max-w-xs mx-auto hover:translate-y-px transition-transform duration-300"
    />
    <h3 className="text-center text-xl lg:text-2xl font-semibold mt-4">Wedding Wear</h3>
    <p className="mt-3 text-gray-700 text-sm lg:text-base leading-relaxed">
      Wedding dresses are always made with the finest fabrics such as charmeuse, chiffon, organza, and tulle.
      The designer is famous for their exquisite sense of style.
    </p>
    <button className="mt-5 w-full px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-semibold bg-blue-700 hover:bg-gray-500 transition-all">
      Visit Us
    </button>
  </div>

  {/* Party Wear */}
  <div className="bg-white shadow-lg rounded-lg p-4">
    <Image
      width={1200}
      height={800}
      src="/g18.jpg"
      alt="Party Wear"
      className="w-full max-w-xs mx-auto hover:translate-y-px transition-transform duration-300"
    />
    <h3 className="text-center text-xl lg:text-2xl font-semibold mt-4">Party Wear</h3>
    <p className="mt-3 text-gray-700 text-sm lg:text-base leading-relaxed">
      Party wear dresses are crafted with fine fabrics such as charmeuse, chiffon, and tulle. Renowned for elegance
      and sophistication.
    </p>
    <button className="mt-5 w-full px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-semibold bg-blue-700 hover:bg-gray-500 transition-all">
      Visit Us
    </button>
  </div>

  {/* Formal Wear */}
  <div className="bg-white shadow-lg rounded-lg p-4">
    <Image
      width={1000}
      height={700}
      src="/g19.jpg"
      alt="Formal Wear"
      className="w-full max-w-xs mx-auto hover:translate-y-px transition-transform duration-300"
    />
    <h3 className="text-center text-xl lg:text-2xl font-semibold mt-4">Formal Wear</h3>
    <p className="mt-3 text-gray-700 text-sm lg:text-base leading-relaxed">
      Formal wear dresses are crafted with prestige using fine fabrics like charmeuse, chiffon, and tulle.
    </p>
    <button className="mt-5 w-full px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-semibold bg-blue-700 hover:bg-gray-500 transition-all">
      Visit Us
    </button>
  </div>
</div>

    </main>
    )
} 
export default Card 