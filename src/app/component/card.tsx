import React from "react";
import Image from "next/image";

const Card=()=>{
    return(
  <main>
        
        <h1 className="text-4xl text-center text-green-500 mt-10">Designer Clothes For You</h1>
        <p className="mt-5 text-center text-black text-2xl">Here are Several desinger Clothes are Available</p>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1    justify-evenly gap-16 px-40 mt-10 items-center">
        <div>
            <Image width={1200}  height={800}src="/g17.jpg" alt="pic" className=" w-full max-w-xs mx-auto hover:translate-y-px"></Image>
        
        {/* text and button align */}
        <h3 className="text-center lg:text-2xl md:text-3xl sm:text-3xl font-semibold mt-2 px-4 ">Wedding wear</h3>
        <p className="mt-3 text-gray-900 leading-relaxed">Wedding dresses are required a high prestige among all the dresses. They are always made with the finest fabrics such as carmeuse, chiffon,
             organza, and tulle. The designer is always famous for his or her sense of style.</p>
 <button className="mt-5 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-solid bg-blue-700 hover:bg-gray-500">Visit us</button>
</div>

<div>
            <Image width={1200}  height={800}src="/g18.jpg" alt="pic" className="hover:translate-y-px w-full max-w-xs mx-auto"></Image>
         
        {/* text and button align */}
        <h3 className="text-center lg:text-2xl md:text-3xl sm:text-3xl font-semibold mt-2">Party Wear</h3>
        <p className="mt-3 text-gray-900 leading-relaxed">Party wear dresses are required a high prestige among all the dresses. They are always made with the finest fabrics such as carmeuse, chiffon,
             organza, and tulle. The designer is always famous for his or her sense of style.</p>
 <button className="mt-5 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-solid bg-blue-700 hover:bg-gray-500">Visit us</button>
</div>

<div>
            <Image width={1000}  height={700}src="/g19.jpg" alt="pic" className="hover:translate-y-px w-full max-w-xs mx-auto"></Image>
        
        {/* text and button align */}
        <h3 className="text-center lg:text-2xl md:text-3xl sm:text-3xl font-semibold mt-2">Formal wear</h3>
        <p className="mt-3 text-gray-900">Formal wear dresses are required a high prestige among all the dresses. They are always made with the finest fabrics such as carmeuse, chiffon,
             organza, and tulle. The designer is always famous for his or her sense of style.</p>
 <button className="mt-5 px-5 py-2.5 w-full rounded-lg text-white text-sm tracking-wider font-semibold border-spacing-2 outline-solid bg-blue-700 hover:bg-gray-500">Visit us</button>
</div>
</div>


    
    </main>
    )
} 
export default Card 