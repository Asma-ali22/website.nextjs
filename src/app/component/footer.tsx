import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer=()=>{
    return(
        <>
        <div className="bg-green-400 h-1/2 flex md:flex-row mt-14 flex-col justify-around items-start p-20">
<div className="p-5">
    <ul>
        <p className="text-white font-bold text-3xl pb-6">
            Rivo<span className="text-blue-500">clothes</span>
        </p>
        <div className="flex gap-6 pb-5"> 
        <FaFacebookSquare  className="text-2xl cursor-pointer hover:text-yellow-200" />
         <FaInstagramSquare className="text-2xl cursor-pointer hover:text-yellow-200" />
         <FaLinkedin className="text-2xl cursor-pointer hover:text-yellow-200" />
        

        </div>
    </ul>

</div>
<div className="p-5">
    <ul>
    <p className="text-white font-bold text-2xl pb-4">Product</p>
    <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">Stocks</li>
    <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">future funds</li>
    <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">Mutual funds</li>
    <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">Fixed deposit</li>
    
        </ul>
</div>
<div className="p-5">
    <ul>
        <p className="text-white font-bold text-2xl pb-4">Company</p>
        <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">About</li>
        <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">Product</li>
        <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">Stocks</li>
        <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">Stocks</li>
        <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">Stocks</li>

    </ul>
</div>
   <div className="p-5">
    <ul>
    <p className="text-white font-bold text-2xl pb-4">Support</p>
    <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">Contact</li>
    <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">Suport port</li>
    <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">List of chart</li>
    <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">Downloads</li>
    <li className="text-white text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">Videos</li>
    
    </ul>
   </div>
    </div>
    
     <div className="flex flex-col justify-center items-center text-center p-5 bg-black">
   <h1 className="text-white font-semibold hover:text-blue-500">
    2023-2024 All right reserved
    <span className="hover:text-white font-semibold cursor-pointer">
        

    </span>{ " "}
   </h1>
     </div> 
    
    </>

    )
}
export default Footer