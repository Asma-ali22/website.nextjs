import React from "react"

const FeedBack=()=>{
    return(
    
   //    
   <div className="mt-20">
   {/* Section Title */}
   <h1 className="text-2xl sm:text-3xl lg:text-4xl text-green-600 text-center font-bold mb-10">
     Feedback Corner
   </h1>
 
   {/* Feedback Cards */}
   <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 px-6 sm:px-10 md:px-20 lg:px-40">
     {/* Feedback 1 */}
     <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
       <h1 className="text-xl sm:text-2xl text-center font-bold mb-4">Micheal John</h1>
       <p className="text-gray-900 hover:bg-blue-100 p-4 rounded-md text-sm sm:text-base leading-relaxed transition-all duration-300">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem inventore illum fugiat sit velit soluta doloremque unde accusamus ipsum aspernatur!
       </p>
     </div>
 
     {/* Feedback 2 */}
     <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
       <h1 className="text-xl sm:text-2xl text-center font-bold mb-4">Micheal John</h1>
       <p className="text-gray-900 hover:bg-blue-100 p-4 rounded-md text-sm sm:text-base leading-relaxed transition-all duration-300">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem inventore illum fugiat sit velit soluta doloremque unde accusamus ipsum aspernatur!
       </p>
     </div>
 
     {/* Feedback 3 */}
     <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
       <h1 className="text-xl sm:text-2xl text-center font-bold mb-4">Micheal John</h1>
       <p className="text-gray-900 hover:bg-blue-100 p-4 rounded-md text-sm sm:text-base leading-relaxed transition-all duration-300">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem inventore illum fugiat sit velit soluta doloremque unde accusamus ipsum aspernatur! Possimus!
       </p>
     </div>
   </div>
 </div>
 

    )
}
export default FeedBack