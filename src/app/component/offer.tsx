import React from "react";
import Image from "next/image";


const Offer=()=>{
    return(
  <div className=" bg-green-400  items-center">
  <div className="mt-20 mx-12">
                <section className=" gap-8 items-center grid md:grid-cols-2 sm:grid-cols-1">
        {/* Left side */}
    
        <div data-aos="fade-right"className="flex-1 cursor-pointer hover:shadow-xl z-90">
            <Image width={1500} height={1500} src="/g13.jpg" alt="shoes"  />  
        </div>
        {/* Right Side */}
    
        <div className="flex-1">
          <h1 className="font-bold lg:text-5xl md:text-3xl sm:text-2xl mt-3 ">Exclusive offer</h1>
          <p className="lg:text-lg md:text-2xl sm:text-1xl text-black mt-4">
          When it comes to offering exclusive discounts for customer acquisition, one of the 
          biggest benefits is increased customer loyalty. When customers feel that they are getting a special deal or treatment, they are more likely to return to your business again and again. By offering exclusive discounts, you are showing your customers that they are valued and appreciated. This sense of appreciation can foster a strong emotional connection between the customer
           and your business, which can result in repeat business anJd word-of-mouth referrals.
          </p>
          <div className="grid-cols-3 flex justify-evenly">
            <div className="bg-white w-20 h-15 text-center pt-1 mt-10 font-medium hover:bg-slate-400 cursor-pointer">24<br/>Hours</div>
            <div className="bg-white w-20 h-15 text-center pt-1 mt-10 font-medium  hover:bg-slate-400 cursor-pointer">20<br/>Minutes</div>
            <div className="bg-white w-20 h-15 text-center pt-1 mt-10 font-medium  hover:bg-slate-400 cursor-pointer">60<br/>Seconds</div>
            

          </div>
          <button className="bg-gray-900 text-white py-2 mt-6 px-6 hover:bg-slate-400" >Explore Now</button>
        </div>

        {/* Right Side */}
    
      </section>
                </div>
  </div>
    )
}
export default Offer