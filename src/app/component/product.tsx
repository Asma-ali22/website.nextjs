 import React from "react";
import Link from "next/link";
import Image from "next/image";

const Product=()=>{
    return(
 

<div>

    <h1 className="text-5xl text-center mt-12 text-green-600">our products</h1>
    <div className="text-black flex flex-col justify-evenly items-center text-decoration-line: underline">
    
       <ul className= 'flex flex-col sm:flex-row gap-4 px-3 cursor-default scroll-px-14 mt-5'>
        <li className="hover:text-blue-400 text-2xl"><Link href="/ Home">Sale</Link></li>
        <li className="hover:text-blue-400 text-2xl"><Link href="/ about">Home</Link></li>
        <li className="hover:text-blue-400 text-2xl"><Link href="/ our products">Accessories</Link></li>
        <li className="hover:text-blue-400 text-2xl"><Link href="/ contact us">Ready to wear</Link></li>
       </ul>
</div>

<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   justify-evenly mt-20 px-40 ">
    <div >
        <Image width={200} height={200} src="/g1.jpg" alt="pic" className="hover:translate-x-3 w-full max-w-xs mx-auto"></Image>
        <p className="text-xl text-center mt-2">Casual style shirt</p>
        <button className="bg-blue-500 text-black flex items-center justify-center w-full max-w-xs mx-auto mt-2 py-2">buy now</button>
    </div>
    <div>
    <Image width={200} height={200} src="/g9.jpeg" alt="pic" className="hover:-translate-x-3 w-full max-w-xs mx-auto"></Image>
    <p className="text-xl text-center mt-2">Casual style shirt</p>
        <button className="bg-blue-500 text-black flex items-center justify-center w-full max-w-xs mx-auto mt-2 py-2">buy now</button>
    </div>
    <div>
    <Image width={200} height={200} src="/g3.webp" alt="pic" className="hover:translate-x-3 w-full max-w-xs mx-auto"></Image>
    <p className="text-xl text-center mt-2">Casual style shirt</p>
        <button className="bg-blue-500 text-black flex items-center justify-center w-full max-w-xs mx-auto mt-2 py-2">buy now</button>
    </div>
    <div>
    <Image width={200} height={200} src="/g12.webp" alt="pic"className="hover:translate-x-3 w-full max-w-xs mx-auto"></Image>
    <p className="text-xl text-center mt-2">Casual style shirt</p>
        <button className="bg-blue-500 text-black flex items-center justify-center w-full max-w-xs mx-auto mt-2 py-2">buy now</button>
    </div>

</div>
<div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  justify-evenly mt-20 px-40">
<div >
        <Image width={150} height={200} src="/g5.jpeg" alt="pic" className="hover:-translate-y-3  w-full max-w-xs mx-auto"></Image>
        <p className="text-xl text-center mt-2">Casual skirt style shirt</p>
        <button className="bg-blue-500 text-black flex items-center justify-center w-full max-w-xs mx-auto mt-2 py-2">buy now</button>
    </div>
    <div >
        <Image width={150} height={200} src="/g6.jpg" alt="pic" className="hover:-translate-y-3  w-full max-w-xs mx-auto"></Image>
        <p className=" text-xl text-center mt-2">Casual skirt style shirt</p>
        
        <button className="bg-blue-500 text-black flex items-center justify-center w-full max-w-xs mx-auto mt-2 py-2">buy now</button>
    </div>

    <div >
        <Image width={150} height={200} src="/g7.png" alt="pic" className="hover:-translate-y-3  w-full max-w-xs mx-auto"></Image>
        <p className="text-xl text-center mt-2">Casual  skirt style shirt</p>
        <button className="bg-blue-500 text-black flex items-center justify-center w-full max-w-xs mx-auto mt-2 py-2">buy now</button>
    </div>

    <div >
        <Image width={150} height={200} src="/g8.jpg" alt="pic" className="hover:-translate-y-3  w-full max-w-xs mx-auto"></Image>
        <p className="text-xl text-center mt-2">Casual skirt style shirt</p>
        <button className="bg-blue-500 text-black flex items-center justify-center w-full max-w-xs mx-auto mt-2 py-2">buy now</button>
    </div>

</div>

</div>



    )
}
     
export default Product